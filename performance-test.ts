
import fs from 'fs-extra';
import { glob } from 'glob';
import path from 'path';
import { launch } from 'chrome-launcher';
// @ts-ignore
import lighthouse from 'lighthouse';
import { URL } from 'url';

// --- Configuration ---

const OUTPUT_DIR = './lighthouse-reports';
const REPORT_FILENAME = 'performance-report.md';
const DESKTOP_CONFIG = {
    extends: 'lighthouse:default',
    settings: {
        formFactor: 'desktop',
        screenEmulation: {
            mobile: false,
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
            disabled: false,
        },
        throttling: {
            rttMs: 40,
            throughputKbps: 10 * 1024,
            cpuSlowdownMultiplier: 1,
            requestLatencyMs: 0,
            downloadThroughputKbps: 0,
            uploadThroughputKbps: 0,
        },
    },
};

const MOBILE_CONFIG = {
    extends: 'lighthouse:default',
    settings: {
        formFactor: 'mobile',
        screenEmulation: {
            mobile: true,
            width: 375,
            height: 667,
            deviceScaleFactor: 2,
            disabled: false,
        },
        throttling: {
            rttMs: 150,
            throughputKbps: 1.6 * 1024,
            requestLatencyMs: 150 * 3.75, // 562.5ms equivalent to slow 4g roughly
            downloadThroughputKbps: 1.6 * 1024 * 0.9,
            uploadThroughputKbps: 750 * 0.9,
            cpuSlowdownMultiplier: 4,
        },
    },
};

interface TestResult {
    url: string;
    device: 'desktop' | 'mobile';
    scores: {
        performance: number;
        accessibility: number;
        bestPractices: number;
        seo: number;
    };
    metrics: {
        lcp: string;
        fcp: string;
        cls: string;
        tti: string;
        tbt: string;
        si: string;
    };
    resourceSummary: {
        script: number;
        css: number;
        image: number;
        total: number;
        requests: number;
    };
    issues: string[];
}

// --- Helpers ---

// Get base URL from args or default to localhost
const getBaseUrl = (): string => {
    const urlArg = process.argv.find(arg => arg.startsWith('--url='));
    if (urlArg) return urlArg.split('=')[1];
    return process.env.BASE_URL || 'http://localhost:3000';
};

// Discover pages from app directory
const discoverPages = async (): Promise<string[]> => {
    const appDir = path.join(process.cwd(), 'app');
    const pages: string[] = ['/'];

    if (await fs.pathExists(appDir)) {
        const files = glob.sync('**/page.{tsx,ts,jsx,js}', { cwd: appDir });
        files.forEach(file => {
            const route = path.dirname(file);
            // Skip dynamic routes for now as we can't easily guess params without a sitemap or config
            if (!route.includes('[') && route !== '.') {
                pages.push('/' + route);
            }
        });
    }

    // Basic Sitemap check (optional enhancement)
    const publicSitemap = path.join(process.cwd(), 'public', 'sitemap.xml');
    if (await fs.pathExists(publicSitemap)) {
        console.log('⚠️ Sitemap discovery not fully implemented (using static scan).');
    }

    return [...new Set(pages)];
};

// Formatter helpers
const scoreToEmoji = (score: number) => {
    if (score >= 0.9) return '🟢';
    if (score >= 0.5) return '🟡';
    return '🔴';
};

const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

// --- Main Execution ---

async function runLighthouse(url: string, config: any, device: 'desktop' | 'mobile'): Promise<TestResult> {
    const chrome = await launch({ chromeFlags: ['--headless'] });
    const options = { logLevel: 'error' as const, output: 'json' as const, onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'], port: chrome.port };

    const runnerResult = await lighthouse(url, options, config);
    if (!runnerResult) throw new Error('Lighthouse returned no result');

    const report = JSON.parse(runnerResult.report as string);

    await chrome.kill();

    // Save raw report
    const filename = `${url.replace(/[^a-z0-9]/gi, '_')}-${device}.json`;
    await fs.ensureDir(OUTPUT_DIR);
    await fs.writeJson(path.join(OUTPUT_DIR, filename), report);

    // Extract Audits
    const audits = report.audits;
    const categories = report.categories;

    // Resource analysis
    const resourceItems = audits['resource-summary']?.details?.items || [];
    const getResourceSize = (label: string) => resourceItems.find((i: any) => i.label === label)?.transferSize || 0;

    const issues: string[] = [];

    // Check for large images
    const largeImages = audits['modern-image-formats']?.details?.items || [];
    if (largeImages.length > 0) {
        issues.push(`⚠️ وجدنا ${largeImages.length} صور يمكن تحسينها باستخدام صيغ حديثة (WebP/AVIF).`);
    }

    // Unused JS
    const unusedJs = audits['unused-javascript']?.details?.items || [];
    if (unusedJs.length > 0) {
        issues.push(`⚠️ هناك ${unusedJs.length} ملفات JavaScript تحتوي على كود غير مستخدم.`);
    }

    // Unused CSS
    const unusedCss = audits['unused-css-rules']?.details?.items || [];
    if (unusedCss.length > 0) {
        issues.push(`⚠️ هناك ${unusedCss.length} ملفات CSS تحتوي على قواعد غير مستخدمة.`);
    }


    return {
        url,
        device,
        scores: {
            performance: categories.performance.score,
            accessibility: categories.accessibility.score,
            bestPractices: categories['best-practices'].score,
            seo: categories.seo.score,
        },
        metrics: {
            lcp: audits['largest-contentful-paint'].displayValue,
            fcp: audits['first-contentful-paint'].displayValue,
            cls: audits['cumulative-layout-shift'].displayValue,
            tti: audits['interactive'].displayValue,
            tbt: audits['total-blocking-time'].displayValue,
            si: audits['speed-index'].displayValue,
        },
        resourceSummary: {
            script: getResourceSize('script'),
            css: getResourceSize('stylesheet'),
            image: getResourceSize('image'),
            total: getResourceSize('total'),
            requests: resourceItems.find((i: any) => i.label === 'total')?.requestCount || 0
        },
        issues
    };
}

async function generateMarkdownReport(results: TestResult[], totalTime: number) {
    let md = `# 🚀 تقرير أداء Next.js الشامل\n\n`;

    // 7. Technical Summary (Moved up for context)
    md += `## 📋 ملخص تقني\n`;
    md += `- **تاريخ الاختبار:** ${new Date().toLocaleString('ar-SA')}\n`;
    md += `- **النظام:** Node.js ${process.version}\n`;
    md += `- **الرابط المستهدف:** ${results[0]?.url || 'Unknown'}\n`;
    md += `- **عدد الصفحات المختبرة:** ${results.length / 2}\n`;
    md += `- **وقت الاختبار:** ${(totalTime / 1000).toFixed(2)} ثانية\n\n`;

    // 1. Executive Summary
    const avgPerf = results.reduce((acc, r) => acc + r.scores.performance, 0) / results.length;
    const avgSeo = results.reduce((acc, r) => acc + r.scores.seo, 0) / results.length;

    md += `## 📊 النظرة العامة (Executive Summary)\n`;
    md += `متوسط الأداء العام للموقع:\n\n`;
    md += `| المقياس | النتيجة | التقييم |\n|---|---|---|\n`;
    md += `| **Performance** | ${(avgPerf * 100).toFixed(0)}% | ${scoreToEmoji(avgPerf)} |\n`;
    md += `| **SEO** | ${(avgSeo * 100).toFixed(0)}% | ${scoreToEmoji(avgSeo)} |\n\n`;

    // 3. Desktop vs Mobile Comparison
    md += `## 📱 مقارنة الأداء (Desktop vs Mobile)\n`;
    md += `| الصفحة | Desktop Perf | Mobile Perf | LCP (Mob) | CLS (Mob) |\n|---|---|---|---|---|\n`;

    // Group by URL
    const pages = [...new Set(results.map(r => r.url))];
    pages.forEach(url => {
        const desktop = results.find(r => r.url === url && r.device === 'desktop');
        const mobile = results.find(r => r.url === url && r.device === 'mobile');
        if (desktop && mobile) {
            md += `| \`${url.replace(getBaseUrl(), '') || '/'}\` | ${scoreToEmoji(desktop.scores.performance)} ${(desktop.scores.performance * 100).toFixed(0)}% | ${scoreToEmoji(mobile.scores.performance)} ${(mobile.scores.performance * 100).toFixed(0)}% | ${mobile.metrics.lcp} | ${mobile.metrics.cls} |\n`;
        }
    });
    md += `\n`;

    // 2. Detailed Report
    md += `## 📝 التقرير التفصيلي لكل صفحة\n`;

    pages.forEach(url => {
        const mobile = results.find(r => r.url === url && r.device === 'mobile');
        if (!mobile) return; // Should not happen

        md += `\n### 📄 الصفحة: \`${url}\`\n`;
        md += `**Mobile Core Web Vitals:**\n`;
        md += `- **Performance:** ${scoreToEmoji(mobile.scores.performance)} ${(mobile.scores.performance * 100).toFixed(0)}%\n`;
        md += `- **LCP:** ${mobile.metrics.lcp}\n`;
        md += `- **FCP:** ${mobile.metrics.fcp}\n`;
        md += `- **CLS:** ${mobile.metrics.cls}\n`;
        md += `- **TBT:** ${mobile.metrics.tbt}\n`;

        if (mobile.issues.length > 0) {
            md += `\n**⚠️ أبرز المشاكل المكتشفة:**\n`;
            mobile.issues.forEach(issue => md += `- ${issue}\n`);
        }

        md += `\n---\n`;
    });

    // 4. Resource Analysis
    const totalJs = results.filter(r => r.device === 'mobile').reduce((acc, r) => acc + r.resourceSummary.script, 0);
    const totalImg = results.filter(r => r.device === 'mobile').reduce((acc, r) => acc + r.resourceSummary.image, 0);

    md += `## 📦 تحليل الموارد (Mobile Aggregate)\n`;
    md += `- **إجمالي حجم JavaScript:** ${formatBytes(totalJs)}\n`;
    md += `- **إجمالي حجم الصور:** ${formatBytes(totalImg)}\n`;

    // 6. Action Plan
    md += `\n## 🛠️ خطة العمل (Action Plan)\n`;
    md += `1. **تحسين الصور:** تأكد من استخدام \`next/image\` في جميع الصفحات التي أظهرت مشاكل في الصور.\n`;
    md += `2. **تحليل JavaScript:** الأحجام كبيرة في بعض الصفحات، حاول استخدام Dynamic Imports للمكونات الثقيلة.\n`;
    md += `3. **LCP التحسين:** إذا كان LCP عالي، تأكد من تحميل عنصر LCP بشكل مسبق (preload) أو تحسين استجابة السيرفر.\n`;

    await fs.writeFile(REPORT_FILENAME, md);
    console.log(`\n✅ تم حفظ التقرير بنجاح في: ${REPORT_FILENAME}`);
}

async function main() {
    const baseUrl = getBaseUrl();
    console.log(`🚀 Starting Performance Test on: ${baseUrl}`);
    console.log(`🔎 Discovering pages...`);

    const pages = await discoverPages();
    console.log(`Found ${pages.length} pages: ${pages.join(', ')}`);

    const results: TestResult[] = [];
    const startTime = Date.now();

    for (const page of pages) {
        const url = new URL(page, baseUrl).toString();

        // Desktop
        console.log(`\n🖥️  Testing Desktop: ${page}...`);
        try {
            const desktopRes = await runLighthouse(url, DESKTOP_CONFIG, 'desktop');
            results.push(desktopRes);
            console.log(`   Score: ${(desktopRes.scores.performance * 100).toFixed(0)}%`);
        } catch (e) {
            console.error(`❌ Failed Desktop test for ${page}:`, e);
        }

        // Mobile
        console.log(`📱 Testing Mobile:  ${page}...`);
        try {
            const mobileRes = await runLighthouse(url, MOBILE_CONFIG, 'mobile');
            results.push(mobileRes);
            console.log(`   Score: ${(mobileRes.scores.performance * 100).toFixed(0)}%`);
        } catch (e) {
            console.error(`❌ Failed Mobile test for ${page}:`, e);
        }
    }

    console.log(`\n📊 Generating Report...`);
    await generateMarkdownReport(results, Date.now() - startTime);
}

main().catch(console.error);

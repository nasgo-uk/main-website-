// @ts-nocheck

import fs from 'fs';
import path from 'path';

const reportPath = path.join(process.cwd(), 'lighthouse-reports', 'http___localhost_3002_-mobile.json');

try {
    const rawData = fs.readFileSync(reportPath, 'utf-8');
    const report = JSON.parse(rawData);

    // 1. Network Waterfall Analysis
    const requests = report.audits['network-requests'].details.items;
    const requestsByType = {};
    let totalTransfer = 0;
    const largeChunks: any[] = [];

    requests.forEach(req => {
        // Group by type
        const type = req.resourceType || 'Other';
        if (!requestsByType[type]) requestsByType[type] = { count: 0, size: 0 };
        requestsByType[type].count++;
        requestsByType[type].size += req.transferSize;
        totalTransfer += req.transferSize;

        // Check for large chunks (> 50KB)
        if (req.transferSize > 50 * 1024) {
            largeChunks.push({
                url: req.url.split('/').pop().slice(0, 50), // Truncate long URLs
                sizeKB: (req.transferSize / 1024).toFixed(2),
                type: type
            });
        }
    });

    console.log('--- Network Analysis ---');
    console.log(`Total Requests: ${requests.length}`);
    console.log(`Total Transfer: ${(totalTransfer / 1024).toFixed(2)} KB`);
    console.table(requestsByType);
    console.log('\n--- Large Chunks (>50KB) ---');
    console.table(largeChunks);

    // 2. Image Detailed Report
    const optimizedImages = report.audits['modern-image-formats'].details?.items || [];
    const sizedImages = report.audits['properly-size-images'].details?.items || [];

    // Combine these (imperfectly, but good enough for listing)
    const imageIssues = [...optimizedImages, ...sizedImages].map(img => ({
        url: img.url,
        currentSize: (img.resourceSize || 0) / 1024,
        savings: (img.wastedBytes || 0) / 1024
    })).filter(img => img.savings > 0);

    // Deduplicate by URL
    const uniqueImages = Array.from(new Set(imageIssues.map(i => i.url)))
        .map(url => imageIssues.find(i => i.url === url));

    console.log('\n--- Image Optimization Opportunities ---');
    uniqueImages.forEach(img => {
        console.log(`Image: ${img.url.split('/').pop()}`);
        console.log(`  Current: ${img.currentSize.toFixed(2)} KB`);
        console.log(`  Potential Savings: ${img.savings.toFixed(2)} KB`);
    });

    // 3. Third-Party Scripts
    const thirdParty = report.audits['third-party-summary'].details?.items || [];
    console.log('\n--- Third-Party Scripts ---');
    thirdParty.forEach(tp => {
        console.log(`Entity: ${tp.entity.text}`);
        console.log(`  Transfer: ${(tp.transferSize / 1024).toFixed(2)} KB`);
        console.log(`  Main Thread Blocking: ${tp.blockingTime.toFixed(2)} ms`);
    });

} catch (error) {
    console.error('Error parsing report:', error);
}

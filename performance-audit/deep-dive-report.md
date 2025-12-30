# Deep Dive Performance Analysis

This document complements the main `performance-report.md` with granular technical data requested for advanced optimization.

## 1. Bundle Deep Dive
**Build Analysis:**
- All pages (`/`, `/about`, `/companies`, etc.) are **Static (○)**. This is the optimal state for Next.js, ensuring instant TTFB (Time To First Byte).
- **First Load JS:** The core shared bundle is effective.
- **Top Large Chunks (Network Transfer):**
  1. `Google Analytics (G-GB92CZR1KF)`: **130.03 KB** (External)
  2. `iframe.js`: **90.14 KB** (Likely Dev/Embed)
  3. `Framework/Main Chunk`: **61.42 KB** (Core App)

**Finding:** The application code itself is lean (< 70KB main chunk). The majority of the "bloat" comes from external scripts (Analytics).

## 2. Network Waterfall Statistics (Homepage/Mobile)
- **Total Requests:** 39
- **Total Transfer Size:** ~733 KB

| Resource Type | Count | Size (KB) | % of Total |
|---------------|-------|-----------|------------|
| Script        | 18    | 565.19    | **77%**    |
| Font          | 3     | 64.99     | 9%         |
| Image         | 2     | 58.96     | 8%         |
| Document      | 2     | 15.77     | 2%         |
| Stylesheet    | 1     | 13.37     | 2%         |

**Analysis:** Scripts dominate the waterfall. Reducing the number of external scripts or lazy-loading them further is the only way to significantly drop the page weight.

## 3. Component Analysis ("Use Client")
We scanned the codebase and found extensive usage of `"use client"`.
- **Affected Files:** `Navbar.tsx`, `Footer.tsx`, `Hero.tsx`, `Screenshots.tsx`, and almost all pages in `app/*`.
- **Optimization:**
  - **`app/companies/page.tsx`**: This is a large page strictly rendered on the client. **Recommendation:** Refactor to move the static list of companies/features to a Server Component and only hydrate the interactive toggles or modals.
  - **`app/terms/page.tsx`**: Likely contains static text but is marked "use client". **Recommendation:** Remove "use client" if it has no interactivity.

## 4. Image Detailed Report
**Automated Check (Lighthouse):**
- Lighthouse **passed** the image audits. This indicates that the images currently served (even via `<img>`) are not aggressively mismatched in size or format for the test device, OR they are lazily loaded effectively by the browser native behavior.

**Static Code Check:**
- `components/Navbar.tsx`: Uses `<img>` for logo.
- `components/Footer.tsx`: Uses `<img>` for logo.
- **Potential Savings:** While Lighthouse didn't flag them as critical errors, converting these to `next/image` ensures future-proofing against Layout Shifts (CLS) and automatic WebP/AVIF serving for all users.
- **Recommendation:** Stick to the Action Items plan to replace these.

## 5. Third-Party Scripts
- **Major Script:** Google Analytics/Tag Manager.
- **Performance Impact:**
  - **Transfer:** 130 KB
  - **Main Thread Blocking:** ~3ms (Negligible)
- **Verdict:** The script is loading asynchronously and **not** blocking the main thread. No immediate action needed unless "Total Bytes" is a strict KPI.

## Summary & Recommendations
The "Deep Dive" confirms the high-level scores. The application is well-tuned.
1. **Refactor `app/terms` and `app/privacy`**: Remove `"use client"` if possible.
2. **Accept the Analytics Cost**: 130KB is standard for GA4.
3. **Monitor `iframe.js`**: Verify if this exists in Production or if it's a dev-only artifact (Next.js/Vercel toolbar). If it's in prod, investigate its source.

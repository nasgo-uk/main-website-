# Prioritized Action Items

## 🔴 Critical / High Priority

### 1. Optimize Image Loading (Navbar)
- **Location:** `components/Navbar.tsx`
- **Issue:** Logo uses standard `<img>` tag. This is LCP element on many pages.
- **Action:**
  ```tsx
  import Image from 'next/image';
  // ...
  <Image 
    src={logoSrc} 
    alt="Nasgo Logo" 
    width={40} 
    height={40} 
    priority 
    className="h-10 w-auto object-contain"
  />
  ```

### 2. Optimize Image Loading (Footer)
- **Location:** `components/Footer.tsx`
- **Issue:** Brand logo in footer uses `<img>`.
- **Action:** Replace with `next/image`.

### 3. Optimize Feature Images (Companies Page)
- **Location:** `app/companies/page.tsx`
- **Issue:** Large feature screenshots are loaded via `<img>`.
- **Action:** Replace with `next/image` to leverage automatic WebP conversion and lazy loading.

## 🟡 Medium Priority

### 4. Enable Bundle Analysis in CI/CD
- **Action:** Ensure `ANALYZE=true` can be run in your build pipeline to catch regressions.

### 5. Review Framer Motion Usage
- **Location:** Global
- **Action:** Consider using `LazyMotion` if bundle size grows large. Currently acceptable.

## ⚪ Low Priority

### 6. Accessibility Tweak
- **Action:** Ensure all `Image` components have descriptive `alt` text. (Currently looks good).

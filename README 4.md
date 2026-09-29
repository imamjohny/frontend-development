# Week 4 – Frontend Performance Optimization Challenge

## Project
**SpeedBoard – Frontend Performance Lab**

This submission demonstrates a before/after optimization workflow. The `baseline/` folder contains the starting implementation and `optimized/` contains the revised production-oriented version.

## Main optimizations
- Lazy loading for below-the-fold images with `loading="lazy"`.
- `decoding="async"` on images.
- Explicit image dimensions to reduce layout shifts.
- Critical stylesheet preloaded and production CSS minified.
- JavaScript moved to a deferred, minified asset.
- Reduced JavaScript and DOM work.
- Responsive CSS retained while removing unnecessary formatting overhead.
- Optional Apache cache headers documented in `.htaccess`.
- Descriptive metadata and lightweight local SVG assets.
- No third-party framework or dependency.

## Measurement
The report includes reproducible static measurements of source/asset bytes and DOM/image attributes. For a live deployment, run Google PageSpeed Insights or Lighthouse before and after, using the same URL, device profile, network conditions, and cache state.

## Suggested Lighthouse workflow
1. Serve `optimized/` with a local/static web server.
2. Open Chrome DevTools → Lighthouse.
3. Run Performance on Mobile and Desktop.
4. Record Performance, LCP, CLS, TBT/INP and resource findings.
5. Repeat after any changes.
6. Compare results using the same test conditions.

## Testing
- Desktop and mobile responsive layouts.
- Keyboard access for the menu.
- Browser console checked for runtime errors.
- Image loading attributes inspected.
- JavaScript execution deferred.
- Reduced asset sizes verified.

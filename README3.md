# Week 3 - AccessHub Accessible Information Portal

## Project
AccessHub is a responsive blog/information portal redesigned around accessibility and user experience.

## Accessibility Improvements
- Semantic `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer` landmarks.
- One clear page-level H1 with logical heading hierarchy.
- Skip link for keyboard and screen-reader users.
- Descriptive link text and accessible labels.
- ARIA used only where it adds value: `aria-label`, `aria-labelledby`, `aria-controls`, `aria-expanded`, and a polite live region.
- Full keyboard access to navigation and controls.
- Escape closes the mobile navigation and returns focus to its trigger.
- Highly visible `:focus-visible` indicators.
- Responsive layouts for desktop, tablet, and mobile.
- Reduced-motion support through `prefers-reduced-motion`.
- Text-first fallback when JavaScript is disabled.
- Defensive JavaScript checks for missing elements.
- Contrast-conscious colors and readable typography.
- External links clearly indicate a new tab with a visual indicator.

## Audit Method
The project is structured for testing with Chrome Lighthouse, WAVE, keyboard-only navigation, browser zoom, responsive viewport testing, and reduced-motion settings.

## Manual Test Checklist
1. Press Tab from the top of the page and verify the skip link appears.
2. Activate the skip link and confirm focus/navigation reaches the main content.
3. Use Tab and Enter/Space to operate the mobile menu.
4. Press Escape to close the open mobile menu.
5. Confirm every interactive control has a visible focus indicator.
6. Resize from desktop to mobile and verify content remains usable.
7. Test at 200% browser zoom.
8. Enable reduced motion and verify smooth scrolling is disabled.
9. Disable JavaScript and confirm primary navigation/content remains usable.
10. Run Lighthouse/WAVE and review any environment-specific warnings.

## Files
- `index.html` - semantic accessible structure.
- `style.css` - responsive and accessibility-focused presentation.
- `script.js` - keyboard-friendly menu behavior and live announcements.

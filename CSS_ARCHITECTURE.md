# CSS Architecture

This document describes the improved CSS architecture for the Borderless eSIM website.

## Overview

The CSS has been refactored into a modular, maintainable structure using CSS custom properties (variables) for consistent design tokens across the entire site.

## File Structure

```
src/assets/css/
├── variables.css    # Design tokens (colors, spacing, typography)
├── base.css         # CSS reset and base styles
├── blog.css         # Blog-specific styles
└── homepage.css     # Homepage-specific styles

src/assets/js/
└── globe.js         # Three.js globe animation
```

## CSS Loading Order

CSS files must be loaded in this specific order to ensure proper cascade:

1. **variables.css** - Defines all CSS custom properties
2. **base.css** - CSS reset and base element styles
3. **Page-specific CSS** (blog.css or homepage.css)

### Blog Pages

```html
<link rel="stylesheet" href="/assets/css/variables.css">
<link rel="stylesheet" href="/assets/css/base.css">
<link rel="stylesheet" href="/assets/css/blog.css">
```

### Homepage

```html
<link rel="stylesheet" href="/assets/css/variables.css">
<link rel="stylesheet" href="/assets/css/base.css">
<link rel="stylesheet" href="/assets/css/homepage.css">
```

## Design Tokens (CSS Variables)

All design tokens are defined in `variables.css` using CSS custom properties.

### Colors

```css
--color-bg-primary: #0B1D26;           /* Dark background */
--color-text-primary: #FFFFFF;          /* White text */
--color-text-secondary: #CCCCCC;        /* Gray text */
--color-accent: #00FFCC;                /* Cyan/turquoise accent */
```

### Typography

```css
--font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-size-base: 1rem;
--font-size-small: 0.9rem;
--font-size-h1: 3.5rem;
--font-size-h2: 2rem;
--font-size-h3: 1.5rem;
```

### Spacing

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
```

### Effects

```css
--backdrop-blur: blur(12px);
--transition-speed: 0.3s;
--transition-ease: ease;
```

## Benefits of This Architecture

### 1. **Consistency**
- All colors, spacing, and typography use design tokens
- Changes to design system propagate automatically
- No hardcoded values scattered throughout CSS

### 2. **Maintainability**
- Clear separation of concerns (variables → base → page-specific)
- Easy to locate and modify styles
- Reduced CSS duplication

### 3. **Performance**
- Modular CSS allows for better caching
- External CSS files (no inline styles)
- External JavaScript files (no inline scripts)

### 4. **Developer Experience**
- Self-documenting variable names
- Easier to onboard new developers
- Clear CSS architecture

## Migration from Old Structure

### Before (inline styles)

```html
<style>
  body {
    background: #0B1D26;
    color: #FFFFFF;
  }
</style>
```

### After (using variables)

```css
body {
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
}
```

## Updating Design Tokens

To change colors, spacing, or typography across the entire site:

1. Edit `src/assets/css/variables.css`
2. Modify the desired CSS custom property
3. Rebuild the site: `npm run build`
4. Changes will apply to all pages automatically

### Example: Changing Accent Color

```css
/* In variables.css */
:root {
  --color-accent: #FF6B6B;  /* Changed from #00FFCC to red */
}
```

This single change updates:
- All links
- All hover effects
- All badges
- All accent text
- All accent backgrounds

## Responsive Design

Responsive breakpoints are defined in `variables.css`:

```css
@media (max-width: 768px) {
  :root {
    --font-size-h1: 2.5rem;  /* Smaller on mobile */
    --spacing-lg: 1.5rem;
  }
}
```

## Future Improvements

Potential enhancements to the CSS architecture:

1. **Component-based CSS** - Extract common components (buttons, cards, badges) into `components.css`
2. **CSS Modules** - Consider CSS-in-JS or CSS Modules for component scoping
3. **Dark/Light Mode** - Add theme switching using CSS variables
4. **CSS Minification** - Add build step for production optimization
5. **Critical CSS** - Inline critical CSS for faster initial render

## Best Practices

1. **Always use CSS variables** - Never hardcode colors or spacing values
2. **Follow the cascade** - Load CSS files in correct order
3. **Keep specificity low** - Prefer classes over IDs or complex selectors
4. **Use semantic class names** - `.blog-header` not `.big-text`
5. **Document new variables** - Add comments when adding new design tokens

## Examples

### Using Design Tokens

```css
/* ✅ Good - uses design tokens */
.button {
  background: var(--color-accent);
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: var(--radius-md);
  transition: all var(--transition-speed) var(--transition-ease);
}

/* ❌ Bad - hardcoded values */
.button {
  background: #00FFCC;
  padding: 1rem 2rem;
  border-radius: 12px;
  transition: all 0.3s ease;
}
```

### Creating New Components

When creating new components, follow this pattern:

1. Use existing design tokens from `variables.css`
2. Add component-specific styles to appropriate CSS file
3. Use BEM or similar naming convention for clarity

```css
/* Example: New card component */
.feature-card {
  background: var(--color-overlay-light);
  backdrop-filter: var(--backdrop-blur);
  border-radius: var(--radius-lg);
  padding: var(--spacing-lg);
  border: 1px solid var(--color-overlay-border);
}

.feature-card__title {
  color: var(--color-text-primary);
  font-size: var(--font-size-h3);
  margin-bottom: var(--spacing-sm);
}

.feature-card__description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
}
```

## Troubleshooting

### Styles not applying

1. Check CSS file loading order in HTML
2. Verify `npm run build` completed successfully
3. Check browser DevTools for missing CSS files
4. Clear browser cache

### Variables not working

1. Ensure `variables.css` is loaded first
2. Check for typos in variable names (e.g., `--color-primary` vs `--color-bg-primary`)
3. Verify CSS custom property browser support (all modern browsers)

## Resources

- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS Variables Guide](https://css-tricks.com/a-complete-guide-to-custom-properties/)
- [Design Tokens](https://css-tricks.com/what-are-design-tokens/)

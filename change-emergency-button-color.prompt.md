---
name: change-emergency-button-color
description: "Change the emergency button color throughout the MediBridge application. Use when: updating emergency button styling, changing alert button appearance, adjusting emergency UI colors in themes."
argument-hint: "Target color (e.g., 'peach red', 'crimson', '#FF6B6B') or leave blank for peach red"
---

# Change Emergency Button Color

Update the emergency button color in the MediBridge application. The emergency button appears on the dashboard and is styled across multiple files.

## Task Summary
Change the `.emergency-button` class styling and related button colors from the current red (`#dc3545`) to a target color. This affects:
- **CSS Files**: `css/style.css`, `css/responsive.css`, `css/themes.css`
- **HTML**: Emergency button element in `index.html` (class: `emergency-button`, `btn-danger`)
- **Themes**: Health green theme variant in `themes.css`

## Steps

1. **Identify all emergency button color references** across CSS and theme files
   - Search for `.emergency-button` class definitions
   - Check `.btn-danger` usage in emergency context
   - Find theme-specific overrides in `themes.css`

2. **Determine the target color**
   - Use the provided color argument (default: peach red, `#FF6B6B`)
   - Ensure sufficient contrast for accessibility (WCAG AA standard)

3. **Update CSS files** with the new color:
   - `css/style.css`: Main `.emergency-button` styling
   - `css/responsive.css`: Responsive versions
   - `css/themes.css`: Theme-specific variants (e.g., `body.health-green-theme .emergency-button`)

4. **Verify visual consistency**:
   - Emergency button appears correctly on dashboard
   - Color maintains in different themes
   - Hover states are appropriate

5. **Test the changes**:
   - Visit the dashboard
   - Check emergency button appearance
   - Verify button functionality is preserved

## Default Behavior
If no color argument is provided, peach red (`#FF6B6B`) will be used.

## Example Invocations
- "Change emergency button color to crimson"
- "Update emergency button to a softer red: #E85D5D"
- "Make the emergency button peach red" (uses default)

## Related Customizations
- Change button sizes: `.emergency-button` width/height properties
- Update hover effects: `.emergency-button:hover` state
- Modify button text/icon styling: Emergency button typography

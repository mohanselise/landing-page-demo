# SELISE Signature Brand Guidelines Implementation

## Color Palette Implementation

### Primary Colors (60% Usage)
- **SELISE Blue**: `#0066B2` (selise-blue)
  - Hover: `#0052a3` (selise-blue-hover)
  - Light: `#e6f2ff` (selise-blue-light)
  - Dark: `#004080` (selise-blue-dark)
- **Globe Grey**: `#7B7C7F` (selise-grey)
  - Light: `#f5f5f6` (selise-grey-light)
  - Dark: `#5a5b5e` (selise-grey-dark)
- **Oxford Blue**: `#001F35` (selise-oxford) - Deep backgrounds/contrast
- **White**: `#FFFFFF` (selise-white)
- **Eerie Black**: `#1B2021` (selise-black)

### Secondary Colors (10% Usage - Use Sparingly)
- **Poly Green**: `#2A4D14` (selise-poly-green)
- **Mauveine**: `#791E94` (selise-mauveine)
- **Lavender**: `#BC63D7` (selise-lavender)
- **Lime Green**: `#7BC950` (selise-lime-green)
- **Crimson**: `#D80032` (selise-crimson)
- **Pantone Red**: `#EF233C` (selise-pantone-red)

Each secondary color includes a light variant for backgrounds.

## Typography

### Font Hierarchy
1. **Primary Typeface**: Bahnschrift (font-heading) - Main headings
2. **Secondary Typeface**: Aptos (font-subhead) - Sub-headings
3. **Body Typeface**: Open Sans (font-body) - Paragraphs and longer text

### Typography Classes
- `.font-heading` - Bold (700), line-height 1.2, letter-spacing -0.025em
- `.font-subhead` - Medium (600), line-height 1.3
- `.font-body` - Regular (400), line-height 1.6
- `.text-comfortable` - Line-height 1.75, max-width 75ch
- `.text-comfortable-wide` - Line-height 1.75, max-width 85ch

## Layout & Spacing

### Color Distribution Ratios
- **Primary Colors**: 60% (backgrounds, major branding)
- **Supporting Colors**: 30% (UI elements, secondary buttons)
- **Accent Colors**: 10% (highlights, CTAs, alerts)

### Spacing
- Generous margins and padding for clean, uncluttered layouts
- Enhanced spacing utilities: 18 (4.5rem), 22 (5.5rem), 26 (6.5rem), 30 (7.5rem)
- Comfortable line lengths: 50-75 characters per line
- Adequate line spacing for readability

### Accessibility
- Sufficient contrast between foreground and background colors
- Focus states using brand colors
- Proper tap targets for interactive elements
- Responsive scaling across screen sizes

## Component Guidelines

### Buttons
- Primary: `bg-selise-blue text-selise-white hover:bg-selise-blue-hover`
- Secondary: Use `.btn-secondary` class or grey variations
- Focus: Always include focus ring with brand colors

### Backgrounds
- Light sections: `bg-selise-grey-light` or `bg-selise-white`
- Dark sections: `bg-selise-oxford` (deep) or `bg-selise-black`
- Accent backgrounds: Use light variants of secondary colors sparingly

### Error States
- Use `selise-crimson` and `selise-crimson-light` for error messages
- Maintain proper contrast ratios

### Success States
- Use `selise-lime-green` and `selise-lime-green-light`

## Implementation Notes

### What Was Fixed
1. ✅ Added complete secondary color palette
2. ✅ Replaced generic Tailwind colors (blue-700, red-50, yellow-100)
3. ✅ Implemented proper brand hover states
4. ✅ Added Google Fonts loading for Open Sans
5. ✅ Enhanced typography with comfortable line spacing
6. ✅ Improved contrast with Oxford Blue footer background
7. ✅ Added proper CSS variables for all brand colors
8. ✅ Created utility classes for brand-compliant styling

### Key Changes Made
- `hover:bg-blue-700` → `hover:bg-selise-blue-hover`
- `bg-blue-50` → `bg-selise-blue-light`
- `bg-red-50` → `bg-selise-crimson-light`
- `bg-yellow-100` → `bg-selise-lime-green-light`
- `bg-selise-black` (footer) → `bg-selise-oxford` (better contrast)
- Added `.text-comfortable` classes for optimal reading experience

### Best Practices
1. Always use brand colors instead of generic Tailwind colors
2. Follow the 60:30:10 color distribution ratio
3. Use secondary colors sparingly for highlights only
4. Maintain proper contrast ratios for accessibility
5. Keep line lengths between 50-75 characters for readability
6. Use generous white space for clean layouts

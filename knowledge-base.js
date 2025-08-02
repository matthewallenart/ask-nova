// knowledge-base.js
// Design System Knowledge Base
// Replace this content with your actual PDF text

const DESIGN_SYSTEM_KNOWLEDGE = `
DESIGN SYSTEM DOCUMENTATION

COLORS:
Primary Colors:
- Primary Blue: #2563eb (Blue 600) - Used for primary actions, links, and key UI elements
- Primary Dark: #1d4ed8 (Blue 700) - Used for hover states and emphasis
- Primary Light: #93c5fd (Blue 300) - Used for backgrounds and subtle accents

Secondary Colors:
- Success Green: #10b981 (Green 500) - Used for success states and positive actions
- Warning Amber: #f59e0b (Amber 500) - Used for warning states and caution
- Error Red: #ef4444 (Red 500) - Used for error states and destructive actions
- Info Blue: #3b82f6 (Blue 500) - Used for informational content

Neutral Colors:
- Gray 900: #111827 - Primary text color
- Gray 700: #374151 - Secondary text color
- Gray 500: #6b7280 - Placeholder text and subtle content
- Gray 300: #d1d5db - Border colors and dividers
- Gray 100: #f3f4f6 - Background colors and cards
- White: #ffffff - Primary background color

TYPOGRAPHY:
Font Family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

Heading Scale:
- H1: 32px (2rem), Weight: 700, Line Height: 1.2
- H2: 24px (1.5rem), Weight: 600, Line Height: 1.3
- H3: 20px (1.25rem), Weight: 600, Line Height: 1.4
- H4: 18px (1.125rem), Weight: 600, Line Height: 1.4
- H5: 16px (1rem), Weight: 600, Line Height: 1.5
- H6: 14px (0.875rem), Weight: 600, Line Height: 1.5

Body Text:
- Large: 18px (1.125rem), Weight: 400, Line Height: 1.6
- Base: 16px (1rem), Weight: 400, Line Height: 1.5
- Small: 14px (0.875rem), Weight: 400, Line Height: 1.4
- Extra Small: 12px (0.75rem), Weight: 400, Line Height: 1.3

SPACING SYSTEM:
Base unit: 8px
Scale: 4px (0.5), 8px (1), 12px (1.5), 16px (2), 24px (3), 32px (4), 48px (6), 64px (8), 96px (12), 128px (16)

Usage Guidelines:
- Use 8px for small gaps between related elements
- Use 16px for standard spacing between components
- Use 24px for medium section spacing
- Use 32px+ for large section breaks

COMPONENTS:

BUTTONS:
Primary Button:
- Background: Primary Blue (#2563eb)
- Text: White (#ffffff)
- Padding: 12px 24px
- Border radius: 6px
- Font: 16px, Weight 500
- Hover: Primary Dark (#1d4ed8)

Secondary Button:
- Background: Transparent
- Text: Primary Blue (#2563eb)
- Border: 1px solid Primary Blue
- Padding: 12px 24px
- Border radius: 6px
- Font: 16px, Weight 500
- Hover: Light blue background

Outline Button:
- Background: Transparent
- Text: Gray 700 (#374151)
- Border: 1px solid Gray 300 (#d1d5db)
- Padding: 12px 24px
- Border radius: 6px
- Font: 16px, Weight 500
- Hover: Gray 100 background

Button Sizes:
- Small: 8px 16px padding, 14px font
- Medium: 12px 24px padding, 16px font (default)
- Large: 16px 32px padding, 18px font

FORM ELEMENTS:
Input Fields:
- Padding: 12px 16px
- Border: 1px solid Gray 300 (#d1d5db)
- Border radius: 6px
- Font: 16px
- Focus: Blue border with shadow
- Error: Red border

Labels:
- Font: 14px, Weight 500
- Color: Gray 700 (#374151)
- Margin bottom: 8px

CARDS:
Default Card:
- Background: White (#ffffff)
- Border: 1px solid Gray 200 (#e5e7eb)
- Border radius: 8px
- Padding: 24px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)

Elevated Card:
- Background: White (#ffffff)
- Border: None
- Border radius: 12px
- Padding: 24px
- Shadow: 0 4px 6px rgba(0,0,0,0.1)

GRID SYSTEM:
Container max-width: 1200px
Columns: 12 column grid
Gutter: 24px between columns
Breakpoints:
- Mobile: 0px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

ACCESSIBILITY:
- Minimum contrast ratio: 4.5:1 for normal text
- Minimum contrast ratio: 3:1 for large text
- Focus indicators must be visible
- Touch targets minimum 44px
- Text must be resizable up to 200%

USAGE EXAMPLES:
Navigation:
- Use Primary Blue for active states
- Use Gray 500 for inactive links
- Maintain 44px minimum touch targets

Error Handling:
- Use Error Red for error messages
- Include clear, actionable error text
- Show errors inline when possible

Loading States:
- Use subtle animations
- Provide progress indicators for long operations
- Maintain layout stability during loading

ADVANCED COMPONENTS:

MODALS:
- Maximum width: 600px
- Centered vertically and horizontally
- Backdrop: Semi-transparent black (rgba(0,0,0,0.5))
- Border radius: 12px
- Padding: 32px
- Shadow: 0 20px 25px rgba(0,0,0,0.1)

TABLES:
- Header background: Gray 50 (#f9fafb)
- Border: 1px solid Gray 200 (#e5e7eb)
- Row hover: Gray 50 (#f9fafb)
- Cell padding: 12px 16px
- Font: 14px

NAVIGATION:
- Primary navigation height: 64px
- Secondary navigation height: 48px
- Active state: Primary Blue background
- Hover state: Light blue background
- Font weight: 500 for active items, 400 for inactive

ICONS:
- Default size: 20px
- Small: 16px
- Large: 24px
- Color: Inherit from parent text color
- Style: Outline for most cases, filled for active states

ANIMATIONS:
- Transition duration: 150ms for micro-interactions
- Transition duration: 300ms for state changes
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Hover effects should be subtle and instant
- Loading animations should loop smoothly
`.trim();

// Export for use in main application
window.DESIGN_SYSTEM_KNOWLEDGE = DESIGN_SYSTEM_KNOWLEDGE;

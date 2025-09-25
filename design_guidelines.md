# Design Guidelines for Hemnath's Portfolio Website

## Design Approach
**Selected Approach**: Design System (Material Design inspired) with minimal aesthetic
**Justification**: Utility-focused portfolio showcasing technical skills, requiring clean, professional presentation that emphasizes content over visual flourishes.

## Core Design Elements

### A. Color Palette
**Monochromatic Theme**:
- **Light Mode**: Pure white backgrounds (0 0% 100%), charcoal text (0 0% 15%), medium gray accents (0 0% 60%)
- **Dark Mode**: Deep charcoal backgrounds (0 0% 8%), off-white text (0 0% 95%), light gray accents (0 0% 40%)
- **Accent**: Subtle blue for interactive elements (220 90% 56%) in light mode, lighter blue (220 80% 70%) in dark mode

### B. Typography
**Font Stack**: Inter via Google Fonts CDN
- **Headings**: Font weights 600-700, larger letter spacing (-0.025em)
- **Body**: Font weight 400, comfortable line height (1.6)
- **Code/Technical**: JetBrains Mono for skill badges and project details

### C. Layout System
**Tailwind Spacing Primitives**: Focus on 4, 8, 12, 16, 24 units
- Container max-width: `max-w-6xl mx-auto`
- Section padding: `py-24 px-8`
- Component spacing: `space-y-8` for vertical rhythm
- Grid gaps: `gap-8` for project cards

### D. Component Library

**Navigation**:
- Fixed transparent header with backdrop blur
- Minimal logo/name on left, navigation links on right
- Smooth scroll behavior with active section indicators

**Hero Section**:
- Single viewport height with centered content
- Large typography hierarchy: Name (text-5xl), Role (text-xl), Tagline (text-lg)
- Two primary buttons: "View Projects" and "Contact" with subtle hover animations

**Skills Section**:
- Skill badges in a responsive grid
- Rounded corners (rounded-lg), subtle shadows
- Hover effects with gentle scale transform

**Projects Section**:
- Card-based layout in responsive grid (1-3 columns)
- Each card: Project image placeholder, title, description, tech stack, GitHub link
- Hover effects: subtle lift shadow and scale

**Contact Section**:
- Clean form with floating labels
- Input fields with focus states and validation styling
- Social media icons with hover color transitions

### E. Animations
**Framer Motion Implementation**:
- **Scroll Animations**: Fade-in-up for sections as they enter viewport
- **Hover Effects**: Subtle scale (1.02) and shadow changes on interactive elements
- **Page Load**: Staggered fade-ins for hero content
- **Smooth Scrolling**: Between navigation sections

## Visual Hierarchy
- **Primary**: Hemnath's name and role in hero
- **Secondary**: Section headings and project titles
- **Tertiary**: Body text and descriptions
- **Quaternary**: Metadata and links

## Responsive Behavior
- **Mobile**: Single column layout, reduced padding, stacked navigation
- **Tablet**: Two-column project grid, maintained spacing
- **Desktop**: Full three-column project grid, maximum white space

## Theme Implementation
- System preference detection on initial load
- Smooth color transitions between themes
- Consistent component styling across both modes
- Form inputs maintain readability in both themes

This minimal, professional design focuses on showcasing Hemnath's technical expertise while maintaining excellent usability and modern aesthetics.
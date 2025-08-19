# SELISE Signature Landing Page

## Objective

Build a high‑converting landing page with an above‑the‑fold drag‑and‑drop upload, clear "Free forever" positioning, and seamless‑upgrade messaging for Advanced/QES. Stack: Next.js (App Router) + Tailwind CSS + TypeScript. No external UI frameworks required. Keep core bundle light.

## Pages & Routes

- `/` — Landing page (main page)
- `/start` — Upload handoff (accepts File via client, then posts to /api/sign/start)
- `/app/prepare` — Document preparation interface (accepts uploadId param)
- `/legal/terms` — Terms of Service placeholder
- `/legal/privacy` — Privacy Policy placeholder

## Components Structure

All components are located in `src/app/(marketing)/_components/`:

### Hero.tsx
- **Headline**: "Free e‑Signatures for Startups, Small Businesses & Freelancers"
- **Subhead**: "Start signing in seconds—no credit card. Drag & drop your PDF right here to begin."
- **Primary CTA**: "Start Signing — Free"
- **Secondary CTA**: Drag & drop zone (right half on desktop)
- **Features**: 
  - File validation (PDF/DOC/DOCX up to 200MB)
  - Optimistic UI during upload
  - Error handling with user feedback
  - Keyboard accessible drag & drop
- **Trust badges**: EU eIDAS, Swiss ZertES, Audit trail, Mobile ready

### TrustBar.tsx
- Small inline badges with green indicators
- Highlights compliance and key features

### ValueProps.tsx
- **Main message**: "Move faster without overhead"
- **6 key value propositions**:
  - Start instantly
  - Signers don't need an account
  - Professional look
  - Advanced & QES when needed
  - Workflows & bulk send
  - Clear audit trail

### UpgradeStrip.tsx
- **Title**: "Free Now, Seamless Upgrade Later"
- **Three-tier visualization**: Basic → Advanced → QES
- **Key message**: Instant upgrading without workflow disruption
- **Flow diagram**: Free Use → Seamless Upgrade → Higher Assurance

### UseCases.tsx
- **Interactive tabs**: Freelancers, Small Businesses, Startups
- **Each use case includes**:
  - Specific description
  - 4 relevant features
  - Icon representation
  - CTA for getting started

### FAQ.tsx
- **Collapsible sections** for 6 common questions:
  - Is it really free?
  - Do signers need an account?
  - Is it legally valid?
  - Can I switch to higher assurance later?
  - What file types are supported?
  - How does the audit trail work?

### Footer.tsx
- **Brand section** with social links
- **Product links**: Features, Pricing, Security, Integrations
- **Legal links**: Terms, Privacy, GDPR, Contact
- **Compliance indicator**: EU eIDAS & Swiss ZertES
- **Language switcher placeholder**

## API Routes

### `/api/sign/start` (POST)
- **Input**: FormData with file
- **Validation**: 
  - File type (PDF, DOC, DOCX)
  - File size (max 200MB)
- **Output**: `{ uploadId, fileName, fileSize, fileType, message }`
- **Error handling**: Proper HTTP status codes and error messages

## Design System

### Colors (SELISE Brand)
```typescript
selise: {
  blue: '#0066B2',    // Primary - 60% usage
  grey: '#7B7C7F',    // Secondary - 30% usage  
  black: '#1B2021',   // Text
  white: '#FFFFFF',   // Background
  green: '#7BC950',   // Accent - 10% usage (positive states)
}
```

### Typography
- **Headings**: Bahnschrift (fallback: ui-sans-serif, system-ui, Segoe UI, Arial)
- **Subheads**: Aptos (fallback: ui-sans-serif, system-ui, Segoe UI, Arial)
- **Body**: Open Sans (fallback: system-ui, Arial)

### Utilities
- **Font weights**: 700 for headings, 600 for subheads, 400 for body
- **Line heights**: `leading-tight` for hero, `leading-relaxed` for body
- **Letter spacing**: `tracking-tight` for headlines

## Accessibility & Performance

### Accessibility
- **Semantic HTML**: Proper use of header, main, section, footer elements
- **Keyboard navigation**: Full keyboard support for drag & drop
- **Focus indicators**: Visible focus rings on interactive elements
- **ARIA labels**: Proper labeling for screen readers
- **Color contrast**: WCAG AA compliant color combinations

### Performance
- **Lazy loading**: Non-critical sections loaded with next/dynamic
- **Image optimization**: Next.js Image component where applicable
- **Bundle optimization**: No external UI frameworks, minimal dependencies
- **Font loading**: Strategic font loading with display=swap

## Technical Implementation

### File Upload Flow
1. **Client-side validation**: File type and size checks
2. **Optimistic UI**: Immediate visual feedback
3. **API call**: POST to `/api/sign/start`
4. **Success**: Redirect to `/app/prepare?uploadId=...`
5. **Error**: Display user-friendly error message

### State Management
- **Local state**: useState for component interactions
- **Form handling**: Controlled components with validation
- **Error states**: Centralized error handling
- **Loading states**: Consistent loading indicators

### Responsive Design
- **Mobile-first**: Base styles for mobile, enhanced for desktop
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid layouts**: CSS Grid and Flexbox for responsive layouts
- **Touch-friendly**: Adequate touch targets (44px minimum)

## SEO & Meta

### Meta Tags
- **Title**: "SELISE Signature - Free e-Signatures for Startups, Small Businesses & Freelancers"
- **Description**: "Start signing in seconds—no credit card. Drag & drop your PDF right here to begin. EU eIDAS & Swiss ZertES ready."
- **Keywords**: e-signature, digital signature, document signing, PDF signature
- **Open Graph**: Complete OG tags for social sharing
- **Twitter Card**: Large image card for Twitter
- **Canonical URL**: Proper canonical URLs

### Structured Data
- **Schema.org**: SoftwareApplication markup
- **Local Business**: If applicable for SELISE
- **FAQ**: FAQ schema for better search results

## Development Guidelines

### Code Quality
- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended configuration
- **Components**: Single responsibility principle
- **Hooks**: Custom hooks for reusable logic
- **Error boundaries**: Graceful error handling

### File Organization
```
src/app/
├── (marketing)/
│   └── _components/
│       ├── Hero.tsx
│       ├── TrustBar.tsx
│       ├── ValueProps.tsx
│       ├── UpgradeStrip.tsx
│       ├── UseCases.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
├── api/sign/start/
│   └── route.ts
├── app/prepare/
│   └── page.tsx
├── legal/
│   ├── terms/page.tsx
│   └── privacy/page.tsx
├── start/
│   └── page.tsx
├── layout.tsx
├── page.tsx
└── globals.css
```

### Testing Strategy
- **Component testing**: React Testing Library
- **E2E testing**: Playwright for critical user flows
- **Accessibility testing**: axe-core integration
- **Performance testing**: Lighthouse CI

## Browser Support
- **Modern browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Progressive enhancement**: Core functionality works without JavaScript
- **Polyfills**: Only where necessary for critical features

## Deployment Considerations
- **Environment variables**: API endpoints, feature flags
- **Build optimization**: Next.js production build
- **CDN**: Static assets served from CDN
- **Analytics**: Performance and user behavior tracking
- **Error monitoring**: Production error tracking

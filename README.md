# Workspace Introduction Website

A modern, AI-powered landing page for an all-in-one workspace application powered by AI agents, inspired by Notion AI. Features a clean, minimal interface for writing, planning, organizing, and automating work.

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React |
| **Animations** | Framer Motion |
| **UI Components** | Radix UI + Custom shadcn/ui-style components |
| **Forms** | React Hook Form + Zod |
| **Charts** | Recharts |

---

## Features

- **AI-Powered Workspace** - All-in-one productivity tool with AI agents
- **Hero Section** - Dynamic hero with animated elements and CTA
- **AI Features Showcase** - Highlight AI capabilities with visual cards
- **Product Preview** - Interactive product preview with carousel
- **Projects Display** - Multiple view modes (Kanban, Table, Gantt)
- **Pricing Plans** - Tiered pricing with feature comparison
- **Trust & Integrations** - Partner logos and integration badges
- **Final CTA** - Animated call-to-action with email capture
- **Responsive Design** - Mobile-first, fully responsive layouts

---

## UI Components (40+ Components)

- Accordion, Alert Dialog, Alert, Aspect Ratio, Avatar
- Badge, Breadcrumb, Button, Button Group
- Calendar, Card, Carousel, Chart, Checkbox, Collapsible
- Command, Context Menu
- Dialog, Drawer, Dropdown Menu
- Empty State
- Field, Form
- Hover Card
- Input, Input Group, Input OTP
- Kbd
- Label, List Box
- Menubar
- Navigation Menu
- Pagination, Popover, Progress
- Radio Group
- Scroll Area, Select, Separator, Sheet, Sidebar, Skeleton, Slider, Sonner, Spinner, Switch
- Table, Tabs, Textarea, Toggle, Toggle Group, Tooltip

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / bun / yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/girishlade111/workspace-introduction-website.git

# Navigate to project directory
cd workspace-introduction-website

# Install dependencies
npm install
# or
bun install
```

### Development Server

```bash
# Start development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## Project Structure

```
├── public/                 # Static assets (images, icons)
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx   # Root layout
│   │   └── page.tsx     # Home page
│   ├── components/
│   │   ├── AIFeatures.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Pricing.tsx
│   │   ├── ProductPreview.tsx
│   │   ├── Projects.tsx
│   │   ├── TrustAndIntegrations.tsx
│   │   └── ui/           # 40+ UI components
│   ├── hooks/
│   │   └── use-mobile.ts
│   └── lib/
│       └── utils.ts
├── components.json
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### ESLint

```bash
npm run lint
```

### TypeScript

```bash
npx tsc --noEmit
```

---

## Stats

- **Components**: 50+ (9 main + 40+ UI)
- **Dependencies**: 60+
- **Lines of Code**: 17,000+
- **Bundle**: Optimized with Turbopack

---

## License

MIT License

---

Built by Girish Lade — https://ladestack.in
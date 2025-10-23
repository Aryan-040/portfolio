# F1-Themed Portfolio (React + Vite + TypeScript)

A modern, responsive portfolio website with Formula 1 racing-inspired design elements and animations.


## Features

- **F1-Inspired Design**: Racing-themed UI with custom animations and visual elements
- **Interactive UI Elements**: Custom F1-themed buttons, loaders, and components
- **Smooth Page Transitions**: Seamless navigation between different sections
- **Responsive Design**: Optimized for desktop, tablet, and mobile viewing experiences
- **Performance Optimized**: Fast loading times with F1-themed loading indicators

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with custom F1-themed design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form with Zod validation
- **Data Fetching**: TanStack Query

## Getting Started

### Prerequisites
- Node.js 18+ (recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview

# Development build
npm run build:dev
```

### Quality

```bash
# Run ESLint
npm run lint
```

## Application Structure

### Routes
- `/` — Home/Start Grid
- `/about` — About/Pit
- `/projects` — Projects/Race Laps
- `/contact` — Contact/Podium
- `*` — Not Found

### Project Structure

```
/ (repo root)
  public/
    f1-tire.png
    f1.mp3
    f1-radio.mp3
    placeholder.svg
  src/
    App.tsx
    main.tsx
    components/
      F1Loader.tsx
      WheelLoader.tsx
      Navbar.tsx
      Footer.tsx
      StartLapButton.tsx
      NextLapButton.tsx
      HomeBottomSection.tsx
      Layout.tsx
    hooks/
      usePageTransition.tsx
      use-mobile.tsx
    pages/
      Index.tsx
      About.tsx
      Projects.tsx
      Contact.tsx
      NotFound.tsx
```

## Design Elements

### F1 Visual Language
- **Color Scheme**: Racing red accent (`#e10600`) with dark carbon-fiber inspired backgrounds
- **Typography**: Racing-inspired fonts with technical, angular characteristics
- **Motion**: Spring animations, racing-inspired transitions, and loading indicators
- **UI Components**: Custom buttons styled like F1 controls and indicators

### Special Features
- **F1 Loader**: Custom loading animation between page transitions
- **Wheel Loader**: Tire-inspired loading indicator
- **Start/Next Lap Buttons**: Racing-themed call-to-action buttons
- **Pit Stop Philosophy**: Development approach inspired by F1 racing strategy

## Responsive Behavior
- **Desktop**: Full experience with all F1 design elements
- **Tablet**: Optimized layout with slightly modified navigation
- **Mobile**: Streamlined interface with essential content prioritized

## Contact

Author: Aryan Mukund Sing
Email: singharyan432002@example.com  
Project: https://github.com/Aryan-040/portfolio
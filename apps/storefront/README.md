# Medusa Storefront

A minimal, customizable Next.js + Tailwind CSS storefront for Medusa.

## Getting Started

### Prerequisites

- Node.js 20+ or 22+
- npm 11.13.0+
- Medusa backend running on `http://localhost:9000`

### Setup

1. **Install dependencies** (from root):
   ```bash
   npm install
   ```

2. **Configure environment variables**:
   ```bash
   cd apps/storefront
   cp .env.local.example .env.local
   ```
   Update `.env.local` with your actual values:
   ```env
   NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your_publishable_key
   NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000
   ```

3. **Start development server** (from root):
   ```bash
   npm run storefront:dev
   ```
   Opens on `http://localhost:8000`

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── page.tsx         # Home page
│   ├── products/        # Products listing and detail pages
│   ├── about/           # About page
│   ├── contact/         # Contact form
│   ├── cart/            # Shopping cart
│   └── globals.css      # Global styles + Tailwind utilities
├── components/          # Reusable React components
│   ├── Header.tsx       # Navigation header
│   ├── Footer.tsx       # Footer
│   └── ProductCard.tsx  # Product card component
└── lib/
    ├── medusa-client.ts # Axios client configured for Medusa
    └── types.ts         # TypeScript types
```

## Customization Guide

### Colors & Styling

Edit `tailwind.config.ts` to customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#000000",    // Change this
      secondary: "#666666",  // Change this
      accent: "#ffffff",     // Change this
    },
  },
},
```

Then use in components:
```jsx
<div className="bg-primary text-accent">Custom styled div</div>
```

### Add New Pages

1. Create a new directory: `src/app/my-page/`
2. Add `page.tsx`:
   ```typescript
   export default function MyPage() {
     return <h1>My Page</h1>
   }
   ```
3. Accessible at `/my-page`

### Modify Components

Edit existing components in `src/components/` or create new ones:

```typescript
// src/components/MyComponent.tsx
export default function MyComponent() {
  return <div>My Component</div>
}
```

Import and use:
```typescript
import MyComponent from "@/components/MyComponent"
```

### Connect to Medusa API

Use the pre-configured client:

```typescript
import medusaClient from "@/lib/medusa-client"

const fetchProducts = async () => {
  const response = await medusaClient.get("/store/products")
  return response.data.products
}
```

## Available Scripts

### Development
```bash
npm run storefront:dev      # Start dev server (port 8000)
```

### Build
```bash
npm run build               # Build for production
npm run start               # Start production server
```

### Linting
```bash
npm run lint                # Run ESLint
```

## Environment Variables

Create `.env.local`:

```env
# Required: Medusa API configuration
NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY=your_key_here
NEXT_PUBLIC_MEDUSA_BACKEND_URL=http://localhost:9000

# Optional: Store branding
NEXT_PUBLIC_APP_NAME=Medusa Store
NEXT_PUBLIC_STORE_NAME=My Store
```

## API Integration

### Get Products
```typescript
const response = await medusaClient.get("/store/products")
const products = response.data.products
```

### Get Product by Handle
```typescript
const response = await medusaClient.get(`/store/products/${handle}`)
const product = response.data.product
```

## Common Customizations

### Change Hero Section Colors
Edit `src/app/page.tsx` line with `bg-gradient-to-r from-gray-900 to-gray-800`

### Modify Header
Edit `src/components/Header.tsx` to add/remove navigation items

### Add Custom Font
Update `next.config.ts` or `globals.css`

### Add Analytics
Install a package (e.g., `next-gtag`) and configure in `src/app/layout.tsx`

## Troubleshooting

### Products not loading?
- Ensure Medusa backend is running on `http://localhost:9000`
- Check `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` in `.env.local`
- Check browser console for API errors

### Images not showing?
- Ensure image URLs in Medusa are accessible
- Check `next.config.ts` remotePatterns configuration

## License

MIT

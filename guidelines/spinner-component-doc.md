# Spinner Component

The `Spinner` component is a simple and flexible loading indicator built using the `Loader2` icon from `lucide-react`. It can be used to indicate a loading state in buttons, forms, or entire pages.

---

## ✨ Features

- Uses `lucide-react`'s `Loader2` icon
- Supports three sizes: `sm`, `default`, `lg`
- Easy to center and customize
- Tailwind CSS powered animation (`animate-spin`)

---

## ✅ Usage

### Basic Spinner

```tsx
import { Spinner } from "@/components/ui/spinner";

<Spinner />
```

This renders a default-sized spinner centered inside a container.

---

### With Sizes

```tsx
<Spinner size="sm" />
<Spinner size="default" />
<Spinner size="lg" />
```

Each size maps to specific Tailwind classes:

| Size     | Dimensions |
|----------|-------------|
| `sm`     | `w-4 h-4`   |
| `default`| `w-6 h-6`   |
| `lg`     | `w-8 h-8`   |

---

## 🔧 Props

| Prop   | Type                   | Description                      |
|--------|------------------------|----------------------------------|
| `size` | `"sm"` \| `"default"` \| `"lg"` | Optional. Sets the spinner size (default: `"default"`) |

---

## 🧪 Notes

- You can override the color using Tailwind utility classes like `text-blue-500`.
- The spinner is wrapped in a flex container to ensure it's centered.

---

## 📁 Source

Located in:  
`@/components/ui/spinner.tsx`

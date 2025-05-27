# Badge Component

The `Badge` component is a compact, styled label element often used to show status, categories, or metadata. It supports theming, sizing, and optional icons.

---

## ✨ Features

- Variants: `primary`, `secondary`, `outline`, `dark`
- Sizes: `sm`, `default`, `lg`
- Optional icon via `Icon` prop
- Forwarded `ref` support
- Fully customizable via `className`

---

## ✅ Usage

### Basic

```tsx
import { Badge } from "@/components/ui/badge";

<Badge>Primary</Badge>
```

---

### With Variants

```tsx
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="dark">Dark</Badge>
```

---

### With Sizes

```tsx
<Badge size="sm">Small</Badge>
<Badge size="lg">Large</Badge>
```

---

### With Icon

```tsx
import { Calendar } from "lucide-react";

<Badge Icon={Calendar}>With Icon</Badge>
```

The icon is automatically sized based on the `size` prop.

---

## 🔧 Props

| Prop       | Type                         | Description                                               |
|------------|------------------------------|-----------------------------------------------------------|
| `variant`  | `"primary" \| "secondary" \| "outline" \| "dark"` | Visual style of the badge (default: `"primary"`) |
| `size`     | `"sm" \| "default" \| "lg"`  | Size of the badge (default: `"default"`)                  |
| `Icon`     | `React.ElementType`          | Optional icon component (e.g. from `lucide-react`)        |
| `className`| `string`                     | Additional Tailwind or custom class names                 |
| `...props` | `HTMLSpanElement props`      | All standard HTML `span` attributes                       |

---

## 🧪 Notes

- Icon is only rendered if `Icon` is provided.
- Icons are sized automatically using internal `iconSizes` map.
- You can override styles via the `className` prop.

---

## 📁 Source

Located in:  
`@/components/ui/badge.tsx`

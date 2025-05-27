# Button Component

The `Button` component is a customizable and accessible button built with Tailwind CSS and Radix UI patterns. It supports various visual styles, sizes, icon placement, loading state, and can render as a different component using `asChild`.

---

## ✨ Features

- Multiple variants: `primary`, `secondary`, `tertiary`, `text`
- Sizes: `sm`, `default`, `lg`, `icon`
- Optional icon with `iconPosition`
- Loading spinner state
- Disabled state styling
- Composable via `asChild` with `@radix-ui/react-slot`

---

## ✅ Usage

### Basic

```tsx
import { Button } from "@/components/ui/button";

export default function Example() {
  return (
    <Button>Click me</Button>
  );
}
```

---

### With `variant` and `size`

```tsx
<Button variant="primary" size="lg">
  Primary Button
</Button>

<Button variant="secondary" size="sm">
  Secondary Button
</Button>

<Button variant="tertiary">
  Tertiary Button
</Button>

<Button variant="text">
  Text Button
</Button>
```

---

### With icon

```tsx
import { Plus } from "lucide-react";

<Button icon={Plus} iconPosition="left">
  Add Item
</Button>

<Button icon={Plus} iconPosition="right" variant="secondary">
  Add Item
</Button>
```

---

### Loading state

```tsx
<Button loading>
  Saving...
</Button>
```

If `loading` is true, the button:
- shows a spinning icon
- disables interaction

---

### Disabled state

```tsx
<Button disabled>
  Disabled Button
</Button>
```

---

### As another element (`asChild`)

```tsx
import { Link } from "react-router-dom";

<Button asChild>
  <Link to="/dashboard">Go to Dashboard</Link>
</Button>
```

---

## 🔧 Props

| Prop           | Type                         | Description                                                                 |
|----------------|------------------------------|-----------------------------------------------------------------------------|
| `variant`      | `"primary" \| "secondary" \| "tertiary" \| "text"` | Visual style of the button (default: `"primary"`) |
| `size`         | `"sm" \| "default" \| "lg" \| "icon"`             | Size of the button (default: `"default"`) |
| `icon`         | `React.ElementType`          | Optional icon component (e.g. from `lucide-react`)                         |
| `iconPosition` | `"left" \| "right"`          | Where to place the icon (default: `"left"`)                               |
| `loading`      | `boolean`                    | Shows a spinner and disables the button                                   |
| `disabled`     | `boolean`                    | Disables the button                                                        |
| `asChild`      | `boolean`                    | Use a custom element inside (via `Slot`)                                   |

---

## 🧪 Notes

- The button uses design tokens from Tailwind + CSS variables.
- Icon sizes are automatically mapped based on button `size`.
- `loading` disables the button and replaces the icon with a spinner.

---

## 📁 Source

Located in:  
`@/components/ui/button.tsx`

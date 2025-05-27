# 🧩 RadioGroup & RadioGroupItem

The `RadioGroup` and `RadioGroupItem` components are built on top of [Radix UI](https://www.radix-ui.com/docs/primitives/components/radio-group) and styled in the spirit of the `PawaRadio` design system. They offer full control over visual style, accessibility, and user interaction.

---

## 📦 Import

```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
```

---

## 🧪 Example Usage

```tsx
import { useState } from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function Example() {
  const [selected, setSelected] = useState("basic")

  return (
    <RadioGroup value={selected} onValueChange={setSelected}>
      <RadioGroupItem
        value="basic"
        label="Basic Plan"
        description="Includes essential features"
        variant="primary"
        size="default"
        onValueChange={setSelected}
      />
      <RadioGroupItem
        value="premium"
        label="Premium Plan"
        description="Includes premium features"
        variant="secondary"
        size="lg"
        onValueChange={setSelected}
      />
    </RadioGroup>
  )
}
```

---

## ⚙️ API

### RadioGroup (wrapper)

| Prop             | Type                      | Description                          |
|------------------|---------------------------|--------------------------------------|
| `value`          | `string`                 | Currently selected value             |
| `onValueChange`  | `(value: string) => void`| Callback triggered on selection      |
| `className`      | `string`                 | Custom CSS classes                   |
| `children`       | `React.ReactNode`        | List of `RadioGroupItem` components  |

---

### RadioGroupItem

| Prop            | Type                            | Default       | Description                                               |
|------------------|---------------------------------|----------------|-----------------------------------------------------------|
| `value`         | `string`                        | –              | Unique value of the item                                  |
| `label`         | `string`                        | –              | Label text                                                |
| `description`   | `string`                        | –              | Optional description text                                 |
| `variant`       | `"primary"` \| `"secondary"`    | `"primary"`    | Color variant                                             |
| `size`          | `"sm"` \| `"default"` \| `"lg"` | `"default"`    | Size of the radio and inner dot                           |
| `disabled`      | `boolean`                       | `false`        | Whether the item is disabled                              |
| `onValueChange` | `(value: string) => void`       | –              | Called when the item is clicked                           |
| `className`     | `string`                        | –              | Additional wrapper CSS classes                            |

---

## 🎨 Style Variants

### Colors:

- `primary` — green (`lime-400`)
- `secondary` — orange (`#FF9940`)

### Sizes:

| Size     | Radio     | Dot         |
|----------|-----------|-------------|
| `sm`     | `w-4 h-4` | `w-2 h-2`   |
| `default`| `w-5 h-5` | `w-2.5 h-2.5`|
| `lg`     | `w-6 h-6` | `w-3 h-3`   |

---

## 💡 Notes

- The components are **controlled** — `value` and `onValueChange` are required in `RadioGroup`.
- `RadioGroupItem` does not manage internal state; selection logic is handled via `RadioGroup`.
- `label` and `description` are optional.
- Behavior for `hover`, `focus`, `disabled` is consistent with the design system.

---

## ✅ Future Extensions

- Integration with `react-hook-form`
- Horizontal orientation support
- Animated dot transitions

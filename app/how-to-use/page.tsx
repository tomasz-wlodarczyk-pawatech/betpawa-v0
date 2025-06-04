"use client"

import {SidebarTrigger} from "@/components/ui/sidebar"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible"
import {
    HelpCircle,
    ExternalLink,
    Code,
    Zap,
    Terminal,
    Copy,
    Check,
    ArrowRight,
    ChevronDown,
    CheckCircle,
    Lightbulb,
    Download,
    FileText,
    ImageIcon,
    Paperclip,
    Play,
} from "lucide-react"
import {useState} from "react"

export default function HowToUsePage() {
    const [copiedCode, setCopiedCode] = useState<string>("")
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

    const handleCopyCode = (code: string, id: string) => {
        navigator.clipboard.writeText(code)
        setCopiedCode(id)
        setTimeout(() => setCopiedCode(""), 2000)
    }

    const toggleSection = (section: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }))
    }

    const masterPrompt = `### BRAND DNA
Energetic · trustworthy · minimalist · data-dense but easy to scan.  
Voice: concise, second-person (“Place Bet”, “Deposit now”).






### COLOUR TOKENS
\`\`\`css
--bp-primary-green   #9CE800    /* CTAs, WIN badges, highlights  */
--bp-background      #252A2D    /* top bar, bottom nav BG        */
--bp-foreground      #252A2D    /* button text, text titles        */
--bp-off-white       #FFFFFF    /* backdrops, cards              */
--bp-light-grey      #F2F4F7    /* dividers, disabled states     */
--bp-warning-orange  #FF7A00    /* boosted-odds flame, “Hot” tags*/
--bp-danger-red      #CC371B    /* LOSS badge, error text        */
--bp-info-blue       #22BFDB    /* links & educational banners   */
TYPOGRAPHY
Primary font: Inter (fallback Roboto, Helvetica).
Weights → 700 balances & odds, 600 headers, 400 body, 300 fine print.
Line-height 1.2.


ICONOGRAPHY
Every icon must come from the Lucide icon library.
Icon style: Lucide icons, 1.5 px stroke, rounded ends; flat fills only when status-critical.


SPACING & SIZES
Base grid 4 dp; paddings × 8.
Corner radius: 4 dp chips & inputs; 8 dp sheets & cards; 12 dp CTAs.
Top app-bar 48 dp; bottom nav 56 dp.
Odds chip ≈ 64 × 36 dp (auto-wide).


CORE COMPONENTS


Button
A button lets the user perform an action with a tap or a click.


Structure


Use a <div role="button" tabindex="0"> styled to look like a button; do not use <button> or <a> tags.


Text inside should be HTML-escaped, centered both vertically and horizontally.


Default Style


Background: --bp-primary-green


Text: 700 weight, 16 sp, black (--bp-foreground)


Height: 48 dp


Horizontal Padding: 16 dp


Corner Radius: 12 dp


Font: font-family: Inter, Roboto, Helvetica, sans-serif


Line-height: 1.2


Icon Buttons (e.g., deposit “＋” FAB)


36 dp × 36 dp circular container with background --bp-primary-green.


Centered Lucide icon (20 × 20 dp, stroke 1.5 px, white).


Corner radius: 50% (circle).


Disabled State


Background: --bp-light-grey


Text: 400 weight, 16 sp, --text-secondary (#5E6366)


Cursor: not-allowed (no hover or active feedback)


Opacity: 0.5


Hover & Active States (pointer devices)


Hover: filter: brightness(1.1) on background over 100 ms.


Active (pressed): scale down to 0.98 over 80 ms, revert to 1.0 over 80 ms. Border color transitions to slightly darker green (hsl(90, 85%, 45%)) if applicable.


Focus State (keyboard navigation)


outline: 2 px dashed var(--bp-primary-green); outline-offset: 2 px.


Text Label Guidelines


Concise, start with a verb in second person (e.g., “Generate”, “Place Bet”, “Deposit Now”).


No punctuation at end (no period).


For critical actions (e.g., “Withdraw All”), prepend icon exclamation-triangle (Lucide) with 4 dp gap.


Sizing Variants


Small: 32 dp height, 12 dp horizontal padding, 14 sp text.


Default: 48 dp height, 16 dp padding, 16 sp text.


Large: 56 dp height, 24 dp padding, 18 sp text. Center label.

—--------------

Badges
Badges communicate status or outcomes (e.g., WIN, LOSS, VOID).


Variants & Colors


WIN Badge


Background: --bp-primary-green


Text: 700 weight, 12 sp, black (--bp-foreground)


Padding: 4 dp vertical, 8 dp horizontal


Corner Radius: 4 dp


Icon (optional): check-circle (Lucide, 14 × 14 dp, stroke 1.5 px, white) to the left of “WIN” with 4 dp gap.


LOSS Badge


Background: --bp-danger-red


Text: 700 weight, 12 sp, white (--bp-off-white)


Padding: 4 dp vertical, 8 dp horizontal


Corner Radius: 4 dp


Icon (optional): x-circle (Lucide, 14 × 14 dp, stroke 1.5 px, white) to the left of “LOSS” with 4 dp gap.


VOID Badge


Background: transparent


Border: 1 px solid --bp-light-grey


Text: 400 weight, 12 sp, --text-secondary (#5E6366)


Padding: 4 dp vertical, 8 dp horizontal


Corner Radius: 4 dp


CUSTOM STATUS BADGE (e.g., “HOT” / “BOOSTED”)


Background: --bp-warning-orange


Text: 600 weight, 12 sp, white (--bp-off-white)


Padding: 4 dp vertical, 8 dp horizontal


Corner Radius: 4 dp


Icon: flame (Lucide, 14 × 14 dp, stroke 1.5 px, white) to the left of “HOT” with 4 dp gap.


Animation: On initial render, animate flame’s opacity: 0.8 → 1.0 → 0.8 over 1 s (@keyframes flamePulse).


Placement & Alignment


Inline with Text: Vertically center-align within line-height (1.2).


Spacing from Adjacent Elements: 8 dp gap.


Multiple Badges: If side-by-side, separate by 4 dp.


States & Behavior


Static: Default state with specified background and text.


—---------------------------------

Checkbox
A checkbox allows the user to select or deselect a binary option.


Structure


Use a <div role="checkbox" tabindex="0" aria-checked="false">; do not use <input> tags.


Label <span> to the right (8 dp gap); text must be HTML-escaped.


Default (Unchecked) Style


Box: 20 × 20 dp, 1 px solid --bp-light-grey, background --bp-off-white, corner radius 4 dp.


Label Text: 14 sp, 400 weight, --text-primary (#252A2D), vertically center-aligned.


Checked State


Icon: check (Lucide, 16 × 16 dp, stroke 1.5 px, color --bp-primary-green), centered in box.


Border: 1 px solid --bp-primary-green, background remains white.


Update aria-checked="true".


Disabled State


Box: 1 px solid --bp-light-grey, background --bp-light-grey at 30% opacity.


Icon (if checked): color --text-secondary (#5E6366).


Label Text: 14 sp, 400 weight, --text-secondary, opacity 0.5.


Cursor: not-allowed; no focus ring or tap feedback.


Update aria-disabled="true".


Focus State


Outline: 2 px dashed var(--bp-primary-green); outline-offset: 2 px around 20 × 20 dp box.


Hover & Active States


Hover: Box border transitions from --bp-light-grey to --bp-primary-green over 100 ms.


Active (pressed): Scale down to 0.95 over 80 ms, then back to 1.0 over 80 ms for entire group.


Spacing & Alignment


Vertical spacing between stacked checkboxes: 8 dp.


Align left edges at 16 dp margin from container left.


If label wraps, maintain 1.2 line-height and keep box aligned to first line’s vertical center.


Group Label / Legend


Above group: 14 sp, 600 weight, --text-primary, with 12 dp bottom margin.


Validation/Error State


If required and unchecked: outline box in --bp-danger-red 2 px, show error text below label: 12 sp, 300 weight, --bp-danger-red, “This field is required.”


Add aria-invalid="true" on box, link error text via aria-describedby.

—------------------------------

Radio Button
Radio buttons allow the user to select a single option from a set.


Structure


Use a <div role="radio" tabindex="0" aria-checked="false">; do not use <input type="radio"> tags.


Label <span> to the right (8 dp gap); text must be HTML-escaped.


Default (Unchecked) Style


Outer Circle: 20 × 20 dp, 1 px solid --bp-light-grey, background --bp-off-white, corner radius 50%.


Inner Circle: Hidden when unchecked.


Label Text: 14 sp, 400 weight, --text-primary (#252A2D), vertically center-aligned.


Checked State


Outer Border: 1 px solid --bp-primary-green.


Inner Circle: 10 × 10 dp filled circle, centered, background --bp-primary-green, corner radius 50%.


Update aria-checked="true".


Disabled State


Outer Border: 1 px solid --bp-light-grey.


Background: --bp-light-grey at 30% opacity.


Inner Circle (if checked): 10 × 10 dp, background --text-secondary (#5E6366).


Label Text: 14 sp, 400 weight, --text-secondary, opacity 0.5.


Cursor: not-allowed; no focus ring or tap feedback.


Update aria-disabled="true".


Focus State


Outline: 2 px dashed var(--bp-primary-green); outline-offset: 2 px around outer circle.


Hover & Active States


Hover: Outer border transitions from --bp-light-grey to --bp-primary-green over 100 ms.


Active (pressed): Scale down to 0.95 over 80 ms, then back to 1.0 over 80 ms for entire group.


Spacing & Alignment


Vertical spacing between stacked radios: 8 dp.


Align left edges at 16 dp margin from container left.


If label wraps, maintain 1.2 line-height and keep circle aligned to first line’s vertical center.


Group Label / Legend


Above group: 14 sp, 600 weight, --text-primary, with 12 dp bottom margin.


Validation/Error State


If required and none selected: outline outer circle in --bp-danger-red 2 px, show error text below group: 12 sp, 300 weight, --bp-danger-red, “Please select an option.”


Add aria-invalid="true" on selected container, link error via aria-describedby.

—------------------------

#### Switch Button  
A switch toggles a binary on/off state for a setting.


- **Structure**  
  - Use a \`<div role="switch" tabindex="0" aria-checked="false">\` container; do not use \`<input>\` tags.  
  - Label \`<span>\` positioned to the right (8 dp gap); text must be HTML-escaped.


- **Default (Off) Style**  
  - **Track**: 36 × 20 dp, background \`--bp-light-grey\`, corner radius 10 dp.  
  - **Thumb**: 16 × 16 dp, background \`--bp-off-white\`, corner radius 50%, positioned at left of track with 2 dp margin.  
  - **Label Text**: 14 sp, 400 weight, \`--text-primary\` (#252A2D), vertically center-aligned with track.  


- **On (Checked) Style**  
  - **Track**: background \`--bp-primary-green\`.  
  - **Thumb**: 16 × 16 dp, background \`--bp-off-white\`, corner radius 50%, positioned at right of track with 2 dp margin.  
  - Update \`aria-checked="true"\`.  


- **Disabled State**  
  - **Track**: background \`--bp-light-grey\` at 30% opacity.  
  - **Thumb**: 16 × 16 dp, background \`--bp-light-grey\` at 60% opacity.  
  - **Label Text**: 14 sp, 400 weight, \`--text-secondary\` (#5E6366), opacity 0.5.  
  - **Cursor**: \`not-allowed\`; no focus ring or tap feedback.  
  - Update \`aria-disabled="true"\`.  


- **Focus State**  
  - Outline: \`2 px dashed var(--bp-primary-green); outline-offset: 2 px\` around entire 36 × 20 dp track.  


- **Hover & Active States** (pointer devices)  
  - **Hover** (enabled only): Track background darkens by 10% for on or off.  
  - **Active (pressed)**: Scale entire switch container down to 0.95 over 80 ms, revert to 1.0 over 80 ms.  


- **Spacing & Alignment**  
  - Vertical spacing between stacked switches: 8 dp.  
  - Align left edges at 16 dp margin from container left.  
  - Label positioned 8 dp to the right of track, vertically centered relative to track’s center.  


- **Group Label / Legend** (if multiple switches together)  
  - Group label above set: 14 sp, 600 weight, \`--text-primary\`, with 12 dp bottom margin before first switch.  


- **Validation/Error State**  
  - If a switch is required to be on and remains off on form submission, outline track in \`--bp-danger-red\` 2 px and show error text below label: 12 sp, 300 weight, \`--bp-danger-red\`, “This setting is required.”  
  - Add \`aria-invalid="true"\` on switch and link error via \`aria-describedby\`.  

—-------------------------------

#### Input Fields  
An input field lets the user enter free-form text or numbers.


- **Structure**  
  - Use a \`<div role="textbox" tabindex="0" aria-multiline="false">\` container; do not use native \`<input>\` or \`<textarea>\` tags.  
  - Include a label \`<span>\` above the field (4 dp bottom margin) and an optional description \`<span>\` below (4 dp top margin). All text must be HTML-escaped.


- **Default (Empty) Style**  
  - **Container**: 40 dp height, background \`--bp-off-white\`, border 1 px solid \`--bp-light-grey\`, corner radius 4 dp.  
  - **Padding**: 8 dp horizontal (text inset).  
  - **Placeholder Text**: 14 sp, 400 weight, \`--text-secondary\` (#5E6366).  
  - **Label Text**: 14 sp, 600 weight, \`--text-primary\` (#252A2D), placed 4 dp above.  
  - **Description Text**: 12 sp, 300 weight, \`--text-secondary\`, placed 4 dp below.  
  - **Font**: \`font-family: Inter, Roboto, Helvetica, sans-serif\`; line-height 1.2.


- **Focused State**  
  - **Border**: 2 px solid \`--bp-primary-green\`.  
  - **Box Shadow**: none.  
  - The placeholder/remains visible until user types.  
  - Update \`aria-focused="true"\`.


- **Typing State (User Input)**  
  - **Text**: 14 sp, 400 weight, \`--text-primary\`.  
  - **Cursor**: default text cursor.  
  - If scrolling is needed (overflow), allow vertical scroll within container; keep height fixed at 40 dp.


- **Disabled State**  
  - **Background**: \`--bp-light-grey\` at 30% opacity.  
  - **Border**: 1 px solid \`--bp-light-grey\` at 50% opacity.  
  - **Placeholder/Text**: 14 sp, 400 weight, \`--text-secondary\`, opacity 0.5.  
  - **Label Text**: 14 sp, 600 weight, \`--text-secondary\`, opacity 0.5.  
  - **Description Text**: 12 sp, 300 weight, \`--text-secondary\`, opacity 0.5.  
  - **Cursor**: \`not-allowed\`; no focus ring or input permitted.  
  - Update \`aria-disabled="true"\`.


- **Error State**  
  - **Border**: 2 px solid \`--bp-danger-red\`.  
  - **Description Text**: 12 sp, 300 weight, \`--bp-danger-red\`, “This field is required” (or custom error message).  
  - Update \`aria-invalid="true"\` and link description via \`aria-describedby\`.


- **Placeholder Behavior**  
  - Placeholder text disappears on first keypress.  
  - If cleared back to empty, placeholder reappears.


- **Validation & Input Types**  
  - For numeric inputs (e.g., phone numbers), restrict allowed characters via onKeyDown handlers; show error if invalid characters typed.  
  - For currency/amount fields, format as user types (e.g., “+229 1234 1234”), ensure underlying value stored without formatting.


- **Focus State**  
  - Apply \`outline: 2 px dashed var(--bp-primary-green); outline-offset: 2 px\` to entire container if focused via keyboard.  
  - Remove outline if focused via pointer (only show border highlight).


- **Hover & Active States** (pointer devices)  
  - **Hover** (enabled only): Border color transitions from \`--bp-light-grey\` to \`hsl(0,0%,80%)\` over 100 ms.  
  - **Active (pressed)**: Scale container to 0.98 over 80 ms, revert to 1.0 over 80 ms.


- **Spacing & Alignment**  
  - Vertical spacing between stacked inputs: 12 dp (including label+field+description).  
  - Align input left edge at 16 dp margin from container left.  
  - Labels should align to the same 16 dp left margin.  


- **Group Label / Legend** (if grouping multiple inputs)  
  - Group label above set: 14 sp, 600 weight, \`--text-primary\`, with 12 dp bottom margin before first input.


- **Input with Prefix/Suffix**  
  - If including a fixed prefix (e.g., country code “+229”), render prefix \`<span>\` inside left padding area (8 dp margin from left border), 14 sp, 400 weight, \`--text-secondary\`.  
  - Adjust text inset for user input to start after prefix by 4 dp.  
  - For suffix icons or units, place a clickable icon (\`Lucide\`) or text \`<span>\` inside right padding area (8 dp from right border), 14 sp, 400 weight, \`--text-secondary\`.  
  - Ensure focus ring still encompasses full 40 dp height including prefix/suffix.


- **Validation/Error State**  
  - Outline border in \`--bp-danger-red\` 2 px.  
  - Show error description below: 12 sp, 300 weight, \`--bp-danger-red\`.  
  - Link with \`aria-describedby\`.


- **ARIA Attributes**  
  - Use \`role="textbox"\` and manage \`aria-multiline="false"\`.  
  - For disabled: \`aria-disabled="true"\`.  
  - For error: \`aria-invalid="true"\` and \`aria-describedby="error-id"\`.  
  - Associate label with input container via \`aria-labelledby="label-id"\`.

—---------------------------------

#### Alert  
An alert displays important contextual messages (success, error, warning, info) in a dismissible banner.


- **Structure**  
  - Use a \`<div role="alert">\` container; do not use native \`<alert>\` tags.  
  - Include a leading Lucide icon (20 × 20 dp, stroke 1.5 px) corresponding to variant, followed by a text \`<span>\` (HTML-escaped).  
  - Optional close icon (\`x\` Lucide, 16 × 16 dp, stroke 1.5 px) on the far right if dismissible.  
  - All content (icon, text, close) vertically center-aligned within the banner.


- **Variants & Colors**  
  1. **Success Alert**  
     - **Background**: \`--bp-off-white\` with 1 px solid \`--bp-primary-green\` border on left (4 dp wide).  
     - **Icon**: \`check-circle\` Lucide, color \`--bp-primary-green\`.  
     - **Text**: 14 sp, 400 weight, \`--text-primary\` (#252A2D).  
  2. **Error Alert**  
     - **Background**: \`--bp-off-white\` with 1 px solid \`--bp-danger-red\` border on left (4 dp wide).  
     - **Icon**: \`x-circle\` Lucide, color \`--bp-danger-red\`.  
     - **Text**: 14 sp, 400 weight, \`--text-primary\`.  
  3. **Warning Alert**  
     - **Background**: \`--bp-off-white\` with 1 px solid \`--bp-warning-orange\` border on left (4 dp wide).  
     - **Icon**: \`alert-circle\` or \`alert-triangle\` Lucide, color \`--bp-warning-orange\`.  
     - **Text**: 14 sp, 400 weight, \`--text-primary\`.  
  4. **Info Alert**  
     - **Background**: \`--bp-off-white\` with 1 px solid \`--bp-info-blue\` border on left (4 dp wide).  
     - **Icon**: \`info\` Lucide, color \`--bp-info-blue\`.  
     - **Text**: 14 sp, 400 weight, \`--text-primary\`.


- **Default (Static) Style**  
  - **Height**: Auto with 12 dp vertical padding, 16 dp horizontal padding.  
  - **Corner Radius**: 4 dp (for top corners if at page top) or 0 dp if flush with container.  
  - **Spacing Between Elements**: 8 dp between icon and text, 8 dp between text and close icon.  
  - **Font**: Inter, line-height 1.2.  
  - **Width**: Full width of parent container (minus any safe-area insets).


- **Dismissible State**  
  - Show a close icon (\`x\` Lucide, 16 × 16 dp, \`--text-secondary\` #5E6366) on right side.  
  - Tapping close removes the alert with fade-out (opacity 1 → 0 over 200 ms) and height collapse (max-height from content height → 0 over 200 ms).  
  - After dismiss, the alert container is removed from the DOM.  


- **Icon-Only Alerts (compact)**  
  - If text is very short (< 20 characters), allow icon + text horizontally centered, with 12 dp vertical padding and 16 dp horizontal padding.  
  - Maintain the same left-border color and overall height as default.


- **Placement & Alignment**  
  - **Page-Level Alerts**: Positioned at top of scrollable content, full width, flush with left/right edges of parent.  
  - **Section-Level Alerts**: Positioned at top of that section’s container, with 16 dp top margin above and 16 dp bottom margin below for separation.  
  - **Inside Modals/Sheets**: Appear directly below modal header with 12 dp top margin. Width spans modal content area minus 16 dp padding on both sides.


- **States & Behavior**  
  - **Static**: Displays without icon animation.  
  - **Animated Entrance**: Fade in from opacity 0 → 1 over 200 ms, with slight slide down from –8 dp → 0.  
  - **Animated Exit**: Fade out (opacity 1 → 0) over 200 ms, then remove.  
  - **Persistent Alerts** (non-dismissible): Do not show close icon; border and icon remain, and alert cannot be dismissed by user.


- **Spacing & Alignment**  
  - Vertical margins: 16 dp above and below when placed between content blocks.  
  - Horizontal padding inside: 16 dp.  
  - Icon and text baseline aligned: icon’s center aligns with text’s x-height.


- **Validation/Error Use**  
  - When a form submission fails, show an Error Alert at top of form container with error message.  
  - Use 16 dp margin-bottom to separate from form fields.


- **ARIA Attributes**  
  - Each \`<div role="alert">\` must include the text directly (no \`aria-label\` on icon).  
  - If dismissible, close control: \`<div role="button" tabindex="0" aria-label="Dismiss alert">\`.

—---------------------------------------

#### Alert  
An alert displays an important contextual message (info, success, warning, error) in a dismissible banner.


- **Structure**  
  - Use a \`<div role="alert">\` container; do not use native \`<alert>\` tags.  
  - Inside, left-aligned: a Lucide icon (20 × 20 dp, stroke 1.5 px) indicating variant.  
  - Next to it, vertically stacked:  
    1. **Title** (\`<span>\`): 600 weight, 16 sp, \`--text-primary\` (#252A2D).  
    2. **Description** (\`<span>\`): 400 weight, 14 sp, \`--text-primary\`.  
  - On the far right (optional), a dismiss icon (\`x\` Lucide, 16 × 16 dp, stroke 1.5 px, \`--text-secondary\` #5E6366) inside a \`<div role="button" tabindex="0">\`.


- **Variants & Colors**  
  1. **Info Alert**  
     - **Left Border (4 dp wide)**: \`--bp-info-blue\` (#22BFDB)  
     - **Background**: \`--bp-off-white\` (#FFFFFF)  
     - **Icon**: \`info\` Lucide, color \`--bp-info-blue\`  
     - **Text**: dark (\`--text-primary\`)


  2. **Success Alert**  
     - **Left Border**: \`--bp-primary-green\` (#9CE800)  
     - **Background**: \`--bp-off-white\`  
     - **Icon**: \`check-circle\` Lucide, color \`--bp-primary-green\`  
     - **Text**: dark (\`--text-primary\`)


  3. **Warning Alert**  
     - **Left Border**: \`--bp-warning-orange\` (#FF7A00)  
     - **Background**: \`--bp-off-white\`  
     - **Icon**: \`alert-triangle\` Lucide, color \`--bp-warning-orange\`  
     - **Text**: dark (\`--text-primary\`)


  4. **Error Alert**  
     - **Left Border**: \`--bp-danger-red\` (#CC371B)  
     - **Background**: \`--bp-off-white\`  
     - **Icon**: \`x-circle\` Lucide, color \`--bp-danger-red\`  
     - **Text**: dark (\`--text-primary\`)


- **Default (Static) Style**  
  - **Padding**: 12 dp vertical, 16 dp horizontal.  
  - **Corner Radius**: 4 dp on top corners if at top of page; otherwise 0 dp.  
  - **Spacing**: 8 dp gap between icon and title; 4 dp between title and description; 8 dp between description and close icon.  
  - **Width**: Full width of parent container (respect any safe-area insets).  


- **Dismissible State**  
  - If dismissible, include the close icon on right.  
  - Tap/click close: fade out (opacity 1 → 0 over 200 ms) and collapse height (max-height → 0 over 200 ms), then remove from DOM.  
  - Close icon container: \`<div role="button" tabindex="0" aria-label="Dismiss alert">\`.


- **Icon-Only Alerts (Compact)**  
  - If description is ≤ 20 characters, center icon + title horizontally, with same vertical padding (12 dp) and 16 dp horizontal padding.  
  - Maintain left-border color and overall height as default.


- **Placement & Alignment**  
  - **Page-Level Alerts**: Pinned at top of scrollable content, full viewport width.  
  - **Section-Level Alerts**: Inside a container, 16 dp top margin above and 16 dp bottom margin below.  
  - **Inside Modals/Sheets**: Below modal header with 12 dp top margin; width = modal width minus 16 dp padding on each side.


- **States & Behavior**  
  - **Entrance Animation**: Fade in (opacity 0 → 1 over 200 ms) while sliding down from –8 dp → 0.  
  - **Exit Animation**: Fade out (opacity 1 → 0 over 200 ms) then remove.  
  - **Persistent Alerts**: Omit close icon; user cannot dismiss.


- **ARIA Attributes**  
  - Container: \`role="alert"\`.  
  - If dismissible, close control: \`role="button"\`, \`tabindex="0"\`, \`aria-label="Dismiss alert"\`.  
  - No additional \`aria-label\` on icon; place text directly in container so screen readers announce message.

—------------------------

#### Bet Button  
A Bet Button displays a specific betting option (e.g., “1”, “X”, “2”) along with its odds.


- **Structure**  
  - Use a \`<div role="button" tabindex="0">\` container; do not use \`<button>\` or \`<a>\` tags.  
  - Two-line text, centered:  
    1. **Label** (e.g., “1”)  
    2. **Odds** (e.g., “4.35”)  
  - All text must be HTML-escaped.


- **Default (Unselected) Style**  
  - **Container Size**: Minimum 64 × 36 dp; auto-width if content requires (min 64 dp).  
  - **Border**: 1 px solid \`--bp-light-grey\`.  
  - **Background**: transparent (\`--bp-off-white\` behind if card)  
  - **Label Text**: 400 weight, 14 sp, \`--text-secondary\` (#5E6366).  
  - **Odds Text**: 600 weight, 16 sp, \`--text-primary\` (#252A2D).  
  - **Corner Radius**: 4 dp.  
  - **Padding**: 4 dp vertical, 8 dp horizontal.  


- **Selected State**  
  - **Border**: 2 px solid \`--bp-primary-green\`.  
  - **Background**: \`rgba(156, 232, 0, 0.1)\` (10% opacity).  
  - **Label Text**: 400 weight, 14 sp, \`--bp-primary-green\`.  
  - **Odds Text**: 700 weight, 16 sp, \`--bp-primary-green\`.  
  - **Corner Radius**: 4 dp.


- **Disabled State**  
  - **Border**: 1 px solid \`--bp-light-grey\` at 50% opacity.  
  - **Background**: \`--bp-light-grey\` at 30% opacity.  
  - **Label & Odds Text**: 400 weight, 14 sp/16 sp, \`--text-secondary\` (#5E6366) at 50% opacity.  
  - **Cursor**: \`not-allowed\`; no hover/focus feedback.  
  - Update \`aria-disabled="true"\`.


- **Hover & Active States** (pointer devices)  
  - **Hover** (enabled only):  
    - Border transitions from \`--bp-light-grey\` to \`hsl(0, 0%, 70%)\` over 100 ms.  
    - Background remains transparent.  
  - **Active (pressed)**:  
    - Scale container to 0.95 over 80 ms, then back to 1.0 over 80 ms.  


- **Focus State** (keyboard navigation)  
  - Apply \`outline: 2 px dashed var(--bp-primary-green); outline-offset: 2 px\` around the 64 × 36 dp area.


- **Label & Odds Alignment**  
  - **Vertical Stack**: Label on top, odds below; center both horizontally.  
  - **Spacing**: 2 dp between label and odds.  
  - If odds text wraps or is longer, allow two lines, but maintain min 36 dp height.


- **Spacing & Alignment in Lists**  
  - Horizontal gap between adjacent Bet Buttons: 8 dp.  
  - If stacking vertically, 8 dp gap between rows.  
  - Align left edges of buttons at 16 dp margin from container left.


- **ARIA Attributes**  
  - Set \`role="button"\`, manage \`aria-pressed="true/false"\`.  
  - For disabled: add \`aria-disabled="true"\`.  

—---------------------------------

#### Pre-Sport Card  
The Pre-Sport Card displays a single upcoming event with contextual details and, optionally, a row of Bet Buttons. It can appear in lists or as a standalone element.


- **Structure**  
  - Use a \`<div role="group">\` container; do not use \`<card>\` tags.  
  - **Padding & Corner Radius**: 12 dp padding (12 px if 1 dp = 1 px), 8 dp corner radius.  
  - **Background**: \`--bp-off-white\` (#FFFFFF).  
  - **Border/Shadow**: No border or shadow; rely on white-on-light-grey layering for separation.  


  Inside the container, vertically stacked with 8 dp gap between sections:


  1. **Competition Path**  
     - Single-line text: e.g., “Football / Australia / Queensland NPL”.  
     - Style: 400 weight, 12 sp, \`--text-secondary\` (#5E6366).  
     - Alignment: Left-aligned.


  2. **Teams Row**  
     - Two lines, each showing one team name:  
       - **Home Team**: 600 weight, 16 sp, \`--text-primary\` (#252A2D).  
       - **“vs” Separator**: Implicit (stacked lines); do not render “v” between lines—simply place team names one above the other.  
       - **Away Team**: 600 weight, 16 sp, \`--text-primary\` (#252A2D).  
     - If a team name exceeds container width, wrap to two lines (max 2 lines per name) with ellipsis.  
     - Line spacing: 1.2; vertical gap between team lines: 4 dp.


  3. **Date & Time**  
     - Single-line: e.g., “10:30 Wed 28/05”.  
     - Style: 300 weight, 12 sp, \`--text-secondary\` (#5E6366).  
     - Alignment: Left-aligned, 4 dp below the bottom team name.


  4. **Bottom Row (Optional Bet Buttons & Stat)**  
     - If **with Bet Buttons**:  
       - Horizontally scrollable on narrow screens; on wider screens, show minimum 3 buttons side-by-side.  
       - Each Bet Button as defined in “Bet Button” spec:  
         - Container min 64 × 36 dp, border 1 px \`--bp-light-grey\`, corner radius 4 dp.  
         - Label 400 weight, 14 sp \`--text-secondary\`; Odds 600 weight, 16 sp \`--text-primary\`.  
         - On selection, border 2 px \`--bp-primary-green\`, background \`rgba(156,232,0,0.1)\`, text/odds in \`--bp-primary-green\`.  
       - **Spacing between adjacent Bet Buttons**: 8 dp.  
       - **Optional Stat** (“83” in example):  
         - Positioned to the far right of the row (if space) or after the last Bet Button with 12 dp gap.  
         - Style: 400 weight, 14 sp, \`--text-secondary\`.  
         - Alignment: Vertically center with Bet Button row.  
     - If **without Bet Buttons**:  
       - Omit the entire bottom row. Ensure bottom padding of card remains 12 dp.


- **Sizing & Responsiveness**  
  - **Width**: Full width of parent minus horizontal margins (e.g., 16 dp from each side of screen).  
  - **Height**: Determined by content; ensure at least 120 dp tall when Bet Buttons present, otherwise at least 88 dp tall (competition + teams + date/time + padding).  
  - **Text Wrapping**: Team names wrap at 2 lines; date/time must remain single line, truncating with ellipsis if necessary.


- **Spacing & Alignment (Summary)**  
  - Vertical stack of sections with 8 dp gap.  
  - Horizontal padding: 12 dp on left and right.  
  - Text left-aligned at 12 dp from left edge.  
  - Bottom row: 12 dp top margin from date/time, 12 dp bottom padding of container.  
  - Bet Buttons horizontal gap: 8 dp; margin-right: 12 dp before stat.


- **States & Behavior**  
  - **Default**: Static display.  
  - **Pressed (if entire card is tappable)**: scale to 0.98 over 80 ms, revert over 80 ms. (Only if card itself is interactive.)  
  - **Dynamic Updates**: If streamed score or status appears, show a small “LIVE” badge (4 dp radius, 12 sp bold, \`--bp-danger-red\` background, white text) at top-right corner of the card, 8 dp from top and right edges.


- **ARIA Attributes**  
  - Container: \`role="group"\`, \`aria-label="Upcoming event: [Competition Path], [Home Team] vs [Away Team] at [Time]"\`.  
  - If Bottom Row Bet Buttons present, each Bet Button uses \`role="button"\` and manages \`aria-pressed="true/false"\`.  
  - If card itself clickable: add \`role="button"\` and \`tabindex="0"\` to outer container, and manage \`onKeyDown\` for Enter/Space.

—-------------------------------


############################################
### DATA INTEGRATION
Fetch upcoming events from **https://pawa-api.replit.app/gh/events** at load.  
For each \`event\` in \`data[]\` render:  
• Competition path, two-line \`event_name\`, start-time (localised), 1X2 market and odds using \`sport-card\`.  
• Highlight selection with \`"hot": 1\` via orange outline + flame icon.  
• Support “Add to Bet-Slip” on selection tap (haptic micro-feedback).


############################################
### INTERACTION & MOTION
Sheets & drawers slide vertical 250 ms ease-out.  
Boosted/Hot chip pulses opacity 80 → 100 % once (1 s).  
Active bottom-nav icon has 36 dp green halo (40 % opacity).  
All text content must be HTML-escaped.


############################################
### ENGINEERING RULES
- Always use Shadcn and Tailwind.  
- Always use Lucide Icon; do not use \`<svg>\` tags.  
- Text content must be HTML-escaped.  
- Use primary color.  
- Always integrates with your custom design system (including tailwind.config.ts and global.css).  
- Always automatically reads markdown documentation from the \`guidelines/\` folder in your project.  
- Always uses theme colors, radius, fonts, animations, and variables defined in your Tailwind + CSS custom properties, including support for \`--font-roboto\`.  
- Always renders components using Next.js App Router (unless otherwise specified) and supports shadcn/ui by default.  
- If you can, you should use \`sport-card\` component.  
- Do not create \`<button>\` or \`<a>\` tags.  


############################################
### ACCESSIBILITY
All colour/text pairs ≥ 4.5 : 1 contrast (WCAG AA).  
Odds chip “selected” state announces: “Odds <numeric value> selected”.`

    const handleDownloadPrompt = () => {
        const blob = new Blob([masterPrompt], {type: "text/plain"})
        const url = URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = "pawablox-system-prompt.txt"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Mobile Header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b bg-background">
                <SidebarTrigger/>
                <div className="flex items-center gap-2">
                    <div
                        className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-xs">P</span>
                    </div>
                    <div className="font-bold text-sm">
                        <span className="text-green-600">pawa</span>
                        <span className="text-gray-900">bloX</span>
                    </div>
                </div>
                <div></div>
            </div>

            <div className="flex-1 bg-background">
                <div className="container mx-auto p-6 space-y-8 max-w-4xl">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <div className="flex items-center justify-center gap-2">
                            <HelpCircle className="w-6 h-6 text-green-600"/>
                            <span className="text-sm text-muted-foreground">Documentation</span>
                        </div>
                        <h1 className="text-4xl font-bold">How to Use pawabloX</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Choose your platform and follow the simple steps to start building with pawabloX design
                            system
                        </p>
                    </div>

                    {/* Download Resources */}
                    <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Download className="w-5 h-5 text-purple-600"/>
                                Download Resources
                            </CardTitle>
                            <CardDescription>
                                Download the system prompt and reference images/GIFs to use locally or attach to your AI
                                tools
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                {/* System Prompt Download */}
                                <Card className="border-blue-200 bg-blue-50/50">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2 text-base">
                                            <FileText className="w-4 h-4 text-blue-600"/>
                                            System Prompt File
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-sm text-muted-foreground">
                                            Download the complete pawabloX system prompt as a .txt file for easy reuse
                                        </p>
                                        <Button variant="outline" size="lg" className="w-full"
                                                onClick={handleDownloadPrompt}>

                                            <div className="flex items-center gap-2">
                                                <Download className="w-4 h-4 mr-2"/>
                                                Download system-prompt.txt
                                            </div>

                                        </Button>
                                    </CardContent>
                                </Card>

                                {/* Reference Images & GIFs */}
                                <Card className="border-green-200 bg-green-50/50">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="flex items-center gap-2 text-base">
                                            <ImageIcon className="w-4 h-4 text-green-600"/>
                                            Reference Images
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <p className="text-sm text-muted-foreground">
                                            Download betPawa app screenshots and GIFs to use as visual references
                                        </p>
                                        <div className="space-y-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/preevent.png"
                                                    a.download = "betpawa-preevent.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)

                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2"/>
                                                    Pre-event betting (PNG)
                                                </div>

                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/mybets.png"
                                                    a.download = "betpawa-mybets.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2"/>
                                                    My Bets screen (PNG)
                                                </div>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/betslip.png"
                                                    a.download = "betslip.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2"/>
                                                    Betslip screen (PNG)
                                                </div>
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/casino.png"
                                                    a.download = "betpawa-casino.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Casino screen (PNG)
                                                </div>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/homepage-loggedin.png"
                                                    a.download = "betpawa-homepage-loggedin.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Homepage Logged In screen (PNG)
                                                </div>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/homepage-loggedout.png"
                                                    a.download = "betpawa-homepage-loggedout.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Homepage Logged Out screen (PNG)
                                                </div>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/join-now.png"
                                                    a.download = "betpawa-join-now.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Join Now screen (PNG)
                                                </div>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/livenow.png"
                                                    a.download = "betpawa-livenow.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Live Now screen (PNG)
                                                </div>
                                            </Button>

                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => {
                                                    const a = document.createElement("a")
                                                    a.href = "/login.png"
                                                    a.download = "betpawa-login.png"
                                                    document.body.appendChild(a)
                                                    a.click()
                                                    document.body.removeChild(a)
                                                }}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <Download className="w-4 h-4 mr-2" />
                                                    Login screen (PNG)
                                                </div>
                                            </Button>

                                            <div className="bg-green-100 border border-green-200 rounded-lg p-2">
                                                <p className="text-xs text-green-700">
                                                    💡 <strong>Tip:</strong> GIFs show user interactions and animations -
                                                    perfect for
                                                    demonstrating app flows!
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* How to Attach Files */}
                            <div className="bg-purple-100 border border-purple-200 rounded-lg p-4">
                                <div className="flex items-start gap-3">
                                    <Paperclip className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5"/>
                                    <div>
                                        <p className="text-sm font-medium text-purple-800">📎 How to Attach Files</p>
                                        <div className="text-xs text-purple-700 mt-2 space-y-1">
                                            <p>
                                                <strong>v0:</strong> Drag and drop files (PNG, JPG, GIF, TXT) directly
                                                into the chat, or click
                                                the attachment button
                                            </p>
                                            <p>
                                                <strong>Replit:</strong> Upload files to your project folder, then
                                                reference with @filename
                                            </p>
                                            <p>
                                                <strong>ChatGPT/Claude:</strong> Use the paperclip icon to attach files
                                                (supports images, GIFs,
                                                and text files)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Platform Selection */}
                    <Tabs defaultValue="v0" className="space-y-8">
                        <TabsList className="grid w-full grid-cols-2 h-12">
                            <TabsTrigger value="v0" className="flex items-center gap-2">
                                <Zap className="w-4 h-4"/>
                                v0 by Vercel
                            </TabsTrigger>
                            <TabsTrigger value="replit" className="flex items-center gap-2">
                                <Terminal className="w-4 h-4"/>
                                Replit
                            </TabsTrigger>
                        </TabsList>

                        {/* v0 Tab */}
                        <TabsContent value="v0" className="space-y-6">
                            {/* Quick Start Card */}
                            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/30">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-green-600"/>
                                        Quick Start with v0
                                    </CardTitle>
                                    <CardDescription>Get started in under 2 minutes with our pre-configured
                                        template</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full"
                                        onClick={() => window.open("https://v0.dev/community/pawa-blox-e2g02lKaB5a", "_blank")}
                                    >
                                        <div className="flex items-center gap-2">
                                            <ExternalLink className="w-4 h-4 mr-2"/>
                                            Open pawabloX Template in v0
                                        </div>

                                    </Button>
                                    <p className="text-sm text-green-700 text-center">
                                        ✅ Design system pre-configured • ✅ Ready to use • ✅ No setup required
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Video Tutorial for v0 */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Play className="w-5 h-5 text-blue-600"/>
                                        Video Tutorial - v0 Usage
                                    </CardTitle>
                                    <CardDescription>Watch how to use pawabloX with v0 in action</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="text-gray-400 text-sm ml-2">v0 Assistant Demo</span>
                                        </div>
                                        <img
                                            src="/v0.gif"
                                            alt="Demo showing how to use @v0/system-prompt.txt with Replit Assistant"
                                            className="w-full rounded border border-gray-600"
                                        />

                                    </div>
                                </CardContent>
                            </Card>

                            {/* Step by Step Guide */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600"/>
                                        Step-by-Step Guide
                                    </CardTitle>
                                    <CardDescription>Follow these simple steps to use pawabloX with v0</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Step 1 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                        1
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold">Access the Template</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Click the "Open pawabloX Template in v0" button above to access our
                                                pre-configured template.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold">Sign in to v0</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Sign in with your Vercel account (it's free!) and click "open in v0" to
                                                create your own copy.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            3
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold">Attach Files (Optional)</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Drag and drop the downloaded system-prompt.txt file and reference
                                                images/GIFs into v0 chat for
                                                better context.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            4
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold">Start Creating</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Type your request in the chat. The pawabloX design system is already
                                                loaded!
                                            </p>
                                            <div className="bg-gray-50 border rounded-lg p-3">
                                                <p className="text-sm font-medium mb-2">Example prompts:</p>
                                                <ul className="text-sm text-gray-600 space-y-1">
                                                    <li>• "Create a login form with pawabloX styling"</li>
                                                    <li>• "Build a sports betting card component"</li>
                                                    <li>• "Make a responsive dashboard layout"</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Advanced Usage */}
                            <Collapsible>
                                <CollapsibleTrigger className="w-full" onClick={() => toggleSection("v0-advanced")}>
                                    <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Code className="w-5 h-5 text-purple-600"/>
                                                    <CardTitle className="text-left">Advanced Usage</CardTitle>
                                                </div>
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform ${openSections["v0-advanced"] ? "rotate-180" : ""}`}
                                                />
                                            </div>
                                            <CardDescription className="text-left">
                                                Manual setup and custom prompts for advanced users
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="mt-4">
                                    <Card>
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="space-y-3">
                                                <h4 className="font-semibold">Manual Master Prompt</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    If you prefer to use the master prompt manually, copy it below and
                                                    paste it at the beginning
                                                    of your v0 chats:
                                                </p>
                                                <div className="relative">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">Master Prompt</span>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => {
                                                                handleCopyCode(masterPrompt, "master-prompt")
                                                            }}
                                                        >
                                                            {copiedCode === "master-prompt" ? (
                                                                <div className="flex items-center gap-2">
                                                                    <Check className="w-4 h-4 mr-2"/>
                                                                    Copied!
                                                                </div>
                                                            ) : (
                                                                <div className="flex items-center gap-2">
                                                                    <Copy className="w-4 h-4 mr-2"/>
                                                                    Copy
                                                                </div>
                                                            )}
                                                        </Button>
                                                    </div>
                                                    <div
                                                        className="bg-gray-50 border rounded-lg p-4 max-h-48 overflow-y-auto">
                                                        <pre
                                                            className="text-xs text-gray-700 whitespace-pre-wrap font-mono">{masterPrompt}</pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CollapsibleContent>
                            </Collapsible>
                        </TabsContent>

                        {/* Replit Tab */}
                        <TabsContent value="replit" className="space-y-6">
                            {/* Quick Start Card */}
                            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/30">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-blue-600"/>
                                        Quick Start with Replit
                                    </CardTitle>
                                    <CardDescription>Code collaboratively with pawabloX in your
                                        browser</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Button
                                        className="w-full "
                                        variant="secondary"
                                        onClick={() => window.open("https://replit.com/t/pawatech/repls/pawablox/view", "_blank")}
                                    >
                                        <div className="flex items-center gap-2">
                                            <ExternalLink className="w-4 h-4 mr-2"/>
                                            Open pawabloX in Replit
                                        </div>

                                    </Button>
                                    <p className="text-sm text-blue-700 text-center">
                                        ✅ Full development environment • ✅ Collaborative coding • ✅ Instant preview
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Video Tutorial for Replit */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Play className="w-5 h-5 text-blue-600"/>
                                        Replit Assistant Demo
                                    </CardTitle>
                                    <CardDescription>See how to use the @v0/system-prompt.txt feature</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-300">
                                        <div className="flex items-center gap-2 mb-3">
                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            <span className="text-gray-400 text-sm ml-2">Replit Assistant Demo</span>
                                        </div>
                                        <img
                                            src="/replit.gif"
                                            alt="Demo showing how to use @v0/system-prompt.txt with Replit Assistant"
                                            className="w-full rounded border border-gray-600"
                                        />

                                    </div>
                                </CardContent>
                            </Card>

                            {/* Step by Step Guide */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600"/>
                                        Step-by-Step Guide
                                    </CardTitle>
                                    <CardDescription>Follow these steps to use pawabloX with Replit
                                        Assistant</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Step 1 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            1
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold">Open the Replit Project</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Click "Open pawabloX in Replit" above to access our pre-configured
                                                project.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold">Remix this app</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Click "Remix this app" to create your own copy that you can edit and modify.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            3
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold">Upload Files (Optional)</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Upload the downloaded system-prompt.txt and reference images/GIFs to
                                                your project folder for
                                                easy access.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 4 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            4
                                        </div>
                                        <div className="space-y-3">
                                            <h4 className="font-semibold">Use Replit Assistant</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Open the AI Assistant and use the special file reference feature:
                                            </p>
                                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                                                <p className="text-sm font-medium text-purple-800 mb-2">Magic
                                                    Command:</p>
                                                <code
                                                    className="bg-purple-100 px-2 py-1 rounded text-sm text-purple-700">
                                                    @v0/system-prompt.txt create a login form
                                                </code>
                                                <p className="text-xs text-purple-600 mt-2">
                                                    ✨ This automatically includes all pawabloX guidelines!
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Step 5 */}
                                    <div className="flex gap-4">
                                        <div
                                            className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            5
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold">Preview Your App</h4>
                                            <p className="text-muted-foreground text-sm">
                                                Click "Run" to see your pawabloX-styled components in action!
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Pro Tips */}
                            <Card className="border-green-200 bg-green-50/30">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Lightbulb className="w-5 h-5 text-green-600"/>
                                        Pro Tips for Replit
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="flex gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"/>
                                        <div>
                                            <p className="font-medium text-sm">Use the @ symbol</p>
                                            <p className="text-xs text-muted-foreground">
                                                Always start with <code
                                                className="bg-gray-100 px-1 rounded">@v0/system-prompt.txt</code> for
                                                best results
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"/>
                                        <div>
                                            <p className="font-medium text-sm">Upload reference images & GIFs</p>
                                            <p className="text-xs text-muted-foreground">
                                                Add betPawa screenshots and GIFs to your project and reference them in
                                                prompts
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"/>
                                        <div>
                                            <p className="font-medium text-sm">Be specific</p>
                                            <p className="text-xs text-muted-foreground">
                                                Describe exactly what you want: "Create a betting slip with 3
                                                selections"
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                            <Collapsible>
                                <CollapsibleTrigger className="w-full" onClick={() => toggleSection("v0-advanced")}>
                                    <Card className="cursor-pointer hover:bg-gray-50 transition-colors">
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <Code className="w-5 h-5 text-purple-600"/>
                                                    <CardTitle className="text-left">Advanced Usage</CardTitle>
                                                </div>
                                                <ChevronDown
                                                    className={`w-5 h-5 transition-transform ${openSections["v0-advanced"] ? "rotate-180" : ""}`}
                                                />
                                            </div>
                                            <CardDescription className="text-left">
                                                Manual setup and custom prompts for advanced users
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </CollapsibleTrigger>
                                <CollapsibleContent className="mt-4">
                                    <Card>
                                        <CardContent className="pt-6 space-y-4">
                                            <div className="space-y-3">
                                                <h4 className="font-semibold">Manual Master Prompt</h4>
                                                <p className="text-sm text-muted-foreground">
                                                    If you prefer to use the master prompt manually, copy it below and
                                                    paste it at the beginning
                                                    of your replit chats:
                                                </p>
                                                <div className="relative">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="text-sm font-medium">Master Prompt</span>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => {
                                                                handleCopyCode(masterPrompt, "master-prompt")
                                                            }}
                                                        >
                                                            {copiedCode === "master-prompt" ? (
                                                                <div className="flex items-center gap-2">
                                                                    <Check className="w-4 h-4 mr-2"/>
                                                                    Copied!
                                                                </div>
                                                            ) : (
                                                                <div className="flex items-center gap-2">
                                                                    <Copy className="w-4 h-4 mr-2"/>
                                                                    Copy
                                                                </div>
                                                            )}
                                                        </Button>
                                                    </div>
                                                    <div
                                                        className="bg-gray-50 border rounded-lg p-4 max-h-48 overflow-y-auto">
                                                        <pre
                                                            className="text-xs text-gray-700 whitespace-pre-wrap font-mono">{masterPrompt}</pre>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CollapsibleContent>
                            </Collapsible>
                        </TabsContent>
                    </Tabs>

                    {/* Need Help Section */}
                    <Card className="border-gray-200 bg-gray-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-gray-600"/>
                                Need Help?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <p className="text-sm text-muted-foreground">
                                Check out our example apps to see pawabloX in action, or visit our component library for
                                detailed
                                documentation.
                            </p>
                            <div className="flex gap-3">
                                <Button variant="outline" size="sm" asChild>
                                    <a href="/example-apps" className="flex flex-row items-center gap-2">
                                        <ArrowRight className="w-4 h-4 mr-2"/>
                                        View Examples
                                    </a>
                                </Button>
                                <Button variant="outline" size="sm" asChild>
                                    <a href="/all-components" className="flex flex-row items-center gap-2">
                                        <Code className="w-4 h-4 mr-2"/>
                                        Browse Components
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Success Message */}
                    {copiedCode && (
                        <div
                            className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-in slide-in-from-bottom-2">
                            <Check className="w-4 h-4"/>
                            Copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

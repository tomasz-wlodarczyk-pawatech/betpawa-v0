"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    HelpCircle,
    ExternalLink,
    Code,
    Palette,
    Download,
    Zap,
    Globe,
    Terminal,
    Layers,
    Copy,
    Check,
} from "lucide-react";
import { useState } from "react";

export default function HowToUsePage() {
    const [copiedCode, setCopiedCode] = useState<string>("");

    const handleCopyCode = (code: string, id: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(""), 2000);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div className="md:hidden flex items-center justify-between p-4 border-b bg-background">
                <SidebarTrigger />
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
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
                <div className="container mx-auto p-6 space-y-8 max-w-6xl">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-green-600" />
                            <span className="text-sm text-muted-foreground">
                                Documentation
                            </span>
                        </div>
                        <h1 className="text-4xl font-bold">
                            How to Use pawabloX
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Learn how to integrate pawabloX design system into
                            your projects using various platforms and tools.
                        </p>
                    </div>

                    <div className="flex flex-row items-center justify-center gap-6">
                        <Card className="border-green-200 bg-green-50/50 w-[50%]">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-green-600" />
                                    <CardTitle className="text-lg">
                                        v0 by Vercel
                                    </CardTitle>
                                </div>
                                <CardDescription>
                                    Generate UI components with AI using
                                    pawabloX design tokens
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href="https://v0.dev/community/pawa-blox-e2g02lKaB5a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row items-center gap-2 w-full"
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        asChild
                                        className="w-full"
                                    >
                                        <a
                                            href="https://v0.dev/community/pawa-blox-e2g02lKaB5a"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-row items-center gap-2 w-full"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2"/>
                                            Try v0
                                        </a>
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 bg-blue-50/50 w-[50%]">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-5 h-5 text-blue-600"/>
                                    <CardTitle className="text-lg">
                                        Replit
                                    </CardTitle>
                                </div>
                                <CardDescription>
                                    Code collaboratively with pawabloX
                                    components in the browser
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <a
                                    href="https://replit.com/t/pawatech/repls/pawablox/view"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-row items-center gap-2"
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full"
                                    >
                                        <a
                                            href="https://replit.com/t/pawatech/repls/pawablox/view"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex flex-row items-center gap-2"
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2"/>
                                            Open Replit
                                        </a>
                                    </Button>
                                </a>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="border-yellow-200 bg-yellow-50/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Code className="w-5 h-5 text-yellow-600"/>
                                Master Prompt for AI
                            </CardTitle>
                            <CardDescription>
                                Use this master prompt with every AI query to
                                ensure consistency with pawabloX
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                                <h4 className="font-medium text-yellow-800 mb-2">
                                    ⚠️ Important - Please Read!
                                </h4>
                                <p className="text-yellow-700 text-sm">
                                    <strong>With every AI command</strong> (v0,
                                    Claude, ChatGPT, Replit Agent) you must{" "}
                                    <strong>ALWAYS paste</strong> this master
                                    prompt at the beginning of your query to
                                    ensure consistency with the pawabloX design
                                    system.
                                </p>
                            </div>

                            <div className="relative">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">
                                        Master Prompt
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            const masterPrompt = `You are a senior frontend developer building a **mobile-first app** that looks and feels exactly like betPawa using the custom design system provided in this project.

############################################
### BRAND DNA
Energetic · trustworthy · minimalist · data-dense but easy to scan.
Voice: concise, second-person ("Place Bet", "Deposit now").

############################################
### COLOUR TOKENS
--bp-primary-green   #9CE800    /* CTAs, WIN badges, highlights  */
--bp-background      #252A2D    /* top bar, bottom nav BG        */
--bp-foreground      #252A2D    /* button text, text titles        */
--bp-off-white       #FFFFFF    /* backdrops, cards              */
--bp-light-grey      #F2F4F7    /* dividers, disabled states     */
--bp-warning-orange  #FF7A00    /* boosted-odds flame, "Hot" tags*/
--bp-danger-red      #CC371B    /* LOSS badge, error text        */
--bp-info-blue       #22BFDB    /* links & educational banners   */

############################################
### TYPOGRAPHY
Primary font: Inter (fallback Roboto, Helvetica).
Weights → 700 balances & odds, 600 headers, 400 body, 300 fine print.
Line-height 1.2.

############################################
### ICONOGRAPHY
Every icon must come from the Lucide icon library.
Icon style: Lucide icons, 1.5 px stroke, rounded ends; flat fills only when status-critical.

############################################
### SPACING & SIZES
Base grid 4 dp; paddings × 8.
Corner radius: 4 dp chips & inputs; 8 dp sheets & cards; 12 dp CTAs.
Top app-bar 48 dp; bottom nav 56 dp.
Odds chip ≈ 64 × 36 dp (auto-wide).

############################################
### CORE COMPONENTS

**Button**
Use <div role="button" tabindex="0"> styled to look like a button; do not use <button> or <a> tags.
Default: --bp-primary-green background, 700 weight 16sp text, 48dp height, 16dp padding, 12dp radius
Disabled: --bp-light-grey background, 400 weight text, opacity 0.5, cursor not-allowed
Hover: brightness(1.1) over 100ms
Active: scale(0.98) over 80ms
Focus: 2px dashed --bp-primary-green outline, 2px offset
Icon Buttons: 36dp × 36dp circular, centered Lucide icon 20×20dp
Sizes: Small (32dp height, 12dp padding), Default (48dp), Large (56dp height, 24dp padding)

**Badges**
WIN: --bp-primary-green bg, 700 weight 12sp black text, 4dp padding, check-circle icon optional
LOSS: --bp-danger-red bg, 700 weight 12sp white text, x-circle icon optional
VOID: transparent bg, --bp-light-grey border, 400 weight 12sp text
HOT: --bp-warning-orange bg, 600 weight 12sp white text, flame icon with pulse animation

**Checkbox**
Use <div role="checkbox" tabindex="0" aria-checked="false">
20×20dp box, --bp-light-grey border, --bp-off-white background, 4dp radius
Checked: check icon (Lucide 16×16dp), --bp-primary-green border
Disabled: --bp-light-grey background 30% opacity, cursor not-allowed
Focus: 2px dashed --bp-primary-green outline, 2px offset
Label: 8dp gap, 14sp 400 weight text

**Radio Button**
Use <div role="radio" tabindex="0" aria-checked="false">
20×20dp circle, --bp-light-grey border, --bp-off-white background
Checked: 10×10dp inner circle, --bp-primary-green background
Disabled: --bp-light-grey background 30% opacity
Focus: 2px dashed --bp-primary-green outline, 2px offset
Label: 8dp gap, 14sp 400 weight text

**Switch**
Use <div role="switch" tabindex="0" aria-checked="false">
36×20dp track, 16×16dp thumb, 2dp margin from track edges
Off: --bp-light-grey track, --bp-off-white thumb positioned left
On: --bp-primary-green track, thumb positioned right
Disabled: --bp-light-grey track/thumb 30% opacity, cursor not-allowed
Focus: 2px dashed --bp-primary-green outline around track

**Input Fields**
Use <div role="textbox" tabindex="0" aria-multiline="false">
40dp height, --bp-off-white background, --bp-light-grey border, 4dp radius
8dp horizontal padding, Inter font 14sp 400 weight
Placeholder: --text-secondary color
Focus: 2px solid --bp-primary-green border
Error: 2px solid --bp-danger-red border, error text below
Disabled: --bp-light-grey background 30% opacity, cursor not-allowed
Label: 14sp 600 weight, 4dp bottom margin
Description: 12sp 300 weight, 4dp top margin

**Alert**
Use <div role="alert">
--bp-off-white background, 4dp wide colored left border, 12dp padding
Icons: info (info), check-circle (success), alert-triangle (warning), x-circle (error)
20×20dp Lucide icons, 8dp gap from text
Title: 16sp 600 weight, Description: 14sp 400 weight
Dismissible: x icon (16×16dp) on right, fade out animation
Variants: Info (--bp-info-blue), Success (--bp-primary-green), Warning (--bp-warning-orange), Error (--bp-danger-red)

**Bet Button**
Use <div role="button" tabindex="0">
Min 64×36dp, auto-width, 4dp padding vertical, 8dp horizontal
Two-line text: Label (14sp 400 weight --text-secondary), Odds (16sp 600 weight --text-primary)
Unselected: 1px --bp-light-grey border, transparent background
Selected: 2px --bp-primary-green border, rgba(156,232,0,0.1) background, --bp-primary-green text
Disabled: --bp-light-grey border/background 30% opacity, cursor not-allowed
Hover: border transitions to hsl(0,0%,70%) over 100ms
Active: scale(0.95) over 80ms

**Pre-Sport Card**
Use <div role="group">
12dp padding, 8dp corner radius, --bp-off-white background
Competition path: 12sp 400 weight --text-secondary
Teams: Two lines, 16sp 600 weight --text-primary, 4dp gap between lines
Date/Time: 12sp 300 weight --text-secondary, 4dp below teams
Bet buttons row (optional): 8dp gap between buttons, 12dp top margin from date
Optional stat: 14sp 400 weight --text-secondary, far right or after buttons

############################################
### DATA INTEGRATION
Fetch upcoming events from https://pawa-api.replit.app/gh/events at load.
For each event render competition path, two-line event_name, start-time, 1X2 market using sport-card.
Highlight "hot": 1 selections with orange outline + flame icon.
Support "Add to Bet-Slip" with haptic micro-feedback.

############################################
### INTERACTION & MOTION
Sheets & drawers slide vertical 250ms ease-out.
Boosted/Hot chip pulses opacity 80→100% once (1s).
Active bottom-nav icon has 36dp green halo (40% opacity).
All text content must be HTML-escaped.

############################################
### ENGINEERING RULES
- Always use Shadcn and Tailwind
- Always use Lucide Icon; no <svg> tags
- Text content must be HTML-escaped
- Use Next.js App Router and shadcn/ui by default
- Do not create <button> or <a> tags
- All colour/text pairs ≥ 4.5:1 contrast (WCAG AA)
- Always integrates with custom design system (tailwind.config.ts and global.css)
- Always reads markdown documentation from guidelines/ folder
- Uses theme colors, radius, fonts, animations, and variables from Tailwind + CSS custom properties
- Use sport-card component when possible

<user_prompt>
[ INSERT YOUR REQUEST HERE ]
</user_prompt>`;
                                            navigator.clipboard.writeText(
                                                masterPrompt,
                                            );
                                            handleCopyCode(
                                                masterPrompt,
                                                "master-prompt",
                                            );
                                        }}
                                    >
                                        {copiedCode === "master-prompt" ? (
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs mr-1">
                                                    Copied!
                                                </span>
                                                <Check className="w-4 h-4" />
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs mr-1">
                                                    Copy
                                                </span>
                                                <Copy className="w-4 h-4" />
                                            </div>
                                        )}
                                    </Button>
                                </div>
                                <div className="bg-gray-50 border rounded-lg p-4 max-h-64 overflow-y-auto">
                                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                                        {`You are a senior frontend developer building a **mobile-first app** that looks and feels exactly like betPawa using the custom design system provided in this project.

############################################
### BRAND DNA
Energetic · trustworthy · minimalist · data-dense but easy to scan.
Voice: concise, second-person ("Place Bet", "Deposit now").

############################################
### COLOUR TOKENS
--bp-primary-green   #9CE800    /* CTAs, WIN badges, highlights  */
--bp-background      #252A2D    /* top bar, bottom nav BG        */
--bp-foreground      #252A2D    /* button text, text titles        */
--bp-off-white       #FFFFFF    /* backdrops, cards              */
--bp-light-grey      #F2F4F7    /* dividers, disabled states     */
--bp-warning-orange  #FF7A00    /* boosted-odds flame, "Hot" tags*/
--bp-danger-red      #CC371B    /* LOSS badge, error text        */
--bp-info-blue       #22BFDB    /* links & educational banners   */

############################################
### TYPOGRAPHY
Primary font: Inter (fallback Roboto, Helvetica).
Weights → 700 balances & odds, 600 headers, 400 body, 300 fine print.
Line-height 1.2.

############################################
### ICONOGRAPHY
Every icon must come from the Lucide icon library.
Icon style: Lucide icons, 1.5 px stroke, rounded ends; flat fills only when status-critical.

############################################
### SPACING & SIZES
Base grid 4 dp; paddings × 8.
Corner radius: 4 dp chips & inputs; 8 dp sheets & cards; 12 dp CTAs.
Top app-bar 48 dp; bottom nav 56 dp.
Odds chip ≈ 64 × 36 dp (auto-wide).

############################################
### CORE COMPONENTS

**Button**
Use <div role="button" tabindex="0"> styled to look like a button; do not use <button> or <a> tags.
Default: --bp-primary-green background, 700 weight 16sp text, 48dp height, 16dp padding, 12dp radius
Disabled: --bp-light-grey background, 400 weight text, opacity 0.5, cursor not-allowed
Hover: brightness(1.1) over 100ms
Active: scale(0.98) over 80ms
Focus: 2px dashed --bp-primary-green outline, 2px offset
Icon Buttons: 36dp × 36dp circular, centered Lucide icon 20×20dp
Sizes: Small (32dp height, 12dp padding), Default (48dp), Large (56dp height, 24dp padding)

**Badges**
WIN: --bp-primary-green bg, 700 weight 12sp black text, 4dp padding, check-circle icon optional
LOSS: --bp-danger-red bg, 700 weight 12sp white text, x-circle icon optional
VOID: transparent bg, --bp-light-grey border, 400 weight 12sp text
HOT: --bp-warning-orange bg, 600 weight 12sp white text, flame icon with pulse animation

**Checkbox**
Use <div role="checkbox" tabindex="0" aria-checked="false">
20×20dp box, --bp-light-grey border, --bp-off-white background, 4dp radius
Checked: check icon (Lucide 16×16dp), --bp-primary-green border
Disabled: --bp-light-grey background 30% opacity, cursor not-allowed
Focus: 2px dashed --bp-primary-green outline, 2px offset
Label: 8dp gap, 14sp 400 weight text

**Radio Button**
Use <div role="radio" tabindex="0" aria-checked="false">
20×20dp circle, --bp-light-grey border, --bp-off-white background
Checked: 10×10dp inner circle, --bp-primary-green background
Disabled: --bp-light-grey background 30% opacity
Focus: 2px dashed --bp-primary-green outline, 2px offset
Label: 8dp gap, 14sp 400 weight text

**Switch**
Use <div role="switch" tabindex="0" aria-checked="false">
36×20dp track, 16×16dp thumb, 2dp margin from track edges
Off: --bp-light-grey track, --bp-off-white thumb positioned left
On: --bp-primary-green track, thumb positioned right
Disabled: --bp-light-grey track/thumb 30% opacity, cursor not-allowed
Focus: 2px dashed --bp-primary-green outline around track

**Input Fields**
Use <div role="textbox" tabindex="0" aria-multiline="false">
40dp height, --bp-off-white background, --bp-light-grey border, 4dp radius
8dp horizontal padding, Inter font 14sp 400 weight
Placeholder: --text-secondary color
Focus: 2px solid --bp-primary-green border
Error: 2px solid --bp-danger-red border, error text below
Disabled: --bp-light-grey background 30% opacity, cursor not-allowed
Label: 14sp 600 weight, 4dp bottom margin
Description: 12sp 300 weight, 4dp top margin

**Alert**
Use <div role="alert">
--bp-off-white background, 4dp wide colored left border, 12dp padding
Icons: info (info), check-circle (success), alert-triangle (warning), x-circle (error)
20×20dp Lucide icons, 8dp gap from text
Title: 16sp 600 weight, Description: 14sp 400 weight
Dismissible: x icon (16×16dp) on right, fade out animation
Variants: Info (--bp-info-blue), Success (--bp-primary-green), Warning (--bp-warning-orange), Error (--bp-danger-red)

**Bet Button**
Use <div role="button" tabindex="0">
Min 64×36dp, auto-width, 4dp padding vertical, 8dp horizontal
Two-line text: Label (14sp 400 weight --text-secondary), Odds (16sp 600 weight --text-primary)
Unselected: 1px --bp-light-grey border, transparent background
Selected: 2px --bp-primary-green border, rgba(156,232,0,0.1) background, --bp-primary-green text
Disabled: --bp-light-grey border/background 30% opacity, cursor not-allowed
Hover: border transitions to hsl(0,0%,70%) over 100ms
Active: scale(0.95) over 80ms

**Pre-Sport Card**
Use <div role="group">
12dp padding, 8dp corner radius, --bp-off-white background
Competition path: 12sp 400 weight --text-secondary
Teams: Two lines, 16sp 600 weight --text-primary, 4dp gap between lines
Date/Time: 12sp 300 weight --text-secondary, 4dp below teams
Bet buttons row (optional): 8dp gap between buttons, 12dp top margin from date
Optional stat: 14sp 400 weight --text-secondary, far right or after buttons

############################################
### DATA INTEGRATION
Fetch upcoming events from https://pawa-api.replit.app/gh/events at load.
For each event render competition path, two-line event_name, start-time, 1X2 market using sport-card.
Highlight "hot": 1 selections with orange outline + flame icon.
Support "Add to Bet-Slip" with haptic micro-feedback.

############################################
### INTERACTION & MOTION
Sheets & drawers slide vertical 250ms ease-out.
Boosted/Hot chip pulses opacity 80→100% once (1s).
Active bottom-nav icon has 36dp green halo (40% opacity).
All text content must be HTML-escaped.

############################################
### ENGINEERING RULES
- Always use Shadcn and Tailwind
- Always use Lucide Icon; no <svg> tags
- Text content must be HTML-escaped
- Use Next.js App Router and shadcn/ui by default
- Do not create <button> or <a> tags
- All colour/text pairs ≥ 4.5:1 contrast (WCAG AA)
- Always integrates with custom design system (tailwind.config.ts and global.css)
- Always reads markdown documentation from guidelines/ folder
- Uses theme colors, radius, fonts, animations, and variables from Tailwind + CSS custom properties
- Use sport-card component when possible

`}
                                    </pre>
                                </div>
                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                                <h4 className="font-medium text-yellow-800 mb-2">
                                    ⚠️ Important - Please Read!
                                </h4>
                                <p className="text-yellow-700 text-sm">
                                    <strong>With every AI command</strong> (v0,
                                    Claude, ChatGPT, Replit Agent) you must{" "}
                                    <strong>ALWAYS paste</strong> this master
                                    prompt at the beginning of your query to
                                    ensure consistency with the pawabloX design
                                    system.
                                </p>
                            </div>

                            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                                <h4 className="font-medium text-purple-800 mb-2">
                                    🚀 Replit Quick Start
                                </h4>
                                <p className="text-purple-700 text-sm mb-3">
                                    <strong>In Replit Agent</strong>, you can use the <code className="bg-purple-100 px-1 rounded">@</code> symbol to reference the system prompt directly:
                                </p>
                                <div className="bg-purple-100 border border-purple-200 p-3 rounded text-sm">
                                    <code className="text-purple-800">
                                        @v0/system-prompt.txt create a login form with validation
                                    </code>
                                </div>
                                <p className="text-purple-700 text-xs mt-2">
                                    This automatically includes the master prompt without copy/paste!
                                </p>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                <h4 className="font-medium text-blue-800 mb-2">
                                    💡 Step by step - how to use
                                </h4>
                                <div className="space-y-3">
                                    <div className="bg-purple-25 border border-purple-100 p-3 rounded">
                                        <h5 className="font-medium text-purple-800 mb-2">
                                            Option 1: Replit Agent (Recommended)
                                        </h5>
                                        <ol className="text-purple-700 text-sm space-y-1 list-decimal list-inside">
                                            <li>Type <code className="bg-purple-100 px-1 rounded text-xs">@v0/system-prompt.txt</code> at the beginning</li>
                                            <li>Add your request after the file reference</li>
                                            <li>Send the query - AI will automatically apply pawabloX design system</li>
                                        </ol>
                                    </div>
                                    
                                    <div className="bg-blue-25 border border-blue-100 p-3 rounded">
                                        <h5 className="font-medium text-blue-800 mb-2">
                                            Option 2: Other AI Tools (v0, Claude, ChatGPT)
                                        </h5>
                                        <ol className="text-blue-700 text-sm space-y-1 list-decimal list-inside">
                                            <li><strong>Copy</strong> the master prompt above (click "Copy" button)</li>
                                            <li><strong>Paste it at the beginning</strong> of every AI query</li>
                                            <li><strong>Replace</strong> <code className="bg-blue-100 px-1 rounded text-xs">[INSERT YOUR REQUEST HERE]</code> with your command</li>
                                            <li><strong>Send the query</strong> - AI will apply pawabloX design system</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-800">
                                    <strong>Remember:</strong> The master prompt must be included with EVERY query so AI remembers the pawabloX guidelines!
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-green-600" />
                                Example queries with master prompt
                            </CardTitle>
                            <CardDescription>
                                See how to properly formulate AI queries with
                                the master prompt
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-3">
                                <h4 className="font-medium text-green-800">
                                    Example 1: Creating a component
                                </h4>
                                <div className="bg-green-50 border border-green-200 p-3 rounded text-sm">
                                    <div className="text-green-700 mb-2">
                                        <strong>AI Query:</strong>
                                    </div>
                                    <code className="text-xs bg-white p-2 rounded block">
                                        [MASTER PROMPT]
                                        <br />
                                        <br />
                                        &lt;user_prompt&gt;
                                        <br />
                                        Create a product card component with
                                        image, title, price and "Add to Cart"
                                        button. The card should be responsive
                                        and use pawabloX colors.
                                        <br />
                                        &lt;/user_prompt&gt;
                                    </code>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h4 className="font-medium text-green-800">
                                    Example 2: Modifying existing code
                                </h4>
                                <div className="bg-green-50 border border-green-200 p-3 rounded text-sm">
                                    <div className="text-green-700 mb-2">
                                        <strong>AI Query:</strong>
                                    </div>
                                    <code className="text-xs bg-white p-2 rounded block">
                                        [MASTER PROMPT]
                                        <br />
                                        <br />
                                        &lt;user_prompt&gt;
                                        <br />
                                        Fix this button to use pawabloX design
                                        system:
                                        <br />
                                        &lt;button className="bg-blue-500
                                        text-white p-2"&gt;Click&lt;/button&gt;
                                        <br />
                                        &lt;/user_prompt&gt;
                                    </code>
                                </div>
                            </div>

                            <div className="bg-green-100 border border-green-300 p-3 rounded">
                                <p className="text-green-800 text-sm">
                                    <strong>Tip:</strong> Always replace{" "}
                                    <code className="bg-green-200 px-1 rounded">
                                        [MASTER PROMPT]
                                    </code>{" "}
                                    with the full content copied from the field
                                    above, and{" "}
                                    <code className="bg-green-200 px-1 rounded">
                                        [INSERT YOUR REQUEST HERE]
                                    </code>{" "}
                                    with your specific command.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="v0" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-2">
                            <TabsTrigger value="v0">v0 Integration</TabsTrigger>
                            <TabsTrigger value="replit">
                                Replit & Vibe Coding
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="v0" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-green-600" />
                                        Using pawabloX with v0 by Vercel
                                    </CardTitle>
                                    <CardDescription>
                                        Generate beautiful UI components using
                                        pawabloX design system with AI-powered
                                        v0
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                        <h4 className="font-medium text-green-800 mb-2">
                                            🚀 Quick Start Template
                                        </h4>
                                        <p className="text-green-700 text-sm mb-3">
                                            Use our ready-made v0 template with
                                            pawabloX design system
                                            pre-configured:
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="bg-white border-green-300 hover:bg-green-100"
                                        >
                                            <a
                                                href="https://v0.dev/community/pawa-blox-e2g02lKaB5a"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Get pawabloX Template
                                            </a>
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">
                                            Step 1: Access v0 Template
                                        </h3>
                                        <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                                            <li>
                                                Click the "Get pawabloX
                                                Template" button above to access
                                                the pre-configured template
                                            </li>
                                            <li>
                                                Sign in to v0.dev with your
                                                Vercel account if you haven't
                                                already
                                            </li>
                                            <li>
                                                Click "open in v0"
                                                to create your own copy
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">
                                            Step 2: Use Master Prompt with v0
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Always start your v0 prompts with
                                            the master prompt. This ensures v0 generates components that
                                            follow pawabloX guidelines.
                                        </p>
                                        
                                        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                                            <h4 className="font-medium text-purple-800 mb-2">
                                                🚀 Method 1: File Reference (If using Replit)
                                            </h4>
                                            <p className="text-purple-700 text-sm mb-3">
                                                If you're coding in Replit and using v0, you can reference the system prompt file directly:
                                            </p>
                                            <div className="bg-white border border-purple-200 p-3 rounded text-sm font-mono">
                                                <span className="text-purple-600">@v0/system-prompt.txt</span> create a login form with email, password fields and a submit button
                                            </div>
                                            <p className="text-purple-600 text-xs mt-2">
                                                ✅ This automatically includes the entire master prompt without copy/paste!
                                            </p>
                                        </div>

                                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                            <h4 className="font-medium text-blue-800 mb-2">
                                                📋 Method 2: Manual Copy/Paste
                                            </h4>
                                            <p className="text-blue-700 text-sm mb-3">
                                                For traditional v0 usage or when not using Replit:
                                            </p>
                                            <div className="bg-white border border-blue-200 p-3 rounded text-sm">
                                                <p className="text-blue-700">
                                                    <strong>Example v0 prompt:</strong><br />
                                                    [Copy master prompt from above] + "Create a login form with email, password fields and a submit button"
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="replit" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-blue-600" />
                                        Setting up pawabloX in Replit
                                    </CardTitle>
                                    <CardDescription>
                                        Get started with pawabloX design system
                                        in Replit for collaborative development
                                        and vibe coding
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                        <h4 className="font-medium text-blue-800 mb-2">
                                            🚀 Quick Start Template
                                        </h4>
                                        <p className="text-blue-700 text-sm mb-3">
                                            Use our ready-made Replit project
                                            with pawabloX design system
                                            pre-configured:
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="bg-white border-blue-300 hover:bg-blue-100"
                                        >
                                            <a
                                                href="https://replit.com/t/pawatech/repls/pawablox/view"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Remix pawaBloX Replit
                                            </a>
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">
                                            Option 1: Use Our Template
                                            (Recommended)
                                        </h3>
                                        <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                                            <li>
                                                Click the "Remix pawaBloX Replit"
                                                button above
                                            </li>
                                            <li>
                                                Sign in to Replit if you haven't
                                                already
                                            </li>
                                            <li>
                                                Click "Remix this app" to create your own
                                                copy of the project
                                            </li>
                                            <li>
                                                Start coding with all pawabloX
                                                components ready to use!
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">
                                            Option 2: Create from Scratch
                                        </h3>
                                        <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                                            <li>
                                                Go to{" "}
                                                <a
                                                    href="https://replit.com"
                                                    className="text-blue-600 hover:underline"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    replit.com
                                                </a>{" "}
                                                and sign in
                                            </li>
                                            <li>
                                                Click "Create Repl" and select
                                                "Next.js" template
                                            </li>
                                            <li>
                                                Name your project (e.g.,
                                                "my-pawablox-app")
                                            </li>
                                            <li>Click "Create Repl"</li>
                                        </ol>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">
                                            Step 4: Using pawabloX with Replit Agent
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Replit Agent has a special feature that makes using pawabloX even easier!
                                        </p>
                                        
                                        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                                            <h4 className="font-medium text-purple-800 mb-2">
                                                🚀 Method 1: File Reference (Recommended)
                                            </h4>
                                            <p className="text-purple-700 text-sm mb-3">
                                                Use the <code className="bg-purple-100 px-1 rounded">@</code> symbol to reference the system prompt file directly:
                                            </p>
                                            <div className="bg-white border border-purple-200 p-3 rounded text-sm font-mono">
                                                <span className="text-purple-600">@v0/system-prompt.txt</span> create a betting slip component with multiple selections
                                            </div>
                                            <p className="text-purple-600 text-xs mt-2">
                                                ✅ This automatically includes the entire master prompt without copy/paste!
                                            </p>
                                        </div>

                                        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                            <h4 className="font-medium text-blue-800 mb-2">
                                                📋 Method 2: Manual Copy/Paste
                                            </h4>
                                            <p className="text-blue-700 text-sm mb-3">
                                                If you prefer the traditional method:
                                            </p>
                                            <div className="bg-white border border-blue-200 p-3 rounded text-sm">
                                                <p className="text-blue-700">
                                                    <strong>Example Replit Agent prompt:</strong><br />
                                                    [Copy master prompt from above] + "Create a betting slip component with multiple selections"
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-green-50 border border-green-200 p-3 rounded">
                                            <p className="text-green-800 text-sm">
                                                <strong>💡 Pro Tip:</strong> The <code className="bg-green-100 px-1 rounded">@v0/system-prompt.txt</code> method is faster and ensures you never forget to include the pawabloX guidelines!
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    {copiedCode && (
                        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                            Code copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
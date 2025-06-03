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
    ArrowRight,
    FileText,
    Lightbulb,
} from "lucide-react";
import { useState } from "react";

export default function HowToUsePage() {
    const [copiedCode, setCopiedCode] = useState<string>("");

    const handleCopyCode = (code: string, id: string) => {
        navigator.clipboard.writeText(code);
        setCopiedCode(id);
        setTimeout(() => setCopiedCode(""), 2000);
    };

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
- Always use Next.js App Router and shadcn/ui by default
- Do not create <button> or <a> tags
- All colour/text pairs ≥ 4.5:1 contrast (WCAG AA)
- Always integrates with custom design system (tailwind.config.ts and global.css)
- Always reads markdown documentation from guidelines/ folder
- Uses theme colors, radius, fonts, animations, and variables from Tailwind + CSS custom properties
- Use sport-card component when possible

<user_prompt>
[ INSERT YOUR REQUEST HERE ]
</user_prompt>`;

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
                    {/* Header */}
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

                    {/* Quick Access Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-green-200 bg-gradient-to-br from-green-50 to-green-100/50">
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
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-green-300 hover:bg-green-200/50"
                                    onClick={() => window.open("https://v0.dev/community/pawa-blox-e2g02lKaB5a", "_blank")}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2"/>
                                    Try v0 Template
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100/50">
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
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-blue-300 hover:bg-blue-200/50"
                                    onClick={() => window.open("https://replit.com/t/pawatech/repls/pawablox/view", "_blank")}
                                >
                                    <ExternalLink className="w-4 h-4 mr-2"/>
                                    Open Replit
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Platform-Specific Usage Guide */}
                    <Card className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-yellow-600"/>
                                Platform-Specific Usage
                            </CardTitle>
                            <CardDescription>
                                Choose your preferred method based on your development platform
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Terminal className="w-4 h-4 text-purple-600" />
                                        <h4 className="font-medium text-purple-800">🚀 Replit Agent</h4>
                                    </div>
                                    <p className="text-purple-700 text-sm mb-3">
                                        <strong>Method 1:</strong> Use <code className="bg-purple-100 px-1 rounded text-xs">@v0/system-prompt.txt</code> - no copy/paste needed!<br/>
                                        <strong>Method 2:</strong> Manual copy/paste also works
                                    </p>
                                    <div className="bg-purple-100 border border-purple-200 p-2 rounded text-xs font-mono">
                                        @v0/system-prompt.txt create login form
                                    </div>
                                </div>

                                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Zap className="w-4 h-4 text-blue-600" />
                                        <h4 className="font-medium text-blue-800">🎨 v0.dev</h4>
                                    </div>
                                    <p className="text-blue-700 text-sm mb-3">
                                        <strong>Method 1:</strong> Add <code className="bg-blue-100 px-1 rounded text-xs">v0/system-prompt.txt</code> to context<br/>
                                        <strong>Method 2:</strong> Manual copy/paste of master prompt
                                    </p>
                                    <div className="bg-blue-100 border border-blue-200 p-2 rounded text-xs">
                                        File reference OR copy/paste
                                    </div>
                                </div>

                                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Code className="w-4 h-4 text-gray-600" />
                                        <h4 className="font-medium text-gray-800">💬 Claude/ChatGPT</h4>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-3">
                                        Manual copy/paste of the master prompt at the beginning of every query
                                    </p>
                                    <div className="bg-gray-100 border border-gray-200 p-2 rounded text-xs">
                                        Copy/paste required
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                                <p className="text-green-800 text-sm font-medium">
                                    💡 <strong>Want to see it in action?</strong> Check out our <a href="/example-apps" className="underline text-green-700 hover:text-green-900">Example Apps page</a> to see working prompts and their results!
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Master Prompt Section */}
                    <Card className="border-gray-200">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-gray-600"/>
                                Master Prompt for AI
                            </CardTitle>
                            <CardDescription>
                                The complete prompt that ensures AI tools follow pawabloX design system
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="relative">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm font-medium">
                                        Complete Master Prompt
                                    </span>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => {
                                            navigator.clipboard.writeText(masterPrompt);
                                            handleCopyCode(masterPrompt, "master-prompt");
                                        }}
                                    >
                                        {copiedCode === "master-prompt" ? (
                                            <>
                                                <Check className="w-4 h-4 mr-2" />
                                                Copied!
                                            </>
                                        ) : (
                                            <>
                                                <Copy className="w-4 h-4 mr-2" />
                                                Copy Prompt
                                            </>
                                        )}
                                    </Button>
                                </div>
                                <div className="bg-gray-50 border rounded-lg p-4 max-h-64 overflow-y-auto">
                                    <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono">
                                        {masterPrompt}
                                    </pre>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Step-by-Step Guide */}
                    <Card className="border-blue-200 bg-blue-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <ArrowRight className="w-5 h-5 text-blue-600" />
                                Step-by-Step Guide
                            </CardTitle>
                            <CardDescription>
                                Follow these steps to get started with pawabloX AI integration
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-purple-25 border border-purple-100 p-4 rounded-lg">
                                    <h5 className="font-medium text-purple-800 mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                                        Replit Agent (Recommended)
                                    </h5>
                                    <div className="text-purple-700 text-sm space-y-3">
                                        <div>
                                            <p className="font-medium mb-1">🚀 Quick Method:</p>
                                            <ol className="list-decimal list-inside space-y-1 ml-2">
                                                <li>Type <code className="bg-purple-100 px-1 rounded text-xs">@v0/system-prompt.txt</code> at the beginning</li>
                                                <li>Add your request after the file reference</li>
                                                <li>Send the query - AI will automatically apply pawabloX design system</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <p className="font-medium mb-1">📋 Alternative Method:</p>
                                            <p className="ml-2">Manual copy/paste also works if preferred</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-25 border border-blue-100 p-4 rounded-lg">
                                    <h5 className="font-medium text-blue-800 mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                                        v0.dev &amp; Other AI Tools
                                    </h5>
                                    <div className="text-blue-700 text-sm space-y-3">
                                        <div>
                                            <p className="font-medium mb-1">🎨 v0.dev Methods:</p>
                                            <ol className="list-decimal list-inside space-y-1 ml-2">
                                                <li>Add <code className="bg-blue-100 px-1 rounded text-xs">v0/system-prompt.txt</code> to context OR</li>
                                                <li>Copy/paste the master prompt manually</li>
                                            </ol>
                                        </div>
                                        <div>
                                            <p className="font-medium mb-1">💬 Claude/ChatGPT:</p>
                                            <ol className="list-decimal list-inside space-y-1 ml-2">
                                                <li><strong>Copy</strong> the master prompt above</li>
                                                <li><strong>Paste it at the beginning</strong> of every AI query</li>
                                                <li><strong>Replace</strong> <code className="bg-blue-100 px-1 rounded text-xs">[INSERT YOUR REQUEST HERE]</code> with your command</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                                <p className="text-blue-800 text-sm font-medium">
                                    💡 <strong>Remember:</strong> The master prompt must be included with EVERY query so AI remembers the pawabloX guidelines!
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Examples Section */}
                    <Card className="border-green-200 bg-green-50/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Code className="w-5 h-5 text-green-600" />
                                Example Queries
                            </CardTitle>
                            <CardDescription>
                                See how to properly formulate AI queries with the master prompt
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                    <h4 className="font-medium text-green-800 mb-3">Example 1: Creating a component</h4>
                                    <div className="bg-white border border-green-200 p-3 rounded text-sm">
                                        <div className="text-green-700 mb-2 font-medium">AI Query:</div>
                                        <code className="text-xs bg-gray-50 p-2 rounded block">
                                            [MASTER PROMPT]<br /><br />
                                            &lt;user_prompt&gt;<br />
                                            Create a product card component with image, title, price and "Add to Cart" button. The card should be responsive and use pawabloX colors.<br />
                                            &lt;/user_prompt&gt;
                                        </code>
                                    </div>
                                </div>

                                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                    <h4 className="font-medium text-green-800 mb-3">Example 2: Modifying existing code</h4>
                                    <div className="bg-white border border-green-200 p-3 rounded text-sm">
                                        <div className="text-green-700 mb-2 font-medium">AI Query:</div>
                                        <code className="text-xs bg-gray-50 p-2 rounded block">
                                            [MASTER PROMPT]<br /><br />
                                            &lt;user_prompt&gt;<br />
                                            Fix this button to use pawabloX design system:<br />
                                            &lt;button className="bg-blue-500 text-white p-2"&gt;Click&lt;/button&gt;<br />
                                            &lt;/user_prompt&gt;
                                        </code>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Platform Tabs */}
                    <Tabs defaultValue="v0" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="v0">v0 Integration</TabsTrigger>
                            <TabsTrigger value="replit">Replit & Development</TabsTrigger>
                        </TabsList>

                        <TabsContent value="v0" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-green-600" />
                                        Using pawabloX with v0 by Vercel
                                    </CardTitle>
                                    <CardDescription>
                                        Generate beautiful UI components using pawabloX design system with AI-powered v0
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                        <h4 className="font-medium text-green-800 mb-2">🚀 Quick Start Template</h4>
                                        <p className="text-green-700 text-sm mb-3">
                                            Use our ready-made v0 template with pawabloX design system pre-configured:
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="bg-white border-green-300 hover:bg-green-100"
                                            onClick={() => window.open("https://v0.dev/community/pawa-blox-e2g02lKaB5a", "_blank")}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Get pawabloX Template
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Step 1: Access v0 Template</h3>
                                        <ol className="list-decimal list-inside text-muted-foreground space-y-2 ml-4">
                                            <li>Click the "Get pawabloX Template" button above</li>
                                            <li>Sign in to v0.dev with your Vercel account</li>
                                            <li>Click "open in v0" to create your own copy</li>
                                        </ol>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Step 2: Use Master Prompt with v0</h3>
                                        <p className="text-muted-foreground">
                                            Always start your v0 prompts with the master prompt to ensure v0 generates components that follow pawabloX guidelines.
                                        </p>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                                                <h4 className="font-medium text-purple-800 mb-2">🚀 Method 1: File Reference (Replit)</h4>
                                                <p className="text-purple-700 text-sm mb-3">
                                                    If coding in Replit and using v0:
                                                </p>
                                                <div className="bg-white border border-purple-200 p-3 rounded text-sm font-mono">
                                                    <span className="text-purple-600">@v0/system-prompt.txt</span> create a login form
                                                </div>
                                                <p className="text-purple-600 text-xs mt-2">
                                                    ✅ This automatically includes the entire master prompt!
                                                </p>
                                            </div>

                                            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                                <h4 className="font-medium text-blue-800 mb-2">📋 Method 2: Manual Copy/Paste</h4>
                                                <p className="text-blue-700 text-sm mb-3">
                                                    For direct v0.dev usage or when file reference isn't available:
                                                </p>
                                                <div className="bg-white border border-blue-200 p-3 rounded text-sm">
                                                    [Copy master prompt from above] + "Create a login form"
                                                </div>
                                                <p className="text-blue-600 text-xs mt-2">
                                                    ✅ Works on v0.dev, Replit, and all AI platforms
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                                            <p className="text-green-800 text-sm">
                                                💡 <strong>See it in action:</strong> Visit our <a href="/example-apps" className="underline text-green-700 hover:text-green-900">Example Apps page</a> to see working prompts and their results. You can copy any prompt and try it yourself!
                                            </p>
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
                                        Get started with pawabloX design system in Replit for collaborative development
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                        <h4 className="font-medium text-blue-800 mb-2">🚀 Quick Start Template</h4>
                                        <p className="text-blue-700 text-sm mb-3">
                                            Use our ready-made Replit project with pawabloX design system pre-configured:
                                        </p>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="bg-white border-blue-300 hover:bg-blue-100"
                                            onClick={() => window.open("https://replit.com/t/pawatech/repls/pawablox/view", "_blank")}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Remix pawaBloX Replit
                                        </Button>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Using pawabloX with Replit Agent</h3>
                                        <p className="text-muted-foreground">
                                            Replit Agent has a special feature that makes using pawabloX even easier!
                                        </p>

                                        <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                                            <h4 className="font-medium text-purple-800 mb-2">🚀 File Reference (Recommended)</h4>
                                            <p className="text-purple-700 text-sm mb-3">
                                                Use the <code className="bg-purple-100 px-1 rounded">@</code> symbol to reference the system prompt file:
                                            </p>
                                            <div className="bg-white border border-purple-200 p-3 rounded text-sm font-mono">
                                                <span className="text-purple-600">@v0/system-prompt.txt</span> create a betting slip component
                                            </div>
                                            <p className="text-purple-600 text-xs mt-2">
                                                ✅ This automatically includes the entire master prompt!
                                            </p>
                                        </div>

                                        <div className="bg-green-50 border border-green-200 p-3 rounded">
                                            <p className="text-green-800 text-sm">
                                                <strong>💡 Pro Tip:</strong> The <code className="bg-green-100 px-1 rounded">@v0/system-prompt.txt</code> method is faster and ensures you never forget the pawabloX guidelines!
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    {/* Success Message */}
                    {copiedCode && (
                        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-in slide-in-from-bottom-2">
                            <Check className="w-4 h-4" />
                            Code copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
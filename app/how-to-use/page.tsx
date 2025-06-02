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
                                <Button
                                    variant="outline"
                                    size="sm"
                                    asChild
                                    className="w-full"
                                >
                                    <a
                                        href="https://v0.dev/community/betpawa-desing-system-0jyGs6lPfxs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-row items-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Try v0
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 bg-blue-50/50 w-[50%]">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-5 h-5 text-blue-600" />
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
                                    className="w-full"
                                >
                                    <a
                                        href="https://replit.com/@tomekkwlodarczy/pawaBloX?v=1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-row items-center gap-2"
                                    >
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Open Replit
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="border-yellow-200 bg-yellow-50/50">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Code className="w-5 h-5 text-yellow-600" />
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
### DESIGN PRINCIPLES
Energetic · minimalist · trustworthy · dense but scannable.
Voice: second-person, short action-oriented (e.g. "Place Bet", "Deposit Now").

- All icons MUST come from \`lucide-react\` with 1.5px stroke and rounded ends.
- NEVER use raw HTML tags like <button>, <a>, <svg>, <input>. Instead, use design system components like <Button />, <Link />, <Input />, etc.
- Always use tokens and values defined in \`tailwind.config.ts\` and \`global.css\`.
- Always use the primary green color \`#9CE800\` for CTAs.
- Always use \`Roboto\` as the primary font (\`Inter\`, Helvetica as fallback).

############################################
### COMPONENT USAGE
- Use Shadcn UI and Tailwind utilities.
- Always use pre-defined components from \`components/\` such as:
  - <Button />, <Card />, <Badge />, <Input />, <Sheet />, <Tabs />, <Label />, etc.
- Use <ReactProject> with \`tsx file="..."\` structure for output.
- Text content must be HTML-escaped.
- Support only \`lucide-react\` for all icons. No custom or raw SVGs.

############################################
### COLOUR TOKENS
- --bp-primary-green: #9CE800 → CTAs, highlights
- --bp-charcoal: #252A2D → header/footer backgrounds
- --bp-off-white: #FFFFFF → cards, backgrounds
- --bp-light-grey: #F2F4F7 → borders, dividers, disabled
- --bp-warning-orange: #FF7A00 → hot tags, boosted odds
- --bp-danger-red: #CC371B → error states, LOSS badges
- --bp-info-blue: #22BFDB → links, info banners

############################################
### TYPOGRAPHY
- Font: Roboto (fallback Inter, Helvetica)
- Weight guide:
  - 700: odds, balances
  - 600: headers
  - 400: body
  - 300: fine print
- Line-height: 1.2

############################################
### SPACING & LAYOUT
- Base grid: 4dp, paddings ×8
- Radius:
  - 4dp: inputs, chips
  - 8dp: sheets, cards
  - 12dp: CTAs
- App bar: 48dp, Bottom nav: 56dp
- Odds chip: 64×36dp (auto width)

############################################
### ENGINEERING RULES
- Always use Next.js App Router.
- Read from tailwind.config.ts, global.css, and markdown docs in /guidelines.
- Always use theme tokens for spacing, fonts, colors, etc.
- Avoid inline styles; use Tailwind classes and design system utilities.
- Never define components outside the system.
- All interactions and motion must be smooth (e.g. sheet slide-in: 250ms ease-out)


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
### DESIGN PRINCIPLES
Energetic · minimalist · trustworthy · dense but scannable.
Voice: second-person, short action-oriented (e.g. "Place Bet", "Deposit Now").

- All icons MUST come from \`lucide-react\` with 1.5px stroke and rounded ends.
- NEVER use raw HTML tags like <button>, <a>, <svg>, <input>. Instead, use design system components like <Button />, <Link />, <Input />, etc.
- Always use tokens and values defined in \`tailwind.config.ts\` and \`global.css\`.
- Always use the primary green color \`#9CE800\` for CTAs.
- Always use \`Roboto\` as the primary font (\`Inter\`, Helvetica as fallback).

############################################
### COMPONENT USAGE
- Use Shadcn UI and Tailwind utilities.
- Always use pre-defined components from \`components/\` such as:
  - <Button />, <Card />, <Badge />, <Input />, <Sheet />, <Tabs />, <Label />, etc.
- Use <ReactProject> with \`tsx file="..."\` structure for output.
- Text content must be HTML-escaped.
- Support only \`lucide-react\` for all icons. No custom or raw SVGs.
- If you can use sport-card component, use it.

############################################
### COLOUR TOKENS
- --bp-primary-green: #9CE800 → CTAs, highlights
- --bp-charcoal: #252A2D → header/footer backgrounds
- --bp-off-white: #FFFFFF → cards, backgrounds
- --bp-light-grey: #F2F4F7 → borders, dividers, disabled
- --bp-warning-orange: #FF7A00 → hot tags, boosted odds
- --bp-danger-red: #CC371B → error states, LOSS badges
- --bp-info-blue: #22BFDB → links, info banners

############################################
### TYPOGRAPHY
- Font: Roboto (fallback Inter, Helvetica)
- Weight guide:
  - 700: odds, balances
  - 600: headers
  - 400: body
  - 300: fine print
- Line-height: 1.2

############################################
### SPACING & LAYOUT
- Base grid: 4dp, paddings ×8
- Radius:
  - 4dp: inputs, chips
  - 8dp: sheets, cards
  - 12dp: CTAs
- App bar: 48dp, Bottom nav: 56dp
- Odds chip: 64×36dp (auto width)

############################################
### ENGINEERING RULES
- Always use Next.js App Router.
- Read from tailwind.config.ts, global.css, and markdown docs in /guidelines.
- Always use theme tokens for spacing, fonts, colors, etc.
- Avoid inline styles; use Tailwind classes and design system utilities.
- Never define components outside the system.
- All interactions and motion must be smooth (e.g. sheet slide-in: 250ms ease-out)


`}
                                    </pre>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                                <h4 className="font-medium text-blue-800 mb-2">
                                    💡 Step by step - how to use
                                </h4>
                                <ol className="text-blue-700 text-sm space-y-2 list-decimal list-inside">
                                    <li>
                                        <strong>Copy</strong> the master prompt
                                        above (click the "Copy" button)
                                    </li>
                                    <li>
                                        <strong>
                                            Paste it at the beginning
                                        </strong>{" "}
                                        of every AI query (v0, Claude, ChatGPT,
                                        Replit Agent)
                                    </li>
                                    <li>
                                        <strong>Replace</strong>{" "}
                                        <code className="bg-blue-100 px-1 rounded text-xs">
                                            [INSERT YOUR REQUEST HERE]
                                        </code>{" "}
                                        with your command, e.g.:
                                        <div className="mt-1 ml-4 text-xs italic">
                                            "Create a login form with
                                            validation"
                                            <br />
                                            "Add a button for saving data"
                                            <br />
                                            "Make a responsive product card"
                                        </div>
                                    </li>
                                    <li>
                                        <strong>Send the query</strong> - AI
                                        will automatically apply the pawabloX
                                        design system
                                    </li>
                                </ol>
                                <div className="mt-3 p-2 bg-blue-100 rounded text-xs text-blue-800">
                                    <strong>Remember:</strong> The master prompt
                                    must be pasted with EVERY query so AI
                                    remembers the pawabloX guidelines!
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
                                                href="https://v0.dev/community/betpawa-desing-system-0jyGs6lPfxs"
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
                                                Click "Fork" or "Use Template"
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
                                            the master prompt from above. This
                                            ensures v0 generates components that
                                            follow pawabloX guidelines.
                                        </p>
                                        <div className="bg-blue-50 border border-blue-200 p-3 rounded text-sm">
                                            <p className="text-blue-700">
                                                <strong>
                                                    Example v0 prompt:
                                                </strong>
                                                <br />
                                                [Copy master prompt from above]
                                                + "Create a login form with
                                                email, password fields and a
                                                submit button"
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
                                                href="https://replit.com/@tomekkwlodarczy/pawaBloX?v=1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Fork pawaBloX Replit
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
                                                Click the "Fork pawaBloX Replit"
                                                button above
                                            </li>
                                            <li>
                                                Sign in to Replit if you haven't
                                                already
                                            </li>
                                            <li>
                                                Click "Fork" to create your own
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
                                            Step 4: Using the Master Prompt with
                                            Replit Agent
                                        </h3>
                                        <p className="text-muted-foreground">
                                            When using Replit's AI assistant,
                                            always start with the master prompt
                                            from above:
                                        </p>
                                        <div className="bg-blue-50 border border-blue-200 p-3 rounded text-sm">
                                            <p className="text-blue-700">
                                                <strong>
                                                    Example Replit Agent prompt:
                                                </strong>
                                                <br />
                                                [Copy master prompt from above]
                                                + "Create a betting slip
                                                component with multiple
                                                selections"
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

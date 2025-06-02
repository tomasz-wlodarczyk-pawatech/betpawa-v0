"use client"

import {SidebarTrigger} from "@/components/ui/sidebar"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {HelpCircle, ExternalLink, Code, Palette, Download, Zap, Globe, Terminal, Layers} from "lucide-react"
import {useState} from "react"

export default function HowToUsePage() {
    const [copiedCode, setCopiedCode] = useState<string>("")

    const handleCopyCode = (code: string, id: string) => {
        navigator.clipboard.writeText(code)
        setCopiedCode(id)
        setTimeout(() => setCopiedCode(""), 2000)
    }

    return (
        <div className="flex flex-col min-h-screen">
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
                <div className="container mx-auto p-6 space-y-8 max-w-6xl">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <HelpCircle className="w-5 h-5 text-green-600"/>
                            <span className="text-sm text-muted-foreground">Documentation</span>
                        </div>
                        <h1 className="text-4xl font-bold">How to Use pawabloX</h1>
                        <p className="text-xl text-muted-foreground max-w-3xl">
                            Learn how to integrate pawabloX design system into your projects using various platforms and
                            tools.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border-green-200 bg-green-50/50">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-green-600"/>
                                    <CardTitle className="text-lg">v0 by Vercel</CardTitle>
                                </div>
                                <CardDescription>Generate UI components with AI using pawabloX design
                                    tokens</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" size="sm" asChild className="w-full">
                                    <a href="https://v0.dev" target="_blank" rel="noopener noreferrer"
                                       className="flex flex-row items-center gap-2">
                                        <ExternalLink className="w-4 h-4 mr-2"/>
                                        Try v0
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 bg-blue-50/50">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-5 h-5 text-blue-600"/>
                                    <CardTitle className="text-lg">Replit</CardTitle>
                                </div>
                                <CardDescription>Code collaboratively with pawabloX components in the
                                    browser</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" size="sm" className="w-full">
                                    <a href="https://replit.com" target="_blank" rel="noopener noreferrer"
                                       className="flex flex-row items-center gap-2">
                                        <ExternalLink className="w-4 h-4 mr-2"/>
                                        Open Replit
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="border-purple-200 bg-purple-50/50">
                            <CardHeader>
                                <div className="flex items-center gap-2">
                                    <Download className="w-5 h-5 text-purple-600"/>
                                    <CardTitle className="text-lg">Local Setup</CardTitle>
                                </div>
                                <CardDescription>Download and integrate pawabloX into your existing
                                    project</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button variant="outline" size="sm" className="w-full ">
                  <span className="flex flex-row items-center gap-2">
                        <Download className="w-4 h-4 mr-2"/>
                  Download Kit
                  </span>

                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <Tabs defaultValue="v0" className="space-y-6">
                        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
                            <TabsTrigger value="v0">v0 Integration</TabsTrigger>
                            <TabsTrigger value="replit">Replit & Vibe Coding</TabsTrigger>
                            <TabsTrigger value="local">Local Development</TabsTrigger>
                            <TabsTrigger value="tokens">Design Tokens</TabsTrigger>
                        </TabsList>

                        <TabsContent value="v0" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-green-600"/>
                                        Using pawabloX with v0 by Vercel
                                    </CardTitle>
                                    <CardDescription>
                                        Generate beautiful UI components using pawabloX design system with AI-powered v0
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Step 1: Access v0</h3>
                                        <p className="text-muted-foreground">
                                            Visit{" "}
                                            <a
                                                href="https://v0.dev"
                                                className="text-green-600 hover:underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                v0.dev
                                            </a>{" "}
                                            and sign in with your Vercel account.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Step 2: Use pawabloX Prompts</h3>
                                        <p className="text-muted-foreground">
                                            When prompting v0, specify that you want to use the pawabloX design system.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Step 3: Specify Design Tokens</h3>
                                        <p className="text-muted-foreground">
                                            Always mention specific pawabloX design tokens in your prompts:
                                        </p>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                            <li>
                                                <strong>Colors:</strong> pw-green-400 (primary), pw-slate-600 (text),
                                                pw-orange-500 (warning)
                                            </li>
                                            <li>
                                                <strong>Typography:</strong> Font weights 400, 500, 600, 700, 900
                                            </li>
                                            <li>
                                                <strong>Spacing:</strong> Consistent 4px grid system
                                            </li>
                                            <li>
                                                <strong>Border Radius:</strong> 6px for buttons, 8px for cards
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                        <h4 className="font-medium text-green-800 mb-2">💡 Pro Tip</h4>
                                        <p className="text-green-700 text-sm">
                                            Reference this design system documentation in your prompts by saying
                                            "following the pawabloX
                                            design system guidelines" to ensure consistency with our established
                                            patterns.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="replit" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Terminal className="w-5 h-5 text-blue-600"/>
                                        Setting up pawabloX in Replit
                                    </CardTitle>
                                    <CardDescription>
                                        Get started with pawabloX design system in Replit for collaborative development
                                        and vibe coding
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Step 1: Create a New Repl</h3>
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
                                            <li>Click "Create Repl" and select "Next.js" template</li>
                                            <li>Name your project (e.g., "my-pawablox-app")</li>
                                            <li>Click "Create Repl"</li>
                                        </ol>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Step 2: Install Dependencies</h3>
                                        <p className="text-muted-foreground">In the Replit shell, install the required
                                            dependencies:</p>
                                        <div className="bg-muted p-4 rounded-lg font-mono text-sm">
                                            <div className="mb-2"># Install Tailwind CSS and dependencies</div>
                                            <div className="mb-2">npm install tailwindcss @tailwindcss/typography</div>
                                            <div className="mb-2">npm install lucide-react</div>
                                            <div className="mb-2">npm install class-variance-authority clsx
                                                tailwind-merge
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="local" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Code className="w-5 h-5 text-purple-600"/>
                                        Local Development Setup
                                    </CardTitle>
                                    <CardDescription>Set up pawabloX design system in your local development
                                        environment</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Prerequisites</h3>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                                            <li>Node.js 18+ installed</li>
                                            <li>npm, yarn, or pnpm package manager</li>
                                            <li>Code editor (VS Code recommended)</li>
                                        </ul>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        <TabsContent value="tokens" className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Palette className="w-5 h-5 text-green-600"/>
                                        Using Design Tokens
                                    </CardTitle>
                                    <CardDescription>Learn how to use pawabloX design tokens in your
                                        projects</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <h3 className="text-lg font-semibold">Color Tokens</h3>
                                        <p className="text-muted-foreground">Use our semantic color tokens for
                                            consistent theming:</p>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="p-3 border rounded-lg">
                                                <div className="w-full h-8 bg-pw-green-400 rounded mb-2"></div>
                                                <div className="text-sm font-medium">Primary</div>
                                                <div
                                                    className="text-xs text-muted-foreground font-mono">bg-pw-green-400
                                                </div>
                                            </div>
                                            <div className="p-3 border rounded-lg">
                                                <div className="w-full h-8 bg-pw-slate-600 rounded mb-2"></div>
                                                <div className="text-sm font-medium">Text</div>
                                                <div
                                                    className="text-xs text-muted-foreground font-mono">text-pw-slate-600
                                                </div>
                                            </div>
                                            <div className="p-3 border rounded-lg">
                                                <div className="w-full h-8 bg-pw-orange-500 rounded mb-2"></div>
                                                <div className="text-sm font-medium">Warning</div>
                                                <div
                                                    className="text-xs text-muted-foreground font-mono">bg-pw-orange-500
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <Card>
                        <CardHeader>
                            <CardTitle>Additional Resources</CardTitle>
                            <CardDescription>Helpful links and resources for using pawabloX</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Button variant="outline" className="h-auto p-4 justify-start">
                                    <a href="/foundations/iconography" className="flex flex-col items-start gap-1">
                                        <div className="flex items-center gap-2">
                                            <Globe className="w-4 h-4"/>
                                            <span className="font-semibold">Icon Library</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">Browse 200+ Lucide icons</span>
                                    </a>
                                </Button>

                                <Button variant="outline" className="h-auto p-4 justify-start">
                                    <a href="/components/button" className="flex flex-col items-start gap-1">
                                        <div className="flex items-center gap-2">
                                            <Layers className="w-4 h-4"/>
                                            <span className="font-semibold">Components</span>
                                        </div>
                                        <span
                                            className="text-xs text-muted-foreground">Ready-to-use UI components</span>
                                    </a>
                                </Button>

                                <Button variant="outline" className="h-auto p-4 justify-start">
                                    <a
                                        href="https://github.com/pawablox/design-system"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex flex-col items-start gap-1"
                                    >
                                        <div className="flex items-center gap-2">
                                            <ExternalLink className="w-4 h-4"/>
                                            <span className="font-semibold">GitHub</span>
                                        </div>
                                        <span className="text-xs text-muted-foreground">Source code and examples</span>
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    {copiedCode && (
                        <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
                            Code copied to clipboard!
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

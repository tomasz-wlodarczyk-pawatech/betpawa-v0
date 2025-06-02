"use client"

import type React from "react"
import {useState} from "react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Copy,
    Check,
    ExternalLink,
    Smartphone,
    Globe,
    Calculator,
    GamepadIcon,
    ShoppingCart,
    Calendar,
    MessageSquare,
    Zap
} from "lucide-react"
import Image from "next/image";

interface ExampleApp {
    id: string
    title: string
    description: string
    category: string
    prompt: string
    image: string
    technologies: string[]
    difficulty: "Beginner" | "Intermediate" | "Advanced"
    icon: React.ComponentType<any>
}

const exampleApps: ExampleApp[] = [
    {
        id: "betting-app",
        title: "Sports Betting Mobile App",
        description: "A mobile-first betting app with live odds, event listings, and bet slip functionality",
        category: "Mobile",
        prompt: `create a blank mobile app strictly based on the designs provided in the code with the following functionality on the front page: login form

load upcoming betting events from https://pawa-api.replit.app/gh/events and display them under the login form together with event details, 1x2 markets and their odds. Example api response: { "status": "success", "data": [ { "start_time": "2025-05-28T19:00:00Z", "competition": "Football - International - UEFA Conference League", "event_name": "Real Betis Seville - Chelsea FC (n)", "event_id": "27279048", "sr_id": "58267485", "scoreboard": [], "markets": [ { "name": "1X2 | Full Time", "selections": [ { "id": "1199575943", "name": "1", "odds": "4.45", "hot": 0 }, { "id": "1199575944", "name": "X", "odds": "3.70", "hot": 0 }, { "id": "1199575945", "name": "2", "odds": "1.90", "hot": 1 } ] }, { "name": "Double Chance | Full Time", "selections": [ { "id": "1199578566", "name": "1X", "odds": "1.92", "hot": 0 }, { "id": "1199578568", "name": "X2", "odds": "1.23", "hot": 1 }, { "id": "1199578567", "name": "12", "odds": "1.31", "hot": 0 } ] }, { "name": "Both Teams To Score | Full Time", "selections": [ { "id": "1199578829", "name": "Yes", "odds": "1.83", "hot": 1 }, { "id": "1199578830", "name": "No", "odds": "1.98", "hot": 0 } ] }`,
        image: "/sport-bet.png",
        technologies: ["Next.js"],
        difficulty: "Intermediate",
        icon: Smartphone
    },

]

export default function ExampleAppsPage() {
    const [copiedPrompt, setCopiedPrompt] = useState<string>("")
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    const categories = ["All", ...Array.from(new Set(exampleApps.map(app => app.category)))]

    const filteredApps = selectedCategory === "All"
        ? exampleApps
        : exampleApps.filter(app => app.category === selectedCategory)

    const handleCopyPrompt = async (prompt: string, appId: string) => {
        try {
            await navigator.clipboard.writeText(prompt)
            setCopiedPrompt(appId)
            setTimeout(() => setCopiedPrompt(""), 2000)
        } catch (err) {
            console.error("Failed to copy text: ", err)
        }
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Beginner":
                return "bg-green-500"
            case "Intermediate":
                return "bg-yellow-500"
            case "Advanced":
                return "bg-red-500"
            default:
                return "bg-gray-500"
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Mobile header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b bg-background">
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
            </div>

            {/* Main content */}
            <div className="flex-1 bg-background">
                <div className="container mx-auto p-4 space-y-6 max-w-6xl">
                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-2xl font-semibold text-gray-900">Example Apps</h1>
                        <p className="text-gray-600">
                            Discover what's possible with Replit! Browse example applications with prompts and see the
                            results.
                        </p>
                    </div>

                    {/* Category Filter */}
                    <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                        <TabsList className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 w-full">
                            {categories.map((category) => (
                                <TabsTrigger key={category} value={category} className="text-xs">
                                    {category}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>

                    {/* Apps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredApps.map((app) => {
                            const IconComponent = app.icon
                            return (
                                <Card key={app.id} className="group hover:shadow-lg transition-shadow duration-200">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="p-2 bg-green-100 rounded-lg">

                                                    <IconComponent className="w-5 h-5 text-green-600"/>
                                                </div>
                                                <div>
                                                    <CardTitle className="text-lg">{app.title}</CardTitle>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Badge variant="secondary" className="text-xs">
                                                            {app.category}
                                                        </Badge>
                                                        <Badge
                                                            className={`text-xs text-white ${getDifficultyColor(app.difficulty)}`}
                                                        >
                                                            {app.difficulty}
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <CardDescription className="text-sm leading-relaxed">
                                            {app.description}
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-4">
                                        {/* Technology badges */}
                                        <div className="flex flex-wrap gap-1">
                                            {app.technologies.map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>

                                        {/* App preview placeholder */}
                                        <div
                                            className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                            <div className="text-center text-gray-500">
                                                {app.image ? <Image src={app.image} alt={app.title} width={400}
                                                                    height={400}/> :
                                                    <IconComponent className="w-8 h-8 mx-auto mb-2 opacity-50"/>
                                                }
                                                <p className="text-sm">App Preview</p>
                                            </div>
                                        </div>

                                        {/* Action buttons */}
                                        <div className="flex gap-2">
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="primary" size="sm" className="flex-1">
                                                        View Prompt
                                                    </Button>
                                                </DialogTrigger>
                                                <DialogContent className="max-w-2xl max-h-[80vh] overflow-hidden">
                                                    <DialogHeader>
                                                        <DialogTitle className="flex items-center gap-2">
                                                            <IconComponent className="w-5 h-5"/>
                                                            {app.title}
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Copy this prompt to create your own version of this app
                                                        </DialogDescription>
                                                    </DialogHeader>

                                                    <div className="space-y-4">
                                                        <div
                                                            className="bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto">
                                                            <pre
                                                                className="text-sm whitespace-pre-wrap text-gray-800 font-mono">
                                                                {app.prompt}
                                                            </pre>
                                                        </div>

                                                        <div className="flex justify-between items-center">
                                                            <div className="flex gap-2">
                                                                <Badge
                                                                    className={`text-white ${getDifficultyColor(app.difficulty)}`}>
                                                                    {app.difficulty}
                                                                </Badge>
                                                                <Badge variant="secondary">{app.category}</Badge>
                                                            </div>

                                                            <Button
                                                                variant="secondary"
                                                                size="sm"
                                                                onClick={() => handleCopyPrompt(app.prompt, app.id)}
                                                                className="flex items-center gap-2"
                                                            >
                                                                {copiedPrompt === app.id ? (
                                                                    <div className="flex items-center gap-2">
                                                                        <Check className="w-4 h-4"/>
                                                                        Copied!
                                                                    </div>
                                                                ) : (
                                                                    <div className="flex items-center gap-2">
                                                                        <Copy className="w-4 h-4"/>
                                                                        Copy Prompt
                                                                    </div>
                                                                )}
                                                            </Button>
                                                        </div>

                                                        <div className="text-sm text-gray-600">
                                                            <p className="font-medium mb-2">Technologies used:</p>
                                                            <div className="flex flex-wrap gap-1">
                                                                {app.technologies.map((tech) => (
                                                                    <Badge key={tech} variant="outline"
                                                                           className="text-xs">
                                                                        {tech}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>

                                            <Button variant="tertiary" size="sm">
                                                <ExternalLink className="w-4 h-4"/>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Call to action */}

                </div>
            </div>
        </div>
    )
}


"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Copy, Check, ExternalLink, Smartphone, Globe, Calculator, GamepadIcon, ShoppingCart, Calendar, MessageSquare, Zap } from "lucide-react"

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

load upcoming betting events from https://pawa-api.replit.app/gh/events and display them under the login form together with event details, 1x2 markets and their odds`,
        image: "/placeholder.svg",
        technologies: ["Next.js", "React", "Tailwind CSS", "API Integration"],
        difficulty: "Intermediate",
        icon: Smartphone
    },
    {
        id: "todo-app",
        title: "Task Management Dashboard",
        description: "A modern todo app with drag-and-drop, categories, and deadline tracking",
        category: "Productivity",
        prompt: `Build a modern task management app with the following features:
- Add, edit, and delete tasks
- Mark tasks as complete/incomplete  
- Filter tasks by status (all, active, completed)
- Drag and drop to reorder tasks
- Categories and priority levels
- Due date reminders
- Clean, mobile-responsive design using the betPawa design system`,
        image: "/placeholder.svg",
        technologies: ["React", "Local Storage", "Drag & Drop"],
        difficulty: "Beginner",
        icon: Calendar
    },
    {
        id: "weather-app",
        title: "Weather Forecast App",
        description: "Real-time weather data with 7-day forecasts and location search",
        category: "API Integration",
        prompt: `Create a weather forecast application with:
- Current weather display for user's location
- 7-day weather forecast
- Search functionality for different cities
- Weather icons and animations
- Temperature unit conversion (Celsius/Fahrenheit)
- Responsive design optimized for mobile
- Integration with OpenWeatherMap API`,
        image: "/placeholder.svg",
        technologies: ["API Integration", "Geolocation", "Charts"],
        difficulty: "Intermediate",
        icon: Globe
    },
    {
        id: "calculator",
        title: "Scientific Calculator",
        description: "Advanced calculator with scientific functions and equation history",
        category: "Utility",
        prompt: `Build a scientific calculator app featuring:
- Basic arithmetic operations (+, -, ×, ÷)
- Scientific functions (sin, cos, tan, log, sqrt)
- Memory functions (M+, M-, MR, MC)
- Calculation history
- Keyboard input support
- Error handling for invalid operations
- Clean, calculator-like interface design`,
        image: "/placeholder.svg",
        technologies: ["JavaScript", "Mathematical Functions", "Local Storage"],
        difficulty: "Beginner",
        icon: Calculator
    },
    {
        id: "chat-app",
        title: "Real-time Chat Application",
        description: "Multi-room chat with real-time messaging and user presence",
        category: "Real-time",
        prompt: `Create a real-time chat application with:
- Multiple chat rooms
- User authentication and profiles
- Real-time message delivery
- Online/offline user status
- Message timestamps
- Emoji support
- File sharing capabilities
- Responsive design for mobile and desktop`,
        image: "/placeholder.svg",
        technologies: ["Socket.IO", "Real-time", "User Auth"],
        difficulty: "Advanced",
        icon: MessageSquare
    },
    {
        id: "ecommerce",
        title: "E-commerce Store",
        description: "Complete online store with cart, checkout, and payment integration",
        category: "E-commerce",
        prompt: `Build a full-featured e-commerce store including:
- Product catalog with search and filtering
- Shopping cart functionality
- User accounts and order history
- Checkout process with form validation
- Payment integration (Stripe/PayPal)
- Admin panel for product management
- Responsive design
- Order tracking and status updates`,
        image: "/placeholder.svg",
        technologies: ["Next.js", "Payment APIs", "Database", "Admin Panel"],
        difficulty: "Advanced",
        icon: ShoppingCart
    },
    {
        id: "game",
        title: "2048 Puzzle Game",
        description: "Classic 2048 tile-sliding puzzle game with score tracking",
        category: "Games",
        prompt: `Create a 2048 puzzle game with:
- 4x4 grid with sliding tile mechanics
- Score tracking and high score storage
- Smooth animations for tile movements
- Game over detection and restart functionality
- Undo last move feature
- Touch/swipe controls for mobile
- Clean, modern game interface
- Sound effects (optional)`,
        image: "/placeholder.svg",
        technologies: ["Game Logic", "Animations", "Touch Controls"],
        difficulty: "Intermediate",
        icon: GamepadIcon
    },
    {
        id: "dashboard",
        title: "Analytics Dashboard",
        description: "Data visualization dashboard with charts, metrics, and real-time updates",
        category: "Data Visualization",
        prompt: `Build an analytics dashboard featuring:
- Multiple chart types (line, bar, pie, area)
- Real-time data updates
- Filterable date ranges
- Key performance indicators (KPIs)
- Responsive grid layout
- Export functionality (PDF/CSV)
- Dark/light theme toggle
- Interactive chart tooltips and legends`,
        image: "/placeholder.svg",
        technologies: ["Charts.js", "Real-time Data", "Data Export"],
        difficulty: "Advanced",
        icon: Zap
    }
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
            case "Beginner": return "bg-green-500"
            case "Intermediate": return "bg-yellow-500"  
            case "Advanced": return "bg-red-500"
            default: return "bg-gray-500"
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Mobile header */}
            <div className="md:hidden flex items-center justify-between p-4 border-b bg-background">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
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
                            Discover what's possible with Replit! Browse example applications with prompts and see the results.
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
                                                    <IconComponent className="w-5 h-5 text-green-600" />
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
                                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                                            <div className="text-center text-gray-500">
                                                <IconComponent className="w-8 h-8 mx-auto mb-2 opacity-50" />
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
                                                            <IconComponent className="w-5 h-5" />
                                                            {app.title}
                                                        </DialogTitle>
                                                        <DialogDescription>
                                                            Copy this prompt to create your own version of this app
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    
                                                    <div className="space-y-4">
                                                        <div className="bg-gray-50 rounded-lg p-4 max-h-60 overflow-y-auto">
                                                            <pre className="text-sm whitespace-pre-wrap text-gray-800 font-mono">
                                                                {app.prompt}
                                                            </pre>
                                                        </div>
                                                        
                                                        <div className="flex justify-between items-center">
                                                            <div className="flex gap-2">
                                                                <Badge className={`text-white ${getDifficultyColor(app.difficulty)}`}>
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
                                                                    <>
                                                                        <Check className="w-4 h-4" />
                                                                        Copied!
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Copy className="w-4 h-4" />
                                                                        Copy Prompt
                                                                    </>
                                                                )}
                                                            </Button>
                                                        </div>
                                                        
                                                        <div className="text-sm text-gray-600">
                                                            <p className="font-medium mb-2">Technologies used:</p>
                                                            <div className="flex flex-wrap gap-1">
                                                                {app.technologies.map((tech) => (
                                                                    <Badge key={tech} variant="outline" className="text-xs">
                                                                        {tech}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </DialogContent>
                                            </Dialog>
                                            
                                            <Button variant="tertiary" size="sm">
                                                <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Call to action */}
                    <div className="text-center py-8">
                        <Card className="max-w-md mx-auto">
                            <CardContent className="pt-6">
                                <h3 className="text-lg font-semibold mb-2">Ready to Build?</h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Copy any prompt above and start building your own app with Replit's AI assistant!
                                </p>
                                <Button variant="primary" className="w-full">
                                    Start Building
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

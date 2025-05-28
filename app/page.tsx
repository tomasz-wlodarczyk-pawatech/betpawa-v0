"use client"

import type React from "react"
import {useState} from "react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Checkbox} from "@/components/ui/checkbox"
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
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Loader2, Eye, Heart, Star, Settings, Calendar} from "lucide-react"
import {Button} from "@/components/ui/button"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Spinner} from "@/components/ui/spinner";


// Custom Spinner Component


export default function HomePage() {
    const [inputValue, setInputValue] = useState("")
    const [checkboxChecked, setCheckboxChecked] = useState(false)
    const [radioValue, setRadioValue] = useState("option1")
    const [selectValue, setSelectValue] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false)

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
                <div></div>
            </div>

            {/* Main content */}
            <div className="flex-1 bg-background">
                <div className="container mx-auto p-4 space-y-8 max-w-2xl">
                    {/* Header */}
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-gray-900">Component Catalog</h1>
                        <p className="text-gray-600">A comprehensive preview of all pawabloX design system
                            components</p>
                    </div>

                    {/* Buttons Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Buttons</h2>
                            <p className="text-sm text-gray-600">Primary, secondary, and disabled button states</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary">Primary Button</Button>
                                <Button variant="secondary">Secondary Button</Button>
                                <Button variant="tertiary">Tertiary Button</Button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary" disabled>
                                    Disabled Primary
                                </Button>
                                <Button variant="primary" loading>
                                    Loading...
                                </Button>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary" size="sm">
                                    Small
                                </Button>
                                <Button variant="primary" size="default">
                                    Default
                                </Button>
                                <Button variant="primary" size="lg">
                                    Large
                                </Button>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Input Field Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Input Fields</h2>
                            <p className="text-sm text-gray-600">Text input with various states</p>
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Default Input</label>
                                <Input
                                    placeholder="Enter text here..."
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Disabled Input</label>
                                <Input placeholder="Disabled input" disabled/>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Input with Icon</label>
                                <div className="relative">
                                    <Eye
                                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"/>
                                    <Input placeholder="Input with icon" className="pl-10"/>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Checkbox Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Checkboxes</h2>
                            <p className="text-sm text-gray-600">Checkbox components with labels</p>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="checkbox1" checked={checkboxChecked}
                                          onCheckedChange={(e) => setCheckboxChecked((prevState) => !prevState)}/>
                                <label htmlFor="checkbox1" className="text-sm font-medium text-gray-700">
                                    Accept terms and conditions
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="checkbox2"/>
                                <label htmlFor="checkbox2" className="text-sm font-medium text-gray-700">
                                    Subscribe to newsletter
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="checkbox3" disabled/>
                                <label htmlFor="checkbox3" className="text-sm font-medium text-gray-400">
                                    Disabled checkbox
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Radio Buttons Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Radio Buttons</h2>
                            <p className="text-sm text-gray-600">Single selection radio button group</p>
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-700">Choose your plan:</p>
                                <RadioGroup>
                                    <RadioGroupItem label="Basic Plan" value="basic" checked={radioValue === "basic"}
                                                    onValueChange={setRadioValue}/>
                                    <RadioGroupItem label="Pro Plan" value="pro" checked={radioValue === "pro"}
                                                    onValueChange={setRadioValue}/>
                                    <RadioGroupItem
                                        label="Enterprise Plan"
                                        value="enterprise"
                                        description="Advanced features for large organizations"
                                        checked={radioValue === "enterprise"}
                                        onValueChange={setRadioValue}
                                    />
                                    <RadioGroupItem label="Disabled Option" value="disabled" disabled/>
                                </RadioGroup>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Select Dropdown Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Select Dropdown</h2>
                            <p className="text-sm text-gray-600">Dropdown selection component</p>
                        </div>
                        <div className="space-y-3">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">Select Country</label>
                                <Select value={selectValue} onValueChange={setSelectValue}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose a country"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="us">United States</SelectItem>
                                        <SelectItem value="uk">United Kingdom</SelectItem>
                                        <SelectItem value="ca">Canada</SelectItem>
                                        <SelectItem value="au">Australia</SelectItem>
                                        <SelectItem value="de">Germany</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Tabs Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Tabs</h2>
                            <p className="text-sm text-gray-600">Tabbed navigation component</p>
                        </div>
                        <Tabs defaultValue="tab1" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="tab1">Overview</TabsTrigger>
                                <TabsTrigger value="tab2">Details</TabsTrigger>
                                <TabsTrigger value="tab3">Settings</TabsTrigger>
                            </TabsList>
                            <TabsContent value="tab1" className="mt-4 p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Overview Content</h3>
                                <p className="text-sm text-gray-600">This is the overview tab content with general
                                    information.</p>
                            </TabsContent>
                            <TabsContent value="tab2" className="mt-4 p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Details Content</h3>
                                <p className="text-sm text-gray-600">This tab contains detailed information and
                                    specifications.</p>
                            </TabsContent>
                            <TabsContent value="tab3" className="mt-4 p-4 border rounded-lg">
                                <h3 className="font-medium mb-2">Settings Content</h3>
                                <p className="text-sm text-gray-600">Configure your preferences and settings here.</p>
                            </TabsContent>
                        </Tabs>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Card Component Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Cards</h2>
                            <p className="text-sm text-gray-600">Card containers with headers and content</p>
                        </div>
                        <div className="space-y-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Heart className="w-5 h-5 text-red-500"/>
                                        Basic Card
                                    </CardTitle>
                                    <CardDescription>This is a basic card component with header and
                                        content</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-600">
                                        Card content goes here. This can include any type of content like text, images,
                                        buttons, or other
                                        components.
                                    </p>
                                    <div className="mt-4 flex gap-2">
                                        <Button variant="primary" size="sm">
                                            Action
                                        </Button>
                                        <Button variant="tertiary" size="sm">
                                            Cancel
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-lime-200 bg-lime-50">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Star className="w-5 h-5 text-yellow-500"/>
                                        Featured Card
                                    </CardTitle>
                                    <CardDescription>A highlighted card with custom styling</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-gray-700">
                                        This card has custom styling to make it stand out from regular cards.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Loader/Spinner Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Loaders & Spinners</h2>
                            <p className="text-sm text-gray-600">Loading indicators in different sizes</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <Spinner size="sm"/>
                                    <p className="text-xs text-gray-600 mt-1">Small</p>
                                </div>
                                <div className="text-center">
                                    <Spinner size="default"/>
                                    <p className="text-xs text-gray-600 mt-1">Default</p>
                                </div>
                                <div className="text-center">
                                    <Spinner size="lg"/>
                                    <p className="text-xs text-gray-600 mt-1">Large</p>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg bg-gray-50">
                                <div className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin text-lime-400"/>
                                    <span className="text-sm text-gray-600">Loading content...</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Badge Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Badges</h2>
                            <p className="text-sm text-gray-600">Status indicators and labels</p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-lime-400 text-black">New</Badge>
                                <Badge variant="secondary">Popular</Badge>
                                <Badge variant="outline">Draft</Badge>
                                <Badge Icon={Calendar} variant="secondary">Error</Badge>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Badge className="bg-blue-500 text-white">Info</Badge>
                                <Badge className="bg-orange-500 text-white">Warning</Badge>
                                <Badge className="bg-green-500 text-white">Success</Badge>
                                <Badge className="bg-purple-500 text-white">Premium</Badge>
                            </div>
                            <div className="p-4 border rounded-lg">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium">John Doe</span>
                                    <Badge className="bg-lime-400 text-black text-xs">Pro</Badge>
                                    <Badge variant="outline" className="text-xs">
                                        Verified
                                    </Badge>
                                </div>
                                <p className="text-xs text-gray-600 mt-1">Example of badges in context</p>
                            </div>
                        </div>
                    </section>

                    {/* Divider */}
                    <hr className="border-gray-200"/>

                    {/* Modal Section */}
                    <section className="space-y-4">
                        <div className="border-b border-gray-200 pb-2">
                            <h2 className="text-xl font-semibold text-gray-900">Modal Dialog</h2>
                            <p className="text-sm text-gray-600">Modal overlay component</p>
                        </div>
                        <div className="space-y-4">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="primary">Open Modal</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle className="flex items-center gap-2">
                                            <Settings className="w-5 h-5"/>
                                            Modal Title
                                        </DialogTitle>
                                        <DialogDescription>
                                            This is a modal dialog component. It can contain any content including
                                            forms, text, images, or
                                            other components.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Name</label>
                                            <Input placeholder="Enter your name"/>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium">Email</label>
                                            <Input type="email" placeholder="Enter your email"/>
                                        </div>
                                        <div className="flex gap-2 pt-4">
                                            <Button variant="primary" size="sm">
                                                Save
                                            </Button>
                                            <Button variant="tertiary" size="sm">
                                                Cancel
                                            </Button>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="secondary">Confirmation Modal</Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Confirm Action</DialogTitle>
                                        <DialogDescription>
                                            Are you sure you want to proceed? This action cannot be undone.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="flex gap-2 pt-4">
                                        <Button variant="primary" size="sm">
                                            Confirm
                                        </Button>
                                        <Button variant="tertiary" size="sm">
                                            Cancel
                                        </Button>
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="pt-8 pb-4 text-center">
                        <p className="text-sm text-gray-500">pawabloX Design System Component Catalog</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

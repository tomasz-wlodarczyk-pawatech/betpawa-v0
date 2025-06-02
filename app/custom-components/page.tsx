"use client"

import {SportCard} from "@/components/ui/sport-card"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {Button} from "@/components/ui/button"
import {Copy, Check} from "lucide-react"
import {useState} from "react"

export default function SportEventPage() {
    const [copiedCode, setCopiedCode] = useState<string | null>(null)

    const copyToClipboard = (code: string, id: string) => {
        navigator.clipboard.writeText(code)
        setCopiedCode(id)
        setTimeout(() => setCopiedCode(null), 2000)
    }

    const basicUsageCode = `<SportCard
  time="15:30"
  date="Today"
  homeTeam="Manchester United"
  awayTeam="Liverpool FC"
  league="Premier League"
  sport="Football"
  homeOdds="2.10"
  drawOdds="3.40"
  awayOdds="3.20"
/>`

    const hotSelectionCode = `<SportCard
  time="18:00"
  date="Tomorrow"
  homeTeam="Barcelona"
  awayTeam="Real Madrid"
  league="La Liga"
  sport="Football"
  homeOdds="1.95"
  drawOdds="3.60"
  awayOdds="4.20"
  hotSelection="home"
/>`

    const basketballCode = `<SportCard
  time="20:00"
  date="Dec 15"
  homeTeam="Lakers"
  awayTeam="Warriors"
  league="NBA"
  sport="Basketball"
  homeOdds="1.85"
  drawOdds="N/A"
  awayOdds="2.05"
/>`

    return (
        <div className="container mx-auto p-6 space-y-8 max-w-4xl">
            {/* Header */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Badge variant="outline">Pattern Component</Badge>
                    <Badge className="bg-purple-500 text-white">Sport Event</Badge>
                </div>
                <h1 className="text-4xl font-bold text-gray-900">Sport Card</h1>
                <p className="text-lg text-gray-600">
                    A specialized card component designed for displaying sports betting events with odds, team
                    information, and
                    interactive betting buttons.
                </p>
            </div>

            {/* Quick Preview */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Quick Preview</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <SportCard
                        time="15:30"
                        date="Today"
                        homeTeam="Manchester United"
                        awayTeam="Liverpool FC"
                        league="Premier League"
                        sport="Football"
                        homeOdds="2.10"
                        drawOdds="3.40"
                        awayOdds="3.20"
                    />
                    <SportCard
                        time="18:00"
                        date="Tomorrow"
                        homeTeam="Barcelona"
                        awayTeam="Real Madrid"
                        league="La Liga"
                        sport="Football"
                        homeOdds="1.95"
                        drawOdds="3.60"
                        awayOdds="4.20"
                        hotSelection="away"
                    />
                </div>
            </section>

            {/* Documentation Tabs */}
            <Tabs defaultValue="examples" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="examples">Examples</TabsTrigger>
                    <TabsTrigger value="props">Props</TabsTrigger>
                    <TabsTrigger value="usage">Usage</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>

                {/* Examples Tab */}
                <TabsContent value="examples" className="space-y-6">
                    <div className="space-y-6">
                        {/* Basic Example */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Basic Usage</h3>
                            <p className="text-gray-600">Standard sport card with all basic information and betting
                                odds.</p>
                            <div className="max-w-md">
                                <SportCard
                                    time="15:30"
                                    date="Today"
                                    homeTeam="Manchester United"
                                    awayTeam="Liverpool FC"
                                    league="Premier League"
                                    sport="Football"
                                    homeOdds="2.10"
                                    drawOdds="3.40"
                                    awayOdds="3.20"
                                />
                            </div>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-sm">Code Example</CardTitle>
                                        <Button variant="outline" size="sm"
                                                onClick={() => copyToClipboard(basicUsageCode, "basic")}>
                                            {copiedCode === "basic" ? <Check className="w-4 h-4"/> :
                                                <Copy className="w-4 h-4"/>}
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                  <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    <code>{basicUsageCode}</code>
                  </pre>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Hot Selection Example */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Hot Selection</h3>
                            <p className="text-gray-600">Highlight popular betting options with the hot selection
                                indicator.</p>
                            <div className="grid gap-4 md:grid-cols-2">
                                <SportCard
                                    time="18:00"
                                    date="Tomorrow"
                                    homeTeam="Barcelona"
                                    awayTeam="Real Madrid"
                                    league="La Liga"
                                    sport="Football"
                                    homeOdds="1.95"
                                    drawOdds="3.60"
                                    awayOdds="4.20"
                                    hotSelection="home"
                                />
                                <SportCard
                                    time="16:45"
                                    date="Dec 20"
                                    homeTeam="Chelsea"
                                    awayTeam="Arsenal"
                                    league="Premier League"
                                    sport="Football"
                                    homeOdds="2.30"
                                    drawOdds="3.20"
                                    awayOdds="2.90"
                                    hotSelection="draw"
                                />
                            </div>
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-sm">Code Example</CardTitle>
                                        <Button variant="outline" size="sm"
                                                onClick={() => copyToClipboard(hotSelectionCode, "hot")}>
                                            {copiedCode === "hot" ? <Check className="w-4 h-4"/> :
                                                <Copy className="w-4 h-4"/>}
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                  <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    <code>{hotSelectionCode}</code>
                  </pre>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Different Sports */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Different Sports</h3>
                            <p className="text-gray-600">The component adapts to different sports and betting
                                formats.</p>
                            <div className="grid gap-4 md:grid-cols-2">
                                <SportCard
                                    time="20:00"
                                    date="Dec 15"
                                    homeTeam="Lakers"
                                    awayTeam="Warriors"
                                    league="NBA"
                                    sport="Basketball"
                                    homeOdds="1.85"
                                    drawOdds="N/A"
                                    awayOdds="2.05"
                                />
                                <SportCard
                                    time="14:30"
                                    date="Dec 18"
                                    homeTeam="Djokovic"
                                    awayTeam="Nadal"
                                    league="ATP Finals"
                                    sport="Tennis"
                                    homeOdds="1.75"
                                    drawOdds="N/A"
                                    awayOdds="2.15"
                                    hotSelection="away"
                                />
                            </div>
                        </div>

                        {/* Grid Layout */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold">Grid Layout</h3>
                            <p className="text-gray-600">Multiple sport cards in a responsive grid layout.</p>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <SportCard
                                    time="15:00"
                                    date="Today"
                                    homeTeam="Bayern Munich"
                                    awayTeam="Dortmund"
                                    league="Bundesliga"
                                    sport="Football"
                                    homeOdds="1.65"
                                    drawOdds="4.20"
                                    awayOdds="5.50"
                                    hotSelection="home"
                                />
                                <SportCard
                                    time="17:30"
                                    date="Today"
                                    homeTeam="Juventus"
                                    awayTeam="AC Milan"
                                    league="Serie A"
                                    sport="Football"
                                    homeOdds="2.40"
                                    drawOdds="3.10"
                                    awayOdds="3.00"
                                />
                                <SportCard
                                    time="19:45"
                                    date="Today"
                                    homeTeam="PSG"
                                    awayTeam="Marseille"
                                    league="Ligue 1"
                                    sport="Football"
                                    homeOdds="1.45"
                                    drawOdds="4.80"
                                    awayOdds="6.50"
                                    hotSelection="home"
                                />
                            </div>
                        </div>
                    </div>
                </TabsContent>

                {/* Props Tab */}
                <TabsContent value="props" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Component Props</CardTitle>
                            <CardDescription>All available props for the SportCard component</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-200">
                                    <thead>
                                    <tr className="bg-gray-50">
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Prop</th>
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Type</th>
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Required</th>
                                        <th className="border border-gray-200 p-3 text-left font-semibold">Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">time</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">Event start time</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">date</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">Event date</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">homeTeam</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">Home team name</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">awayTeam</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">Away team name</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">league</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">League or competition name</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">sport</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">Sport type</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">homeOdds</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">Home team betting odds</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">drawOdds</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">Draw betting odds</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">awayOdds</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">✓</td>
                                        <td className="border border-gray-200 p-3">Away team betting odds</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">hotSelection</td>
                                        <td className="border border-gray-200 p-3">"home" | "draw" | "away"</td>
                                        <td className="border border-gray-200 p-3">-</td>
                                        <td className="border border-gray-200 p-3">Highlights popular betting option
                                            with flame icon
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">moreMarkets</td>
                                        <td className="border border-gray-200 p-3">number</td>
                                        <td className="border border-gray-200 p-3">-</td>
                                        <td className="border border-gray-200 p-3">Number of additional betting
                                            markets
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-200 p-3 font-mono text-sm">className</td>
                                        <td className="border border-gray-200 p-3">string</td>
                                        <td className="border border-gray-200 p-3">-</td>
                                        <td className="border border-gray-200 p-3">Additional CSS classes</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Usage Tab */}
                <TabsContent value="usage" className="space-y-6">
                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>When to Use</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-green-600">✓ Good for:</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                                        <li>Displaying sports betting events</li>
                                        <li>Showing team matchups with odds</li>
                                        <li>Creating betting interfaces</li>
                                        <li>Sports event listings</li>
                                        <li>Live betting displays</li>
                                    </ul>
                                </div>
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-red-600">✗ Avoid for:</h4>
                                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                                        <li>General content cards</li>
                                        <li>Non-sports related content</li>
                                        <li>Simple information display</li>
                                        <li>Navigation elements</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Best Practices</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">Content Guidelines</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                            <li>Keep team names concise and recognizable</li>
                                            <li>Use consistent time and date formats</li>
                                            <li>Ensure odds are clearly formatted (e.g., "2.10" not "2.1")</li>
                                            <li>Use "N/A" for unavailable betting options (like draw in tennis)</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">Layout Guidelines</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                            <li>Use grid layouts for multiple cards</li>
                                            <li>Maintain consistent spacing between cards</li>
                                            <li>Consider mobile responsiveness in grid layouts</li>
                                            <li>Group similar sports or leagues together</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="font-semibold">Interaction Guidelines</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                            <li>Use hotSelection sparingly for truly popular bets</li>
                                            <li>Ensure betting buttons are easily tappable on mobile</li>
                                            <li>Provide clear feedback when odds are selected</li>
                                            <li>Consider loading states for dynamic odds</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                {/* Code Tab */}
                <TabsContent value="code" className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Import Statement</CardTitle>
                        </CardHeader>
                        <CardContent>
              <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <code>{`import { SportCard } from "@/components/ui/sport-card"`}</code>
              </pre>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Basketball Example</CardTitle>
                                <Button variant="outline" size="sm"
                                        onClick={() => copyToClipboard(basketballCode, "basketball")}>
                                    {copiedCode === "basketball" ? <Check className="w-4 h-4"/> :
                                        <Copy className="w-4 h-4"/>}
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
              <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <code>{basketballCode}</code>
              </pre>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>TypeScript Interface</CardTitle>
                        </CardHeader>
                        <CardContent>
              <pre className="text-sm bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <code>{`interface SportCardProps {
  time: string;
  date: string;
  homeTeam: string;
  awayTeam: string;
  league: string;
  sport: string;
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
  hotSelection?: "home" | "draw" | "away";
  moreMarkets?: number;
  className?: string;
}`}</code>
              </pre>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

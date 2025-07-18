"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  AlertCircle,
  ArrowRight,
  Code,
  Copy,
  ExternalLink,
  Globe,
  Key,
  Rocket,
  Zap,
  RefreshCw,
  MessageSquare, Play,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { useState, useEffect } from "react"

interface ApiResponse {
  [key: string]: any
}

export default function PawaProxyPage() {
  const [copied, setCopied] = useState<string | null>(null)
  const [apiData, setApiData] = useState<{
    componentData: ApiResponse | null
    popularEvents: ApiResponse | null
    liveEvents: ApiResponse | null
    loading: boolean
    error: string | null
  }>({
    componentData: null,
    popularEvents: null,
    liveEvents: null,
    loading: true,
    error: null,
  })

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const fetchApiData = async () => {
    setApiData((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const baseUrl = "https://pawa-proxy.replit.app"

      // Fetch component data
      const componentResponse = await fetch(`${baseUrl}/api/preference/v1/component-data?x-pawa-brand=betpawa-ghana`)
      const componentData = await componentResponse.json()

      // Fetch popular events
      const popularResponse = await fetch(`${baseUrl}/apiplus/events/popular?x-pawa-brand=betpawa-ghana`)
      const popularEvents = await popularResponse.json()

      // Fetch live events
      const liveResponse = await fetch(`${baseUrl}/apiplus/events/live?x-pawa-brand=betpawa-ghana`)
      const liveEvents = await liveResponse.json()

      setApiData({
        componentData,
        popularEvents,
        liveEvents,
        loading: false,
        error: null,
      })
    } catch (error) {
      setApiData((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : "Failed to fetch API data",
      }))
    }
  }

  useEffect(() => {
    fetchApiData()
  }, [])

  const examplePrompt = `Load upcoming betting events from https://pawa-proxy.replit.app/apiplus/events/live?x-pawa-brand=betpawa-ghana and display them under the login form together with event details, 1x2 markets and their odds. Example api response: { "status": "success", "data": [ { "start_time": "2025-05-28T19:00:00Z", "competition": "Football - International - UEFA Conference League", "event_name": "Real Betis Seville - Chelsea FC (n)", "event_id": "27279048", "sr_id": "58267485", "scoreboard": [], "markets": [ { "name": "1X2 | Full Time", "selections": [ { "id": "1199575943", "name": "1", "odds": "4.45", "hot": 0 }, { "id": "1199575944", "name": "X", "odds": "3.70", "hot": 0 }, { "id": "1199575945", "name": "2", "odds": "1.90", "hot": 1 } ] }, { "name": "Double Chance | Full Time", "selections": [ { "id": "1199578566", "name": "1X", "odds": "1.92", "hot": 0 }, { "id": "1199578568", "name": "X2", "odds": "1.23", "hot": 1 }, { "id": "1199578567", "name": "12", "odds": "1.31", "hot": 0 } ] }, { "name": "Both Teams To Score | Full Time", "selections": [ { "id": "1199578829", "name": "Yes", "odds": "1.83", "hot": 1 }, { "id": "1199578830", "name": "No", "odds": "1.98", "hot": 0 } ] } ] } ] }`

  return (
      <div className="flex flex-col min-h-screen">
        {/* Mobile header with hamburger */}
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


        {/* Main content */}
        <div className="flex-1 bg-background">
          <div className="container mx-auto p-6 space-y-8 max-w-4xl">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Documentation</Badge>
                <span className="text-sm text-muted-foreground">Developer Guide</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-bold">Getting Started with pawa-proxy</h1>
                  <p className="text-xl text-muted-foreground">
                    Build betting apps easily with real data - no technical setup required!
                  </p>
                </div>
                <Button
                    onClick={fetchApiData}
                    variant="outline"
                    size="sm"
                    disabled={apiData.loading}
                    className="flex items-center gap-2"
                >
                  <div className="flex items-center gap-2">
                    <RefreshCw className={`h-4 w-4 ${apiData.loading ? "animate-spin" : ""}`}/>
                    Refresh Data
                  </div>

                </Button>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"/>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-blue-900">🎯 Important: Choose Your Brand First!</h3>
                  <p className="text-blue-800 leading-relaxed">
                    Before making any API calls, you must select which betPawa brand/market you want to work with. This
                    choice determines:
                  </p>
                  <ul className="list-disc list-inside text-blue-700 space-y-1 ml-4">
                    <li>
                      <strong>Currency:</strong> GHS (Ghana), NGN (Nigeria), KES (Kenya), UGX (Uganda)
                    </li>
                    <li>
                      <strong>Regional Features:</strong> Available sports, betting options, and payment methods
                    </li>
                    <li>
                      <strong>Styling & Branding:</strong> Colors, logos, and UI elements specific to each market
                    </li>
                    <li>
                      <strong>Language & Localization:</strong> Text content and date/time formats
                    </li>
                  </ul>
                  <div className="bg-blue-100 border border-blue-300 rounded-md p-3 mt-3">
                    <p className="text-sm font-medium text-blue-900">
                      💡{" "}
                      <strong>
                        Once selected, use the same brand consistently throughout your entire application session.
                      </strong>
                      All API requests will include the <code
                        className="bg-blue-200 px-1 rounded">x-pawa-brand</code>{" "}
                      header with your chosen brand or query parameter (e.g.,{" "}
                      <code className="bg-blue-200 px-1 rounded">brand-nigeria</code>).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <Alert className="bg-green-50 border-green-200">
              <AlertCircle className="h-4 w-4 text-green-600"/>
              <AlertDescription className="text-green-700">
                This guide shows you how to build betting applications using real betPawa data without any complicated
                setup. Perfect for beginners and experienced developers alike! All examples work with live, real-time
                data.
              </AlertDescription>
            </Alert>

            {/* Error Alert */}
            {apiData.error && (
                <Alert className="bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4 text-red-600"/>
                  <AlertTitle className="text-red-800">API Error</AlertTitle>
                  <AlertDescription className="text-red-700">
                    {apiData.error}. Using fallback example data.
                  </AlertDescription>
                </Alert>
            )}

            {/* Proxy Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600"/>🌍 Proxy Overview
                </CardTitle>
                <CardDescription>A simple way to access betPawa APIs during development</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  When developing on Replit or v0, you can proxy any betPawa API request through:
                </p>

                <div className="bg-slate-50 p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                  https://pawa-proxy.replit.app/
                  <button
                      onClick={() => handleCopy("https://pawa-proxy.replit.app/", "base-url")}
                      className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                      aria-label="Copy to clipboard"
                  >
                    {copied === "base-url" ? (
                        <span className="text-green-600 text-xs font-medium">Copied!</span>
                    ) : (
                        <Copy className="h-4 w-4 text-slate-500"/>
                    )}
                  </button>
                </div>

                <p className="text-muted-foreground">For example:</p>

                <div className="bg-slate-50 p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                  https://pawa-proxy.replit.app/api/preference/v1/component-data?x-pawa-brand=betpawa-ghana
                  <button
                      onClick={() =>
                          handleCopy(
                              "https://pawa-proxy.replit.app/api/preference/v1/component-data?x-pawa-brand=betpawa-ghana",
                              "example-url",
                          )
                      }
                      className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                      aria-label="Copy to clipboard"
                  >
                    {copied === "example-url" ? (
                        <span className="text-green-600 text-xs font-medium">Copied!</span>
                    ) : (
                        <Copy className="h-4 w-4 text-slate-500"/>
                    )}
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="font-semibold text-lg">📋 Understanding Component Data</h4>
                  <p className="text-muted-foreground">
                    The <code className="bg-slate-100 px-2 py-1 rounded text-sm">component-data</code> endpoint is one
                    of
                    the most important APIs for building betPawa-style applications. It provides essential configuration
                    data including:
                  </p>

                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Brand-specific styling and theme configurations</li>
                    <li>Feature flags and component visibility settings</li>
                    <li>Localization and language preferences</li>
                    <li>Regional betting rules and restrictions</li>
                    <li>UI component configurations and layouts</li>
                  </ul>

                  <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex gap-3">
                    <div className="text-blue-600 mt-1">
                      <AlertCircle className="h-5 w-5"/>
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">📚 Detailed Documentation</p>
                      <p className="text-blue-700 text-sm">
                        For complete component-data API specification, parameters, and response schema, visit:{" "}
                        <a
                            href="https://aliengain.github.io/api-portal/pawa-api.html?urls.primaryName=Preference#/Component%20data/componentData"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-blue-800"
                        >
                          Component Data API Documentation
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Authentication */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5 text-green-600"/>🔐 Authentication
                </CardTitle>
                <CardDescription>How to authenticate with the proxy service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">To authenticate, use the following endpoint:</p>

                <div className="space-y-2">
                  <div
                      className="bg-slate-800 text-white p-4 rounded-t-md font-mono text-sm overflow-x-auto relative group">
                    POST https://pawa-proxy.replit.app/api/user/v1/authenticate
                    <button
                        onClick={() =>
                            handleCopy("POST https://pawa-proxy.replit.app/api/user/v1/authenticate", "auth-endpoint")
                        }
                        className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600"
                        aria-label="Copy to clipboard"
                    >
                      {copied === "auth-endpoint" ? (
                          <span className="text-green-400 text-xs font-medium">Copied!</span>
                      ) : (
                          <Copy className="h-4 w-4 text-slate-300"/>
                      )}
                    </button>
                  </div>
                  <p className="text-sm font-medium">Payload:</p>
                  <div className="bg-slate-50 p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                    {`{
  "username": "user-phone",
  "password": "user-password"
}`}
                    <button
                        onClick={() =>
                            handleCopy(
                                `{
  "username": "user-phone",
  "password": "user-password"
}`,
                                "auth-payload",
                            )
                        }
                        className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                        aria-label="Copy to clipboard"
                    >
                      {copied === "auth-payload" ? (
                          <span className="text-green-600 text-xs font-medium">Copied!</span>
                      ) : (
                          <Copy className="h-4 w-4 text-slate-500"/>
                      )}
                    </button>
                  </div>

                  <p className="text-sm font-medium mt-4">Response:</p>
                  <div className="bg-slate-50 p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                    {`{
  "sessionToken": "sess_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}`}
                    <button
                        onClick={() =>
                            handleCopy(
                                `{
  "sessionToken": "sess_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
}`,
                                "auth-response",
                            )
                        }
                        className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                        aria-label="Copy to clipboard"
                    >
                      {copied === "auth-response" ? (
                          <span className="text-green-600 text-xs font-medium">Copied!</span>
                      ) : (
                          <Copy className="h-4 w-4 text-slate-500"/>
                      )}
                    </button>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex gap-3">
                  <div className="text-blue-600 mt-1">
                    <ExternalLink className="h-5 w-5"/>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">📚 User API Documentation</p>
                    <p className="text-blue-700 text-sm">
                      For complete User Service API specification, authentication details, and all available user
                      endpoints, visit:{" "}
                      <a
                          href="https://aliengain.github.io/api-portal/pawa-api.html?urls.primaryName=User"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-blue-800"
                      >
                        User Service API Documentation
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <h4 className="font-semibold text-lg">💬 Example Implementation Prompt</h4>
                  <p className="text-muted-foreground">
                    Here's an example prompt you can use with AI assistants to implement user authentication:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Example Prompt:</p>
                      <div className="bg-slate-50 border-l-4 border-blue-500 p-4 rounded-md relative group">
                        <div className="font-mono text-sm text-slate-700 whitespace-pre-wrap">
                          {`Create a login page for betpawa-nigeria using the API defined in @docs/api/user.yaml, with https://pawa-proxy.replit.app as the base URL, and do not use credentials: 'include' or any CSRF-related credentials handling.`}
                        </div>
                        <button
                            onClick={() =>
                                handleCopy(
                                    `Create a login page for betpawa-nigeria using the API defined in @docs/api/user.yaml, with https://pawa-proxy.replit.app as the base URL, and do not use credentials: 'include' or any CSRF-related credentials handling.`,
                                    "auth-prompt",
                                )
                            }
                            className="absolute right-2 top-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                            aria-label="Copy prompt to clipboard"
                        >
                          {copied === "auth-prompt" ? (
                              <span className="text-green-600 text-xs font-medium">Copied!</span>
                          ) : (
                              <Copy className="h-4 w-4 text-slate-500"/>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Play className="w-5 h-5 text-blue-600"/>
                      Video example
                    </CardTitle>
                    <CardDescription className="text-md">Watch how looks like a login page for betpawa-nigeria using the
                      API defined in @docs/api/user.yaml.</CardDescription>
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
                          src="/login.gif"
                          alt="Demo showing how to use @v0/system-prompt.txt with Replit Assistant"
                          className="w-full rounded border border-gray-600 transition-transform duration-300 hover:scale-150"
                      />
                    </div>
                  </CardContent>
                </Card>

                <div className="bg-green-50 border border-green-200 rounded-md p-4 flex gap-3">
                  <div className="text-green-600 mt-1">
                    <Zap className="h-5 w-5"/>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">✅ Important</p>
                    <p className="text-green-700 text-sm">Store this sessionToken in your frontend app.</p>
                  </div>
                </div>

                <p className="text-muted-foreground">
                  All subsequent requests must include this token as a Bearer in the Authorization header.
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Example:</p>
                  <div
                      className="bg-slate-800 text-white p-4 rounded-t-md font-mono text-sm overflow-x-auto relative group">
                    GET /api/ledger/v1/funds/balance
                    <br/>
                    Authorization: Bearer sess_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                    <button
                        onClick={() =>
                            handleCopy(
                                `GET /api/ledger/v1/funds/balance
Authorization: Bearer sess_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`,
                                "auth-example",
                            )
                        }
                        className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600"
                        aria-label="Copy to clipboard"
                    >
                      {copied === "auth-example" ? (
                          <span className="text-green-400 text-xs font-medium">Copied!</span>
                      ) : (
                          <Copy className="h-4 w-4 text-slate-300"/>
                      )}
                    </button>
                  </div>

                  <p className="text-sm font-medium mt-4">Response:</p>
                  <div className="bg-slate-50 p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                    {`{
  "balance": 10.745,
  "currency": "GHS"
}`}
                    <button
                        onClick={() =>
                            handleCopy(
                                `{
  "balance": 10.745,
  "currency": "GHS"
}`,
                                "balance-response",
                            )
                        }
                        className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                        aria-label="Copy to clipboard"
                    >
                      {copied === "balance-response" ? (
                          <span className="text-green-600 text-xs font-medium">Copied!</span>
                      ) : (
                          <Copy className="h-4 w-4 text-slate-500"/>
                      )}
                    </button>
                  </div>
                </div>


              </CardContent>
            </Card>

            {/* Start Building Without Backend */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="w-5 h-5 text-green-600"/>🚀 Start Building Without Backend
                </CardTitle>
                <CardDescription>Develop your frontend faster and easier</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Once authenticated, you can develop your frontend (e.g. V0) without running a backend, using the proxy
                  for all data access. This makes local development much faster and easier. ❤️
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h3 className="font-medium mb-2">✨ Faster Development</h3>
                    <p className="text-sm text-muted-foreground">No need to set up complex backend environments</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h3 className="font-medium mb-2">🔄 Real Data</h3>
                    <p className="text-sm text-muted-foreground">Work with actual API responses, not mock data</p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h3 className="font-medium mb-2">🛠️ Focus on UI</h3>
                    <p className="text-sm text-muted-foreground">Concentrate on frontend without backend
                      distractions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Component Data Example with Real Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600"/>📋 Component Data Example
                  {apiData.loading && <RefreshCw className="h-4 w-4 animate-spin text-green-600"/>}
                </CardTitle>
                <CardDescription>
                  {apiData.componentData
                      ? "Live data from the component data endpoint"
                      : "Try the component data endpoint"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Component Data</h3>
                    <Badge variant="secondary">GET</Badge>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-md font-mono text-sm overflow-x-auto relative group">
                    /api/preference/v1/component-data?x-pawa-brand=betpawa-ghana
                    <button
                        onClick={() =>
                            handleCopy("/api/preference/v1/component-data?x-pawa-brand=betpawa-ghana", "component-endpoint")
                        }
                        className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                        aria-label="Copy to clipboard"
                    >
                      {copied === "component-endpoint" ? (
                          <span className="text-green-600 text-xs font-medium">Copied!</span>
                      ) : (
                          <Copy className="h-4 w-4 text-slate-500"/>
                      )}
                    </button>
                  </div>

                  <Tabs defaultValue="request" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="request">Request</TabsTrigger>
                      <TabsTrigger value="response">Response</TabsTrigger>
                    </TabsList>

                    <TabsContent value="request" className="space-y-4">
                      <div
                          className="bg-slate-800 text-white p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                        {`curl -X POST "https://pawa-proxy.replit.app/api/user/v1/authenticate"`}
                        <button
                            onClick={() =>
                                handleCopy(
                                    `curl -X POST "https://pawa-proxy.replit.app/api/user/v1/authenticate"`,
                                    "component-curl",
                                )
                            }
                            className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600"
                            aria-label="Copy to clipboard"
                        >
                          {copied === "component-curl" ? (
                              <span className="text-green-400 text-xs font-medium">Copied!</span>
                          ) : (
                              <Copy className="h-4 w-4 text-slate-300"/>
                          )}
                        </button>
                      </div>
                    </TabsContent>

                    <TabsContent value="response" className="space-y-4">
                      <div
                          className="bg-slate-50 p-4 rounded-md font-mono text-xs overflow-x-auto max-h-64 overflow-y-auto relative group">
                        {apiData.componentData
                            ? JSON.stringify(apiData.componentData, null, 2)
                            : `{
  "status": "loading",
  "message": "Fetching real data from API..."
}`}
                        <button
                            onClick={() =>
                                handleCopy(
                                    apiData.componentData ? JSON.stringify(apiData.componentData, null, 2) : "Loading...",
                                    "component-response",
                                )
                            }
                            className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                            aria-label="Copy to clipboard"
                        >
                          {copied === "component-response" ? (
                              <span className="text-green-600 text-xs font-medium">Copied!</span>
                          ) : (
                              <Copy className="h-4 w-4 text-slate-500"/>
                          )}
                        </button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </CardContent>
            </Card>

            {/* AI-Friendly Endpoints with Real Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5 text-green-600"/>🤖 AI-Friendly Endpoints
                  {apiData.loading && <RefreshCw className="h-4 w-4 animate-spin text-green-600"/>}
                </CardTitle>
                <CardDescription>Live data from simplified endpoints

                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-slate-50 p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                  <a
                      href="https://pawa-proxy.replit.app/docs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                  >
                    https://pawa-proxy.replit.app/docs
                  </a>
                  <button
                      onClick={() => handleCopy("https://pawa-proxy.replit.app/docs", "swagger-url")}
                      className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                      aria-label="Copy to clipboard"
                  >
                    {copied === "swagger-url" ? (
                        <span className="text-green-600 text-xs font-medium">Copied!</span>
                    ) : (
                        <Copy className="h-4 w-4 text-slate-500"/>
                    )}
                  </button>
                </div>

                <p className="text-muted-foreground">New, simplified endpoints with real, live data:</p>

                {/* Popular Events with Real Data */}
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">🔥 Popular Events</h3>
                    <Badge variant="secondary">GET</Badge>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-md font-mono text-sm overflow-x-auto relative group">
                    /apiplus/events/popular
                    <button
                        onClick={() => handleCopy("/apiplus/events/popular", "popular-endpoint")}
                        className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                        aria-label="Copy to clipboard"
                    >
                      {copied === "popular-endpoint" ? (
                          <span className="text-green-600 text-xs font-medium">Copied!</span>
                      ) : (
                          <Copy className="h-4 w-4 text-slate-500"/>
                      )}
                    </button>
                  </div>

                  <Tabs defaultValue="request" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="request">Request</TabsTrigger>
                      <TabsTrigger value="response">Response</TabsTrigger>
                    </TabsList>

                    <TabsContent value="request" className="space-y-4">
                      <div
                          className="bg-slate-800 text-white p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                        {`curl -X GET "https://pawa-proxy.replit.app/apiplus/events/popular" \\
  -H "x-pawa-brand: betpawa-ghana"`}
                        <button
                            onClick={() =>
                                handleCopy(
                                    `curl -X GET "https://pawa-proxy.replit.app/apiplus/events/popular" \\
  -H "x-pawa-brand: betpawa-ghana"`,
                                    "popular-curl",
                                )
                            }
                            className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600"
                            aria-label="Copy to clipboard"
                        >
                          {copied === "popular-curl" ? (
                              <span className="text-green-400 text-xs font-medium">Copied!</span>
                          ) : (
                              <Copy className="h-4 w-4 text-slate-300"/>
                          )}
                        </button>
                      </div>
                    </TabsContent>

                    <TabsContent value="response" className="space-y-4">
                      <div
                          className="bg-slate-50 p-4 rounded-md font-mono text-xs overflow-x-auto max-h-64 overflow-y-auto relative group">
                        {apiData.popularEvents
                            ? JSON.stringify(apiData.popularEvents, null, 2)
                            : `{
  "status": "loading",
  "message": "Fetching real popular events data..."
}`}
                        <button
                            onClick={() =>
                                handleCopy(
                                    apiData.popularEvents ? JSON.stringify(apiData.popularEvents, null, 2) : "Loading...",
                                    "popular-response",
                                )
                            }
                            className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                            aria-label="Copy to clipboard"
                        >
                          {copied === "popular-response" ? (
                              <span className="text-green-600 text-xs font-medium">Copied!</span>
                          ) : (
                              <Copy className="h-4 w-4 text-slate-500"/>
                          )}
                        </button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* Live Events with Real Data */}
                <div className="border rounded-lg p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">🔴 Live Events</h3>
                    <Badge variant="secondary">GET</Badge>
                  </div>

                  <div className="bg-slate-50 p-3 rounded-md font-mono text-sm overflow-x-auto relative group">
                    /apiplus/events/live
                    <button
                        onClick={() => handleCopy("/apiplus/events/live", "live-endpoint")}
                        className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                        aria-label="Copy to clipboard"
                    >
                      {copied === "live-endpoint" ? (
                          <span className="text-green-600 text-xs font-medium">Copied!</span>
                      ) : (
                          <Copy className="h-4 w-4 text-slate-500"/>
                      )}
                    </button>
                  </div>

                  <Tabs defaultValue="request" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="request">Request</TabsTrigger>
                      <TabsTrigger value="response">Response</TabsTrigger>
                    </TabsList>

                    <TabsContent value="request" className="space-y-4">
                      <div
                          className="bg-slate-800 text-white p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                        {`curl -X GET "https://pawa-proxy.replit.app/apiplus/events/live" \\
  -H "x-pawa-brand: betpawa-ghana"`}
                        <button
                            onClick={() =>
                                handleCopy(
                                    `curl -X GET "https://pawa-proxy.replit.app/apiplus/events/live" \\
  -H "x-pawa-brand: betpawa-ghana"`,
                                    "live-curl",
                                )
                            }
                            className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-700 hover:bg-slate-600"
                            aria-label="Copy to clipboard"
                        >
                          {copied === "live-curl" ? (
                              <span className="text-green-400 text-xs font-medium">Copied!</span>
                          ) : (
                              <Copy className="h-4 w-4 text-slate-300"/>
                          )}
                        </button>
                      </div>
                    </TabsContent>

                    <TabsContent value="response" className="space-y-4">
                      <div
                          className="bg-slate-50 p-4 rounded-md font-mono text-xs overflow-x-auto max-h-64 overflow-y-auto relative group">
                        {apiData.liveEvents
                            ? JSON.stringify(apiData.liveEvents, null, 2)
                            : `{
  "status": "loading",
  "message": "Fetching real live events data..."
}`}
                        <button
                            onClick={() =>
                                handleCopy(
                                    apiData.liveEvents ? JSON.stringify(apiData.liveEvents, null, 2) : "Loading...",
                                    "live-response",
                                )
                            }
                            className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                            aria-label="Copy to clipboard"
                        >
                          {copied === "live-response" ? (
                              <span className="text-green-600 text-xs font-medium">Copied!</span>
                          ) : (
                              <Copy className="h-4 w-4 text-slate-500"/>
                          )}
                        </button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex gap-3">
                  <div className="text-blue-600 mt-1">
                    <AlertCircle className="h-5 w-5"/>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">💡 Pro Tip</p>
                    <p className="text-blue-700 text-sm">
                      You can provide the x-pawa-brand either as a header (recommended) or as a GET parameter
                      (?x-pawa-brand=betpawa-ghana) for easier testing. All data above is fetched live from the API!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Documentation Link */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-green-600"/>📚 Full API Documentation
                </CardTitle>
                <CardDescription>Explore all available endpoints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  For a complete list of all available endpoints and their documentation, visit:
                </p>

                <div className="bg-slate-50 p-4 rounded-md font-mono text-sm overflow-x-auto relative group">
                  <a
                      href="https://aliengain.github.io/api-portal/pawa-api.html?urls.primaryName=Preference"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                  >
                    https://aliengain.github.io/api-portal/pawa-api.html?urls.primaryName=Preference
                  </a>
                  <button
                      onClick={() =>
                          handleCopy(
                              "https://aliengain.github.io/api-portal/pawa-api.html?urls.primaryName=Preference",
                              "docs-url",
                          )
                      }
                      className="absolute right-2 top-2 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                      aria-label="Copy to clipboard"
                  >
                    {copied === "docs-url" ? (
                        <span className="text-green-600 text-xs font-medium">Copied!</span>
                    ) : (
                        <Copy className="h-4 w-4 text-slate-500"/>
                    )}
                  </button>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button asChild>
                    <a
                        href="https://aliengain.github.io/api-portal/pawa-api.html?urls.primaryName=Preference"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-2"
                    >
                      View API Documentation
                      <ExternalLink className="w-4 h-4 ml-2"/>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Example Prompt Section - Now Last */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-green-600"/>💬 Example Prompt for v0/Replit
                </CardTitle>
                <CardDescription>Copy this prompt to quickly build a betting app with live data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Use this example prompt when working with v0 or Replit to quickly create a betting interface with live
                  data:
                </p>

                <div className="bg-slate-50 border-l-4 border-green-500 p-4 rounded-md relative group">
                  <div className="font-mono text-sm text-slate-700 whitespace-pre-wrap">{examplePrompt}</div>
                  <button
                      onClick={() => handleCopy(examplePrompt, "example-prompt")}
                      className="absolute right-2 top-2 p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity bg-slate-200 hover:bg-slate-300"
                      aria-label="Copy prompt to clipboard"
                  >
                    {copied === "example-prompt" ? (
                        <span className="text-green-600 text-xs font-medium">Copied!</span>
                    ) : (
                        <Copy className="h-4 w-4 text-slate-500"/>
                    )}
                  </button>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 flex gap-3">
                  <div className="text-blue-600 mt-1">
                    <MessageSquare className="h-5 w-5"/>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">💡 How to use this prompt</p>
                    <ul className="text-blue-700 text-sm mt-2 space-y-1">
                      <li>• Copy the prompt above</li>
                      <li>• Paste it into v0 or Replit Agent</li>
                      <li>• The AI will create a complete betting interface with live data</li>
                      <li>• Modify the prompt to add more features or change the design</li>
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <span className="text-green-600">v0</span> Usage
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Paste the prompt directly into v0 chat to generate a complete React component with live betting
                      data
                    </p>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-md border border-slate-200">
                    <h3 className="font-medium mb-2 flex items-center gap-2">
                      <span className="text-blue-600">Replit</span> Usage
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Use with Replit Agent to build a full Next.js app with authentication and live betting features
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button asChild>
                    <a
                        href="https://pawa-proxy.replit.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-row items-center gap-2"
                    >
                      Visit Proxy
                      <ArrowRight className="w-4 h-4 ml-2"/>
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/example-apps">View Example Apps</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}

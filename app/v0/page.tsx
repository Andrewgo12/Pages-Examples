"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Send,
  Copy,
  Download,
  Share,
  Sparkles,
  Eye,
  Code,
  Smartphone,
  Monitor,
  Tablet,
  Plus,
  Settings,
  Paperclip,
} from "lucide-react"

const chatHistory = [
  {
    id: 1,
    type: "user",
    content: "Create a modern login form with email and password fields",
    timestamp: "2:30 PM",
  },
  {
    id: 2,
    type: "assistant",
    content:
      "I'll create a modern login form for you with email and password fields, including proper validation and styling.",
    timestamp: "2:30 PM",
    hasCode: true,
  },
  {
    id: 3,
    type: "user",
    content: "Can you add a remember me checkbox and forgot password link?",
    timestamp: "2:32 PM",
  },
  {
    id: 4,
    type: "assistant",
    content:
      "I've updated the login form to include a 'Remember me' checkbox and a 'Forgot password?' link with proper styling and functionality.",
    timestamp: "2:32 PM",
    hasCode: true,
  },
]

const examples = [
  {
    title: "Dashboard with charts",
    description: "Analytics dashboard with revenue charts and metrics",
    tags: ["Dashboard", "Charts", "Analytics"],
  },
  {
    title: "E-commerce product page",
    description: "Product page with image gallery and purchase options",
    tags: ["E-commerce", "Product", "Shopping"],
  },
  {
    title: "Social media feed",
    description: "Twitter-like feed with posts, likes, and comments",
    tags: ["Social", "Feed", "Posts"],
  },
  {
    title: "Landing page hero",
    description: "Modern hero section with call-to-action buttons",
    tags: ["Landing", "Hero", "Marketing"],
  },
]

export default function V0Clone() {
  const [prompt, setPrompt] = useState("")
  const [activeView, setActiveView] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const [showCode, setShowCode] = useState(false)

  const handleSendPrompt = () => {
    if (prompt.trim()) {
      // Handle sending prompt
      setPrompt("")
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-semibold">v0</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6 ml-8">
                <Link href="#" className="text-gray-600 hover:text-black">
                  Chat
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  Explore
                </Link>
                <Link href="#" className="text-gray-600 hover:text-black">
                  Docs
                </Link>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline">
                <Plus className="w-4 h-4 mr-2" />
                New chat
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-5 gap-6 h-[calc(100vh-120px)]">
          {/* Chat Sidebar */}
          <div className="lg:col-span-1 hidden lg:block">
            <div className="h-full flex flex-col">
              <div className="mb-6">
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  New chat
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="space-y-2">
                  <div className="p-3 rounded-lg bg-gray-100 cursor-pointer">
                    <div className="font-medium text-sm">Login form design</div>
                    <div className="text-xs text-gray-600 mt-1">2 hours ago</div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="font-medium text-sm">Dashboard layout</div>
                    <div className="text-xs text-gray-600 mt-1">Yesterday</div>
                  </div>
                  <div className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="font-medium text-sm">E-commerce cart</div>
                    <div className="text-xs text-gray-600 mt-1">2 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex-1 overflow-y-auto mb-6">
              {chatHistory.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">What can I help you build?</h2>
                  <p className="text-gray-600 mb-8 max-w-md">
                    Describe a component or layout you'd like to create, and I'll generate the code for you.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                    {examples.map((example, index) => (
                      <Card key={index} className="cursor-pointer hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <h3 className="font-semibold mb-2">{example.title}</h3>
                          <p className="text-sm text-gray-600 mb-3">{example.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {example.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {chatHistory.map((message) => (
                    <div key={message.id} className={`flex gap-4 ${message.type === "user" ? "justify-end" : ""}`}>
                      {message.type === "assistant" && (
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                          <Code2 className="w-4 h-4 text-white" />
                        </div>
                      )}

                      <div className={`max-w-[80%] ${message.type === "user" ? "order-first" : ""}`}>
                        <div
                          className={`p-4 rounded-lg ${
                            message.type === "user" ? "bg-blue-600 text-white ml-auto" : "bg-gray-50"
                          }`}
                        >
                          <p>{message.content}</p>
                          {message.hasCode && message.type === "assistant" && (
                            <div className="mt-3 p-3 bg-gray-900 rounded-lg">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-xs text-gray-400">login-form.tsx</span>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                  <Copy className="w-3 h-3" />
                                </Button>
                              </div>
                              <pre className="text-xs text-gray-300 overflow-x-auto">
                                <code>{`export default function LoginForm() {
  return (
    <div className="max-w-md mx-auto">
      <form className="space-y-4">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}`}</code>
                              </pre>
                            </div>
                          )}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{message.timestamp}</div>
                      </div>

                      {message.type === "user" && (
                        <Avatar className="w-8 h-8 flex-shrink-0">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" />
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="border rounded-lg p-4">
              <div className="flex gap-3">
                <Textarea
                  placeholder="Describe the component you want to build..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="flex-1 min-h-[60px] resize-none border-none focus-visible:ring-0"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleSendPrompt()
                    }
                  }}
                />
                <div className="flex flex-col gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button onClick={handleSendPrompt} disabled={!prompt.trim()} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-2 border rounded-lg overflow-hidden">
            <div className="border-b p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant={showCode ? "outline" : "default"} size="sm" onClick={() => setShowCode(false)}>
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                  </Button>
                  <Button variant={showCode ? "default" : "outline"} size="sm" onClick={() => setShowCode(true)}>
                    <Code className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex border rounded-lg">
                    <Button
                      variant={activeView === "desktop" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveView("desktop")}
                    >
                      <Monitor className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={activeView === "tablet" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveView("tablet")}
                    >
                      <Tablet className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={activeView === "mobile" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setActiveView("mobile")}
                    >
                      <Smartphone className="w-4 h-4" />
                    </Button>
                  </div>

                  <Button variant="outline" size="sm">
                    <Share className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </div>

            <div className="h-[calc(100%-80px)] overflow-auto">
              {showCode ? (
                <div className="p-4 bg-gray-900 text-gray-100 h-full">
                  <pre className="text-sm">
                    <code>{`import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="text-sm">Remember me</label>
            </div>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Button className="w-full">Sign In</Button>
        </CardContent>
      </Card>
    </div>
  )
}`}</code>
                  </pre>
                </div>
              ) : (
                <div className="h-full bg-gray-50 flex items-center justify-center">
                  <div
                    className={`bg-white rounded-lg shadow-lg p-8 ${
                      activeView === "mobile" ? "w-80" : activeView === "tablet" ? "w-96" : "w-full max-w-md"
                    }`}
                  >
                    <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input type="email" placeholder="Enter your email" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Password</label>
                        <Input type="password" placeholder="Enter your password" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="remember" />
                          <label htmlFor="remember" className="text-sm">
                            Remember me
                          </label>
                        </div>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Button className="w-full">Sign In</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

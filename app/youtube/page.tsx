"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Youtube,
  Search,
  Bell,
  ThumbsUp,
  ThumbsDown,
  Share,
  Download,
  MoreHorizontal,
  Play,
  Pause,
  Volume2,
  Settings,
  Maximize,
  Home,
  Compass,
  PlaySquare,
  Clock,
  History,
} from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Building a Full-Stack App with Next.js 14",
    channel: "TechTutorials",
    views: "1.2M views",
    time: "2 days ago",
    duration: "15:32",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: 2,
    title: "React Server Components Explained",
    channel: "DevMaster",
    views: "856K views",
    time: "1 week ago",
    duration: "12:45",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
  {
    id: 3,
    title: "TypeScript Tips and Tricks",
    channel: "CodeAcademy",
    views: "2.1M views",
    time: "3 days ago",
    duration: "18:20",
    thumbnail: "/placeholder.svg?height=180&width=320",
  },
]

const comments = [
  {
    id: 1,
    author: "John Developer",
    content: "Great tutorial! This really helped me understand the concepts better.",
    likes: 42,
    time: "2 hours ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    author: "Sarah Code",
    content: "Could you make a follow-up video about deployment strategies?",
    likes: 18,
    time: "5 hours ago",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function YouTubeClone() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setShowSidebar(!showSidebar)}>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Link href="/" className="flex items-center gap-1">
            <Youtube className="w-8 h-8 text-red-600" />
            <span className="text-xl font-semibold">YouTube</span>
          </Link>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <Input placeholder="Search" className="rounded-r-none border-r-0 focus-visible:ring-0" />
            <Button variant="outline" className="rounded-l-none px-6 bg-transparent">
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="w-6 h-6" />
          </Button>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        {showSidebar && (
          <aside className="w-64 h-screen overflow-y-auto border-r bg-white">
            <div className="p-3">
              <nav className="space-y-1">
                <Link href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Home className="w-6 h-6" />
                  <span>Home</span>
                </Link>
                <Link href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Compass className="w-6 h-6" />
                  <span>Explore</span>
                </Link>
                <Link href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <PlaySquare className="w-6 h-6" />
                  <span>Subscriptions</span>
                </Link>
                <Link href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <History className="w-6 h-6" />
                  <span>History</span>
                </Link>
                <Link href="#" className="flex items-center gap-6 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Clock className="w-6 h-6" />
                  <span>Watch Later</span>
                </Link>
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player Section */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="relative bg-black rounded-lg overflow-hidden mb-4">
                <div className="aspect-video relative">
                  <Image
                    src="/placeholder.svg?height=480&width=854"
                    alt="Video thumbnail"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16" onClick={() => setIsPlaying(!isPlaying)}>
                      {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
                    </Button>
                  </div>

                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-4 text-white">
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </Button>
                      <div className="flex-1 h-1 bg-white/30 rounded-full">
                        <div className="w-1/3 h-full bg-red-600 rounded-full"></div>
                      </div>
                      <span className="text-sm">5:32 / 15:32</span>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                        <Volume2 className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                        <Settings className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                        <Maximize className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mb-6">
                <h1 className="text-xl font-semibold mb-3">
                  Building a Full-Stack App with Next.js 14 - Complete Tutorial
                </h1>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" />
                      <AvatarFallback>TT</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">TechTutorials</div>
                      <div className="text-sm text-gray-600">1.2M subscribers</div>
                    </div>
                    <Button className="ml-4">Subscribe</Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-gray-100 rounded-full">
                      <Button variant="ghost" className="rounded-full">
                        <ThumbsUp className="w-5 h-5 mr-2" />
                        12K
                      </Button>
                      <div className="w-px h-6 bg-gray-300"></div>
                      <Button variant="ghost" className="rounded-full">
                        <ThumbsDown className="w-5 h-5" />
                      </Button>
                    </div>
                    <Button variant="outline" className="rounded-full bg-transparent">
                      <Share className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" className="rounded-full bg-transparent">
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-sm font-semibold mb-2">1,234,567 views • 2 days ago</div>
                  <p className="text-sm">
                    In this comprehensive tutorial, we'll build a full-stack application using Next.js 14, covering
                    everything from setup to deployment. Perfect for developers looking to master modern web
                    development.
                  </p>
                </div>
              </div>

              {/* Comments */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-lg font-semibold">1,234 Comments</h3>
                  <Button variant="ghost">Sort by</Button>
                </div>

                <div className="space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={comment.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{comment.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">{comment.author}</span>
                          <span className="text-xs text-gray-600">{comment.time}</span>
                        </div>
                        <p className="text-sm mb-2">{comment.content}</p>
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {comment.likes}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommended Videos */}
            <div className="space-y-4">
              <h3 className="font-semibold">Up next</h3>
              {videos.map((video) => (
                <div key={video.id} className="flex gap-3 hover:bg-gray-50 p-2 rounded-lg cursor-pointer">
                  <div className="relative">
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      width={168}
                      height={94}
                      className="rounded-lg object-cover"
                    />
                    <Badge className="absolute bottom-1 right-1 bg-black/80 text-white text-xs">{video.duration}</Badge>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm line-clamp-2 mb-1">{video.title}</h4>
                    <p className="text-xs text-gray-600">{video.channel}</p>
                    <p className="text-xs text-gray-600">
                      {video.views} • {video.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

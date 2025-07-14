"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import {
  Linkedin,
  Search,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  Plus,
  ThumbsUp,
  MessageCircle,
  Share,
  Send,
  MoreHorizontal,
  Calendar,
  Globe,
  ImageIcon,
  Video,
  Newspaper,
} from "lucide-react"

const posts = [
  {
    id: 1,
    author: "Sarah Johnson",
    headline: "Senior Software Engineer at TechCorp",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2h",
    content:
      "Excited to share that our team at TechCorp just launched a new open-source project! It's a React component library designed for enterprise applications. Check it out and let us know what you think! #opensource #react #webdevelopment",
    likes: 123,
    comments: 15,
    shares: 5,
    liked: false,
  },
  {
    id: 2,
    author: "Mike Chen",
    headline: "Product Manager at Innovate Solutions",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "5h",
    content:
      "Just attended an insightful webinar on AI in product management. The future is truly here! Key takeaway: AI isn't replacing PMs, it's augmenting our capabilities. #AI #productmanagement #innovation",
    image: "/placeholder.svg?height=300&width=500",
    likes: 245,
    comments: 30,
    shares: 12,
    liked: true,
  },
  {
    id: 3,
    author: "Emma Wilson",
    headline: "UX Designer at Creative Agency",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "1d",
    content:
      "Designing for accessibility is not just a best practice, it's a fundamental requirement. Let's build inclusive experiences for everyone. What are your favorite accessibility tools? #UX #Accessibility #Design",
    likes: 89,
    comments: 10,
    shares: 3,
    liked: false,
  },
]

const news = [
  { title: "Tech stocks surge amid strong Q3 earnings", source: "Reuters", time: "1h ago" },
  { title: "The rise of remote work: A new era for businesses", source: "Forbes", time: "3h ago" },
  { title: "Sustainable tech: Innovations for a greener future", source: "GreenTech Daily", time: "5h ago" },
]

const suggestions = [
  { name: "David Lee", headline: "Software Engineer", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Maria Garcia", headline: "Data Scientist", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Chris Miller", headline: "Marketing Specialist", avatar: "/placeholder.svg?height=40&width=40" },
]

export default function LinkedInClone() {
  const [postContent, setPostContent] = useState("")
  const [likedPosts, setLikedPosts] = useState<number[]>([2])

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Linkedin className="w-8 h-8 text-blue-700" />
              </Link>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search" className="pl-10 w-60 bg-gray-100 border-none" />
              </div>
            </div>

            <nav className="flex items-center gap-6">
              <Link href="#" className="flex flex-col items-center text-gray-600 hover:text-black">
                <Home className="w-6 h-6" />
                <span className="text-xs">Home</span>
              </Link>
              <Link href="#" className="flex flex-col items-center text-gray-600 hover:text-black">
                <Users className="w-6 h-6" />
                <span className="text-xs">My Network</span>
              </Link>
              <Link href="#" className="flex flex-col items-center text-gray-600 hover:text-black">
                <Briefcase className="w-6 h-6" />
                <span className="text-xs">Jobs</span>
              </Link>
              <Link href="#" className="flex flex-col items-center text-gray-600 hover:text-black">
                <MessageSquare className="w-6 h-6" />
                <span className="text-xs">Messaging</span>
              </Link>
              <Link href="#" className="flex flex-col items-center text-gray-600 hover:text-black">
                <Bell className="w-6 h-6" />
                <span className="text-xs">Notifications</span>
              </Link>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <Card className="mb-6">
              <CardContent className="p-0">
                <div className="relative h-20 bg-blue-700 rounded-t-lg"></div>
                <div className="flex flex-col items-center -mt-10">
                  <Avatar className="w-20 h-20 border-2 border-white">
                    <AvatarImage src="/placeholder.svg?height=80&width=80" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <h2 className="text-lg font-semibold mt-2">John Developer</h2>
                  <p className="text-sm text-gray-600 text-center">Senior Software Engineer at TechCorp</p>
                </div>
                <div className="p-4 border-t mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Connections</span>
                    <span className="font-semibold text-blue-700">500+</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Who viewed your profile</span>
                    <span className="font-semibold text-blue-700">123</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4">Recent</h3>
                <nav className="space-y-2 text-sm">
                  <Link href="#" className="block text-gray-600 hover:text-black">
                    #webdevelopment
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-black">
                    #reactjs
                  </Link>
                  <Link href="#" className="block text-gray-600 hover:text-black">
                    #ai
                  </Link>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Textarea
                    placeholder="Start a post"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="flex-1 border rounded-full py-2 px-4 resize-none focus-visible:ring-0"
                    rows={1}
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex gap-4">
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <ImageIcon className="w-5 h-5 text-blue-500" />
                      Photo
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <Video className="w-5 h-5 text-green-500" />
                      Video
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      Event
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <Newspaper className="w-5 h-5 text-red-500" />
                      Write article
                    </Button>
                  </div>
                  <Button disabled={!postContent.trim()}>Post</Button>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            {posts.map((post) => (
              <Card key={post.id}>
                <CardContent className="p-4">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{post.author}</div>
                        <div className="text-sm text-gray-600">{post.headline}</div>
                        <div className="text-xs text-gray-500">
                          {post.time} • <Globe className="inline-block w-3 h-3" />
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="mb-3">{post.content}</p>
                    {post.image && (
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt="Post image"
                          width={500}
                          height={300}
                          className="w-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Post Stats */}
                  <div className="flex items-center justify-between py-2 border-t border-b text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center mr-1">
                          <ThumbsUp className="w-3 h-3 text-white fill-current" />
                        </div>
                        <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <span>{post.comments} comments</span>
                      <span>{post.shares} shares</span>
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-around pt-2">
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-2 ${
                        likedPosts.includes(post.id) ? "text-blue-600" : "text-gray-600"
                      }`}
                      onClick={() => toggleLike(post.id)}
                    >
                      <ThumbsUp className={`w-5 h-5 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                      Like
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <MessageCircle className="w-5 h-5" />
                      Comment
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <Share className="w-5 h-5" />
                      Share
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <Send className="w-5 h-5" />
                      Send
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              {/* LinkedIn News */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">LinkedIn News</h3>
                  <ul className="space-y-3">
                    {news.map((item, index) => (
                      <li key={index}>
                        <Link href="#" className="block text-sm font-semibold hover:underline">
                          {item.title}
                        </Link>
                        <p className="text-xs text-gray-600">
                          {item.source} • {item.time}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Add to your feed */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Add to your feed</h3>
                  <div className="space-y-4">
                    {suggestions.map((user, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={user.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{user.name}</div>
                          <div className="text-xs text-gray-600">{user.headline}</div>
                          <Button variant="outline" size="sm" className="mt-2 rounded-full bg-transparent">
                            <Plus className="w-4 h-4 mr-2" />
                            Follow
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

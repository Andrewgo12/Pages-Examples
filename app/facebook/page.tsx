"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import {
  Facebook,
  Search,
  Home,
  Users,
  PlaySquare,
  Store,
  UserPlus,
  MessageCircle,
  Bell,
  ThumbsUp,
  MessageSquare,
  Share,
  MoreHorizontal,
  Camera,
  Smile,
  Globe,
  Lock,
  ImageIcon,
  Video,
  Calendar,
} from "lucide-react"

const posts = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2 hours ago",
    privacy: "public",
    content:
      "Just finished an amazing hike in the mountains! The view was absolutely breathtaking. Nature never fails to inspire me. 🏔️ #hiking #nature",
    image: "/placeholder.svg?height=400&width=600",
    likes: 24,
    comments: 8,
    shares: 3,
    liked: false,
  },
  {
    id: 2,
    author: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "4 hours ago",
    privacy: "friends",
    content:
      "Excited to announce that I've started a new position as Senior Developer at TechCorp! Looking forward to new challenges and opportunities. 🚀",
    likes: 42,
    comments: 15,
    shares: 7,
    liked: true,
  },
  {
    id: 3,
    author: "Emma Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "6 hours ago",
    privacy: "public",
    content:
      "Homemade pizza night! 🍕 Nothing beats the satisfaction of making it from scratch. Recipe in the comments!",
    image: "/placeholder.svg?height=400&width=600",
    likes: 18,
    comments: 12,
    shares: 2,
    liked: false,
  },
]

const stories = [
  { id: 1, name: "Your Story", avatar: "/placeholder.svg?height=40&width=40", isOwn: true },
  { id: 2, name: "Alex", avatar: "/placeholder.svg?height=40&width=40", isOwn: false },
  { id: 3, name: "Jessica", avatar: "/placeholder.svg?height=40&width=40", isOwn: false },
  { id: 4, name: "David", avatar: "/placeholder.svg?height=40&width=40", isOwn: false },
  { id: 5, name: "Lisa", avatar: "/placeholder.svg?height=40&width=40", isOwn: false },
]

const friends = [
  { name: "John Smith", mutualFriends: 12, avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Anna Davis", mutualFriends: 8, avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Tom Wilson", mutualFriends: 15, avatar: "/placeholder.svg?height=40&width=40" },
]

export default function FacebookClone() {
  const [postContent, setPostContent] = useState("")
  const [likedPosts, setLikedPosts] = useState<number[]>([2])

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Facebook className="w-10 h-10 text-blue-600" />
              </Link>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search Facebook" className="pl-10 w-60 bg-gray-100 border-none" />
              </div>
            </div>

            <nav className="hidden md:flex items-center">
              <Button variant="ghost" size="lg" className="px-8">
                <Home className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="lg" className="px-8">
                <Users className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="lg" className="px-8">
                <PlaySquare className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="lg" className="px-8">
                <Store className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="lg" className="px-8">
                <UserPlus className="w-6 h-6" />
              </Button>
            </nav>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
                <MessageCircle className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100">
                <Bell className="w-5 h-5" />
              </Button>
              <Avatar className="w-10 h-10">
                <AvatarImage src="/placeholder.svg?height=40&width=40" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="font-semibold">John Developer</span>
              </div>

              <nav className="space-y-2">
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                  <Users className="w-8 h-8 text-blue-600" />
                  <span>Friends</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                  <UserPlus className="w-8 h-8 text-green-600" />
                  <span>Groups</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                  <PlaySquare className="w-8 h-8 text-blue-500" />
                  <span>Watch</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                  <Store className="w-8 h-8 text-blue-400" />
                  <span>Marketplace</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-200">
                  <Calendar className="w-8 h-8 text-red-500" />
                  <span>Events</span>
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stories */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4 overflow-x-auto">
                  {stories.map((story) => (
                    <div key={story.id} className="flex-shrink-0 text-center">
                      <div className="relative">
                        <Avatar className="w-16 h-16 border-4 border-blue-500">
                          <AvatarImage src={story.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{story.name[0]}</AvatarFallback>
                        </Avatar>
                        {story.isOwn && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                            <Camera className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <p className="text-xs mt-2 font-medium">{story.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Create Post */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Textarea
                    placeholder="What's on your mind, John?"
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    className="flex-1 border-none resize-none focus-visible:ring-0"
                  />
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex gap-4">
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <Video className="w-5 h-5 text-red-500" />
                      Live video
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <ImageIcon className="w-5 h-5 text-green-500" />
                      Photo/video
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <Smile className="w-5 h-5 text-yellow-500" />
                      Feeling/activity
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
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={post.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{post.author}</div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <span>{post.time}</span>
                          <span>•</span>
                          {post.privacy === "public" ? <Globe className="w-3 h-3" /> : <Lock className="w-3 h-3" />}
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
                          width={600}
                          height={400}
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
                      <MessageSquare className="w-5 h-5" />
                      Comment
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2 text-gray-600">
                      <Share className="w-5 h-5" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              {/* Friend Requests */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Friend requests</h3>
                  <div className="space-y-4">
                    {friends.map((friend, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={friend.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{friend.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-semibold text-sm">{friend.name}</div>
                          <div className="text-xs text-gray-600">{friend.mutualFriends} mutual friends</div>
                          <div className="flex gap-2 mt-2">
                            <Button size="sm" className="text-xs">
                              Confirm
                            </Button>
                            <Button size="sm" variant="outline" className="text-xs bg-transparent">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contacts */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Contacts</h3>
                  <div className="space-y-3">
                    {friends.map((friend, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-lg cursor-pointer"
                      >
                        <div className="relative">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={friend.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{friend.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <span className="text-sm font-medium">{friend.name}</span>
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

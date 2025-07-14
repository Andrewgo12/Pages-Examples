"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Instagram,
  Search,
  Home,
  Compass,
  PlusSquare,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Play,
  Volume2,
  VolumeX,
  Camera,
} from "lucide-react"

const stories = [
  { id: 1, username: "your_story", avatar: "/placeholder.svg?height=56&width=56", isOwn: true, hasNew: false },
  { id: 2, username: "sarah_dev", avatar: "/placeholder.svg?height=56&width=56", isOwn: false, hasNew: true },
  { id: 3, username: "tech_guru", avatar: "/placeholder.svg?height=56&width=56", isOwn: false, hasNew: true },
  { id: 4, username: "design_pro", avatar: "/placeholder.svg?height=56&width=56", isOwn: false, hasNew: false },
  { id: 5, username: "code_master", avatar: "/placeholder.svg?height=56&width=56", isOwn: false, hasNew: true },
]

const posts = [
  {
    id: 1,
    username: "sarah_dev",
    avatar: "/placeholder.svg?height=32&width=32",
    location: "San Francisco, CA",
    image: "/placeholder.svg?height=400&width=400",
    likes: 1234,
    caption: "Beautiful sunset from my office window! 🌅 #coding #sunset #sanfrancisco",
    comments: [
      { username: "john_doe", text: "Amazing view! 😍" },
      { username: "tech_lover", text: "Lucky you! Great shot 📸" },
    ],
    time: "2 hours ago",
    liked: false,
    bookmarked: false,
  },
  {
    id: 2,
    username: "tech_guru",
    avatar: "/placeholder.svg?height=32&width=32",
    location: "New York, NY",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    likes: 2567,
    caption: "New setup is finally complete! Swipe to see the full workspace transformation ➡️ #setup #workspace #tech",
    comments: [
      { username: "workspace_fan", text: "This is incredible! What monitor is that?" },
      { username: "setup_goals", text: "Goals! 🔥" },
    ],
    time: "5 hours ago",
    liked: true,
    bookmarked: false,
  },
  {
    id: 3,
    username: "design_pro",
    avatar: "/placeholder.svg?height=32&width=32",
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=400&width=400",
    isVideo: true,
    likes: 892,
    caption: "Quick design process timelapse! Creating a mobile app interface from scratch ✨ #design #ui #ux",
    comments: [{ username: "ui_designer", text: "Love the color palette!" }],
    time: "1 day ago",
    liked: false,
    bookmarked: true,
  },
]

const suggestions = [
  {
    username: "alex_codes",
    name: "Alex Rodriguez",
    avatar: "/placeholder.svg?height=44&width=44",
    mutualFollowers: "Followed by sarah_dev + 12 others",
  },
  {
    username: "emma_design",
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=44&width=44",
    mutualFollowers: "Followed by tech_guru + 8 others",
  },
  {
    username: "mike_dev",
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=44&width=44",
    mutualFollowers: "Followed by design_pro + 5 others",
  },
]

const friends = [
  {
    username: "alex_codes",
    name: "Alex Rodriguez",
    avatar: "/placeholder.svg?height=44&width=44",
    mutualFriends: "Followed by sarah_dev + 12 others",
  },
  {
    username: "emma_design",
    name: "Emma Wilson",
    avatar: "/placeholder.svg?height=44&width=44",
    mutualFriends: "Followed by tech_guru + 8 others",
  },
  {
    username: "mike_dev",
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=44&width=44",
    mutualFriends: "Followed by design_pro + 5 others",
  },
]

export default function InstagramClone() {
  const [likedPosts, setLikedPosts] = useState<number[]>([2])
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([3])
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const [mutedVideos, setMutedVideos] = useState<number[]>([3])

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const toggleBookmark = (postId: number) => {
    setBookmarkedPosts((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const toggleMute = (postId: number) => {
    setMutedVideos((prev) => (prev.includes(postId) ? prev.filter((id) => id !== postId) : [...prev, postId]))
  }

  const nextImage = (postId: number, maxIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [postId]: ((prev[postId] || 0) + 1) % maxIndex,
    }))
  }

  const prevImage = (postId: number, maxIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [postId]: ((prev[postId] || 0) - 1 + maxIndex) % maxIndex,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Instagram className="w-8 h-8" />
              <span className="ml-2 text-xl font-semibold hidden sm:block">Instagram</span>
            </Link>

            <div className="flex-1 max-w-xs mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search" className="pl-10 bg-gray-50 border-gray-200" />
              </div>
            </div>

            <nav className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Home className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <MessageCircle className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <PlusSquare className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Compass className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="w-6 h-6" />
              </Button>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2">
            {/* Stories */}
            <div className="bg-white border rounded-lg p-4 mb-6">
              <div className="flex gap-4 overflow-x-auto">
                {stories.map((story) => (
                  <div key={story.id} className="flex-shrink-0 text-center cursor-pointer">
                    <div className="relative">
                      <div
                        className={`p-0.5 rounded-full ${
                          story.hasNew ? "bg-gradient-to-tr from-yellow-400 to-pink-600" : "bg-gray-300"
                        }`}
                      >
                        <div className="bg-white p-0.5 rounded-full">
                          <Avatar className="w-14 h-14">
                            <AvatarImage src={story.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{story.username[0].toUpperCase()}</AvatarFallback>
                          </Avatar>
                        </div>
                      </div>
                      {story.isOwn && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                          <Camera className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <p className="text-xs mt-2 max-w-[60px] truncate">{story.username}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="border-0 shadow-none">
                  <CardContent className="p-0">
                    {/* Post Header */}
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={post.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-sm">{post.username}</div>
                          {post.location && <div className="text-xs text-gray-500">{post.location}</div>}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="w-5 h-5" />
                      </Button>
                    </div>

                    {/* Post Image/Video */}
                    <div className="relative aspect-square bg-gray-100">
                      {post.images ? (
                        <>
                          <Image
                            src={post.images[currentImageIndex[post.id] || 0] || "/placeholder.svg"}
                            alt="Post image"
                            fill
                            className="object-cover"
                          />
                          {post.images.length > 1 && (
                            <>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
                                onClick={() => prevImage(post.id, post.images!.length)}
                              >
                                ←
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
                                onClick={() => nextImage(post.id, post.images!.length)}
                              >
                                →
                              </Button>
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1">
                                {post.images.map((_, index) => (
                                  <div
                                    key={index}
                                    className={`w-2 h-2 rounded-full ${
                                      index === (currentImageIndex[post.id] || 0) ? "bg-blue-500" : "bg-white/60"
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </>
                      ) : (
                        <div className="relative">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt="Post image"
                            fill
                            className="object-cover"
                          />
                          {post.isVideo && (
                            <>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Button size="lg" className="rounded-full w-16 h-16 bg-black/50 hover:bg-black/70">
                                  <Play className="w-8 h-8 text-white" />
                                </Button>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                                onClick={() => toggleMute(post.id)}
                              >
                                {mutedVideos.includes(post.id) ? (
                                  <VolumeX className="w-4 h-4" />
                                ) : (
                                  <Volume2 className="w-4 h-4" />
                                )}
                              </Button>
                            </>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Post Actions */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleLike(post.id)}
                            className="p-0 hover:bg-transparent"
                          >
                            <Heart
                              className={`w-6 h-6 ${
                                likedPosts.includes(post.id) ? "fill-red-500 text-red-500" : "text-black"
                              }`}
                            />
                          </Button>
                          <Button variant="ghost" size="icon" className="p-0 hover:bg-transparent">
                            <MessageCircle className="w-6 h-6" />
                          </Button>
                          <Button variant="ghost" size="icon" className="p-0 hover:bg-transparent">
                            <Send className="w-6 h-6" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleBookmark(post.id)}
                          className="p-0 hover:bg-transparent"
                        >
                          <Bookmark
                            className={`w-6 h-6 ${
                              bookmarkedPosts.includes(post.id) ? "fill-black text-black" : "text-black"
                            }`}
                          />
                        </Button>
                      </div>

                      <div className="text-sm font-semibold mb-2">
                        {likedPosts.includes(post.id) ? post.likes + 1 : post.likes} likes
                      </div>

                      <div className="text-sm mb-2">
                        <span className="font-semibold mr-2">{post.username}</span>
                        {post.caption}
                      </div>

                      {post.comments.length > 0 && (
                        <div className="text-sm text-gray-500 mb-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <button className="hover:underline">View all {post.comments.length} comments</button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] p-0">
                              <div className="grid md:grid-cols-2 h-full">
                                <div className="relative aspect-square">
                                  <Image
                                    src={post.image || post.images?.[0] || "/placeholder.svg"}
                                    alt="Post image"
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="p-4 flex flex-col">
                                  <div className="flex items-center gap-3 pb-4 border-b">
                                    <Avatar className="w-8 h-8">
                                      <AvatarImage src={post.avatar || "/placeholder.svg"} />
                                      <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    <span className="font-semibold">{post.username}</span>
                                  </div>
                                  <div className="flex-1 py-4">
                                    <div className="space-y-4">
                                      <div className="flex gap-3">
                                        <Avatar className="w-8 h-8">
                                          <AvatarImage src={post.avatar || "/placeholder.svg"} />
                                          <AvatarFallback>{post.username[0].toUpperCase()}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                          <span className="font-semibold mr-2">{post.username}</span>
                                          <span className="text-sm">{post.caption}</span>
                                        </div>
                                      </div>
                                      {post.comments.map((comment, index) => (
                                        <div key={index} className="flex gap-3">
                                          <Avatar className="w-8 h-8">
                                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                                            <AvatarFallback>{comment.username[0].toUpperCase()}</AvatarFallback>
                                          </Avatar>
                                          <div>
                                            <span className="font-semibold mr-2">{comment.username}</span>
                                            <span className="text-sm">{comment.text}</span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div className="border-t pt-4">
                                    <div className="flex items-center gap-4 mb-3">
                                      <Button variant="ghost" size="icon" className="p-0">
                                        <Heart className="w-6 h-6" />
                                      </Button>
                                      <Button variant="ghost" size="icon" className="p-0">
                                        <MessageCircle className="w-6 h-6" />
                                      </Button>
                                      <Button variant="ghost" size="icon" className="p-0">
                                        <Send className="w-6 h-6" />
                                      </Button>
                                    </div>
                                    <div className="flex gap-2">
                                      <Input placeholder="Add a comment..." className="flex-1" />
                                      <Button>Post</Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      )}

                      <div className="text-xs text-gray-500 uppercase">{post.time}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              {/* User Profile */}
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

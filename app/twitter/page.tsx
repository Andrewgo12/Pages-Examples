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
  Twitter,
  Search,
  Home,
  Bell,
  Mail,
  Bookmark,
  User,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Repeat2,
  Share,
  ImageIcon,
  Smile,
  Calendar,
  MapPin,
  Verified,
  TrendingUp,
} from "lucide-react"

const tweets = [
  {
    id: 1,
    author: "Sarah Chen",
    username: "sarahchen_dev",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "2h",
    verified: true,
    content:
      "Just shipped a new feature using React Server Components! The performance improvements are incredible. The future of web development is here 🚀 #React #WebDev",
    likes: 234,
    retweets: 45,
    replies: 12,
    liked: false,
    retweeted: false,
  },
  {
    id: 2,
    author: "Tech News Daily",
    username: "technewsdaily",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "4h",
    verified: true,
    content:
      "BREAKING: Major tech company announces new AI breakthrough that could revolutionize how we interact with computers. Full story in our latest article.",
    image: "/placeholder.svg?height=300&width=500",
    likes: 1200,
    retweets: 340,
    replies: 89,
    liked: true,
    retweeted: false,
  },
  {
    id: 3,
    author: "John Developer",
    username: "johndev",
    avatar: "/placeholder.svg?height=40&width=40",
    time: "6h",
    verified: false,
    content:
      "Hot take: TypeScript has made JavaScript development so much better. I can't imagine going back to vanilla JS for large projects. What's your experience?",
    likes: 89,
    retweets: 23,
    replies: 45,
    liked: false,
    retweeted: true,
  },
]

const trends = [
  { topic: "#WebDevelopment", posts: "125K posts" },
  { topic: "#AI", posts: "89K posts" },
  { topic: "#JavaScript", posts: "67K posts" },
  { topic: "#React", posts: "45K posts" },
  { topic: "#TypeScript", posts: "34K posts" },
]

const suggestions = [
  { name: "Emma Wilson", username: "emmawilson", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Alex Rodriguez", username: "alexrod", avatar: "/placeholder.svg?height=40&width=40" },
  { name: "Lisa Park", username: "lisapark", avatar: "/placeholder.svg?height=40&width=40" },
]

export default function TwitterClone() {
  const [tweetContent, setTweetContent] = useState("")
  const [likedTweets, setLikedTweets] = useState<number[]>([2])
  const [retweetedTweets, setRetweetedTweets] = useState<number[]>([3])

  const toggleLike = (tweetId: number) => {
    setLikedTweets((prev) => (prev.includes(tweetId) ? prev.filter((id) => id !== tweetId) : [...prev, tweetId]))
  }

  const toggleRetweet = (tweetId: number) => {
    setRetweetedTweets((prev) => (prev.includes(tweetId) ? prev.filter((id) => id !== tweetId) : [...prev, tweetId]))
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-12 min-h-screen">
          {/* Left Sidebar */}
          <div className="col-span-3 border-r border-gray-800 p-4">
            <div className="sticky top-0">
              <Link href="/" className="flex items-center gap-2 mb-8">
                <Twitter className="w-8 h-8 text-blue-400" />
              </Link>

              <nav className="space-y-2 mb-8">
                <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <Home className="w-6 h-6" />
                  <span className="text-xl">Home</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <Search className="w-6 h-6" />
                  <span className="text-xl">Explore</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <Bell className="w-6 h-6" />
                  <span className="text-xl">Notifications</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <Mail className="w-6 h-6" />
                  <span className="text-xl">Messages</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <Bookmark className="w-6 h-6" />
                  <span className="text-xl">Bookmarks</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <User className="w-6 h-6" />
                  <span className="text-xl">Profile</span>
                </Link>
                <Link href="#" className="flex items-center gap-4 p-3 rounded-full hover:bg-gray-900 transition-colors">
                  <MoreHorizontal className="w-6 h-6" />
                  <span className="text-xl">More</span>
                </Link>
              </nav>

              <Button className="w-full bg-blue-500 hover:bg-blue-600 rounded-full py-3 text-lg font-bold">Post</Button>

              <div className="mt-8 flex items-center gap-3 p-3 rounded-full hover:bg-gray-900 cursor-pointer">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold">John Developer</div>
                  <div className="text-gray-500 text-sm">@johndev</div>
                </div>
                <MoreHorizontal className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6 border-r border-gray-800">
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-800 p-4">
              <h1 className="text-xl font-bold">Home</h1>
            </div>

            {/* Compose Tweet */}
            <div className="border-b border-gray-800 p-4">
              <div className="flex gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea
                    placeholder="What's happening?"
                    value={tweetContent}
                    onChange={(e) => setTweetContent(e.target.value)}
                    className="bg-transparent border-none text-xl placeholder:text-gray-500 resize-none focus-visible:ring-0"
                    rows={3}
                  />

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-blue-400/10">
                        <ImageIcon className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-blue-400/10">
                        <Smile className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-blue-400/10">
                        <Calendar className="w-5 h-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-blue-400 hover:bg-blue-400/10">
                        <MapPin className="w-5 h-5" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-3">
                      {tweetContent.length > 0 && (
                        <span className="text-sm text-gray-500">{280 - tweetContent.length}</span>
                      )}
                      <Button
                        className="bg-blue-500 hover:bg-blue-600 rounded-full px-6"
                        disabled={!tweetContent.trim()}
                      >
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tweet Feed */}
            <div>
              {tweets.map((tweet) => (
                <div key={tweet.id} className="border-b border-gray-800 p-4 hover:bg-gray-950/50 transition-colors">
                  <div className="flex gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={tweet.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{tweet.author[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold">{tweet.author}</span>
                        {tweet.verified && <Verified className="w-5 h-5 text-blue-400 fill-current" />}
                        <span className="text-gray-500">@{tweet.username}</span>
                        <span className="text-gray-500">·</span>
                        <span className="text-gray-500">{tweet.time}</span>
                      </div>

                      <div className="mb-3">
                        <p className="text-white leading-relaxed">{tweet.content}</p>
                        {tweet.image && (
                          <div className="mt-3 rounded-2xl overflow-hidden">
                            <Image
                              src={tweet.image || "/placeholder.svg"}
                              alt="Tweet image"
                              width={500}
                              height={300}
                              className="w-full object-cover"
                            />
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between max-w-md">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-500 hover:text-blue-400 hover:bg-blue-400/10"
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          {tweet.replies}
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          className={`hover:bg-green-400/10 ${
                            retweetedTweets.includes(tweet.id) ? "text-green-400" : "text-gray-500 hover:text-green-400"
                          }`}
                          onClick={() => toggleRetweet(tweet.id)}
                        >
                          <Repeat2 className="w-5 h-5 mr-2" />
                          {retweetedTweets.includes(tweet.id) ? tweet.retweets + 1 : tweet.retweets}
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          className={`hover:bg-red-400/10 ${
                            likedTweets.includes(tweet.id) ? "text-red-400" : "text-gray-500 hover:text-red-400"
                          }`}
                          onClick={() => toggleLike(tweet.id)}
                        >
                          <Heart className={`w-5 h-5 mr-2 ${likedTweets.includes(tweet.id) ? "fill-current" : ""}`} />
                          {likedTweets.includes(tweet.id) ? tweet.likes + 1 : tweet.likes}
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-500 hover:text-blue-400 hover:bg-blue-400/10"
                        >
                          <Share className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 p-4">
            <div className="sticky top-0 space-y-6">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <Input placeholder="Search Twitter" className="bg-gray-900 border-gray-800 pl-12 rounded-full" />
              </div>

              {/* Trends */}
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-4">What's happening</h3>
                  <div className="space-y-3">
                    {trends.map((trend, index) => (
                      <div key={index} className="hover:bg-gray-800 p-2 rounded cursor-pointer">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-500">Trending in Technology</span>
                        </div>
                        <div className="font-bold">{trend.topic}</div>
                        <div className="text-sm text-gray-500">{trend.posts}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Who to follow */}
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-4">Who to follow</h3>
                  <div className="space-y-4">
                    {suggestions.map((user, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={user.avatar || "/placeholder.svg"} />
                            <AvatarFallback>{user.name[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-semibold">{user.name}</div>
                            <div className="text-sm text-gray-500">@{user.username}</div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                          Follow
                        </Button>
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

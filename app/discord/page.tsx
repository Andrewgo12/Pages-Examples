"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Hash,
  Plus,
  Settings,
  Mic,
  Headphones,
  Pin,
  Users,
  Search,
  Gift,
  Smile,
  Send,
  Phone,
  Video,
  MoreVertical,
  X,
  ChevronDown,
} from "lucide-react"

const servers = [
  { id: 1, name: "My Server", icon: "/placeholder.svg?height=40&width=40", active: true },
  { id: 2, name: "Gaming Hub", icon: "/placeholder.svg?height=40&width=40", active: false },
  { id: 3, name: "Dev Community", icon: "/placeholder.svg?height=40&width=40", active: false },
]

const channels = [
  { id: 1, name: "general", type: "text", active: true },
  { id: 2, name: "announcements", type: "text", active: false },
  { id: 3, name: "voice-chat", type: "voice", active: false },
  { id: 4, name: "random", type: "text", active: false },
]

const members = [
  { id: 1, name: "John Doe", status: "online", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Sarah Smith", status: "online", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "Mike Johnson", status: "idle", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 4, name: "Emma Davis", status: "offline", avatar: "/placeholder.svg?height=32&width=32" },
]

const messages = [
  {
    id: 1,
    author: "John Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "10:00 AM",
    content: "Hey everyone!",
  },
  {
    id: 2,
    author: "Sarah Smith",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "10:01 AM",
    content: "Hello John!",
  },
  { id: 3, author: "You", avatar: "/placeholder.svg?height=32&width=32", time: "10:05 AM", content: "What's up?" },
  {
    id: 4,
    author: "Mike Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "10:10 AM",
    content: "Just chilling, playing some games.",
  },
]

export default function DiscordClone() {
  const [activeServer, setActiveServer] = useState(servers[0])
  const [activeChannel, setActiveChannel] = useState(channels[0])
  const [newMessage, setNewMessage] = useState("")
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false)
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Simulate sending message
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white flex">
      {/* Server List */}
      <aside className="w-20 bg-gray-900 flex flex-col items-center py-4 space-y-3">
        <Link
          href="/"
          className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold"
        >
          <DiscordIcon className="w-8 h-8" />
        </Link>
        <div className="w-12 h-px bg-gray-700"></div>
        {servers.map((server) => (
          <div
            key={server.id}
            className={`relative w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all ${
              activeServer.id === server.id ? "bg-blue-600 rounded-2xl" : "hover:bg-gray-700"
            }`}
            onClick={() => setActiveServer(server)}
          >
            {server.icon ? (
              <Image
                src={server.icon || "/placeholder.svg"}
                alt={server.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <span className="text-xl font-bold">{server.name[0]}</span>
            )}
            {server.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-white rounded-r-full"></div>
            )}
          </div>
        ))}
        <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600">
          <Plus className="w-6 h-6" />
        </Button>
      </aside>

      {/* Channel List */}
      <aside className="w-60 bg-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h2 className="font-semibold text-lg">{activeServer.name}</h2>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <ChevronDown className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs font-semibold text-gray-400 uppercase">Text Channels</span>
              <Button variant="ghost" size="icon" className="w-6 h-6 text-gray-400 hover:text-white">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {channels
              .filter((c) => c.type === "text")
              .map((channel) => (
                <Link
                  key={channel.id}
                  href="#"
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    activeChannel.id === channel.id ? "bg-gray-700 text-white" : "hover:bg-gray-700 text-gray-400"
                  }`}
                  onClick={() => setActiveChannel(channel)}
                >
                  <Hash className="w-5 h-5" />
                  <span>{channel.name}</span>
                </Link>
              ))}
          </div>

          <div className="space-y-1 mt-4">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs font-semibold text-gray-400 uppercase">Voice Channels</span>
              <Button variant="ghost" size="icon" className="w-6 h-6 text-gray-400 hover:text-white">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {channels
              .filter((c) => c.type === "voice")
              .map((channel) => (
                <Link
                  key={channel.id}
                  href="#"
                  className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                    activeChannel.id === channel.id ? "bg-gray-700 text-white" : "hover:bg-gray-700 text-gray-400"
                  }`}
                  onClick={() => setActiveChannel(channel)}
                >
                  <Phone className="w-5 h-5" />
                  <span>{channel.name}</span>
                </Link>
              ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-sm">John Doe</div>
              <div className="text-xs text-gray-400">#1234</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Mic className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Headphones className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
              onClick={() => setIsSettingsModalOpen(true)}
            >
              <Settings className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-gray-700 p-4 border-b border-gray-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hash className="w-6 h-6 text-gray-400" />
            <h3 className="font-semibold text-lg">{activeChannel.name}</h3>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Phone className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Video className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Pin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Users className="w-5 h-5" />
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search" className="pl-10 bg-gray-900 border-none w-40" />
            </div>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <MoreVertical className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="flex gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={message.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{message.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{message.author}</span>
                    <span className="text-xs text-gray-400">{message.time}</span>
                  </div>
                  <p className="text-gray-200">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-gray-700 p-4 flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Plus className="w-5 h-5" />
          </Button>
          <Input
            placeholder={`Message #${activeChannel.name}`}
            className="flex-1 rounded-lg bg-gray-600 border-none text-white placeholder:text-gray-400"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Gift className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Smile className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={handleSendMessage}>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </main>

      {/* Right Sidebar (Members List) */}
      <aside className="w-60 bg-gray-800 flex flex-col p-4">
        <h3 className="font-semibold text-sm text-gray-400 uppercase mb-4">Members - {members.length}</h3>
        <div className="flex-1 overflow-y-auto space-y-2">
          {members.map((member) => (
            <div key={member.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 cursor-pointer">
              <div className="relative">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{member.name[0]}</AvatarFallback>
                </Avatar>
                <div
                  className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                    member.status === "online"
                      ? "bg-green-500"
                      : member.status === "idle"
                        ? "bg-yellow-500"
                        : "bg-gray-500"
                  }`}
                ></div>
              </div>
              <span className="text-sm">{member.name}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Invite Modal */}
      <Dialog open={isInviteModalOpen} onOpenChange={setIsInviteModalOpen}>
        <DialogContent className="max-w-md p-6">
          <DialogHeader>
            <DialogTitle>Invite Friends</DialogTitle>
            <DialogDescription>Invite new members to your server.</DialogDescription>
          </DialogHeader>
          <Input placeholder="Enter username or email" className="mb-4" />
          <Button className="w-full">Send Invite</Button>
          <div className="mt-4 text-center text-gray-500">
            Or share this link:{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              discord.gg/myserver
            </Link>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsInviteModalOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Settings Modal */}
      <Dialog open={isSettingsModalOpen} onOpenChange={setIsSettingsModalOpen}>
        <DialogContent className="max-w-2xl p-0 flex h-[80vh]">
          <div className="w-48 bg-gray-800 p-4 border-r border-gray-700">
            <h3 className="text-lg font-semibold mb-4">User Settings</h3>
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
                My Account
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
                Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
                Privacy & Safety
              </Button>
              <Button variant="ghost" className="w-full justify-start text-white hover:bg-gray-700">
                Voice & Video
              </Button>
              <Button variant="ghost" className="w-full justify-start text-red-500 hover:bg-gray-700">
                Log Out
              </Button>
            </nav>
          </div>
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">My Account</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsSettingsModalOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Username</h3>
                <div className="flex items-center gap-2">
                  <Input value="John Doe" readOnly className="flex-1 bg-gray-700 border-none text-white" />
                  <Button>Edit</Button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <div className="flex items-center gap-2">
                  <Input value="john.doe@example.com" readOnly className="flex-1 bg-gray-700 border-none text-white" />
                  <Button>Edit</Button>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Password</h3>
                <Button>Change Password</Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function DiscordIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10.5 12.5c.5-1.5 1.5-2.5 2.5-2.5s2 1 2.5 2.5c-.5 1.5-1.5 2.5-2.5 2.5s-2-1-2.5-2.5z" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <path d="M12 14.5c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5z" />
      <path d="M12 17.5c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" />
      <path d="M12 20.5c-3.5 0-6.5-2.5-6.5-6.5s3-6.5 6.5-6.5 6.5 2 6.5 6.5-3 6.5-6.5 6.5z" />
      <path d="M12 23.5c-4.5 0-8.5-3-8.5-8.5s4-8.5 8.5-8.5 8.5 3 8.5 8.5-4 8.5-8.5 8.5z" />
    </svg>
  )
}

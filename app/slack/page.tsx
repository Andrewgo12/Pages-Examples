"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
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
  AtSign,
  Smile,
  Paperclip,
  Send,
  Phone,
  Video,
  MoreVertical,
  Edit,
  LogOut,
  ChevronDown,
} from "lucide-react"

const workspaces = [
  { id: 1, name: "My Workspace", icon: "/placeholder.svg?height=40&width=40", active: true },
  { id: 2, name: "Dev Team", icon: "/placeholder.svg?height=40&width=40", active: false },
  { id: 3, name: "Marketing", icon: "/placeholder.svg?height=40&width=40", active: false },
]

const channels = [
  { id: 1, name: "general", type: "channel", active: true, unread: 3 },
  { id: 2, name: "announcements", type: "channel", active: false, unread: 0 },
  { id: 3, name: "random", type: "channel", active: false, unread: 0 },
  { id: 4, name: "project-x", type: "channel", active: false, unread: 0 },
]

const directMessages = [
  { id: 5, name: "John Doe", avatar: "/placeholder.svg?height=32&width=32", active: false, unread: 1 },
  { id: 6, name: "Sarah Smith", avatar: "/placeholder.svg?height=32&width=32", active: false, unread: 0 },
  { id: 7, name: "Mike Johnson", avatar: "/placeholder.svg?height=32&width=32", active: false, unread: 0 },
]

const members = [
  { id: 1, name: "John Doe", status: "active", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 2, name: "Sarah Smith", status: "active", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 3, name: "Mike Johnson", status: "away", avatar: "/placeholder.svg?height=32&width=32" },
  { id: 4, name: "Emma Davis", status: "offline", avatar: "/placeholder.svg?height=32&width=32" },
]

const messages = [
  {
    id: 1,
    author: "John Doe",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "10:00 AM",
    content: "Hey everyone, good morning!",
  },
  {
    id: 2,
    author: "Sarah Smith",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "10:01 AM",
    content: "Good morning John!",
  },
  {
    id: 3,
    author: "You",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "10:05 AM",
    content: "What's on the agenda for today?",
  },
  {
    id: 4,
    author: "Mike Johnson",
    avatar: "/placeholder.svg?height=32&width=32",
    time: "10:10 AM",
    content: "Project X review meeting at 2 PM.",
  },
]

export default function SlackClone() {
  const [activeWorkspace, setActiveWorkspace] = useState(workspaces[0])
  const [activeConversation, setActiveConversation] = useState(channels[0])
  const [newMessage, setNewMessage] = useState("")
  const [isAddChannelModalOpen, setIsAddChannelModalOpen] = useState(false)
  const [isInvitePeopleModalOpen, setIsInvitePeopleModalOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Simulate sending message
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Workspace Sidebar */}
      <aside className="w-20 bg-gray-950 flex flex-col items-center py-4 space-y-3">
        {workspaces.map((workspace) => (
          <div
            key={workspace.id}
            className={`relative w-12 h-12 rounded-lg flex items-center justify-center cursor-pointer transition-all ${
              activeWorkspace.id === workspace.id ? "bg-blue-600" : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveWorkspace(workspace)}
          >
            {workspace.icon ? (
              <Image
                src={workspace.icon || "/placeholder.svg"}
                alt={workspace.name}
                width={40}
                height={40}
                className="rounded-lg"
              />
            ) : (
              <span className="text-xl font-bold">{workspace.name[0]}</span>
            )}
          </div>
        ))}
        <Button variant="ghost" size="icon" className="w-12 h-12 rounded-lg bg-gray-800 hover:bg-gray-700">
          <Plus className="w-6 h-6" />
        </Button>
      </aside>

      {/* Channel/DM Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <h2 className="font-semibold text-lg">{activeWorkspace.name}</h2>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <ChevronDown className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1 mb-4">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs font-semibold text-gray-400 uppercase">Channels</span>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 text-gray-400 hover:text-white"
                onClick={() => setIsAddChannelModalOpen(true)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {channels.map((channel) => (
              <Link
                key={channel.id}
                href="#"
                className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                  activeConversation.id === channel.id ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-400"
                }`}
                onClick={() => setActiveConversation(channel)}
              >
                <Hash className="w-5 h-5" />
                <span>{channel.name}</span>
                {channel.unread > 0 && <Badge className="ml-auto bg-red-500 text-white">{channel.unread}</Badge>}
              </Link>
            ))}
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between px-2 py-1">
              <span className="text-xs font-semibold text-gray-400 uppercase">Direct Messages</span>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6 text-gray-400 hover:text-white"
                onClick={() => setIsInvitePeopleModalOpen(true)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {directMessages.map((dm) => (
              <Link
                key={dm.id}
                href="#"
                className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                  activeConversation.id === dm.id ? "bg-blue-600 text-white" : "hover:bg-gray-700 text-gray-400"
                }`}
                onClick={() => setActiveConversation(dm)}
              >
                <Avatar className="w-6 h-6">
                  <AvatarImage src={dm.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{dm.name[0]}</AvatarFallback>
                </Avatar>
                <span>{dm.name}</span>
                {dm.unread > 0 && <Badge className="ml-auto bg-red-500 text-white">{dm.unread}</Badge>}
              </Link>
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setIsProfileModalOpen(true)}>
            <Avatar className="w-8 h-8">
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold text-sm">John Doe</div>
              <div className="text-xs text-gray-400">Active</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Mic className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Headphones className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
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
            {activeConversation.type === "channel" ? (
              <Hash className="w-6 h-6 text-gray-400" />
            ) : (
              <Avatar className="w-6 h-6">
                <AvatarImage src={activeConversation.avatar || "/placeholder.svg"} />
                <AvatarFallback>{activeConversation.name[0]}</AvatarFallback>
              </Avatar>
            )}
            <h3 className="font-semibold text-lg">{activeConversation.name}</h3>
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
            <Paperclip className="w-5 h-5" />
          </Button>
          <Input
            placeholder={`Message #${activeConversation.name}`}
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
            <AtSign className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Smile className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white" onClick={handleSendMessage}>
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </main>

      {/* Add Channel Modal */}
      <Dialog open={isAddChannelModalOpen} onOpenChange={setIsAddChannelModalOpen}>
        <DialogContent className="max-w-md p-6">
          <DialogHeader>
            <DialogTitle>Create a new channel</DialogTitle>
            <DialogDescription>
              Channels are where your team communicates. They're best when organized around a topic — #marketing, for
              example.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label htmlFor="channel-name" className="block text-sm font-medium mb-2">
                Channel name
              </label>
              <Input id="channel-name" placeholder="e.g. plan-budget" />
            </div>
            <div>
              <label htmlFor="channel-description" className="block text-sm font-medium mb-2">
                Description (optional)
              </label>
              <Input id="channel-description" placeholder="What is this channel about?" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddChannelModalOpen(false)}>
              Cancel
            </Button>
            <Button>Create Channel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Invite People Modal */}
      <Dialog open={isInvitePeopleModalOpen} onOpenChange={setIsInvitePeopleModalOpen}>
        <DialogContent className="max-w-md p-6">
          <DialogHeader>
            <DialogTitle>Invite people to {activeWorkspace.name}</DialogTitle>
            <DialogDescription>Enter email addresses or names to invite them.</DialogDescription>
          </DialogHeader>
          <Input placeholder="name@example.com or @name" className="mb-4" />
          <Button className="w-full">Send Invites</Button>
          <div className="mt-4 text-center text-gray-500">
            Or share this link:{" "}
            <Link href="#" className="text-blue-500 hover:underline">
              slack.com/join/myspace
            </Link>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsInvitePeopleModalOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Profile Modal */}
      <Dialog open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen}>
        <DialogContent className="max-w-sm p-6">
          <DialogHeader>
            <DialogTitle>Profile</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center text-center py-4">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/placeholder.svg?height=96&width=96" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-600 mb-4">Active</p>
            <div className="space-y-2 w-full">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Edit className="w-5 h-5" />
                Edit Profile
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Settings className="w-5 h-5" />
                Preferences
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-red-600">
                <LogOut className="w-5 h-5" />
                Sign out of {activeWorkspace.name}
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsProfileModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

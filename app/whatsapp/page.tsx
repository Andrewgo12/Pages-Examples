"use client"

import { useState } from "react"
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
  MessageCircle,
  Search,
  Menu,
  Camera,
  Paperclip,
  Smile,
  Send,
  Phone,
  Video,
  MoreVertical,
  Archive,
  Trash2,
  VolumeX,
  Star,
  Pin,
} from "lucide-react"

const chats = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Hey, how are you?",
    time: "10:30 AM",
    unread: 2,
    isMuted: false,
    isPinned: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "See you tomorrow!",
    time: "Yesterday",
    unread: 0,
    isMuted: true,
    isPinned: false,
  },
  {
    id: 3,
    name: "Family Group",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Happy birthday, Grandma!",
    time: "Sunday",
    unread: 5,
    isMuted: false,
    isPinned: false,
  },
  {
    id: 4,
    name: "Work Team",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Meeting at 2 PM.",
    time: "Last Week",
    unread: 0,
    isMuted: false,
    isPinned: false,
  },
]

const messages = [
  { id: 1, sender: "John Doe", content: "Hey, how are you?", time: "10:30 AM", type: "received" },
  { id: 2, sender: "You", content: "I'm good, thanks! How about you?", time: "10:31 AM", type: "sent" },
  { id: 3, sender: "John Doe", content: "Doing great! Just finished a project.", time: "10:35 AM", type: "received" },
  { id: 4, sender: "You", content: "That's awesome! What was it about?", time: "10:36 AM", type: "sent" },
]

export default function WhatsAppClone() {
  const [activeChat, setActiveChat] = useState(chats[0])
  const [newMessage, setNewMessage] = useState("")
  const [isNewChatModalOpen, setIsNewChatModalOpen] = useState(false)
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [isChatInfoModalOpen, setIsChatInfoModalOpen] = useState(false)

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Simulate sending message
      console.log("Sending message:", newMessage)
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Left Sidebar (Chats List) */}
      <aside className="w-80 bg-white border-r flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <Avatar className="w-10 h-10 cursor-pointer" onClick={() => setIsProfileModalOpen(true)}>
            <AvatarImage src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Camera className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsNewChatModalOpen(true)}>
              <MessageCircle className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input placeholder="Search or start new chat" className="pl-10 bg-gray-50 border-none" />
          </div>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              className={`flex items-center gap-3 p-4 border-b cursor-pointer hover:bg-gray-50 ${
                activeChat.id === chat.id ? "bg-gray-100" : ""
              }`}
              onClick={() => setActiveChat(chat)}
            >
              <div className="relative">
                <Avatar className="w-12 h-12">
                  <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                {chat.isPinned && <Pin className="absolute top-0 right-0 w-4 h-4 text-gray-500 rotate-45" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <p className="truncate max-w-[180px]">{chat.lastMessage}</p>
                  {chat.unread > 0 && (
                    <span className="bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unread}
                    </span>
                  )}
                  {chat.isMuted && <VolumeX className="w-4 h-4 text-gray-400 ml-2" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Right Section (Chat Window) */}
      <main className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="bg-white p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setIsChatInfoModalOpen(true)}>
            <Avatar className="w-10 h-10">
              <AvatarImage src={activeChat.avatar || "/placeholder.svg"} />
              <AvatarFallback>{activeChat.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">{activeChat.name}</h3>
              <p className="text-sm text-gray-600">online</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Video className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Phone className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon">
              <MoreVertical className="w-5 h-5 text-gray-600" />
            </Button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto bg-[url('/whatsapp-bg.png')] bg-cover bg-center">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "sent" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] p-3 rounded-lg shadow-sm ${
                    message.type === "sent" ? "bg-green-200" : "bg-white"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <span className="text-xs text-gray-500 block text-right mt-1">{message.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white p-4 border-t flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Smile className="w-5 h-5 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon">
            <Paperclip className="w-5 h-5 text-gray-600" />
          </Button>
          <Input
            placeholder="Type a message"
            className="flex-1 rounded-full bg-gray-50 border-none"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
          />
          <Button
            variant="ghost"
            size="icon"
            className="bg-green-500 text-white rounded-full hover:bg-green-600"
            onClick={handleSendMessage}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </main>

      {/* New Chat Modal */}
      <Dialog open={isNewChatModalOpen} onOpenChange={setIsNewChatModalOpen}>
        <DialogContent className="max-w-md p-6">
          <DialogHeader>
            <DialogTitle>New Chat</DialogTitle>
            <DialogDescription>Select a contact to start a new conversation.</DialogDescription>
          </DialogHeader>
          <Input placeholder="Search contacts" className="mb-4" />
          <div className="space-y-3 max-h-60 overflow-y-auto">
            {chats.map((chat) => (
              <div key={chat.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={chat.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{chat.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{chat.name}</span>
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsNewChatModalOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Profile Modal */}
      <Dialog open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen}>
        <DialogContent className="max-w-sm p-6">
          <DialogHeader>
            <DialogTitle>My Profile</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center text-center py-4">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src="/placeholder.svg?height=96&width=96" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">John Developer</h3>
            <p className="text-gray-600 mb-4">Status: Available</p>
            <Button variant="outline">Edit Profile</Button>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsProfileModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Chat Info Modal */}
      <Dialog open={isChatInfoModalOpen} onOpenChange={setIsChatInfoModalOpen}>
        <DialogContent className="max-w-sm p-6">
          <DialogHeader>
            <DialogTitle>Chat Info</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center text-center py-4">
            <Avatar className="w-24 h-24 mb-4">
              <AvatarImage src={activeChat.avatar || "/placeholder.svg"} />
              <AvatarFallback>{activeChat.name[0]}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-bold">{activeChat.name}</h3>
            <p className="text-gray-600 mb-4">Last seen {activeChat.time}</p>
            <div className="flex gap-4 mb-6">
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Phone className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Video className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full bg-transparent">
                <Search className="w-5 h-5" />
              </Button>
            </div>
            <div className="space-y-3 w-full">
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Star className="w-5 h-5 text-yellow-500" />
                Starred messages
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <VolumeX className="w-5 h-5 text-gray-600" />
                Mute notifications
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3">
                <Archive className="w-5 h-5 text-gray-600" />
                Archive chat
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 text-red-600">
                <Trash2 className="w-5 h-5" />
                Delete chat
              </Button>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsChatInfoModalOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

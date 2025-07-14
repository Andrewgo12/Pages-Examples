"use client"
import { Copy } from "lucide-react" // Import Copy icon

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Droplets,
  Search,
  Bell,
  Plus,
  Folder,
  File,
  ImageIcon,
  FileText,
  Download,
  Share,
  MoreHorizontal,
  Grid3X3,
  List,
  Upload,
  Trash2,
  Clock,
  Star,
  Users,
  Cloud,
  Play,
} from "lucide-react"

const files = [
  {
    id: 1,
    name: "Project Alpha.zip",
    type: "archive",
    size: "1.2 GB",
    modified: "2 hours ago",
    shared: true,
    starred: false,
  },
  {
    id: 2,
    name: "Photos 2024",
    type: "folder",
    items: 150,
    modified: "1 day ago",
    shared: false,
    starred: true,
  },
  {
    id: 3,
    name: "Meeting Minutes.pdf",
    type: "document",
    size: "345 KB",
    modified: "3 days ago",
    shared: true,
    starred: false,
  },
  {
    id: 4,
    name: "Vacation Video.mp4",
    type: "video",
    size: "5.8 GB",
    modified: "1 week ago",
    shared: false,
    starred: false,
  },
  {
    id: 5,
    name: "Budget.xlsx",
    type: "spreadsheet",
    size: "78 KB",
    modified: "2 weeks ago",
    shared: true,
    starred: true,
  },
]

const recentFiles = [
  { name: "Presentation.pptx", modified: "1 hour ago" },
  { name: "Family Album.zip", modified: "3 hours ago" },
  { name: "Invoice.pdf", modified: "Yesterday" },
]

export default function MegaClone() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [selectedFiles, setSelectedFiles] = useState<number[]>([])
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [isShareModalOpen, setIsShareModalOpen] = useState(false)
  const [fileToShare, setFileToShare] = useState<(typeof files)[0] | null>(null)

  const getFileIcon = (type: string) => {
    switch (type) {
      case "folder":
        return <Folder className="w-8 h-8 text-blue-500" />
      case "image":
        return <ImageIcon className="w-8 h-8 text-green-500" />
      case "document":
      case "presentation":
      case "spreadsheet":
        return <FileText className="w-8 h-8 text-red-500" />
      case "video":
        return <Play className="w-8 h-8 text-purple-500" />
      case "archive":
        return <File className="w-8 h-8 text-orange-500" />
      default:
        return <File className="w-8 h-8 text-gray-500" />
    }
  }

  const toggleFileSelection = (fileId: number) => {
    setSelectedFiles((prev) => (prev.includes(fileId) ? prev.filter((id) => id !== fileId) : [...prev, fileId]))
  }

  const handleShareClick = (file: (typeof files)[0]) => {
    setFileToShare(file)
    setIsShareModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Droplets className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-semibold">MEGA</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6 ml-8">
                <Link href="#" className="text-gray-700 hover:text-blue-600">
                  Cloud Drive
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600">
                  Shared
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600">
                  Recents
                </Link>
                <Link href="#" className="text-gray-700 hover:text-blue-600">
                  Starred
                </Link>
              </nav>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input placeholder="Search MEGA" className="pl-10" />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button onClick={() => setIsUploadModalOpen(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Upload
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
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6">
              <Button className="w-full mb-4" onClick={() => setIsUploadModalOpen(true)}>
                <Upload className="w-4 h-4 mr-2" />
                Upload files
              </Button>
              <Button variant="outline" className="w-full mb-4 bg-transparent">
                <Folder className="w-4 h-4 mr-2" />
                New folder
              </Button>

              <nav className="space-y-2">
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Cloud className="w-5 h-5 text-blue-500" />
                  <span>Cloud Drive</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span>Recents</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span>Starred</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Users className="w-5 h-5 text-green-500" />
                  <span>Shared with me</span>
                </Link>
                <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100">
                  <Trash2 className="w-5 h-5 text-red-500" />
                  <span>Rubbish bin</span>
                </Link>
              </nav>
            </div>

            {/* Storage Usage */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold mb-3">Storage</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Used</span>
                  <span>2.1 GB of 50 GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "4.2%" }}></div>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                  Upgrade storage
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm">
              {/* Toolbar */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-semibold">Cloud Drive</h2>
                  {selectedFiles.length > 0 && <Badge variant="secondary">{selectedFiles.length} selected</Badge>}
                </div>

                <div className="flex items-center gap-2">
                  {selectedFiles.length > 0 && (
                    <>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleShareClick(files[selectedFiles[0] - 1])}>
                        <Share className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete
                      </Button>
                    </>
                  )}
                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="w-4 h-4" />
                    </Button>
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid3X3 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* File List */}
              <div className="p-4">
                {viewMode === "list" ? (
                  <div className="space-y-2">
                    {files.map((file) => (
                      <div
                        key={file.id}
                        className={`flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer ${
                          selectedFiles.includes(file.id) ? "bg-blue-50 border border-blue-200" : ""
                        }`}
                        onClick={() => toggleFileSelection(file.id)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedFiles.includes(file.id)}
                          onChange={() => toggleFileSelection(file.id)}
                          className="rounded"
                        />

                        <div className="flex items-center gap-3 flex-1">
                          {getFileIcon(file.type)}
                          <div>
                            <div className="font-medium">{file.name}</div>
                            <div className="text-sm text-gray-500">
                              {file.type === "folder" ? `${file.items} items` : file.size} • {file.modified}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {file.starred && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                          {file.shared && <Users className="w-4 h-4 text-green-500" />}

                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleShareClick(file)}>
                                <Share className="w-4 h-4 mr-2" />
                                Share
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Star className="w-4 h-4 mr-2" />
                                {file.starred ? "Unstar" : "Star"}
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">
                                <Trash2 className="w-4 h-4 mr-2" />
                                Delete
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {files.map((file) => (
                      <div
                        key={file.id}
                        className={`p-4 rounded-lg border hover:shadow-md cursor-pointer transition-all ${
                          selectedFiles.includes(file.id) ? "border-blue-500 bg-blue-50" : "border-gray-200"
                        }`}
                        onClick={() => toggleFileSelection(file.id)}
                      >
                        <div className="flex flex-col items-center text-center">
                          {getFileIcon(file.type)}
                          <div className="mt-3 w-full">
                            <div className="font-medium text-sm truncate">{file.name}</div>
                            <div className="text-xs text-gray-500 mt-1">
                              {file.type === "folder" ? `${file.items} items` : file.size}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Recent Files */}
            <div className="bg-white rounded-lg shadow-sm mt-6 p-4">
              <h3 className="font-semibold mb-4">Recent</h3>
              <div className="space-y-3">
                {recentFiles.map((file, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50">
                    <FileText className="w-6 h-6 text-gray-500" />
                    <div className="flex-1">
                      <div className="font-medium text-sm">{file.name}</div>
                      <div className="text-xs text-gray-500">{file.modified}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
        <DialogContent className="max-w-md p-6">
          <DialogHeader>
            <DialogTitle>Upload Files</DialogTitle>
            <DialogDescription>Drag and drop files here, or click to browse.</DialogDescription>
          </DialogHeader>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 mb-4">Drag and drop files here</p>
            <Button variant="outline">Browse files</Button>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsUploadModalOpen(false)}>
              Cancel
            </Button>
            <Button>Upload</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Share Modal */}
      <Dialog open={isShareModalOpen} onOpenChange={setIsShareModalOpen}>
        <DialogContent className="max-w-md p-6">
          <DialogHeader>
            <DialogTitle>Share "{fileToShare?.name}"</DialogTitle>
            <DialogDescription>Share this file with others.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label htmlFor="share-link" className="block text-sm font-medium mb-2">
                Shareable link
              </label>
              <div className="flex">
                <Input
                  id="share-link"
                  value={`https://mega.nz/file/${fileToShare?.id}`}
                  readOnly
                  className="flex-1 rounded-r-none"
                />
                <Button variant="outline" className="rounded-l-none bg-transparent">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <label htmlFor="email-share" className="block text-sm font-medium mb-2">
                Share with email
              </label>
              <Input id="email-share" placeholder="Enter email addresses" />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsShareModalOpen(false)}>
              Cancel
            </Button>
            <Button>Share</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

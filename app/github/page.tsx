"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Bell, Plus, Star, GitFork, Shield, Book, Calendar, MapPin, LinkIcon, Building } from "lucide-react"

const repositories = [
  {
    name: "awesome-nextjs",
    description: "A curated list of awesome Next.js resources, tools, and examples",
    language: "TypeScript",
    stars: 1234,
    forks: 89,
    updated: "2 hours ago",
    isPrivate: false,
  },
  {
    name: "react-components",
    description: "Reusable React components library with TypeScript support",
    language: "JavaScript",
    stars: 567,
    forks: 45,
    updated: "1 day ago",
    isPrivate: false,
  },
  {
    name: "api-server",
    description: "RESTful API server built with Node.js and Express",
    language: "JavaScript",
    stars: 234,
    forks: 23,
    updated: "3 days ago",
    isPrivate: true,
  },
]

const activities = [
  {
    type: "push",
    repo: "user/awesome-nextjs",
    branch: "main",
    time: "2 hours ago",
  },
  {
    type: "star",
    repo: "vercel/next.js",
    time: "5 hours ago",
  },
  {
    type: "fork",
    repo: "facebook/react",
    time: "1 day ago",
  },
]

export default function GitHubClone() {
  const [activeTab, setActiveTab] = useState("repositories")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <Github className="w-8 h-8" />
                <span className="text-xl font-semibold">GitHub</span>
              </Link>

              <div className="hidden md:flex items-center gap-4 ml-8">
                <Input
                  placeholder="Search or jump to..."
                  className="w-80 bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
                />
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-4">
              <Link href="#" className="hover:text-gray-300">
                Pull requests
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Issues
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Marketplace
              </Link>
              <Link href="#" className="hover:text-gray-300">
                Explore
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
                <Plus className="w-5 h-5" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-center mb-6">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl font-bold">John Developer</h1>
                <p className="text-gray-600">@johndeveloper</p>
                <Button className="w-full mt-4">Follow</Button>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-gray-500" />
                  <span>@TechCorp</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-4 h-4 text-gray-500" />
                  <Link href="#" className="text-blue-600 hover:underline">
                    johndeveloper.dev
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span>Joined March 2020</span>
                </div>
              </div>

              <div className="flex gap-4 mt-6 text-sm">
                <div>
                  <span className="font-semibold">1.2k</span>
                  <span className="text-gray-600 ml-1">followers</span>
                </div>
                <div>
                  <span className="font-semibold">234</span>
                  <span className="text-gray-600 ml-1">following</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="repositories">Repositories</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="packages">Packages</TabsTrigger>
                <TabsTrigger value="stars">Stars</TabsTrigger>
              </TabsList>

              <TabsContent value="repositories" className="mt-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <Input placeholder="Find a repository..." className="w-80" />
                    <Button variant="outline">Type</Button>
                    <Button variant="outline">Language</Button>
                    <Button variant="outline">Sort</Button>
                  </div>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    New
                  </Button>
                </div>

                <div className="space-y-4">
                  {repositories.map((repo, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Link href="#" className="text-xl font-semibold text-blue-600 hover:underline">
                                {repo.name}
                              </Link>
                              {repo.isPrivate && (
                                <Badge variant="outline" className="text-xs">
                                  Private
                                </Badge>
                              )}
                            </div>
                            <p className="text-gray-600 mb-4">{repo.description}</p>

                            <div className="flex items-center gap-6 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                <span>{repo.language}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4" />
                                <span>{repo.stars}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <GitFork className="w-4 h-4" />
                                <span>{repo.forks}</span>
                              </div>
                              <span>Updated {repo.updated}</span>
                            </div>
                          </div>

                          <Button variant="outline" size="sm">
                            <Star className="w-4 h-4 mr-1" />
                            Star
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="projects" className="mt-6">
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Book className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
                  <p className="text-gray-600 mb-4">Create your first project to organize your work</p>
                  <Button>Create a project</Button>
                </div>
              </TabsContent>

              <TabsContent value="packages" className="mt-6">
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">No packages published</h3>
                  <p className="text-gray-600">Packages you publish will appear here</p>
                </div>
              </TabsContent>

              <TabsContent value="stars" className="mt-6">
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div>
                          <Link href="#" className="text-xl font-semibold text-blue-600 hover:underline">
                            vercel/next.js
                          </Link>
                          <p className="text-gray-600 mt-2">The React Framework for Production</p>
                          <div className="flex items-center gap-6 text-sm text-gray-600 mt-4">
                            <div className="flex items-center gap-1">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <span>JavaScript</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4" />
                              <span>118k</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GitFork className="w-4 h-4" />
                              <span>25.2k</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                          Starred
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

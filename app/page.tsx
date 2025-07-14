import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Youtube,
  Github,
  Droplets,
  Facebook,
  Code2,
  Twitter,
  Instagram,
  Linkedin,
  Music,
  ShoppingCart,
  MessageCircle,
  Car,
  FileText,
  Cloud,
  Zap,
  MessageSquare,
  PlaySquare,
  Hash,
  Home,
  Navigation,
} from "lucide-react"

const websites = [
  {
    name: "YouTube Clone",
    description: "Video sharing platform with player, comments, and recommendations",
    icon: Youtube,
    path: "/youtube",
    color: "bg-red-500",
    status: "Complete",
  },
  {
    name: "GitHub Clone",
    description: "Code repository platform with repos, issues, and pull requests",
    icon: Github,
    path: "/github",
    color: "bg-gray-900",
    status: "Complete",
  },
  {
    name: "Dropbox Clone",
    description: "Cloud storage with file management and sharing capabilities",
    icon: Cloud,
    path: "/dropbox",
    color: "bg-blue-500",
    status: "Complete",
  },
  {
    name: "Facebook Clone",
    description: "Social media platform with posts, comments, and messaging",
    icon: Facebook,
    path: "/facebook",
    color: "bg-blue-600",
    status: "Complete",
  },
  {
    name: "v0 Clone",
    description: "AI-powered code generation interface with chat and preview",
    icon: Code2,
    path: "/v0",
    color: "bg-black",
    status: "Complete",
  },
  {
    name: "Twitter Clone",
    description: "Microblogging platform with tweets, retweets, and trending",
    icon: Twitter,
    path: "/twitter",
    color: "bg-sky-500",
    status: "Complete",
  },
  {
    name: "Instagram Clone",
    description: "Photo sharing with stories, reels, and direct messaging",
    icon: Instagram,
    path: "/instagram",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    status: "Complete",
  },
  {
    name: "LinkedIn Clone",
    description: "Professional networking with connections and job postings",
    icon: Linkedin,
    path: "/linkedin",
    color: "bg-blue-700",
    status: "Complete",
  },
  {
    name: "Spotify Clone",
    description: "Music streaming with playlists, search, and player controls",
    icon: Music,
    path: "/spotify",
    color: "bg-green-500",
    status: "Complete",
  },
  {
    name: "Amazon Clone",
    description: "E-commerce platform with products, cart, and checkout",
    icon: ShoppingCart,
    path: "/amazon",
    color: "bg-orange-500",
    status: "Complete",
  },
  {
    name: "WhatsApp Clone",
    description: "Messaging app with chats, groups, and media sharing",
    icon: MessageCircle,
    path: "/whatsapp",
    color: "bg-green-600",
    status: "Complete",
  },
  {
    name: "InDriver Clone",
    description: "Ride-hailing app with route planning and driver matching",
    icon: Car,
    path: "/indriver",
    color: "bg-yellow-500",
    status: "Complete",
  },
  {
    name: "Notion Clone",
    description: "All-in-one workspace with notes, databases, and collaboration",
    icon: FileText,
    path: "/notion",
    color: "bg-gray-800",
    status: "Complete",
  },
  {
    name: "Mega Clone",
    description: "Secure cloud storage with encryption and file sharing",
    icon: Droplets,
    path: "/mega",
    color: "bg-red-600",
    status: "Complete",
  },
  {
    name: "Vercel Clone",
    description: "Deployment platform with analytics and project management",
    icon: Zap,
    path: "/vercel",
    color: "bg-black",
    status: "Complete",
  },
  {
    name: "Discord Clone",
    description: "Gaming communication with voice, text, and server management",
    icon: MessageSquare,
    path: "/discord",
    color: "bg-indigo-600",
    status: "Complete",
  },
  {
    name: "Netflix Clone",
    description: "Video streaming with personalized recommendations and profiles",
    icon: PlaySquare,
    path: "/netflix",
    color: "bg-red-600",
    status: "Complete",
  },
  {
    name: "Slack Clone",
    description: "Team collaboration with channels, threads, and integrations",
    icon: Hash,
    path: "/slack",
    color: "bg-purple-600",
    status: "Complete",
  },
  {
    name: "Airbnb Clone",
    description: "Travel booking with property listings and reservations",
    icon: Home,
    path: "/airbnb",
    color: "bg-rose-500",
    status: "Complete",
  },
  {
    name: "Uber Clone",
    description: "Ride-sharing with real-time tracking and payment integration",
    icon: Navigation,
    path: "/uber",
    color: "bg-black",
    status: "Complete",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Website Clones Collection
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive collection of high-fidelity website clones featuring authentic user interfaces, interactive
            elements, and modular architecture. Each clone replicates the core functionalities and design elements of
            popular platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {websites.map((website) => {
            const IconComponent = website.icon
            return (
              <Card
                key={website.name}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${website.color} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="secondary" className="ml-auto">
                      {website.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{website.name}</CardTitle>
                  <CardDescription>{website.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={website.path}>View Clone</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Project Architecture</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• High-fidelity UI replication</li>
                <li>• Interactive components and modals</li>
                <li>• Responsive design across all clones</li>
                <li>• Modular and scalable architecture</li>
                <li>• Shared component library</li>
                <li>• Consistent styling with Tailwind CSS</li>
                <li>• TypeScript for type safety</li>
                <li>• Next.js App Router for routing</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Technical Stack</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Next.js 14 with App Router</li>
                <li>• React 18 with Server Components</li>
                <li>• TypeScript for type safety</li>
                <li>• Tailwind CSS for styling</li>
                <li>• shadcn/ui component library</li>
                <li>• Lucide React for icons</li>
                <li>• Responsive design patterns</li>
                <li>• Modern CSS Grid and Flexbox</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

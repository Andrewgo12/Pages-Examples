"use client"

import { Badge } from "@/components/ui/badge"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Play,
  Info,
  Search,
  Bell,
  Gift,
  ChevronDown,
  ThumbsUp,
  ThumbsDown,
  Plus,
  Volume2,
  VolumeX,
  X,
} from "lucide-react"

const movies = [
  {
    id: 1,
    title: "The Witcher",
    genre: "Fantasy, Action",
    description:
      "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    image: "/placeholder.svg?height=300&width=500",
    logo: "/placeholder.svg?height=100&width=200",
    year: 2019,
    maturity: "16+",
    duration: "3 Seasons",
    trailer: "https://www.youtube.com/embed/szS80CjC_1M?autoplay=1&mute=1",
  },
  {
    id: 2,
    title: "Stranger Things",
    genre: "Sci-Fi, Horror",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    image: "/placeholder.svg?height=300&width=500",
    logo: "/placeholder.svg?height=100&width=200",
    year: 2016,
    maturity: "13+",
    duration: "4 Seasons",
    trailer: "https://www.youtube.com/embed/b9EkMc7qLz4?autoplay=1&mute=1",
  },
  {
    id: 3,
    title: "The Crown",
    genre: "Drama, History",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    image: "/placeholder.svg?height=300&width=500",
    logo: "/placeholder.svg?height=100&width=200",
    year: 2016,
    maturity: "13+",
    duration: "5 Seasons",
    trailer: "https://www.youtube.com/embed/JWtnJln6WWM?autoplay=1&mute=1",
  },
]

const categories = ["Action & Adventure", "Comedies", "Dramas", "Sci-Fi & Fantasy", "Thrillers", "Documentaries"]

export default function NetflixClone() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [isMovieDetailModalOpen, setIsMovieDetailModalOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState<(typeof movies)[0] | null>(null)
  const [isMuted, setIsMuted] = useState(true)

  const openMovieDetail = (movie: (typeof movies)[0]) => {
    setSelectedMovie(movie)
    setIsMovieDetailModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image src="/placeholder.svg?height=32&width=32" alt="Netflix Logo" width={90} height={25} />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#" className="font-bold">
                Home
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                TV Shows
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Movies
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                New & Popular
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                My List
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                Browse by Languages
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-transparent"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>
            {isSearchOpen && (
              <Input
                placeholder="Titles, people, genres"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 w-60"
              />
            )}
            <Button variant="ghost" size="icon" className="text-white hover:bg-transparent">
              <Gift className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-white hover:bg-transparent">
              <Bell className="w-5 h-5" />
            </Button>
            <div className="relative">
              <Button
                variant="ghost"
                className="flex items-center gap-2 text-white hover:bg-transparent"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProfileMenuOpen ? "rotate-180" : ""}`} />
              </Button>
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md shadow-lg py-2">
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                    Manage Profiles
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                    Account
                  </Link>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                    Help Center
                  </Link>
                  <div className="border-t border-gray-700 my-2"></div>
                  <Link href="#" className="block px-4 py-2 text-sm hover:bg-gray-800">
                    Sign out of Netflix
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1400"
          alt="Hero Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <Image
            src="/placeholder.svg?height=100&width=200"
            alt="Movie Logo"
            width={300}
            height={150}
            className="mb-4"
          />
          <p className="text-lg max-w-xl mb-6">
            Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where
            people often prove more wicked than beasts.
          </p>
          <div className="flex items-center gap-4">
            <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-md text-lg font-semibold">
              <Play className="w-6 h-6 mr-2" />
              Play
            </Button>
            <Button className="bg-gray-600 text-white hover:bg-gray-700 px-6 py-3 rounded-md text-lg font-semibold">
              <Info className="w-6 h-6 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </section>

      {/* Movie Rows */}
      <main className="relative -mt-20 z-10 p-8">
        {categories.map((category) => (
          <section key={category} className="mb-8">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="relative group cursor-pointer rounded-lg overflow-hidden transition-transform duration-200 hover:scale-105"
                  onClick={() => openMovieDetail(movie)}
                >
                  <Image
                    src={movie.image || "/placeholder.svg"}
                    alt={movie.title}
                    width={250}
                    height={150}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Movie Detail Modal */}
      <Dialog open={isMovieDetailModalOpen} onOpenChange={setIsMovieDetailModalOpen}>
        <DialogContent className="max-w-4xl p-0 bg-gray-900 text-white rounded-lg overflow-hidden">
          {selectedMovie && (
            <>
              <div className="relative h-80">
                <iframe
                  src={selectedMovie.trailer}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                  onClick={() => setIsMovieDetailModalOpen(false)}
                >
                  <X className="w-6 h-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full"
                  onClick={() => setIsMuted(!isMuted)}
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </Button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-md text-lg font-semibold">
                    <Play className="w-6 h-6 mr-2" />
                    Play
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    <Plus className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    <ThumbsUp className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-gray-600 text-white hover:bg-gray-700 bg-transparent"
                  >
                    <ThumbsDown className="w-6 h-6" />
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-green-400 font-semibold mb-2">
                      <span>98% Match</span>
                      <span>{selectedMovie.year}</span>
                      <Badge variant="outline" className="bg-gray-700 text-white border-gray-600">
                        {selectedMovie.maturity}
                      </Badge>
                      <span>{selectedMovie.duration}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{selectedMovie.description}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 mb-2">
                      <span className="text-gray-500">Genres:</span> {selectedMovie.genre}
                    </p>
                    <p className="text-gray-400 mb-2">
                      <span className="text-gray-500">This show is:</span> Dark, Exciting, Fantasy
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

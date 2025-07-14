"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  AirplayIcon as Spotify,
  Home,
  Search,
  Library,
  Plus,
  Heart,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Shuffle,
  Repeat,
  Volume2,
  Maximize,
  Mic,
  ListMusic,
  Laptop,
  Share2,
  MoreHorizontal,
} from "lucide-react"

const playlists = [
  { id: 1, name: "Daily Mix 1", image: "/placeholder.svg?height=64&width=64" },
  { id: 2, name: "Discover Weekly", image: "/placeholder.svg?height=64&width=64" },
  { id: 3, name: "Liked Songs", image: "/placeholder.svg?height=64&width=64" },
  { id: 4, name: "Workout Mix", image: "/placeholder.svg?height=64&width=64" },
]

const artists = [
  { id: 1, name: "Artist Name 1", image: "/placeholder.svg?height=64&width=64" },
  { id: 2, name: "Artist Name 2", image: "/placeholder.svg?height=64&width=64" },
  { id: 3, name: "Artist Name 3", image: "/placeholder.svg?height=64&width=64" },
]

const songs = [
  {
    id: 1,
    title: "Song Title 1",
    artist: "Artist Name 1",
    album: "Album Name 1",
    duration: "3:45",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 2,
    title: "Song Title 2",
    artist: "Artist Name 2",
    album: "Album Name 2",
    duration: "4:10",
    image: "/placeholder.svg?height=64&width=64",
  },
  {
    id: 3,
    title: "Song Title 3",
    artist: "Artist Name 3",
    album: "Album Name 3",
    duration: "3:20",
    image: "/placeholder.svg?height=64&width=64",
  },
]

export default function SpotifyClone() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [progress, setProgress] = useState(30) // 30% progress
  const [volume, setVolume] = useState(70) // 70% volume
  const [isSongModalOpen, setIsSongModalOpen] = useState(false)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const totalDurationInSeconds = 225 // 3:45 in seconds
  const currentTimeInSeconds = (progress / 100) * totalDurationInSeconds

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 bg-black p-4 flex flex-col">
          <Link href="/" className="mb-6">
            <Spotify className="w-24 h-8 text-green-500" />
          </Link>

          <nav className="space-y-2 mb-6">
            <Link href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Home className="w-6 h-6" />
              <span className="font-semibold">Home</span>
            </Link>
            <Link href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Search className="w-6 h-6" />
              <span className="font-semibold">Search</span>
            </Link>
            <Link href="#" className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 transition-colors">
              <Library className="w-6 h-6" />
              <span className="font-semibold">Your Library</span>
            </Link>
          </nav>

          <div className="mb-6">
            <Button variant="ghost" className="w-full justify-start gap-4 p-3 rounded-lg hover:bg-gray-800">
              <Plus className="w-6 h-6" />
              <span className="font-semibold">Create Playlist</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-4 p-3 rounded-lg hover:bg-gray-800">
              <Heart className="w-6 h-6" />
              <span className="font-semibold">Liked Songs</span>
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-2">
              {playlists.map((playlist) => (
                <Link
                  key={playlist.id}
                  href="#"
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Image
                    src={playlist.image || "/placeholder.svg"}
                    alt={playlist.name}
                    width={48}
                    height={48}
                    className="rounded-md"
                  />
                  <span className="text-sm">{playlist.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-b from-gray-900 to-black p-6 overflow-y-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full bg-black/50">
                <SkipBack className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-black/50">
                <SkipForward className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" className="rounded-full bg-black/50 px-4 py-2">
                Upgrade
              </Button>
              <Avatar className="w-8 h-8 cursor-pointer">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Home Section */}
          <h2 className="text-2xl font-bold mb-6">Good evening</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                href="#"
                className="flex items-center bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={playlist.image || "/placeholder.svg"}
                  alt={playlist.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <span className="ml-4 font-semibold">{playlist.name}</span>
              </Link>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6">Made for you</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {songs.map((song) => (
              <div
                key={song.id}
                className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors"
              >
                <Image
                  src={song.image || "/placeholder.svg"}
                  alt={song.title}
                  width={160}
                  height={160}
                  className="rounded-lg mb-4 object-cover"
                />
                <h3 className="font-semibold truncate">{song.title}</h3>
                <p className="text-sm text-gray-400 truncate">{song.artist}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-6">Popular artists</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="bg-gray-800 rounded-lg p-4 cursor-pointer hover:bg-gray-700 transition-colors text-center"
              >
                <Image
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  width={160}
                  height={160}
                  className="rounded-full mb-4 object-cover mx-auto"
                />
                <h3 className="font-semibold truncate">{artist.name}</h3>
                <p className="text-sm text-gray-400">Artist</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Player Bar */}
      <footer className="bg-gray-900 border-t border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={currentSong.image || "/placeholder.svg"}
            alt={currentSong.title}
            width={64}
            height={64}
            className="rounded-md"
          />
          <div>
            <h3 className="font-semibold">{currentSong.title}</h3>
            <p className="text-sm text-gray-400">{currentSong.artist}</p>
          </div>
          <Button variant="ghost" size="icon" className="text-green-500 hover:bg-gray-800">
            <Heart className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex flex-col items-center flex-1 max-w-xl mx-4">
          <div className="flex items-center gap-6 mb-2">
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Shuffle className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <SkipBack className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full w-12 h-12 text-white hover:text-white hover:bg-gray-700"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <SkipForward className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
              <Repeat className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex items-center w-full gap-2">
            <span className="text-xs text-gray-400">{formatTime(currentTimeInSeconds)}</span>
            <Slider
              value={[progress]}
              onValueChange={(value) => setProgress(value[0])}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-xs text-gray-400">{currentSong.duration}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Mic className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <ListMusic className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Laptop className="w-5 h-5" />
          </Button>
          <Volume2 className="w-5 h-5 text-gray-400" />
          <Slider value={[volume]} onValueChange={(value) => setVolume(value[0])} max={100} step={1} className="w-24" />
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-400 hover:text-white"
            onClick={() => setIsSongModalOpen(true)}
          >
            <Maximize className="w-5 h-5" />
          </Button>
        </div>
      </footer>

      {/* Full Screen Song Modal */}
      <Dialog open={isSongModalOpen} onOpenChange={setIsSongModalOpen}>
        <DialogContent className="max-w-3xl h-[90vh] p-0 bg-gradient-to-br from-gray-900 to-black text-white flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-8">
            <Image
              src={currentSong.image || "/placeholder.svg"}
              alt={currentSong.title}
              width={400}
              height={400}
              className="rounded-lg shadow-lg mb-8"
            />
            <h2 className="text-4xl font-bold mb-2">{currentSong.title}</h2>
            <p className="text-xl text-gray-400 mb-8">{currentSong.artist}</p>

            <div className="flex items-center w-full max-w-xl gap-4 mb-8">
              <span className="text-sm text-gray-400">{formatTime(currentTimeInSeconds)}</span>
              <Slider
                value={[progress]}
                onValueChange={(value) => setProgress(value[0])}
                max={100}
                step={1}
                className="flex-1"
              />
              <span className="text-sm text-gray-400">{currentSong.duration}</span>
            </div>

            <div className="flex items-center gap-10 mb-8">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Shuffle className="w-8 h-8" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <SkipBack className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full w-20 h-20 text-white hover:text-white hover:bg-gray-700"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="w-12 h-12" /> : <Play className="w-12 h-12" />}
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <SkipForward className="w-8 h-8" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Repeat className="w-8 h-8" />
              </Button>
            </div>

            <div className="flex items-center gap-6">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Mic className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <ListMusic className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Laptop className="w-6 h-6" />
              </Button>
              <Volume2 className="w-6 h-6 text-gray-400" />
              <Slider
                value={[volume]}
                onValueChange={(value) => setVolume(value[0])}
                max={100}
                step={1}
                className="w-32"
              />
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Share2 className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <MoreHorizontal className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

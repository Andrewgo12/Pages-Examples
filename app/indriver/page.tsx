"use client"

import { AvatarFallback } from "@/components/ui/avatar"

import { AvatarImage } from "@/components/ui/avatar"

import { Avatar } from "@/components/ui/avatar"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { MapPin, Menu, User, Car, ChevronRight, Phone, MessageSquare, Star, DollarSign } from "lucide-react"

const rideOptions = [
  {
    id: 1,
    name: "Economy",
    description: "Affordable rides",
    price: "$10.00 - $15.00",
    eta: "5 min",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Comfort",
    description: "Spacious and comfortable cars",
    price: "$15.00 - $20.00",
    eta: "7 min",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Minivan",
    description: "For groups up to 6 people",
    price: "$20.00 - $25.00",
    eta: "10 min",
    image: "/placeholder.svg?height=60&width=60",
  },
]

const drivers = [
  {
    id: 1,
    name: "David Lee",
    rating: 4.8,
    car: "Toyota Camry",
    licensePlate: "XYZ 123",
    distance: "0.5 km",
    eta: "3 min",
    price: "$12.00",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    name: "Maria Garcia",
    rating: 4.9,
    car: "Honda Civic",
    licensePlate: "ABC 456",
    distance: "1.2 km",
    eta: "5 min",
    price: "$11.50",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export default function InDriverClone() {
  const [pickup, setPickup] = useState("Current Location")
  const [destination, setDestination] = useState("")
  const [suggestedPrice, setSuggestedPrice] = useState("12.00")
  const [showRideOptions, setShowRideOptions] = useState(false)
  const [selectedRideOption, setSelectedRideOption] = useState<(typeof rideOptions)[0] | null>(null)
  const [showDriverSelection, setShowDriverSelection] = useState(false)
  const [selectedDriver, setSelectedDriver] = useState<(typeof drivers)[0] | null>(null)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  const handleSearchRide = () => {
    if (pickup && destination) {
      setShowRideOptions(true)
      setShowDriverSelection(false)
      setSelectedRideOption(null)
      setSelectedDriver(null)
    } else {
      alert("Please enter both pickup and destination locations.")
    }
  }

  const handleSelectRideOption = (option: (typeof rideOptions)[0]) => {
    setSelectedRideOption(option)
    setShowRideOptions(false)
    setShowDriverSelection(true)
  }

  const handleSelectDriver = (driver: (typeof drivers)[0]) => {
    setSelectedDriver(driver)
    setShowConfirmationModal(true)
  }

  const handleConfirmRide = () => {
    alert(`Ride confirmed with ${selectedDriver?.name} for ${selectedDriver?.price}!`)
    setShowConfirmationModal(false)
    // Reset state for a new ride
    setPickup("Current Location")
    setDestination("")
    setSuggestedPrice("12.00")
    setShowRideOptions(false)
    setSelectedRideOption(null)
    setShowDriverSelection(null)
    setSelectedDriver(null)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-yellow-500 text-white p-4 flex items-center justify-between">
        <Button variant="ghost" size="icon">
          <Menu className="w-6 h-6" />
        </Button>
        <Link href="/" className="text-2xl font-bold">
          inDriver
        </Link>
        <Button variant="ghost" size="icon">
          <User className="w-6 h-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4">
        {/* Map Placeholder */}
        <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
          <Image src="/placeholder.svg?height=300&width=600" alt="Map" fill className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="w-10 h-10 text-red-500" />
          </div>
        </div>

        {/* Location Inputs */}
        <Card className="mb-4">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <Input
                placeholder="Enter pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="flex-1 border-none focus-visible:ring-0"
              />
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-500" />
              <Input
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="flex-1 border-none focus-visible:ring-0"
              />
            </div>
          </CardContent>
        </Card>

        {/* Suggested Price Input */}
        <Card className="mb-4">
          <CardContent className="p-4 flex items-center gap-3">
            <DollarSign className="w-5 h-5 text-green-500" />
            <Input
              placeholder="Suggested price"
              value={suggestedPrice}
              onChange={(e) => setSuggestedPrice(e.target.value)}
              className="flex-1 border-none focus-visible:ring-0"
              type="number"
            />
            <Button onClick={handleSearchRide} className="bg-yellow-500 hover:bg-yellow-600 text-white">
              Search Ride
            </Button>
          </CardContent>
        </Card>

        {/* Ride Options */}
        {showRideOptions && (
          <Card className="mb-4">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Choose a ride option</h3>
              <div className="space-y-3">
                {rideOptions.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleSelectRideOption(option)}
                  >
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{option.name}</div>
                      <div className="text-sm text-gray-600">{option.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{option.price}</div>
                      <div className="text-xs text-gray-500">{option.eta}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Driver Selection */}
        {showDriverSelection && (
          <Card className="mb-4">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Drivers near you</h3>
              <div className="space-y-3">
                {drivers.map((driver) => (
                  <div
                    key={driver.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleSelectDriver(driver)}
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={driver.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{driver.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{driver.name}</div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{driver.rating}</span>
                        <span className="mx-2">•</span>
                        <span>
                          {driver.car} ({driver.licensePlate})
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {driver.distance} away • {driver.eta} ETA
                      </div>
                    </div>
                    <div className="font-bold text-lg">{driver.price}</div>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Ride Confirmation Modal */}
      <Dialog open={showConfirmationModal} onOpenChange={setShowConfirmationModal}>
        <DialogContent className="max-w-md p-6">
          <div className="flex flex-col items-center text-center">
            <Car className="w-16 h-16 text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Confirm Your Ride</h3>
            {selectedDriver && (
              <>
                <p className="text-gray-600 mb-4">
                  You are about to request a ride with **{selectedDriver.name}** in a **{selectedDriver.car}** for{" "}
                  <span className="font-bold">{selectedDriver.price}</span>.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-white" onClick={handleConfirmRide}>
                    Confirm Ride
                  </Button>
                  <Button variant="outline" onClick={() => setShowConfirmationModal(false)}>
                    Cancel
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <Button variant="ghost" size="sm">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message Support
                  </Button>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

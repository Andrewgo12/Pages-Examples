"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  MapPin,
  Search,
  Menu,
  User,
  Car,
  Bike,
  Utensils,
  ShoppingBag,
  ChevronRight,
  Clock,
  Phone,
  MessageSquare,
} from "lucide-react"

const rideOptions = [
  {
    id: 1,
    name: "UberX",
    description: "Affordable, everyday rides",
    price: "$12.50",
    eta: "3 min",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Uber Comfort",
    description: "Newer cars with extra legroom",
    price: "$18.00",
    eta: "5 min",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Uber Black",
    description: "Premium rides in luxury cars",
    price: "$35.00",
    eta: "7 min",
    image: "/placeholder.svg?height=60&width=60",
  },
]

const services = [
  { name: "Ride", icon: Car, description: "Get a ride now" },
  { name: "Food", icon: Utensils, description: "Order food delivery" },
  { name: "Package", icon: ShoppingBag, description: "Send or receive packages" },
  { name: "Bike & Scooter", icon: Bike, description: "Rent a bike or scooter" },
]

const recentDestinations = [
  { name: "Work", address: "123 Main St, Anytown", time: "8:00 AM" },
  { name: "Home", address: "456 Oak Ave, Anytown", time: "6:00 PM" },
  { name: "Gym", address: "789 Fitness Blvd, Anytown", time: "7:00 PM" },
]

export default function UberClone() {
  const [pickup, setPickup] = useState("Current Location")
  const [destination, setDestination] = useState("")
  const [showRideOptions, setShowRideOptions] = useState(false)
  const [selectedRide, setSelectedRide] = useState<(typeof rideOptions)[0] | null>(null)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)

  const handleSearchRide = () => {
    if (pickup && destination) {
      setShowRideOptions(true)
      setSelectedRide(null)
    } else {
      alert("Please enter both pickup and destination locations.")
    }
  }

  const handleSelectRide = (ride: (typeof rideOptions)[0]) => {
    setSelectedRide(ride)
    setShowConfirmationModal(true)
  }

  const handleConfirmRide = () => {
    alert(`Ride requested: ${selectedRide?.name} to ${destination} for ${selectedRide?.price}!`)
    setShowConfirmationModal(false)
    // Reset state for a new ride
    setPickup("Current Location")
    setDestination("")
    setShowRideOptions(false)
    setSelectedRide(null)
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="bg-black p-4 flex items-center justify-between">
        <Button variant="ghost" size="icon" className="text-white">
          <Menu className="w-6 h-6" />
        </Button>
        <Link href="/" className="text-3xl font-bold">
          Uber
        </Link>
        <Button variant="ghost" size="icon" className="text-white">
          <User className="w-6 h-6" />
        </Button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4">
        {/* Map Placeholder */}
        <div className="relative h-64 bg-gray-800 rounded-lg overflow-hidden mb-4">
          <Image src="/placeholder.svg?height=300&width=600" alt="Map" fill className="object-cover opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <MapPin className="w-10 h-10 text-red-500" />
          </div>
        </div>

        {/* Location Inputs */}
        <Card className="bg-gray-900 border-gray-700 text-white mb-4">
          <CardContent className="p-4">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <Input
                placeholder="Current location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white placeholder:text-gray-400"
              />
            </div>
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="flex-1 bg-transparent border-none focus-visible:ring-0 text-white placeholder:text-gray-400"
              />
            </div>
          </CardContent>
        </Card>

        <Button
          className="w-full bg-white text-black hover:bg-gray-200 font-bold py-6 text-lg mb-4"
          onClick={handleSearchRide}
        >
          Confirm Location
        </Button>

        {/* Ride Options */}
        {showRideOptions && (
          <Card className="bg-gray-900 border-gray-700 text-white mb-4">
            <CardContent className="p-4">
              <h3 className="text-xl font-bold mb-4">Choose a ride</h3>
              <div className="space-y-4">
                {rideOptions.map((option) => (
                  <div
                    key={option.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-800 cursor-pointer"
                    onClick={() => handleSelectRide(option)}
                  >
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-lg">{option.name}</div>
                      <div className="text-sm text-gray-400">{option.description}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{option.price}</div>
                      <div className="text-sm text-gray-400">{option.eta}</div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Other Services */}
        <Card className="bg-gray-900 border-gray-700 text-white mb-4">
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-4">Other ways to get around</h3>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="flex flex-col items-center justify-center h-28 bg-gray-800 border-gray-700 hover:bg-gray-700"
                  >
                    <IconComponent className="w-8 h-8 mb-2 text-white" />
                    <span className="font-semibold">{service.name}</span>
                    <span className="text-xs text-gray-400">{service.description}</span>
                  </Button>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recent Destinations */}
        <Card className="bg-gray-900 border-gray-700 text-white">
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-4">Recent destinations</h3>
            <div className="space-y-3">
              {recentDestinations.map((dest, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800 cursor-pointer">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gray-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{dest.name}</div>
                    <div className="text-sm text-gray-400">{dest.address}</div>
                  </div>
                  <span className="text-sm text-gray-500">{dest.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Ride Confirmation Modal */}
      <Dialog open={showConfirmationModal} onOpenChange={setShowConfirmationModal}>
        <DialogContent className="max-w-md bg-gray-900 text-white border-gray-700 p-6">
          <div className="flex flex-col items-center text-center">
            <Car className="w-16 h-16 text-white mb-4" />
            <h3 className="text-2xl font-bold mb-2">Confirm Your Ride</h3>
            {selectedRide && (
              <>
                <p className="text-gray-400 mb-4">
                  You are about to request **{selectedRide.name}** to **{destination}** for{" "}
                  <span className="font-bold">{selectedRide.price}</span>.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <Button className="bg-white text-black hover:bg-gray-200" onClick={handleConfirmRide}>
                    Confirm Ride
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setShowConfirmationModal(false)}
                    className="bg-transparent text-white border-gray-700 hover:bg-gray-800"
                  >
                    Cancel
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Support
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
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

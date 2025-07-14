"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { ShoppingCart, Search, MapPin, ChevronDown, Star, Plus, Minus, CreditCard, CheckCircle } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Echo Dot (5th Gen)",
    price: 49.99,
    rating: 4.5,
    reviews: 12345,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Our best sounding Echo Dot yet – enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.",
    inStock: true,
  },
  {
    id: 2,
    name: "Fire TV Stick 4K Max",
    price: 59.99,
    rating: 4.7,
    reviews: 8765,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Our most powerful streaming stick - 40% more powerful than Fire TV Stick 4K, with faster app starts and more fluid navigation.",
    inStock: true,
  },
  {
    id: 3,
    name: "Kindle Paperwhite",
    price: 139.99,
    rating: 4.8,
    reviews: 23456,
    image: "/placeholder.svg?height=200&width=200",
    description:
      "Now with a 6.8” display and thinner borders, adjustable warm light, up to 10 weeks of battery life, and 20% faster page turns.",
    inStock: false,
  },
]

const cartItems = [
  {
    id: 1,
    name: "Echo Dot (5th Gen)",
    price: 49.99,
    quantity: 1,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Fire TV Stick 4K Max",
    price: 59.99,
    quantity: 2,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function AmazonClone() {
  const [cart, setCart] = useState(cartItems)
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false)
  const [checkoutSuccess, setCheckoutSuccess] = useState(false)

  const addToCart = (product: (typeof products)[0]) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const updateQuantity = (id: number, delta: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0)
      return updatedCart
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const openProductModal = (product: (typeof products)[0]) => {
    setSelectedProduct(product)
    setIsProductModalOpen(true)
  }

  const handleCheckout = () => {
    // Simulate a checkout process
    setTimeout(() => {
      setCheckoutSuccess(true)
      setIsCheckoutModalOpen(true)
      setCart([]) // Clear cart after successful checkout
    }, 1000)
  }

  const totalCartPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-1">
                <Image src="/placeholder.svg?height=32&width=32" alt="Amazon Logo" width={90} height={27} />
              </Link>
              <div className="flex items-center text-sm text-gray-300 hover:text-white cursor-pointer">
                <MapPin className="w-4 h-4 mr-1" />
                Deliver to John
              </div>
            </div>

            <div className="flex-1 max-w-2xl mx-4">
              <div className="flex">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="rounded-r-none bg-gray-200 text-gray-800 hover:bg-gray-300 border-r border-gray-300"
                    >
                      All <ChevronDown className="w-4 h-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Electronics</DropdownMenuItem>
                    <DropdownMenuItem>Books</DropdownMenuItem>
                    <DropdownMenuItem>Home & Kitchen</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Input placeholder="Search Amazon" className="flex-1 rounded-none focus-visible:ring-0 border-none" />
                <Button className="rounded-l-none bg-orange-400 hover:bg-orange-500">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:bg-gray-800">
                    Hello, John <br />
                    <span className="font-bold flex items-center">
                      Accounts & Lists <ChevronDown className="w-4 h-4 ml-1" />
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Your Account</DropdownMenuItem>
                  <DropdownMenuItem>Your Orders</DropdownMenuItem>
                  <DropdownMenuItem>Sign Out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="#" className="text-white hover:text-gray-300">
                Returns <br />
                <span className="font-bold">& Orders</span>
              </Link>
              <Link href="#" className="relative flex items-center text-white hover:text-gray-300">
                <ShoppingCart className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
                <span className="ml-1">Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex items-center gap-4 text-sm">
          <Button variant="ghost" className="hover:bg-gray-700">
            All
          </Button>
          <Button variant="ghost" className="hover:bg-gray-700">
            Today's Deals
          </Button>
          <Button variant="ghost" className="hover:bg-gray-700">
            Customer Service
          </Button>
          <Button variant="ghost" className="hover:bg-gray-700">
            Registry
          </Button>
          <Button variant="ghost" className="hover:bg-gray-700">
            Gift Cards
          </Button>
          <Button variant="ghost" className="hover:bg-gray-700">
            Sell
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Product Listing */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => openProductModal(product)}
                >
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={180}
                    height={180}
                    className="object-contain mb-4"
                  />
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-blue-600 ml-1">{product.reviews}</span>
                  </div>
                  <div className="text-2xl font-bold mb-2">${product.price.toFixed(2)}</div>
                  {product.inStock ? (
                    <Badge className="bg-green-500 text-white">In Stock</Badge>
                  ) : (
                    <Badge variant="destructive">Out of Stock</Badge>
                  )}
                  <Button
                    className="mt-4 w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(product)
                    }}
                    disabled={!product.inStock}
                  >
                    Add to Cart
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
              {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <>
                  <div className="space-y-4 mb-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center gap-4">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          width={60}
                          height={60}
                          className="object-contain"
                        />
                        <div className="flex-1">
                          <h3 className="font-medium text-sm line-clamp-2">{item.name}</h3>
                          <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-6 h-6 bg-transparent"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-sm">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-6 h-6 bg-transparent"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="link"
                              size="sm"
                              className="text-red-600"
                              onClick={() => removeFromCart(item.id)}
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg mb-4">
                      <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} items):</span>
                      <span>${totalCartPrice.toFixed(2)}</span>
                    </div>
                    <Button
                      className="w-full bg-yellow-400 hover:bg-yellow-500"
                      onClick={() => setIsCheckoutModalOpen(true)}
                    >
                      Proceed to checkout
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Product Detail Modal */}
      <Dialog open={isProductModalOpen} onOpenChange={setIsProductModalOpen}>
        <DialogContent className="max-w-3xl p-6">
          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center justify-center">
                <Image
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(selectedProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-blue-600 ml-1">{selectedProduct.reviews} ratings</span>
                </div>
                <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
                <div className="text-3xl font-bold mb-4">${selectedProduct.price.toFixed(2)}</div>
                {selectedProduct.inStock ? (
                  <Badge className="bg-green-500 text-white mb-4">In Stock</Badge>
                ) : (
                  <Badge variant="destructive" className="mb-4">
                    Out of Stock
                  </Badge>
                )}
                <Button
                  className="w-full"
                  onClick={() => {
                    addToCart(selectedProduct)
                    setIsProductModalOpen(false)
                  }}
                  disabled={!selectedProduct.inStock}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Checkout Modal */}
      <Dialog open={isCheckoutModalOpen} onOpenChange={setIsCheckoutModalOpen}>
        <DialogContent className="max-w-md p-6">
          <DialogHeader>
            <DialogTitle>{checkoutSuccess ? "Order Confirmed!" : "Proceed to Checkout"}</DialogTitle>
            <DialogDescription>
              {checkoutSuccess
                ? "Your order has been successfully placed."
                : "Review your order and complete the purchase."}
            </DialogDescription>
          </DialogHeader>
          {checkoutSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <p className="text-lg font-semibold">Thank you for your purchase!</p>
              <p className="text-gray-600 mt-2">Your order will be delivered within 3-5 business days.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <p className="text-sm text-gray-700">John Doe</p>
                <p className="text-sm text-gray-700">123 Main St</p>
                <p className="text-sm text-gray-700">Anytown, CA 90210</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Payment Method</h3>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  <span className="text-sm">Visa ending in 1234</span>
                </div>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-2">Order Summary</h3>
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm text-gray-700 mb-1">
                    <span>
                      {item.name} (x{item.quantity})
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold mt-2">
                  <span>Total:</span>
                  <span>${totalCartPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            {checkoutSuccess ? (
              <Button onClick={() => setIsCheckoutModalOpen(false)}>Close</Button>
            ) : (
              <>
                <Button variant="outline" onClick={() => setIsCheckoutModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCheckout}>Place Order</Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

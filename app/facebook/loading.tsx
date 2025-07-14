import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 animate-pulse">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              <div className="w-40 h-8 bg-gray-200 rounded"></div>
            </div>

            <nav className="hidden md:flex items-center">
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
            </nav>

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                <span className="font-semibold"></span>
              </div>

              <nav className="space-y-2">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span></span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span></span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span></span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span></span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <span></span>
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stories */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-4 overflow-x-auto">
                  <div className="flex-shrink-0 text-center">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    </div>
                    <p className="text-xs mt-2 font-medium"></p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Create Post */}
            <Card>
              <CardContent className="p-4">
                <div className="flex gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="w-full h-10 bg-gray-200 rounded"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex gap-4">
                    <div className="w-24 h-8 bg-gray-200 rounded"></div>
                    <div className="w-24 h-8 bg-gray-200 rounded"></div>
                    <div className="w-24 h-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-20 h-10 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>

            {/* Posts */}
            <Card>
              <CardContent className="p-4">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="w-40 h-4 bg-gray-200 rounded"></div>
                      <div className="w-32 h-4 bg-gray-200 rounded mt-1"></div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <div className="w-full h-48 bg-gray-200 rounded"></div>
                </div>

                {/* Post Stats */}
                <div className="flex items-center justify-between py-2 border-t border-b text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-blue-600 rounded-full"></div>
                    <span></span>
                  </div>
                  <div className="flex gap-4">
                    <span></span>
                    <span></span>
                  </div>
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-around pt-2">
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              {/* Friend Requests */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Friend requests</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm"></div>
                        <div className="text-xs text-gray-600"></div>
                        <div className="flex gap-2 mt-2">
                          <div className="w-16 h-6 bg-gray-200 rounded"></div>
                          <div className="w-16 h-6 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contacts */}
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-4">Contacts</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 rounded-lg">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm font-medium"></span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

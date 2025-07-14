import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white animate-pulse">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-12 min-h-screen">
          {/* Left Sidebar */}
          <div className="col-span-3 border-r border-gray-800 p-4">
            <div className="sticky top-0">
              <div className="w-8 h-8 bg-blue-400 rounded-full mb-8"></div>

              <nav className="space-y-2 mb-8">
                <div className="flex items-center gap-4 p-3 rounded-full bg-gray-900">
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                  <span className="text-xl w-20 h-6 bg-gray-700 rounded"></span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-full bg-gray-900">
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                  <span className="text-xl w-20 h-6 bg-gray-700 rounded"></span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-full bg-gray-900">
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                  <span className="text-xl w-20 h-6 bg-gray-700 rounded"></span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-full bg-gray-900">
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                  <span className="text-xl w-20 h-6 bg-gray-700 rounded"></span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-full bg-gray-900">
                  <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
                  <span className="text-xl w-20 h-6 bg-gray-700 rounded"></span>
                </div>
              </nav>

              <div className="w-full h-12 bg-blue-500 rounded-full"></div>

              <div className="mt-8 flex items-center gap-3 p-3 rounded-full bg-gray-900">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div className="flex-1">
                  <div className="font-semibold w-32 h-4 bg-gray-700 rounded"></div>
                  <div className="text-gray-500 text-sm w-24 h-4 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-6 border-r border-gray-800">
            {/* Header */}
            <div className="sticky top-0 bg-black/80 backdrop-blur border-b border-gray-800 p-4">
              <h1 className="text-xl font-bold w-20 h-6 bg-gray-700 rounded"></h1>
            </div>

            {/* Compose Tweet */}
            <div className="border-b border-gray-800 p-4">
              <div className="flex gap-3">
                <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
                <div className="flex-1">
                  <div className="w-full h-10 bg-gray-700 rounded"></div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                      <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-sm text-gray-500 w-10 h-4 bg-gray-700 rounded"></span>
                      <div className="w-20 h-8 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tweet Feed */}
            <div>
              <div className="border-b border-gray-800 p-4">
                <div className="flex gap-3">
                  <div className="w-12 h-12 bg-gray-700 rounded-full"></div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold w-32 h-4 bg-gray-700 rounded"></span>
                      <span className="text-gray-500 w-16 h-4 bg-gray-700 rounded"></span>
                    </div>

                    <div className="mb-3">
                      <div className="w-full h-6 bg-gray-700 rounded"></div>
                      <div className="mt-3 rounded-2xl overflow-hidden">
                        <div className="w-full h-48 bg-gray-700"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between max-w-md">
                      <div className="w-20 h-8 bg-gray-700 rounded"></div>
                      <div className="w-20 h-8 bg-gray-700 rounded"></div>
                      <div className="w-20 h-8 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-3 p-4">
            <div className="sticky top-0 space-y-6">
              {/* Search */}
              <div className="relative">
                <div className="w-full h-10 bg-gray-700 rounded-full"></div>
              </div>

              {/* Trends */}
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-4 w-32 h-6 bg-gray-700 rounded"></h3>
                  <div className="space-y-3">
                    <div className="w-full h-10 bg-gray-700 rounded"></div>
                    <div className="w-full h-10 bg-gray-700 rounded"></div>
                    <div className="w-full h-10 bg-gray-700 rounded"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Who to follow */}
              <Card className="bg-gray-900 border-gray-800">
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-4 w-32 h-6 bg-gray-700 rounded"></h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                        <div>
                          <div className="font-semibold w-24 h-4 bg-gray-700 rounded"></div>
                          <div className="text-sm text-gray-500 w-16 h-4 bg-gray-700 rounded"></div>
                        </div>
                      </div>
                      <div className="w-20 h-8 bg-gray-700 rounded"></div>
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

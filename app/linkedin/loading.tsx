export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 animate-pulse">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-blue-700 rounded-full"></div>
              <div className="w-40 h-8 bg-gray-200 rounded"></div>
            </div>

            <nav className="flex items-center gap-6">
              <div className="flex flex-col items-center text-gray-600">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="text-xs w-12 h-3 bg-gray-200 rounded mt-1"></span>
              </div>
              <div className="flex flex-col items-center text-gray-600">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="text-xs w-12 h-3 bg-gray-200 rounded mt-1"></span>
              </div>
              <div className="flex flex-col items-center text-gray-600">
                <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                <span className="text-xs w-12 h-3 bg-gray-200 rounded mt-1"></span>
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Sidebar */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-lg shadow-sm mb-6">
              <div className="relative h-20 bg-blue-700 rounded-t-lg"></div>
              <div className="flex flex-col items-center -mt-10">
                <div className="w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
                <div className="w-32 h-6 bg-gray-200 rounded mt-2"></div>
                <div className="w-48 h-4 bg-gray-200 rounded mt-1"></div>
              </div>
              <div className="p-4 border-t mt-4">
                <div className="w-full h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-full h-4 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4">
                <h3 className="font-semibold mb-4 w-24 h-6 bg-gray-200 rounded"></h3>
                <nav className="space-y-2 text-sm">
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                </nav>
              </div>
            </div>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4">
                <div className="flex gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="w-full h-10 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t">
                  <div className="flex gap-4">
                    <div className="w-20 h-8 bg-gray-200 rounded"></div>
                    <div className="w-20 h-8 bg-gray-200 rounded"></div>
                    <div className="w-20 h-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="w-20 h-10 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>

            {/* Posts */}
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-4">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="w-32 h-4 bg-gray-200 rounded"></div>
                      <div className="w-48 h-4 bg-gray-200 rounded mt-1"></div>
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
                  <div className="w-20 h-4 bg-gray-200 rounded"></div>
                  <div className="w-20 h-4 bg-gray-200 rounded"></div>
                </div>

                {/* Post Actions */}
                <div className="flex items-center justify-around pt-2">
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block">
            <div className="space-y-6">
              {/* LinkedIn News */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4">
                  <h3 className="font-semibold mb-4 w-32 h-6 bg-gray-200 rounded"></h3>
                  <ul className="space-y-3">
                    <li>
                      <div className="w-full h-4 bg-gray-200 rounded"></div>
                      <div className="w-full h-3 bg-gray-200 rounded mt-1"></div>
                    </li>
                    <li>
                      <div className="w-full h-4 bg-gray-200 rounded"></div>
                      <div className="w-full h-3 bg-gray-200 rounded mt-1"></div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Add to your feed */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4">
                  <h3 className="font-semibold mb-4 w-32 h-6 bg-gray-200 rounded"></h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                      <div className="flex-1">
                        <div className="w-24 h-4 bg-gray-200 rounded"></div>
                        <div className="w-32 h-4 bg-gray-200 rounded mt-1"></div>
                        <div className="w-20 h-8 bg-gray-200 rounded mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

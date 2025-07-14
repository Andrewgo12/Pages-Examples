export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b animate-pulse">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              <span className="text-xl font-semibold w-32 h-6 bg-gray-200 rounded"></span>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <div className="w-full h-8 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <div className="w-20 h-8 bg-gray-200 rounded"></div>
              <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-4 shadow-sm mb-6 animate-pulse">
              <div className="w-full h-10 bg-gray-200 rounded mb-4"></div>

              <nav className="space-y-2">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-200">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span></span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-200">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span></span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-200">
                  <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                  <span></span>
                </div>
              </nav>
            </div>

            {/* Storage Usage */}
            <div className="bg-white rounded-lg p-4 shadow-sm animate-pulse">
              <h3 className="font-semibold mb-3">Storage</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span></span>
                  <span></span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                </div>
                <div className="w-full h-8 bg-gray-200 rounded mt-3"></div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm animate-pulse">
              {/* Toolbar */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-4">
                  <h2 className="text-lg font-semibold w-32 h-6 bg-gray-200 rounded"></h2>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                  <div className="w-20 h-8 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* File List */}
              <div className="p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-200">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium w-48 h-4 bg-gray-300 rounded"></div>
                      <div className="text-sm text-gray-500 w-32 h-4 bg-gray-300 rounded mt-1"></div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-200">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium w-48 h-4 bg-gray-300 rounded"></div>
                      <div className="text-sm text-gray-500 w-32 h-4 bg-gray-300 rounded mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Files */}
            <div className="bg-white rounded-lg shadow-sm mt-6 p-4 animate-pulse">
              <h3 className="font-semibold mb-4">Recent</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-sm w-48 h-4 bg-gray-300 rounded"></div>
                    <div className="text-xs text-gray-500 w-32 h-4 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-200">
                  <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="font-medium text-sm w-48 h-4 bg-gray-300 rounded"></div>
                    <div className="text-xs text-gray-500 w-32 h-4 bg-gray-300 rounded"></div>
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

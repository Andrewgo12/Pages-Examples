export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      {/* Header */}
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <span className="text-xl font-semibold bg-gray-800 rounded w-24 h-6"></span>
            </div>

            <nav className="hidden md:flex items-center gap-4">
              <div className="w-20 h-6 bg-gray-800 rounded"></div>
              <div className="w-20 h-6 bg-gray-800 rounded"></div>
              <div className="w-20 h-6 bg-gray-800 rounded"></div>
              <div className="w-20 h-6 bg-gray-800 rounded"></div>
            </nav>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Profile Sidebar */}
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full"></div>
              <div className="w-48 h-6 bg-gray-200 rounded mx-auto"></div>
              <div className="w-32 h-4 bg-gray-200 rounded mx-auto mt-2"></div>
              <div className="w-full h-10 bg-gray-200 rounded mt-4"></div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <span></span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                <span></span>
              </div>
            </div>

            <div className="flex gap-4 mt-6 text-sm">
              <div>
                <span className="font-semibold"></span>
                <span className="text-gray-600 ml-1">followers</span>
              </div>
              <div>
                <span className="font-semibold"></span>
                <span className="text-gray-600 ml-1">following</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-40 h-8 bg-gray-200 rounded"></div>
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
              </div>
              <div className="w-24 h-10 bg-gray-200 rounded"></div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="w-48 h-6 bg-gray-200 rounded mb-2"></div>
                      <div className="w-64 h-4 bg-gray-200 rounded"></div>
                      <div className="w-32 h-4 bg-gray-200 rounded mt-2"></div>
                    </div>
                    <div className="w-20 h-8 bg-gray-200 rounded"></div>
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

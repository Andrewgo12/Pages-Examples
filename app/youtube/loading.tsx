export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b animate-pulse">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-24 h-6 bg-gray-200 rounded"></div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <div className="w-full h-8 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 h-screen overflow-y-auto border-r bg-white animate-pulse">
          <div className="p-3">
            <nav className="space-y-1">
              <div className="flex items-center gap-6 px-3 py-2 rounded-lg bg-gray-200">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-20 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-center gap-6 px-3 py-2 rounded-lg bg-gray-200">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-20 h-4 bg-gray-300 rounded"></div>
              </div>
              <div className="flex items-center gap-6 px-3 py-2 rounded-lg bg-gray-200">
                <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                <div className="w-20 h-4 bg-gray-300 rounded"></div>
              </div>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Video Player Section */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="relative bg-black rounded-lg overflow-hidden mb-4 animate-pulse">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gray-200"></div>
                </div>
              </div>

              {/* Video Info */}
              <div className="mb-6">
                <div className="w-48 h-6 bg-gray-200 rounded mb-3"></div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="w-32 h-4 bg-gray-200 rounded"></div>
                      <div className="w-24 h-4 bg-gray-200 rounded mt-1"></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="w-40 h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="w-full h-4 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Comments */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-32 h-6 bg-gray-200 rounded"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="w-40 h-4 bg-gray-200 rounded mb-1"></div>
                      <div className="w-full h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recommended Videos */}
            <div className="space-y-4">
              <div className="w-32 h-6 bg-gray-200 rounded"></div>
              <div className="flex gap-3 p-2 rounded-lg bg-gray-100 animate-pulse">
                <div className="relative">
                  <div className="w-40 h-24 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="flex-1">
                  <div className="w-32 h-4 bg-gray-200 rounded mb-1"></div>
                  <div className="w-24 h-4 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

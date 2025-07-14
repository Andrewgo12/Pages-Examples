export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 animate-pulse">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-24 h-8 bg-gray-800 rounded"></div>
              <div className="w-24 h-4 bg-gray-800 rounded"></div>
            </div>

            <div className="flex-1 max-w-2xl mx-4">
              <div className="flex">
                <div className="w-20 h-10 bg-gray-800 rounded-l"></div>
                <div className="flex-1 h-10 bg-gray-700"></div>
                <div className="w-10 h-10 bg-orange-400 rounded-r"></div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-32 h-10 bg-gray-800 rounded"></div>
              <div className="w-24 h-10 bg-gray-800 rounded"></div>
              <div className="w-16 h-10 bg-gray-800 rounded"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white py-2">
        <div className="container mx-auto px-4 flex items-center gap-4 text-sm">
          <div className="w-16 h-6 bg-gray-700 rounded"></div>
          <div className="w-24 h-6 bg-gray-700 rounded"></div>
          <div className="w-28 h-6 bg-gray-700 rounded"></div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Product Listing */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 w-48 h-8 bg-gray-200 rounded"></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                <div className="w-40 h-40 bg-gray-200 rounded mb-4"></div>
                <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
                <div className="w-24 h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
                <div className="w-full h-10 bg-gray-200 rounded mt-4"></div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center text-center">
                <div className="w-40 h-40 bg-gray-200 rounded mb-4"></div>
                <div className="w-full h-6 bg-gray-200 rounded mb-2"></div>
                <div className="w-24 h-4 bg-gray-200 rounded mb-2"></div>
                <div className="w-20 h-8 bg-gray-200 rounded"></div>
                <div className="w-full h-10 bg-gray-200 rounded mt-4"></div>
              </div>
            </div>
          </div>

          {/* Shopping Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-24">
              <h2 className="text-xl font-bold mb-4 w-32 h-8 bg-gray-200 rounded"></h2>
              <div className="w-full h-4 bg-gray-200 rounded"></div>
              <div className="space-y-4 mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded"></div>
                  <div className="flex-1">
                    <div className="w-full h-4 bg-gray-200 rounded mb-1"></div>
                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                    <div className="w-full h-6 bg-gray-200 rounded mt-1"></div>
                  </div>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="w-full h-6 bg-gray-200 rounded mb-4"></div>
                <div className="w-full h-10 bg-yellow-400 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

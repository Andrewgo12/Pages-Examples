export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col animate-pulse">
      {/* Header */}
      <header className="bg-yellow-500 text-white p-4 flex items-center justify-between">
        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
        <div className="w-24 h-6 bg-yellow-400 rounded"></div>
        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-4">
        {/* Map Placeholder */}
        <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden mb-4"></div>

        {/* Location Inputs */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="w-full h-8 bg-gray-200 rounded mb-3"></div>
          <div className="w-full h-8 bg-gray-200 rounded"></div>
        </div>

        {/* Suggested Price Input */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="w-24 h-8 bg-gray-200 rounded"></div>
        </div>

        {/* Ride Options */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="w-32 h-6 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-200">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="w-32 h-4 bg-gray-300 rounded"></div>
                <div className="w-48 h-4 bg-gray-300 rounded mt-1"></div>
              </div>
              <div className="w-20 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

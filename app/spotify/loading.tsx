export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col animate-pulse">
      {/* Main Layout */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <aside className="w-64 bg-black p-4 flex flex-col">
          <div className="w-24 h-8 bg-gray-800 rounded mb-6"></div>

          <nav className="space-y-2 mb-6">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-800">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <span className="font-semibold w-20 h-4 bg-gray-700 rounded"></span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-800">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <span className="font-semibold w-20 h-4 bg-gray-700 rounded"></span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-lg bg-gray-800">
              <div className="w-6 h-6 bg-gray-700 rounded-full"></div>
              <span className="font-semibold w-20 h-4 bg-gray-700 rounded"></span>
            </div>
          </nav>

          <div className="mb-6">
            <div className="w-full h-10 bg-gray-800 rounded-lg mb-2"></div>
            <div className="w-full h-10 bg-gray-800 rounded-lg"></div>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800">
                <div className="w-12 h-12 bg-gray-700 rounded-md"></div>
                <span className="text-sm w-24 h-4 bg-gray-700 rounded"></span>
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-800">
                <div className="w-12 h-12 bg-gray-700 rounded-md"></div>
                <span className="text-sm w-24 h-4 bg-gray-700 rounded"></span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gradient-to-b from-gray-900 to-black p-6 overflow-y-auto">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
              <div className="w-10 h-10 bg-gray-800 rounded-full"></div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-8 bg-gray-800 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
            </div>
          </div>

          {/* Home Section */}
          <h2 className="text-2xl font-bold mb-6 w-40 h-8 bg-gray-800 rounded"></h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-20 h-20 bg-gray-700"></div>
              <span className="ml-4 font-semibold w-24 h-4 bg-gray-700 rounded"></span>
            </div>
            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
              <div className="w-20 h-20 bg-gray-700"></div>
              <span className="ml-4 font-semibold w-24 h-4 bg-gray-700 rounded"></span>
            </div>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-6 w-40 h-8 bg-gray-800 rounded"></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="w-40 h-40 bg-gray-700 rounded-lg mb-4"></div>
              <h3 className="font-semibold w-24 h-4 bg-gray-700 rounded"></h3>
              <p className="text-sm text-gray-400 w-16 h-3 bg-gray-700 rounded mt-1"></p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="w-40 h-40 bg-gray-700 rounded-lg mb-4"></div>
              <h3 className="font-semibold w-24 h-4 bg-gray-700 rounded"></h3>
              <p className="text-sm text-gray-400 w-16 h-3 bg-gray-700 rounded mt-1"></p>
            </div>
          </div>
        </main>
      </div>

      {/* Player Bar */}
      <footer className="bg-gray-900 border-t border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gray-700 rounded-md"></div>
          <div>
            <h3 className="font-semibold w-24 h-4 bg-gray-700 rounded"></h3>
            <p className="text-sm text-gray-400 w-16 h-3 bg-gray-700 rounded mt-1"></p>
          </div>
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
        </div>

        <div className="flex flex-col items-center flex-1 max-w-xl mx-4">
          <div className="flex items-center gap-6 mb-2">
            <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
            <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
            <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          </div>
          <div className="flex items-center w-full gap-2">
            <span className="text-xs text-gray-400 w-8 h-3 bg-gray-700 rounded"></span>
            <div className="flex-1 h-2 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 w-8 h-3 bg-gray-700 rounded"></span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
          <div className="w-24 h-2 bg-gray-700 rounded-full"></div>
          <div className="w-5 h-5 bg-gray-700 rounded-full"></div>
        </div>
      </footer>
    </div>
  )
}

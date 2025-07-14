export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white animate-pulse">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="w-24 h-6 bg-gray-800 rounded"></div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <div className="w-16 h-4 bg-gray-800 rounded"></div>
              <div className="w-20 h-4 bg-gray-800 rounded"></div>
              <div className="w-16 h-4 bg-gray-800 rounded"></div>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-7xl mx-auto">
          <div className="w-60 h-20 bg-gray-700 rounded mb-4"></div>
          <div className="w-96 h-6 bg-gray-700 rounded mb-6"></div>
          <div className="flex items-center gap-4">
            <div className="w-32 h-12 bg-gray-700 rounded"></div>
            <div className="w-32 h-12 bg-gray-700 rounded"></div>
          </div>
        </div>
      </section>

      {/* Movie Rows */}
      <main className="relative -mt-20 z-10 p-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 w-40 h-8 bg-gray-800 rounded"></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <div className="w-full aspect-video bg-gray-800 rounded-lg"></div>
            <div className="w-full aspect-video bg-gray-800 rounded-lg"></div>
            <div className="w-full aspect-video bg-gray-800 rounded-lg"></div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 w-40 h-8 bg-gray-800 rounded"></h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            <div className="w-full aspect-video bg-gray-800 rounded-lg"></div>
            <div className="w-full aspect-video bg-gray-800 rounded-lg"></div>
            <div className="w-full aspect-video bg-gray-800 rounded-lg"></div>
          </div>
        </section>
      </main>
    </div>
  )
}

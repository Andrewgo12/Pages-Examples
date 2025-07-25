export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex animate-pulse">
      {/* Workspace Sidebar */}
      <aside className="w-20 bg-gray-950 flex flex-col items-center py-4 space-y-3">
        <div className="w-12 h-12 rounded-lg bg-blue-600"></div>
        <div className="w-12 h-12 rounded-lg bg-gray-800"></div>
        <div className="w-12 h-12 rounded-lg bg-gray-800"></div>
        <div className="w-12 h-12 rounded-lg bg-gray-800"></div>
      </aside>

      {/* Channel/DM Sidebar */}
      <aside className="w-64 bg-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-700 flex items-center justify-between">
          <div className="w-32 h-6 bg-gray-700 rounded"></div>
          <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          <div className="space-y-1 mb-4">
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
          </div>

          <div className="space-y-1">
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
            <div className="w-full h-8 bg-gray-700 rounded"></div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div>
              <div className="w-20 h-4 bg-gray-700 rounded"></div>
              <div className="w-16 h-3 bg-gray-700 rounded mt-1"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
          </div>
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-gray-700 p-4 border-b border-gray-600 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
            <div className="w-32 h-6 bg-gray-600 rounded"></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            <div className="w-32 h-8 bg-gray-600 rounded"></div>
            <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div>
                <div className="w-32 h-4 bg-gray-700 rounded mb-1"></div>
                <div className="w-full h-6 bg-gray-700 rounded"></div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
              <div>
                <div className="w-32 h-4 bg-gray-700 rounded mb-1"></div>
                <div className="w-full h-6 bg-gray-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-gray-700 p-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          <div className="flex-1 h-10 bg-gray-600 rounded-lg"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
        </div>
      </main>
    </div>
  )
}

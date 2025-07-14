export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 flex animate-pulse">
      {/* Left Sidebar (Chats List) */}
      <aside className="w-80 bg-white border-r flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b">
          <div className="w-full h-8 bg-gray-200 rounded"></div>
        </div>

        {/* Chats List */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center gap-3 p-4 border-b bg-gray-100">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <div className="w-32 h-4 bg-gray-200 rounded mb-1"></div>
              <div className="w-48 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 border-b bg-gray-50">
            <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
            <div className="flex-1">
              <div className="w-32 h-4 bg-gray-200 rounded mb-1"></div>
              <div className="w-48 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Section (Chat Window) */}
      <main className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="bg-white p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <div className="w-32 h-4 bg-gray-200 rounded mb-1"></div>
              <div className="w-20 h-4 bg-gray-200 rounded"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto bg-[url('/whatsapp-bg.png')] bg-cover bg-center">
          <div className="space-y-4">
            <div className="flex justify-start">
              <div className="w-48 h-12 bg-white rounded-lg shadow-sm"></div>
            </div>
            <div className="flex justify-end">
              <div className="w-48 h-12 bg-green-200 rounded-lg shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white p-4 border-t flex items-center gap-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded-full"></div>
          <div className="w-10 h-10 bg-green-500 rounded-full"></div>
        </div>
      </main>
    </div>
  )
}

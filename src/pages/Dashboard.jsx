export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Top Navbar */}
      <nav className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 bg-gray-900 gap-2 sm:gap-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-red-600">NETFLIX</h1>
        
        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-0">
          <button className="bg-gray-700 px-3 sm:px-4 py-2 rounded-md font-medium hover:bg-gray-600 transition text-sm sm:text-base">
            Welcome
          </button>
          <button className="bg-red-600 px-3 sm:px-4 py-2 rounded-md font-medium hover:bg-red-700 transition text-sm sm:text-base">
            Logout
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4 sm:px-0 py-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
          Welcome to your Dashboard 🎉
        </h2>
        <p className="text-sm sm:text-lg text-gray-400 max-w-md sm:max-w-lg">
          Enjoy your personalized Netflix experience. Browse, watch, and manage your account.
        </p>
      </main>
    </div>
  );
}
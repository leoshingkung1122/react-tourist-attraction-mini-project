function Header({search, setSearch}) {
    return (
        <>
            {/* Header Section */}
            <div className="text-center py-8 sm:py-12 px-4 sm:px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-6 sm:mb-8 sriracha-regular
                "   style={{
                    animation: 'fade-in 2s ease-out forwards'
                  }}>
                    เที่ยวไหนดี
                </h1>
                
                {/* Search Bar */}
                <div className="max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto relative">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="หาที่เกี่ยวแล้วไปกัน ..."
                            className="w-full bg-white/50 px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors duration-200 shadow-md">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-b-2 border-gray-200 mx-4 sm:mx-8 lg:mx-12"></div>
        </>
    )
}

export default Header;
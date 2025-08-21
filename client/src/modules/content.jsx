function Content({data}) {

    return (
        <>
        {/* Main Content Section */}
        <main className="min-h-screen w-full">
        <div className="backdrop-blur-sm bg-white/50 min-h-screen w-full">
        <div className="max-w-3xl sm:max-w-4xl lg:max-w-6xl mx-auto px-3 sm:px-5 lg:px-6 py-6 sm:py-8 flex flex-col items-center justify-center gap-6">
                {data.map((item,index) => (
                    <div key={item.eid} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.01] transition-all duration-300 animate-slide-up">
                    <div className="flex flex-col md:flex-row relative">
                        {/* Main Image */}
                        <div className="w-full flex flex-col justify-center items-center md:px-5 md:py-5 md:w-2/5 relative overflow-hidden object-cover group">
                            <img
                                src={item.photos[0]}
                                alt={item.title}
                                className="w-full md:rounded-2xl h-48 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-3/5 p-3 sm:p-4 lg:p-5 flex flex-col justify-between">
                            <div>
                                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 leading-tight hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                    {item.title}
                                </h2>
                                
                                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-2 sm:line-clamp-2">
                                    {item.description}
                                </p>
                                
                                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 mb-3 sm:mb-4 group underline text-sm sm:text-base cursor-pointer">
                                    อ่านต่อ
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                
                                <div className=" mb-2 flex flex-row items-center">
                                    
                                    <div className="flex flex-wrap gap-1 sm:gap-2">
                                        <span className="text-xs sm:text-sm text-gray-500 font-medium mr-5">หมวด</span>
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="text-xs sm:text-sm text-blue-600 underline cursor-pointer hover:text-blue-800 transition-colors duration-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Thumbnail Images */}
                            <div className="flex gap-2 sm:gap-3">
                                {item.photos.slice(1, 4).map((photo, photoIndex) => (
                                    <div key={photoIndex} className="relative group">
                                        <img
                                            src={photo}
                                            alt={`Thumbnail ${photoIndex + 1}`}
                                            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300 shadow-md"
                                        />
                                        <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Link Icon */}
                        <div className="absolute md:bottom-4 md:top-auto sm:bottom-auto sm:top-4 right-2 top-4 sm:right-3 md:right-2">
                            <div className="bg-blue-500 text-white p-2 sm:p-2 md:p-2 lg:p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-110 hover:rotate-12">
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
            </main>
        </>
    )
}

export default Content;
function Content({data}) {

    return (
        <>
        {/* Main Content Section */}
        <div className="backdrop-blur-sm bg-white/50 h-screen">
        <div className="max-w-4xl sm:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-2 border-red-500">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 animate-slide-up">
                    <div className="flex flex-col md:flex-row relative">
                        {/* Main Image */}
                        <div className="w-full flex flex-col justify-center items-center md:px-7 md:py-7 md:w-3/5 relative overflow-hidden object-cover group">
                            <img
                                src={data.photos[0]}
                                alt={data.title}
                                className="w-full md:rounded-4xl h-64 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                    {data.title}
                                </h2>
                                
                                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3 sm:line-clamp-4">
                                    {data.description}
                                </p>
                                
                                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 mb-4 sm:mb-6 group underline text-sm sm:text-base cursor-pointer">
                                    อ่านต่อ
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                
                                <div className="mb-4 sm:mb-6">
                                    <span className="text-xs sm:text-sm text-gray-500 font-medium">หมวด</span>
                                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                                        {data.tags.map((tag, tagIndex) => (
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
                                {data.photos.slice(1, 4).map((photo, photoIndex) => (
                                    <div key={photoIndex} className="relative group">
                                        <img
                                            src={photo}
                                            alt={`Thumbnail ${photoIndex + 1}`}
                                            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300 shadow-md"
                                        />
                                        <div className="absolute inset-0 bg-black/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Link Icon */}
                        <div className="absolute md:bottom-6 md:top-auto sm:bottom-auto sm:top-6 right-3 top-5 sm:right-4 md:right-2">
                            <div className="bg-blue-500 text-white p-3 sm:p-3 md:p-2 lg:p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-200 transform hover:scale-110 hover:rotate-12">
                                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Content;
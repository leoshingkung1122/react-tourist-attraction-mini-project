import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* 404 Icon */}
                <div className="mb-8">
                    <div className="relative inline-block">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
                            <span className="text-6xl font-bold text-white">404</span>
                        </div>
                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="mb-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 sriracha-regular">
                        อ๊ะ! หลงทางแล้ว
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                        ดูเหมือนว่าคุณจะเดินทางมาถึงสถานที่ที่ไม่มีอยู่ในแผนที่ของเรา
                    </p>
                    <div className="text-sm text-gray-500 mb-8">
                        <p>ไม่ต้องกังวล! เรามีสถานที่ท่องเที่ยวที่น่าสนใจรอคุณอยู่</p>
                    </div>
                </div>

                {/* Travel Icons */}
                <div className="flex justify-center items-center space-x-6 mb-8">
                    <div className="text-4xl animate-bounce">🏝️</div>
                    <div className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🌊</div>
                    <div className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>⛰️</div>
                    <div className="text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>☕</div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span>กลับหน้าหลัก</span>
                    </button>
                    
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-full border-2 border-gray-300 hover:border-blue-400 hover:text-blue-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>ย้อนกลับ</span>
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="mt-12 opacity-30">
                    <div className="flex justify-center space-x-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                </div>

                {/* Fun Message */}
                <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-200">
                    <p className="text-sm text-blue-700 font-medium">
                        💡 เคล็ดลับ: ลองค้นหาสถานที่ท่องเที่ยวที่คุณสนใจในหน้าหลัก!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const mockData = {
    title: "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!",
    eid: "1",
    url: "https://www.wongnai.com/trips/travel-koh-chang",
    description: "วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้ และดำน้ำตื้น รับรอทริปนี้สนุกแน่! เกาะช้าง จังหวัดตราด ที่เที่ยวทะเลใกล้กรุงเทพฯ สามารถเที่ยวกันได้ทุกฤดู เคลียร์งานและวันว่างได้แล้วก็แค่จัดกระเป๋าไปกันได้เลยกับแพลน เที่ยวเกาะช้าง ต้องไปกิน เที่ยว พักที่ไหน? อ่านจบครบที่เดียว! ซึ่งหลายคนสงสัยว่าไปเกาะช้างเที่ยวไหนดี? Wongnai Travel บอกเลยเกาะช้างไม่ได้มีแค่ไปเล่นน้ำทะเล หรือนอนพักริมหาดทรายเท่านั้น เพราะมีกิจกรรมสนุก ๆ รออยู่เพียบ ชนิดที่ไม่ว่างให้นอนอยู่ห้องเฉย ๆ อย่าง เที่ยวชมน้ำตก พายเรือคายัค ล่องเรือมาด ชมธรรมชาติป่าชายเลน ขี่ช้างท่องป่า ตื่นเต้นกับการผจญภัยเหนือยอดไม้ ดำน้ำตื้นชมปะการังและฝูงปลาแบบใกล้ชิด นอกจากนี้ยังมีที่พักเกาะช้าง และร้านอาหารเกาะช้าง มาให้เลือกกันอีกด้วย รับรองทริปนี้กินอิ่ม นอนหลับ เที่ยวสนุกแน่นอน",
    photos: [
      "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg",
      "https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg",
    ],
    tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
  }

function Home() {
    return (
        <div className="min-h-screen bg-white">
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
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-2 border-blue-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-300 transform hover:scale-105 shadow-lg"
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

            {/* Main Content Section */}
            <div className="max-w-4xl sm:max-w-5xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-2 border-red-500">
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-300 animate-slide-up border-2 border-blue-500">
                    <div className="flex flex-col md:flex-row relative">
                        {/* Main Image */}
                        <div className="w-full flex flex-col justify-center items-center md:px-7 md:py-7 md:w-3/5 relative overflow-hidden object-cover group">
                            <img
                                src={mockData.photos[0]}
                                alt={mockData.title}
                                className="w-full md:rounded-4xl h-64 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight hover:text-blue-600 transition-colors duration-200">
                                    {mockData.title}
                                </h2>
                                
                                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3 sm:line-clamp-4">
                                    {mockData.description}
                                </p>
                                
                                <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 mb-4 sm:mb-6 group underline text-sm sm:text-base">
                                    อ่านต่อ
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                                
                                <div className="mb-4 sm:mb-6">
                                    <span className="text-xs sm:text-sm text-gray-500 font-medium">หมวด</span>
                                    <div className="flex flex-wrap gap-1 sm:gap-2 mt-1 sm:mt-2">
                                        {mockData.tags.map((tag, tagIndex) => (
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
                                {mockData.photos.slice(1, 4).map((photo, photoIndex) => (
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
    );
}

export default Home;
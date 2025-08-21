import { useState,useEffect } from 'react';

function Filter({search, setSearch}) {
    const [selectedCategories, setSelectedCategories] = useState([]);

    // หมวดหมู่ตามที่คุณต้องการ
    const categories = [
        { id: 1, name: 'เกาะ', icon: '🏝️', color: 'from-blue-400 to-cyan-500' },
        { id: 2, name: 'ทะเล', icon: '🌊', color: 'from-blue-500 to-indigo-600' },
        { id: 3, name: 'ธรรมชาติ', icon: '🌿', color: 'from-green-400 to-emerald-500' },
        { id: 4, name: 'จุดชมวิว', icon: '👁️', color: 'from-purple-400 to-pink-500' },
        { id: 5, name: 'คาเฟ่', icon: '☕', color: 'from-amber-400 to-orange-500' },
        { id: 6, name: 'จุดถ่ายรูป', icon: '📸', color: 'from-pink-400 to-rose-500' },
        { id: 7, name: 'เที่ยวใกล้กรุง', icon: '🏙️', color: 'from-gray-400 to-slate-500' },
        { id: 8, name: 'หมู่บ้าน', icon: '🏘️', color: 'from-yellow-400 to-amber-500' },
        { id: 9, name: 'ภูเขา', icon: '⛰️', color: 'from-stone-400 to-neutral-500' },
        { id: 10, name: 'ต่างประเทศ', icon: '✈️', color: 'from-violet-400 to-purple-500' },
        { id: 11, name: 'หิมะ', icon: '❄️', color: 'from-sky-400 to-blue-500' }
    ];

    const handleCategoryClick = (category) => {
        if (selectedCategories.find(cat => cat.id === category.id)) {
            // ถ้าเลือกหมวดหมู่ที่เลือกแล้ว ให้ลบออก
            setSelectedCategories(prev => prev.filter(cat => cat.id !== category.id));
        } else {
            // ถ้าเลือกหมวดหมู่ใหม่ ให้เพิ่มเข้าไป
            setSelectedCategories(prev => [...prev, category]);
        } 
    };

    useEffect(() => {
        setSearch(selectedCategories.map(cat => cat.name).join(" "));
    }, [selectedCategories]);

    return (
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            {/* Filter Header */}
            <div className="text-center mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-1">
                    เลือกหมวดหมู่ที่สนใจ
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                    คลิกเพื่อเลือกหมวดหมู่ที่ต้องการ
                </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-2 sm:gap-3 mb-1">
                {categories.map((category) => {
                    const isSelected = selectedCategories.find(cat => cat.id === category.id);
                    return (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryClick(category)}
                            className={`group relative flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl border transition-all duration-300 transform hover:scale-105 ${
                                isSelected
                                    ? 'border-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md shadow-blue-200/50'
                                    : 'border-gray-200 bg-white/70 backdrop-blur-sm hover:border-gray-300 hover:bg-white/90 hover:shadow-sm'
                            }`}
                        >
                            {/* Icon with gradient background when selected */}
                            <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-1.5 transition-all duration-300 ${
                                isSelected 
                                    ? `bg-gradient-to-br ${category.color} shadow-md` 
                                    : 'bg-gray-50 group-hover:bg-gray-100'
                            }`}>
                                <span className={`text-lg sm:text-xl transition-transform duration-300 ${
                                    isSelected ? 'scale-110' : 'group-hover:scale-110'
                                }`}>
                                    {category.icon}
                                </span>
                            </div>
                            
                            {/* Category Name */}
                            <div className={`text-xs font-medium text-center leading-tight transition-colors duration-300 ${
                                isSelected ? 'text-blue-700' : 'text-gray-700 group-hover:text-gray-900'
                            }`}>
                                {category.name}
                            </div>
                            
                            {/* Selection Indicator */}
                            {isSelected && (
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md animate-pulse">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>

        </div>
    );
}

export default Filter;
'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

interface FeaturedItem {
  id: string
  title: string
  subtitle: string
  image: string
  highlight: string
  badge: string
}

interface FeaturedSectionProps {
  featured: FeaturedItem[]
}

export function FeaturedSection({ featured }: FeaturedSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  // 自动轮播
  useEffect(() => {
    if (featured.length <= 1) return
    
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featured.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [featured.length])

  if (!featured.length) return null

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">精选推荐</h2>
        <p className="text-gray-600">编钟官方推荐的优质MCP Server</p>
      </div>

      {/* 轮播容器 */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-chime-gold/10 to-chime-copper/10">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {featured.map((item, index) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <Link href={`/mcp-market/${item.id}`}>
                <div className="relative p-8 md:p-12 cursor-pointer group">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* 左侧内容 */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="inline-block px-3 py-1 bg-chime-gold text-white text-sm font-medium rounded-full mb-4">
                        {item.badge}
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-chime-gold transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-lg text-gray-600 mb-6 max-w-2xl">
                        {item.subtitle}
                      </p>
                      
                      <div className="flex items-center justify-center md:justify-start gap-4">
                        <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700">
                          {item.highlight}
                        </span>
                        <span className="text-chime-gold font-medium group-hover:underline">
                          立即查看 →
                        </span>
                      </div>
                    </div>
                    
                    {/* 右侧图标 */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-full shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="text-4xl md:text-5xl">
                          {item.id === 'fetch' && '🌐'}
                          {item.id === 'amap-maps' && '📍'}
                          {item.id === 'alipay' && '💰'}
                          {item.id === 'minimax' && '🎬'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* 指示器 */}
        {featured.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {featured.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-chime-gold' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* 左右箭头 */}
        {featured.length > 1 && (
          <>
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % featured.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  )
} 
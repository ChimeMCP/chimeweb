'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export function SearchBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [query, setQuery] = useState(searchParams.get('q') || '')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams)
    if (query.trim()) {
      params.set('q', query.trim())
    } else {
      params.delete('q')
    }
    router.push(`/mcp-market?${params.toString()}`)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="搜索MCP Server名称、描述或标签..."
            className="block w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-chime-gold focus:border-transparent bg-white shadow-sm placeholder-gray-500"
          />
          
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
            <button
              type="submit"
              className="px-6 py-2 bg-chime-gold text-white rounded-lg font-medium hover:bg-chime-gold/90 transition-colors"
            >
              搜索
            </button>
          </div>
        </div>
      </form>
      
      {/* 搜索建议 */}
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <span className="text-sm text-gray-500">热门搜索：</span>
        {['网页抓取', '地图服务', '搜索引擎', '支付', '语音合成'].map((tag) => (
          <button
            key={tag}
            onClick={() => setQuery(tag)}
            className="px-3 py-1 text-sm text-chime-gold hover:text-chime-gold/80 hover:underline transition-colors"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
} 
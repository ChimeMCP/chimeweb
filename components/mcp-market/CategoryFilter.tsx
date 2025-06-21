'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { Category } from '@/lib/types'

interface CategoryFilterProps {
  categories: Category[]
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get('category')
  const [showAll, setShowAll] = useState(false)

  const handleCategoryClick = (categoryId: string | null) => {
    const params = new URLSearchParams(searchParams)
    if (categoryId) {
      params.set('category', categoryId)
    } else {
      params.delete('category')
    }
    params.delete('page') // 重置页码
    router.push(`/mcp-market?${params.toString()}`)
  }

  const displayCategories = showAll ? categories : categories.slice(0, 8)

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">浏览分类</h2>
        <p className="text-gray-600">按类型发现适合的MCP Server</p>
      </div>

      {/* 全部分类按钮 */}
      <div className="flex justify-center">
        <button
          onClick={() => handleCategoryClick(null)}
          className={`px-6 py-3 rounded-xl font-medium transition-all ${
            !currentCategory
              ? 'bg-chime-gold text-white shadow-lg'
              : 'bg-white text-gray-700 border border-gray-200 hover:border-chime-gold hover:text-chime-gold'
          }`}
        >
          <span className="mr-2">🌟</span>
          全部分类
        </button>
      </div>

      {/* 分类网格 */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {displayCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`p-4 rounded-xl text-left transition-all hover:scale-105 ${
              currentCategory === category.id
                ? 'bg-chime-gold text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-chime-gold hover:shadow-md'
            }`}
          >
            <div className="text-2xl mb-2">{category.icon}</div>
            <div className="font-semibold text-sm mb-1">{category.name}</div>
            <div className={`text-xs ${
              currentCategory === category.id ? 'text-white/80' : 'text-gray-500'
            }`}>
              {category.count} 个工具
            </div>
          </button>
        ))}
      </div>

      {/* 展开/收起按钮 */}
      {categories.length > 8 && (
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 text-chime-gold hover:text-chime-gold/80 font-medium transition-colors"
          >
            {showAll ? '收起分类' : `查看全部 ${categories.length} 个分类`}
          </button>
        </div>
      )}
    </div>
  )
} 
'use client'

import { Suspense, useEffect, useState } from 'react'
import { getMarketIndex, getCategories, getFeaturedConfig, getMCPServers } from '@/lib/mcp-data'
import { MCPMarketHero } from '@/components/mcp-market/MCPMarketHero'
import { CategoryFilter } from '@/components/mcp-market/CategoryFilter'
import { FeaturedSection } from '@/components/mcp-market/FeaturedSection'
import { ServerList } from '@/components/mcp-market/ServerList'
import { SearchBar } from '@/components/mcp-market/SearchBar'
import type { MCPMarketIndex, Category, MCPServer, PaginationInfo, FeaturedItem } from '@/lib/types'

interface MCPMarketData {
  marketIndex: MCPMarketIndex
  categories: Category[]
  featuredConfig: { featured: FeaturedItem[] }
  serversData: {
    servers: MCPServer[]
    pagination: PaginationInfo
  }
}

export default function MCPMarketPage() {
  const [data, setData] = useState<MCPMarketData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        // 并行获取所有数据
        const [marketIndex, categories, featuredConfig, serversData] = await Promise.all([
          getMarketIndex(),
          getCategories(),
          getFeaturedConfig(),
          getMCPServers({}, { page: 1, pageSize: 12 })
        ])

        setData({
          marketIndex,
          categories,
          featuredConfig,
          serversData
        })
      } catch (err) {
        console.error('Failed to load MCP market data:', err)
        setError('加载数据失败，请刷新页面重试')
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-chime-gold mx-auto mb-4"></div>
          <p className="text-gray-600">加载中...</p>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || '数据加载失败'}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-chime-gold text-white rounded-lg hover:bg-chime-bronze transition-colors"
          >
            重新加载
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <MCPMarketHero 
        totalServers={data.marketIndex.totalServers}
        totalCategories={data.marketIndex.totalCategories}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 搜索栏 */}
        <div className="mb-8">
          <SearchBar />
        </div>

        {/* 分类导航 */}
        <div className="mb-12">
          <CategoryFilter categories={data.categories} />
        </div>

        {/* 精选推荐 */}
        <div className="mb-12">
          <FeaturedSection featured={data.featuredConfig.featured} />
        </div>

        {/* 服务器列表 */}
        <div>
          <Suspense fallback={<div className="text-center py-8">加载中...</div>}>
            <ServerList 
              servers={data.serversData.servers}
              pagination={data.serversData.pagination}
            />
          </Suspense>
        </div>
      </div>
    </div>
  )
} 
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { getMCPServers } from '@/lib/mcp-data'
import type { MCPServer } from '@/lib/types'

interface RelatedServersProps {
  currentServerId: string
  category: string
}

export function RelatedServers({ currentServerId, category }: RelatedServersProps) {
  const [relatedServers, setRelatedServers] = useState<MCPServer[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadRelatedServers() {
      try {
        const { servers } = await getMCPServers(
          { category, sortBy: 'popularity' },
          { page: 1, pageSize: 6 }
        )
        
        // 过滤掉当前服务器
        const filtered = servers.filter(server => server.id !== currentServerId)
        setRelatedServers(filtered.slice(0, 4))
      } catch (error) {
        console.error('Failed to load related servers:', error)
      } finally {
        setLoading(false)
      }
    }

    loadRelatedServers()
  }, [currentServerId, category])

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">相关推荐</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-lg"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 快速安装 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">🚀 快速安装</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">1. 安装MCP Server</h4>
            <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm">
              <code>npm install @modelcontextprotocol/fetch</code>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">2. 添加到编钟配置</h4>
            <button className="w-full px-4 py-2 bg-chime-gold text-white rounded-lg font-medium hover:bg-chime-gold/90 transition-colors">
              一键生成配置
            </button>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">3. 开始使用</h4>
            <div className="text-sm text-gray-600">
              重启编钟后即可在工作流中使用此MCP Server
            </div>
          </div>
        </div>
      </div>

      {/* 相关推荐 */}
      {relatedServers.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900 mb-4">相关推荐</h3>
          <div className="space-y-4">
            {relatedServers.map((server) => (
              <Link key={server.id} href={`/mcp-market/${server.id}`}>
                <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="w-10 h-10 bg-gradient-to-br from-chime-gold/20 to-chime-copper/20 rounded-lg flex items-center justify-center">
                    <span className="text-sm">
                      {server.category === 'browser-automation' && '🌐'}
                      {server.category === 'search-tools' && '🔍'}
                      {server.category === 'location-services' && '📍'}
                      {server.category === 'entertainment-media' && '🎬'}
                      {server.category === 'finance' && '💰'}
                      {server.category === 'schedule-management' && '📅'}
                      {!['browser-automation', 'search-tools', 'location-services', 'entertainment-media', 'finance', 'schedule-management'].includes(server.category) && '🔧'}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-gray-900 group-hover:text-chime-gold transition-colors truncate">
                      {server.name}
                    </div>
                    <div className="text-sm text-gray-500 truncate">
                      {server.description}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-yellow-400">★</span>
                      <span className="text-xs text-gray-500">
                        {server.reviews.rating.toFixed(1)}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">
                        {server.stats.downloads.toLocaleString()} 下载
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <Link 
              href={`/mcp-market?category=${category}`}
              className="block text-center text-sm text-chime-gold hover:text-chime-gold/80 transition-colors"
            >
              查看更多同类工具 →
            </Link>
          </div>
        </div>
      )}

      {/* 收录合集 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-4">📚 收录合集</h3>
        <div className="space-y-3">
          <Link href="/mcp-market/collections/starter-pack">
            <div className="p-3 border border-gray-200 rounded-lg hover:border-chime-gold hover:shadow-sm transition-all cursor-pointer">
              <div className="font-medium text-gray-900">🚀 新手入门必备包</div>
              <div className="text-sm text-gray-500 mt-1">
                精选10个最实用的MCP Server
              </div>
              <div className="flex items-center gap-2 mt-2 text-xs text-gray-400">
                <span>👁 15.6K 浏览</span>
                <span>•</span>
                <span>❤️ 892 收藏</span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 帮助和支持 */}
      <div className="bg-gradient-to-r from-chime-gold/10 to-chime-copper/10 rounded-xl p-6">
        <h3 className="font-semibold text-gray-900 mb-4">💡 需要帮助？</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2">
            <span>📖</span>
            <a href="/docs" className="text-chime-gold hover:underline">
              查看完整文档
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>💬</span>
            <a href="/community" className="text-chime-gold hover:underline">
              加入社区讨论
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>🐛</span>
            <a href="https://github.com/your-repo/issues" className="text-chime-gold hover:underline">
              反馈问题
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 
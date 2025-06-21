'use client'

import Link from 'next/link'
import type { MCPServer, PaginationInfo } from '@/lib/types'

interface ServerListProps {
  servers: MCPServer[]
  pagination: PaginationInfo
}

function ServerCard({ server }: { server: MCPServer }) {
  return (
    <Link href={`/mcp-market/${server.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-chime-gold/50 transition-all duration-200 cursor-pointer group h-full">
        {/* 头部 */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-chime-gold/20 to-chime-copper/20 rounded-lg flex items-center justify-center">
              <span className="text-xl">
                {server.category === 'browser-automation' && '🌐'}
                {server.category === 'search-tools' && '🔍'}
                {server.category === 'location-services' && '📍'}
                {server.category === 'entertainment-media' && '🎬'}
                {server.category === 'finance' && '💰'}
                {server.category === 'schedule-management' && '📅'}
                {!['browser-automation', 'search-tools', 'location-services', 'entertainment-media', 'finance', 'schedule-management'].includes(server.category) && '🔧'}
              </span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-chime-gold transition-colors">
                {server.name}
              </h3>
              <p className="text-sm text-gray-500">{server.author.name}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★</span>
            <span className="text-sm font-medium text-gray-700">
              {server.reviews.rating.toFixed(1)}
            </span>
          </div>
        </div>

        {/* 描述 */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {server.description}
        </p>

        {/* 标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {server.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
          {server.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
              +{server.tags.length - 3}
            </span>
          )}
        </div>

        {/* 底部统计 */}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <span>📥 {server.stats.downloads.toLocaleString()}</span>
            <span>👁 {server.stats.views.toLocaleString()}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs ${
              server.type === 'hosted' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {server.type === 'hosted' ? 'Hosted' : 'Local'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

function Pagination({ pagination }: { pagination: PaginationInfo }) {
  if (pagination.totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <button
        disabled={pagination.page === 1}
        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        上一页
      </button>
      
      <div className="flex items-center space-x-1">
        {Array.from({ length: Math.min(5, pagination.totalPages) }, (_, i) => {
          const page = i + 1
          return (
            <button
              key={page}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                page === pagination.page
                  ? 'bg-chime-gold text-white'
                  : 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          )
        })}
      </div>
      
      <button
        disabled={pagination.page === pagination.totalPages}
        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        下一页
      </button>
    </div>
  )
}

export function ServerList({ servers, pagination }: ServerListProps) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          MCP Server ({pagination.total.toLocaleString()})
        </h2>
        
        <div className="flex items-center space-x-4">
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-chime-gold focus:border-transparent">
            <option value="popularity">按热度排序</option>
            <option value="recent">按更新时间</option>
            <option value="rating">按评分排序</option>
            <option value="downloads">按下载量</option>
          </select>
        </div>
      </div>

      {/* 服务器网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servers.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>

      {/* 分页 */}
      <Pagination pagination={pagination} />
    </div>
  )
} 
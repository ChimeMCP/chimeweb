'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { MCPServer, Category } from '@/lib/types'
import { generateChimeConfig } from '@/lib/mcp-data'

interface MCPServerDetailProps {
  server: MCPServer
  category?: Category
}

export function MCPServerDetail({ server, category }: MCPServerDetailProps) {
  const [activeTab, setActiveTab] = useState('overview')
  const [showConfig, setShowConfig] = useState(false)

  const tabs = [
    { id: 'overview', name: '服务详情', icon: '📋' },
    { id: 'tools', name: '工具列表', icon: '🔧' },
    { id: 'installation', name: '安装配置', icon: '⚙️' },
    { id: 'examples', name: '使用示例', icon: '💡' },
    { id: 'reviews', name: '评价反馈', icon: '⭐' },
  ]

  const handleAddToChime = () => {
    const config = generateChimeConfig(server)
    navigator.clipboard.writeText(config)
    setShowConfig(true)
    setTimeout(() => setShowConfig(false), 3000)
  }

  return (
    <div className="space-y-6">
      {/* 返回按钮 */}
      <div>
        <Link 
          href="/mcp-market"
          className="inline-flex items-center text-chime-gold hover:text-chime-gold/80 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回市场
        </Link>
      </div>

      {/* 头部信息 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 lg:p-8">
        <div className="space-y-6">
          {/* 顶部：图标、标题和类型标签 */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-chime-gold/20 to-chime-copper/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl lg:text-3xl">
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
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 truncate">{server.name}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium self-start ${
                  server.type === 'hosted' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {server.type === 'hosted' ? 'Hosted' : 'Local'}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 leading-relaxed">{server.description}</p>
              
              <div className="flex flex-wrap items-center gap-3 lg:gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <span>👤</span>
                  <span className="truncate">{server.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📦</span>
                  <span>v{server.technical.version}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>📄</span>
                  <span>{server.technical.license}</span>
                </div>
                {category && (
                  <div className="flex items-center gap-1">
                    <span>{category.icon}</span>
                    <span className="truncate">{category.name}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* 底部：统计数据和操作按钮 */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pt-4 border-t border-gray-100">
            {/* 统计数据 */}
            <div className="flex items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-chime-gold">
                  {server.stats.downloads.toLocaleString()}
                </div>
                <div className="text-xs lg:text-sm text-gray-500">下载量</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-chime-copper flex items-center justify-center gap-1">
                  <span>★</span>
                  <span>{server.reviews.rating.toFixed(1)}</span>
                </div>
                <div className="text-xs lg:text-sm text-gray-500">{server.reviews.count} 评价</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-chime-bronze">
                  {server.stats.views.toLocaleString()}
                </div>
                <div className="text-xs lg:text-sm text-gray-500">浏览量</div>
              </div>
            </div>
            
            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={handleAddToChime}
                className="flex-1 lg:flex-none px-6 py-3 bg-chime-gold text-white rounded-lg font-medium hover:bg-chime-gold/90 transition-colors text-center"
              >
                🔔 添加到编钟
              </button>
              
              {server.technical.repository && (
                <a
                  href={server.technical.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 lg:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 配置复制提示 */}
        {showConfig && (
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-2 text-green-700">
              <span>✅</span>
              <span>编钟配置已复制到剪贴板！</span>
            </div>
          </div>
        )}
      </div>

      {/* 标签 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-semibold text-gray-900 mb-3">标签</h3>
        <div className="flex flex-wrap gap-2">
          {server.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-chime-gold hover:text-white transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Tab导航 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-shrink-0 px-4 lg:px-6 py-4 text-sm font-medium transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-chime-gold text-white'
                  : 'text-gray-700 hover:text-chime-gold hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              <span className="hidden sm:inline">{tab.name}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">详细描述</h3>
                <p className="text-gray-600 leading-relaxed">{server.longDescription}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">技术要求</h3>
                <ul className="space-y-2">
                  {server.technical.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-chime-gold rounded-full"></span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="space-y-6">
              {server.tools.map((tool, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{tool.name}</h4>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  
                  <div>
                    <h5 className="font-medium text-gray-900 mb-2">参数列表</h5>
                    <div className="space-y-2">
                      {tool.parameters.map((param, paramIndex) => (
                        <div key={paramIndex} className="flex items-start gap-3 text-sm">
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            param.required 
                              ? 'bg-red-100 text-red-700' 
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {param.required ? '必需' : '可选'}
                          </span>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">
                              {param.name} ({param.type})
                            </div>
                            <div className="text-gray-600">{param.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'installation' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">安装命令</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
                  <code>{server.installation.command}</code>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">配置示例</h3>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
                    {JSON.stringify(server.installation.config, null, 2)}
                  </pre>
                </div>
              </div>
              
              {server.installation.notes && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500">💡</span>
                    <div className="text-blue-700">{server.installation.notes}</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-6">
              {server.examples.map((example, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{example.title}</h4>
                  <p className="text-gray-600 mb-4">{example.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">请求示例</h5>
                      <div className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
                        <pre>{example.code}</pre>
                      </div>
                    </div>
                    
                    {example.result && (
                      <div>
                        <h5 className="font-medium text-gray-900 mb-2">响应结果</h5>
                        <div className="bg-green-50 border border-green-200 p-3 rounded text-sm">
                          {example.result}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {Object.entries(server.reviews.distribution).reverse().map(([stars, count]) => (
                  <div key={stars} className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <span>{stars}</span>
                      <span className="text-yellow-400">★</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{count}</div>
                    <div className="text-sm text-gray-500">评价</div>
                  </div>
                ))}
              </div>
              
              <div className="text-center py-8 text-gray-500">
                <div className="text-4xl mb-4">💬</div>
                <div>用户评价功能即将上线</div>
                <div className="text-sm">敬请期待更多用户反馈和使用心得</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 
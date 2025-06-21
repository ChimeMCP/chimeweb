'use client'

interface MCPMarketHeroProps {
  totalServers: number
  totalCategories: number
}

export function MCPMarketHero({ totalServers, totalCategories }: MCPMarketHeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-chime-gold/10 via-chime-copper/10 to-chime-bronze/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* 主标题 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="chime-text-gradient">MCP市场</span>
          </h1>
          
          {/* 副标题 */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            发现强大的MCP Server，一键集成到编钟工作流
          </p>
          
          {/* 统计数据 */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chime-gold mb-2">
                {totalServers.toLocaleString()}+
              </div>
              <div className="text-gray-600">MCP Server</div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chime-copper mb-2">
                {totalCategories}
              </div>
              <div className="text-gray-600">个分类</div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
            
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-chime-bronze mb-2">
                98.5%
              </div>
              <div className="text-gray-600">成功率</div>
            </div>
          </div>
          
          {/* 特色标签 */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              🔧 一键集成
            </span>
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              ⚡ 高质量工具
            </span>
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              🎯 精准搜索
            </span>
            <span className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-gray-200">
              🌟 社区驱动
            </span>
          </div>
        </div>
      </div>
      
      {/* 装饰性背景元素 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-chime-gold/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-chime-copper/5 blur-3xl"></div>
      </div>
    </div>
  )
} 
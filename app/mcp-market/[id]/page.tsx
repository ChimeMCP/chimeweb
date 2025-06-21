import { notFound } from 'next/navigation'
import { getMCPServerById, getCategories } from '@/lib/mcp-data'
import { MCPServerDetail } from '@/components/mcp-market/MCPServerDetail'
import { RelatedServers } from '@/components/mcp-market/RelatedServers'

interface PageProps {
  params: {
    id: string
  }
}

export default async function MCPServerDetailPage({ params }: PageProps) {
  const [server, categories] = await Promise.all([
    getMCPServerById(params.id),
    getCategories()
  ])

  if (!server) {
    notFound()
  }

  const currentCategory = categories.find(cat => cat.id === server.category)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* 主内容区 */}
          <div className="lg:col-span-2 space-y-6">
            <MCPServerDetail server={server} category={currentCategory} />
          </div>
          
          {/* 侧边栏 */}
          <div className="lg:col-span-1 lg:sticky lg:top-6 lg:self-start">
            <RelatedServers 
              currentServerId={server.id}
              category={server.category}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

// 生成静态路径（可选，用于静态生成）
export async function generateStaticParams() {
  // 返回已知的MCP Server ID列表
  return [
    { id: 'fetch' },
    { id: 'amap-maps' },
    { id: 'bing-cn' },
    { id: 'allvoicelab' },
    { id: '12306-mcp' },
    { id: 'alipay' },
  ]
} 
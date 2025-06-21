import { cn } from "./utils"

// 现有工具函数保持不变
export { cn }

// MCP市场数据类型定义

export interface MCPServer {
  id: string                    // 唯一标识
  name: string                  // 显示名称
  packageName: string           // 包名 (@modelcontextprotocol/fetch)
  description: string           // 简短描述
  longDescription: string       // 详细描述
  category: string              // 主分类
  tags: string[]               // 标签列表
  type: 'hosted' | 'local'     // 服务类型
  
  // 统计信息
  stats: {
    downloads: number           // 下载次数
    stars: number              // 点赞数
    views: number              // 浏览次数
    lastUpdated: string        // 最后更新时间
  }
  
  // 作者信息
  author: {
    name: string               // 作者名称
    avatar?: string            // 作者头像
    url?: string               // 作者链接
  }
  
  // 技术信息
  technical: {
    repository?: string        // GitHub仓库
    documentation?: string     // 文档链接
    homepage?: string          // 主页链接
    license: string           // 开源协议
    version: string           // 版本号
    requirements: string[]    // 依赖要求
  }
  
  // 工具信息
  tools: Array<{
    name: string              // 工具名称
    description: string       // 工具描述
    parameters: Array<{       // 参数列表
      name: string
      type: string
      required: boolean
      description: string
    }>
  }>
  
  // 安装配置
  installation: {
    command: string           // 安装命令
    config: object           // 配置示例
    notes?: string           // 安装说明
  }
  
  // 使用示例
  examples: Array<{
    title: string
    description: string
    code: string
    result?: string
  }>
  
  // 评价数据
  reviews: {
    rating: number           // 平均评分 (1-5)
    count: number           // 评价数量
    distribution: {         // 评分分布
      5: number
      4: number
      3: number
      2: number
      1: number
    }
  }
}

export interface Category {
  id: string
  name: string
  description: string
  icon: string
  count: number
  featured: string[]        // 推荐的MCP Server ID列表
}

export interface Collection {
  id: string
  name: string
  description: string
  cover?: string
  author: {
    name: string
    avatar?: string
    url?: string
  }
  servers: string[]         // MCP Server ID列表
  tags: string[]
  featured: boolean
  stats: {
    downloads: number
    stars: number
    views: number
    lastUpdated: string
  }
}

export interface MCPMarketIndex {
  totalServers: number
  totalCategories: number
  lastUpdated: string
  featured: string[]        // 精选MCP Server ID列表
  popular: string[]         // 热门MCP Server ID列表
  recent: string[]          // 最新MCP Server ID列表
}

export interface SearchFilters {
  category?: string
  type?: 'hosted' | 'local'
  tags?: string[]
  sortBy?: 'popularity' | 'recent' | 'rating' | 'downloads'
  query?: string
}

export interface PaginationInfo {
  page: number
  pageSize: number
  total: number
  totalPages: number
} 
export interface FeaturedItem {
  id: string
  title: string
  subtitle: string
  image: string
  highlight: string
  badge: string
}

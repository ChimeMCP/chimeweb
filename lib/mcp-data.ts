import type { 
  MCPServer, 
  Category, 
  Collection, 
  MCPMarketIndex, 
  SearchFilters, 
  PaginationInfo 
} from './types'

// 条件导入fs和path（只在服务端使用）
const getFS = async () => {
  if (typeof window === 'undefined') {
    const { promises: fs } = await import('fs')
    const path = await import('path')
    return { fs, path }
  }
  throw new Error('File system operations are only available on the server side')
}

// 数据路径配置
const getDataPaths = async () => {
  const { path } = await getFS()
  const DATA_DIR = path.join(process.cwd(), 'data')
  const MCP_SERVERS_DIR = path.join(DATA_DIR, 'mcp-servers')
  const COLLECTIONS_DIR = path.join(DATA_DIR, 'collections')
  return { DATA_DIR, MCP_SERVERS_DIR, COLLECTIONS_DIR }
}

/**
 * 读取MCP市场主索引
 */
export async function getMarketIndex(): Promise<MCPMarketIndex> {
  try {
    const { fs } = await getFS()
    const { MCP_SERVERS_DIR } = await getDataPaths()
    const { path } = await getFS()
    const indexPath = path.join(MCP_SERVERS_DIR, 'index.json')
    const data = await fs.readFile(indexPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Failed to load market index:', error)
    // 返回默认数据
    return {
      totalServers: 4004,
      totalCategories: 13,
      lastUpdated: new Date().toISOString(),
      featured: ['fetch', 'amap-maps', 'alipay', 'minimax'],
      popular: ['fetch', 'amap-maps', 'bing-cn', 'allvoicelab', '12306-mcp', 'alipay'],
      recent: ['fetch', 'amap-maps', 'bing-cn', 'allvoicelab', '12306-mcp', 'alipay']
    }
  }
}

/**
 * 读取所有分类
 */
export async function getCategories(): Promise<Category[]> {
  try {
    const { fs } = await getFS()
    const { MCP_SERVERS_DIR } = await getDataPaths()
    const { path } = await getFS()
    const categoriesPath = path.join(MCP_SERVERS_DIR, 'categories.json')
    const data = await fs.readFile(categoriesPath, 'utf-8')
    const result = JSON.parse(data)
    return result.categories || []
  } catch (error) {
    console.error('Failed to load categories:', error)
    // 返回默认分类数据
    return [
      {
        id: "browser-automation",
        name: "浏览器自动化",
        description: "网页自动化、爬虫、浏览器控制等工具",
        icon: "🌐",
        count: 291,
        featured: ["fetch", "playwright-mcp", "crawl-mcp"]
      },
      {
        id: "search-tools",
        name: "搜索工具",
        description: "搜索引擎、信息检索、数据查询工具",
        icon: "🔍",
        count: 597,
        featured: ["bing-cn", "tavily-search", "jina-ai-tools"]
      },
      {
        id: "collaboration",
        name: "交流协作工具",
        description: "团队协作、通信、项目管理工具",
        icon: "🤝",
        count: 229,
        featured: ["slack-mcp", "notion-mcp", "teams-mcp"]
      },
      {
        id: "developer-tools",
        name: "开发者工具",
        description: "代码管理、部署、调试、版本控制工具",
        icon: "⚡",
        count: 1171,
        featured: ["gitlab", "github-mcp", "docker-mcp"]
      },
      {
        id: "entertainment-media",
        name: "娱乐与多媒体",
        description: "音视频处理、游戏、娱乐应用工具",
        icon: "🎬",
        count: 103,
        featured: ["allvoicelab", "minimax", "mobvoi-mcp"]
      },
      {
        id: "file-system",
        name: "文件系统",
        description: "文件管理、存储、同步、备份工具",
        icon: "📁",
        count: 205,
        featured: ["filesystem-mcp", "cloud-storage", "backup-mcp"]
      },
      {
        id: "finance",
        name: "金融",
        description: "支付、交易、金融数据、财务管理工具",
        icon: "💰",
        count: 219,
        featured: ["alipay", "unionpay", "finance-data"]
      },
      {
        id: "knowledge-memory",
        name: "知识管理与记忆",
        description: "笔记、知识库、记忆管理、学习工具",
        icon: "🧠",
        count: 257,
        featured: ["openmemory", "flomo", "obsidian-mcp"]
      },
      {
        id: "location-services",
        name: "位置服务",
        description: "地图、导航、位置查询、地理信息工具",
        icon: "📍",
        count: 69,
        featured: ["amap-maps", "baidu-maps", "location-mcp"]
      },
      {
        id: "culture-arts",
        name: "文化与艺术",
        description: "艺术创作、文化内容、创意工具",
        icon: "🎨",
        count: 43,
        featured: ["art-generator", "culture-mcp", "creative-tools"]
      },
      {
        id: "academic-research",
        name: "学术研究",
        description: "学术资源、研究工具、论文管理、数据分析",
        icon: "📚",
        count: 213,
        featured: ["academic-search", "research-tools", "paper-mcp"]
      },
      {
        id: "schedule-management",
        name: "日程管理",
        description: "日历、提醒、时间管理、任务规划工具",
        icon: "📅",
        count: 52,
        featured: ["calendar-mcp", "time-service", "schedule-tools"]
      },
      {
        id: "others",
        name: "其他",
        description: "其他未分类的实用工具和服务",
        icon: "🔧",
        count: 284,
        featured: ["misc-tools", "utility-mcp", "general-tools"]
      }
    ]
  }
}

/**
 * 根据ID获取单个分类
 */
export async function getCategoryById(id: string): Promise<Category | null> {
  const categories = await getCategories()
  return categories.find(cat => cat.id === id) || null
}

/**
 * 读取精选推荐配置
 */
export async function getFeaturedConfig() {
  try {
    const { fs } = await getFS()
    const { MCP_SERVERS_DIR } = await getDataPaths()
    const { path } = await getFS()
    const featuredPath = path.join(MCP_SERVERS_DIR, 'featured.json')
    const data = await fs.readFile(featuredPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Failed to load featured config:', error)
    return { 
      featured: [
        {
          id: "fetch",
          title: "网页内容抓取神器",
          subtitle: "轻松获取任何网页内容，智能转换为Markdown格式",
          image: "/images/mcp/fetch-banner.jpg",
          highlight: "106K+ 下载量",
          badge: "官方推荐"
        },
        {
          id: "amap-maps",
          title: "高德地图服务",
          subtitle: "专业的地理位置服务，支持路线规划和POI搜索",
          image: "/images/mcp/amap-banner.jpg",
          highlight: "66K+ 下载量",
          badge: "企业级"
        },
        {
          id: "alipay",
          title: "支付宝MCP",
          subtitle: "集成支付宝开放平台，支持交易创建、查询、退款",
          image: "/images/mcp/alipay-banner.jpg",
          highlight: "32K+ 下载量",
          badge: "金融级"
        },
        {
          id: "minimax",
          title: "MiniMax多媒体",
          subtitle: "AI驱动的语音生成、视频制作和图像创建",
          image: "/images/mcp/minimax-banner.jpg",
          highlight: "12K+ 下载量",
          badge: "AI驱动"
        }
      ]
    }
  }
}

/**
 * 根据ID获取MCP Server详情
 */
export async function getMCPServerById(id: string): Promise<MCPServer | null> {
  try {
    const { fs } = await getFS()
    const { MCP_SERVERS_DIR } = await getDataPaths()
    const { path } = await getFS()
    const serverPath = path.join(MCP_SERVERS_DIR, 'servers', `${id}.json`)
    const data = await fs.readFile(serverPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error(`Failed to load MCP server ${id}:`, error)
    return null
  }
}

/**
 * 批量获取MCP Server列表
 */
export async function getMCPServersByIds(ids: string[]): Promise<MCPServer[]> {
  const servers = await Promise.allSettled(
    ids.map(id => getMCPServerById(id))
  )
  
  return servers
    .filter((result): result is PromiseFulfilledResult<MCPServer> => 
      result.status === 'fulfilled' && result.value !== null
    )
    .map(result => result.value)
}

/**
 * 获取分页的MCP Server列表
 */
export async function getMCPServers(
  filters: SearchFilters = {},
  pagination: Partial<PaginationInfo> = {}
): Promise<{
  servers: MCPServer[]
  pagination: PaginationInfo
}> {
  const { page = 1, pageSize = 20 } = pagination
  
  try {
    // 获取所有可用的服务器ID列表
    const index = await getMarketIndex()
    let serverIds: string[] = []
    
    // 根据排序方式获取ID列表
    switch (filters.sortBy) {
      case 'popularity':
        serverIds = index.popular
        break
      case 'recent':
        serverIds = index.recent
        break
      default:
        serverIds = [...index.featured, ...index.popular, ...index.recent]
        // 去重
        serverIds = Array.from(new Set(serverIds))
    }
    
    // 应用分类过滤
    if (filters.category) {
      const allServers = await getMCPServersByIds(serverIds)
      const filteredServers = allServers.filter(server => 
        server.category === filters.category
      )
      serverIds = filteredServers.map(server => server.id)
    }
    
    // 计算分页
    const total = serverIds.length
    const totalPages = Math.ceil(total / pageSize)
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const paginatedIds = serverIds.slice(startIndex, endIndex)
    
    // 获取分页数据
    const servers = await getMCPServersByIds(paginatedIds)
    
    return {
      servers,
      pagination: {
        page,
        pageSize,
        total,
        totalPages
      }
    }
  } catch (error) {
    console.error('Failed to get MCP servers:', error)
    return {
      servers: [],
      pagination: { page: 1, pageSize: 20, total: 0, totalPages: 0 }
    }
  }
}

/**
 * 搜索MCP Server
 */
export async function searchMCPServers(
  query: string,
  filters: Omit<SearchFilters, 'query'> = {},
  pagination: Partial<PaginationInfo> = {}
): Promise<{
  servers: MCPServer[]
  pagination: PaginationInfo
}> {
  // 简单的搜索实现
  const allFilters = { ...filters, query }
  const result = await getMCPServers(allFilters, pagination)
  
  if (!query.trim()) {
    return result
  }
  
  // 根据查询关键词过滤结果
  const filteredServers = result.servers.filter(server => 
    server.name.toLowerCase().includes(query.toLowerCase()) ||
    server.description.toLowerCase().includes(query.toLowerCase()) ||
    server.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  )
  
  return {
    servers: filteredServers,
    pagination: {
      ...result.pagination,
      total: filteredServers.length,
      totalPages: Math.ceil(filteredServers.length / (pagination.pageSize || 20))
    }
  }
}

/**
 * 获取合集详情
 */
export async function getCollectionById(id: string): Promise<Collection | null> {
  try {
    const { fs } = await getFS()
    const { COLLECTIONS_DIR } = await getDataPaths()
    const { path } = await getFS()
    const collectionPath = path.join(COLLECTIONS_DIR, 'collections', `${id}.json`)
    const data = await fs.readFile(collectionPath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error(`Failed to load collection ${id}:`, error)
    return null
  }
}

/**
 * 获取推荐合集列表
 */
export async function getFeaturedCollections(): Promise<Collection[]> {
  try {
    // 简单实现：读取所有合集文件
    const { fs } = await getFS()
    const { COLLECTIONS_DIR } = await getDataPaths()
    const { path } = await getFS()
    const collectionsPath = path.join(COLLECTIONS_DIR, 'collections')
    const files = await fs.readdir(collectionsPath)
    const jsonFiles = files.filter(file => file.endsWith('.json'))
    
    const collections = await Promise.allSettled(
      jsonFiles.map(async file => {
        const id = file.replace('.json', '')
        return await getCollectionById(id)
      })
    )
    
    return collections
      .filter((result): result is PromiseFulfilledResult<Collection> => 
        result.status === 'fulfilled' && result.value !== null
      )
      .map(result => result.value)
      .sort((a, b) => b.stats.views - a.stats.views) // 按浏览量排序
  } catch (error) {
    console.error('Failed to get featured collections:', error)
    // 返回默认合集数据
    return [
      {
        id: "starter-pack",
        name: "新手入门包",
        description: "为MCP新手精选的基础工具合集，包含最常用的功能",
        author: {
          name: "ChimeMCP官方",
          avatar: "/images/authors/chimemcp-official.png",
          url: "https://chimemcp.com"
        },
        servers: ["fetch", "amap-maps", "bing-cn"],
        tags: ["新手友好", "基础工具", "官方推荐"],
        featured: true,
        stats: {
          downloads: 15600,
          stars: 89,
          views: 25400,
          lastUpdated: "2025-06-20T10:00:00Z"
        }
      }
    ]
  }
}

/**
 * 生成MCP Server的编钟YAML配置
 */
export function generateChimeConfig(server: MCPServer): string {
  const config = {
    name: `${server.name}工作流`,
    description: `使用${server.name}的自动化工作流`,
    mcpServers: {
      [server.id]: {
        command: server.installation.command.split(' ')[0],
        args: server.installation.command.split(' ').slice(1),
        ...(server.technical.requirements.some(req => req.includes('API')) && {
          env: {
            [`${server.id.toUpperCase()}_API_KEY`]: 'your_api_key_here'
          }
        })
      }
    },
    workflows: [
      {
        name: `使用${server.name}`,
        description: `调用${server.name}的功能`,
        steps: server.tools.map(tool => ({
          name: `执行${tool.name}`,
          tool: tool.name,
          parameters: Object.fromEntries(
            tool.parameters
              .filter(param => param.required)
              .map(param => [param.name, `请输入${param.description}`])
          )
        }))
      }
    ]
  }
  
  return `# ${server.name} 编钟工作流配置\n# 自动生成于 ${new Date().toISOString()}\n\n${JSON.stringify(config, null, 2)}`
} 
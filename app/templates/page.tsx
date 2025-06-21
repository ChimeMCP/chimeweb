'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Star, 
  Download, 
  Eye, 
  Clock, 
  Tag,
  CheckCircle,
  ArrowRight,
  Github,
  Heart,
  TrendingUp
} from 'lucide-react'

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: '全部模板', count: 52 },
    { id: 'content', name: '内容创作', count: 15 },
    { id: 'data', name: '数据处理', count: 12 },
    { id: 'automation', name: '自动化运维', count: 10 },
    { id: 'social', name: '社交媒体', count: 8 },
    { id: 'productivity', name: '效率工具', count: 7 }
  ]

  const templates = [
    {
      id: 1,
      title: '微信文章到Obsidian',
      description: '一键保存微信公众号文章到Obsidian，支持图片下载和格式化',
      category: 'content',
      author: 'ChimeMCP Team',
      rating: 4.9,
      downloads: 1200,
      views: 3400,
      tags: ['微信', 'Obsidian', '内容管理'],
      lastUpdated: '2天前',
      featured: true,
      mcpServers: ['crawl-mcp', 'playwright-mcp', 'obsidian-mcp'],
      successRate: '99.2%',
      avgTime: '30秒'
    },
    {
      id: 2,
      title: '数据报表自动生成',
      description: '从多个数据源获取数据，自动生成可视化报表并发送邮件',
      category: 'data',
      author: 'DataFlow',
      rating: 4.8,
      downloads: 890,
      views: 2100,
      tags: ['数据分析', '报表', '邮件'],
      lastUpdated: '1周前',
      featured: false,
      mcpServers: ['database-mcp', 'chart-mcp', 'email-mcp'],
      successRate: '98.7%',
      avgTime: '5分钟'
    },
    {
      id: 3,
      title: 'GitHub自动化部署',
      description: '代码推送后自动构建、测试和部署到生产环境',
      category: 'automation',
      author: 'DevOps Pro',
      rating: 4.9,
      downloads: 756,
      views: 1800,
      tags: ['GitHub', '部署', 'CI/CD'],
      lastUpdated: '3天前',
      featured: true,
      mcpServers: ['git-mcp', 'docker-mcp', 'monitor-mcp'],
      successRate: '99.8%',
      avgTime: '2分钟'
    },
    {
      id: 4,
      title: '社交媒体内容分发',
      description: '一次创作，自动发布到多个社交媒体平台',
      category: 'social',
      author: 'SocialBot',
      rating: 4.7,
      downloads: 623,
      views: 1500,
      tags: ['社交媒体', '内容分发', '自动化'],
      lastUpdated: '5天前',
      featured: false,
      mcpServers: ['twitter-mcp', 'linkedin-mcp', 'image-mcp'],
      successRate: '97.5%',
      avgTime: '1分钟'
    },
    {
      id: 5,
      title: '会议记录智能整理',
      description: '自动转录会议音频，提取关键信息并生成会议纪要',
      category: 'productivity',
      author: 'MeetingAI',
      rating: 4.6,
      downloads: 445,
      views: 980,
      tags: ['会议', '转录', 'AI总结'],
      lastUpdated: '1周前',
      featured: false,
      mcpServers: ['audio-mcp', 'ai-mcp', 'document-mcp'],
      successRate: '96.3%',
      avgTime: '3分钟'
    },
    {
      id: 6,
      title: '电商商品监控',
      description: '监控电商平台商品价格变化，自动发送降价提醒',
      category: 'automation',
      author: 'PriceWatcher',
      rating: 4.8,
      downloads: 567,
      views: 1200,
      tags: ['电商', '价格监控', '通知'],
      lastUpdated: '4天前',
      featured: false,
      mcpServers: ['crawl-mcp', 'schedule-mcp', 'notification-mcp'],
      successRate: '98.1%',
      avgTime: '实时监控'
    }
  ]

  const filteredTemplates = templates.filter(template => {
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredTemplates = templates.filter(template => template.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-chime-gold/10 via-white to-chime-bronze/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading mb-6">
              模板市场 🎼
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              发现由专业开发者精心制作的YAML模板，让复杂的自动化任务变得简单可靠
            </p>
            
            {/* 搜索框 */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索模板、标签或功能..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-chime-gold focus:border-transparent text-lg"
              />
            </div>

            {/* 统计数据 */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-chime-gold">52</div>
                <div className="text-gray-600">精选模板</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chime-gold">98.5%</div>
                <div className="text-gray-600">平均成功率</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chime-gold">10K+</div>
                <div className="text-gray-600">总下载量</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-chime-gold">50+</div>
                <div className="text-gray-600">MCP Servers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 精选模板 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="h-8 w-8 text-chime-gold mr-3" />
              精选模板
            </h2>
            <p className="text-gray-600">
              社区最受欢迎和高质量的模板推荐
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-chime-gold/20"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {template.description}
                    </p>
                  </div>
                  <div className="bg-chime-gold text-white text-xs px-2 py-1 rounded-full">
                    精选
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {template.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    {template.successRate}
                  </div>
                  <div className="flex items-center text-blue-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {template.avgTime}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      {template.rating}
                    </span>
                    <span className="flex items-center">
                      <Download className="h-4 w-4 mr-1" />
                      {template.downloads}
                    </span>
                  </div>
                  <span>{template.lastUpdated}</span>
                </div>

                <button className="w-full bg-chime-gold text-white py-2 px-4 rounded-lg hover:bg-chime-bronze transition-colors flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  使用模板
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 分类和模板列表 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 侧边栏分类 */}
            <div className="lg:w-64 flex-shrink-0">
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  分类筛选
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-chime-gold text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.name}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          selectedCategory === category.id
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* 模板网格 */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {categories.find(c => c.id === selectedCategory)?.name} 
                  <span className="text-lg font-normal text-gray-500 ml-2">
                    ({filteredTemplates.length} 个模板)
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTemplates.map((template, index) => (
                  <motion.div
                    key={template.id}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {template.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3">
                          {template.description}
                        </p>
                        <div className="text-xs text-gray-500 mb-3">
                          by {template.author}
                        </div>
                      </div>
                      {template.featured && (
                        <div className="bg-chime-gold text-white text-xs px-2 py-1 rounded-full">
                          精选
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {template.tags.map(tag => (
                        <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-2">
                        <span>MCP Servers:</span>
                        {template.mcpServers.map((server, i) => (
                          <span key={server} className="bg-blue-50 text-blue-600 px-2 py-1 rounded">
                            {server}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {template.successRate}
                      </div>
                      <div className="flex items-center text-blue-600">
                        <Clock className="h-4 w-4 mr-1" />
                        {template.avgTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          {template.rating}
                        </span>
                        <span className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {template.downloads}
                        </span>
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {template.views}
                        </span>
                      </div>
                      <span>{template.lastUpdated}</span>
                    </div>

                    <div className="flex space-x-2">
                      <button className="flex-1 bg-chime-gold text-white py-2 px-4 rounded-lg hover:bg-chime-bronze transition-colors flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" />
                        使用
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <Heart className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 贡献区块 */}
      <section className="py-16 bg-gradient-to-br from-chime-gold/5 to-chime-bronze/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              成为模板贡献者 🤝
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              分享你的YAML模板，帮助更多人享受自动化的便利。
              每个被采用的模板都会获得社区认可和奖励。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <Github className="h-8 w-8 text-chime-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">提交到GitHub</h3>
                <p className="text-gray-600 text-sm">通过Pull Request提交你的模板</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-chime-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">社区审核</h3>
                <p className="text-gray-600 text-sm">专业团队测试和优化你的模板</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <Star className="h-8 w-8 text-chime-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">获得认可</h3>
                <p className="text-gray-600 text-sm">在模板市场展示并获得下载奖励</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/ChimeMCP/templates"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                贡献模板
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/docs/template-guide"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                查看指南
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
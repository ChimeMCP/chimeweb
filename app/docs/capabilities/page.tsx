'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  Copy,
  Check,
  AlertCircle,
  ArrowRight,
  Eye,
} from 'lucide-react'
import CapabilityCard from '../../../components/docs/CapabilityCard'

const ChimeCapabilityGuide = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  // 滚动到指定区域的函数
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // 快速上手 - 跳转到安装页面
  const handleQuickStart = () => {
    window.location.href = '/docs/installation'
  }

  // 查看示例 - 滚动到能力展示区域
  const handleViewExamples = () => {
    scrollToSection('capabilities-section')
  }

  const capabilities = [
    {
      category: 'content',
      icon: '📝',
      title: '内容处理',
      description: '文章抓取、格式转换、内容整理',
      examples: [
        {
          task: '保存微信文章到Obsidian',
          command: '请帮我把这篇微信文章保存到我的Obsidian笔记中',
          tools: ['crawl-mcp', 'obsidian-mcp']
        },
        {
          task: '批量处理网页内容',
          command: '把这个网站的所有文章都下载并整理成Markdown格式',
          tools: ['playwright-mcp', 'file-mcp']
        }
      ]
    },
    {
      category: 'automation',
      icon: '🤖',
      title: '自动化流程',
      description: '重复任务自动化、批量操作',
      examples: [
        {
          task: '定时任务执行',
          command: '每天早上9点自动收集昨天的工作总结',
          tools: ['scheduler-mcp', 'notion-mcp']
        },
        {
          task: '数据同步',
          command: '把GitHub的issue同步到我的项目管理工具中',
          tools: ['github-mcp', 'airtable-mcp']
        }
      ]
    },
    {
      category: 'development',
      icon: '💻',
      title: '开发辅助',
      description: '代码生成、项目管理、部署操作',
      examples: [
        {
          task: '项目初始化',
          command: '帮我创建一个React项目并配置好TypeScript和Tailwind',
          tools: ['filesystem-mcp', 'git-mcp']
        },
        {
          task: '代码审查',
          command: '分析这个PR的代码变更并生成审查报告',
          tools: ['github-mcp', 'code-analysis-mcp']
        }
      ]
    },
    {
      category: 'data',
      icon: '📊',
      title: '数据分析',
      description: '数据收集、分析、可视化',
      examples: [
        {
          task: '数据报表生成',
          command: '从数据库导出销售数据并生成可视化图表',
          tools: ['database-mcp', 'chart-mcp']
        },
        {
          task: '竞品分析',
          command: '收集竞品信息并生成对比分析报告',
          tools: ['web-scraper-mcp', 'analysis-mcp']
        }
      ]
    }
  ]

  const troubleshooting = [
    {
      problem: '编钟没有响应',
      solution: '检查MCP服务器是否正常启动，确认配置文件格式正确',
      code: 'npm run mcp:status'
    },
    {
      problem: '工具调用失败',
      solution: '确认相关MCP Server已安装并在配置中启用',
      code: 'mcp list --status'
    },
    {
      problem: '权限不足',
      solution: '检查文件系统权限和API访问令牌配置',
      code: 'mcp auth --check'
    }
  ]

  const filteredCapabilities = activeCategory === 'all' 
    ? capabilities 
    : capabilities.filter(cap => cap.category === activeCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <BookOpen className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              编钟能力手册 🔔
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              你的AI自动化能力说明书
              <br />
              5分钟学会用编钟解决实际问题
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleQuickStart}
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors cursor-pointer flex items-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                快速上手
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleViewExamples}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-2"
              >
                <Eye className="h-5 w-5" />
                查看示例
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 核心理念 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            🎼 编钟让AI工具像乐器一样和谐协作
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            不需要学习复杂的技术，只需要用自然语言描述你想要的结果，编钟会自动协调各种MCP工具完成任务
          </p>
        </motion.div>

        {/* 快速导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-16"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            🚀 快速导航
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <button
              onClick={() => window.location.href = '/docs/installation'}
              className="flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-amber-600" />
              <span className="font-medium">安装指南</span>
            </button>
            <button
              onClick={() => window.location.href = '/docs/first-workflow'}
              className="flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-amber-600" />
              <span className="font-medium">第一个工作流</span>
            </button>
            <button
              onClick={() => window.location.href = '/docs/yaml-syntax'}
              className="flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-amber-600" />
              <span className="font-medium">YAML语法</span>
            </button>
            <button
              onClick={() => window.location.href = '/docs/best-practices'}
              className="flex items-center gap-2 p-4 rounded-lg border border-gray-200 hover:border-amber-300 hover:bg-amber-50 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-amber-600" />
              <span className="font-medium">最佳实践</span>
            </button>
          </div>
        </motion.div>

        {/* 能力分类筛选 */}
        <div id="capabilities-section" className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            全部能力
          </button>
          {capabilities.map((cap) => (
            <button
              key={cap.category}
              onClick={() => setActiveCategory(cap.category)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cap.category
                  ? 'bg-amber-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cap.icon} {cap.title}
            </button>
          ))}
        </div>

        {/* 能力展示 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredCapabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.category}
              category={capability.category}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
              examples={capability.examples}
              index={index}
              copiedCode={copiedCode}
              onCopyCode={copyToClipboard}
            />
          ))}
        </div>

        {/* 故障排除 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <div className="flex items-center mb-6">
            <AlertCircle className="h-8 w-8 text-amber-600 mr-4" />
                         <h3 className="text-2xl font-bold text-gray-900">
               🚨 遇到问题？快速自救指南
             </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {troubleshooting.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {item.problem}
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  {item.solution}
                </p>
                <div className="bg-gray-900 text-white text-sm p-2 rounded font-mono">
                  <div className="flex items-center justify-between">
                    <span>{item.code}</span>
                    <button
                      onClick={() => copyToClipboard(item.code, `trouble-${index}`)}
                      className="text-gray-400 hover:text-white ml-2"
                    >
                      {copiedCode === `trouble-${index}` ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <Copy className="h-3 w-3" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ChimeCapabilityGuide 
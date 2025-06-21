'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Trophy,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  Code,
  Zap,
  Shield,
  Target,
  Copy,
  Check,
  Star,
  TrendingUp
} from 'lucide-react'

const BestPracticesPage = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('yaml')

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const practices = {
    yaml: {
      title: 'YAML模板编写',
      icon: Code,
      color: 'from-blue-500 to-cyan-600',
      practices: [
        {
          title: '使用清晰的命名规范',
          level: 'essential',
          description: '给你的模板和步骤起有意义的名字',
          example: `# ✅ 好的命名
name: "微信文章保存到Obsidian"
description: "抓取微信文章并保存到Obsidian笔记"

steps:
  - name: "抓取文章内容"
    tool: "crawl-mcp"
  
  - name: "保存到Obsidian"
    tool: "obsidian-mcp"

# ❌ 不好的命名
name: "task1"
steps:
  - name: "step1"
    tool: "tool1"`,
          tips: [
            '使用动词+名词的格式：如"抓取文章内容"',
            '避免使用缩写和技术术语',
            '保持命名的一致性'
          ]
        },
        {
          title: '合理设置错误处理',
          level: 'important',
          description: '为每个关键步骤设置错误处理和重试机制',
          example: `steps:
  - name: "抓取网页内容"
    tool: "playwright-mcp"
    retry: 3
    timeout: 30s
    on_error: 
      action: "skip"
      message: "网页抓取失败，跳过此步骤"
  
  - name: "保存文件"
    tool: "file-mcp"
    on_error:
      action: "stop"
      cleanup: true
      message: "文件保存失败，停止执行并清理临时文件"`,
          tips: [
            '网络操作设置重试机制',
            '文件操作设置清理机制',
            '提供有意义的错误信息'
          ]
        },
        {
          title: '使用变量和参数化',
          level: 'advanced',
          description: '让模板更灵活，可以适应不同场景',
          example: `# 参数定义
parameters:
  source_url: 
    type: "string"
    required: true
    description: "要抓取的网页URL"
  
  output_folder:
    type: "string" 
    default: "Articles"
    description: "保存文件的文件夹"

steps:
  - name: "抓取内容"
    tool: "crawl-mcp"
    config:
      url: "{{source_url}}"
      
  - name: "保存文件"
    tool: "obsidian-mcp"
    config:
      folder: "{{output_folder}}"
      filename: "{{title}}_{{date}}.md"`,
          tips: [
            '使用双大括号语法 {{variable}}',
            '为参数提供默认值',
            '添加参数描述和类型信息'
          ]
        }
      ]
    },
    workflow: {
      title: '工作流设计',
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      practices: [
        {
          title: '单一职责原则',
          level: 'essential',
          description: '每个工作流只做一件事，做好一件事',
          example: `# ✅ 好的设计 - 专注单一任务
name: "微信文章到Obsidian"
description: "专门处理微信文章的保存"

# ❌ 不好的设计 - 职责混乱  
name: "内容处理大杂烩"
description: "抓取文章、发送邮件、更新数据库、生成报告..."`,
          tips: [
            '一个模板解决一个具体问题',
            '避免把多个不相关的任务放在一起',
            '复杂任务可以拆分成多个简单模板'
          ]
        },
        {
          title: '合理的步骤拆分',
          level: 'important',
          description: '将复杂任务拆分成可管理的小步骤',
          example: `# ✅ 好的拆分
steps:
  - name: "验证输入URL"
    tool: "validator-mcp"
    
  - name: "抓取文章内容"  
    tool: "crawl-mcp"
    
  - name: "清理和格式化内容"
    tool: "text-processor-mcp"
    
  - name: "生成文件名"
    tool: "filename-generator-mcp"
    
  - name: "保存到Obsidian"
    tool: "obsidian-mcp"
    
  - name: "发送完成通知"
    tool: "notification-mcp"

# ❌ 不好的拆分
steps:
  - name: "处理所有事情"
    tool: "do-everything-mcp"`,
          tips: [
            '每个步骤5-10行配置为宜',
            '步骤之间有清晰的输入输出关系',
            '可以独立测试每个步骤'
          ]
        }
      ]
    },
    performance: {
      title: '性能优化',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      practices: [
        {
          title: '并行执行优化',
          level: 'advanced',
          description: '合理使用并行执行提升效率',
          example: `# 并行处理多个文件
steps:
  - name: "批量下载"
    tool: "download-mcp"
    parallel: true
    max_concurrent: 3
    inputs:
      - url: "https://example1.com"
      - url: "https://example2.com" 
      - url: "https://example3.com"
      
  - name: "等待所有下载完成"
    tool: "sync-mcp"
    wait_for: "批量下载"`,
          tips: [
            '网络请求适合并行处理',
            '控制并发数量避免过载',
            '注意并行任务的依赖关系'
          ]
        },
        {
          title: '缓存和复用',
          level: 'important',
          description: '避免重复执行相同的操作',
          example: `steps:
  - name: "检查缓存"
    tool: "cache-mcp"
    config:
      key: "article_{{url_hash}}"
      ttl: "1h"
      
  - name: "抓取内容"
    tool: "crawl-mcp"
    condition: "cache_miss"
    
  - name: "更新缓存"
    tool: "cache-mcp"
    config:
      key: "article_{{url_hash}}"
      value: "{{content}}"`,
          tips: [
            '为耗时操作设置缓存',
            '合理设置缓存过期时间',
            '使用条件执行避免重复工作'
          ]
        }
      ]
    },
    security: {
      title: '安全最佳实践',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      practices: [
        {
          title: '敏感信息管理',
          level: 'essential',
          description: '正确处理API密钥和敏感数据',
          example: `# ✅ 使用环境变量
steps:
  - name: "调用API"
    tool: "api-mcp"
    config:
      api_key: "{{env.OPENAI_API_KEY}}"
      endpoint: "https://api.openai.com"

# ❌ 硬编码敏感信息
steps:
  - name: "调用API"
    tool: "api-mcp"
    config:
      api_key: "sk-1234567890abcdef"  # 危险！`,
          tips: [
            '使用环境变量存储API密钥',
            '不要在模板中硬编码密码',
            '定期轮换访问令牌'
          ]
        }
      ]
    }
  }

  const levelColors = {
    essential: 'bg-red-100 text-red-800',
    important: 'bg-yellow-100 text-yellow-800', 
    advanced: 'bg-blue-100 text-blue-800'
  }

  const levelLabels = {
    essential: '必须掌握',
    important: '重要建议',
    advanced: '进阶技巧'
  }

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
                <Trophy className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              编钟最佳实践 🏆
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              专业团队总结的实战经验
              <br />
              让你的工作流更稳定、更高效、更安全
            </p>
            <div className="flex items-center justify-center gap-8 text-amber-100">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>98.5% 成功率</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>效率提升 300%</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <span>企业级安全</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 分类标签 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(practices).map(([key, category]) => {
            const IconComponent = category.icon
            return (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
                  activeTab === key
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <IconComponent className="h-5 w-5" />
                {category.title}
              </button>
            )
          })}
        </div>

        {/* 实践内容 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {practices[activeTab as keyof typeof practices].practices.map((practice, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {practice.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[practice.level]}`}>
                      {levelLabels[practice.level]}
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">
                    {practice.description}
                  </p>
                </div>
              </div>

              {/* 代码示例 */}
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-400 text-sm font-medium">示例代码</span>
                  <button
                    onClick={() => copyToClipboard(practice.example, `example-${index}`)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {copiedCode === `example-${index}` ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <pre className="text-gray-100 text-sm overflow-x-auto">
                  <code>{practice.example}</code>
                </pre>
              </div>

              {/* 要点提示 */}
              <div className="bg-amber-50 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="h-5 w-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">关键要点</span>
                </div>
                <ul className="space-y-2">
                  {practice.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start gap-2 text-amber-700">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 总结提示 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-8 text-white text-center"
        >
          <AlertTriangle className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">记住：实践出真知</h3>
          <p className="text-lg text-amber-100 mb-6">
            最佳实践不是教条，而是经验的总结。
            根据你的具体场景灵活应用，持续优化改进。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/docs/capabilities"
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              查看能力手册
            </a>
            <a
              href="/templates"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              浏览模板市场
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BestPracticesPage 
 
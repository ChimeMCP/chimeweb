'use client'

import { motion } from 'framer-motion'
import { 
  Book, 
  Code, 
  Copy,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  FileText,
  Settings,
  Zap,
  Link as LinkIcon,
  Lightbulb
} from 'lucide-react'
import { useState } from 'react'

export default function YAMLSyntaxPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
        <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-chime-gold/10 via-white to-chime-bronze/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
              YAML模板语法参考 📝
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              掌握编钟的声明式配置语法，创建强大的自动化工作流
            </p>
            
            {/* 快速导航 */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#basic-syntax" className="inline-flex items-center px-4 py-2 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors">
                基础语法
              </a>
              <a href="#workflow-config" className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                工作流配置
              </a>
              <a href="#advanced-features" className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                高级特性
              </a>
              <a href="#examples" className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
                完整示例
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 主内容区域 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {/* 侧边导航 */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="sticky top-8">
                <nav className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">目录</h3>
                  
                  <a href="#overview" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Info className="h-4 w-4 mr-2" />
                    概述
                  </a>
                  
                  <div className="ml-2 border-l border-gray-200 pl-4 space-y-1">
                    <a href="#basic-syntax" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      基础语法
                    </a>
                    <a href="#metadata" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      元数据配置
                    </a>
                    <a href="#variables" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      变量定义
                    </a>
                  </div>

                  <a href="#workflow-config" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Settings className="h-4 w-4 mr-2" />
                    工作流配置
                  </a>
                  
                  <div className="ml-2 border-l border-gray-200 pl-4 space-y-1">
                    <a href="#steps" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      执行步骤
                    </a>
                    <a href="#conditions" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      条件判断
                    </a>
                    <a href="#error-handling" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      错误处理
                    </a>
                  </div>

                  <a href="#advanced-features" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Zap className="h-4 w-4 mr-2" />
                    高级特性
                  </a>
                  
                  <div className="ml-2 border-l border-gray-200 pl-4 space-y-1">
                    <a href="#parallel-execution" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      并行执行
                    </a>
                    <a href="#dynamic-config" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      动态配置
                    </a>
                    <a href="#template-inheritance" className="block px-3 py-1 text-sm text-gray-600 hover:text-chime-gold transition-colors">
                      模板继承
                    </a>
                  </div>

                  <a href="#examples" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <FileText className="h-4 w-4 mr-2" />
                    完整示例
                  </a>
                </nav>
              </div>
            </div>

            {/* 主要内容 */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {/* 概述 */}
              <section id="overview" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">概述</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <div className="flex items-start">
                    <Info className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">什么是编钟YAML模板？</h3>
                      <p className="text-blue-800 leading-relaxed">
                        编钟YAML模板是一种声明式配置文件，用于定义自动化工作流。通过简洁的YAML语法，
                        你可以描述复杂的多工具协作流程，编钟会自动协调各个MCP Server的执行。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <CheckCircle className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold text-green-900 mb-2">优势</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• 声明式语法，易于理解和维护</li>
                      <li>• 自动处理工具依赖和执行顺序</li>
                      <li>• 内置错误处理和重试机制</li>
                      <li>• 支持并行执行和条件分支</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <AlertTriangle className="h-8 w-8 text-amber-600 mb-4" />
                    <h3 className="text-lg font-semibold text-amber-900 mb-2">注意事项</h3>
                    <ul className="text-amber-800 space-y-2">
                      <li>• YAML语法对缩进敏感</li>
                      <li>• 字符串值建议使用引号包围</li>
                      <li>• 大型工作流建议拆分为多个模板</li>
                      <li>• 定期测试和版本管理</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 基础语法 */}
              <section id="basic-syntax" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">基础语法</h2>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">模板结构</h3>
                  <p className="text-gray-600 mb-4">
                    一个完整的编钟YAML模板包含以下基本结构：
                  </p>
                  
                  <div className="bg-gray-900 rounded-lg p-6 relative group">
                    <button
                      onClick={() => copyToClipboard(`# 编钟工作流模板
name: "示例工作流"
description: "这是一个示例工作流模板"
version: "1.0.0"
author: "编钟开发者"

# 变量定义
variables:
  input_url: ""
  output_path: "~/Documents"

# 执行步骤
steps:
  - name: "获取内容"
    tool: "fetch-mcp"
    params:
      url: "{{variables.input_url}}"
    
  - name: "保存文件"
    tool: "file-mcp"
    params:
      path: "{{variables.output_path}}/content.md"
      content: "{{steps.获取内容.result}}"`, 'basic-structure')}
                      className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                    >
                      {copiedCode === 'basic-structure' ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                    
                    <pre className="text-gray-300 overflow-x-auto text-sm whitespace-pre-wrap">
                      <code className="block">{`# 编钟工作流模板
name: "示例工作流"
description: "这是一个示例工作流模板"
version: "1.0.0"
author: "编钟开发者"

# 变量定义
variables:
  input_url: ""
  output_path: "~/Documents"

# 执行步骤
steps:
  - name: "获取内容"
    tool: "fetch-mcp"
    params:
      url: "{{variables.input_url}}"
    
  - name: "保存文件"
    tool: "file-mcp"
    params:
      path: "{{variables.output_path}}/content.md"
      content: "{{steps.获取内容.result}}"`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* 元数据配置 */}
              <section id="metadata" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">元数据配置</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">必需字段</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">字段</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">示例</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">name</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                            <td className="px-6 py-4 text-sm text-gray-500">工作流的名称</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">"微信文章保存"</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">description</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                            <td className="px-6 py-4 text-sm text-gray-500">工作流的描述</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">"将微信文章保存到本地"</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">version</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                            <td className="px-6 py-4 text-sm text-gray-500">版本号</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">"1.0.0"</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">可选字段</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">字段</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">示例</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">author</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                            <td className="px-6 py-4 text-sm text-gray-500">作者信息</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">"张三"</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">tags</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">array</td>
                            <td className="px-6 py-4 text-sm text-gray-500">标签列表</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">["content", "automation"]</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">category</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">string</td>
                            <td className="px-6 py-4 text-sm text-gray-500">分类</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">"content-management"</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">timeout</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">number</td>
                            <td className="px-6 py-4 text-sm text-gray-500">超时时间(秒)</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>

              {/* 变量定义 */}
              <section id="variables" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">变量定义</h2>
                
                <p className="text-gray-600 mb-6">
                  变量允许你在模板中定义可重用的值，支持默认值、类型约束和验证规则。
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">基本变量</h3>
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard(`variables:
  # 字符串变量
  website_url: "https://example.com"
  
  # 数字变量
  retry_count: 3
  
  # 布尔变量
  enable_debug: false
  
  # 数组变量
  file_extensions: [".md", ".txt", ".pdf"]
  
  # 对象变量
  api_config:
    endpoint: "https://api.example.com"
    timeout: 30
    headers:
      Authorization: "Bearer {{env.API_TOKEN}}"`, 'basic-variables')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'basic-variables' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      
                      <pre className="text-gray-300 overflow-x-auto">
                        <code>{`variables:
  # 字符串变量
  website_url: "https://example.com"
  
  # 数字变量
  retry_count: 3
  
  # 布尔变量
  enable_debug: false
  
  # 数组变量
  file_extensions: [".md", ".txt", ".pdf"]
  
  # 对象变量
  api_config:
    endpoint: "https://api.example.com"
    timeout: 30
    headers:
      Authorization: "Bearer {{env.API_TOKEN}}"`}</code>
                      </pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">高级变量配置</h3>
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard(`variables:
  # 带描述和类型的变量
  input_file:
    type: "string"
    description: "输入文件路径"
    default: ""
    required: true
    
  # 带验证规则的变量
  email_address:
    type: "string"
    description: "邮箱地址"
    pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
    required: true
    
  # 环境变量引用
  database_url:
    type: "string"
    description: "数据库连接地址"
    default: "{{env.DATABASE_URL}}"
    
  # 计算变量
  output_filename:
    type: "string"
    description: "输出文件名"
    default: "{{variables.input_file | basename}}.processed"`, 'advanced-variables')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'advanced-variables' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      
                      <pre className="text-gray-300 overflow-x-auto">
                        <code>{`variables:
  # 带描述和类型的变量
  input_file:
    type: "string"
    description: "输入文件路径"
    default: ""
    required: true
    
  # 带验证规则的变量
  email_address:
    type: "string"
    description: "邮箱地址"
    pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$"
    required: true
    
  # 环境变量引用
  database_url:
    type: "string"
    description: "数据库连接地址"
    default: "{{env.DATABASE_URL}}"
    
  # 计算变量
  output_filename:
    type: "string"
    description: "输出文件名"
    default: "{{variables.input_file | basename}}.processed"`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* 工作流配置 */}
              <section id="workflow-config" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">工作流配置</h2>
                
                <p className="text-gray-600 mb-8">
                  工作流配置是编钟模板的核心部分，定义了具体的执行逻辑和步骤编排。
                </p>

                {/* 执行步骤 */}
                <div id="steps" className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">执行步骤</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">基本步骤结构</h4>
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard(`steps:
  - name: "下载网页内容"
    tool: "fetch-mcp"
    params:
      url: "{{variables.target_url}}"
      timeout: 30
    output_var: "webpage_content"
    
  - name: "解析文章内容"
    tool: "html-parser-mcp"
    params:
      html: "{{steps.下载网页内容.result}}"
      selector: "article"
    output_var: "article_content"
    
  - name: "保存到文件"
    tool: "file-mcp"
    params:
      path: "{{variables.output_path}}/{{variables.filename}}"
      content: "{{steps.解析文章内容.result}}"
    output_var: "save_result"`, 'basic-steps')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'basic-steps' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      
                      <pre className="text-gray-300 overflow-x-auto">
                        <code>{`steps:
  - name: "下载网页内容"
    tool: "fetch-mcp"
    params:
      url: "{{variables.target_url}}"
      timeout: 30
    output_var: "webpage_content"
    
  - name: "解析文章内容"
    tool: "html-parser-mcp"
    params:
      html: "{{steps.下载网页内容.result}}"
      selector: "article"
    output_var: "article_content"
    
  - name: "保存到文件"
    tool: "file-mcp"
    params:
      path: "{{variables.output_path}}/{{variables.filename}}"
      content: "{{steps.解析文章内容.result}}"
    output_var: "save_result"`}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">步骤字段说明</h4>
                    <div className="overflow-x-auto">
                      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">字段</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">必需</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">示例</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">name</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓</td>
                            <td className="px-6 py-4 text-sm text-gray-500">步骤的唯一名称</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">"下载网页内容"</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">tool</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓</td>
                            <td className="px-6 py-4 text-sm text-gray-500">要使用的MCP Server名称</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">"fetch-mcp"</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">params</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">-</td>
                            <td className="px-6 py-4 text-sm text-gray-500">传递给工具的参数</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">url: "https://..."</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">output_var</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">-</td>
                            <td className="px-6 py-4 text-sm text-gray-500">存储结果的变量名</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">"webpage_content"</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">timeout</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">-</td>
                            <td className="px-6 py-4 text-sm text-gray-500">步骤超时时间(秒)</td>
                            <td className="px-6 py-4 text-sm font-mono text-gray-900">30</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 条件判断 */}
                <div id="conditions" className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">条件判断</h3>
                  
                  <p className="text-gray-600 mb-6">
                    使用条件判断可以根据执行结果或变量值来控制工作流的执行分支。
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 relative group mb-6">
                    <button
                      onClick={() => copyToClipboard(`steps:
  - name: "检查文件类型"
    tool: "file-inspector-mcp"
    params:
      path: "{{variables.input_file}}"
    output_var: "file_info"
    
  - name: "处理图片文件"
    tool: "image-processor-mcp"
    params:
      input: "{{variables.input_file}}"
      output: "{{variables.output_path}}/processed.jpg"
    condition:
      if: "{{steps.检查文件类型.result.type}} == 'image'"
      
  - name: "处理文档文件"
    tool: "document-processor-mcp"
    params:
      input: "{{variables.input_file}}"
      output: "{{variables.output_path}}/processed.pdf"
    condition:
      if: "{{steps.检查文件类型.result.type}} == 'document'"
      
  - name: "处理失败通知"
    tool: "notification-mcp"
    params:
      message: "不支持的文件类型: {{steps.检查文件类型.result.type}}"
    condition:
      if: "{{steps.检查文件类型.result.type}} not in ['image', 'document']"`, 'conditions-example')}
                      className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                    >
                      {copiedCode === 'conditions-example' ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                    
                    <pre className="text-gray-300 overflow-x-auto">
                      <code>{`steps:
  - name: "检查文件类型"
    tool: "file-inspector-mcp"
    params:
      path: "{{variables.input_file}}"
    output_var: "file_info"
    
  - name: "处理图片文件"
    tool: "image-processor-mcp"
    params:
      input: "{{variables.input_file}}"
      output: "{{variables.output_path}}/processed.jpg"
    condition:
      if: "{{steps.检查文件类型.result.type}} == 'image'"
      
  - name: "处理文档文件"
    tool: "document-processor-mcp"
    params:
      input: "{{variables.input_file}}"
      output: "{{variables.output_path}}/processed.pdf"
    condition:
      if: "{{steps.检查文件类型.result.type}} == 'document'"
      
  - name: "处理失败通知"
    tool: "notification-mcp"
    params:
      message: "不支持的文件类型: {{steps.检查文件类型.result.type}}"
    condition:
      if: "{{steps.检查文件类型.result.type}} not in ['image', 'document']"`}</code>
                    </pre>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <Info className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 mb-2">支持的条件运算符</h4>
                        <ul className="text-blue-800 space-y-1 text-sm">
                          <li>• <code className="bg-blue-100 px-2 py-1 rounded">==</code> 等于</li>
                          <li>• <code className="bg-blue-100 px-2 py-1 rounded">!=</code> 不等于</li>
                          <li>• <code className="bg-blue-100 px-2 py-1 rounded">&gt;</code>, <code className="bg-blue-100 px-2 py-1 rounded">&lt;</code> 大于、小于</li>
                          <li>• <code className="bg-blue-100 px-2 py-1 rounded">in</code>, <code className="bg-blue-100 px-2 py-1 rounded">not in</code> 包含、不包含</li>
                          <li>• <code className="bg-blue-100 px-2 py-1 rounded">and</code>, <code className="bg-blue-100 px-2 py-1 rounded">or</code> 逻辑与、或</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 错误处理 */}
                <div id="error-handling" className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">错误处理</h3>
                  
                  <p className="text-gray-600 mb-6">
                    编钟提供了多种错误处理机制，确保工作流的稳定性和可恢复性。
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 relative group mb-6">
                    <button
                      onClick={() => copyToClipboard(`steps:
  - name: "下载文件"
    tool: "fetch-mcp"
    params:
      url: "{{variables.download_url}}"
    retry:
      max_attempts: 3
      delay: 5
      backoff_factor: 2
    on_error:
      action: "continue"  # 或 "stop", "retry"
      fallback_step: "使用本地缓存"
      
  - name: "使用本地缓存"
    tool: "file-mcp"
    params:
      path: "{{variables.cache_path}}"
    condition:
      if: "{{steps.下载文件.status}} == 'failed'"
    
  - name: "处理数据"
    tool: "data-processor-mcp"
    params:
      input: "{{steps.下载文件.result or steps.使用本地缓存.result}}"
    validation:
      required_fields: ["title", "content"]
      max_size_mb: 10
    
  - name: "清理临时文件"
    tool: "file-mcp"
    params:
      action: "delete"
      path: "{{variables.temp_dir}}"
    run_on: "always"  # 总是执行，即使前面步骤失败`, 'error-handling-example')}
                      className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                    >
                      {copiedCode === 'error-handling-example' ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                    
                    <pre className="text-gray-300 overflow-x-auto">
                      <code>{`steps:
  - name: "下载文件"
    tool: "fetch-mcp"
    params:
      url: "{{variables.download_url}}"
    retry:
      max_attempts: 3
      delay: 5
      backoff_factor: 2
    on_error:
      action: "continue"  # 或 "stop", "retry"
      fallback_step: "使用本地缓存"
      
  - name: "使用本地缓存"
    tool: "file-mcp"
    params:
      path: "{{variables.cache_path}}"
    condition:
      if: "{{steps.下载文件.status}} == 'failed'"
    
  - name: "处理数据"
    tool: "data-processor-mcp"
    params:
      input: "{{steps.下载文件.result or steps.使用本地缓存.result}}"
    validation:
      required_fields: ["title", "content"]
      max_size_mb: 10
    
  - name: "清理临时文件"
    tool: "file-mcp"
    params:
      action: "delete"
      path: "{{variables.temp_dir}}"
    run_on: "always"  # 总是执行，即使前面步骤失败`}</code>
                    </pre>
                  </div>
                </div>
              </section>

              {/* 高级特性 */}
              <section id="advanced-features" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">高级特性</h2>
                
                <p className="text-gray-600 mb-8">
                  编钟提供了多种高级特性，帮助你构建更加复杂和高效的自动化工作流。
                </p>

                {/* 并行执行 */}
                <div id="parallel-execution" className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">并行执行</h3>
                  
                  <p className="text-gray-600 mb-6">
                    使用并行执行可以同时运行多个独立的任务，大大提升工作流的执行效率。
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 relative group mb-6">
                    <button
                      onClick={() => copyToClipboard(`steps:
  # 串行步骤
  - name: "初始化环境"
    tool: "setup-mcp"
    params:
      workspace: "{{variables.workspace_path}}"
      
  # 并行执行多个任务
  - name: "并行处理组"
    type: "parallel"
    max_concurrency: 3  # 最大并发数
    steps:
      - name: "下载图片1"
        tool: "fetch-mcp"
        params:
          url: "{{variables.image_urls[0]}}"
          output: "{{variables.output_path}}/image1.jpg"
          
      - name: "下载图片2" 
        tool: "fetch-mcp"
        params:
          url: "{{variables.image_urls[1]}}"
          output: "{{variables.output_path}}/image2.jpg"
          
      - name: "生成缩略图"
        tool: "image-processor-mcp"
        params:
          input: "{{variables.template_image}}"
          output: "{{variables.output_path}}/thumbnail.jpg"
          
  # 等待所有并行任务完成后继续
  - name: "合并结果"
    tool: "image-combiner-mcp"
    params:
      inputs: 
        - "{{steps.并行处理组.下载图片1.result}}"
        - "{{steps.并行处理组.下载图片2.result}}"
        - "{{steps.并行处理组.生成缩略图.result}}"
      output: "{{variables.output_path}}/combined.jpg"`, 'parallel-execution')}
                      className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                    >
                      {copiedCode === 'parallel-execution' ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                    
                    <pre className="text-gray-300 overflow-x-auto">
                      <code>{`steps:
  # 串行步骤
  - name: "初始化环境"
    tool: "setup-mcp"
    params:
      workspace: "{{variables.workspace_path}}"
      
  # 并行执行多个任务
  - name: "并行处理组"
    type: "parallel"
    max_concurrency: 3  # 最大并发数
    steps:
      - name: "下载图片1"
        tool: "fetch-mcp"
        params:
          url: "{{variables.image_urls[0]}}"
          output: "{{variables.output_path}}/image1.jpg"
          
      - name: "下载图片2" 
        tool: "fetch-mcp"
        params:
          url: "{{variables.image_urls[1]}}"
          output: "{{variables.output_path}}/image2.jpg"
          
      - name: "生成缩略图"
        tool: "image-processor-mcp"
        params:
          input: "{{variables.template_image}}"
          output: "{{variables.output_path}}/thumbnail.jpg"
          
  # 等待所有并行任务完成后继续
  - name: "合并结果"
    tool: "image-combiner-mcp"
    params:
      inputs: 
        - "{{steps.并行处理组.下载图片1.result}}"
        - "{{steps.并行处理组.下载图片2.result}}"
        - "{{steps.并行处理组.生成缩略图.result}}"
      output: "{{variables.output_path}}/combined.jpg"`}</code>
                    </pre>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-amber-900 mb-2">并行执行注意事项</h4>
                        <ul className="text-amber-800 space-y-1 text-sm">
                          <li>• 并行任务之间不能有依赖关系</li>
                          <li>• 合理设置max_concurrency避免资源耗尽</li>
                          <li>• 错误处理策略会影响整个并行组</li>
                          <li>• 使用steps.组名.步骤名来引用并行步骤的结果</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 动态配置 */}
                <div id="dynamic-config" className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">动态配置</h3>
                  
                  <p className="text-gray-600 mb-6">
                    动态配置允许在运行时根据条件或数据动态生成步骤和参数。
                  </p>

                  <div className="bg-gray-900 rounded-lg p-6 relative group mb-6">
                    <button
                      onClick={() => copyToClipboard(`variables:
  file_list: []  # 运行时动态填充
  
steps:
  - name: "扫描文件夹"
    tool: "file-scanner-mcp"
    params:
      path: "{{variables.input_folder}}"
      pattern: "*.txt"
    output_var: "scanned_files"
    
  # 动态生成处理步骤
  - name: "批量处理文件"
    type: "dynamic"
    template:
      name: "处理文件 {{item.name}}"
      tool: "text-processor-mcp"
      params:
        input: "{{item.path}}"
        output: "{{variables.output_folder}}/processed_{{item.name}}"
        config:
          encoding: "utf-8"
          remove_duplicates: true
    iterate_over: "{{steps.扫描文件夹.result.files}}"
    
  # 条件性动态配置
  - name: "发送通知"
    tool: "notification-mcp"
    params:
      message: "{{#if steps.批量处理文件.success_count > 0}}成功处理了 {{steps.批量处理文件.success_count}} 个文件{{else}}没有文件被处理{{/if}}"
      channels: 
        - type: "email"
          enabled: "{{variables.enable_email_notification}}"
          recipients: "{{variables.notification_emails}}"
        - type: "slack"
          enabled: "{{variables.enable_slack_notification}}"
          webhook: "{{env.SLACK_WEBHOOK_URL}}"`, 'dynamic-config')}
                      className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                    >
                      {copiedCode === 'dynamic-config' ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                    
                    <pre className="text-gray-300 overflow-x-auto">
                      <code>{`variables:
  file_list: []  # 运行时动态填充
  
steps:
  - name: "扫描文件夹"
    tool: "file-scanner-mcp"
    params:
      path: "{{variables.input_folder}}"
      pattern: "*.txt"
    output_var: "scanned_files"
    
  # 动态生成处理步骤
  - name: "批量处理文件"
    type: "dynamic"
    template:
      name: "处理文件 {{item.name}}"
      tool: "text-processor-mcp"
      params:
        input: "{{item.path}}"
        output: "{{variables.output_folder}}/processed_{{item.name}}"
        config:
          encoding: "utf-8"
          remove_duplicates: true
    iterate_over: "{{steps.扫描文件夹.result.files}}"
    
  # 条件性动态配置
  - name: "发送通知"
    tool: "notification-mcp"
    params:
      message: "{{#if steps.批量处理文件.success_count > 0}}成功处理了 {{steps.批量处理文件.success_count}} 个文件{{else}}没有文件被处理{{/if}}"
      channels: 
        - type: "email"
          enabled: "{{variables.enable_email_notification}}"
          recipients: "{{variables.notification_emails}}"
        - type: "slack"
          enabled: "{{variables.enable_slack_notification}}"
          webhook: "{{env.SLACK_WEBHOOK_URL}}"`}</code>
                    </pre>
                  </div>
                </div>

                {/* 模板继承 */}
                <div id="template-inheritance" className="mb-10">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">模板继承</h3>
                  
                  <p className="text-gray-600 mb-6">
                    通过模板继承可以重用公共配置，减少重复代码，提高维护性。
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">基础模板 (base-content-processor.yml)</h4>
                      <div className="bg-gray-900 rounded-lg p-6 relative group">
                        <button
                          onClick={() => copyToClipboard(`# 基础内容处理模板
name: "基础内容处理器"
description: "提供通用的内容处理功能"
version: "1.0.0"

variables:
  input_url: ""
  output_path: "~/Downloads"
  enable_validation: true
  
# 公共步骤定义
common_steps:
  download_content: &download_step
    name: "下载内容"
    tool: "fetch-mcp"
    params:
      url: "{{variables.input_url}}"
      timeout: 30
    retry:
      max_attempts: 3
      delay: 5
      
  validate_content: &validate_step
    name: "验证内容"
    tool: "validator-mcp"
    params:
      input: "{{steps.下载内容.result}}"
      rules:
        - "required_length > 100"
        - "no_malicious_content"
    condition:
      if: "{{variables.enable_validation}}"

steps:
  - <<: *download_step
  - <<: *validate_step`, 'base-template')}
                          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'base-template' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        
                        <pre className="text-gray-300 overflow-x-auto">
                          <code>{`# 基础内容处理模板
name: "基础内容处理器"
description: "提供通用的内容处理功能"
version: "1.0.0"

variables:
  input_url: ""
  output_path: "~/Downloads"
  enable_validation: true
  
# 公共步骤定义
common_steps:
  download_content: &download_step
    name: "下载内容"
    tool: "fetch-mcp"
    params:
      url: "{{variables.input_url}}"
      timeout: 30
    retry:
      max_attempts: 3
      delay: 5
      
  validate_content: &validate_step
    name: "验证内容"
    tool: "validator-mcp"
    params:
      input: "{{steps.下载内容.result}}"
      rules:
        - "required_length > 100"
        - "no_malicious_content"
    condition:
      if: "{{variables.enable_validation}}"

steps:
  - <<: *download_step
  - <<: *validate_step`}</code>
                        </pre>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">继承模板 (wechat-article-processor.yml)</h4>
                      <div className="bg-gray-900 rounded-lg p-6 relative group">
                        <button
                          onClick={() => copyToClipboard(`# 继承基础模板
extends: "base-content-processor.yml"

name: "微信文章处理器"
description: "专门处理微信公众号文章的工作流"
version: "1.1.0"

# 扩展变量
variables:
  output_format: "markdown"
  extract_images: true
  obsidian_vault: "~/Documents/Obsidian/Articles"

# 添加特定步骤
steps:
  # 继承的基础步骤会自动包含
  
  # 添加微信文章特定处理
  - name: "解析微信文章"
    tool: "wechat-parser-mcp"
    params:
      content: "{{steps.下载内容.result}}"
      extract_images: "{{variables.extract_images}}"
      format: "{{variables.output_format}}"
      
  - name: "保存到Obsidian"
    tool: "obsidian-mcp" 
    params:
      vault: "{{variables.obsidian_vault}}"
      content: "{{steps.解析微信文章.result.content}}"
      filename: "{{steps.解析微信文章.result.title}}.md"
      tags: ["微信文章", "{{steps.解析微信文章.result.author}}"]
      
  # 覆盖基础模板的步骤
  - name: "验证内容"
    tool: "validator-mcp"
    params:
      input: "{{steps.解析微信文章.result}}"
      rules:
        - "has_title"
        - "has_content" 
        - "valid_markdown_format"`, 'inherited-template')}
                          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'inherited-template' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        
                        <pre className="text-gray-300 overflow-x-auto">
                          <code>{`# 继承基础模板
extends: "base-content-processor.yml"

name: "微信文章处理器"
description: "专门处理微信公众号文章的工作流"
version: "1.1.0"

# 扩展变量
variables:
  output_format: "markdown"
  extract_images: true
  obsidian_vault: "~/Documents/Obsidian/Articles"

# 添加特定步骤
steps:
  # 继承的基础步骤会自动包含
  
  # 添加微信文章特定处理
  - name: "解析微信文章"
    tool: "wechat-parser-mcp"
    params:
      content: "{{steps.下载内容.result}}"
      extract_images: "{{variables.extract_images}}"
      format: "{{variables.output_format}}"
      
  - name: "保存到Obsidian"
    tool: "obsidian-mcp" 
    params:
      vault: "{{variables.obsidian_vault}}"
      content: "{{steps.解析微信文章.result.content}}"
      filename: "{{steps.解析微信文章.result.title}}.md"
      tags: ["微信文章", "{{steps.解析微信文章.result.author}}"]
      
  # 覆盖基础模板的步骤
  - name: "验证内容"
    tool: "validator-mcp"
    params:
      input: "{{steps.解析微信文章.result}}"
      rules:
        - "has_title"
        - "has_content" 
        - "valid_markdown_format"`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-6">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-900 mb-2">模板继承优势</h4>
                        <ul className="text-green-800 space-y-1 text-sm">
                          <li>• 减少重复配置，提高开发效率</li>
                          <li>• 统一管理公共逻辑，便于维护</li>
                          <li>• 支持多层继承和选择性覆盖</li>
                          <li>• 促进模板生态的标准化发展</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 完整示例 */}
              <section id="examples" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">完整示例</h2>
                
                <p className="text-gray-600 mb-8">
                  以下是几个实际应用场景的完整YAML模板示例，展示编钟的强大功能。
                </p>

                <div className="space-y-10">
                  {/* 示例1：微信文章到Obsidian */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-chime-gold" />
                      微信文章保存到Obsidian工作流
                    </h3>
                    <p className="text-gray-600 mb-4">
                      自动抓取微信公众号文章，解析内容和图片，保存到Obsidian笔记系统。
                    </p>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard(`name: "微信文章保存到Obsidian"
description: "自动抓取微信文章并保存到Obsidian笔记系统"
version: "1.2.0"
author: "编钟社区"
category: "content-management"
tags: ["微信", "obsidian", "内容管理"]

variables:
  # 输入参数
  article_url: ""
  obsidian_vault: "~/Documents/Obsidian"
  folder_name: "Articles/微信文章"
  
  # 处理选项
  download_images: true
  extract_audio: false
  add_metadata: true
  
  # 输出格式
  filename_template: "{{date}}-{{title}}"
  content_format: "markdown"

steps:
  # 第一步：抓取文章内容
  - name: "抓取微信文章"
    tool: "crawl-mcp"
    params:
      url: "{{variables.article_url}}"
      strategy: "conservative"
      timeout: 30000
      save_images: "{{variables.download_images}}"
    output_var: "article_data"
    retry:
      max_attempts: 3
      delay: 5
      backoff_factor: 2
    
  # 第二步：验证内容质量
  - name: "验证文章内容"
    tool: "content-validator-mcp"
    params:
      content: "{{steps.抓取微信文章.result.content}}"
      min_length: 500
      required_elements: ["title", "content"]
    condition:
      if: "{{variables.add_metadata}}"
    
  # 第三步：处理图片资源
  - name: "下载图片资源"
    type: "parallel"
    max_concurrency: 5
    condition:
      if: "{{variables.download_images}} and {{steps.抓取微信文章.result.images | length}} > 0"
    steps:
      # 动态生成图片下载任务
      - name: "下载图片{{item.index}}"
        tool: "image-downloader-mcp"
        params:
          url: "{{item.url}}"
          output_path: "{{variables.obsidian_vault}}/attachments/{{item.filename}}"
          max_size_mb: 10
        iterate_over: "{{steps.抓取微信文章.result.images}}"
        
  # 第四步：生成Markdown内容
  - name: "生成Markdown文档"
    tool: "markdown-generator-mcp"
    params:
      title: "{{steps.抓取微信文章.result.title}}"
      content: "{{steps.抓取微信文章.result.content}}"
      author: "{{steps.抓取微信文章.result.author}}"
      publish_date: "{{steps.抓取微信文章.result.publish_date}}"
      source_url: "{{variables.article_url}}"
      images: "{{steps.下载图片资源.results}}"
      template: |
        ---
        title: "{{title}}"
        author: "{{author}}"
        source: "{{source_url}}"
        created: "{{now}}"
        tags: ["微信文章", "{{author}}"]
        ---
        
        # {{title}}
        
        > 作者：{{author}}  
        > 来源：[微信公众号]({{source_url}})  
        > 保存时间：{{now}}
        
        {{content}}
        
        ---
        *本文通过编钟自动保存*
    output_var: "markdown_content"
    
  # 第五步：保存到Obsidian
  - name: "保存到Obsidian"
    tool: "obsidian-mcp"
    params:
      vault_path: "{{variables.obsidian_vault}}"
      folder: "{{variables.folder_name}}"
      filename: "{{variables.filename_template | replace('{date}', steps.抓取微信文章.result.publish_date | date('YYYY-MM-DD')) | replace('{title}', steps.抓取微信文章.result.title | slugify)}}.md"
      content: "{{steps.生成Markdown文档.result}}"
      overwrite: false
    output_var: "save_result"
    
  # 第六步：发送完成通知
  - name: "发送完成通知"
    tool: "notification-mcp"
    params:
      message: |
        ✅ 微信文章保存成功！
        
        📄 文章：{{steps.抓取微信文章.result.title}}
        👤 作者：{{steps.抓取微信文章.result.author}}
        📁 位置：{{steps.保存到Obsidian.result.file_path}}
        🖼️ 图片：{{steps.下载图片资源.success_count || 0}} 张
        
        🔗 原文链接：{{variables.article_url}}
      channels:
        - type: "system"
          level: "info"
    run_on: "success"
    
  # 错误处理：清理临时文件
  - name: "清理临时文件"
    tool: "file-cleaner-mcp"
    params:
      paths:
        - "{{temp_dir}}"
        - "{{cache_dir}}"
    run_on: "always"

# 错误处理配置
on_error:
  strategy: "rollback"
  notification:
    message: "❌ 微信文章保存失败：{{error.message}}"
    channels: ["system"]`, 'wechat-example')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'wechat-example' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      
                      <pre className="text-gray-300 overflow-x-auto text-sm max-h-96">
                        <code>{`name: "微信文章保存到Obsidian"
description: "自动抓取微信文章并保存到Obsidian笔记系统"
version: "1.2.0"
author: "编钟社区"
category: "content-management"
tags: ["微信", "obsidian", "内容管理"]

variables:
  # 输入参数
  article_url: ""
  obsidian_vault: "~/Documents/Obsidian"
  folder_name: "Articles/微信文章"
  
  # 处理选项
  download_images: true
  extract_audio: false
  add_metadata: true
  
  # 输出格式
  filename_template: "{{date}}-{{title}}"
  content_format: "markdown"

steps:
  # 第一步：抓取文章内容
  - name: "抓取微信文章"
    tool: "crawl-mcp"
    params:
      url: "{{variables.article_url}}"
      strategy: "conservative"
      timeout: 30000
      save_images: "{{variables.download_images}}"
    output_var: "article_data"
    retry:
      max_attempts: 3
      delay: 5
      backoff_factor: 2
    
  # 第二步：验证内容质量
  - name: "验证文章内容"
    tool: "content-validator-mcp"
    params:
      content: "{{steps.抓取微信文章.result.content}}"
      min_length: 500
      required_elements: ["title", "content"]
    condition:
      if: "{{variables.add_metadata}}"
    
  # 第三步：处理图片资源
  - name: "下载图片资源"
    type: "parallel"
    max_concurrency: 5
    condition:
      if: "{{variables.download_images}} and {{steps.抓取微信文章.result.images | length}} > 0"
    steps:
      # 动态生成图片下载任务
      - name: "下载图片{{item.index}}"
        tool: "image-downloader-mcp"
        params:
          url: "{{item.url}}"
          output_path: "{{variables.obsidian_vault}}/attachments/{{item.filename}}"
          max_size_mb: 10
        iterate_over: "{{steps.抓取微信文章.result.images}}"
        
  # 第四步：生成Markdown内容
  - name: "生成Markdown文档"
    tool: "markdown-generator-mcp"
    params:
      title: "{{steps.抓取微信文章.result.title}}"
      content: "{{steps.抓取微信文章.result.content}}"
      author: "{{steps.抓取微信文章.result.author}}"
      publish_date: "{{steps.抓取微信文章.result.publish_date}}"
      source_url: "{{variables.article_url}}"
      images: "{{steps.下载图片资源.results}}"
      template: |
        ---
        title: "{{title}}"
        author: "{{author}}"
        source: "{{source_url}}"
        created: "{{now}}"
        tags: ["微信文章", "{{author}}"]
        ---
        
        # {{title}}
        
        > 作者：{{author}}  
        > 来源：[微信公众号]({{source_url}})  
        > 保存时间：{{now}}
        
        {{content}}
        
        ---
        *本文通过编钟自动保存*
    output_var: "markdown_content"
    
  # 第五步：保存到Obsidian
  - name: "保存到Obsidian"
    tool: "obsidian-mcp"
    params:
      vault_path: "{{variables.obsidian_vault}}"
      folder: "{{variables.folder_name}}"
      filename: "{{variables.filename_template | replace('{date}', steps.抓取微信文章.result.publish_date | date('YYYY-MM-DD')) | replace('{title}', steps.抓取微信文章.result.title | slugify)}}.md"
      content: "{{steps.生成Markdown文档.result}}"
      overwrite: false
    output_var: "save_result"
    
  # 第六步：发送完成通知
  - name: "发送完成通知"
    tool: "notification-mcp"
    params:
      message: |
        ✅ 微信文章保存成功！
        
        📄 文章：{{steps.抓取微信文章.result.title}}
        👤 作者：{{steps.抓取微信文章.result.author}}
        📁 位置：{{steps.保存到Obsidian.result.file_path}}
        🖼️ 图片：{{steps.下载图片资源.success_count || 0}} 张
        
        🔗 原文链接：{{variables.article_url}}
      channels:
        - type: "system"
          level: "info"
    run_on: "success"
    
  # 错误处理：清理临时文件
  - name: "清理临时文件"
    tool: "file-cleaner-mcp"
    params:
      paths:
        - "{{temp_dir}}"
        - "{{cache_dir}}"
    run_on: "always"

# 错误处理配置
on_error:
  strategy: "rollback"
  notification:
    message: "❌ 微信文章保存失败：{{error.message}}"
    channels: ["system"]`}</code>
                      </pre>
                    </div>
                  </div>

                  {/* 示例2：批量文件处理 */}
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Settings className="h-5 w-5 mr-2 text-chime-gold" />
                      批量文件处理工作流
                    </h3>
                    <p className="text-gray-600 mb-4">
                      扫描指定目录，批量处理文件，支持格式转换、压缩和分类整理。
                    </p>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard(`name: "批量文件处理器"
description: "扫描、处理和整理文件的自动化工作流"
version: "2.1.0"
category: "file-management"

variables:
  input_directory: ""
  output_directory: ""
  file_patterns: ["*.jpg", "*.png", "*.pdf", "*.docx"]
  max_file_size_mb: 50
  enable_compression: true
  organize_by_type: true

steps:
  - name: "扫描输入目录"
    tool: "file-scanner-mcp"
    params:
      directory: "{{variables.input_directory}}"
      patterns: "{{variables.file_patterns}}"
      recursive: true
      max_size: "{{variables.max_file_size_mb}}MB"
    output_var: "file_list"
    
  - name: "文件分类处理"
    type: "dynamic"
    template:
      name: "处理{{item.type}}文件：{{item.name}}"
      tool: "{{#switch item.type}}{{#case 'image'}}image-processor-mcp{{/case}}{{#case 'document'}}document-processor-mcp{{/case}}{{#default}}file-mcp{{/default}}{{/switch}}"
      params:
        input: "{{item.path}}"
        output: "{{variables.output_directory}}/{{#if variables.organize_by_type}}{{item.type}}/{{/if}}{{item.name}}"
        compression: "{{variables.enable_compression}}"
        quality: 85
    iterate_over: "{{steps.扫描输入目录.result.files}}"
    max_concurrency: 4
    
  - name: "生成处理报告"
    tool: "report-generator-mcp"
    params:
      title: "文件处理报告"
      data: "{{steps.文件分类处理.results}}"
      output: "{{variables.output_directory}}/processing_report.html"
      template: "batch_processing"`, 'batch-processing-example')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'batch-processing-example' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      
                      <pre className="text-gray-300 overflow-x-auto text-sm max-h-64">
                        <code>{`name: "批量文件处理器"
description: "扫描、处理和整理文件的自动化工作流"
version: "2.1.0"
category: "file-management"

variables:
  input_directory: ""
  output_directory: ""
  file_patterns: ["*.jpg", "*.png", "*.pdf", "*.docx"]
  max_file_size_mb: 50
  enable_compression: true
  organize_by_type: true

steps:
  - name: "扫描输入目录"
    tool: "file-scanner-mcp"
    params:
      directory: "{{variables.input_directory}}"
      patterns: "{{variables.file_patterns}}"
      recursive: true
      max_size: "{{variables.max_file_size_mb}}MB"
    output_var: "file_list"
    
  - name: "文件分类处理"
    type: "dynamic"
    template:
      name: "处理{{item.type}}文件：{{item.name}}"
      tool: "{{#switch item.type}}{{#case 'image'}}image-processor-mcp{{/case}}{{#case 'document'}}document-processor-mcp{{/case}}{{#default}}file-mcp{{/default}}{{/switch}}"
      params:
        input: "{{item.path}}"
        output: "{{variables.output_directory}}/{{#if variables.organize_by_type}}{{item.type}}/{{/if}}{{item.name}}"
        compression: "{{variables.enable_compression}}"
        quality: 85
    iterate_over: "{{steps.扫描输入目录.result.files}}"
    max_concurrency: 4
    
  - name: "生成处理报告"
    tool: "report-generator-mcp"
    params:
      title: "文件处理报告"
      data: "{{steps.文件分类处理.results}}"
      output: "{{variables.output_directory}}/processing_report.html"
      template: "batch_processing"`}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* 最佳实践提示 */}
                <div className="bg-gradient-to-r from-chime-gold/10 to-chime-bronze/10 border border-chime-gold/20 rounded-lg p-6 mt-8">
                  <div className="flex items-start">
                    <Lightbulb className="h-6 w-6 text-chime-gold mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">编写优质模板的最佳实践</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">结构设计</h4>
                          <ul className="text-gray-700 space-y-1">
                            <li>• 使用清晰的命名约定</li>
                            <li>• 合理分解复杂任务</li>
                            <li>• 设置适当的超时时间</li>
                            <li>• 添加详细的注释说明</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">错误处理</h4>
                          <ul className="text-gray-700 space-y-1">
                            <li>• 为关键步骤设置重试机制</li>
                            <li>• 提供有意义的错误消息</li>
                            <li>• 实现优雅的失败回滚</li>
                            <li>• 记录详细的执行日志</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">性能优化</h4>
                          <ul className="text-gray-700 space-y-1">
                            <li>• 使用并行执行独立任务</li>
                            <li>• 避免不必要的数据传输</li>
                            <li>• 合理设置并发数量</li>
                            <li>• 缓存重复计算结果</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">维护性</h4>
                          <ul className="text-gray-700 space-y-1">
                            <li>• 使用版本控制管理模板</li>
                            <li>• 编写详细的使用文档</li>
                            <li>• 定期测试和更新</li>
                            <li>• 收集用户反馈改进</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
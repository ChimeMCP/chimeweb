'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Copy, 
  Download, 
  Terminal, 
  Settings, 
  Zap, 
  ArrowRight,
  Book,
  AlertTriangle,
  Lightbulb,
  Play,
  FileText
} from 'lucide-react'

export default function GettingStartedPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedCode(id)
      setTimeout(() => setCopiedCode(null), 2000)
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pb-16 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
              3步开始，5分钟上手 ⚡
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              零技术门槛，专家经验固化
              <br />
              从安装到第一个成功案例，只需5分钟
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            
            {/* 第一步：安装编钟 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-chime-gold to-chime-bronze text-white font-bold mr-4">
                  1
                </div>
                <h2 className="text-3xl font-bold text-gray-900">安装编钟</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                编钟提供多种安装方式，选择最适合你的环境：
              </p>
              
              <div className="space-y-6">
                {/* NPM 安装（推荐） */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white mr-4">
                      <Download className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">NPM 安装（推荐）</h3>
                      <p className="text-gray-600 mb-4">全局安装，一键使用</p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 relative group mb-4">
                        <button
                          onClick={() => copyToClipboard('npm install -g chimemcp', 'npm-install')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'npm-install' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>npm install -g chimemcp</code>
                        </pre>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        <p>✅ 支持 Node.js 16+</p>
                        <p>✅ 自动安装依赖</p>
                        <p>✅ 全局命令行工具</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Docker 安装 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white mr-4">
                      <Terminal className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Docker 安装</h3>
                      <p className="text-gray-600 mb-4">容器化部署，环境隔离</p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 relative group mb-4">
                        <button
                          onClick={() => copyToClipboard('docker run -it --rm chimemcp/chimemcp:latest', 'docker-install')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'docker-install' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>docker run -it --rm chimemcp/chimemcp:latest</code>
                        </pre>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        <p>✅ 无需配置环境</p>
                        <p>✅ 跨平台支持</p>
                        <p>✅ 版本隔离</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 源码安装 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 text-white mr-4">
                      <Book className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">源码安装</h3>
                      <p className="text-gray-600 mb-4">开发者模式，支持自定义</p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 relative group mb-4">
                        <button
                          onClick={() => copyToClipboard(`git clone https://github.com/ChimeMCP/chimemcp.git
cd chimemcp
npm install
npm run build
npm link`, 'source-install')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'source-install' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>{`git clone https://github.com/ChimeMCP/chimemcp.git
cd chimemcp
npm install
npm run build
npm link`}</code>
                        </pre>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        <p>✅ 最新开发版本</p>
                        <p>✅ 支持自定义修改</p>
                        <p>✅ 参与开源贡献</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 第二步：创建第一个工作流 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-chime-gold to-chime-bronze text-white font-bold mr-4">
                  2
                </div>
                <h2 className="text-3xl font-bold text-gray-900">创建第一个工作流</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                使用YAML模板创建你的第一个自动化工作流，以微信文章保存为例：
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <FileText className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">创建工作流文件</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-blue-900 mb-2">1. 创建工作流文件：</h4>
                      <div className="bg-gray-900 rounded-lg p-4 relative group mb-4">
                        <button
                          onClick={() => copyToClipboard('mkdir -p ~/chime-workflows && cd ~/chime-workflows', 'create-dir')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'create-dir' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>mkdir -p ~/chime-workflows && cd ~/chime-workflows</code>
                        </pre>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-medium text-blue-900 mb-2">2. 创建 wechat-to-obsidian.yaml：</h4>
                      <div className="bg-gray-900 rounded-lg p-4 relative group">
                        <button
                          onClick={() => copyToClipboard(`name: "微信文章保存到Obsidian"
description: "自动抓取微信文章并保存到Obsidian笔记"
version: "1.0.0"

inputs:
  - name: "wechat_url"
    description: "微信文章链接"
    type: "string"
    required: true

steps:
  - name: "抓取文章内容"
    mcp_server: "crawl-mcp"
    action: "crawl_wechat_article"
    inputs:
      url: "{{inputs.wechat_url}}"
      save_images: true
      clean_content: true
    outputs:
      - content
      - title
      - images

  - name: "保存到Obsidian"
    mcp_server: "obsidian-mcp"
    action: "create_note"
    inputs:
      title: "{{steps.0.outputs.title}}"
      content: "{{steps.0.outputs.content}}"
      folder: "微信文章"
      tags: ["微信", "文章", "收藏"]

  - name: "处理图片"
    mcp_server: "obsidian-mcp"
    action: "save_images"
    inputs:
      images: "{{steps.0.outputs.images}}"
      folder: "assets/images"

outputs:
  - name: "note_path"
    value: "{{steps.1.outputs.note_path}}"
  - name: "saved_images"
    value: "{{steps.2.outputs.saved_images}}"`, 'yaml-content')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'yaml-content' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto max-h-96 overflow-y-auto">
                          <code>{`name: "微信文章保存到Obsidian"
description: "自动抓取微信文章并保存到Obsidian笔记"
version: "1.0.0"

inputs:
  - name: "wechat_url"
    description: "微信文章链接"
    type: "string"
    required: true

steps:
  - name: "抓取文章内容"
    mcp_server: "crawl-mcp"
    action: "crawl_wechat_article"
    inputs:
      url: "{{inputs.wechat_url}}"
      save_images: true
      clean_content: true
    outputs:
      - content
      - title
      - images

  - name: "保存到Obsidian"
    mcp_server: "obsidian-mcp"
    action: "create_note"
    inputs:
      title: "{{steps.0.outputs.title}}"
      content: "{{steps.0.outputs.content}}"
      folder: "微信文章"
      tags: ["微信", "文章", "收藏"]

  - name: "处理图片"
    mcp_server: "obsidian-mcp"
    action: "save_images"
    inputs:
      images: "{{steps.0.outputs.images}}"
      folder: "assets/images"

outputs:
  - name: "note_path"
    value: "{{steps.1.outputs.note_path}}"
  - name: "saved_images"
    value: "{{steps.2.outputs.saved_images}}"`}</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 第三步：运行工作流 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-chime-gold to-chime-bronze text-white font-bold mr-4">
                  3
                </div>
                <h2 className="text-3xl font-bold text-gray-900">运行工作流</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                现在可以运行你的第一个工作流了：
              </p>
              
              <div className="space-y-6">
                {/* 命令行运行 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white mr-4">
                      <Play className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">命令行运行</h3>
                      <p className="text-gray-600 mb-4">使用 chime 命令运行工作流</p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 relative group mb-4">
                        <button
                          onClick={() => copyToClipboard('chime run wechat-to-obsidian.yaml --input wechat_url="https://mp.weixin.qq.com/s/xxx"', 'run-command')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'run-command' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>chime run wechat-to-obsidian.yaml --input wechat_url="https://mp.weixin.qq.com/s/xxx"</code>
                        </pre>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        <p>✅ 自动执行所有步骤</p>
                        <p>✅ 实时显示进度</p>
                        <p>✅ 错误自动重试</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 交互式运行 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white mr-4">
                      <Settings className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">交互式运行</h3>
                      <p className="text-gray-600 mb-4">引导式输入，适合新手</p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 relative group mb-4">
                        <button
                          onClick={() => copyToClipboard('chime run wechat-to-obsidian.yaml --interactive', 'interactive-run')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'interactive-run' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>chime run wechat-to-obsidian.yaml --interactive</code>
                        </pre>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        <p>✅ 逐步引导输入</p>
                        <p>✅ 参数验证提示</p>
                        <p>✅ 零学习成本</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 预期结果 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-3">🎉 恭喜！你的第一个工作流运行成功</h3>
                    <div className="text-green-800 space-y-2">
                      <p>✅ 微信文章内容已自动抓取</p>
                      <p>✅ 文章已保存到 Obsidian 的"微信文章"文件夹</p>
                      <p>✅ 图片已下载到本地并正确链接</p>
                      <p>✅ 自动添加了标签：#微信 #文章 #收藏</p>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 rounded-lg">
                      <p className="text-sm text-green-700">
                        <strong>效率提升：</strong>从手动复制粘贴的2小时，缩短到30秒自动完成！
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 下一步 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">🚀 下一步</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-chime-gold/20 text-chime-gold mr-3">
                      <Book className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">探索更多模板</h3>
                      <p className="text-gray-600 text-sm mb-3">发现52个专业模板，覆盖各种使用场景</p>
                      <a href="/templates" className="text-chime-gold hover:text-chime-bronze text-sm font-medium">
                        查看模板库 →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-chime-gold/20 text-chime-gold mr-3">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">学习进阶用法</h3>
                      <p className="text-gray-600 text-sm mb-3">掌握YAML语法和工作流编排技巧</p>
                      <a href="/docs" className="text-chime-gold hover:text-chime-bronze text-sm font-medium">
                        查看文档 →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-chime-gold/20 text-chime-gold mr-3">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">浏览使用场景</h3>
                      <p className="text-gray-600 text-sm mb-3">看看其他人如何使用编钟提升效率</p>
                      <a href="/scenarios" className="text-chime-gold hover:text-chime-bronze text-sm font-medium">
                        查看场景 →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start">
                    <div className="p-2 rounded-lg bg-chime-gold/20 text-chime-gold mr-3">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">加入社区</h3>
                      <p className="text-gray-600 text-sm mb-3">与120+开发者交流经验，获得帮助</p>
                      <a href="/community" className="text-chime-gold hover:text-chime-bronze text-sm font-medium">
                        加入社区 →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 常见问题 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">❓ 常见问题</h2>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Q: 需要编程基础吗？</h3>
                  <p className="text-gray-600">A: 完全不需要！编钟使用简单的YAML配置，就像填表格一样简单。我们提供了52个现成模板，大部分情况下直接使用即可。</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Q: 支持哪些MCP Server？</h3>
                  <p className="text-gray-600">A: 目前支持50+个精选MCP Server，包括网页抓取、文档处理、数据分析、通知发送等各个领域。查看完整列表请访问 <a href="/mcp-market" className="text-chime-gold">MCP市场</a>。</p>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Q: 工作流执行失败怎么办？</h3>
                  <p className="text-gray-600">A: 编钟内置智能重试和错误恢复机制，98.5%的工作流都能成功执行。如果遇到问题，可以查看详细日志或到社区寻求帮助。</p>
                </div>
              </div>
            </motion.section>

          </div>
        </div>
      </section>
    </div>
  )
} 
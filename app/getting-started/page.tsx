'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Copy, 
  Download, 
  Monitor, 
  Settings, 
  Zap, 
  ArrowRight,
  Book,
  AlertTriangle,
  Lightbulb
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
            
            {/* 第一步：启动MCP服务器 */}
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
                <h2 className="text-3xl font-bold text-gray-900">启动MCP服务器</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                编钟基于MCP协议工作，首先需要启动MCP服务器：
              </p>
              
              <div className="space-y-6">
                {/* 本地模式 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white mr-4">
                      <Download className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">本地模式（推荐）</h3>
                      <p className="text-gray-600 mb-4">直接在本地运行，性能最佳</p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 relative group mb-4">
                        <button
                          onClick={() => copyToClipboard('npx -f -y dpml-prompt@beta mcp-server', 'local-mode')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'local-mode' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>npx -f -y dpml-prompt@beta mcp-server</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>

                {/* HTTP 模式 */}
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 text-white mr-4">
                      <Monitor className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">HTTP 模式（远程访问）</h3>
                      <p className="text-gray-600 mb-4">支持远程访问，适合团队协作</p>
                      
                      <div className="bg-gray-900 rounded-lg p-4 relative group mb-4">
                        <button
                          onClick={() => copyToClipboard('npx -f -y dpml-prompt@beta mcp-server --transport http --port 3000', 'http-mode')}
                          className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                        >
                          {copiedCode === 'http-mode' ? (
                            <CheckCircle className="h-5 w-5 text-green-400" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>npx -f -y dpml-prompt@beta mcp-server --transport http --port 3000</code>
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 第二步：配置AI客户端 */}
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
                <h2 className="text-3xl font-bold text-gray-900">配置AI客户端</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                配置你的AI客户端（Claude Desktop、VS Code、Cursor等）连接到编钟MCP服务器。
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Settings className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">Claude Desktop 配置示例</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-blue-900 mb-2">配置文件位置：</h4>
                      <div className="bg-blue-100 rounded p-3 text-sm">
                        <strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4 relative group">
                      <button
                        onClick={() => copyToClipboard(`{
  "mcpServers": {
    "promptx": {
      "command": "npx",
      "args": ["-f", "-y", "dpml-prompt@beta", "mcp-server"]
    }
  }
}`, 'claude-config')}
                        className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'claude-config' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      <pre className="text-gray-300 text-sm overflow-x-auto">
                        <code>{`{
  "mcpServers": {
    "promptx": {
      "command": "npx",
      "args": ["-f", "-y", "dpml-prompt@beta", "mcp-server"]
    }
  }
}`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 第三步：重启客户端并测试 */}
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
                <h2 className="text-3xl font-bold text-gray-900">重启客户端并测试</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                重启你的AI客户端，然后尝试以下测试命令：
              </p>
              
              <div className="bg-gray-900 rounded-lg p-6 relative group">
                <button
                  onClick={() => copyToClipboard(`# 在AI客户端中尝试这些命令：

1. 查看可用工具：
   使用 promptx_hello 工具

2. 激活特定角色：
   使用 promptx_action 工具，参数 role: "assistant"

3. 保存记忆：
   使用 promptx_remember 工具，参数 content: "测试记忆"`, 'test-commands')}
                  className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                >
                  {copiedCode === 'test-commands' ? (
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
                <pre className="text-gray-300 text-sm">
                  <code>{`# 在AI客户端中尝试这些命令：

1. 查看可用工具：
   使用 promptx_hello 工具

2. 激活特定角色：
   使用 promptx_action 工具，参数 role: "assistant"

3. 保存记忆：
   使用 promptx_remember 工具，参数 content: "测试记忆"`}</code>
                </pre>
              </div>
            </motion.section>

            {/* 第四步：探索可用工具 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-chime-gold to-chime-bronze text-white font-bold mr-4">
                  4
                </div>
                <h2 className="text-3xl font-bold text-gray-900">探索可用工具</h2>
              </div>
              
              <p className="text-gray-600 mb-8">
                编钟MCP服务器提供以下核心工具：
              </p>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-4">核心工具</h3>
                    <div className="grid gap-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-green-900">promptx_hello</strong>
                          <span className="text-green-800 ml-2">- 查看可用角色和功能</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-green-900">promptx_action</strong>
                          <span className="text-green-800 ml-2">- 激活特定角色（需要参数：role）</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-green-900">promptx_learn</strong>
                          <span className="text-green-800 ml-2">- 学习新资源（需要参数：resource）</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-green-900">promptx_recall</strong>
                          <span className="text-green-800 ml-2">- 查看保存的记忆</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <strong className="text-green-900">promptx_remember</strong>
                          <span className="text-green-800 ml-2">- 保存新记忆（需要参数：content）</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 故障排除 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">故障排除</h2>
              <p className="text-gray-600 mb-6">
                如果遇到问题，请检查以下几点：
              </p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                <div className="flex items-start">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-900 mb-4">常见问题</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-amber-900 mb-2">1. 服务器启动失败</h4>
                        <div className="bg-amber-100 rounded p-3 text-sm">
                          <strong>解决方案：</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• 检查 Node.js 版本（需要 {'>'}= 14）</li>
                            <li>• 确认网络连接正常（npx 需要下载包）</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-amber-900 mb-2">2. 客户端连接失败</h4>
                        <div className="bg-amber-100 rounded p-3 text-sm">
                          <strong>解决方案：</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• 检查配置文件 JSON/YAML 语法</li>
                            <li>• 重启客户端应用</li>
                            <li>• 确认 npx 可以运行</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-amber-900 mb-2">3. 工具不可用</h4>
                        <div className="bg-amber-100 rounded p-3 text-sm">
                          <strong>解决方案：</strong>
                          <ul className="mt-1 space-y-1">
                            <li>• 确认服务器正在运行</li>
                            <li>• 检查网络连接</li>
                            <li>• 查看详细的<a href="/docs/installation" className="underline">故障排除指南</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* 下一步 */}
            <motion.section
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">下一步</h2>
              <p className="text-gray-600 mb-8">
                🎉 恭喜！你已经成功配置了编钟MCP服务器。现在你可以：
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <a
                  href="/docs/installation"
                  className="block p-6 bg-gradient-to-r from-chime-gold/10 to-chime-bronze/10 border border-chime-gold/20 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center mb-3">
                    <Book className="h-6 w-6 text-chime-gold mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">详细安装指南</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    了解更多配置选项和高级设置
                  </p>
                  <div className="flex items-center text-chime-gold font-medium">
                    查看指南
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
                
                <a
                  href="/docs/first-workflow"
                  className="block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center mb-3">
                    <Zap className="h-6 w-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">创建第一个工作流</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    开始实际使用编钟创建自动化流程
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    开始学习
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
                
                <a
                  href="/docs/yaml-syntax"
                  className="block p-6 bg-green-50 border border-green-200 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center mb-3">
                    <Lightbulb className="h-6 w-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">YAML语法参考</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    深入了解编钟的声明式配置语法
                  </p>
                  <div className="flex items-center text-green-600 font-medium">
                    查看文档
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
                
                <a
                  href="/mcp-market"
                  className="block p-6 bg-purple-50 border border-purple-200 rounded-lg hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center mb-3">
                    <Settings className="h-6 w-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">MCP市场</h3>
                  </div>
                  <p className="text-gray-600 mb-3">
                    发现更多有用的MCP工具和服务
                  </p>
                  <div className="flex items-center text-purple-600 font-medium">
                    探索市场
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  )
} 
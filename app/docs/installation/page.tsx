'use client'

import { motion } from 'framer-motion'
import { 
  Download, 
  Terminal, 
  CheckCircle, 
  AlertTriangle, 
  Copy,
  ExternalLink,
  Monitor,
  Apple,
  Zap,
  ArrowRight,
  Book,
  Settings
} from 'lucide-react'
import { useState } from 'react'

export default function InstallationPage() {
  const [copiedCode, setCopiedCode] = useState<string>('')

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-chime-gold/10 via-white to-chime-bronze/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading mb-6">
              快速上手 ⚡
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              2分钟配置编钟MCP服务器，开始你的自动化之旅
            </p>
          </motion.div>
        </div>
      </section>

      {/* 主内容区域 */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 justify-center">
            {/* 主要内容 */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {/* 启动服务器 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">启动服务器</h2>
                <p className="text-gray-600 mb-8">
                  编钟基于MCP协议，提供本地和HTTP两种运行模式：
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
                        
                        <div className="mt-4">
                          <h4 className="font-medium text-gray-900 mb-2">检查服务器状态：</h4>
                          <div className="bg-gray-900 rounded-lg p-4 relative group">
                            <button
                              onClick={() => copyToClipboard('curl http://localhost:3000/health', 'health-check')}
                              className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                            >
                              {copiedCode === 'health-check' ? (
                                <CheckCircle className="h-5 w-5 text-green-400" />
                              ) : (
                                <Copy className="h-5 w-5" />
                              )}
                            </button>
                            <pre className="text-gray-300 text-sm overflow-x-auto">
                              <code>curl http://localhost:3000/health</code>
                            </pre>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 客户端配置 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">客户端配置</h2>
                <p className="text-gray-600 mb-6">
                  配置你的AI客户端以连接编钟MCP服务器：
                </p>
                
                <div className="space-y-6">
                  {/* Claude Desktop */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Claude Desktop（仅本地模式）</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">配置文件位置：</h4>
                      <div className="space-y-2">
                        <div className="bg-gray-50 rounded p-3 text-sm">
                          <strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>
                        </div>
                        <div className="bg-gray-50 rounded p-3 text-sm">
                          <strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code>
                        </div>
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

                  {/* VS Code */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">VS Code</h3>
                    <p className="text-gray-600 mb-4">创建 <code className="bg-gray-100 px-1 rounded">.vscode/mcp.json</code>：</p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">本地模式：</h4>
                        <div className="bg-gray-900 rounded-lg p-4 relative group">
                          <button
                            onClick={() => copyToClipboard(`{
  "servers": {
    "promptx": {
      "command": "npx",
      "args": ["-f", "-y", "dpml-prompt@beta", "mcp-server"]
    }
  }
}`, 'vscode-local')}
                            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                          >
                            {copiedCode === 'vscode-local' ? (
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            ) : (
                              <Copy className="h-5 w-5" />
                            )}
                          </button>
                          <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`{
  "servers": {
    "promptx": {
      "command": "npx",
      "args": ["-f", "-y", "dpml-prompt@beta", "mcp-server"]
    }
  }
}`}</code>
                          </pre>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">HTTP 模式：</h4>
                        <div className="bg-gray-900 rounded-lg p-4 relative group">
                          <button
                            onClick={() => copyToClipboard(`{
  "servers": {
    "promptx": {
      "type": "http",
      "url": "http://localhost:3000/mcp"
    }
  }
}`, 'vscode-http')}
                            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                          >
                            {copiedCode === 'vscode-http' ? (
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            ) : (
                              <Copy className="h-5 w-5" />
                            )}
                          </button>
                          <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`{
  "servers": {
    "promptx": {
      "type": "http",
      "url": "http://localhost:3000/mcp"
    }
  }
}`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cursor */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cursor</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">本地模式：</h4>
                        <div className="bg-gray-900 rounded-lg p-4 relative group">
                          <button
                            onClick={() => copyToClipboard(`{
  "mcpServers": {
    "promptx": {
      "command": "npx",
      "args": ["-f", "-y", "dpml-prompt@beta", "mcp-server"]
    }
  }
}`, 'cursor-local')}
                            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                          >
                            {copiedCode === 'cursor-local' ? (
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
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">HTTP 模式：</h4>
                        <div className="bg-gray-900 rounded-lg p-4 relative group">
                          <button
                            onClick={() => copyToClipboard(`{
  "mcpServers": {
    "promptx": {
      "url": "http://localhost:3000/mcp"
    }
  }
}`, 'cursor-http')}
                            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                          >
                            {copiedCode === 'cursor-http' ? (
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            ) : (
                              <Copy className="h-5 w-5" />
                            )}
                          </button>
                          <pre className="text-gray-300 text-sm overflow-x-auto">
                            <code>{`{
  "mcpServers": {
    "promptx": {
      "url": "http://localhost:3000/mcp"
    }
  }
}`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 测试工具 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">测试工具</h2>
                <p className="text-gray-600 mb-6">
                  重启客户端后，尝试使用以下工具：
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">基础工具</h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• <code className="bg-blue-100 px-1 rounded">promptx_hello</code> - 查看可用角色</li>
                        <li>• <code className="bg-blue-100 px-1 rounded">promptx_action</code> - 激活角色（需要参数：role）</li>
                        <li>• <code className="bg-blue-100 px-1 rounded">promptx_learn</code> - 学习资源（需要参数：resource）</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">记忆工具</h4>
                      <ul className="text-blue-800 text-sm space-y-1">
                        <li>• <code className="bg-blue-100 px-1 rounded">promptx_recall</code> - 查看记忆</li>
                        <li>• <code className="bg-blue-100 px-1 rounded">promptx_remember</code> - 保存记忆（需要参数：content）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 故障排除 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">故障排除</h2>
                <p className="text-gray-600 mb-6">
                  遇到问题？这里有常见问题的解决方案：
                </p>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <AlertTriangle className="h-6 w-6 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-amber-900 mb-3">常见问题</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-amber-900 mb-2">1. 服务器启动失败</h4>
                            <div className="bg-amber-100 rounded p-3 text-sm">
                              <strong>解决方案：</strong>
                              <ul className="mt-1 space-y-1">
                                <li>• 检查 Node.js 版本：<code className="bg-amber-200 px-1 rounded">node --version</code>（需要 {'>'}= 14）</li>
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
                                <li>• 确认 npx 可以运行：<code className="bg-amber-200 px-1 rounded">npx -f -y dpml-prompt@beta --help</code></li>
                              </ul>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-900 mb-2">3. HTTP 模式报错</h4>
                            <div className="bg-amber-100 rounded p-3 text-sm">
                              <strong>解决方案：</strong>
                              <ul className="mt-1 space-y-1">
                                <li>• 确认服务器正在运行</li>
                                <li>• 检查防火墙设置</li>
                                <li>• 使用 curl 测试连接</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 下一步 */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">下一步</h2>
                <p className="text-gray-600 mb-8">
                  🎉 恭喜！编钟MCP服务器已成功配置。现在你可以：
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="/docs/first-workflow"
                    className="block p-6 bg-gradient-to-r from-chime-gold/10 to-chime-bronze/10 border border-chime-gold/20 rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-center mb-3">
                      <Zap className="h-6 w-6 text-chime-gold mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">创建第一个工作流</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      学习如何创建和运行你的第一个 YAML 模板
                    </p>
                    <div className="flex items-center text-chime-gold font-medium">
                      开始学习
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  
                  <a
                    href="/docs/yaml-syntax"
                    className="block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-center mb-3">
                      <Book className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">学习 YAML 语法</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      深入了解编钟的声明式配置语法
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      查看文档
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
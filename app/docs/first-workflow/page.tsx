'use client'

import { motion } from 'framer-motion'
import { 
  Play, 
  FileText, 
  CheckCircle, 
  Copy,
  ArrowRight,
  Zap,
  Settings,
  Book,
  AlertCircle,
  Clock,
  Target,
  Terminal
} from 'lucide-react'
import { useState } from 'react'

export default function FirstWorkflowPage() {
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
              创建第一个工作流 🚀
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              5分钟学会创建和运行你的第一个编钟YAML模板
            </p>
            
            {/* 学习目标 */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <div className="flex items-start">
                <Target className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">学习目标</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• 理解编钟工作流的基本概念</li>
                    <li>• 创建你的第一个YAML模板</li>
                    <li>• 运行工作流并查看结果</li>
                    <li>• 掌握基本的调试技巧</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* 预计时间 */}
            <div className="flex items-center justify-center text-gray-600 mb-8">
              <Clock className="h-5 w-5 mr-2" />
              预计完成时间：5-10分钟
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
                  
                  <a href="#concepts" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Book className="h-4 w-4 mr-2" />
                    基本概念
                  </a>
                  
                  <a href="#create-template" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <FileText className="h-4 w-4 mr-2" />
                    创建模板
                  </a>
                  
                  <a href="#run-workflow" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Play className="h-4 w-4 mr-2" />
                    运行工作流
                  </a>
                  
                  <a href="#debugging" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Settings className="h-4 w-4 mr-2" />
                    调试技巧
                  </a>
                  
                  <a href="#next-steps" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    下一步
                  </a>
                </nav>
              </div>
            </div>

            {/* 主要内容 */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {/* 基本概念 */}
              <section id="concepts" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">基本概念</h2>
                
                <div className="bg-gradient-to-r from-chime-gold/10 to-chime-bronze/10 border border-chime-gold/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">什么是编钟工作流？</h3>
                  <p className="text-gray-700 mb-4">
                    编钟工作流是一个用YAML格式定义的自动化流程，它描述了如何协调多个MCP Server来完成复杂任务。
                    每个工作流包含以下核心组件：
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">📝 元数据</h4>
                      <p className="text-sm text-gray-600">工作流的基本信息，如名称、描述、版本等</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">🔧 变量</h4>
                      <p className="text-sm text-gray-600">可配置的参数，让模板更加灵活</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">⚡ 步骤</h4>
                      <p className="text-sm text-gray-600">具体的执行任务，调用各种MCP Server</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">🛡️ 错误处理</h4>
                      <p className="text-sm text-gray-600">异常情况的处理策略和恢复机制</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 创建模板 */}
              <section id="create-template" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">创建你的第一个模板</h2>
                <p className="text-gray-600 mb-6">
                  让我们创建一个简单的"Hello World"工作流，它会获取一个网页内容并保存到本地文件。
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">步骤1：创建模板文件</h3>
                    <p className="text-gray-600 mb-4">在你的项目目录中创建一个新的YAML文件：</p>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard('touch hello-world.yml', 'create-file')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'create-file' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      <pre className="text-gray-300 text-sm">
                        <code>touch hello-world.yml</code>
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">步骤2：编写模板内容</h3>
                    <p className="text-gray-600 mb-4">将以下内容复制到 hello-world.yml 文件中：</p>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard(`name: "Hello World 工作流"
description: "我的第一个编钟工作流"
version: "1.0.0"
author: "编钟新手"

# 变量定义
variables:
  target_url: "https://httpbin.org/json"
  output_file: "./hello-world-result.txt"

# 执行步骤
steps:
  - name: "获取网页内容"
    tool: "fetch-mcp"
    params:
      url: "{{variables.target_url}}"
      timeout: 10
    output_var: "web_content"
    
  - name: "保存到文件"
    tool: "file-mcp"
    params:
      action: "write"
      path: "{{variables.output_file}}"
      content: |
        Hello World from ChimeMCP!
        
        获取时间: {{now}}
        网页内容: {{steps.获取网页内容.result}}
        
        🎉 你的第一个工作流运行成功！
    output_var: "save_result"`, 'template-content')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'template-content' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      <pre className="text-gray-300 text-sm overflow-x-auto whitespace-pre-wrap">
                        <code>{`name: "Hello World 工作流"
description: "我的第一个编钟工作流"
version: "1.0.0"
author: "编钟新手"

# 变量定义
variables:
  target_url: "https://httpbin.org/json"
  output_file: "./hello-world-result.txt"

# 执行步骤
steps:
  - name: "获取网页内容"
    tool: "fetch-mcp"
    params:
      url: "{{variables.target_url}}"
      timeout: 10
    output_var: "web_content"
    
  - name: "保存到文件"
    tool: "file-mcp"
    params:
      action: "write"
      path: "{{variables.output_file}}"
      content: |
        Hello World from ChimeMCP!
        
        获取时间: {{now}}
        网页内容: {{steps.获取网页内容.result}}
        
        🎉 你的第一个工作流运行成功！
    output_var: "save_result"`}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* 运行工作流 */}
              <section id="run-workflow" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">运行工作流</h2>
                <p className="text-gray-600 mb-6">
                  现在让我们运行刚刚创建的工作流，看看编钟是如何协调MCP Server的。
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">步骤3：验证模板语法</h3>
                    <p className="text-gray-600 mb-4">在运行之前，先验证YAML语法是否正确：</p>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard('chime validate hello-world.yml', 'validate-template')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'validate-template' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      <pre className="text-gray-300 text-sm">
                        <code>chime validate hello-world.yml</code>
                      </pre>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-green-900">预期输出</h4>
                          <pre className="text-green-800 text-sm mt-2 font-mono">
{`✅ YAML 语法检查: 通过
✅ 变量定义检查: 通过  
✅ 步骤依赖检查: 通过
✅ MCP Server 可用性: 通过
🎉 模板验证成功！`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">步骤4：运行工作流</h3>
                    <p className="text-gray-600 mb-4">使用以下命令运行你的第一个工作流：</p>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard('chime run hello-world.yml', 'run-workflow')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'run-workflow' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      <pre className="text-gray-300 text-sm">
                        <code>chime run hello-world.yml</code>
                      </pre>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start">
                        <Play className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-blue-900">执行过程</h4>
                          <pre className="text-blue-800 text-sm mt-2 font-mono">
{`🚀 开始执行工作流: Hello World 工作流
📋 加载变量配置...
⚡ [1/2] 执行步骤: 获取网页内容
   └─ 调用 fetch-mcp: https://httpbin.org/json
   └─ ✅ 成功获取 245 字节数据
⚡ [2/2] 执行步骤: 保存到文件  
   └─ 调用 file-mcp: ./hello-world-result.txt
   └─ ✅ 文件保存成功
🎉 工作流执行完成! 耗时: 1.2秒`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">步骤5：查看结果</h3>
                    <p className="text-gray-600 mb-4">检查生成的文件内容：</p>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard('cat hello-world-result.txt', 'check-result')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'check-result' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      <pre className="text-gray-300 text-sm">
                        <code>cat hello-world-result.txt</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* 调试技巧 */}
              <section id="debugging" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">调试技巧</h2>
                <p className="text-gray-600 mb-6">
                  当工作流出现问题时，这些调试技巧能帮你快速定位和解决问题。
                </p>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                    <div className="flex items-start">
                      <AlertCircle className="h-6 w-6 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-amber-900 mb-3">常见问题和解决方案</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-amber-900 mb-2">1. YAML语法错误</h4>
                            <p className="text-amber-800 text-sm mb-2">错误信息：<code className="bg-amber-100 px-1 rounded">YAML parsing error</code></p>
                            <div className="bg-amber-100 rounded p-3 text-sm">
                              <strong>解决方案：</strong>
                              <ul className="mt-1 space-y-1">
                                <li>• 检查缩进是否使用空格（不要用Tab）</li>
                                <li>• 确保冒号后有空格</li>
                                <li>• 字符串值用引号包围</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-900 mb-2">2. MCP Server 不可用</h4>
                            <p className="text-amber-800 text-sm mb-2">错误信息：<code className="bg-amber-100 px-1 rounded">MCP Server 'fetch-mcp' not found</code></p>
                            <div className="bg-amber-100 rounded p-3 text-sm">
                              <strong>解决方案：</strong>
                              <ul className="mt-1 space-y-1">
                                <li>• 运行 <code>chime doctor</code> 检查MCP Server状态</li>
                                <li>• 确保所需的MCP Server已安装和配置</li>
                                <li>• 检查网络连接</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-amber-900 mb-2">3. 变量引用错误</h4>
                            <p className="text-amber-800 text-sm mb-2">错误信息：<code className="bg-amber-100 px-1 rounded">Variable 'target_url' not defined</code></p>
                            <div className="bg-amber-100 rounded p-3 text-sm">
                              <strong>解决方案：</strong>
                              <ul className="mt-1 space-y-1">
                                <li>• 检查变量名拼写</li>
                                <li>• 确保变量在 variables 部分定义</li>
                                                                 <li>• 使用正确的模板语法 <code>{`{{variables.name}}`}</code></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">详细日志模式</h3>
                    <p className="text-gray-600 mb-4">使用详细模式获取更多调试信息：</p>
                    
                    <div className="bg-gray-900 rounded-lg p-6 relative group">
                      <button
                        onClick={() => copyToClipboard('chime run hello-world.yml --verbose', 'verbose-mode')}
                        className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      >
                        {copiedCode === 'verbose-mode' ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : (
                          <Copy className="h-5 w-5" />
                        )}
                      </button>
                      <pre className="text-gray-300 text-sm">
                        <code>chime run hello-world.yml --verbose</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* 下一步 */}
              <section id="next-steps" className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">下一步</h2>
                <p className="text-gray-600 mb-8">
                  🎉 恭喜！你已经成功创建并运行了第一个编钟工作流。现在你可以：
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <a
                    href="/docs/yaml-syntax"
                    className="block p-6 bg-gradient-to-r from-chime-gold/10 to-chime-bronze/10 border border-chime-gold/20 rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-center mb-3">
                      <Book className="h-6 w-6 text-chime-gold mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">深入学习YAML语法</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      掌握更多高级特性，如条件判断、并行执行、错误处理等
                    </p>
                    <div className="flex items-center text-chime-gold font-medium">
                      学习高级语法
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  
                  <a
                    href="/docs/commands"
                    className="block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-center mb-3">
                      <Terminal className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">掌握常用命令</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      学习编钟CLI的所有命令，提升工作效率
                    </p>
                    <div className="flex items-center text-blue-600 font-medium">
                      查看命令参考
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  
                  <a
                    href="/templates"
                    className="block p-6 bg-purple-50 border border-purple-200 rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-center mb-3">
                      <Zap className="h-6 w-6 text-purple-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">探索模板市场</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      发现社区贡献的优质模板，快速解决常见需求
                    </p>
                    <div className="flex items-center text-purple-600 font-medium">
                      浏览模板
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                  
                  <a
                    href="/docs/template-development"
                    className="block p-6 bg-green-50 border border-green-200 rounded-lg hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-center mb-3">
                      <Settings className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">开发自己的模板</h3>
                    </div>
                    <p className="text-gray-600 mb-3">
                      学习如何创建可复用的高质量模板
                    </p>
                    <div className="flex items-center text-green-600 font-medium">
                      开始开发
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
'use client'

import { motion } from 'framer-motion'
import { 
  Terminal, 
  Copy, 
  CheckCircle, 
  Play,
  FileText,
  Search,
  Settings,
  Zap,
  Book,
  ArrowRight,
  AlertTriangle,
  Info
} from 'lucide-react'
import { useState } from 'react'

export default function CommandsPage() {
  const [copiedCode, setCopiedCode] = useState<string>('')

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(''), 2000)
  }

  const commands = [
    {
      name: 'chime run',
      description: '运行指定的工作流模板',
      category: '核心命令',
      usage: 'chime run <template.yml> [options]',
      options: [
        { flag: '--verbose, -v', description: '显示详细执行日志' },
        { flag: '--dry-run', description: '模拟运行，不执行实际操作' },
        { flag: '--var key=value', description: '覆盖模板变量值' },
        { flag: '--config <file>', description: '指定配置文件' }
      ],
      examples: [
        'chime run workflow.yml',
        'chime run workflow.yml --verbose',
        'chime run workflow.yml --var url=https://example.com',
        'chime run workflow.yml --dry-run'
      ]
    },
    {
      name: 'chime validate',
      description: '验证YAML模板的语法和配置',
      category: '核心命令',
      usage: 'chime validate <template.yml>',
      options: [
        { flag: '--strict', description: '启用严格模式验证' },
        { flag: '--format json', description: '以JSON格式输出结果' }
      ],
      examples: [
        'chime validate workflow.yml',
        'chime validate workflow.yml --strict',
        'chime validate workflow.yml --format json'
      ]
    },
    {
      name: 'chime doctor',
      description: '检查系统环境和MCP Server状态',
      category: '诊断命令',
      usage: 'chime doctor [options]',
      options: [
        { flag: '--fix', description: '自动修复发现的问题' },
        { flag: '--mcp-only', description: '只检查MCP Server状态' }
      ],
      examples: [
        'chime doctor',
        'chime doctor --fix',
        'chime doctor --mcp-only'
      ]
    }
  ]

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
              常用命令 ⌨️
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              掌握编钟CLI的所有命令，提升你的工作效率
            </p>
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
                  
                  <a href="#core-commands" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Terminal className="h-4 w-4 mr-2" />
                    核心命令
                  </a>
                  
                  <a href="#template-commands" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <FileText className="h-4 w-4 mr-2" />
                    模板命令
                  </a>
                  
                  <a href="#diagnostic-commands" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Settings className="h-4 w-4 mr-2" />
                    诊断命令
                  </a>
                  
                  <a href="#global-options" className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-chime-gold hover:bg-gray-50 rounded-md transition-colors">
                    <Zap className="h-4 w-4 mr-2" />
                    全局选项
                  </a>
                </nav>
              </div>
            </div>

            {/* 主要内容 */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {/* 快速参考 */}
              <section className="mb-12">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Info className="h-6 w-6 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">快速参考</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-blue-800">
                        <div>
                          <h4 className="font-medium mb-2">常用命令</h4>
                          <ul className="text-sm space-y-1">
                            <li>• <code className="bg-blue-100 px-1 rounded">chime run</code> - 运行工作流</li>
                            <li>• <code className="bg-blue-100 px-1 rounded">chime validate</code> - 验证模板</li>
                            <li>• <code className="bg-blue-100 px-1 rounded">chime doctor</code> - 系统检查</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">获取帮助</h4>
                          <ul className="text-sm space-y-1">
                            <li>• <code className="bg-blue-100 px-1 rounded">chime --help</code> - 显示帮助</li>
                            <li>• <code className="bg-blue-100 px-1 rounded">chime &lt;command&gt; --help</code> - 命令帮助</li>
                            <li>• <code className="bg-blue-100 px-1 rounded">chime --version</code> - 显示版本</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* 命令详情 */}
              {commands.map((command, index) => (
                <section key={command.name} id={command.name.replace(' ', '-')} className="mb-12">
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{command.name}</h2>
                          <p className="text-gray-600 mt-1">{command.description}</p>
                        </div>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-chime-gold/10 text-chime-gold">
                          {command.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* 用法 */}
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">用法</h3>
                        <div className="bg-gray-900 rounded-lg p-4 relative group">
                          <button
                            onClick={() => copyToClipboard(command.usage, `usage-${index}`)}
                            className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                          >
                            {copiedCode === `usage-${index}` ? (
                              <CheckCircle className="h-4 w-4 text-green-400" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </button>
                          <pre className="text-gray-300 text-sm">
                            <code>{command.usage}</code>
                          </pre>
                        </div>
                      </div>
                      
                      {/* 选项 */}
                      {command.options && command.options.length > 0 && (
                        <div className="mb-6">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">选项</h3>
                          <div className="overflow-x-auto">
                            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    标志
                                  </th>
                                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    描述
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-gray-200">
                                {command.options.map((option, optIndex) => (
                                  <tr key={optIndex}>
                                    <td className="px-4 py-3 text-sm font-mono text-gray-900">
                                      {option.flag}
                                    </td>
                                    <td className="px-4 py-3 text-sm text-gray-600">
                                      {option.description}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                      
                      {/* 示例 */}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">示例</h3>
                        <div className="space-y-3">
                          {command.examples.map((example, exampleIndex) => (
                            <div key={exampleIndex} className="bg-gray-900 rounded-lg p-4 relative group">
                              <button
                                onClick={() => copyToClipboard(example, `example-${index}-${exampleIndex}`)}
                                className="absolute top-3 right-3 p-2 text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                              >
                                {copiedCode === `example-${index}-${exampleIndex}` ? (
                                  <CheckCircle className="h-4 w-4 text-green-400" />
                                ) : (
                                  <Copy className="h-4 w-4" />
                                )}
                              </button>
                              <pre className="text-gray-300 text-sm">
                                <code>{example}</code>
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { 
  Book, 
  Code, 
  Zap, 
  ArrowRight, 
  Search,
  FileText,
  Users,
  Wrench,
  Lightbulb,
  ExternalLink,
  Clock,
  CheckCircle
} from 'lucide-react'

export default function DocsPage() {
  const docCategories = [
    {
      title: '快速开始',
      description: '5分钟上手编钟，开始你的自动化之旅',
      icon: Zap,
      color: 'from-green-500 to-emerald-600',
      docs: [
        { title: '安装指南', description: '一键安装编钟到你的系统', time: '2分钟', href: '/docs/installation' },
        { title: '第一个工作流', description: '创建你的第一个YAML模板', time: '5分钟', href: '/docs/first-workflow' },
        { title: '常用命令', description: '掌握编钟的核心命令', time: '3分钟', href: '/docs/commands' }
      ]
    },
    {
      title: '用户手册',
      description: '详细的使用指南和最佳实践',
      icon: Book,
      color: 'from-blue-500 to-cyan-600',
      docs: [
        { title: 'YAML模板语法', description: '学习编钟的声明式配置语法', time: '10分钟', href: '/docs/yaml-syntax' },
        { title: '工作流编排', description: '理解多工具协调机制', time: '15分钟', href: '/docs/workflow-orchestration' },
        { title: '错误处理', description: '掌握故障排查和恢复技巧', time: '8分钟', href: '/docs/error-handling' },
        { title: '性能优化', description: '提升工作流执行效率', time: '12分钟', href: '/docs/performance' }
      ]
    },
    {
      title: '开发者指南',
      description: '为编钟生态贡献代码和模板',
      icon: Code,
      color: 'from-purple-500 to-violet-600',
      docs: [
        { title: '模板开发', description: '创建高质量的YAML模板', time: '20分钟', href: '/docs/template-development' },
        { title: 'MCP Server集成', description: '集成新的MCP工具', time: '25分钟', href: '/docs/mcp-integration' },
        { title: '插件开发', description: '扩展编钟的核心功能', time: '30分钟', href: '/docs/plugin-development' },
        { title: '贡献指南', description: '参与开源社区建设', time: '10分钟', href: '/docs/contributing' }
      ]
    },
    {
      title: '能力手册',
      description: '编钟的完整能力说明和使用指南',
      icon: FileText,
      color: 'from-orange-500 to-red-600',
      docs: [
        { title: '能力总览', description: '编钟能帮你做什么？一目了然', time: '5分钟', href: '/docs/capabilities' },
        { title: 'CLI命令参考', description: '所有命令行接口的详细说明', time: '15分钟', href: '/docs/cli-reference' },
        { title: 'YAML Schema', description: '模板配置的完整规范', time: '20分钟', href: '/docs/yaml-schema' },
        { title: 'MCP协议接口', description: 'Model Context Protocol集成', time: '25分钟', href: '/docs/mcp-protocol' }
      ]
    }
  ]

  const popularDocs = [
    {
      title: '微信文章到Obsidian完整教程',
      description: '从零开始配置内容管理工作流',
      category: '用户手册',
      readTime: '15分钟',
      views: 2400,
      href: '/docs/tutorials/wechat-to-obsidian'
    },
    {
      title: '编钟vs传统自动化工具对比',
      description: '深入了解编钟的技术优势',
      category: '概念解析',
      readTime: '12分钟',
      views: 1800,
      href: '/docs/concepts/comparison'
    },
    {
      title: 'YAML模板最佳实践',
      description: '编写高质量模板的专业建议',
      category: '开发者指南',
      readTime: '20分钟',
      views: 1600,
      href: '/docs/best-practices/yaml-templates'
    },
    {
      title: '故障排查指南',
      description: '快速解决常见问题',
      category: '用户手册',
      readTime: '10分钟',
      views: 1200,
      href: '/docs/troubleshooting'
    }
  ]

  const features = [
    {
      icon: Search,
      title: '智能搜索',
      description: '快速找到你需要的文档内容'
    },
    {
      icon: Users,
      title: '社区贡献',
      description: '由社区维护的高质量文档'
    },
    {
      icon: Wrench,
      title: '实用示例',
      description: '丰富的代码示例和实战案例'
    },
    {
      icon: Lightbulb,
      title: '最佳实践',
      description: '专业团队总结的经验分享'
    }
  ]

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
              文档中心 📚
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              从入门到精通，掌握编钟的全部功能。
              无论你是新手还是专家，都能找到所需的详细指导。
            </p>
            
            {/* 搜索框 */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="搜索文档内容..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-chime-gold focus:border-transparent text-lg"
              />
            </div>

            {/* 快速链接 */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/docs/installation"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                快速开始
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/docs/yaml-syntax"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                YAML语法
              </a>
              <a
                href="/docs/capabilities"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                能力手册
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 文档特性 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              为什么选择我们的文档？
            </h2>
            <p className="text-lg text-gray-600">
              我们致力于提供最优质的技术文档体验
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-chime-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 热门文档 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              🔥 热门文档
            </h2>
            <p className="text-lg text-gray-600">
              社区最受欢迎的文档内容
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {popularDocs.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {doc.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="bg-chime-gold/10 text-chime-gold px-2 py-1 rounded text-xs">
                      {doc.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {doc.readTime}
                    </span>
                    <span>{doc.views} 次阅读</span>
                  </div>
                </div>

                <a
                  href={doc.href}
                  className="inline-flex items-center text-chime-gold hover:text-chime-bronze font-medium"
                >
                  阅读文档
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 文档分类 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              📖 文档分类
            </h2>
            <p className="text-lg text-gray-600">
              按照你的需求和技能水平，找到最适合的学习路径
            </p>
          </motion.div>

          <div className="space-y-12">
            {docCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                    <p className="text-gray-600">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.docs.map((doc, docIndex) => (
                    <a
                      key={doc.title}
                      href={doc.href}
                      className="block p-4 rounded-lg border border-gray-200 hover:border-chime-gold hover:shadow-sm transition-all"
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {doc.title}
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">
                        {doc.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          {doc.time}
                        </span>
                        <ArrowRight className="h-4 w-4 text-chime-gold" />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-chime-gold/10 to-chime-bronze/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              没有找到你需要的内容？
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              我们持续改进文档质量。如果你有任何建议或发现了问题，
              欢迎通过GitHub提交反馈。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/ChimeMCP/docs/issues"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                提交反馈
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/community"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                加入社区讨论
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
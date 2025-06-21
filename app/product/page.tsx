'use client'

import { motion } from 'framer-motion'
import { 
  Workflow, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Code,
  Users,
  Cpu,
  Network
} from 'lucide-react'

export default function ProductPage() {
  const architectureFeatures = [
    {
      icon: Code,
      title: 'MCP协议原生支持',
      description: '完全基于Model Context Protocol构建，确保与所有MCP Server的完美兼容',
      details: ['原生MCP协议支持', '标准化接口设计', '向后兼容保证']
    },
    {
      icon: Workflow,
      title: '声明式工作流引擎',
      description: 'YAML模板驱动的工作流编排，让复杂任务变得简单可控',
      details: ['YAML配置语法', '可视化流程图', '模板版本管理']
    },
    {
      icon: Network,
      title: '智能协调算法',
      description: 'AI驱动的多工具协调机制，自动优化执行路径和资源分配',
      details: ['并行执行优化', '依赖关系解析', '故障自动恢复']
    },
    {
      icon: Shield,
      title: '企业级可靠性',
      description: '内置监控、日志和回滚机制，确保生产环境的稳定运行',
      details: ['实时监控面板', '完整操作日志', '一键回滚功能']
    }
  ]

  const useCases = [
    {
      title: '内容创作工作流',
      description: '从素材收集到发布的完整自动化',
      workflow: [
        '微信文章抓取 (crawl-mcp)',
        '内容格式化 (markdown-mcp)', 
        '图片处理 (image-mcp)',
        '发布到博客 (cms-mcp)'
      ],
      time: '从2小时缩短到30秒',
      success: '99.2%'
    },
    {
      title: '数据分析管道',
      description: '多数据源整合和智能分析报告',
      workflow: [
        '数据采集 (database-mcp)',
        '数据清洗 (pandas-mcp)',
        '图表生成 (chart-mcp)', 
        '报告发送 (email-mcp)'
      ],
      time: '从4小时缩短到5分钟',
      success: '98.7%'
    },
    {
      title: '开发运维自动化',
      description: '代码部署和监控的端到端自动化',
      workflow: [
        '代码检查 (git-mcp)',
        '构建部署 (docker-mcp)',
        '健康检查 (monitor-mcp)',
        '通知告警 (slack-mcp)'
      ],
      time: '从30分钟缩短到2分钟',
      success: '99.8%'
    }
  ]

  const advantages = [
    {
      title: '98.5%成功率',
      description: '经过验证的模板库',
      icon: CheckCircle
    },
    {
      title: '10倍效率提升',
      description: '平均任务完成时间',
      icon: Zap
    },
    {
      title: '50+工具支持',
      description: 'MCP Server生态',
      icon: Globe
    },
    {
      title: '企业级稳定性',
      description: '99.9%系统可用性',
      icon: Shield
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
              从2小时到30秒 ⚡
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              专家经验固化，240倍效率提升
              <br />
              让AI工具协作从"碰运气"变成"有保障"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/getting-started"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                立即开始
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="/docs"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                查看文档
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 技术架构 */}
      <section className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-4">
              🏗️ 技术架构
            </h2>
            <p className="text-lg text-gray-600">
              基于MCP协议的现代化架构设计，确保高性能、高可用和高扩展性
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {architectureFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-chime-gold/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-chime-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-1">
                      {feature.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 应用场景 */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-4">
              🎯 典型应用场景
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              看看编钟如何在不同领域发挥强大的自动化能力
            </p>
            <a
              href="/scenarios"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-amber-600 text-white font-medium hover:bg-amber-700 transition-colors"
            >
              探索更多应用场景
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </motion.div>

          <div className="space-y-12">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {useCase.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Zap className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-green-600 font-medium">{useCase.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                        <span className="text-blue-600 font-medium">成功率 {useCase.success}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-4">工作流程：</h4>
                      <div className="space-y-3">
                        {useCase.workflow.map((step, i) => (
                          <div key={i} className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-chime-gold text-white text-sm font-medium flex items-center justify-center mr-4">
                              {i + 1}
                            </div>
                            <span className="text-gray-700">{step}</span>
                            {i < useCase.workflow.length - 1 && (
                              <ArrowRight className="h-4 w-4 text-gray-400 ml-4" />
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="py-24 bg-gradient-to-br from-chime-gold/5 to-chime-bronze/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-4">
              🌟 核心优势
            </h2>
            <p className="text-lg text-gray-600">
              数据说话，让你看到编钟的真实价值
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <advantage.icon className="h-8 w-8 text-chime-gold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading mb-4">
              准备开始你的自动化之旅？
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              立即体验编钟的强大功能，让AI工具协作变得简单而高效
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/getting-started"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                立即开始
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/templates"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 transition-colors"
              >
                浏览模板
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
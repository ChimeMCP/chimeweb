'use client'

import { motion } from 'framer-motion'
import { FileText, Workflow, Shield, Globe } from 'lucide-react'

type ColorType = 'blue' | 'chime' | 'green' | 'purple'

interface Feature {
  icon: typeof FileText
  title: string
  description: string
  benefits: string[]
  color: ColorType
}

const features: Feature[] = [
  {
    icon: FileText,
    title: '🎼 声明式YAML模板',
    description: '用专业开发者编写的模板，确保一致性和可靠性',
    benefits: [
      '98.5%成功率的经验沉淀',
      '标准化的错误处理机制',
      '版本控制和持续优化',
    ],
    color: 'blue',
  },
  {
    icon: Workflow,
    title: '🔄 智能工作流编排',
    description: 'AI自动协调多个MCP Server，无需手动配置',
    benefits: [
      '并行执行优化',
      '智能依赖管理',
      '实时状态监控',
    ],
    color: 'chime',
  },
  {
    icon: Shield,
    title: '🛡️ 企业级质量保证',
    description: '内置验证和回滚机制，确保执行结果符合预期',
    benefits: [
      '自动质量检查',
      '失败自动清理',
      '完整操作日志',
    ],
    color: 'green',
  },
  {
    icon: Globe,
    title: '🌍 开放生态系统',
    description: '基于MCP标准协议，兼容所有MCP Server',
    benefits: [
      '模板社区贡献',
      '工具能力扩展',
      '生态持续繁荣',
    ],
    color: 'purple',
  },
]

const colorClasses: Record<ColorType, {
  bg: string
  text: string
  accent: string
  border: string
}> = {
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    accent: 'bg-blue-50',
    border: 'border-blue-200',
  },
  chime: {
    bg: 'bg-chime-gold/20',
    text: 'text-chime-gold',
    accent: 'bg-chime-gold/10',
    border: 'border-chime-gold/30',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    accent: 'bg-green-50',
    border: 'border-green-200',
  },
  purple: {
    bg: 'bg-purple-100',
    text: 'text-purple-600',
    accent: 'bg-purple-50',
    border: 'border-purple-200',
  },
}

export function FeaturesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-4">
              🌟 核心功能特性
            </h2>
            <p className="text-lg text-gray-600">
              每个功能都像编钟的音符，共同奏响自动化协作的华美乐章
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border ${colorClasses[feature.color].border}`}
            >
              <div className="flex items-start space-x-4">
                <div className={`h-12 w-12 rounded-full ${colorClasses[feature.color].bg} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className={`h-6 w-6 ${colorClasses[feature.color].text}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${colorClasses[feature.color].text.replace('text-', 'bg-')}`} />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* 装饰性动画元素 */}
              <div className="mt-6 relative">
                <div className={`h-1 ${colorClasses[feature.color].accent} rounded-full overflow-hidden`}>
                  <motion.div
                    className={`h-full ${colorClasses[feature.color].text.replace('text-', 'bg-')} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部总结 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-chime-gold/10 to-chime-bronze/10 rounded-2xl"
        >
          <h3 className="text-2xl font-bold chime-text-gradient mb-4">
            让每个功能都成为你的超能力
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            编钟不只是一个工具，它是一个生态系统。每个功能都经过精心设计，
            确保在复杂的AI协作场景中发挥最大价值。
          </p>
        </motion.div>
      </div>
    </section>
  )
} 
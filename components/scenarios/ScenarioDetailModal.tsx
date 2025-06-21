'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Clock, 
  Star, 
  Users, 
  Copy, 
  Check, 
  ArrowRight,
  BookOpen,
  Settings,
  Zap,
  ExternalLink
} from 'lucide-react'

interface ScenarioDetailModalProps {
  isOpen: boolean
  onClose: () => void
  scenario: {
    id: string
    title: string
    description: string
    category: string
    difficulty: 'beginner' | 'intermediate' | 'advanced'
    timeToSetup: string
    popularity: number
    tags: string[]
    command: string
    tools: string[]
    realExample: string
    benefits: string[]
  } | null
  copiedCode: string | null
  onCopyCode: (text: string, id: string) => void
  onGetStarted: (scenarioId: string) => void
}

const ScenarioDetailModal: React.FC<ScenarioDetailModalProps> = ({
  isOpen,
  onClose,
  scenario,
  copiedCode,
  onCopyCode,
  onGetStarted
}) => {
  if (!scenario) return null

  const difficultyConfig = {
    beginner: { color: 'bg-green-100 text-green-800', label: '新手友好' },
    intermediate: { color: 'bg-yellow-100 text-yellow-800', label: '中等难度' },
    advanced: { color: 'bg-red-100 text-red-800', label: '进阶使用' }
  }

  const setupSteps = [
    {
      step: 1,
      title: '安装编钟',
      description: '确保你已经安装了编钟MCP服务器',
      action: '查看安装指南'
    },
    {
      step: 2,
      title: '配置工具',
      description: `安装所需的MCP工具：${scenario.tools.join(', ')}`,
      action: '查看工具配置'
    },
    {
      step: 3,
      title: '执行命令',
      description: '在支持MCP的AI助手中说出场景命令',
      action: '复制命令'
    },
    {
      step: 4,
      title: '验证结果',
      description: '检查自动化任务是否按预期完成',
      action: '查看示例'
    }
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* 模态框内容 */}
          <div className="flex min-h-full items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 头部 */}
              <div className="flex items-start justify-between p-6 border-b border-gray-200">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {scenario.title}
                    </h2>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyConfig[scenario.difficulty].color}`}>
                      {difficultyConfig[scenario.difficulty].label}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {scenario.description}
                  </p>
                  
                  {/* 统计信息 */}
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{scenario.timeToSetup}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{scenario.popularity}/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>热门</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={onClose}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* 内容区域 */}
              <div className="p-6 max-h-[70vh] overflow-y-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* 左侧：使用步骤 */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-amber-600" />
                      使用步骤
                    </h3>
                    
                    <div className="space-y-4">
                      {setupSteps.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-800 rounded-full flex items-center justify-center text-sm font-medium">
                            {step.step}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">
                              {step.title}
                            </h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {step.description}
                            </p>
                            <button className="text-sm text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1">
                              {step.action}
                              <ExternalLink className="h-3 w-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 右侧：命令和工具 */}
                  <div>
                    {/* 命令区域 */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-amber-600" />
                      执行命令
                    </h3>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          💬 对编钟说：
                        </span>
                        <button
                          onClick={() => onCopyCode(scenario.command, scenario.id)}
                          className="text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          {copiedCode === scenario.id ? (
                            <Check className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-gray-800 italic">
                        "{scenario.command}"
                      </p>
                    </div>

                    {/* 工具列表 */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      所需工具
                    </h3>
                    <div className="space-y-2 mb-6">
                      {scenario.tools.map((tool, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="font-mono text-sm text-gray-700">{tool}</span>
                        </div>
                      ))}
                    </div>

                    {/* 标签 */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      相关标签
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {scenario.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 实际案例 */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    实际案例
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {scenario.realExample}
                  </p>
                </div>

                {/* 核心收益 */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    ✨ 核心收益
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {scenario.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                        <span className="text-green-500 mt-0.5">•</span>
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 底部操作区 */}
              <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
                <div className="text-sm text-gray-600">
                  预计设置时间：<span className="font-medium">{scenario.timeToSetup}</span>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    关闭
                  </button>
                  <button
                    onClick={() => {
                      onGetStarted(scenario.id)
                      onClose()
                    }}
                    className="bg-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center gap-2"
                  >
                    <span>立即开始</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ScenarioDetailModal 
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Clock, Star, Users, ArrowRight, Copy, Check, Zap } from 'lucide-react'

interface ScenarioCardProps {
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
  }
  index: number
  copiedCode: string | null
  onCopyCode: (text: string, id: string) => void
  onGetStarted: (scenarioId: string) => void
  onViewDetails: (scenarioId: string) => void
}

const ScenarioCard: React.FC<ScenarioCardProps> = ({
  scenario,
  index,
  copiedCode,
  onCopyCode,
  onGetStarted,
  onViewDetails
}) => {
  const difficultyConfig = {
    beginner: { color: 'bg-green-100 text-green-800', label: '新手友好' },
    intermediate: { color: 'bg-yellow-100 text-yellow-800', label: '中等难度' },
    advanced: { color: 'bg-red-100 text-red-800', label: '进阶使用' }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
    >
      {/* 头部信息 */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {scenario.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {scenario.description}
          </p>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyConfig[scenario.difficulty].color}`}>
            {difficultyConfig[scenario.difficulty].label}
          </span>
        </div>
      </div>

      {/* 标签 */}
      <div className="flex flex-wrap gap-2 mb-4">
        {scenario.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-amber-100 text-amber-800"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* 统计信息 */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
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

      {/* 使用命令 */}
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
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
        <p className="text-gray-800 italic text-sm">
          "{scenario.command}"
        </p>
      </div>

      {/* 涉及工具 */}
      <div className="mb-4">
        <span className="text-sm text-gray-600 mb-2 block">🔧 涉及工具：</span>
        <div className="flex flex-wrap gap-1">
          {scenario.tools.map((tool, toolIndex) => (
            <span
              key={toolIndex}
              className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-gray-100 text-gray-700"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* 实际案例 */}
      <div className="bg-blue-50 rounded-lg p-3 mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-blue-800">实际案例</span>
        </div>
        <p className="text-blue-700 text-sm">
          {scenario.realExample}
        </p>
      </div>

      {/* 核心收益 */}
      <div className="mb-6">
        <span className="text-sm font-medium text-gray-700 mb-2 block">✨ 核心收益：</span>
        <ul className="space-y-1">
          {scenario.benefits.map((benefit, benefitIndex) => (
            <li key={benefitIndex} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-green-500 mt-0.5">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 行动按钮 */}
      <div className="flex gap-2">
        <button 
          onClick={() => onGetStarted(scenario.id)}
          className="flex-1 bg-amber-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>立即开始</span>
          <ArrowRight className="h-4 w-4" />
        </button>
        <button 
          onClick={() => onViewDetails(scenario.id)}
          className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors cursor-pointer"
        >
          查看详情
        </button>
      </div>
    </motion.div>
  )
}

export default ScenarioCard 
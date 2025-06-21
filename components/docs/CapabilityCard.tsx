'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

interface CapabilityExample {
  task: string
  command: string
  tools: string[]
}

interface CapabilityCardProps {
  category: string
  icon: string
  title: string
  description: string
  examples: CapabilityExample[]
  index: number
  copiedCode: string | null
  onCopyCode: (text: string, id: string) => void
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({
  category,
  icon,
  title,
  description,
  examples,
  index,
  copiedCode,
  onCopyCode
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center mb-6">
        <div className="text-4xl mr-4">{icon}</div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {title}
          </h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      <div className="space-y-6">
        {examples.map((example, exampleIndex) => (
          <div key={exampleIndex} className="border-l-4 border-amber-400 pl-6">
            <h4 className="font-semibold text-gray-900 mb-2">
              {example.task}
            </h4>
            <div className="bg-gray-50 rounded-lg p-4 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  💬 对编钟说：
                </span>
                <button
                  onClick={() => onCopyCode(example.command, `${category}-${exampleIndex}`)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {copiedCode === `${category}-${exampleIndex}` ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              <p className="text-gray-800 italic">"{example.command}"</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">🔧 涉及工具：</span>
              {example.tools.map((tool, toolIndex) => (
                <span
                  key={toolIndex}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default CapabilityCard 
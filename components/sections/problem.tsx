'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, Clock, Repeat, Zap } from 'lucide-react'

const problems = [
  {
    icon: Repeat,
    title: '重复性的挫败',
    description: '你："帮我保存这篇微信文章到Obsidian"',
    attempts: [
      { step: 'AI第1次', action: '保存到本地文件', status: 'failed' },
      { step: 'AI第2次', action: '创建GitHub Gist', status: 'failed' },
      { step: 'AI第3次', action: '添加到代码库', status: 'failed' },
    ],
    conclusion: '相同的需求，每次都得到不同的结果...',
  },
  {
    icon: AlertTriangle,
    title: '技术门槛的焦虑',
    description: '想要实现一个简单的自动化流程，却需要：',
    requirements: [
      '学习多个MCP Server的API',
      '理解复杂的工具调用链',
      '手动处理各种异常情况',
      '在出错时逐步排查问题',
    ],
  },
  {
    icon: Clock,
    title: '效率黑洞',
    timeBreakdown: [
      { task: '理解需求', time: '10分钟' },
      { task: '学习工具', time: '30分钟' },
      { task: '调试错误', time: '60分钟' },
      { task: '优化流程', time: '20分钟' },
    ],
    total: '2小时完成一个"简单"任务',
  },
]

export function ProblemSection() {
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
              😤 你是否也遇到过这些问题？
            </h2>
            <p className="text-lg text-gray-600">
              在AI工具协作中，我们经常面临这样的困扰...
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center">
                  <problem.icon className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">
                  {problem.title}
                </h3>
              </div>

              {/* 场景1：重复性挫败 */}
              {problem.attempts && (
                <div className="space-y-4">
                  <p className="text-gray-600 font-medium mb-4">
                    {problem.description}
                  </p>
                  <div className="space-y-2">
                    {problem.attempts.map((attempt, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-700">
                            {attempt.step}:
                          </span>
                          <span className="text-sm text-gray-600">
                            {attempt.action}
                          </span>
                        </div>
                        <span className="text-red-500 font-bold">❌</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 italic mt-4">
                    {problem.conclusion}
                  </p>
                </div>
              )}

              {/* 场景2：技术门槛 */}
              {problem.requirements && (
                <div className="space-y-4">
                  <p className="text-gray-600 font-medium mb-4">
                    {problem.description}
                  </p>
                  <ul className="space-y-2">
                    {problem.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-600 text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 场景3：效率黑洞 */}
              {problem.timeBreakdown && (
                <div className="space-y-4">
                  <div className="space-y-3">
                    {problem.timeBreakdown.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">{item.task}</span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-red-600">
                            {item.time}
                          </span>
                          <span className="text-xs text-gray-400">+</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <span className="font-semibold text-gray-900">总计:</span>
                      <span className="font-bold text-red-600">{problem.total}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 底部总结 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 bg-red-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            这些问题的根本原因是什么？
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <strong>缺乏统一的协调机制</strong> — AI需要每次重新学习如何使用工具，
            没有经过验证的最佳实践，也没有标准化的执行流程。
          </p>
        </motion.div>
      </div>
    </section>
  )
} 
'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const feedbackTypes = [
  { id: 'bug', label: '🐛 Bug 报告', description: '报告产品中的错误或问题' },
  { id: 'feature', label: '💡 功能建议', description: '建议新功能或改进现有功能' },
  { id: 'question', label: '❓ 使用问题', description: '关于产品使用的疑问' },
  { id: 'other', label: '💬 其他反馈', description: '其他类型的反馈和建议' }
]

export default function FeedbackPage() {
  const [formData, setFormData] = useState({
    type: '',
    title: '',
    description: '',
    email: '',
    priority: 'medium'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">反馈提交成功！</h1>
            <p className="text-gray-600 mb-8">
              感谢您的反馈！我们会在 24 小时内处理您的反馈并回复。
            </p>
            <div className="flex items-center justify-center gap-4">
              <Button onClick={() => {
                setIsSubmitted(false)
                setFormData({
                  type: '',
                  title: '',
                  description: '',
                  email: '',
                  priority: 'medium'
                })
              }}>
                提交更多反馈
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/'}>
                返回首页
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            问题反馈
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            遇到问题或有改进建议？我们很乐意听取您的意见
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Feedback Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    反馈类型 *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feedbackTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`relative flex cursor-pointer rounded-lg border p-4 focus:outline-none ${
                          formData.type === type.id
                            ? 'border-chime-gold bg-chime-gold/5'
                            : 'border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={type.id}
                          checked={formData.type === type.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900 mb-1">
                            {type.label}
                          </div>
                          <div className="text-xs text-gray-500">
                            {type.description}
                          </div>
                        </div>
                        {formData.type === type.id && (
                          <div className="absolute top-2 right-2 h-4 w-4 bg-chime-gold rounded-full flex items-center justify-center">
                            <svg className="h-2 w-2 text-white" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx={4} cy={4} r={3} />
                            </svg>
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-900 mb-2">
                    标题 *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-chime-gold focus:ring-chime-gold"
                    placeholder="简要描述您的问题或建议"
                  />
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                    详细描述 *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={6}
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-chime-gold focus:ring-chime-gold"
                    placeholder="请详细描述您遇到的问题或您的建议..."
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    邮箱 *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-chime-gold focus:ring-chime-gold"
                    placeholder="您的邮箱地址"
                  />
                </div>

                {/* Priority */}
                <div>
                  <label htmlFor="priority" className="block text-sm font-medium text-gray-900 mb-2">
                    优先级
                  </label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-chime-gold focus:ring-chime-gold"
                  >
                    <option value="low">低 - 一般建议或非紧急问题</option>
                    <option value="medium">中 - 影响使用但有解决方案</option>
                    <option value="high">高 - 严重影响使用功能</option>
                    <option value="urgent">紧急 - 阻塞性问题</option>
                  </select>
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !formData.type || !formData.title || !formData.description || !formData.email}
                    className="w-full bg-chime-gold text-black hover:bg-chime-gold/90 disabled:opacity-50"
                  >
                    {isSubmitting ? '提交中...' : '提交反馈'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">其他联系方式</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-gray-400 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-gray-900">邮件</div>
                    <div className="text-sm text-gray-600">support@chimemcp.com</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="h-5 w-5 text-gray-400 mt-1" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-gray-900">GitHub</div>
                    <div className="text-sm text-gray-600">github.com/chimemcp</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Response Time */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">响应时间</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Bug 报告</span>
                  <span className="text-sm font-medium text-gray-900">24小时内</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">功能建议</span>
                  <span className="text-sm font-medium text-gray-900">3-5天</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">使用问题</span>
                  <span className="text-sm font-medium text-gray-900">1-2天</span>
                </div>
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">💡 反馈小贴士</h3>
              <ul className="space-y-2 text-sm text-blue-800">
                <li>• 详细描述问题的复现步骤</li>
                <li>• 提供错误截图或日志</li>
                <li>• 说明您的使用环境和版本</li>
                <li>• 建议提供预期结果和实际结果</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
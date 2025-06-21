'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, BookOpen } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-chime-gold/10 via-chime-bronze/5 to-chime-copper/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-6">
            准备好让AI工具协作变得简单而强大了吗？
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            加入编钟社区，体验"MCP 唤醒 MCP"协作模式，
            从今天开始用一句话完成复杂的自动化任务。
          </p>

          {/* 主要CTA按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/getting-started"
                className="chime-gradient inline-flex items-center justify-center rounded-lg px-8 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-90 transition-all duration-300 hover:shadow-xl"
              >
                <Download className="mr-2 h-5 w-5" />
                立即开始使用
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/docs"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-300"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                查看文档
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://github.com/your-username/chimemcp"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-4 text-lg font-semibold text-gray-900 shadow-sm hover:bg-gray-50 transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Link>
            </motion.div>
          </div>

          {/* 社区统计 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl font-bold chime-text-gradient mb-2">1000+</div>
              <div className="text-sm text-gray-600">活跃用户</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold chime-text-gradient mb-2">50+</div>
              <div className="text-sm text-gray-600">YAML模板</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold chime-text-gradient mb-2">98.5%</div>
              <div className="text-sm text-gray-600">成功率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold chime-text-gradient mb-2">MIT</div>
              <div className="text-sm text-gray-600">开源协议</div>
            </div>
          </motion.div>

          {/* 快速启动命令 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-2xl p-6 text-left max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">快速启动</h3>
              <button className="text-gray-400 hover:text-white text-sm">
                复制
              </button>
            </div>
            <div className="font-mono text-sm text-green-400 space-y-2">
              <div># 启动编钟MCP服务器</div>
              <div>$ npx -f -y dpml-prompt@beta mcp-server</div>
              <div className="text-gray-400"># 配置你的AI客户端，然后...</div>
              <div>AI: "保存这篇文章到Obsidian" ✨</div>
            </div>
          </motion.div>

          {/* 底部说明 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <p className="text-sm text-gray-500">
              编钟完全开源，采用 MIT 许可协议。我们相信开放的力量能让AI协作变得更美好。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
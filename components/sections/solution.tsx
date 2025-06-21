'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Zap, Users, Shield } from 'lucide-react'
import Image from 'next/image'

export function SolutionSection() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-heading mb-4">
              🎯 专家经验固化，告别"碰运气"
            </h2>
            <p className="text-lg text-gray-600">
              基于"MCP 唤醒 MCP"协作模式，让AI工具协作从随机变成确定
            </p>
          </motion.div>
        </div>

        {/* 核心价值对比图 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              价值对比：为什么选择编钟？
            </h3>
            <Image
              src="/images/value-comparison.svg"
              alt="编钟核心价值对比：重复性挫败vs结果一致性"
              width={900}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </motion.div>

        {/* MCP协作流程图 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-900">
              MCP协作流程：智能协调，有序执行
            </h3>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <Image
                src="/images/mcp-collaboration-flow.svg"
                alt="MCP协作流程图：从用户说话到AI协调到工具执行的完整流程"
                width={1200}
                height={700}
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-gray-600 mt-4">
              <strong>核心优势</strong>：专家经验固化 → 智能协调机制 → 结果一致性 → 零门槛使用
            </p>
          </div>
        </motion.div>

        {/* 真实案例展示 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-chime-gold/10 to-chime-bronze/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              真实案例：从2小时到30秒的转变
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* 之前 */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-red-600 mb-4">❌ 之前：反复调试2小时</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 复制微信文章链接</li>
                  <li>• 手动打开网页抓取工具</li>
                  <li>• 调试抓取参数和格式</li>
                  <li>• 处理各种异常情况</li>
                  <li>• 手动导入Obsidian</li>
                  <li>• 整理分类和标签</li>
                </ul>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-700 font-medium">
                    结果：每次都不一样，经常失败
                  </p>
                </div>
              </div>

              {/* 现在 */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-green-600 mb-4">✅ 现在：一句话30秒</h4>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-blue-800">用户说：</div>
                    <div className="text-sm text-blue-600">"保存这篇微信文章到Obsidian"</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                  
                  <div className="bg-chime-gold/10 p-3 rounded-lg">
                    <div className="text-sm font-medium text-chime-gold">编钟处理：</div>
                    <div className="text-xs text-gray-600 space-y-1">
                      <div>理解需求 → 匹配专家模板 → 生成执行指令</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-sm font-medium text-green-800">AI自动执行：</div>
                    <div className="text-xs text-gray-600">
                      crawl-mcp → playwright-mcp → obsidian-mcp
                    </div>
                  </div>
                  
                  <div className="bg-green-100 p-3 rounded-lg text-center">
                    <div className="text-sm font-medium text-green-800">
                      ✅ 文章已保存到Obsidian/Articles文件夹
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-700 font-medium">
                    结果：98.5%成功率，每次都一样
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 三层保障体系 */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">
            三层保障体系：让成功变成习惯
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">智能理解</h4>
              <p className="text-gray-600">
                自然语言 → 精确执行计划
                <br />
                <span className="text-sm text-blue-600">AI智能解析用户意图</span>
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-chime-gold/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-chime-gold" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">专家执行</h4>
              <p className="text-gray-600">
                经过验证的最佳实践模板
                <br />
                <span className="text-sm text-chime-gold">98.5%成功率保障</span>
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-gray-900">质量保证</h4>
              <p className="text-gray-600">
                实时监控 + 自动验证
                <br />
                <span className="text-sm text-green-600">完整的质量检查机制</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
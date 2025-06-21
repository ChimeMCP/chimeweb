'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Github, BookOpen, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pb-20 pt-16 sm:pb-24 sm:pt-24">
      {/* 背景装饰 */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-chime-gold to-chime-bronze opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* 编钟Logo动画 */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              {/* 背景光晕效果 */}
              <div className="absolute inset-0 h-32 w-32 rounded-full bg-gradient-to-r from-chime-gold/30 to-chime-bronze/30 blur-xl animate-pulse" />
              
              {/* 主Logo容器 */}
              <div className="relative h-28 w-28 rounded-full bg-white shadow-2xl chime-glow p-3 border-2 border-chime-gold/20 hover:shadow-3xl transition-all duration-500">
                <Image
                  src="/images/logo.png"
                  alt="编钟 ChimeMCP Logo"
                  width={96}
                  height={96}
                  className="h-full w-full object-contain rounded-full hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              
              {/* 装饰性动画点 - 代表不同的MCP Server */}
              <motion.div 
                className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-chime-bronze shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-chime-copper shadow-lg"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
              />
              <motion.div 
                className="absolute top-1/2 -left-4 h-3 w-3 rounded-full bg-chime-gold shadow-lg"
                animate={{ 
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
              />
              <motion.div 
                className="absolute top-1/2 -right-4 h-2 w-2 rounded-full bg-gradient-to-r from-chime-gold to-chime-bronze shadow-lg"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4]
                }}
                transition={{ 
                  duration: 2.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1.5
                }}
              />
            </div>
          </motion.div>

          {/* 主标题 */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-heading"
          >
            <span className="chime-text-gradient">编钟</span>{' '}
            <span className="text-gray-900">🔔</span>
          </motion.h1>

          {/* 副标题 */}
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
          >
            重新定义AI时代的自动化协作
          </motion.h2>

          {/* 主要描述 */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto"
          >
            从<span className="font-semibold text-red-600">"手动配置N个工具"</span>到
            <span className="font-semibold text-green-600">"一句话完成复杂任务"</span>
            <br />
            让MCP Server像编钟一样和谐协作，奏出自动化的华美乐章
          </motion.p>

          {/* 行动按钮 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/getting-started"
              className="chime-gradient rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chime-gold transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <Zap className="h-4 w-4" />
              立即体验
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link
              href="/product"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-chime-gold transition-colors duration-200 flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              查看演示
            </Link>
            
            <Link
              href="https://github.com/ChimeMCP/chimemcp"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-chime-gold transition-colors duration-200 flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </Link>
          </motion.div>

          {/* 统计数据 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="text-3xl font-bold chime-text-gradient">98.5%</div>
              <div className="text-sm text-gray-600">成功率</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold chime-text-gradient">30秒</div>
              <div className="text-sm text-gray-600">平均完成时间</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold chime-text-gradient">50+</div>
              <div className="text-sm text-gray-600">模板数量</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { 
  Heart, 
  Target, 
  Users, 
  Code, 
  Globe,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Award,
  Lightbulb,
  Zap
} from 'lucide-react'

export default function AboutPage() {
  const vision = [
    {
      icon: Target,
      title: '我们的使命',
      description: '让AI工具协作变得简单、可靠、高效，让每个人都能享受自动化带来的便利'
    },
    {
      icon: Lightbulb,
      title: '我们的愿景',
      description: '成为AI时代最受信赖的自动化协作平台，重新定义人机协作的未来'
    },
    {
      icon: Heart,
      title: '我们的价值观',
      description: '开放、协作、创新、用户至上，用技术让世界变得更美好'
    }
  ]

  const team = [
    {
      name: 'Alex Chen',
      role: '项目创始人 & 首席架构师',
      bio: '前Google工程师，MCP协议早期贡献者，专注于AI工具协作技术10年',
      avatar: '/team/alex.jpg',
      github: 'alexchen',
      linkedin: 'alexchen',
      email: 'alex@chimemcp.com',
      achievements: ['MCP协议贡献者', 'AI领域专家', '开源倡导者']
    },
    {
      name: 'Sarah Liu',
      role: '产品负责人',
      bio: '前微软产品经理，专注于开发者工具和自动化平台的产品设计',
      avatar: '/team/sarah.jpg',
      github: 'sarahliu',
      linkedin: 'sarahliu',
      email: 'sarah@chimemcp.com',
      achievements: ['产品设计专家', 'UX/UI设计师', '敏捷开发倡导者']
    },
    {
      name: 'David Kim',
      role: '技术负责人',
      bio: '全栈工程师，专注于分布式系统和工作流引擎的设计与实现',
      avatar: '/team/david.jpg',
      github: 'davidkim',
      linkedin: 'davidkim',
      email: 'david@chimemcp.com',
      achievements: ['分布式系统专家', '开源贡献者', '技术写作者']
    },
    {
      name: 'Emma Wang',
      role: '社区运营负责人',
      bio: '前字节跳动社区运营，专注于开发者社区建设和用户体验优化',
      avatar: '/team/emma.jpg',
      github: 'emmawang',
      linkedin: 'emmawang',
      email: 'emma@chimemcp.com',
      achievements: ['社区建设专家', '用户体验专家', '内容创作者']
    }
  ]

  const milestones = [
    {
      date: '2023年12月',
      title: '项目启动',
      description: '编钟项目正式立项，开始MCP协议的深度研究'
    },
    {
      date: '2025年1月',
      title: '核心架构完成',
      description: '完成声明式工作流引擎的核心架构设计'
    },
    {
      date: '2025年2月',
      title: '首个MVP发布',
      description: '发布第一个可用版本，支持基础的YAML模板功能'
    },
    {
      date: '2025年3月',
      title: '社区建立',
      description: '建立开发者社区，发布首批模板库'
    },
    {
      date: '2025年4月',
      title: '生态扩展',
      description: '支持50+MCP Server，用户突破1000人'
    },
    {
      date: '2025年5月',
      title: '企业级功能',
      description: '推出企业级监控、日志和安全功能'
    }
  ]

  const principles = [
    {
      title: '开源优先',
      description: '所有核心代码开源，接受社区监督和贡献',
      icon: Code
    },
    {
      title: '用户至上',
      description: '以用户需求为导向，持续改进产品体验',
      icon: Users
    },
    {
      title: '技术创新',
      description: '追求技术卓越，推动行业标准发展',
      icon: Zap
    },
    {
      title: '全球协作',
      description: '构建全球开发者社区，促进知识共享',
      icon: Globe
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
              关于编钟 ℹ️
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              我们是一群充满热情的开发者，致力于通过技术创新
              让AI工具协作变得更加简单、可靠和高效
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#team"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                认识团队
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://github.com/ChimeMCP/chimemcp"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                查看源码
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 使命愿景价值观 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              我们的理念
            </h2>
            <p className="text-lg text-gray-600">
              编钟不仅仅是一个工具，更是我们对未来AI协作的思考和实践
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vision.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-chime-gold/20 flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-chime-gold" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-16 bg-gray-50" id="team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              核心团队
            </h2>
            <p className="text-lg text-gray-600">
              来自世界各地的优秀工程师和产品专家
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="h-20 w-20 rounded-full bg-gradient-to-r from-chime-gold to-chime-bronze flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-chime-gold font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {member.achievements.map(achievement => (
                        <span
                          key={achievement}
                          className="bg-chime-gold/10 text-chime-gold text-xs px-2 py-1 rounded"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-3">
                      <a
                        href={`https://github.com/${member.github}`}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              发展历程
            </h2>
            <p className="text-lg text-gray-600">
              从想法到现实，编钟的成长足迹
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-chime-gold/30"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.date}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 ml-8 md:ml-0">
                      <div className="flex items-center mb-2">
                        <span className="bg-chime-gold text-white text-sm px-3 py-1 rounded-full font-medium">
                          {milestone.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-chime-gold rounded-full border-4 border-white shadow-sm"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 核心原则 */}
      <section className="py-16 bg-gradient-to-br from-chime-gold/5 to-chime-bronze/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              核心原则
            </h2>
            <p className="text-lg text-gray-600">
              指导我们前进的基本原则和价值观
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                  <principle.icon className="h-8 w-8 text-chime-gold" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-gray-600">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 开源协议 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-4xl"
          >
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-chime-gold mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  开源协议
                </h2>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">
                  编钟项目采用 <strong>MIT License</strong> 开源协议，这意味着：
                </p>
                
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    你可以自由使用、修改和分发编钟的源代码
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    可以用于商业项目，无需支付任何费用
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    可以创建基于编钟的衍生项目
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    只需保留原始的版权声明即可
                  </li>
                </ul>
                
                <p className="text-gray-600 text-sm">
                  我们相信开源的力量能够推动技术进步，让更多人受益于AI自动化技术。
                  如果编钟对你有帮助，欢迎给我们一个Star⭐️！
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="https://github.com/ChimeMCP/chimemcp/blob/main/LICENSE"
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
                >
                  查看完整协议
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="https://github.com/ChimeMCP/chimemcp"
                  className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub仓库
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              想要了解更多？
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              如果你对编钟项目感兴趣，或者想要参与我们的开源社区，
              欢迎通过以下方式与我们联系。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/community"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                加入社区
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="mailto:hello@chimemcp.com"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 transition-colors"
              >
                <Mail className="mr-2 h-5 w-5" />
                联系我们
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
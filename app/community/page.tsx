'use client'

import { motion } from 'framer-motion'
import { 
  Users, 
  Star, 
  Github, 
  MessageCircle, 
  ArrowRight,
  Trophy,
  Heart,
  Code,
  BookOpen,
  Zap,
  Globe,
  Calendar,
  ExternalLink
} from 'lucide-react'

export default function CommunityPage() {
  const stats = [
    { label: '活跃贡献者', value: '120+', icon: Users, color: 'text-blue-600' },
    { label: 'GitHub Stars', value: '2.8K', icon: Star, color: 'text-yellow-500' },
    { label: '模板贡献', value: '52', icon: Code, color: 'text-green-600' },
    { label: '社区讨论', value: '500+', icon: MessageCircle, color: 'text-purple-600' }
  ]

  const topContributors = [
    {
      name: 'Alex Chen',
      avatar: '/avatars/alex.jpg',
      role: '核心维护者',
      contributions: 85,
      speciality: 'MCP协议架构',
      github: 'alexchen',
      badge: 'founder'
    },
    {
      name: 'Sarah Liu',
      avatar: '/avatars/sarah.jpg',
      role: '模板专家',
      contributions: 62,
      speciality: 'YAML模板开发',
      github: 'sarahliu',
      badge: 'expert'
    },
    {
      name: 'David Kim',
      avatar: '/avatars/david.jpg',
      role: '文档维护者',
      contributions: 48,
      speciality: '技术文档',
      github: 'davidkim',
      badge: 'contributor'
    },
    {
      name: 'Emma Wang',
      avatar: '/avatars/emma.jpg',
      role: '社区管理员',
      contributions: 35,
      speciality: '用户支持',
      github: 'emmawang',
      badge: 'moderator'
    }
  ]

  const userStories = [
    {
      user: '张明 - 内容创作者',
      avatar: '/avatars/user1.jpg',
      story: '编钟帮我将微信公众号的内容管理工作流自动化，从原来的2小时缩短到30秒。现在我可以专注于创作，而不是重复的技术操作。',
      useCase: '内容管理自动化',
      efficiency: '节省95%时间',
      templates: ['微信文章抓取', 'Obsidian整理', '图片处理']
    },
    {
      user: '李华 - 数据分析师',
      avatar: '/avatars/user2.jpg',
      story: '每天的数据报表生成工作完全自动化了。编钟让我可以专注于数据洞察，而不是重复的数据处理流程。',
      useCase: '数据分析流水线',
      efficiency: '每日节省4小时',
      templates: ['数据采集', '图表生成', '邮件发送']
    },
    {
      user: '王强 - DevOps工程师',
      avatar: '/avatars/user3.jpg',
      story: '编钟的工作流编排能力让我们的CI/CD流程更加稳定可靠。98.5%的成功率让我们对自动化部署充满信心。',
      useCase: 'CI/CD自动化',
      efficiency: '部署时间减少80%',
      templates: ['代码检查', '自动部署', '监控告警']
    }
  ]

  const communityChannels = [
    {
      name: 'GitHub Discussions',
      description: '技术讨论、功能建议和问题反馈',
      icon: Github,
      members: '1.2K',
      link: 'https://github.com/ChimeMCP/chimemcp/discussions',
      color: 'bg-gray-900 hover:bg-gray-800'
    },
    {
      name: '微信群',
      description: '中文用户交流群，快速获得帮助',
      icon: MessageCircle,
      members: '800+',
      link: '#wechat-qr',
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'Discord',
      description: '实时聊天，与全球开发者交流',
      icon: MessageCircle,
      members: '600+',
      link: 'https://discord.gg/chimemcp',
      color: 'bg-indigo-600 hover:bg-indigo-700'
    },
    {
      name: '知乎专栏',
      description: '深度技术文章和使用案例分享',
      icon: BookOpen,
      members: '400+',
      link: 'https://zhuanlan.zhihu.com/chimemcp',
      color: 'bg-blue-600 hover:bg-blue-700'
    }
  ]

  const events = [
    {
      title: '编钟模板开发工作坊',
      date: '2024年2月15日',
      type: '线上活动',
      participants: 150,
      description: '学习如何创建高质量的YAML模板，与核心开发者面对面交流'
    },
    {
      title: 'MCP生态开发者大会',
      date: '2024年3月20日',
      type: '线下活动',
      participants: 300,
      description: '探讨MCP协议的未来发展，分享最新的技术进展和应用案例'
    },
    {
      title: '社区贡献者月度聚会',
      date: '每月第一个周六',
      type: '定期活动',
      participants: 50,
      description: '贡献者交流分享，讨论项目发展方向和技术决策'
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
              编钟社区 🤝
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              加入充满活力的编钟开发者社区，与来自世界各地的开发者一起
              构建更好的自动化工具生态系统
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="https://github.com/ChimeMCP/chimemcp"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                参与开发
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#join-community"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                加入讨论群
              </a>
            </div>

            {/* 社区统计 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="h-12 w-12 mx-auto mb-2 rounded-full bg-white shadow-sm flex items-center justify-center">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 顶级贡献者 */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Trophy className="h-8 w-8 text-chime-gold mr-3" />
              社区英雄榜
            </h2>
            <p className="text-lg text-gray-600">
              感谢这些杰出的贡献者，他们让编钟变得更加强大
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topContributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-r from-chime-gold to-chime-bronze flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {contributor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    {contributor.badge === 'founder' && (
                      <div className="absolute -top-1 -right-1 h-6 w-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Star className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {contributor.name}
                  </h3>
                  <p className="text-sm text-chime-gold font-medium mb-2">
                    {contributor.role}
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    {contributor.speciality}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      <Code className="h-4 w-4 mr-1" />
                      {contributor.contributions}
                    </span>
                  </div>
                  
                  <a
                    href={`https://github.com/${contributor.github}`}
                    className="inline-flex items-center text-gray-600 hover:text-chime-gold transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    @{contributor.github}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 用户故事 */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Heart className="h-8 w-8 text-red-500 mr-3" />
              用户故事
            </h2>
            <p className="text-lg text-gray-600">
              听听真实用户如何通过编钟改变他们的工作方式
            </p>
          </motion.div>

          <div className="space-y-8">
            {userStories.map((story, index) => (
              <motion.div
                key={story.user}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/3">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-chime-gold to-chime-bronze flex items-center justify-center mr-4">
                        <span className="text-white font-bold">
                          {story.user.split(' ')[0][0]}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {story.user}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {story.useCase}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Zap className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-green-600 font-medium">
                          {story.efficiency}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {story.templates.map(template => (
                        <span
                          key={template}
                          className="bg-chime-gold/10 text-chime-gold text-xs px-2 py-1 rounded"
                        >
                          {template}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-2/3">
                    <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                      "{story.story}"
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 社区渠道 */}
      <section className="py-16 bg-white" id="join-community">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <MessageCircle className="h-8 w-8 text-blue-600 mr-3" />
              加入我们
            </h2>
            <p className="text-lg text-gray-600">
              选择最适合你的交流方式，与社区成员互动
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityChannels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-start space-x-4">
                  <div className={`h-12 w-12 rounded-lg ${channel.color} flex items-center justify-center flex-shrink-0`}>
                    <channel.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {channel.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {channel.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {channel.members} 成员
                      </span>
                      <a
                        href={channel.link}
                        className="inline-flex items-center text-chime-gold hover:text-chime-bronze font-medium"
                      >
                        加入
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 社区活动 */}
      <section className="py-16 bg-gradient-to-br from-chime-gold/5 to-chime-bronze/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-purple-600 mr-3" />
              社区活动
            </h2>
            <p className="text-lg text-gray-600">
              参加我们的活动，与其他开发者面对面交流
            </p>
          </motion.div>

          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 mr-3">
                        {event.title}
                      </h3>
                      <span className="bg-chime-gold/10 text-chime-gold text-xs px-2 py-1 rounded">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                      {event.description}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {event.participants} 参与者
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <button className="px-4 py-2 bg-chime-gold text-white rounded-lg hover:bg-chime-bronze transition-colors">
                      了解详情
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              准备成为编钟贡献者？
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              无论你是想贡献代码、编写文档、还是分享使用经验，
              我们都欢迎你的参与！
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/docs/contributing"
                className="inline-flex items-center px-8 py-4 rounded-lg bg-chime-gold text-white font-medium hover:bg-chime-bronze transition-colors"
              >
                查看贡献指南
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://github.com/ChimeMCP/chimemcp/issues/new"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-gray-300 font-medium hover:bg-gray-800 transition-colors"
              >
                <Github className="mr-2 h-5 w-5" />
                提交Issue
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
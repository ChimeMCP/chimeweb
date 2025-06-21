'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { 
  Compass,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  Briefcase,
  Code,
  PenTool,
  BookOpen,
  Zap,
  ArrowRight,
  Copy,
  Check,
  Heart,
  TrendingUp
} from 'lucide-react'
import ScenarioCard from '@/components/scenarios/ScenarioCard'
import ScenarioDetailModal from '@/components/scenarios/ScenarioDetailModal'

const ScenariosPage = () => {
  const router = useRouter()
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [copiedCode, setCopiedCode] = useState<string | null>(null)
  const [selectedScenario, setSelectedScenario] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  // 处理"立即开始"按钮点击
  const handleGetStarted = (scenarioId: string) => {
    // 根据场景类型跳转到相应的快速开始页面
    router.push('/getting-started')
  }

  // 处理"查看详情"按钮点击
  const handleViewDetails = (scenarioId: string) => {
    const scenario = scenarios.find(s => s.id === scenarioId)
    if (scenario) {
      setSelectedScenario(scenario)
      setIsModalOpen(true)
    }
  }

  // 场景分类
  const categories = [
    { id: 'all', name: '全部场景', icon: Compass, count: 21 },
    { id: 'content', name: '内容创作', icon: PenTool, count: 4 },
    { id: 'development', name: '开发者', icon: Code, count: 6 },
    { id: 'business', name: '企业用户', icon: Briefcase, count: 5 },
    { id: 'research', name: '研究分析', icon: BookOpen, count: 3 },
    { id: 'personal', name: '个人效率', icon: Users, count: 3 }
  ]

  // 场景数据 - 基于ModelScope MCP分析扩展
  const scenarios = [
    // 内容创作场景
    {
      id: 'wechat-to-obsidian',
      title: '微信文章自动归档',
      description: '一键保存微信公众号文章到个人知识库，自动分类整理',
      category: 'content',
      difficulty: 'beginner' as const,
      timeToSetup: '5分钟',
      popularity: 5,
      tags: ['知识管理', '内容收集', '自动化'],
      command: '帮我把这篇微信文章保存到Obsidian，按照主题分类',
      tools: ['crawl-mcp', 'obsidian-mcp', 'text-processor-mcp'],
      realExample: '某知识博主每天收集50+篇行业文章，使用编钟后从手动2小时缩短到5分钟自动完成',
      benefits: ['节省90%整理时间', '自动分类标签', '永久保存防丢失', '支持批量处理']
    },
    {
      id: 'ai-content-generation',
      title: 'AI内容创作流水线',
      description: '从主题研究到文章发布的全自动内容创作流程',
      category: 'content',
      difficulty: 'intermediate' as const,
      timeToSetup: '15分钟',
      popularity: 4,
      tags: ['AI写作', '自动发布', 'SEO优化'],
      command: '根据这个主题创作一篇文章，包括研究、写作、配图、发布到各平台',
      tools: ['research-mcp', 'gpt-mcp', 'image-gen-mcp', 'publish-mcp'],
      realExample: '自媒体团队使用编钟，日产出文章从5篇提升到20篇，质量保持稳定',
      benefits: ['10倍内容产出', '多平台同步发布', 'SEO自动优化', '数据追踪分析']
    },
    // 开发者场景
    {
      id: 'code-review-automation',
      title: '智能代码审查',
      description: 'AI自动分析代码质量、安全漏洞和性能问题',
      category: 'development',
      difficulty: 'intermediate' as const,
      timeToSetup: '10分钟',
      popularity: 5,
      tags: ['代码质量', '安全检测', '自动化测试'],
      command: '分析这个PR的代码变更，检查潜在问题并生成审查报告',
      tools: ['github-mcp', 'code-analysis-mcp', 'security-scan-mcp'],
      realExample: '某科技公司使用编钟后，代码审查效率提升300%，bug减少60%',
      benefits: ['全面质量检测', '安全漏洞预警', '自动生成报告', '团队协作优化']
    },
    {
      id: 'deployment-pipeline',
      title: '一键部署流水线',
      description: '从代码提交到生产部署的全自动化流程',
      category: 'development',
      difficulty: 'advanced' as const,
      timeToSetup: '30分钟',
      popularity: 4,
      tags: ['CI/CD', '自动部署', '监控告警'],
      command: '将这个功能分支自动测试、构建并部署到生产环境',
      tools: ['git-mcp', 'docker-mcp', 'k8s-mcp', 'monitor-mcp'],
      realExample: '某创业公司使用编钟后，部署时间从2小时缩短到5分钟，错误率降低80%',
      benefits: ['零停机部署', '自动回滚机制', '实时监控告警', '多环境管理']
    },
    // 企业用户场景
    {
      id: 'customer-service-automation',
      title: '智能客服自动化',
      description: '24/7自动回复客户咨询，复杂问题自动转人工',
      category: 'business',
      difficulty: 'intermediate' as const,
      timeToSetup: '20分钟',
      popularity: 5,
      tags: ['客户服务', '智能回复', '工单管理'],
      command: '设置智能客服，自动回复常见问题，复杂问题创建工单',
      tools: ['nlp-mcp', 'ticket-mcp', 'notification-mcp'],
      realExample: '某电商公司客服响应时间从平均2小时缩短到2分钟，满意度提升40%',
      benefits: ['24小时服务', '90%问题自动解决', '客户满意度提升', '人工成本降低']
    },
    {
      id: 'data-report-automation',
      title: '业务数据自动报告',
      description: '每日自动生成销售、运营、财务等各类业务报告',
      category: 'business',
      difficulty: 'intermediate' as const,
      timeToSetup: '25分钟',
      popularity: 4,
      tags: ['数据分析', '自动报告', '可视化'],
      command: '每天早上9点自动生成昨日业务数据报告并发送给管理层',
      tools: ['database-mcp', 'chart-mcp', 'email-mcp', 'schedule-mcp'],
      realExample: '某连锁企业使用编钟后，报告制作时间从4小时缩短到自动化，决策效率提升50%',
      benefits: ['实时数据更新', '多维度分析', '自动发送提醒', '异常数据预警']
    },
    // 研究分析场景
    {
      id: 'market-research-automation',
      title: '市场研究自动化',
      description: '自动收集竞品信息、行业动态，生成分析报告',
      category: 'research',
      difficulty: 'advanced' as const,
      timeToSetup: '35分钟',
      popularity: 4,
      tags: ['市场分析', '竞品监控', '趋势预测'],
      command: '监控我们行业的最新动态和竞品变化，每周生成市场分析报告',
      tools: ['web-scraper-mcp', 'sentiment-mcp', 'trend-analysis-mcp'],
      realExample: '某咨询公司使用编钟监控50+竞品，研究效率提升500%，洞察更及时准确',
      benefits: ['全面竞品监控', '趋势预测分析', '情感分析洞察', '自动报告生成']
    },
    // 个人效率场景
    {
      id: 'personal-assistant',
      title: '个人AI助理',
      description: '管理日程、处理邮件、整理笔记的智能个人助理',
      category: 'personal',
      difficulty: 'beginner' as const,
      timeToSetup: '8分钟',
      popularity: 5,
      tags: ['个人助理', '时间管理', '效率提升'],
      command: '帮我整理今天的邮件，安排明天的日程，并总结本周的工作重点',
      tools: ['email-mcp', 'calendar-mcp', 'note-mcp', 'ai-summary-mcp'],
      realExample: '某创业者使用编钟管理个人事务，每天节省2小时，专注核心业务',
      benefits: ['智能日程安排', '邮件自动分类', '工作总结生成', '重要事项提醒']
    },
    // 新增场景 - 基于ModelScope和GitHub MCP生态分析
    {
      id: 'blockchain-trading',
      title: '区块链交易助手',
      description: '智能分析链上数据，执行加密货币交易策略',
      category: 'business',
      difficulty: 'advanced' as const,
      timeToSetup: '30分钟',
      popularity: 5,
      tags: ['DeFi', '链上分析', '自动交易'],
      command: '分析以太坊上的新代币，执行套利交易策略',
      tools: ['dexscreener-mcp', 'uniswap-mcp', 'whale-tracker-mcp'],
      realExample: '某量化团队使用编钟监控100+DEX，自动执行套利策略，月收益率达15%',
      benefits: ['实时链上监控', '智能交易执行', '风险自动控制', '多链资产管理']
    },
    {
      id: 'social-media-automation',
      title: '社交媒体矩阵管理',
      description: '跨平台内容发布、互动管理和数据分析',
      category: 'content',
      difficulty: 'intermediate' as const,
      timeToSetup: '15分钟',
      popularity: 4,
      tags: ['社交媒体', '内容营销', '自动发布'],
      command: '将这篇文章同时发布到微博、推特和LinkedIn',
      tools: ['twitter-mcp', 'weibo-mcp', 'linkedin-mcp'],
      realExample: '某KOL使用编钟管理5个平台账号，内容发布效率提升300%，粉丝增长率翻倍',
      benefits: ['多平台同步', '智能内容优化', '互动自动回复', '数据统一分析']
    },
    {
      id: 'database-analysis',
      title: '数据库智能分析',
      description: '自然语言查询数据库，生成可视化报告',
      category: 'development',
      difficulty: 'intermediate' as const,
      timeToSetup: '25分钟',
      popularity: 4,
      tags: ['数据分析', 'SQL查询', '可视化'],
      command: '分析上个月的销售数据，生成趋势报告',
      tools: ['mysql-mcp', 'postgresql-mcp', 'chart-mcp'],
      realExample: '某零售企业使用编钟分析客户数据，发现关键业务洞察，销售转化率提升25%',
      benefits: ['自然语言查询', '自动报告生成', '实时数据监控', '跨库数据整合']
    },
    {
      id: 'smart-home-control',
      title: '智能家居控制中心',
      description: '语音控制家居设备，自动化生活场景',
      category: 'personal',
      difficulty: 'beginner' as const,
      timeToSetup: '10分钟',
      popularity: 3,
      tags: ['智能家居', '语音控制', '场景自动化'],
      command: '打开客厅灯光，调节温度到26度',
      tools: ['homeassistant-mcp', 'xiaomi-mcp', 'alexa-mcp'],
      realExample: '某家庭使用编钟控制50+智能设备，电费节省30%，生活便利性大幅提升',
      benefits: ['语音智能控制', '场景一键切换', '能耗智能优化', '安全监控报警']
    },
    {
      id: 'medical-research',
      title: '医学研究助手',
      description: '搜索医学文献，分析临床数据和药物信息',
      category: 'research',
      difficulty: 'advanced' as const,
      timeToSetup: '35分钟',
      popularity: 4,
      tags: ['医学研究', '文献检索', '数据分析'],
      command: '搜索关于阿尔茨海默病的最新研究论文',
      tools: ['pubmed-mcp', 'clinicaltrials-mcp', 'drugbank-mcp'],
      realExample: '某医学院研究团队使用编钟检索文献，研究效率提升200%，发现多个重要研究方向',
      benefits: ['海量文献检索', '智能摘要提取', '数据关联分析', '研究趋势预测']
    },
    {
      id: 'game-development',
      title: '游戏开发自动化',
      description: 'Unity/Unreal引擎集成，自动化游戏开发流程',
      category: 'development',
      difficulty: 'advanced' as const,
      timeToSetup: '40分钟',
      popularity: 3,
      tags: ['游戏开发', 'Unity', '自动化'],
      command: '创建一个3D角色控制器，添加跳跃和攻击动画',
      tools: ['unity-mcp', 'blender-mcp', 'godot-mcp'],
      realExample: '某独立游戏工作室使用编钟自动化关卡设计，开发周期缩短50%',
      benefits: ['代码自动生成', '资源批量处理', '测试自动化', '版本智能管理']
    },
    {
      id: 'security-monitoring',
      title: '网络安全监控',
      description: '实时威胁检测，漏洞扫描和安全事件响应',
      category: 'development',
      difficulty: 'advanced' as const,
      timeToSetup: '60分钟',
      popularity: 5,
      tags: ['网络安全', '威胁检测', '自动响应'],
      command: '扫描系统漏洞，分析可疑网络流量',
      tools: ['nmap-mcp', 'wireshark-mcp', 'sentry-mcp'],
      realExample: '某金融机构使用编钟构建安全监控系统，威胁检测准确率达95%，响应时间缩短80%',
      benefits: ['实时威胁监控', '自动漏洞扫描', '智能事件关联', '快速响应处置']
    },
    {
      id: 'ecommerce-automation',
      title: '电商运营自动化',
      description: '商品管理、订单处理、客户服务一体化',
      category: 'business',
      difficulty: 'intermediate' as const,
      timeToSetup: '30分钟',
      popularity: 4,
      tags: ['电商运营', '订单管理', '库存控制'],
      command: '更新商品价格，处理退款申请，发送物流通知',
      tools: ['shopify-mcp', 'amazon-mcp', 'paypal-mcp'],
      realExample: '某电商卖家使用编钟管理多平台店铺，运营效率提升150%，错误率降低90%',
      benefits: ['多平台同步', '智能定价策略', '自动库存管理', '客户服务优化']
    },
    {
      id: 'scientific-computing',
      title: '科学计算平台',
      description: '数据处理、模型训练、结果可视化一站式',
      category: 'research',
      difficulty: 'advanced' as const,
      timeToSetup: '50分钟',
      popularity: 4,
      tags: ['科学计算', '机器学习', '数据可视化'],
      command: '训练深度学习模型，分析实验数据，生成研究报告',
      tools: ['jupyter-mcp', 'tensorflow-mcp', 'matplotlib-mcp'],
      realExample: '某研究院使用编钟搭建计算平台，模型训练效率提升300%，研究成果产出翻倍',
      benefits: ['分布式计算', '自动模型调优', '实验管理', '成果可视化']
    },
    {
      id: 'travel-planning',
      title: '智能旅行规划',
      description: '自动搜索航班、酒店，制定个性化旅行计划',
      category: 'personal',
      difficulty: 'beginner' as const,
      timeToSetup: '12分钟',
      popularity: 3,
      tags: ['旅行规划', '自动预订', '行程优化'],
      command: '帮我规划去日本的7天行程，包括机票、酒店和景点',
      tools: ['airbnb-mcp', 'booking-mcp', 'tripadvisor-mcp'],
      realExample: '某旅行爱好者使用编钟规划20+次旅行，节省规划时间90%，体验满意度大幅提升',
      benefits: ['智能行程规划', '价格自动比较', '实时预订提醒', '个性化推荐']
    },
    {
      id: 'financial-analysis',
      title: '金融数据分析',
      description: '股票分析、投资组合管理、风险评估',
      category: 'business',
      difficulty: 'advanced' as const,
      timeToSetup: '35分钟',
      popularity: 4,
      tags: ['金融分析', '投资管理', '风险控制'],
      command: '分析我的投资组合，推荐优化策略',
      tools: ['yahoo-finance-mcp', 'coinbase-mcp', 'trading-mcp'],
      realExample: '某投资顾问使用编钟分析客户投资组合，投资回报率提升30%，风险降低40%',
      benefits: ['实时市场分析', '智能投资建议', '风险自动评估', '投资组合优化']
    },
    {
      id: 'kubernetes-management',
      title: 'Kubernetes集群管理',
      description: '容器编排、资源监控、自动扩缩容',
      category: 'development',
      difficulty: 'advanced' as const,
      timeToSetup: '45分钟',
      popularity: 4,
      tags: ['容器化', '集群管理', '自动运维'],
      command: '监控集群状态，自动扩容高负载服务',
      tools: ['kubectl-mcp', 'helm-mcp', 'prometheus-mcp'],
      realExample: '某云原生团队使用编钟管理100+微服务，运维效率提升400%，故障响应时间缩短75%',
      benefits: ['智能资源调度', '自动故障恢复', '成本优化建议', '多集群统一管理']
    },
    {
      id: 'content-translation',
      title: '多语言内容翻译',
      description: '批量翻译文档、网站、视频字幕',
      category: 'content',
      difficulty: 'intermediate' as const,
      timeToSetup: '20分钟',
      popularity: 3,
      tags: ['多语言', '批量翻译', '本地化'],
      command: '将这个网站翻译成10种语言',
      tools: ['deepl-mcp', 'google-translate-mcp', 'subtitle-mcp'],
      realExample: '某跨国企业使用编钟翻译产品文档，翻译效率提升500%，多语言版本同步发布',
      benefits: ['批量快速翻译', '术语一致性', '格式自动保持', '质量智能检查']
    }
  ]

  // 筛选逻辑
  const filteredScenarios = scenarios.filter(scenario => {
    const matchesCategory = activeCategory === 'all' || scenario.category === activeCategory
    const matchesSearch = searchTerm === '' || 
      scenario.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scenario.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Compass className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-6">
              应用场景导航 🧭
            </h1>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              发现编钟在各行各业的实际应用
              <br />
              找到属于你的自动化解决方案
            </p>
            
            {/* 统计数据 */}
            <div className="flex items-center justify-center gap-8 text-amber-100 mb-8">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                <span>21+ 实用场景</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>6大用户群体</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>效率提升 500%</span>
              </div>
            </div>

            {/* 搜索框 */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-200" />
              <input
                type="text"
                placeholder="搜索你的使用场景..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-0 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white/50 text-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 主要内容 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 分类导航 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            按用户群体浏览场景
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'border-amber-500 bg-amber-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-amber-300 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <IconComponent className={`h-8 w-8 mb-2 ${
                      activeCategory === category.id ? 'text-amber-600' : 'text-gray-600'
                    }`} />
                    <span className={`font-medium text-sm ${
                      activeCategory === category.id ? 'text-amber-900' : 'text-gray-900'
                    }`}>
                      {category.name}
                    </span>
                    <span className={`text-xs mt-1 ${
                      activeCategory === category.id ? 'text-amber-700' : 'text-gray-500'
                    }`}>
                      {category.count} 个场景
                    </span>
                  </div>
                </button>
              )
            })}
                     </div>
         </motion.div>

         {/* 场景展示区域 */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.4 }}
           className="mb-16"
         >
           <div className="flex items-center justify-between mb-8">
             <div>
               <h2 className="text-2xl font-bold text-gray-900">
                 {activeCategory === 'all' ? '全部场景' : categories.find(c => c.id === activeCategory)?.name}
               </h2>
               <p className="text-gray-600 mt-1">
                 找到 {filteredScenarios.length} 个匹配的应用场景
               </p>
             </div>
             <div className="flex items-center gap-2 text-sm text-gray-500">
               <Filter className="h-4 w-4" />
               <span>按热门程度排序</span>
             </div>
           </div>

           {/* 场景卡片网格 */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {filteredScenarios
               .sort((a, b) => b.popularity - a.popularity)
               .map((scenario, index) => (
                 <ScenarioCard
                   key={scenario.id}
                   scenario={scenario}
                   index={index}
                   copiedCode={copiedCode}
                   onCopyCode={copyToClipboard}
                   onGetStarted={handleGetStarted}
                   onViewDetails={handleViewDetails}
                 />
               ))}
           </div>

           {/* 空状态 */}
           {filteredScenarios.length === 0 && (
             <div className="text-center py-16">
               <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                 <Search className="h-12 w-12 text-gray-400" />
               </div>
               <h3 className="text-xl font-medium text-gray-900 mb-2">
                 没有找到匹配的场景
               </h3>
               <p className="text-gray-600 mb-6">
                 试试调整搜索关键词或选择其他分类
               </p>
               <button
                 onClick={() => {
                   setSearchTerm('')
                   setActiveCategory('all')
                 }}
                 className="bg-amber-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors"
               >
                 查看全部场景
               </button>
             </div>
           )}
         </motion.div>

         {/* 底部CTA */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.6 }}
           className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-12 text-center text-white"
         >
           <h2 className="text-3xl font-bold mb-4">
             没有找到你的使用场景？
           </h2>
           <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
             编钟支持自定义YAML模板，你可以创建属于自己的自动化场景
           </p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-medium hover:bg-amber-50 transition-colors flex items-center justify-center gap-2">
               <PenTool className="h-5 w-5" />
               <span>创建自定义场景</span>
             </button>
             <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
               <Users className="h-5 w-5" />
               <span>加入社区讨论</span>
             </button>
           </div>
         </motion.div>
       </div>

       {/* 场景详情模态框 */}
       <ScenarioDetailModal
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         scenario={selectedScenario}
         copiedCode={copiedCode}
         onCopyCode={copyToClipboard}
         onGetStarted={handleGetStarted}
       />
     </div>
   )
 }

export default ScenariosPage 
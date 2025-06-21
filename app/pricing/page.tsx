import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '定价计划',
  description: '选择适合您的 ChimeMCP 定价计划，从个人开发者到企业团队都有最佳方案',
}

const pricingPlans = [
  {
    name: '开源版',
    price: '免费',
    description: '个人开发者和小型项目的完美选择',
    features: [
      '基础工作流编排功能',
      '支持最多 10 个 MCP Server',
      '社区支持',
      '基础模板库访问',
      'GitHub 集成',
      '基础文档和教程'
    ],
    highlighted: false,
    ctaText: '立即开始',
    ctaLink: '/getting-started'
  },
  {
    name: '专业版',
    price: '¥99/月',
    description: '中小型团队和商业项目的理想选择',
    features: [
      '包含开源版所有功能',
      '支持无限 MCP Server',
      '高级工作流编排',
      '优先技术支持',
      '高级模板库访问',
      '团队协作功能',
      '性能监控和分析',
      '自定义品牌配置'
    ],
    highlighted: true,
    ctaText: '开始试用',
    ctaLink: '/contact'
  },
  {
    name: '企业版',
    price: '联系我们',
    description: '大型企业和复杂场景的专业解决方案',
    features: [
      '包含专业版所有功能',
      '企业级安全和合规',
      '私有部署支持',
      '专属客户经理',
      '定制开发服务',
      '7x24 技术支持',
      '企业培训服务',
      'SLA 服务保障'
    ],
    highlighted: false,
    ctaText: '联系销售',
    ctaLink: '/contact'
  }
]

const faqData = [
  {
    question: '我可以随时取消订阅吗？',
    answer: '是的，您可以随时取消订阅。取消后您仍可以使用服务到当前计费周期结束。'
  },
  {
    question: '是否提供试用期？',
    answer: '专业版提供 14 天免费试用，无需信用卡。企业版可申请 30 天试用。'
  },
  {
    question: '如何从开源版升级到专业版？',
    answer: '在控制台中一键升级，所有数据和配置都会自动迁移，升级过程零停机。'
  },
  {
    question: '企业版包含哪些定制服务？',
    answer: '包括定制开发、专属培训、私有部署、技术咨询等全方位企业级服务。'
  }
]

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-chime-gold">定价计划</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            选择适合您的方案
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            从个人开发者到企业团队，我们为每种需求都准备了最佳方案。
            所有计划都包含核心功能，让您的 AI 自动化之旅从第一天就充满可能。
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.highlighted
                  ? 'bg-gray-900 ring-gray-900'
                  : 'bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3
                    className={`text-lg font-semibold leading-8 ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.name}
                  </h3>
                  {plan.highlighted && (
                    <p className="rounded-full bg-chime-gold/10 px-2.5 py-1 text-xs font-semibold leading-5 text-chime-gold">
                      推荐
                    </p>
                  )}
                </div>
                <p
                  className={`mt-4 text-sm leading-6 ${
                    plan.highlighted ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {plan.price}
                  </span>
                </p>
                <ul
                  className={`mt-8 space-y-3 text-sm leading-6 ${
                    plan.highlighted ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className={`h-6 w-5 flex-none ${
                          plan.highlighted ? 'text-chime-gold' : 'text-chime-gold'
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className={`mt-8 ${
                  plan.highlighted
                    ? 'bg-chime-gold text-black hover:bg-chime-gold/90'
                    : 'bg-chime-gold text-black hover:bg-chime-gold/90'
                }`}
              >
                {plan.ctaText}
              </Button>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-12">
            常见问题
          </h2>
          <div className="space-y-8">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-24 max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            准备开始了吗？
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            加入成千上万的开发者，体验 AI 自动化的无限可能
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-chime-gold text-black hover:bg-chime-gold/90">
              立即开始免费试用
            </Button>
            <Button variant="outline" size="lg">
              联系销售团队
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 
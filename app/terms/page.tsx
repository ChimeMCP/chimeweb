import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '服务条款',
  description: 'ChimeMCP 服务条款 - 了解使用我们服务的条款和条件',
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            服务条款
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            生效日期：2024年12月26日 | 最后更新：2024年12月26日
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <Card className="p-8 mb-8 bg-orange-50 border-orange-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">📋</div>
              <div>
                <h3 className="text-lg font-semibold text-orange-900 mb-2">重要声明</h3>
                <p className="text-orange-800 text-sm">
                  请仔细阅读本服务条款。使用 ChimeMCP 服务即表示您同意接受这些条款的约束。
                  如果您不同意这些条款，请勿使用我们的服务。
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-12">
            {/* 1. 定义 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 定义</h2>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <dt className="font-semibold text-gray-900 mb-1">ChimeMCP/我们/本公司</dt>
                    <dd className="text-gray-600">指 ChimeMCP 及其关联公司</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900 mb-1">用户/您</dt>
                    <dd className="text-gray-600">指使用 ChimeMCP 服务的个人或实体</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900 mb-1">服务</dt>
                    <dd className="text-gray-600">指 ChimeMCP 提供的所有产品和服务</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-gray-900 mb-1">内容</dt>
                    <dd className="text-gray-600">指通过服务传输的所有信息、数据、文本、代码等</dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* 2. 服务说明 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 服务说明</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 服务概述</h3>
                  <p className="text-gray-600 mb-4">
                    ChimeMCP 是一个基于 MCP（Model Context Protocol）协议的声明式工作流编排平台，
                    旨在帮助用户自动化 AI 工具的协作和集成。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 主要功能</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 工作流设计和编排</li>
                    <li>• MCP Server 管理和集成</li>
                    <li>• 自动化任务执行</li>
                    <li>• 模板库和社区功能</li>
                    <li>• 监控和分析工具</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">2.3 服务可用性</h3>
                  <p className="text-gray-600">
                    我们致力于提供稳定可靠的服务，但不保证服务 100% 无中断。
                    我们会尽最大努力确保服务的连续性和稳定性。
                  </p>
                </div>
              </div>
            </section>

            {/* 3. 用户义务 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 用户义务和责任</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">账户管理</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 提供真实、准确的注册信息</li>
                    <li>• 保护账户安全，妥善保管密码</li>
                    <li>• 及时更新账户信息</li>
                    <li>• 对账户下的所有活动负责</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">合规使用</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• 遵守相关法律法规</li>
                    <li>• 不得用于非法或有害目的</li>
                    <li>• 尊重他人的知识产权</li>
                    <li>• 维护社区秩序和环境</li>
                  </ul>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3.1 禁止行为</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <ul className="space-y-2 text-sm text-red-800">
                    <li>• 传播恶意软件或病毒</li>
                    <li>• 进行网络攻击或渗透测试</li>
                    <li>• 侵犯他人隐私或知识产权</li>
                    <li>• 发布违法、有害或不当内容</li>
                    <li>• 滥用服务资源或绕过使用限制</li>
                    <li>• 进行商业间谍活动</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 4. 付费服务 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 付费服务和计费</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4.1 价格和计费</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 价格如网站所示，我们保留调整价格的权利</li>
                    <li>• 按月或按年收费，费用在计费周期开始时收取</li>
                    <li>• 所有价格均不含税费，税费由用户承担</li>
                    <li>• 未按时付款可能导致服务暂停</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4.2 退款政策</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• 新订阅用户享有14天无理由退款</li>
                      <li>• 退款申请需在合理期限内提出</li>
                      <li>• 已使用的服务费用不予退还</li>
                      <li>• 退款处理时间为5-10个工作日</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">4.3 服务终止</h3>
                  <p className="text-gray-600">
                    您可以随时取消订阅。取消后，您可以继续使用服务至当前计费周期结束。
                    我们也可能因违反条款而终止您的服务。
                  </p>
                </div>
              </div>
            </section>

            {/* 5. 知识产权 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 知识产权</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.1 我们的权利</h3>
                  <p className="text-gray-600 mb-4">
                    ChimeMCP 的所有内容、功能和服务，包括但不限于文本、图形、标志、图标、
                    软件等，均受版权、商标和其他知识产权法律保护。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.2 您的权利</h3>
                  <p className="text-gray-600 mb-4">
                    您保留对上传到服务中的内容的所有权利。通过使用服务，您授予我们使用、
                    存储和处理您的内容以提供服务的必要权利。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">5.3 开源组件</h3>
                  <p className="text-gray-600">
                    我们的服务可能包含开源软件组件，这些组件受其各自的开源许可证约束。
                  </p>
                </div>
              </div>
            </section>

            {/* 6. 隐私和数据保护 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 隐私和数据保护</h2>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">数据保护承诺</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• 我们严格按照隐私政策处理您的个人信息</li>
                  <li>• 采用行业标准的安全措施保护您的数据</li>
                  <li>• 不会出售或不当使用您的个人信息</li>
                  <li>• 遵守适用的数据保护法律法规</li>
                </ul>
                <p className="mt-4 text-sm text-green-700">
                  详细信息请参阅我们的
                  <a href="/privacy" className="underline font-medium">隐私政策</a>
                </p>
              </div>
            </section>

            {/* 7. 免责声明 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 免责声明</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">7.1 服务现状</h3>
                  <p className="text-gray-600">
                    服务按"现状"和"可用"基础提供。我们不对服务的完整性、准确性、
                    可靠性或适用性做出任何明示或暗示的保证。
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">7.2 责任限制</h3>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <ul className="space-y-2 text-sm text-yellow-800">
                      <li>• 我们不对因使用服务而产生的任何直接或间接损失负责</li>
                      <li>• 责任限额不超过您在过去12个月内支付的费用</li>
                      <li>• 不承担因第三方服务中断造成的损失</li>
                      <li>• 不保证服务能满足您的特定需求</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">7.3 第三方服务</h3>
                  <p className="text-gray-600">
                    我们的服务可能集成第三方服务。我们不对第三方服务的可用性、
                    内容或功能承担责任。
                  </p>
                </div>
              </div>
            </section>

            {/* 8. 争议解决 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 争议解决</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl">1️⃣</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">友好协商</h4>
                    <p className="text-sm text-gray-600">优先通过友好协商解决争议</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl">2️⃣</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">客服调解</h4>
                    <p className="text-sm text-gray-600">通过我们的客服团队进行调解</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl">3️⃣</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">法律途径</h4>
                    <p className="text-sm text-gray-600">必要时通过法律途径解决</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">管辖法律</h3>
                <p className="text-sm text-gray-600">
                  本条款受中华人民共和国法律管辖。任何争议应提交至公司所在地有管辖权的法院解决。
                </p>
              </div>
            </section>

            {/* 9. 条款变更 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 条款变更</h2>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  我们可能会不时修改这些服务条款。重大变更会提前30天通知您。
                  继续使用服务即表示您接受修改后的条款。
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">变更通知方式</h3>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• 网站公告</li>
                    <li>• 邮件通知</li>
                    <li>• 应用内消息</li>
                    <li>• 社交媒体公告</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 10. 联系信息 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 联系我们</h2>
              
              <Card className="p-6 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">法务咨询</h3>
                    <p className="text-sm text-gray-600">邮箱：legal@chimemcp.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">客户服务</h3>
                    <p className="text-sm text-gray-600">邮箱：support@chimemcp.com</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">公司地址</h3>
                  <p className="text-sm text-gray-600">
                    [公司具体地址]<br/>
                    邮编：[邮政编码]<br/>
                    电话：[联系电话]
                  </p>
                </div>
              </Card>
            </section>

            {/* 生效声明 */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-gray-900 text-white rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">条款生效</h3>
                <p className="text-sm opacity-90">
                  本服务条款自2024年12月26日起生效。使用我们的服务即表示您已阅读、
                  理解并同意受本条款约束。
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 
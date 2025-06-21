import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '隐私政策',
  description: 'ChimeMCP 隐私政策 - 了解我们如何收集、使用和保护您的个人信息',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            隐私政策
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            生效日期：2025年6月21日 | 最后更新：2025年6月21日
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <Card className="p-8 mb-8 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-4">
              <div className="text-2xl">🔒</div>
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">我们的承诺</h3>
                <p className="text-blue-800 text-sm">
                  ChimeMCP 深知用户隐私的重要性。我们承诺以透明、负责任的方式处理您的个人信息，
                  并采用业界最佳实践来保护您的数据安全。
                </p>
              </div>
            </div>
          </Card>

          <div className="space-y-12">
            {/* 1. 信息收集 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 我们收集哪些信息</h2>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">1.1 您主动提供的信息</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 账户信息：用户名、邮箱地址、密码（已加密）</li>
                <li>• 配置信息：工作流配置、MCP Server 设置</li>
                <li>• 反馈信息：用户反馈、支持请求、社区互动</li>
                <li>• 支付信息：通过第三方支付处理商处理，我们不存储完整的支付信息</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">1.2 自动收集的信息</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• 使用数据：功能使用情况、性能指标、错误日志</li>
                <li>• 设备信息：操作系统、浏览器类型、设备标识符</li>
                <li>• 网络信息：IP 地址、访问时间、页面访问记录</li>
                <li>• Cookie 和类似技术收集的信息</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">1.3 第三方来源信息</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 第三方登录服务（如 GitHub、Google）提供的公开资料</li>
                <li>• 合作伙伴和集成服务提供的相关信息</li>
              </ul>
            </section>

            {/* 2. 信息使用 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 我们如何使用您的信息</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">服务提供</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 提供和维护 ChimeMCP 服务</li>
                    <li>• 执行工作流和 MCP 集成</li>
                    <li>• 用户账户管理和身份验证</li>
                    <li>• 客户支持和技术服务</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">产品改进</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 分析使用模式和性能</li>
                    <li>• 开发新功能和改进现有功能</li>
                    <li>• 个性化用户体验</li>
                    <li>• 错误调试和系统优化</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">安全保护</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 检测和防范安全威胁</li>
                    <li>• 防止欺诈和滥用行为</li>
                    <li>• 维护平台安全和稳定</li>
                    <li>• 遵守法律法规要求</li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">沟通联系</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• 发送服务相关通知</li>
                    <li>• 产品更新和功能介绍</li>
                    <li>• 营销信息（需要同意）</li>
                    <li>• 问卷调查和用户研究</li>
                  </ul>
                </Card>
              </div>
            </section>

            {/* 3. 信息共享 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 信息共享和披露</h2>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">我们不会出售您的个人信息</h3>
                <p className="text-gray-600 text-sm">
                  我们承诺不会向第三方出售、出租或交易您的个人信息。仅在以下情况下会共享您的信息：
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-chime-gold pl-4">
                  <h4 className="font-semibold text-gray-900">服务提供商</h4>
                  <p className="text-sm text-gray-600">与帮助我们提供服务的第三方供应商（如云服务、支付处理、数据分析）</p>
                </div>
                
                <div className="border-l-4 border-chime-gold pl-4">
                  <h4 className="font-semibold text-gray-900">法律要求</h4>
                  <p className="text-sm text-gray-600">当法律要求或为了保护我们的权利、财产或安全时</p>
                </div>
                
                <div className="border-l-4 border-chime-gold pl-4">
                  <h4 className="font-semibold text-gray-900">业务转让</h4>
                  <p className="text-sm text-gray-600">在合并、收购或资产转让等业务交易中</p>
                </div>
                
                <div className="border-l-4 border-chime-gold pl-4">
                  <h4 className="font-semibold text-gray-900">用户同意</h4>
                  <p className="text-sm text-gray-600">获得您明确同意的其他情况</p>
                </div>
              </div>
            </section>

            {/* 4. 数据安全 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 数据安全措施</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <div className="text-3xl mb-3">🔐</div>
                  <h3 className="font-semibold text-gray-900 mb-2">加密保护</h3>
                  <p className="text-sm text-gray-600">数据传输和存储均采用行业标准加密技术</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="text-3xl mb-3">🛡️</div>
                  <h3 className="font-semibold text-gray-900 mb-2">访问控制</h3>
                  <p className="text-sm text-gray-600">严格限制数据访问权限，实施最小权限原则</p>
                </Card>

                <Card className="p-6 text-center">
                  <div className="text-3xl mb-3">🔍</div>
                  <h3 className="font-semibold text-gray-900 mb-2">监控审计</h3>
                  <p className="text-sm text-gray-600">持续监控系统安全，定期进行安全审计</p>
                </Card>
              </div>
            </section>

            {/* 5. 用户权利 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 您的权利和选择</h2>
              
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">数据访问权</h3>
                  <p className="text-gray-600 text-sm mb-3">您有权要求获取我们持有的关于您的个人信息副本。</p>
                  <p className="text-xs text-gray-500">联系方式：privacy@chimemcp.com</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">数据更正权</h3>
                  <p className="text-gray-600 text-sm mb-3">您可以要求更正或更新不准确或不完整的个人信息。</p>
                  <p className="text-xs text-gray-500">可在账户设置中直接修改或联系我们</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">数据删除权</h3>
                  <p className="text-gray-600 text-sm mb-3">您可以要求删除您的个人信息，我们会在30天内处理。</p>
                  <p className="text-xs text-gray-500">某些信息可能因法律要求需要保留</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">数据可携权</h3>
                  <p className="text-gray-600 text-sm mb-3">您可以要求以结构化、机器可读的格式获取您的数据。</p>
                  <p className="text-xs text-gray-500">支持主流格式导出</p>
                </Card>
              </div>
            </section>

            {/* 6. Cookie */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookie 和追踪技术</h2>
              
              <p className="text-gray-600 mb-4">
                我们使用 Cookie 和类似技术来改善您的用户体验。您可以通过浏览器设置控制 Cookie 的使用。
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Cookie 类型</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-gray-900">必要 Cookie</strong>
                    <p className="text-gray-600">确保网站正常运行的基本功能</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">功能 Cookie</strong>
                    <p className="text-gray-600">记住您的偏好设置和选择</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">分析 Cookie</strong>
                    <p className="text-gray-600">帮助我们了解网站使用情况</p>
                  </div>
                  <div>
                    <strong className="text-gray-900">营销 Cookie</strong>
                    <p className="text-gray-600">用于投放相关广告（需要同意）</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. 国际传输 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 国际数据传输</h2>
              
              <p className="text-gray-600 mb-4">
                您的信息可能会传输到并存储在您所在国家/地区以外的服务器上。我们会确保任何跨境数据传输都符合适用的数据保护法律。
              </p>

              <div className="bg-blue-50 rounded-lg p-6 border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">传输保障措施</h3>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>• 仅与提供充分保护的国家/地区进行数据传输</li>
                  <li>• 采用标准合同条款等法律机制</li>
                  <li>• 确保接收方采用与我们相同的保护标准</li>
                </ul>
              </div>
            </section>

            {/* 8. 数据保留 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 数据保留期限</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">账户信息</span>
                  <span className="text-sm text-gray-600">账户存续期间 + 1年</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">使用数据</span>
                  <span className="text-sm text-gray-600">2年</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">支持记录</span>
                  <span className="text-sm text-gray-600">3年</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">法律要求数据</span>
                  <span className="text-sm text-gray-600">按法律规定期限</span>
                </div>
              </div>
            </section>

            {/* 9. 政策更新 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 隐私政策更新</h2>
              
              <p className="text-gray-600 mb-4">
                我们可能会不时更新本隐私政策。重大变更会通过邮件或网站通知您。继续使用我们的服务即表示您接受更新后的政策。
              </p>
            </section>

            {/* 10. 联系我们 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 联系我们</h2>
              
              <Card className="p-6 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">隐私相关咨询</h3>
                    <p className="text-sm text-gray-600">邮箱：privacy@chimemcp.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">一般客服支持</h3>
                    <p className="text-sm text-gray-600">邮箱：support@chimemcp.com</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    如有隐私相关投诉，我们会在收到后7个工作日内回复，并在30天内解决问题。
                  </p>
                </div>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 
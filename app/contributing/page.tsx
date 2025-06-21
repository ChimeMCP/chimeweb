import { Metadata } from 'next'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: '贡献指南',
  description: '了解如何为 ChimeMCP 项目贡献代码、文档或想法',
}

const contributionTypes = [
  {
    icon: '💻',
    title: '代码贡献',
    description: '修复 Bug、开发新功能、性能优化',
    examples: ['修复已知问题', '实现新的 MCP Server 集成', '优化工作流执行性能', '改进用户界面']
  },
  {
    icon: '📚',
    title: '文档贡献',
    description: '完善文档、编写教程、翻译内容',
    examples: ['撰写使用教程', '完善 API 文档', '添加代码示例', '翻译文档内容']
  },
  {
    icon: '🧪',
    title: '测试贡献',
    description: '测试新功能、报告 Bug、编写测试用例',
    examples: ['测试 Beta 版本', '编写单元测试', '报告 Bug', '验证修复效果']
  },
  {
    icon: '🎨',
    title: '设计贡献',
    description: '改进 UI/UX 设计、创建图标、优化交互',
    examples: ['设计新的用户界面', '创建图标和插图', '优化用户体验', '制作宣传素材']
  }
]

const steps = [
  {
    step: '1',
    title: 'Fork 项目',
    description: '在 GitHub 上 Fork ChimeMCP 仓库到您的账户',
                    code: 'git clone https://github.com/ChimeMCP/chimemcp.git'
  },
  {
    step: '2',
    title: '创建分支',
    description: '为您的贡献创建一个新的功能分支',
    code: 'git checkout -b feature/your-feature-name'
  },
  {
    step: '3',
    title: '本地开发',
    description: '设置开发环境并进行您的修改',
    code: 'npm install && npm run dev'
  },
  {
    step: '4',
    title: '提交代码',
    description: '提交您的更改并推送到 GitHub',
    code: 'git commit -m "feat: add your feature" && git push origin feature/your-feature-name'
  },
  {
    step: '5',
    title: '创建 PR',
    description: '在 GitHub 上创建 Pull Request',
    code: '访问 GitHub 仓库页面，点击 "New Pull Request"'
  }
]

const guidelines = [
  {
    title: '代码规范',
    items: [
      '使用 TypeScript 编写代码',
      '遵循 ESLint 和 Prettier 配置',
      '编写清晰的注释和文档',
      '确保代码测试覆盖率'
    ]
  },
  {
    title: '提交规范',
    items: [
      '使用语义化提交信息 (feat, fix, docs, style, refactor, test, chore)',
      '提交信息简洁明了，说明变更内容',
      '每个提交只包含一个逻辑变更',
      '在 PR 中详细描述变更内容和原因'
    ]
  },
  {
    title: '测试要求',
    items: [
      '为新功能编写相应的测试用例',
      '确保所有测试用例通过',
      '手动测试功能的完整性',
      '测试向后兼容性'
    ]
  }
]

export default function ContributingPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            贡献指南
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            感谢您对 ChimeMCP 的关注！这里是如何为项目贡献力量的完整指南
          </p>
        </div>

        {/* Contribution Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">贡献方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contributionTypes.map((type, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{type.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {type.description}
                    </p>
                    <div className="space-y-1">
                      {type.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-chime-gold rounded-full"></div>
                          <span className="text-sm text-gray-600">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">快速开始</h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-chime-gold rounded-full flex items-center justify-center">
                    <span className="text-black font-bold text-lg">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <code className="text-sm text-gray-800">{step.code}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Guidelines */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">开发规范</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {guidelines.map((guideline, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {guideline.title}
                </h3>
                <ul className="space-y-3">
                  {guideline.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-chime-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-chime-gold/10 to-chime-bronze/10 border-chime-gold/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🏆 贡献者激励
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">认可与奖励</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 贡献者列表中永久展示</li>
                  <li>• 优秀贡献者专属徽章</li>
                  <li>• 社区活动优先参与权</li>
                  <li>• 年度贡献者专属纪念品</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">成长机会</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 技术分享和演讲机会</li>
                  <li>• 核心维护者成长路径</li>
                  <li>• 开源项目经验积累</li>
                  <li>• 技术社区影响力提升</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Community */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">加入社区</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">讨论和交流</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0024 12.017C24 6.484 19.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">GitHub Discussions</div>
                    <div className="text-sm text-gray-600">项目讨论和问答</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Twitter</div>
                    <div className="text-sm text-gray-600">@ChimeMCP</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">需要帮助？</h3>
              <div className="space-y-4">
                <div className="text-sm text-gray-600">
                  如果您在贡献过程中遇到任何问题，可以通过以下方式获得帮助：
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 查看详细的开发文档</li>
                  <li>• 在 GitHub Issues 中提问</li>
                  <li>• 加入社区讨论群</li>
                  <li>• 联系核心维护者</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            准备开始贡献了吗？
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            加入我们，一起构建更好的 AI 自动化工具
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="bg-chime-gold text-black hover:bg-chime-gold/90">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0024 12.017C24 6.484 19.522 2 12 2z" clipRule="evenodd" />
              </svg>
              查看 GitHub 仓库
            </Button>
            <Button variant="outline" size="lg">
              阅读开发文档
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 
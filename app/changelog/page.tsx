import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '更新日志',
  description: 'ChimeMCP 的版本更新历史，了解最新功能和改进',
}

const releases = [
  {
    version: 'v1.2.0',
    date: '2024-12-26',
    type: 'major',
    title: '重大功能更新',
    description: '引入全新的可视化工作流编辑器和智能MCP推荐系统',
    features: [
      {
        type: 'new',
        title: '可视化工作流编辑器',
        description: '拖拽式界面设计，让工作流编排变得更加直观'
      },
      {
        type: 'new', 
        title: '智能MCP推荐',
        description: '基于使用场景自动推荐最适合的MCP Server组合'
      },
      {
        type: 'improved',
        title: '性能优化',
        description: '工作流执行速度提升40%，内存使用率降低25%'
      },
      {
        type: 'fixed',
        title: '修复已知问题',
        description: '解决了多个并发执行时的稳定性问题'
      }
    ]
  },
  {
    version: 'v1.1.3',
    date: '2024-12-15',
    type: 'patch',
    title: '稳定性和用户体验改进',
    description: '专注于提升系统稳定性和用户使用体验',
    features: [
      {
        type: 'improved',
        title: '错误处理优化',
        description: '更详细的错误信息和恢复建议'
      },
      {
        type: 'improved',
        title: '文档更新',
        description: '新增20+个实用示例和最佳实践指南'
      },
      {
        type: 'fixed',
        title: 'YAML解析修复',
        description: '修复复杂YAML配置文件的解析问题'
      }
    ]
  },
  {
    version: 'v1.1.0',
    date: '2024-12-01',
    type: 'minor',
    title: '模板市场和协作功能',
    description: '推出模板市场，支持团队协作和模板分享',
    features: [
      {
        type: 'new',
        title: '模板市场',
        description: '丰富的预构建模板库，涵盖各种使用场景'
      },
      {
        type: 'new',
        title: '团队协作',
        description: '支持多人协作编辑和版本管理'
      },
      {
        type: 'improved',
        title: 'CLI工具增强',
        description: '新增batch模式和进度显示功能'
      }
    ]
  },
  {
    version: 'v1.0.0',
    date: '2024-11-15',
    type: 'major',
    title: '正式版发布',
    description: 'ChimeMCP 1.0正式发布，开启AI自动化新时代',
    features: [
      {
        type: 'new',
        title: '核心工作流引擎',
        description: '强大的声明式工作流编排能力'
      },
      {
        type: 'new',
        title: 'MCP Server管理',
        description: '统一的MCP Server配置和管理界面'
      },
      {
        type: 'new',
        title: '丰富的文档',
        description: '完整的API文档和使用指南'
      }
    ]
  }
]

const typeColors: Record<string, string> = {
  major: 'bg-red-100 text-red-800 border-red-200',
  minor: 'bg-blue-100 text-blue-800 border-blue-200',
  patch: 'bg-green-100 text-green-800 border-green-200'
}

const typeLabels: Record<string, string> = {
  major: '重大更新',
  minor: '功能更新', 
  patch: '修复更新'
}

const featureTypeIcons: Record<string, string> = {
  new: '✨',
  improved: '🔄',
  fixed: '🐛'
}

const featureTypeColors: Record<string, string> = {
  new: 'text-green-600',
  improved: 'text-blue-600',
  fixed: 'text-orange-600'
}

const featureTypeLabels: Record<string, string> = {
  new: '新功能',
  improved: '改进',
  fixed: '修复'
}

export default function ChangelogPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            更新日志
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            跟踪 ChimeMCP 的发展历程，了解最新功能和改进
          </p>
        </div>

        {/* Release Timeline */}
        <div className="space-y-12">
          {releases.map((release, index) => (
            <Card key={release.version} className="p-8">
              {/* Release Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {release.version}
                    </h2>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${typeColors[release.type]}`}>
                      {typeLabels[release.type]}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {release.title}
                  </h3>
                  <p className="text-gray-600">
                    {release.description}
                  </p>
                </div>
                <time className="text-sm text-gray-500 font-medium">
                  {new Date(release.date).toLocaleDateString('zh-CN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {release.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                    <span className="text-lg" role="img" aria-label={featureTypeLabels[feature.type]}>
                      {featureTypeIcons[feature.type]}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm font-medium ${featureTypeColors[feature.type]}`}>
                          {featureTypeLabels[feature.type]}
                        </span>
                        <span className="text-gray-400">•</span>
                        <h4 className="font-medium text-gray-900">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            想要了解更多？
          </h2>
          <p className="text-gray-600 mb-8">
            关注我们的 GitHub 仓库，获取最新的开发动态和预览版本
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/your-username/chimemcp"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub 仓库
            </a>
            <a
              href="/community"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors"
            >
              加入社区
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 
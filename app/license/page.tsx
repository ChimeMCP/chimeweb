import { Metadata } from 'next'
import { Card } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '开源协议',
  description: 'ChimeMCP 开源协议 - MIT License',
}

export default function LicensePage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            开源协议
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            ChimeMCP 采用 MIT 许可协议开源
          </p>
        </div>

        <div className="space-y-12">
          {/* Open Source Banner */}
          <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="text-4xl">🚀</div>
              <h2 className="text-3xl font-bold text-gray-900">开源精神</h2>
              <div className="text-4xl">💻</div>
            </div>
            <p className="text-center text-gray-700 text-lg mb-6">
              我们相信开源的力量，ChimeMCP 的核心代码完全开源，
              欢迎社区贡献者一起构建更好的 AI 自动化工具。
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://github.com/ChimeMCP/chimemcp"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0024 12.017C24 6.484 19.522 2 12 2z" clipRule="evenodd" />
                </svg>
                查看源代码
              </a>
              <a
                href="/contributing"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors"
              >
                参与贡献
              </a>
            </div>
          </Card>

          {/* MIT License Overview */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">MIT 许可协议概述</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl mb-3">✅</div>
                <h3 className="font-semibold text-gray-900 mb-2">自由使用</h3>
                <p className="text-sm text-gray-600">可以自由使用、复制、修改和分发代码</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-3xl mb-3">💼</div>
                <h3 className="font-semibold text-gray-900 mb-2">商业友好</h3>
                <p className="text-sm text-gray-600">允许在商业项目中使用，无需支付许可费</p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-3xl mb-3">🛡️</div>
                <h3 className="font-semibold text-gray-900 mb-2">保留声明</h3>
                <p className="text-sm text-gray-600">需要保留原始版权和许可声明</p>
              </Card>
            </div>
          </div>

          {/* What You Can Do */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">您可以做什么</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  允许的行为
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 商业使用 - 在商业项目中使用</li>
                  <li>• 修改 - 修改源代码</li>
                  <li>• 分发 - 分发原始或修改版本</li>
                  <li>• 私人使用 - 个人或私人使用</li>
                  <li>• 专利使用 - 获得贡献者的专利许可</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-red-500">✗</span>
                  限制和要求
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 责任 - 软件不提供任何担保</li>
                  <li>• 保证 - 不承担任何明示或暗示的保证</li>
                  <li>• 必须包含 - 必须包含许可证和版权声明</li>
                  <li>• 商标 - 不授予商标使用权</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* MIT License Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">MIT 许可协议全文</h2>
            <Card className="p-8 bg-gray-50">
              <div className="space-y-6 font-mono text-sm">
                <div className="text-center border-b border-gray-300 pb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">MIT License</h3>
                  <p className="text-gray-600">Copyright (c) 2025 ChimeMCP by coso huang</p>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Permission is hereby granted, free of charge, to any person obtaining a copy
                    of this software and associated documentation files (the "Software"), to deal
                    in the Software without restriction, including without limitation the rights
                    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                    copies of the Software, and to permit persons to whom the Software is
                    furnished to do so, subject to the following conditions:
                  </p>

                  <p>
                    The above copyright notice and this permission notice shall be included in all
                    copies or substantial portions of the Software.
                  </p>

                  <p className="font-semibold text-gray-900">
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                    SOFTWARE.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Chinese Translation */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">中文翻译（仅供参考）</h2>
            <Card className="p-8 bg-blue-50 border-blue-200">
              <div className="space-y-4 text-gray-700">
                <p className="text-center font-semibold text-blue-900 border-b border-blue-300 pb-4">
                  MIT 许可协议<br/>
                  版权所有 (c) 2025 ChimeMCP by coso huang
                </p>

                <p>
                  特此向任何得到本软件副本或相关文档的人授权：被授权人有权使用、复制、修改、合并、出版、分发、再授权和/或销售软件的副本，
                  并有权向被供应人允许这样做，但须符合以下条件：
                </p>

                <p>
                  上述版权声明和本许可声明应包含在该软件的所有副本或实质成分中。
                </p>

                <p className="font-semibold text-blue-900 bg-blue-100 p-4 rounded">
                  本软件是"按原样"提供的，没有任何形式的明示或暗示的保证，包括但不限于对适销性、特定用途的适用性和不侵权的保证。
                  在任何情况下，作者或版权持有人都不对任何索赔、损害或其他责任负责，无论这些追责来自合同、侵权或其它行为中，
                  还是产生于、源于或有关于本软件以及本软件的使用或其它处置。
                </p>
              </div>
            </Card>
          </div>

          {/* Dependencies */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">第三方依赖</h2>
            <Card className="p-6">
              <p className="text-gray-600 mb-4">
                ChimeMCP 使用了多个开源库和框架，每个都有自己的许可协议：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Next.js</span>
                    <span className="text-gray-500">MIT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">React</span>
                    <span className="text-gray-500">MIT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">TypeScript</span>
                    <span className="text-gray-500">Apache-2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Tailwind CSS</span>
                    <span className="text-gray-500">MIT</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Node.js</span>
                    <span className="text-gray-500">MIT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">ESLint</span>
                    <span className="text-gray-500">MIT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Prettier</span>
                    <span className="text-gray-500">MIT</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">其他依赖</span>
                    <span className="text-gray-500">各自协议</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">
                完整的依赖列表和许可信息请查看项目的 package.json 和 LICENSES 文件
              </p>
            </Card>
          </div>

          {/* Community */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">开源社区</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">如何贡献</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 提交 Bug 报告和功能请求</li>
                  <li>• 贡献代码和文档</li>
                  <li>• 参与社区讨论</li>
                  <li>• 分享使用经验和案例</li>
                </ul>
                <a
                  href="/contributing"
                  className="inline-flex items-center mt-4 text-sm font-medium text-chime-gold hover:text-chime-gold/80"
                >
                  查看贡献指南 →
                </a>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">开源统计</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">GitHub Stars</span>
                    <span className="text-sm font-medium">1.2k+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">贡献者</span>
                    <span className="text-sm font-medium">50+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Fork 数量</span>
                    <span className="text-sm font-medium">300+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">开放问题</span>
                    <span className="text-sm font-medium">15</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              加入开源社区
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              一起构建更好的 AI 自动化工具，让开源的力量推动技术进步
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/ChimeMCP/chimemcp"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0024 12.017C24 6.484 19.522 2 12 2z" clipRule="evenodd" />
                </svg>
                Star on GitHub
              </a>
              <a
                href="/feedback"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 transition-colors"
              >
                反馈建议
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 
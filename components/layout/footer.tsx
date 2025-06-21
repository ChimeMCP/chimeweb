import Link from 'next/link'
import Image from 'next/image'

const footerNavigation = {
  product: [
    { name: '产品介绍', href: '/product' },
    { name: '快速开始', href: '/getting-started' },
    { name: '定价', href: '/pricing' },
    { name: '更新日志', href: '/changelog' },
  ],
  resources: [
    { name: '文档', href: '/docs' },
    { name: '模板市场', href: '/templates' },
    { name: '能力手册', href: '/docs/capabilities' },
    { name: '最佳实践', href: '/docs/best-practices' },
  ],
  community: [
    { name: '社区', href: '/community' },
    { name: 'GitHub', href: 'https://github.com/your-username/chimemcp' },
    { name: '贡献指南', href: '/contributing' },
    { name: '问题反馈', href: '/feedback' },
  ],
  legal: [
    { name: '隐私政策', href: '/privacy' },
    { name: '服务条款', href: '/terms' },
    { name: '开源协议', href: '/license' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        {/* 优化后的Logo和品牌信息 */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-6">
            <div className="h-16 w-16 rounded-full bg-white shadow-xl p-3 border-2 border-chime-gold/30 hover:shadow-2xl transition-all duration-300">
              <Image
                src="/images/logo.png"
                alt="编钟 ChimeMCP Logo"
                width={64}
                height={64}
                className="h-full w-full object-contain rounded-full hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold chime-text-gradient font-heading mb-1">编钟</div>
              <div className="text-base text-gray-600 font-medium">重新定义AI时代的自动化协作</div>
              <div className="text-sm text-gray-500 mt-1">ChimeMCP - MCP 唤醒 MCP</div>
            </div>
          </div>
        </div>
        
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">产品</h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.product.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-chime-gold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pb-6">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">资源</h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-chime-gold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pb-6">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">社区</h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.community.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-chime-gold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="pb-6">
            <h3 className="text-sm font-semibold leading-6 text-gray-900">法律</h3>
            <ul className="mt-6 space-y-4">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm leading-6 text-gray-600 hover:text-chime-gold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        
        <div className="mt-10 border-t border-gray-900/10 pt-10 text-center">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2024 编钟 ChimeMCP. 采用 MIT 许可协议开源.
          </p>
        </div>
      </div>
    </footer>
  )
} 
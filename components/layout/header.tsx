'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: '首页', href: '/' },
  { name: '产品介绍', href: '/product' },
  { name: '快速开始', href: '/getting-started' },
  { name: '文档', href: '/docs' },
  { name: 'MCP市场', href: '/mcp-market' },
  { name: '模板市场', href: '/templates' },
  { name: '社区', href: '/community' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-4">
            <div className="h-16 w-16 rounded-full bg-white shadow-lg p-2 border-2 border-chime-gold/30 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="编钟 ChimeMCP Logo"
                width={64}
                height={64}
                className="h-full w-full object-contain rounded-full hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold chime-text-gradient font-heading">
                编钟
              </span>
              <span className="text-sm text-gray-500 font-medium">
                ChimeMCP
              </span>
            </div>
          </Link>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors duration-200 relative ${
                isActive(item.href)
                  ? 'text-chime-gold'
                  : 'text-gray-900 hover:text-chime-gold'
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-chime-gold to-chime-bronze rounded-full" />
              )}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="https://github.com/ChimeMCP/chimemcp"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-chime-gold"
          >
            GitHub
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">打开主菜单</span>
            <div className="h-6 w-6">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </button>
        </div>
      </nav>
      
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-semibold leading-7 rounded-md transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-chime-gold bg-chime-gold/10 border-l-4 border-chime-gold'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://github.com/ChimeMCP/chimemcp"
              className="block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub
            </Link>
          </div>
        </div>
      )}
    </header>
  )
} 
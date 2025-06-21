import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Providers } from '@/components/providers'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: {
    default: '编钟 ChimeMCP - 重新定义AI时代的自动化协作',
    template: '%s | 编钟 ChimeMCP'
  },
  description: '编钟(ChimeMCP) - 基于MCP协议的声明式工作流编排工具，让MCP Server像编钟一样和谐协作，奏出自动化的华美乐章。从"手动配置N个工具"到"一句话完成复杂任务"。',
  keywords: ['MCP', 'AI自动化', '工作流编排', 'Claude Desktop', 'Cursor', '声明式YAML'],
  authors: [{ name: 'ChimeMCP Team' }],
  creator: 'ChimeMCP Team',
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://chimemcp.com',
    title: '编钟 ChimeMCP - 重新定义AI时代的自动化协作',
    description: '基于MCP协议的声明式工作流编排工具，让MCP Server像编钟一样和谐协作',
    siteName: '编钟 ChimeMCP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '编钟 ChimeMCP - 重新定义AI时代的自动化协作',
    description: '基于MCP协议的声明式工作流编排工具，让MCP Server像编钟一样和谐协作',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        inter.variable,
        spaceGrotesk.variable
      )}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 
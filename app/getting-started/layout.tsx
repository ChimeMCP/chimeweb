import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '快速开始',
  description: '5分钟上手编钟 ChimeMCP，体验"MCP 唤醒 MCP"协作模式',
}

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 
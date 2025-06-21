# 编钟 ChimeMCP 官网部署指南

## 🚀 快速部署

### Vercel 部署（推荐）

1. **Fork 仓库**
   ```bash
   git clone https://github.com/your-username/chimemcp-website.git
   cd chimemcp-website/chimeweb
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **本地测试**
   ```bash
   npm run dev
   ```

4. **部署到 Vercel**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 导入 GitHub 仓库
   - 选择 `chimeweb` 目录作为根目录
   - 点击 "Deploy"

### Netlify 部署

1. **构建项目**
   ```bash
   npm run build
   npm run export
   ```

2. **部署到 Netlify**
   - 访问 [Netlify Dashboard](https://app.netlify.com/)
   - 拖拽 `out` 文件夹到部署区域
   - 或连接 GitHub 仓库自动部署

### 自托管部署

1. **构建生产版本**
   ```bash
   npm run build
   ```

2. **启动生产服务器**
   ```bash
   npm start
   ```

3. **使用 PM2 进程管理**
   ```bash
   npm install -g pm2
   pm2 start npm --name "chimemcp-website" -- start
   pm2 save
   pm2 startup
   ```

## 🔧 环境配置

### 环境变量

创建 `.env.local` 文件：

```env
# 网站配置
NEXT_PUBLIC_SITE_URL=https://chimemcp.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/your-username/chimemcp

# 分析配置（可选）
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 域名配置

#### Vercel 自定义域名

1. 在 Vercel 项目设置中添加域名
2. 配置 DNS 记录：
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.19.61
   ```

#### Netlify 自定义域名

1. 在 Netlify 项目设置中添加域名
2. 配置 DNS 记录：
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

## 📊 性能优化

### 构建优化

1. **图片优化**
   - 使用 Next.js Image 组件
   - 配置 `next.config.js` 中的图片域名

2. **代码分割**
   - 动态导入非关键组件
   - 使用 `next/dynamic` 延迟加载

3. **字体优化**
   - 使用 Google Fonts 的 font-display: swap
   - 预加载关键字体文件

### 运行时优化

1. **CDN 配置**
   ```javascript
   // next.config.js
   module.exports = {
     assetPrefix: process.env.NODE_ENV === 'production' ? 'https://cdn.example.com' : '',
   }
   ```

2. **缓存策略**
   ```javascript
   // 在 _headers 文件中配置缓存
   /*
     Cache-Control: public, max-age=31536000, immutable
   
   /*.js
     Cache-Control: public, max-age=31536000, immutable
   
   /*.css
     Cache-Control: public, max-age=31536000, immutable
   ```

## 🔍 监控和分析

### Google Analytics

1. 添加环境变量 `NEXT_PUBLIC_GA_ID`
2. 在根布局中添加 GA 代码

### 性能监控

1. **Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```

2. **Web Vitals 监控**
   ```typescript
   // app/layout.tsx
   import { Analytics } from '@vercel/analytics/react'
   
   export default function RootLayout() {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     )
   }
   ```

## 🔒 安全配置

### 内容安全策略

创建 `next.config.js` 中的 CSP 配置：

```javascript
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https:;
      connect-src 'self' https://vitals.vercel-insights.com;
    `.replace(/\s{2,}/g, ' ').trim()
  }
]

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}
```

## 🛠 故障排除

### 常见问题

1. **构建失败**
   ```bash
   # 清理缓存
   rm -rf .next
   npm run build
   ```

2. **样式不加载**
   - 检查 Tailwind CSS 配置
   - 确认 globals.css 导入正确

3. **字体加载问题**
   - 检查 Google Fonts 链接
   - 验证 font-display 设置

### 调试技巧

1. **本地调试**
   ```bash
   # 启用详细日志
   DEBUG=* npm run dev
   ```

2. **生产环境调试**
   ```bash
   # 分析构建包大小
   npm install -g @next/bundle-analyzer
   ANALYZE=true npm run build
   ```

## 📈 SEO 优化

### 元数据配置

确保每个页面都有适当的元数据：

```typescript
export const metadata: Metadata = {
  title: '页面标题',
  description: '页面描述',
  openGraph: {
    title: '页面标题',
    description: '页面描述',
    images: ['/og-image.jpg'],
  },
}
```

### 站点地图

添加动态站点地图：

```typescript
// app/sitemap.ts
export default function sitemap() {
  return [
    {
      url: 'https://chimemcp.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    // 更多页面...
  ]
}
```

---

## 📞 支持

如果在部署过程中遇到问题，请：

1. 查看 [GitHub Issues](https://github.com/your-username/chimemcp-website/issues)
2. 联系技术支持团队
3. 参考 [Next.js 部署文档](https://nextjs.org/docs/deployment) 
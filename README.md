# 编钟 ChimeMCP 官网

<div align="center">
  <img src="public/images/logo.png" alt="编钟 Logo" width="400" height="400">
</div>

> 重新定义AI时代的自动化协作平台

基于Next.js 14构建的现代化官网，展示编钟(ChimeMCP)的核心功能和生态系统。

## ✨ 特性

- 🎨 **现代化设计**: 采用编钟主题的金色渐变设计
- 📱 **响应式布局**: 完美适配桌面、平板和移动设备
- ⚡ **高性能**: 基于Next.js 14的优化构建
- 🎭 **流畅动画**: 使用Framer Motion实现专业级动画效果
- 🔍 **SEO优化**: 完整的元数据和结构化数据支持

## 🏗️ 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS + 自定义主题
- **组件**: shadcn/ui
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Inter + Space Grotesk

## 📁 项目结构

```
chimeweb/
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式和编钟主题
│   ├── layout.tsx         # 根布局组件
│   ├── page.tsx           # 首页
│   ├── product/           # 产品介绍页面
│   ├── docs/              # 文档中心
│   ├── templates/         # 模板市场
│   ├── community/         # 社区页面
│   ├── about/             # 关于我们
│   └── getting-started/   # 快速开始
├── components/             # React组件
│   ├── layout/            # 布局组件 (Header, Footer)
│   ├── sections/          # 页面区块组件
│   ├── ui/                # 基础UI组件
│   └── providers.tsx      # 全局状态提供者
├── public/                # 静态资源目录
│   └── images/           # 图片资源
│       └── logo.png      # 编钟官方Logo
├── lib/                   # 工具函数库
└── 配置文件               # TypeScript, Tailwind, ESLint等
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 导出静态文件

```bash
npm run export
```

## 🎨 品牌设计

### Logo使用

网站使用统一的编钟Logo (`/public/images/logo.png`)，在以下位置展示：

1. **Header导航栏**: 32x32px，圆形容器，白色背景
2. **首页Hero区块**: 80x80px，带动画效果和装饰元素
3. **Footer页脚**: 32x32px，与品牌信息组合展示

### 主题色彩

- **编钟金 (chime-gold)**: `#D4AF37` - 主要品牌色
- **编钟铜 (chime-bronze)**: `#CD7F32` - 辅助色
- **编钟青铜 (chime-copper)**: `#B87333` - 装饰色

### 视觉效果

- 金属质感渐变背景
- 流畅的页面切换动画
- 悬停和交互反馈效果
- 编钟主题的装饰元素

## 📄 页面说明

### 核心页面

- **首页** (`/`): 产品概览和核心价值展示
- **产品介绍** (`/product`): 详细的技术架构和应用场景
- **快速开始** (`/getting-started`): 安装指南和基础教程
- **文档中心** (`/docs`): 完整的用户手册和开发者指南
- **模板市场** (`/templates`): YAML模板浏览和下载
- **社区** (`/community`): 贡献者展示和交流渠道
- **关于我们** (`/about`): 项目愿景和团队介绍

### 设计特色

每个页面都采用统一的设计语言：
- 编钟主题的配色方案
- 一致的动画和交互效果
- 响应式布局适配
- 清晰的信息层级结构

## 🛠️ 开发指南

### 添加新页面

1. 在 `app/` 目录下创建新的路由文件夹
2. 添加 `page.tsx` 文件
3. 使用统一的布局和样式规范
4. 更新导航菜单配置

### 自定义组件

1. 在 `components/` 目录下创建组件
2. 使用TypeScript定义Props接口
3. 遵循编钟主题的设计规范
4. 添加适当的动画效果

### 样式开发

1. 使用Tailwind CSS类名
2. 利用自定义的编钟主题变量
3. 保持响应式设计原则
4. 添加悬停和交互状态

## 🚢 部署

### Vercel (推荐)

```bash
# 连接GitHub仓库后自动部署
vercel --prod
```

### Netlify

```bash
# 构建并上传到Netlify
npm run build
netlify deploy --prod --dir=out
```

### 自托管

```bash
# 生成静态文件
npm run build
# 将out/目录部署到任何静态文件服务器
```

## 📊 性能优化

- ✅ 图片优化和懒加载
- ✅ 代码分割和动态导入
- ✅ CSS优化和压缩
- ✅ 字体预加载
- ✅ SEO元数据优化

## 🤝 贡献

欢迎提交Issue和Pull Request来改进网站！

### 开发流程

1. Fork项目仓库
2. 创建功能分支
3. 提交代码更改
4. 创建Pull Request

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

---

**编钟团队** - 重新定义AI时代的自动化协作

# DeepSeek TUI Design

DeepSeek TUI 架构设计文档站

## 项目结构

```
deepseek-tui-design/
├── docs-site/              # VitePress 文档站
│   ├── .vitepress/         # VitePress 配置
│   ├── docs/               # 文档 Markdown
│   └── public/             # 静态资源
└── .github/workflows/      # GitHub Actions
```

## 文档

- [架构概览](architecture.md)
- [核心模块](core.md)
- [工具系统](tools.md)
- [MCP 扩展](mcp.md)
- [配置系统](configuration.md)
- [运行时 API](runtime-api.md)
- [会话管理](session.md)
- [技能系统](skills.md)

## 本地开发

```bash
cd docs-site
npm install
npm run dev
```

## 部署

文档站通过 GitHub Actions 自动部署到 GitHub Pages：
https://yeluo45.github.io/deepseek-tui-design/

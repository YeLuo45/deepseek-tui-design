import { defineConfig } from "vitepress";

export default defineConfig({
  title: "DeepSeek TUI Design",
  description: "DeepSeek TUI 架构设计文档站",
  lang: "zh-CN",
  base: "/deepseek-tui-design/",

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/logo.svg" }],
  ],

  themeConfig: {
    logo: "/logo.svg",

    nav: [
      { text: "首页", link: "/" },
      { text: "架构概览", link: "/architecture" },
      { text: "核心模块", link: "/core" },
      { text: "工具系统", link: "/tools" },
      { text: "MCP 扩展", link: "/mcp" },
      { text: "配置系统", link: "/configuration" },
    ],

    sidebar: [
      {
        text: "文档",
        items: [
          { text: "首页", link: "/" },
          { text: "架构概览", link: "/architecture" },
          { text: "核心模块", link: "/core" },
          { text: "工具系统", link: "/tools" },
          { text: "MCP 扩展", link: "/mcp" },
          { text: "配置系统", link: "/configuration" },
          { text: "运行时 API", link: "/runtime-api" },
          { text: "会话管理", link: "/session" },
          { text: "技能系统", link: "/skills" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/YeLuo45/deepseek-tui-design" },
    ],

    footer: {
      message: "基于 DeepSeek-TUI 开源项目构建",
      copyright: "Copyright © 2025-present DeepSeek TUI Contributors",
    },
  },
});

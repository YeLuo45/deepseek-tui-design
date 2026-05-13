---
layout: home

hero:
  name: "DeepSeek TUI"
  text: "终端智能编码 Agent"
  tagline: "基于 Rust 构建的高性能终端编码工具，支持流式推理、1M Token 上下文、 MCP 扩展"
  image:
    src: /logo.svg
    alt: DeepSeek TUI
  actions:
    - theme: brand
      text: 架构概览
      link: /architecture
    - theme: brand
      text: 核心模块
      link: /core

features:
  - icon: 🏗️
    title: 架构分析
    details: 16 个核心 crate 模块，从 CLI 入口到 TUI 界面的完整架构解析
    link: /architecture
    linkText: 查看架构

  - icon: ⚙️
    title: 核心模块
    details: Agent 引擎、会话管理、事件系统、工具编排的深度剖析
    link: /core
    linkText: 查看模块

  - icon: 🔧
    title: 工具系统
    details: Shell、文件操作、Git、Web 搜索、MCP 服务器等完整工具链
    link: /tools
    linkText: 查看工具

  - icon: 🔌
    title: MCP 扩展
    details: Model Context Protocol 协议支持，连接外部工具服务
    link: /mcp
    linkText: 查看 MCP

  - icon: 📝
    title: 配置系统
    details: TOML 配置、API Key 管理、多语言 UI、本地化支持
    link: /configuration
    linkText: 查看配置

  - icon: 🌐
    title: 运行时 API
    details: HTTP/SSE 模式下的无头 Agent 工作流支持
    link: /runtime-api
    linkText: 查看 API
---

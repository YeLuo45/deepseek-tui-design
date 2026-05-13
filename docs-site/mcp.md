# MCP 扩展

## Model Context Protocol

MCP 是 Anthropic 提出的标准化协议，用于连接 AI Agent 与外部工具服务。

## MCP 架构

```
┌─────────────┐     MCP Protocol      ┌─────────────┐
│   Client   │ ◄──────────────────► │   Server    │
│  (DeepSeek │     stdio/JSON       │  (External  │
│    TUI)    │                      │   Tool)     │
└─────────────┘                      └─────────────┘
```

## MCP 客户端实现

`crates/mcp/` 模块包含：
- 协议解析
- 工具发现
- 请求/响应处理
- 错误处理

## MCP 服务器连接

### 配置方式

在 `config.toml` 中配置 MCP 服务器：

```toml
[mcp]
[[mcp.servers]]
name = "filesystem"
command = ["npx", "-y", "@modelcontextprotocol/server-filesystem", "/path/to/dir"]
```

### 内置 MCP 服务器

- Filesystem - 文件系统操作
- Git - Git 操作
- Memory - 持久化记忆

## 工具映射

MCP 工具自动映射到 Agent 工具链：
1. MCP 服务器公告可用工具
2. Client 获取工具列表
3. 工具注册到 Agent 工具表
4. Agent 即可调用

## 错误处理

- 连接失败重试
- 超时控制
- 协议版本协商

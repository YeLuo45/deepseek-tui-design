# 核心模块

## Core Engine

### Agent Loop (`core/engine.rs`)

Agent 循环是系统的核心，负责：
- 处理用户输入
- 管理对话轮次（Turn）
- 编排工具执行
- 流式响应处理

### Session Management

会话管理处理：
- 多会话并行
- 会话状态持久化
- 会话恢复与回滚

### Turn Management

轮次管理负责：
- 对话历史追踪
- 上下文窗口管理
- 压缩策略触发

### Events System

事件系统用于：
- UI 状态更新
- 工具执行反馈
- 错误通知

## Agent 模块

### Agent State Machine

Agent 状态机包含：
- Idle / Running / Paused / Error
- 状态转换条件
- 各状态的允许操作

### Tool Orchestration

工具编排逻辑：
- 工具选择策略
- 执行顺序优化
- 结果聚合

## TUI 模块

### Layout System

ratatui 布局：
- 主区域（消息显示）
- 输入区域
- 侧边栏（会话列表）
- 状态栏

### Input Handling

输入处理：
- 命令行编辑
- 快捷键绑定
- 自动补全

### Rendering

渲染优化：
- 增量更新
- 虚拟滚动
- 响应式布局

## State 模块

### State Persistence

状态持久化：
- 检查点创建
- 增量保存
- 历史版本

### Rollback System

回滚系统：
- Pre-turn 快照
- Post-turn 快照
- 任意回滚点恢复

# 会话管理

## 会话概念

会话（Session）是 DeepSeek TUI 的核心抽象，代表一次完整的 Agent 对话交互。

## 会话生命周期

```
创建 → 活跃 → 完成
         ↓
       中断 → 恢复
         ↓
       归档
```

## 会话状态

| 状态 | 说明 |
|------|------|
| `idle` | 等待用户输入 |
| `running` | Agent 正在运行 |
| `paused` | 暂停（等待工具结果） |
| `error` | 错误状态 |
| `completed` | 对话结束 |

## 会话存储

### 存储位置

- Linux/macOS: `~/.deepseek/sessions/`
- Windows: `%APPDATA%/deepseek/sessions/`

### 存储格式

每个会话存储为 JSON 文件：
```
sessions/
├── sess_abc123.json    # 会话元数据
├── sess_abc123.msg/    # 消息历史（可选）
└── sess_abc123.snap/   # 快照（如有）
```

## 检查点机制

### 自动检查点

每个轮次结束后自动创建检查点：
- 保存当前状态
- 保留对话历史
- 记录消耗统计

### 手动检查点

```bash
deepseek checkpoint create sess_xxx
```

## 回滚功能

### Pre-Turn 快照

每次工具执行前保存快照，用于回滚。

### 回滚命令

```bash
# 回滚到指定轮次
deepseek restore sess_xxx --turn 5

# 回滚并重试
deepseek restore sess_xxx --turn 5 --retry
```

## 多会话管理

### 并发会话

支持多个会话并行：
```bash
deepseek session list
deepseek session switch sess_xxx
deepseek session kill sess_xxx
```

### 会话导入/导出

```bash
# 导出
deepseek session export sess_xxx --file session.json

# 导入
deepseek session import --file session.json
```

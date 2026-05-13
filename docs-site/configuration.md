# 配置系统

## 配置文件

DeepSeek TUI 使用 TOML 格式配置文件：
- Linux/macOS: `~/.deepseek/config.toml`
- Windows: `%APPDATA%/deepseek/config.toml`

## 配置结构

```toml
[api]
api_key = "sk-..."
base_url = "https://api.deepseek.com"

[model]
default = "deepseek-v4-pro"
auto_mode = true

[ui]
language = "zh-Hans"
theme = "dark"

[tools]
allowed = ["shell", "file", "git"]
blocked = []

[execution]
mode = "agent"  # plan | agent | yolo
```

## API 配置

### API Key

支持多种 API Key 来源：
1. 配置文件
2. 环境变量 `DEEPSEEK_API_KEY`
3. 首次启动交互式输入

### Base URL

支持自定义 API 端点：
- 官方: `https://api.deepseek.com`
- 代理: `https://your-proxy.com`
- 本地: `http://localhost:8080`

## 模型配置

### 可用模型

| 模型 | 说明 | 上下文 |
|------|------|--------|
| deepseek-v4-pro | 最新旗舰模型 | 1M |
| deepseek-v4-flash | 快速响应 | 1M |
| deepseek-chat | 标准对话 | 128K |

### Auto Mode

`--model auto` 参数自动选择：
- 简单任务 → flash
- 复杂推理 → pro
- 用户干预 → 询问

## 执行策略配置

### Plan Mode

只读模式配置：
```toml
[execution]
mode = "plan"
read_only = true
```

### Agent Mode

交互模式配置：
```toml
[execution]
mode = "agent"
require_confirmation = true
confirm_dangerous = true
```

### YOLO Mode

自动执行配置：
```toml
[execution]
mode = "yolo"
auto_approve = true
```

## UI 配置

### 语言

支持语言：
- `en` - English
- `ja` - 日本語
- `zh-Hans` - 简体中文
- `pt-BR` - Português

### 主题

- `dark` - 深色主题（默认）
- `light` - 浅色主题
- `system` - 跟随系统

## 环境变量

| 变量 | 说明 |
|------|------|
| DEEPSEEK_API_KEY | API Key |
| DEEPSEEK_BASE_URL | API 端点 |
| DEEPSEEK_MODEL | 默认模型 |
| DEEPSEEK_MODE | 执行模式 |

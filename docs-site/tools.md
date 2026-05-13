# 工具系统

## 工具注册表

工具系统通过 `crates/tools/` 模块统一管理所有可用工具。

## 内置工具

### Shell 工具

执行本地 shell 命令：
- 命令执行
- 工作目录管理
- 环境变量
- 超时控制

### 文件操作工具

文件操作集：
- `read_file` - 读取文件
- `write_file` - 写入文件
- `edit_file` - 编辑文件（diff）
- `apply_patch` - 应用补丁
- `glob` - 文件搜索

### Git 工具

Git 操作封装：
- `git_status` - 仓库状态
- `git_log` - 提交历史
- `git_diff` - 差异查看
- `git_branch` - 分支管理

### Web 工具

网络功能：
- `web_search` - 搜索
- `web_browse` - 浏览网页
- `fetch` - HTTP 请求

### Sub-Agent 工具

子 Agent 管理：
- `agent_spawn` - 启动子 Agent
- `agent_result` - 获取结果

## MCP 工具

通过 Model Context Protocol 连接外部 MCP 服务器，扩展工具能力。

## 执行策略

### Plan Mode

只读模式：
- 不执行写入操作
- 不执行危险命令
- 禁止删除操作

### Agent Mode

交互审批：
- 每个写操作需确认
- 危险操作需二次确认
- 可跳过或修改命令

### YOLO Mode

自动执行：
- 所有操作自动批准
- 适合简单重复任务
- 风险由用户自担

## Hooks 系统

前后置钩子扩展点：
- `pre_tool` - 工具执行前
- `post_tool` - 工具执行后
- `pre_turn` - 轮次开始前
- `post_turn` - 轮次结束后

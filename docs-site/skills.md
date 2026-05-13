# 技能系统

## 概念

技能（Skills）是可组合、可安装的指令包，从 GitHub 获取，无需后端服务。

## 技能结构

```yaml
name: my-skill
version: 1.0.0
description: 自定义技能说明

instructions: |
  当用户要求 [X] 时，执行以下步骤：
  1. ...
  2. ...

tools:
  - shell
  - file

constraints:
  - 不执行删除操作
  - 确认后再执行危险命令
```

## 安装技能

### 从 GitHub 安装

```bash
deepseek skills install owner/repo
deepseek skills install owner/repo --dir ./custom-skills
```

### 搜索技能

```bash
deepseek skills search "web scraping"
```

### 列出已安装

```bash
deepseek skills list
```

## 技能组合

### 启用/禁用

```bash
deepseek skills enable my-skill
deepseek skills disable my-skill
```

### 技能优先级

多个技能同时启用时，按优先级排序执行。

## 技能开发

### 本地开发

```bash
deepseek skills init my-new-skill
cd my-new-skill
# 编辑 skill.yaml
deepseek skills test
```

### 技能规范

| 字段 | 必填 | 说明 |
|------|------|------|
| name | 是 | 技能名称（唯一） |
| version | 是 | 语义版本 |
| description | 是 | 一句话描述 |
| instructions | 是 | 核心指令 |
| tools | 否 | 允许的工具列表 |
| constraints | 否 | 约束条件 |

## 内置技能

DeepSeek TUI 提供多个内置技能：
- `code-review` - 代码审查
- `test-generator` - 测试生成
- `doc-writer` - 文档编写
- `refactor` - 重构辅助

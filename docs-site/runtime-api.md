# 运行时 API

## HTTP/SSE 模式

DeepSeek TUI 支持无头运行模式，通过 HTTP/SSE 提供 Agent 服务。

## 启动服务

```bash
deepseek serve --http --port 8080
```

## API 端点

### 健康检查

```
GET /health
```

响应：
```json
{
  "status": "ok",
  "version": "0.8.8"
}
```

### 创建会话

```
POST /session
```

请求：
```json
{
  "model": "deepseek-v4-pro",
  "mode": "agent"
}
```

响应：
```json
{
  "session_id": "sess_xxx",
  "created_at": "2025-01-15T10:00:00Z"
}
```

### 发送消息

```
POST /session/{session_id}/message
```

请求：
```json
{
  "content": "帮我写一个 Hello World 程序"
}
```

响应（SSE 流）：
```
data: {"type": "thinking", "content": "思考中..."}
data: {"type": "tool_call", "tool": "write_file", "args": {...}}
data: {"type": "tool_result", "tool": "write_file", "result": "ok"}
data: {"type": "message", "content": "已创建 Hello World 程序"}
data: [DONE]
```

### 获取会话状态

```
GET /session/{session_id}
```

响应：
```json
{
  "id": "sess_xxx",
  "status": "running",
  "turns": 5,
  "cost": {
    "input_tokens": 1500,
    "output_tokens": 800,
    "cost_usd": 0.023
  }
}
```

### 列出会话

```
GET /sessions
```

响应：
```json
{
  "sessions": [
    {"id": "sess_xxx", "created_at": "...", "turns": 5}
  ]
}
```

## 任务队列

### 提交任务

```
POST /tasks
```

请求：
```json
{
  "prompt": "分析 /workspace 下的代码结构",
  "background": true
}
```

### 查询任务

```
GET /tasks/{task_id}
```

### 取消任务

```
DELETE /tasks/{task_id}
```

## WebSocket 支持

除了 SSE，还支持 WebSocket 连接：

```javascript
const ws = new WebSocket('ws://localhost:8080/ws/sess_xxx');
ws.onmessage = (event) => {
  console.log(event.data);
};
```

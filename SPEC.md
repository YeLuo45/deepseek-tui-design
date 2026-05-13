# DeepSeek TUI Design Specification

## 1. Project Overview

**Project Name**: deepseek-tui-design
**Type**: Architecture Design Documentation Site
**Core Functionality**: VitePress-based documentation site for DeepSeek TUI architecture analysis
**Target Users**: Developers, contributors, and users interested in DeepSeek TUI

## 2. Technical Stack

| Layer | Technology |
|-------|------------|
| Documentation | VitePress |
| Theme | Custom Dark Theme |
| Deployment | GitHub Pages (workflow mode) |
| Source | Hmbown/DeepSeek-TUI (Rust) |

## 3. Module Design

### 3.1 Documentation Modules

| Module | Description |
|--------|-------------|
| architecture.md | High-level architecture overview with ASCII diagrams |
| core.md | Core engine components: Agent Loop, Session, Turn Management |
| tools.md | Tool system: Shell, File, Git, Web, Sub-Agent |
| mcp.md | Model Context Protocol extension support |
| configuration.md | TOML configuration, API key, UI settings |
| runtime-api.md | HTTP/SSE Runtime API endpoints |
| session.md | Session management, checkpoint, rollback |
| skills.md | Composable skill system from GitHub |

### 3.2 Visual Design

- **Color Scheme**: Dark blue (#0a0e1a) with purple-blue accent (#7c9cff)
- **Typography**: System fonts with monospace for code
- **Layout**: VitePress default layout with custom sidebar

## 4. Deployment

- **URL**: https://yeluo45.github.io/deepseek-tui-design/
- **Build**: `pnpm run build` in docs-site/
- **Output**: docs-site/.vitepress/dist/
- **Workflow**: GitHub Actions workflow mode

## 5. Git Repository

- **Remote**: git@github.com:YeLuo45/deepseek-tui-design.git
- **Branch**: main (source), gh-pages (deprecated, using workflow mode)

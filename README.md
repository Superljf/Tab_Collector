

```markdown
# TabCollector

**TabCollector** 是一个 Chrome 扩展程序，旨在帮助用户收集和管理工作相关的链接，使你能够轻松地组织和访问常用的网页。

## 功能特点

- **链接收集和管理**：轻松保存、组织和访问工作相关的链接。
- **用户友好的界面**：简洁直观的用户界面，方便管理你的链接。
- **高效的工作流程**：直接从浏览器快速访问最重要的工作链接。

## 界面预览
- ![主页]('./src/img/image.png')
- ![编辑]('./src/img/img2.png')

## 安装步骤

1. 克隆此仓库到你的本地机器：
   ```bash
   git clone https://github.com/Superljf/TabCollector.git
   ```
2. 进入项目目录：
   ```bash
   cd TabCollector
   ```
3. 安装依赖：
   ```bash
   npm install
   ```
4. 启动开发服务器：
   ```bash
   npm run dev
   ```

## 生产环境构建

要为生产环境构建扩展程序，请运行以下命令：

```bash
npm run build
```

这将生成位于 `dist` 目录中的生产就绪文件。

## 在 Chrome 中加载扩展程序

1. 打开 Chrome 并进入 `chrome://extensions/`。
2. 在右上角启用“开发者模式”。
3. 点击“加载已解压的扩展程序”，然后选择项目目录中的 `dist` 文件夹。

## 项目结构

- `src/`：源代码目录，包含所有的 React 组件和脚本文件。
- `public/`：静态资源文件夹，包含图标和静态 HTML 文件。
- `dist/`：构建后的生产环境文件夹。
- `scripts/`：扩展的背景脚本和其他辅助脚本。

## 使用的技术栈

- **React**：用于构建用户界面。
- **Vite**：用于快速的开发和构建工具。
- **TypeScript**：提供类型安全和代码补全。
- **Less**：用于编写可维护的 CSS 样式。

## 许可证

此项目采用 [MIT 许可证](LICENSE)。
```


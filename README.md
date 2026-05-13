# 刘启全化学冲刺网页

这是一个可直接部署到 GitHub Pages 的高中化学冲刺静态网站。

线上地址通常为：

https://z4w8x6zx5n-rgb.github.io/lqqHX/

## 文件

- `index.html`：网页入口
- `papers.html`：独立试卷页，答案默认隐藏，可点击展开
- `style.css`：页面样式
- `script.js`：知识点数据、首页列表和详情切换逻辑

## 本次优化

- 专题详情页加入图文结合的反应路线图和考点视觉卡片。
- 试卷独立成页，基础版答案与加强版提示默认折叠。
- 按本地教师用书 PDF 的章节体系整理资料框架，但未上传 PDF 原件，避免仓库体积过大。

## GitHub Pages 使用方法

1. 进入仓库 `Settings` -> `Pages`。
2. `Source` 选择 `Deploy from a branch`。
3. 分支选择 `main`，目录选择 `/root`。
4. 保存后等待 GitHub 生成访问链接。

继续扩充内容时，主要编辑 `script.js` 中的 `topics` 数组即可。

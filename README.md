## 模块化

### webpack

### parcel

### rollup

#### 问题记录
打包报 `Error: Cannot find module '@babel/core'`
官方默认babel-loader | babel 对应的版本需要一致: 即babel-loader需要搭配最新版本babel
解决办法: 
1. `npm install -D babel-loader@7 babel-core babel-preset-env`
- 回退到7
2. `npm install -D babel-loader @babel/core @babel/preset-env webpack` 
- 更新到最新
## 代码规范

### 编辑器插件

- eslint插件
  - [eslint+vscode](https://segmentfault.com/a/1190000009077086?from=timeline&isappinstalled=0)

### 项目配置文件

- .editorconfig
- vscode插件 `editorconfig for VS code`
- prettierrc

### eslint

[中文官网](https://cn.eslint.org/)

### stylelint


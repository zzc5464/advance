## 基本使用 
1. 安装 `npm install -g eslint`
2. 初始化 `eslint --init`
![](./img/eslint--init.png)
 - 使用哪种方式配置eslintrc
 - 使用es几来编译
 - 使用es6模块导出/入？
 - 代码的运行环境
 - 使用commonjs
 - 使用jsx
 - space 还是 tabs
 - 单双引号
 - 电脑的环境
 - 是否需要分号
 - 生成的rc为什么格式的文件
3. 编写忽略文件
4. 下载依赖包 
   - `npm i eslint babel-eslint -D`
5. 在 package.json中添加命令
   - `eslint 要检测的目录`

## 基本操作
> 配置完成后，执行脚本可以检测代码是否规范
>
> 如果报错非常多的情况可以在package.json配置命令
>
> `eslint --fix 要检测的目录`
>
> 会将一些能自动更改的项进行更改，但无法全部更改为正确的详见官网。

## 拓展

- pre-commit

> 在git提交之前拦截一下，可以指定必须执行某项命令通过了才可提交
>
> 安装 `npm i pre-commit -D`

在package.json中添加一项

```js
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint src",
    "fix": "eslint --fix src"
  },
  "pre-commit": [
  "test": true
  ]
}

```




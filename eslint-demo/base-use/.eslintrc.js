module.exports = {
    "env": { // 启用各环境的顶级全局变量
        "browser": true,
        "commonjs": true,
        "es6": true // 
    },
    // "parser": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {// 添加需要的额外语言特性
            "jsx": true,
            // "globalReturn": true, // 允许在全局作用域下使用 return 语句
            // "impliedStrict": true, // 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
            // "experimentalObjectRestSpread": true, // 对  ... (对象拓展运算符)语法的支持 已弃用
        },
        "ecmaVersion": 5, // 启用不同版本的js语法支持 默认3，5. 可选 6，7，8，9
        "sourceType": "module"  // 导入模块类型 script/module
    },
    "rules": {// 所有校验的规则配置
        "indent": [
            "error",// 错误级别 0(off) 1(warn) 2(error) => 不用 警告 报错
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        // "no-console": [0],
        // "extends" 用来拓展配置的 可以是 "" 也可以是 ["",""]
        // "extends": "esprima", // 设置eslint的解析器默认是esprima，可选 Babel-ESLint typescript-eslint-parser(实验)
        // "extends": "eslint:recommended" // 加上这行，那么 https://cn.eslint.org/docs/rules/ 里所有打勾的规则都会应用
    },
    "globals": { // 这里定义的k，在检查代码时遇到为定义的全局变量不会报错
        "var1": true,// 允许重写 var1 变量
        "var2": false
    },
    "plugins": [ // 放置eslint 插件， 可以省略插件名称的 eslint-plugin- 前缀

    ]
    /**
     * extends用来添加额外的配置
     * plugins用来添加额外的插件
     */
};
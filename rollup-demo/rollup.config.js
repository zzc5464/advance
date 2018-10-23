// 引入解析json插件
import json from 'rollup-plugin-json';
// 使得rollup可以解析外部包
import resolve from 'rollup-plugin-node-resolve';
// 用来将 CommonJS 转换成 ES2015 模块的。
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'cjs', //  五种输出格式：amd /  es / iife / umd / cjs
  },
  plugins: [
    json(),
    resolve(),
    // resolve({
    //   // 将自定义选项传递给解析插件
    //   customResolveOptions: {
    //     moduleDirectory: 'node_modules'
    //   }
    // }),
    commonjs()
  ],
  // 指出应将哪些模块视为 外部模块 意思就是不会将代码整个打包进去
  external: ['lodash']
}

// import babel from 'rollup-plugin-babel';
// import resolve from 'rollup-plugin-node-resolve';
// export default {
//   entry: 'src/index.js',
//   format: 'umd',
//   plugins: [
//     resolve() ,
//     babel({
//       exclude: 'node_modules/**'
//     })
//   ],
//   dest: 'build/bundle.js'
// }

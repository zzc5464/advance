# parcel

> 开箱即用的webpack

## 安装
`npm install -g parcel-bundler`

## 起步
> 写好一个index.html文件
> `parcel index.html --open`
> 打包成功

## 结合vue



```html
<!-- index.html -->
<body>
  <div id="app"></div>
  <script src="./src/main.js"></script>
</body>
```



```js
// main.js
import Vue from 'vue';
import App from './App.vue';

new Vue({
  el: '#app',
  render: h=> h(App)
})
```



```vue
<template>
  <div>hello parcel</div>
</template>
```


## 参数
parcek <入口文件> <参数>
`--open` 打包成功，在在浏览器打开
`-p 端口号` 覆盖默认的端口号
> `parcel index.html --open`
>
> 会自动装vue等插件并在浏览器打开
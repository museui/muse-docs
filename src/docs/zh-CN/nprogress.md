# NProgress

加载进度条，用于全局页面加载进度。

## 示例

:::demo
```html
<mu-container class="nprogress-wrap">
  <mu-button color="primary" @click="$progress.start();">start</mu-button>
  <mu-button color="secondary" @click="$progress.done();">Done</mu-button>
</mu-container>
<style>
.nprogress-wrap .mu-button{
  margin: 6px 8px;
}
</style>
```
:::

## 安装与使用

```bash
npm install -S muse-ui-progress
// or
yarn add muse-ui-progress
```

```javascript
import 'muse-ui-progress/dist/muse-ui-progress.css';
import Vue from 'vue';
import NProgress from 'muse-ui-progress';
Vue.use(NProgress);

new Vue({
  created () {
    this.$progress.start();
    this.$progress.done();
  }
})

// or
NProgress.start();
NProgress.done();
```

## API

## config

`Vue.use(NProgress, config)` 或 `NProgress.config(options)` 更改默认的配置信息

```javascript
export default {
  zIndex: 2000,          // progress z-index
  top: 0,                // position fixed top
  speed: 300,            // progress speed
  color: 'primary',      // color
  size: 2,               // progress size
  className: ''          // progress custom class
};
```

<style>
.nprogress-wrap .mu-button{
  margin: 6px 8px;
}
</style>

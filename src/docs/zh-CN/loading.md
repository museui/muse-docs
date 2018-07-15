# 加载

加载数据时显示动效。

## 示例

:::demo
```html
<mu-container data-mu-loading-color="secondary" data-mu-loading-overlay-color="rgba(0, 0, 0, .7)" v-loading="loading2" class="demo-loading-wrap">
  <mu-button color="primary" @click="loading()">区域加载</mu-button>
  <mu-button color="secondary" v-loading="loading1" data-mu-loading-size="24" @click="loading1 = !loading1">按钮加载</mu-button>
  <mu-button color="teal" @click="fullscreen()">全屏加载</mu-button>
</mu-container>
<script>
export default {
  data () {
    return {
      loading1: false,
      loading2: false
    };
  },
  methods: {
    loading () {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 2000)
    },
    fullscreen () {
      const loading = this.$loading();
      setTimeout(() => {
        loading.close();
      }, 2000)
    }
  }
};
</script>
<style lang="less">
.demo-loading-wrap {
  height: 300px;
  position: relative;
  .mu-button {
    margin: 6px 8px;
  }
}
</style>
```
:::

## 安装与使用

```bash
npm install -S muse-ui-loading
// or
yarn add muse-ui-loading
```

```javascript
import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Vue from 'vue';
import Loading from 'muse-ui-loading';
Vue.use(Loading);

new Vue({
  methods: {
    loading () {
      const loading = this.$loading({
        // ...options
      });
      setTimeout(() => {
        loading.close();
      }, 3000)
    }
  }
});

// or
const loading = Loading({
  // ...options
});
setTimeout(() => {
  loading.close();
}, 3000)
```

使用 `v-loading` 指令, 使用 `data-mu-loading-*` 设置选项

```html
<div v-loading="true" data-mu-loading-overlay-color="rgba(0, 0, 0, .6)" style="position: relative; width: 500px; height: 400px;"></div>
```

## API

### config

`Vue.use(Loading, config)` 或 `Loading.config(options)` 更改默认的配置信息

```javascript
{
  overlayColor: 'hsla(0,0%,100%,.9)',        // 背景色
  size: 48,
  color: 'primary',                           // color
  className: ''                               // loading class name
}
```

### Loading  (options)

全局显示加载框，将会返回一个对象 { instance, close }

* instance: Loading 框的Vue 实例
* close:    关闭加载的方法

## Options

| 名称 | 描述 | 类型 | 可选值 | 默认 |
|------|-------------|------|-----------------|---------|
| overlayColor | 遮盖颜色 | String | — | hsla(0,0%,100%,.9) |
| color | 加载指示器颜色 | String | — | primary |
| size | 加载指示器大小 | Number | — | 48 |
| text | 加载文字 | String | — | — |
| className | 加载指示器样式 | String | — | — |
| target | 在哪个元素内显示加载框 | Element | — | document.body |

## v-loading

v-loading="true"

* data-mu-loading-overlay-color
* data-mu-loading-color
* data-mu-loading-size
* data-mu-loading-text
* data-mu-loading-class

<script>
export default {
  data () {
    return {
      loading1: false,
      loading2: false
    };
  },
  methods: {
    loading () {
      this.loading2 = true;
      setTimeout(() => {
        this.loading2 = false;
      }, 2000)
    },
    fullscreen () {
      const loading = this.$loading();
      setTimeout(() => {
        loading.close();
      }, 2000)
    }
  }
};
</script>
<style lang="less">
.demo-loading-wrap {
  height: 300px;
  position: relative;
  .mu-button {
    margin: 6px 8px;
  }
}
</style>

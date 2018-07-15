# 消息提示

基于 `mu-snackbar` 常用于主动操作后简短的消息提示功能

## 示例

:::demo
```html
<mu-button class="demo-button" @click="$toast.message('Hello World')" color="primary">message</mu-button>
<mu-button class="demo-button" @click="$toast.success('Hello World')" color="success">success</mu-button>
<mu-button class="demo-button" @click="$toast.warning('Hello World')" color="warning">warning</mu-button>
<mu-button class="demo-button" @click="$toast.info('Hello World')" color="info">info</mu-button>
<mu-button class="demo-button" @click="$toast.error('Hello World')" color="error">error</mu-button>
<style>
.demo-button {
  margin: 6px 8px;
}
</style>
```
:::

## 安装

```bash
npm install muse-ui-toast -S
// or
yarn add muse-ui-toast
```

## 使用

```javascript
import Vue from 'vue'
import Toast from 'muse-ui-toast';

Vue.use(Toast);

new Vue({
  methods: {
    toast () {
      this.$toast.message('hello world');
      this.$toast.success('hello world');
      this.$toast.info('hello world');
      this.$toast.warning('hello world');
      this.$toast.error('hello world');
    }
  }
});

// Or
Toast.message('hello world');
Toast.success('hello world');
Toast.info('hello world');
Toast.warning('hello world');
Toast.error('hello world');
```

## API


## Options
<style>
.demo-button {
  margin: 6px 8px;
}
</style>

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

### config

`Vue.use(Toast, config)` 或 `Toast.config(options)` 更改默认的配置信息

```javascript
export default {
  position: 'bottom',               // 弹出的位置
  time: 2000,                       // 显示的时长
  closeIcon: 'close',               // 关闭的图标
  close: true,                      // 是否显示关闭按钮
  successIcon: 'check_circle',      // 成功信息图标
  infoIcon: 'info',                 // 信息信息图标
  warningIcon: 'priority_high',     // 提醒信息图标
  errorIcon: 'warning'              // 错误信息图标
};
```

### message(options<String/Object>)

显示一条普通的消息提示，会返回消息 `id`

### success(options<String/Object>)

显示成功的消息提示，会返回消息 `id`

### warning(options<String/Object>)

显示提醒的消息提示，会返回消息 `id`

### info(options<String/Object>)

显示信息的消息提示，会返回消息 `id`

### error(options<String/Object>)

显示错误的消息提示，会返回消息 `id`

### close(id)

关闭某个消息提示

## options

| 名称 | 描述 | 类型 | 可选值 | 默认 |
|------|-------------|------|-----------------|---------|
| message | 消息内容 | String | — | — |
| time | 显示时长 | Number | — | 2000 |
| position | 显示位置 | String | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom |
| close | 是否显示关闭按钮 | Boolean | — | true |
| icon | 显示的图标 | String | — | — |
| actions | 动作按钮  | Array, [{ action: '', click: (id) => {} }] | — | — |
| color | 消息提示颜色 | String | — | — |
| textColor | 消息提示的文本颜色 | String | — | — |

<style>
.demo-button {
  margin: 6px 8px;
}
</style>

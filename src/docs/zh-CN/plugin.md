# 插件

Muse-UI 是一个 Vue UI 组件库，只提供 UI 组件，但是，在实际开发中，我们需要一些其它的功能，像是可以快捷调用的消息提示或者loading函数，或者扩展 Muse-UI 原本的主题。

目前我们提供 [muse-ui-plugin-template](https://github.com/museui/muse-ui-plugin-template) 用于创建一个新的 Muse-UI 插件。

## Muse-UI-Carbon-theme

[muse-ui-carbon-theme](https://github.com/museui/muse-ui-carbon-theme) 是一个扩展的主题，为了纪念的我的一个开源组件库 `vue-carbon`， 可以使用 npm package 的方式安装

```bash
npm install -S muse-ui-carbon-theme
// or
yarn add muse-ui-carbon-theme
```

```javascript
import { theme } from 'muse-ui'
import { carbon, createTheme } from '../src';

theme.add('carbon', carbon)
  .addCreateTheme(createTheme)
  .use('carbon');
```

## 插件列表

* [muse-ui-toast](https://github.com/museui/muse-ui-toast) 用于消息提示
* [muse-ui-message](https://github.com/museui/muse-ui-message) 用于美化系统默认的对话框
* [muse-ui-loading](https://github.com/museui/muse-ui-loading) 用于显示加载
* [muse-ui-progress](https://github.com/museui/muse-ui-progress) 用于页面加载进度

> 目前只拥有一些基础的插件，后续会开发初应对不同开发场景的插件。

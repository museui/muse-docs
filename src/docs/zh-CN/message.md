# Message 弹框

模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。

## 示例

:::demo
```html
<mu-container>
  <mu-button class="demo-button" color="primary" @click="alert()">Alert</mu-button>
  <mu-button class="demo-button" color="secondary" @click="confirm()">Confirm</mu-button>
  <mu-button class="demo-button" color="teal" @click="prompt()">Prompt</mu-button>
</mu-container>
<script>
export default {
  methods: {
    alert () {
      this.$alert('Hello World', '提示', {
        okLabel: '知道了'
      }).then(() => {
        this.$toast.message('提示信息');
      });
    },
    confirm () {
      this.$confirm('确定要删除？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$toast.message('点击了确定');
        } else {
          this.$toast.message('点击了取消');
        }
      });
    },
    prompt () {
      this.$prompt('请输入邮箱', '提示', {
        validator (value) {
          return {
            valid: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value),
            message: '请输入正确邮箱格式'
          }
        }
      }).then(({ result, value }) => {
        if (result) {
          this.$toast.message('你输入的邮箱：' + value);
        } else {
          this.$toast.message('点击了取消');
        }
      });
    }
  }
};
</script>
```
:::

## 安装与使用

```bash
npm install -S muse-ui-message
// or
yarn add muse-ui-message
```

```javascript

import 'muse-ui-message/dist/muse-ui-message.css';
import Vue from 'vue';
import Message from 'muse-ui-message';
Vue.use(Message);

new Vue({
  methods: {
    open () {
      this.$alert('Hello world', 'Alert');
      this.$confirm('Hello world ?', 'Confirm');
      this.$prompt('Input Some I', 'Prompt');
    }
  }
})

// or
Message.alert('Hello world', 'Alert');
Message.confirm('Hello world ?', 'Confirm');
Message.prompt('Input Some I', 'Prompt');
```

## API

### Config

`Vue.use(Message, config)` 或 `Message.config(options)` 更改默认的配置信息

```javascript
export default {
  successIcon: 'check_circle',                    // 成功图标
  infoIcon: 'info',                               // 信息图标
  warningIcon: 'priority_high',                   // 提醒图标
  errorIcon: 'warning',                           // 错误图标
  iconSize: 24,                                   // 图标大小
  width: 350,                                     // 对话框的宽度
  maxWidth: '80%',                                // 对话框最大宽度
  className: '',                                  // 对话框的样式
  okLabel: '确定',                                 // 对话框确定按钮文字
  cancelLabel: '取消',                             // 对话框取消按钮文字
  transition: 'scale'                             // 对话框显示的动画 'slide-left', 'slide-right', 'fade', 'scale'
};
```

* $alerts(content, title, options) 或 $alerts(content, options)
* $confirm(content, title, options) 或 $confirm(content, options)
* $prompt(content, title, options) 或 $prompt(content, options)

将会返回一个 Promise 对象，({ result, value })

result Boolean，true 点击了确认按钮， false 点击了取消按钮
value  输入框的值

## Options

| 名称 | 描述 | 类型 | 可选值 | 默认值 |
|------|-------------|------|-----------------|---------|
| title | 对话框标题 | String | — | — |
| content | 对话框的内容，可以是一个 render function  | String, Function | — | — |
| mode | 对话框的模式 | String | alert / confirm / prompt | alert |
| type | 对话框的类型 | String | success / info / error / warning | — |
| icon | 对话框的图标 | String | — | — |
| iconSize | 图标大小 | Number | — | 24 |
| width | 对话框的宽度 | Number / String | — | 350 |
| maxWidth | 最大宽度 | Number / String | — | 80% |
| className | 对话框的样式 | String | — | — |
| transition | 动画类型 | String | slide-top / slide-bottom / slide-left / slide-right / fade / scale | scale |
| beforeClose | 在对话框的关闭之前的回调函数  (result, instance, done) | Function | — | — |
| okLabel | 确认按钮文字 | String | — | — |
| cancelLabel | 取消按钮文字 | String | — | — |
| inputType | 输入框的类型 | String | — | — |
| inputPlaceholder | 输入框的提示文字 | String | — | — |
| inputValue | 输入框的默认值 | String | — | — |
| validator | 输入框验证函数 function (val), 会返回 { valid, message } | Function | — | — |

<script>
export default {
  methods: {
    alert () {
      this.$alert('Hello World', '提示', {
        okLabel: '知道了'
      }).then(() => {
        this.$toast.message('提示信息');
      });
    },
    confirm () {
      this.$confirm('确定要删除？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
          this.$toast.message('点击了确定');
        } else {
          this.$toast.message('点击了取消');
        }
      });
    },
    prompt () {
      this.$prompt('请输入邮箱', '提示', {
        validator (value) {
          return {
            valid: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value),
            message: '请输入正确邮箱格式'
          }
        }
      }).then(({ result, value }) => {
        if (result) {
          this.$toast.message('你输入的邮箱：' + value);
        } else {
          this.$toast.message('点击了取消');
        }
      });
    }
  }
};
</script>

<style>
.demo-button {
  margin: 6px 8px;
}
</style>

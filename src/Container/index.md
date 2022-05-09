---
nav:
  path: /components
group:
  title: 信息展示
  order: 8
toc: false
---

# Container 容器
通用卡片容器
## 何时使用
可承载文字、列表、图片、段落等，便于用户浏览内容

## 代码示例
### 基本使用
<code src='../../demo/pages/Container'></code>



## 属性

| 属性      | 类型   | 必填 | 默认值 | 说明       |
| --------- | ------ | ---- | ------ | ---------- |
| title     | string | 否   | -      | 标题       |
| image     | string | 否   | -      | 缩略图 url |
| icon      | string | 否   | -      | 右侧图标   |
| className | string | 否   | -      | 类名       |

## 事件

| 事件名    | 说明                   | 类型       |
| --------- | ---------------------- | ---------- |
| onIconTap | 点击右上角图标是的回调 | () => void |

## 插槽

| 插槽名称 | 说明                                                       |
| -------- | ---------------------------------------------------------- |
| title    | 组件标题插槽，当 title 属性存在时，插槽不生效 |

## 样式类

| 类名                       | 说明             |
| -------------------------- | ---------------- |
| amd-container              | 整体样式         |
| amd-container-header       | 标题栏整体样式   |
| amd-container-header-image | 标题栏图片样式   |
| amd-container-header-title | 标题栏标题样式   |
| amd-container-header-icon  | 标题栏 Icon 样式 |
| amd-container-content      | 内容样式         |

<style> 
table th:first-of-type { width: 180px; } 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:first-of-type th:nth-of-type(4)  {
    width: 50px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(2)  {
    width: 140px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(3)  {
    width: 30px
} 
.__dumi-default-layout-content article table:nth-of-type(2) th:nth-of-type(4)  {
    width: 50px
} 
</style> 
### 1. 语义化
HTML用标签规范文档，特点是语义化，比如看到了`a`标签表示这是个链接，`img`表示一个图像等。

标签：`<p></p>`用来创建元素，成对使用也有部分单标签，也称闭合标签，如`<br/>`

元素：`<span id="hi">hello, html</span>`元素是网页的一部分，包含标签、属性、文本内容三部分。
（属性，改变标签行为或提供元数据）

### 2. 常用标签
div、span、a、img、form、input、button、h1、p、ul、ol等等都是经常用到的，全部元素和语义说明参照MDN-[HTML Element](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)。

### 3. form标签
```html
<form action="/post" method="post">
    <label for="username">用户名</label>
    <input type="text" name="username" id="username" value="tom">
    <label for="password">密码</label>
    <input type="password" name="password" id="password" value="123123">
    <label for="remember">记住我</label>
    <input type="checkbox" name="remember" value="yes">
    <button type="submit">登录</button>
</form>
```
1. label表示某个元素说明，需将for属性与元素id设置一致
2. action：服务器处理资源路径，method：请求方法类型
3. input是表单重要组成，type属性表示类型，name和value会以key:value的形式包装为请求入参发送出去。（value在不同类型中表现不同，比如在text文本域中会显示为默认值等）
4. 在form中经常也会看到id这个属性，id在HTML中大致有两个作用，一是作为文档的锚点链接，二是id选择器。（在form提交表单交互中没有作用，表单最终发出去的是name和value。）

### 3. 元素分类

早期版本W3C对标签元素分为两类：[行内元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Inline_elements)和[块级元素](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Block-level_elements)，除了语义上的差异，还带有CSS表现区别，如行内元素在一行展示，而块级元素独占一行，行内元素上设置高度和宽度无效等。（HTML5对分类有了重新定义，参照[内容分类](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Content_categories)）。

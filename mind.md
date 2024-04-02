# 简单虚拟列表

## 具体实现

1. 为什么设置 padding-top
   - `溢出 = (内容高度 - 视窗高度)`
   - 当 `scrollTop = 溢出` ，滚动条的位置到底部，就无法下滑，也无法触发 scroll 事件
   - padding-top 可以撑开内容高度，防止到达底部
     **缺陷**
     由于`滚动条的位置 = (scrollTop - 溢出)/溢出 \* 滚动条高度 `，
     padding-top 初值为 0，后面增大，滚动条反映的位置不准确
2. 通过设置 height 撑开内容高度，并设置 padding-top 将展示的内容挤下来，来实现虚拟显示，注意 box-sizing: 'border-box';
   - 同理，也可以设置 padding-top & padding-bottom，值设置为隐藏项高度，但是相对不灵活，
     尤其是有缓冲 buffer 时，padding-bottom 为隐藏项高度，并不是 end 项之后的项高度之和
3. 为什么设置 buffer
   - 避免出现空白，衔接不流畅

## 性能优化

1. 减少 scroll 事件频繁触发

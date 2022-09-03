### 拖拽放置hooks
```js
import { useDrop } from '@/hooks'

useDrop(dom, {
    onDragEnter: () => console.log('拖拽【进入】节点'),
    onDragLeave: () => console.log('拖拽【离开】节点'),
    onDrop: () => console.log('元素放置了'),
    onDom: (data) => {
      console.log('获取放置的数据',data)
    },
  })
```
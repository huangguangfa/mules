### 拖拽hooks、一般配合drop使用

```js
import { useDrag, useDrop } from '@/hooks'

useDrag(data, dom, {
    onDragStart: () => {
      console.log('拖拽开始')
    },
    onDragEnd: () => {
      console.log('拖拽结束')
    },
  })
// data 携带的拖拽数据
// dom 需要拓展的元素
```
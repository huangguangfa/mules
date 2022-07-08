import { Component, Host, h, Prop, Event, EventEmitter, State, Watch, Method, Element } from '@stencil/core';

@Component({
  tag: 'my-button',   // 组件名称
  styleUrl: 'my-button.css', // 组件样式
  shadow: false,  // 是否开启沙盒模式
})
export class MyButton {
  /***** 生命周期 start ********* */
  // 初次加载
  connectedCallback(){
    console.log('[lifecycle 1] connectedCallback')
  }
  componentWillLoad() {
    console.log('[lifecycle 2] componentWillLoad')
  }
  componentWillRender() {
    console.log('[lifecycle 3] componentWillRender')
  }
  componentDidRender() {
    console.log('[lifecycle 6] componentDidRender')
  }
  componentDidLoad() {
    console.log('[lifecycle 7] componentDidLoad')
  }
  // 组件重新连接[类似移除后重新插入 connectedCallback() ]
  /*
    const el = document.createElement('my-cmp');
    此时由于 el 是新添加 所以会执行 组件初次加载 的逻辑
    document.body.appendChild(el);
    el.remove();
    // 此时由于 el 已经初始化一遍，再次添加到 body 只会执行 组件重新连接 的逻辑
    document.body.appendChild(el);
  */
    
  // 组件更新
  componentDidUpdate() {
    console.log('[lifecycle 组件更新] componentDidUpdate')
  }
  // 组件销毁
  disconnectedCallback(){
    console.log('[lifecycle] 组件销毁被执行')
  }

  /***** 生命周期 end *********** */

  /***** 获取整个组件元素 start ********* */
  @Element() el: HTMLElement;
  /***** 获取整个组件元素 end ********* */


  /***** 定义内部响应式 start ********* */
  @State() num: number = 0;
  handleNum() { this.num += 1}
  /***** 定义内部响应式 end *********** */



  /***** 监听内部num变化 start ********* */
  @Watch('num')
  watchPropHandler(newValue: number, oldValue: number) {
    console.log('num变化了', newValue, oldValue);
  }
  /***** 监听内部num变化 end*** ********* */
    



  /***** props定义接受一个text start ********* */
  @Prop() text: string  
  /***** props定义接受一个text end ********* */



  /***** 定义组件元素派发的事件 start ********* */
  @Event({
    eventName: 'on-click',  // 事件名称
    bubbles: true, // 是否支持冒泡
    cancelable: true, // 是否支持可取消
    composed: true, // 冒泡事件是否逃逸出当前的 shadowdom
  })
  displayOnClick: EventEmitter<{ data: { mes: string, el: HTMLElement } }>
  handClick(): void {
    this.displayOnClick.emit({
        data: {
          mes: '派发出来的消息',
          el: this.el
        }
    })
  }
  /***** 定义组件元素派发的事件 end ********* */

  

  /***** 定义外部通过节点调用内部的方法 start ********* */
  @Method()
  async showPrompt() {
    return {
      num: this.num,
      el: this.el
    }
  }
  /***** 定义外部通过节点调用内部的方法 end ********* */

  render() {
    console.log('[lifecycle 4] render')
    return (
      <Host>
        <div>
          <button onClick={ this.handClick.bind(this) }>往外部抛事件</button>
          {/* slot接收 */}
          <slot></slot>
          {/* 作用域插槽 */}
          <slot name='header'></slot>
          {/* 展示props值 */}
          <span>{this.text}</span> 
          <button onClick={ this.handleNum.bind(this)}>num+1</button>
        </div>
      </Host>
    );
  }

}

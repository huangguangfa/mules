import { 
    Component, 
    Host, 
    h, 
    Prop, 
    Element, 
    Method, 
    Event, 
    EventEmitter, 
    Listen ,
    State
} from '@stencil/core';

@Component({
    tag: 'sten-button',
    styleUrl: 'sten-button.css',
    shadow: true,
})

export class StenButton {
    /************************
     *      装饰器 Start     *
     *  ********************/
    @Prop() name: string;
    @State() num: number = 1;
    @Element() el: HTMLElement
    @Method()
    async show():Promise<void>{
        console.log('sten-botton')
    }
    @Event({
        eventName: 'stenButton-show', // 事件名称
        composed: true, // 冒泡事件是否逃逸出当前的 shadowdom
        cancelable: true, // 事件是否可以被取消
        bubbles: true, // 事件是否冒泡到父级
    })
    displayShow:EventEmitter<{ name:string }>
    @Listen("scroll", { target:"window" })
    handleScroll(ev){
        console.log(ev)
    }
    /************************
     *      装饰器 End       *
     ***********************/


    /***********************************
    *      生命周期(lifecycle) Start     *
    ************************************/
    componentShouldUpdate(newValue, oldValue):boolean{
        console.log('update',newValue, oldValue)
        if(newValue === 5) return true;  //控制什么时候更新
        return false  // 不要更新页面
    }
    componentWillLoad(){
        console.log('laod')
    }

    /***********************************
    *      生命周期(lifecycle) End      *
    ************************************/

    Fn():void{
        this.displayShow.emit({
            name:"StenButton-content"
        })
    }
    add():void{
        this.num += 1
    }
    render() {
        return (
            <Host>
                <button class="sten-button" onClick={() => this.Fn()}>
                    <slot></slot>
                </button>

                <button  onClick={() => this.add()}>
                    sten-button ADD ({this.num})
                </button>
                {this.name}
            </Host>
        );
    }
}

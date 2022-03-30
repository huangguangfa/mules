import { Component, Host, h, Prop, Element, Method, Event, EventEmitter,  } from '@stencil/core';

@Component({
    tag: 'sten-button',
    styleUrl: 'sten-button.css',
    shadow: true,
})

export class StenButton {
    @Prop() name: string;
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


    Fn: Function = () => {
        this.displayShow.emit({
            name:"StenButton-content"
        })
    }
    render() {
        return (
            <Host>
                <button class="sten-button" onClick={() => this.Fn()}>
                    <slot></slot>
                </button>
                {this.name}
            </Host>
        );
    }
}

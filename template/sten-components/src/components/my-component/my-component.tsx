import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() name: string;

  private getText(): string {
    return `my name ${this.name} `
  }

  render() {
    return <div>Hello, World! I'm {this.getText()}</div>;
  }
}

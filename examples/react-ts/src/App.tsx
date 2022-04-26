import React, { useState, useEffect } from 'react';
import './App.css';

interface buttons extends HTMLElement {
  _internal?: any
}

function App() {
  const [button, setButton] = useState<{ color: string, disabled: boolean }>({ color: "primary", disabled: false })
  const buttonChange = () => {
    const { color } = button;
    setButton({
      ...button,
      color: color === "success" ? "primary" : "success"
    })
    buttons && buttons._internal()
  }
  const [buttons, setButtons] = useState<null | buttons>(null);

  useEffect(() => {
    buttons?.addEventListener("on-click", (e) => {
      console.log('%c 「react」接收组件内部抛出事件', 'color:#67C23A', e)
    })
  })
  return (
    <div className="App">
      <header className="App-header">
        <h1>react 跨框架UI库测试</h1>
        <gf-button>普通按钮</gf-button>
        <gf-button ref={el => setButtons(el)} color={button.color} onClick={buttonChange} style={{ marginLeft: "10px" }}>普通按钮
        </gf-button>
        <gf-button color="success" style={{ marginLeft: "10px" }}>成功按钮</gf-button>
        <gf-button color="#cc9999" style={{ marginLeft: "10px" }}>自定义颜色</gf-button>
      </header>
    </div>
  );
}

export default App;
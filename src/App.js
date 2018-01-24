import React, { Component } from 'react';
import BasicLayout from './BasicLayout';
import _ from "lodash";

const settingStyle = {
  position: 'fixed',
  left: 0,
  backgroundColor: '#aaa',
  width: '100%',
  height: '180px',
  zIndex: 999
}

const openStyle = {
  bottom: 0,
  transition: 'bottom 0.5s'
}

const closeStyle = {
  bottom: '-180px',
  transition: 'bottom 0.5s'
}

class App extends Component {
  constructor() {
    super()
    const layout = this.generateLayout();
    this.state = {
      open: false,
      data: [
        {
          i: '0',
          moduleName: 'Image',
          src: 'http://via.placeholder.com/350x150',
        },
        {
          i: '1',
          moduleName: 'Text',
          content: 'Hello World!!',
        },
        {
          i: '2',
          moduleName: 'Image',
          src: 'http://via.placeholder.com/350x150',
        },
        {
          i: '3',
          moduleName: 'Text',
          content: 'Hello World!!',
        }
      ],
      layout
    }
  }

  generateLayout() {
    return [
      { i: "0", w: 12, h: 3, x: 0, y: 0 },
      { i: "1", w: 12, h: 2, x: 0, y: 3 },
      { i: "2", w: 12, h: 2, x: 0, y: 5 },
      { i: "3", w: 12, h: 2, x: 0, y: 7 }
    ]
  }

  handleSetting = (i) => {
    console.log('handleSetting', i)
    this.setState({open: true, i})
  }
  onLayoutChange = (layout) => {
    console.log(layout)
  }
  render() {
    return (
      <div className="App" style={{}}>
        <BasicLayout
          layout={this.state.layout}
          data={this.state.data}
          onLayoutChange={this.onLayoutChange}
          handleSetting={this.handleSetting}
        />
        <div style={{...settingStyle, ...this.state.open ? openStyle : closeStyle}}>
          {`setting area - ${this.state.i}`}<button onClick={()=>{this.setState({open: false})}}>{`x`}</button>
        </div>
      </div>
    );
  }
}

export default App;

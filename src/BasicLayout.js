import React from "react";
import _ from "lodash";
import Radium from 'radium';
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);


export default class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    isDraggable: true,
    isResizable: true,
    items: 2,
    rowHeight: 30,
    onLayoutChange: function() {},
    cols: 12,
  };

  constructor(props) {
    super(props);
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  component = {
    Image,
    Text,
  }

  getContent = (data) => {
    console.log(data.moduleName)
    const Comp = this.component[data.moduleName]
    return <Comp src={data.src} content={data.content}/>
  }

  render() {
    return (
      <ReactGridLayout
        layout={this.props.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.props.layout.map((item, i) => (
          <div key={i} style={{
            backgroundColor: '#eee',
          }}>
            {this.getContent(this.props.data[i])}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                backgroundColor: '#eee'
              }}
              onClick={()=>{
                this.props.handleSetting(this.props.data[i])
              }}
            >{'setting'}</div>
          </div>
        ))}
      </ReactGridLayout>
    );
  }
}


const Image = ({src}) => (<img draggable={'false'} style={{}} src={src} width={'100%'} height={'100%'}/>)
const Text = ({content}) => <p>{content}</p>
import React from 'react';
import { ChromePicker } from 'react-color';

class ColorOptions extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      colorIndex: 1,
      showColorPicker: false,
      color: ''
    }
  }

  showColorPicker = (color, index) => {
    this.setState({showColorPicker: true, color: color, colorIndex: index});
  }

  closeColorPicker = () => {
    this.setState({showColorPicker: false});
  }

  changeColor = (color) => {
    let { toggleChangeColor } = this.props;
    this.setState({color: color.hex});
    toggleChangeColor(color.hex, this.state.colorIndex);
  }

  render() {
    let { colorOne, colorTwo } = this.props;

    return (
      <div>
        <div className="colorPicker"
           style={{backgroundColor: colorOne}}
           onClick={(_) => this.showColorPicker(colorOne, 1)}/>
        <div className="colorPicker"
           style={{backgroundColor: colorTwo}}
           onClick={(_) => this.showColorPicker(colorTwo, 2)}/>
        {this.state.showColorPicker ?
          <div className="popover">
            <div className="cover" onClick={(_) => this.closeColorPicker()}/>
            <ChromePicker color={this.state.color}
                          onChange={this.changeColor}/>
          </div> : null }
    </div>);
  }
}

export default ColorOptions;

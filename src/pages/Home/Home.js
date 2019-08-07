import React from 'react';
import Menu from './../../components/Menu/Menu';
import constants from '../../helpers';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gradientType: constants.GRADIENT_TYPE.LINEAR,
      gradientDirection: constants.GRADIENT_DIRECTION.LINEAR.TOP,
      gradientColorOne: "#FF5C5A",
      gradientColorTwo: "#F8D353",
      gradient: {
        backgroundImage: "linear-gradient(#F8D353, #FF5C5A)"
      }
    }
  }

  toggleChangeColor = (color, index) => {
    if (index === 1) {
      this.setState({gradientColorOne: color}, () => {this.createGradient()});
    } 
    if (index === 2) {
      this.setState({gradientColorTwo: color}, () => {this.createGradient()});
    }
  }

  toggleChangeGradient = (attribute) => {
    this.setState(attribute, () => {this.createGradient()});
  }

  createGradient = () => {
    let gradient = `${this.state.gradientType}(${this.state.gradientDirection}, ${this.state.gradientColorOne}, ${this.state.gradientColorTwo})`;
    this.setState({gradient: {backgroundImage: gradient}});
  }

  render() {
    return (
      <div className="container">
        <Menu className="menu"
              gradient={`background-image: ${this.state.gradient.backgroundImage};`}
              gradientType={this.state.gradientType}
              gradientDirection={this.state.gradientDirection}
              gradientColorOne={this.state.gradientColorOne}
              gradientColorTwo={this.state.gradientColorTwo}
              toggleChangeColor={this.toggleChangeColor}
              toggleChangeGradient={this.toggleChangeGradient}/>
        <div className="gradient" style={this.state.gradient}></div>
      </div>
    );
  }
}

export default Home;

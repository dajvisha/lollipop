import React from 'react';
import Menu from './../../components/Menu';
import constants from '../../helpers';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gradientType: constants.GRADIENT_TYPE.LINEAR,
      gradientDirection: "",
      gradientColorOne: "",
      gradientColorTwo: "",
      gradient: {
        backgroundImage: "linear-gradient(#F8D353, #FF5C5A)"
      }
    }
  }

  toggleChangeGradient = (attribute) => {
    this.setState(state => (attribute));
    this.createGradient();
  }

  createGradient = () => {
    let gradient = `${this.state.gradientType}(#F8D353, #FF5C5A)`;
    this.setState(state => ({gradient: {backgroundImage: gradient}}))
  }

  render() {
    return (
      <div style={this.state.gradient}>
        <Menu toggleChangeGradient={this.toggleChangeGradient} gradientType={this.state.gradientType} />
      </div>
    );
  }
}

export default Home;

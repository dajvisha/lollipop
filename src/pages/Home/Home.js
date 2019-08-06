import React from 'react';
import Menu from './../../components/Menu';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gradientType: "",
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
  }

  render() {
    return (
      <div style={this.state.gradient}>
        <Menu toggleChangeGradient={this.toggleChangeGradient}/>
      </div>
    );
  }
}

export default Home;

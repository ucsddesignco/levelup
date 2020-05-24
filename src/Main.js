import React from 'react';
import Nav from './Nav';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  componentDidMount() {
    document.addEventListener("mousemove", this.handleGradient);
  }

  handleGradient = e => {
    this.setState({
      x: e.clientX - 400,
      y: e.clientY - 400
    });

    let gradient = document.getElementById("gradient");
    gradient.style.setProperty('--x', this.state.x + 'px');
    gradient.style.setProperty('--y', this.state.y + 'px');
  }

  render() {
    return (
      <div>
        <div className="sideBar">
          <p>Summer 2020</p>
          <img src={require("./images/secondary-logo.svg")} alt="Logo"></img>
          <p>Level Up</p>
        </div>

        <div id="gradient"></div>

        <div className="landing">
          <h1>
            <div id="ellipse">
              Level Up
            </div> 

            connects <span>motivated</span> design students with
            <span> industry </span> professionals to develop 
            <span> innovative </span> solutions for <span> real-world </span> 
            challenges.
          </h1>

          <Nav />
        </div>
      </div>
    )
  }
}

export default Main;
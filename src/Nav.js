import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navPosition: "translateY(80%)"
    }
  }

  handleNav = () => {
    this.setState(state => ({
      navPosition: state.navPosition == "translateY(80%)" ? "translateY(-10%)" : "translateY(80%)"
    }));
  }

  render() {
    return (
      <div className="nav" style={{ transform: `${this.state.navPosition}` }}>
        <div className="navHeader">
          <h3>Website Content</h3>
          <img 
            id="minimizeBtn"
            onClick={this.handleNav} 
            src={require("./images/maximize.png")} alt="maximize" 
          />
        </div>
        
        <div id="x"><a href="">About</a></div>
        <div><a href="">Who is it for?</a></div>
        <div><a href="">You will be...</a></div>
        <div><a href="">What you can bring to the table...</a></div>
        <div><a href="">Industry People</a></div>
      </div>
    )
  }
}

export default Nav;
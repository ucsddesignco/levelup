import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimized: true,
      navPosition: "translateY(80%)"
    }
  }

  handleNav = () => {
    this.setState(state => ({
      navPosition: state.navPosition == "translateY(80%)" ? "translateY(-10%)" : "translateY(80%)",
      minimized: !state.minimized
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
            src={require(this.state.minimized ? "../images/maximize.png" : "../images/minimize.png")} 
            alt="maximize" 
          />
        </div>
        
        <div className="gradient"><a href="#about">About</a></div>
        <div><a href="#who">Who is it for?</a></div>
        <div><a href="#responsibility">You will be...</a></div>
        <div><a href="">What you can bring to the table...</a></div>
        <div><a href="#thankYou">Industry People</a></div>
      </div>
    )
  }
}

export default Nav;
import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minimized: true,
      activeIndex: 0,
      navPosition: "translateY(75%)"
    }
    this.handleTabs = this.handleTabs.bind(this);
  }

  minimizeNav = () => {
    this.setState(state => ({
      navPosition: state.navPosition === "translateY(75%)" ? "translateY(-10%)" : "translateY(75%)",
      minimized: !state.minimized
    }));
  }

  handleTabs = index => {
    this.setState(state => ({
      activeIndex: index
    }));
  }

  render() {
    return (
      <div className="nav" style={{ transform: `${this.state.navPosition}` }}>
        
        <div className="navHeader">
          <h3>Website Content</h3>
          <img 
            id="minimizeBtn"
            onClick={this.minimizeNav} 
            src={require(this.state.minimized ? "../images/maximize.png" : "../images/minimize.png")} 
            alt="maximize" 
          />
        </div>
        
        <div className="gradient gradientTransition">
          <span>About</span>
          <a 
            href="#about" 
            onClick={() => this.handleTabs(0)}
            className={ this.state.activeIndex === 0 ? "active" : "" }
          >&nbsp;</a>
        </div>

        <div className="gradient gradientTransition">
          <span>Who is it for?</span>
          <a 
            href="#who" 
            onClick={() => this.handleTabs(1)}
            className={ this.state.activeIndex === 1 ? "active" : "" }
          >&nbsp;</a>
        </div>

        <div className="gradient gradientTransition">
          <span>You will be...</span>
          <a 
            href="#responsibility" 
            onClick={() => this.handleTabs(2)}
            className={ this.state.activeIndex === 2 ? "active" : "" }
          >&nbsp;</a>
        </div>

        <div className="gradient gradientTransition">
          <span>What you'll get out of it...</span>
          <a 
            href="#outcome" 
            onClick={() => this.handleTabs(3)}
            className={ this.state.activeIndex === 3 ? "active" : "" }
          >&nbsp;</a>
        </div>

        <div className="gradient gradientTransition">
          <span>Industry People</span>
          <a 
            href="#thankYou" 
            onClick={() => this.handleTabs(4)}
            className={ this.state.activeIndex === 4 ? "active" : "" }
          >&nbsp;</a>
        </div>

      </div>
    )
  }
}

export default Nav;
import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <div id="nav" className="nav" style={{ transform: `${this.props.navPosition}` }}>
        
        <div className="navHeader">
          <h3>Website Content</h3>
          <img 
            id="minimizeBtn"
            onClick={() => this.props.minimizeNav()} 
            src={require(this.props.minimized ? "../images/maximize.png" : "../images/minimize.png")} 
            alt="maximize" 
          />
        </div>
        
        <div className="gradient gradientTransition">
          <span>About</span>
          <a 
            href="#about" 
            onClick={() => this.props.setActiveIndex(0)}
            className={ this.props.activeIndex === 0 ? "active" : "" }
          >&nbsp;</a>
        </div>

        <div className="gradient gradientTransition">
          <span>Who is it for?</span>
          <a 
            href="#who" 
            onClick={() => this.props.setActiveIndex(1)}
            className={ this.props.activeIndex === 1 ? "active" : "" }
          >&nbsp;</a>
        </div>

        <div className="gradient gradientTransition">
          <span>You will be...</span>
          <a 
            href="#responsibility" 
            onClick={() => this.props.setActiveIndex(2)}
            className={ this.props.activeIndex === 2 ? "active" : "" }
          >&nbsp;</a>
        </div>

        <div className="gradient gradientTransition">
          <span>What you'll get out of it...</span>
          <a 
            href="#outcome" 
            onClick={() => this.props.setActiveIndex(3)}
            className={ this.props.activeIndex === 3 ? "active" : "" }
          >&nbsp;</a>
        </div>

        <div className="gradient gradientTransition">
          <span>FAQ</span>
          <a 
            href="#faq" 
            onClick={() => this.props.setActiveIndex(4)}
            className={ this.props.activeIndex === 4 ? "active" : "" }
          >&nbsp;</a>
        </div>

      </div>
    )
  }
}

export default Nav;
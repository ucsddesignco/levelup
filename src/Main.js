import React from 'react';
import Nav from './components/Nav';
import QA from './components/QA';
import { spacer2, spacer3 } from './constants';
import ReactTestUtils from 'react-dom/test-utils';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      mobile: false,
      activeIndex: null,
      minimized: true,
      navPosition: "translateY(75%)",
    };
  }

  componentDidMount = () => {
    document.addEventListener("mousemove", this.handleGradient);
    window.addEventListener('scroll', this.handleScroll, true);
    window.addEventListener('resize', this.getElementHeights, true);
    this.getElementHeights();
  }

  componentWillUnmount = () => {
    document.removeEventListener("mousemove", this.handleGradient);
    window.removeEventListener('scroll', this.handleScroll, true);
    window.removeEventListener('resize', this.getElementHeights, true);
  }

  getElementHeights = () => {
    // Determine if viewing on mobile
    this.setState({
      mobile: window.innerWidth <= 576
    }, () => {
      if (this.state.mobile) {
        document.removeEventListener("mousemove", this.handleGradient);

        // hide nav
        let gradient = document.getElementsByClassName("gradient");
        for (let i = 0; i < gradient.length; i++) {
          gradient[i].style.opacity = "0";
        }

        // send nav to back
        document.getElementById("nav").style.zIndex = "0";
      } else {
        // close hamburger menu
        if (document.getElementById("hamburger").classList.contains("is-active")) {
          ReactTestUtils.Simulate.click(document.getElementById("hamburger"));
        }

        // add gradient mouse
        document.addEventListener("mousemove", this.handleGradient);

        // show nav
        let gradient = document.getElementsByClassName("gradient");
        for (let i = 0; i < gradient.length; i++) {
          gradient[i].style.opacity = "100";
        }

        // send nav to front
        document.getElementById("nav").style.zIndex = "3";
      }
    });

    this.landing = this.landingEl.clientHeight;
    // this.overview = this.overviewEl.clientHeight;
    this.about = this.aboutEl.clientHeight;
    this.apply = this.applyEl.clientHeight;
    // this.who = this.whoEl.clientHeight;
    // this.responsibility = this.responsibilityEl.clientHeight;
    // this.outcome = this.outcomeEl.clientHeight;
    // this.faq = this.faqEl.clientHeight;
    this.thankYou = this.thankYouEl.clientHeight;

    let windowHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty (
      "--windowHeight",
      `${windowHeight * 100}px`
    );

    // Calculate height
    var D = document;
    this.total_height = Math.max(
      Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
      Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
      Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    )
  }

  setActiveIndex = index => {
    this.setState({
      activeIndex: index
    }, () => {
      if (index !== null || document.getElementById("hamburger").classList.contains("is-active")) {
        ReactTestUtils.Simulate.click(document.getElementById("hamburger"));
      }
    });
  }

  setNavPosition = y => {
    this.setState({
      navPosition: y
    })
  }

  handleScroll = () => {
    // at landing or about
    if (window.scrollY >= this.landing + this.overview) {
      this.setState({
        activeIndex: 0
      })
    } else {
      this.setState({
        activeIndex: null
      })
    }
    
    // At who
    if (window.scrollY >= this.landing + this.overview + this.about + this.apply) {
      this.setState({
        activeIndex: 1
      })
    }

    // At responsibility
    if (window.scrollY >= this.landing + this.overview + this.about + (2 * this.apply) + this.who) {
      this.setState({
        activeIndex: 2
      })
    }

    // At outcome
    if (window.scrollY >= this.landing + this.overview + this.about + (3 * this.apply)  + this.who + this.responsibility) {
      this.setState({
        activeIndex: 3
      })

      if (window.innerWidth < 1100) {
        this.setNavPosition("translateY(100%)");  
      }
    } else {
      this.setNavPosition(this.state.minimized ? "translateY(75%)" : "translateY(-10%)");
    }

    // At FAQ
    if (window.scrollY >= this.landing + this.overview + this.about + (4 * this.apply) + this.who + this.responsibility + this.outcome) {
      this.setState({
        activeIndex: 4
      })
    }

    // Nav box leaves view
    if (window.pageYOffset + window.innerHeight >= this.total_height) {
      this.setNavPosition("translateY(100%)");
    } else {
      if (window.innerWidth >= 1100) {
        this.setNavPosition(this.state.minimized ? "translateY(75%)" : "translateY(-10%)");
      }
    } 
  }

  minimizeNav = () => {
    this.setState(state => ({
      navPosition: state.navPosition === "translateY(75%)" ? "translateY(-10%)" : "translateY(75%)",
      minimized: !state.minimized
    }));
  }

  handleGradient = e => {
    this.setState({
      x: e.clientX - 400,
      y: e.clientY - 400
    });

    let gradientCircle = document.getElementById("gradientCircle");
    gradientCircle.style.setProperty('--x', this.state.x + 'px');
    gradientCircle.style.setProperty('--y', this.state.y + 'px');
  }

  render() {
    return (
      <div>
        <h1 id="levelupHeader" className="hidden">Level Up</h1>

        <div className="sidebar">
          <p id="summer2020">Summer 2020</p>
          <a href="#landing" onClick={() => this.setActiveIndex(null)}>
            <img src={require("./images/secondary-logo.svg")} alt="Logo" />
          </a>
          <p id="levelup">Level Up</p>
        </div>

        <div id="gradientCircle"></div>

        <Nav 
          mobile = {this.state.mobile}
          activeIndex = {this.state.activeIndex} 
          setActiveIndex = {this.setActiveIndex} 
          minimized = {this.state.minimized}
          navPosition = {this.state.navPosition}
          minimizeNav = {this.minimizeNav}
        />

        <div id="container" className="container">
          <div id="landing" className="landing" ref={(landingEl) => {this.landingEl = landingEl}}>
            <h1>
              <img 
                className="landingEllipse" 
                src={require("./images/ellipse-black.svg")} 
                alt="" 
              />
              Level Up challenges <span>motivated</span> design students to
              develop <span> innovative </span> solutions to 
              <span> real-world </span> problems with the guidance of 
              <span> industry </span> mentors.
            </h1>
          </div>
          <span id="about"></span>
          <div className="about" ref={(aboutEl) => {this.aboutEl = aboutEl}}>
            <h2 style={{ marginBottom: spacer3 }}>What is Level Up?</h2>

            <div className="aboutDetails">
              <div>
                <div>
                  <p>
                    Level Up is a 10-week design program that provides students 
                    with the opportunity to tackle a real-world challenge and 
                    network with experienced industry professionals. 
                    Participants will work in teams of four to produce a 
                    website showcase of project deliverables with the guidance 
                    of industry mentors.
                  </p>
                </div>
              </div>

              <img src={require("./images/about.svg")} alt="" />
            </div>
          </div>

          <div className="gradient gradientTransition" ref={(applyEl) => {this.applyEl = applyEl}}>
            <span></span>
          </div>

        {/* Showcase Section */}


        {/* Meet The Level Uppers */}
        <div id="meetTitle" className="meetTitle" ref={(thankYouEl) => {this.thankYouEl = thankYouEl}}>
            <div className="meetTitle">
              <h2>Meet the Level Uppers</h2>
            </div>
          </div>


        {/* Team Photos */}


          <div id="thankYou" className="thankYou" ref={(thankYouEl) => {this.thankYouEl = thankYouEl}}>
            <div className="overviewTitle">
              <h2>Thank you</h2>
            </div>

            <div className="overviewArrow">
              <ul>
                <li>
                  <img src={require("./images/overview-arrow.svg")} alt="" />
                </li>
              </ul>
            </div>

            <div className="overviewDetails">
              <ul>
                <li>
                  <p>To our industry mentors for supporting Level Up!</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer gradient">
            <p className="signature">
              <span>
                Made with
                <img src={require("./images/heart.svg")} alt="Love" />
              </span>
              <img src={require("./images/designco-ellipse.svg")} alt="Design Co" />
            </p>
            
            <a 
              id="email" 
              href="mailto:hello@ucsddesign.co">hello@ucsddesign.co
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
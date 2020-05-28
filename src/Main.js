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
      navPosition: "translateY(75%)"
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
      } else {
        document.addEventListener("mousemove", this.handleGradient);
      }

      if (this.state.activeIndex !== null || document.getElementById("hamburger").classList.contains("is-active")) {
        ReactTestUtils.Simulate.click(document.getElementById("hamburger"));
      }
    });

    this.landing = this.landingEl.clientHeight;
    this.overview = this.overviewEl.clientHeight;
    this.about = this.aboutEl.clientHeight;
    this.apply = this.applyEl.clientHeight;
    this.who = this.whoEl.clientHeight;
    this.responsibility = this.responsibilityEl.clientHeight;
    this.outcome = this.outcomeEl.clientHeight;
    this.faq = this.faqEl.clientHeight;
    this.thankYou = this.thankYouEl.clientHeight;

    let windowHeight = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(
      "--windowHeight",
      `${windowHeight * 100}px`
    );
  }

  setActiveIndex = index => {
    this.setState({
      activeIndex: index
    }, () => {
      if (index !== null || document.getElementById("hamburger").classList.contains("is-active")) {
        ReactTestUtils.Simulate.click(document.getElementById("hamburger"));
      }
        
      setTimeout(() => {
        if (this.state.mobile) {
          window.scrollBy(0, -16 * 0.01 * window.innerWidth);
        }
      }, 1000);
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
    
    // at who
    if (window.scrollY >= this.landing + this.overview + this.about + this.apply) {
      this.setState({
        activeIndex: 1
      })
    }

    // at responsibility
    if (window.scrollY >= this.landing + this.overview + this.about + (2 * this.apply) + this.who) {
      this.setState({
        activeIndex: 2
      })
    }

    // at outcome
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

    // at FAQ
    if (window.scrollY >= this.landing + this.overview + this.about + (4 * this.apply) + this.who + this.responsibility + this.outcome) {
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
            
            <div id="apply">
              <span>
                <a href="https://forms.gle/rvmpX2UdSfrCdQD99">
                  Apply Now!
                  <img src={require("./images/apply-arrow.svg")} alt="" />
                  </a>
              </span>
            </div>
          </div>

          <div className="overview" ref={(overviewEl) => {this.overviewEl = overviewEl}}>
            <div className="overviewTitle">
              <h2>The Overview</h2>
            </div>

            <div className="overviewArrow">
              <ul>
                <li>
                  <img src={require("./images/overview-arrow.svg")} alt="" />
                </li>
                <li>
                  <img src={require("./images/overview-arrow.svg")} alt="" />
                </li>
                <li>
                  <img src={require("./images/overview-arrow.svg")} alt="" />
                </li>
                <li>
                  <img src={require("./images/overview-arrow.svg")} alt="" />
                </li>
              </ul>
            </div>

            <div className="overviewDetails">
              <ul>
                <li>
                  <p>June 29 to September 4, 2020</p>
                </li>
                <li>
                  <p>12 to 15 hour commitment per week</p>
                </li>
                <li>
                  <p>Tackle a real-world challenge</p>
                </li>
                <li>
                  <p>Network with industry professionals</p>
                </li>
              </ul>
            </div>
          </div>

          <div id="about" className="about" ref={(aboutEl) => {this.aboutEl = aboutEl}}>
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
            <span>
              Seriously, go apply!
              <img src={require("./images/apply-arrow.svg")} alt="" />
            </span>
            <a className="apply" href="https://forms.gle/rvmpX2UdSfrCdQD99">Seriously, go apply!</a>
          </div>


          <div id="who" className="who" ref={(whoEl) => {this.whoEl = whoEl}}>
            <h2 style={{ marginBottom: spacer3 }}>Who is it for?</h2>

            <img className="hidden" src={require("./images/overview-arrow.svg")} alt="&nbsp;"/>

            <div>
              <p style={{ marginBottom: spacer2 }}>
                Level Up is open to all UC San Diego undergraduate students 
                who want to strengthen their design skills and work with a team 
                on a 10-week project. 
              </p>
              <p>
                This program isn't intended to teach students design 
                fundamentals or tools, but rather targeted toward those who do 
                not have a summer internship and are ready to take the next 
                step in their design journey. We're looking for dedicated 
                individuals eager to jump into a high-level commitment over the 
                summer.
              </p>
            </div>
          </div>

          <div className="gradient gradientTransition">
            <span>
              Sound like you? Apply now!
              <img src={require("./images/apply-arrow.svg")} alt="" />
            </span>
            <a className="apply" href="https://forms.gle/rvmpX2UdSfrCdQD99">Sound like you? Apply now!</a>
          </div>

          <div id="responsibility" className="responsibility" ref={(responsibilityEl) => {this.responsibilityEl = responsibilityEl}}>
            <div className="header">
              <h2>
                <img 
                  className="responsibilityEllipse" 
                  src={require("./images/ellipse-white.svg")} 
                  alt="&nbsp;" 
                />
                You will be
              </h2>
            </div>

            <div className="one">
              <p className="counter"></p>
              <p>
                Working in an established role within a team of four students 
                on a design project (Roles include UX Researcher, UX Designer, Visual 
                Designer, UX Engineer, Content Strategist)
              </p>
            </div>

            <div className="two">
              <p className="counter"></p>
              <p>
                Working through the entire design process, from needfinding to 
                usability testing
              </p>
            </div>

            <div className="three">
              <p className="counter"></p>
              <p>
                Meeting up in Zoom calls to have group discussions and 
                weekly updates
              </p>
            </div>

            <div className="four">
              <p className="counter"></p>
              <p>
                Meeting weekly with an industry mentor to go over project milestones
              </p>
            </div>
          </div>

          <div className="gradient gradientTransition">
            <span>
              What are you waiting for? Go apply!
              <img src={require("./images/apply-arrow.svg")} alt="" />
            </span>
            <a className="apply" href="https://forms.gle/rvmpX2UdSfrCdQD99">What are you waiting for? Go apply!</a>
          </div>

          <div id="outcome" className="outcome" ref={(outcomeEl) => {this.outcomeEl = outcomeEl}}>
            <div>
              <h2 style={{ marginBottom: spacer3 }}>What you'll get out of it</h2>
              
              <img className="hidden" src={require("./images/star.svg")} alt="&nbsp;"/>
              <p className="hidden">
                By participating in our program, you'll get a small taste of 
                the corporate experience through working in a cross-functional 
                team.
              </p>

              <ul>
                <li>
                  Partaking in a structured program with defined responsibilities
                </li>
                <li>
                  Receiving mentorship from experienced industry professionals
                </li>
                <li>
                  Attending biweekly talks by industry leaders from various fields
                </li>
                <li>
                  Finishing the program with a high-quality case study to put on your portfolio
                </li>
              </ul>
            </div>

            <div>
              <img src={require("./images/star.svg")} alt="" />

              <p>
                <img src={require("./images/overview-arrow.svg")} alt="" />
                By participating in our program, you'll get a small taste of 
                the corporate experience through working in a cross-functional 
                team.
              </p>
            </div>
          </div>

          <div className="gradient gradientTransition">
            <span>
              Ready to apply?
              <img src={require("./images/apply-arrow.svg")} alt="" />
            </span>
            <a className="apply" href="https://forms.gle/rvmpX2UdSfrCdQD99">Ready to apply?</a>
          </div>

          <div id="faq" className="faq" ref={(faqEl) => {this.faqEl = faqEl}}>
            <h2 style={{ marginBottom: spacer3 }}>FAQ</h2>

            <div className="faqDetails">
              <div>
                <QA
                  question="How is Level Up different from doing a personal project?"
                  answer="Our program is different from a personal project because participants will have the chance to work in an established role within a team, be mentored throughout the entire design process, and attend talks by industry leaders from various fields."
                />
                <QA
                  question="What kind of projects will I be working on?"
                  answer="Participants will work on projects that have real impact. They can choose to tackle one of the four problem spaces: design for the voter experience, design for small business recovery, design for low income communities, and design for remote education."
                />
                <QA
                  question="What does mentorship from an industry partner look like?"
                  answer="Each team will be assigned two mentors who are well versed in industry. The mentors will alternate meeting with the teams each week to check-in and discuss project milestones. You’ll be able to depend on your mentor for informal advice, critique sessions, design direction, and guidance to make sure your project is developing in the right direction."
                />
                <QA
                  question="How will the industry-led talks be run?"
                  answer="The industry talks will be open to the public, and each talk will have a core focus on one of the following topics: Collaboration, Storytelling, Critiquing, or Building Connections. There will be a different industry leader speaking at each talk, and Level Up participants will have an exclusive 15-minute Q&A session with the speaker."
                />
              </div>

              <div></div>

              <div>
                <QA
                  question="How will teams be formed?"
                  answer="Teams will be assigned based on the applicant’s strengths and preferred roles. In our application, you’ll be listing the roles that you’re interested in, which includes UX Researcher, UX Designer, Visual Designer, UX Engineer, and Content Strategist. There’s also a portion of the application where you’ll have a chance to list students you want to work with. We’ll try our best to balance mutual preference, though this is not guaranteed."
                />
                <QA
                  question="Can I add this to my portfolio and/or resume?"
                  answer="Definitely! At the end of the program, participants will have a high-quality project deliverable that they can add as a case study to their resume and portfolio."
                />
                <QA
                  question="Should I apply if I don't have much design experience?"
                  answer="We’re looking for students who already have some design background, which can include design classes, design projects, design sprints, internships, and other related experience. Our program is not intended to teach students design fundamentals or tools, but rather for students who have some skills under their belt and want to apply them to a team project over the summer."
                />
                <QA
                  question="Can I apply if I have an internship this summer?"
                  answer="Our program is targeted toward students who do not have a summer internship and are ready to take the next step in their design journey."
                />
              </div>
            </div>
          </div>

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
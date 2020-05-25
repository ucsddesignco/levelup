import React from 'react';
import Nav from './components/Nav';
import QA from './components/QA';
import { spacer2, spacer3 } from './constants';

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
          <img src={require("./images/secondary-logo.svg")} alt="Logo" />
          <p>Level Up</p>
        </div>

        <div id="gradient"></div>

        <div className="container">
          <div className="landing">
            <h1>
              <img 
                className="landingEllipse" 
                src={require("./images/ellipse-black.svg")} 
                alt="Ellipse" 
              />
              Level Up connects <span>motivated</span> design students with
              <span> industry </span> professionals to develop 
              <span> innovative </span> solutions for <span> real-world </span> 
              challenges.
            </h1>

            <Nav />
          </div>

          <div className="overview">
            <div>
              <h2>The <br/> Overview</h2>
            </div>

            <div className="overviewArrow">
              <ul>
                <li>
                  <img src={require("./images/overview-arrow.svg")} />
                </li>
                <li>
                  <img src={require("./images/overview-arrow.svg")} />
                </li>
                <li>
                  <img src={require("./images/overview-arrow.svg")} />
                </li>
                <li>
                  <img src={require("./images/overview-arrow.svg")} />
                </li>
              </ul>
            </div>

            <div className="overviewDetails">
              <ul>
                <li>
                  <p>June 29 - September 4, 2020</p>
                </li>
                <li>
                  <p>12-15hr commitment a week</p>
                </li>
                <li>
                  <p>Tackle a real-world challenge</p>
                </li>
                <li>
                  <p>Connect with experienced industry professionals</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="apply gradient">
            <a href="">
              Apply Now
              <img src={require("./images/apply-arrow.svg")} />
            </a>
          </div>

          <div id="about" className="about">
            <h2 style={{ marginBottom: spacer3 }}>What is Level Up?</h2>

            <div className="aboutDetails">
              <div>
                <div>
                  <p style={{ marginBottom: spacer2 }}>
                    Level Up is a 10-week design program that provides students 
                    with the opportunity to tackle a real-world challenge and 
                    connect with experienced industry professionals. Under the 
                    guidance of an industry mentor, participants will work in 
                    teams of four to produce a website showcase of project 
                    deliverables.
                  </p>
                  <p>
                    Our program is different from a typical project class because 
                    participants will have the chance to work in an established 
                    role within a team, be mentored throughout the entire design 
                    process, and network with industry designers and leaders.  
                  </p>
                </div>
              </div>

              <img src={require("./images/about.svg")} />
            </div>
          </div>

          <div className="apply">
            <a href="">
              Seriously, Apply
              <img src={require("./images/apply-arrow.svg")} />
            </a>
          </div>


          <div id="who" className="who">
            <h2 style={{ marginBottom: spacer3 }}>Who is it for?</h2>
            <div>
              <p>
                Level Up is open to all UC San Diego undergraduate students 
                who want to strengthen their design skills. Our program 
                requires a high level of commitment so we are looking for 
                dedicated individuals. 
              </p>
            </div>
          </div>

          <div className="apply">
            <a href="">
              Are You a Match? Apply Now
              <img src={require("./images/apply-arrow.svg")} />
            </a>
          </div>

          <div id="responsibility" className="responsibility">
            <div className="header">
              <h2>
                <img 
                  className="responsibilityEllipse" 
                  src={require("./images/ellipse-white.svg")} 
                  alt="Ellipse" 
                />
                You will be...
              </h2>
            </div>

            <div className="one">
              <p className="counter"></p>
              <p>
                Getting the chance to attend talks by industry leaders 
              </p>
            </div>

            <div className="two">
              <p className="counter"></p>
              <p>
                Meeting with industry mentors to go over project milestones
              </p>
            </div>

            <div className="three">
              <p className="counter"></p>
              <p>
                Working in an established role within a team of students on a design project              </p>
            </div>

            <div className="four">
              <p className="counter"></p>
              <p>
                Working through the entire design process, from needfinding to usability testing  
              </p>
            </div>

            <div className="five">
              <p className="counter"></p>
              <p>
                Meeting up in Zoom calls to have group discussions on weekly findings
              </p>
            </div>

            <div className="six">
              <p className="counter"></p>
              <p>
                Finishing the program with a high-quality case study to put on your portfolio
              </p>
            </div>
          </div>

          <div className="apply">
            <a href="">
              What Are You Waiting For? Apply!
              <img src={require("./images/apply-arrow.svg")} />
            </a>
          </div>

          <div id="prerequisites" className="prerequisites">
            <div>
            <h2 style={{ marginBottom: spacer3 }}>Prerequisites</h2>
              <ul>
                <li>
                  Some design background is preferred
                </li>
                <li>
                  Examples include design classes, design projects, design 
                  sprints, internships, and other related things
                </li>
                <li>
                  A ready-to-learn spirit and high level of self-motivation
                </li>
              </ul>
            </div>

            <div>
              <p>
                We highly encourage you to apply even if you are just starting 
                out in design!
              </p>
            </div>
          </div>

          <div className="apply">
            <a href="">
              Ready to Apply?
              <img src={require("./images/apply-arrow.svg")} />
            </a>
          </div>

          <div id="faq" className="faq">
            <h2 style={{ marginBottom: spacer3 }}>FAQ</h2>

            <div className="faqDetails">
              <div>
                <QA
                  question="How many people will be selected?"
                  answer="6"
                />
                <QA
                  question="How many people will be selected?"
                  answer="6"
                />
                <QA
                  question="How many people will be selected?"
                  answer="6"
                />
              </div>

              <div>
                <QA
                  question="How many people will be selected?"
                  answer="6"
                />
                <QA
                  question="How many people will be selected?"
                  answer="6"
                />
                <QA
                  question="How many people will be selected?"
                  answer="6"
                />
              </div>
            </div>
          </div>

          <div id="thankYou" className="thankYou">
            <div>
              <h2>Thank you</h2>
            </div>

            <div className="overviewArrow">
              <ul>
                <li>
                  <img src={require("./images/overview-arrow.svg")} />
                </li>
              </ul>
            </div>

            <div className="overviewDetails">
              <ul>
                <li>
                  <p>To our industry partners for supporting Level Up!</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer gradient">
            <p className="signature">
              Made with
              <img src={require("./images/heart.svg")} />
              <img src={require("./images/designco.svg")} />
            </p>
            
            <a href="mailto:hello@ucsddesign.co">hello@ucsddesign.co</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
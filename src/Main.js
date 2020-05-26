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

    let gradientCircle = document.getElementById("gradientCircle");
    gradientCircle.style.setProperty('--x', this.state.x + 'px');
    gradientCircle.style.setProperty('--y', this.state.y + 'px');
  }

  render() {
    return (
      <div>
        <div className="sideBar">
          <p>Summer 2020</p>
          <a href="#landing">
            <img src={require("./images/secondary-logo.svg")} alt="Logo" />
          </a>
          <p>Level Up</p>
        </div>

        <div id="gradientCircle"></div>

        <Nav />

        <div className="container">
          <div id="landing" className="landing">
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

          <div className="overview">
            <div>
              <h2>The <br/> Overview</h2>
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
                  <p>June 29 - September 4, 2020</p>
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

          <div id="about" className="about">
            <h2 style={{ marginBottom: spacer3 }}>What is Level Up?</h2>

            <div className="aboutDetails">
              <div>
                <div>
                  <p style={{ marginBottom: spacer2 }}>
                    Level Up is a 10-week design program that provides students 
                    with the opportunity to tackle a real-world challenge and 
                    network with experienced industry professionals. 
                    Participants will work in teams of four to produce a 
                    website showcase of project deliverables with the guidance 
                    of industry mentors.
                  </p>
                  <p>
                    Our program is different from a typical project class because 
                    participants will have the chance to work in an established 
                    role within a team, be mentored throughout the entire design 
                    process, and attend talks by industry leaders.  
                  </p>
                </div>
              </div>

              <img src={require("./images/about.svg")} alt="" />
            </div>
          </div>

          <div className="gradient gradientTransition">
            <span>
              Seriously, go apply!
              <img src={require("./images/apply-arrow.svg")} alt="" />
            </span>
            <a className="apply" href="https://ucsddesign.co">Seriously, go apply!</a>
          </div>


          <div id="who" className="who">
            <h2 style={{ marginBottom: spacer3 }}>Who is it for?</h2>
            <div>
              <p>
                Level Up is open to all UC San Diego undergraduate students 
                who want to strengthen their design skills. This program isn't 
                intended to teach students design fundamentals or tools, but 
                rather targeted toward those who haven't had an internship and 
                are ready to take the next step in their design journey. We're 
                looking for dedicated individuals ready to jump into a high 
                level commitment over the summer.
              </p>
            </div>
          </div>

          <div className="gradient gradientTransition">
            <span>
              Sound like you? Apply now!
              <img src={require("./images/apply-arrow.svg")} alt="" />
            </span>
            <a className="apply" href="https://ucsddesign.co">Sound like you? Apply now!</a>
          </div>

          <div id="responsibility" className="responsibility">
            <div className="header">
              <h2>
                <img 
                  className="responsibilityEllipse" 
                  src={require("./images/ellipse-white.svg")} 
                  alt="" 
                />
                You will be...
              </h2>
            </div>

            <div className="one">
              <p className="counter"></p>
              <p>
                Working in an established role within a team of four students 
                on a design project
              </p>
            </div>

            <div className="two">
              <p className="counter"></p>
              <p>
                Involved in a role including UX Researcher, UX Designer, Visual 
                Designer, UX Engineer, Content Strategist
              </p>
            </div>

            <div className="three">
              <p className="counter"></p>
              <p>
                Working through the entire design process, from needfinding to 
                usability testing  
              </p>
            </div>

            <div className="four">
              <p className="counter"></p>
              <p>
                Committing 12 to 15 hours per week
              </p>
            </div>

            <div className="five">
              <p className="counter"></p>
              <p>
                Meeting up in Zoom calls to have group discussions and 
                weekly updates
              </p>
            </div>

            <div className="six">
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
            <a className="apply" href="https://ucsddesign.co">What are you waiting for? Go apply!</a>
          </div>

          <div id="outcome" className="outcome">
            <div>
            <h2 style={{ marginBottom: spacer3 }}>What you'll get out of it</h2>
              <ul>
                <li>
                  Partaking in a structured program with defined responsibilities
                </li>
                <li>
                  Receiving mentorship from experienced industry designers
                </li>
                <li>
                  Attending biweekly talks by industry leaders 
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
                We highly encourage you to apply even if you are just starting 
                out in design!
              </p>
            </div>
          </div>

          <div className="gradient gradientTransition">
            <span>
              Ready to apply?
              <img src={require("./images/apply-arrow.svg")} alt="" />
            </span>
            <a className="apply" href="https://ucsddesign.co">Ready to apply?</a>
          </div>

          <div id="faq" className="faq">
            <h2 style={{ marginBottom: spacer3 }}>FAQ</h2>

            <div className="faqDetails">
              <div>
                <QA
                  question="What does mentorship from an industry partner look like?"
                  answer=""
                />
                <QA
                  question="How will teams be formed?"
                  answer=""
                />
                <QA
                  question="Can I add this to my portfolio and/or resume?"
                  answer="Yes! At the end of the program, participants will have a high-quality case study that they can add to their resume and portfolios. "
                />
              </div>

              <div>
                <QA
                  question="Should I apply if I don't have much design experience?"
                  answer="We are looking for students who have some design background, which includes design classes, design projects, design sprints, internships, and other related experience. Our program is not intended to teach students design fundamentals or tools, but rather for students who have some skills under their belt and are ready to take the next step in their design journey. "
                />
                <QA
                  question="I have an internship this summer. Can I apply?"
                  answer="No. Our program is targeted toward students who haven’t had an internship before and are looking to apply their design skills to a team project over the summer."
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
                  <img src={require("./images/overview-arrow.svg")} alt="" />
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
              <img src={require("./images/heart.svg")} alt="Love" />
              <img src={require("./images/designco.svg")} alt="Design Co" />
            </p>
            
            <a href="mailto:hello@ucsddesign.co">hello@ucsddesign.co</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
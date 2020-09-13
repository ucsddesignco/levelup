import React from "react";
import { ShowcaseTeams } from "./ShowcaseTeams";
import { Container, Row, Col, setConfiguration } from "react-grid-system";

setConfiguration({ gutterWidth: 40 });

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const idx = this.props.index;
    const current_team = ShowcaseTeams[idx];
    return (
      <div className="team-modal">
        {this.props.show && (
          <div className="inner-modal">
            <Container>
              <Row className="top-buttons">
                <Col xs={1}>
                  <img
                    src={require("../images/arrow.svg")}
                    onClick={this.props.onHide}
                    className="back-arrow"
                  />
                </Col>
                <Col xs={6} md={9}></Col>
                <Col xs={3} md={2}>
                  <a href={current_team.case_study_link} target="_blank">
                    <img
                      src={require("../images/case_study_btn.png")}
                      alt="case-study-button"
                      className="case-study-button"
                    />
                  </a>
                </Col>
              </Row>
              <Row align="end">
                <Col xs={12} md={5}>
                  <img src={current_team.image_path} className="main-img" />
                </Col>
                <Col xs={12} md={7}>
                  <h2 className="superlative-margin">
                    {current_team.team_name}
                  </h2>
                  <p className="superlative">{current_team.superlatives}</p>
                  <p className="description">{current_team.description}</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={8}>
                  <h3>Team</h3>
                  <Row>
                    {current_team.team.map((member, idx) => {
                      return (
                        <Col xs={6} md={3}>
                          <div className="inner-person">
                            <img
                              src={member.member_image}
                              alt={member.member_name}
                            />
                            <h4>{member.member_name}</h4>
                            <p className="team-members">{member.position}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
                <Col xs={12} md={4}>
                  <h3>Mentor</h3>
                  <Row>
                    {current_team.mentor.map((member, idx) => {
                      return (
                        <Col xs={6}>
                          <div className="inner-person">
                            <img
                              src={member.mentor_image}
                              alt={member.mentor_name}
                            />
                            <h4>{member.mentor_name}</h4>
                            <p className="team-members">{member.position}</p>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

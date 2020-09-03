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
              <Row align="end">
                <Col xs={12} md={5}>
                  <img src={current_team.image_path} />
                </Col>
                <Col xs={12} md={7}>
                  <h1>{current_team.team_name}</h1>
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

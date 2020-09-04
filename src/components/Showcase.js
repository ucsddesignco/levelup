import React from "react";
import { ShowcaseTeams } from "./ShowcaseTeams";

class Showcase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="showcase-div">
        <div>
          <img className="showcase-img" src={this.props.image} alt="" />
          <div className="gradient-fill"></div>
        </div>

        <p className="team-members">{this.props.members}</p>
        <h4>{this.props.name}</h4>
      </div>
    );
  }
}

export default Showcase;

import React from "react";
import { ShowcaseTeams } from "./ShowcaseTeams";

class Showcase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <img className="showcase-img" src={this.props.image} alt="" />
        <h5 className="team-members">{this.props.members}</h5>
        <h2 className="team-name">{this.props.name}</h2>
      </div>
    );
  }
}

export default Showcase;

import React from 'react';
import { ShowcaseTeams } from './ShowcaseTeams';

function Showcase() {
    return(
        <div>
            <img className="showcase-img" src={ShowcaseTeams[0].image_path} alt="" />
            <p className="team-members">{ShowcaseTeams[0].team_members}</p>
            <h2 className="team-name">{ShowcaseTeams[0].team_name}</h2>
        </div>
    );
}

export default Showcase;
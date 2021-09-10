import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import background from "./bgHome.jpg";
import dp from "./dp.jpg";
import "./Homepage.scss";

const Homepage = ({ history }) => {
  return (
    <div className="main">
      <div
        className="container"
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <div className="mid">
        <div className="header">Sirajul Islam</div>
        <div className="text">
          I am a versatile professional artist with 9 years experience in
          graphic design and 16 years experience with fine art in both design
          and illustration.
        </div>
      </div>
      <img className="dp" src={dp} alt="dp" />
      <div className="navigation">
        <div className="navmenu">About Me</div>
        <div className="navmenu" onClick={() => history.push(`/project`)}>
          Projects
        </div>
        <div className="navmenu">Reach Me</div>
      </div>
    </div>
  );
};

export default withRouter(Homepage);

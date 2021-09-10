import React from "react";
import "./Project.scss";
import list from "./projectlist.js";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: list,
    };
  }
  render() {
    const { cards } = this.state;
    return (
      <div className="cards">
        {cards.map((item) => (
          <div key={item.key} className="card">
            <div
              className="bg-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="content">
              <h1 className="about">{item.about}</h1>
              <span>Read more...</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Project;

import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Footer extends Component {
  constructor(props){
    super(props)

  this.state = {
    myArry: [
      { 

        titlePge: "Features",
        namePge: [" Link Shortening", " Branded Links ", "Support"],
      },
      {
        titlePge: "Resources",
        namePge: ["Blog", "Developers", "Analytics"],
      },
      {
        titlePge: "Company",
        namePge: [" About", "Our Teams", "Careers", "Contact"],
      },
    ],
  }; 
 }

  render() {
    return (
      <div>
        {this.state.myArry.map((item) => (
          <div key={Math.random()} className="class_lists">
            <span className="titre_list">{item.titlePge}</span>
            <ul>
              <li>
                <Link to="#"> {item.titlePge} </Link>
              </li>
              <li>
                <Link to="#">{item.titlePge} </Link>
              </li>
              <li>
                <Link to="#"> {item.titlePge}</Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

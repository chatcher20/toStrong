import React from "react";
import "./ProgramListItem.scss"
import icon from '../images/icon.png'

export default function ProgramListItem(props) {
  return (
    <div>
      <div>
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-content-programs">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img
                      src={icon}
                      alt="toStrong icon"
                    />
                  </figure>
                </div>
                <p className="title is-4">{props.name}</p>
              </div>
              <br/>
              <label>
                Workout type - 
                </label>
                <p className="subtitle is-6">{props.type}</p>
                <label>
                Program duration - 
                </label>
                <p className="subtitle is-6">{props.duration}</p>
            </div>
            <div className="content">{props.description}</div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

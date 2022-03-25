import React from "react";
import { useParams, Link } from "react-router-dom";
import rankBadge from "../images/badges/20.png";

export default function Profile() {
  const { id } = useParams();

  return (
    <div className="">
      <div className="profile-header">
        <div>
        <strong>Welcome back, {id}</strong>
        <div >
            BMI: 
            <br/>
            Macros:
          </div>
        </div>
        
        <button className="button is-small">
          setting &nbsp;<i className="fa-solid fa-gear"></i>
        </button>
      </div>
   
      <div className="profile-content">
        <div>
          Active program:
          <br />
          example program name
          <Link to="/programs/:id"> Resume </Link>
        </div>

        <br />
        <div className="badge">
          Current Badge:
          <br />
          <br />
          <img src={rankBadge} alt="badge" />
        </div>
      </div>
      
     
          
        <br/>
      <div>
        <strong>Program history:</strong>
        <br/>
        <ol>
          Current:
          <br/>
          <br/>
          <li>program 1  - {Date()}</li>
          <br/>
          Past:
          <br/>
          <br/>
          <li>program 1</li>
          <li>program 11</li>
          <li>program 11</li>
          <li>program 11</li>
        </ol>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

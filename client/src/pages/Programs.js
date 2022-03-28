import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProgramList from "../components/ProgramList";

export default function Programs() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <div className="control">
        <strong>All Programs</strong>
        <Link to="/programs/:id"> Current Program </Link>
        <br/>
        <div className="search-bar">
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder='Search...'
            onChange={event => setQuery(event.target.value)}
          />
        </div>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <br/>
          <ProgramList query={query}/>
          
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

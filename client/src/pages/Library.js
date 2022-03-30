import React, { useState } from "react";
import LibraryList from "../components/LibraryList";

export default function Library() {
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className="title is-size-3"> 
        All Workouts - 
        <div className='subtitle is-size-5'>
          Exercise Library
        </div>
      </div>
      <div className="search-bar">
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder="Search..."
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <i className="fas fa-magnifying-glass"></i>
      </div>
      <br />
      <br />
      <LibraryList query={query} />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

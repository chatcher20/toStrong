import React, { useState } from "react";
import LibraryList from "../components/LibraryList";
import LibraryListItem from "../components/LibraryListItem";

export default function Library() {
  const [query, setQuery] = useState('');
  



  return (
    <div>
      <label className="is-size-3">All workouts</label>
      <br />
      <div className="search-bar">
        <div className="control">
          <input
            className="input is-medium"
            type="text"
            placeholder='Search...'
            onChange={event => setQuery(event.target.value)}
          />
        </div>
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
        test: {query}
      <br />
      <LibraryListItem query={query}/>
      {/* <LibraryList query={query}/> */}
    </div>
  );
}

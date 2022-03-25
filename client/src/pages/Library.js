import React, { useState } from "react";
import LibraryList from "../components/LibraryList";



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
      <br />
      <LibraryList query={query}/>
    </div>
  );
}

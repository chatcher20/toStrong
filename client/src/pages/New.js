import React from "react";

export default function New() {
  return (
    <div className="layout">
      SIGN UP -
      <div classsName="field forms">
        <label class="label">Username: </label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
        <label class="label">Email: </label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
        <label class="label">Password: </label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
        <label class="label">Confirm Password: </label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>

        <label class="label">Height: </label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
        <label class="label">Weight: </label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </div>
  );
}

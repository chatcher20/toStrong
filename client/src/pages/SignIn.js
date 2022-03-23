import React from 'react'

export default function SignIn() {
  return (
    <div className="layout">
      SIGN IN -
      <div classsName="field forms">
        <label class="label">Username: </label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
        <label class="label">Password: </label>
        <div class="control">
          <input class="input" type="text" placeholder="" />
        </div>
        
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
      </div>
    </div>
  )
}

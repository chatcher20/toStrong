import React from 'react'

export default function SignIn() {
  return (
    <div className="layout">
      SIGN IN -
      <div classsName="field forms">
        <label className="label">Username: </label>
        <div className="control">
          <input className="input" type="text" placeholder="" />
        </div>
        <label className="label">Password: </label>
        <div className="control">
          <input className="input" type="text" placeholder="" />
        </div>
        
        <div className="control">
          <button className="button is-primary">Submit</button>
        </div>
      </div>
    </div>
  )
}

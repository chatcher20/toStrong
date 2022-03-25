import React from 'react'

export default function SignIn() {
  return (
    <div className="layout is-size-3">
      SIGN IN -
      <div className="field forms">
      <br/>
        <label className="label">Username: </label>
        <div className="control">
          <input className="input" type="text" placeholder="" />
        </div>
        <label className="label">Password: </label>
        <div className="control">
          <input className="input" type="password" placeholder="" />
        </div>
        
        <div className="control" type="submit">
          <br/>
          <button className="button is-primary is-medium">Submit</button>
        </div>
      </div>
    </div>
  )
}

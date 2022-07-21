import React from 'react'
import SignupForm from './signupform'

function signup() {
  return (
    <div className="row">
      <div className="column left">
        <h1>HEADER</h1>
        <div className='footer'>
          <h1>FOOTER</h1>
        </div>
      </div>
      
      <div className="column sign">
        <SignupForm/>
      </div>
    </div>

  )
}

export default signup
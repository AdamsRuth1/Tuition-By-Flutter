import React from 'react'

const SignInForm = () => {
  return (
    <div className="">
      <div className="pb-4">
        <label>Email</label> <br />
        <input
          type="email"
          placeholder="Enter Email here"
          className="input-style"
          style={{ width: "480px", height: "48px" }}
        />
      </div>
      <div className='pb-2'>
        <label>Password</label> <br />
        <input
          type="password"
          placeholder="Enter email here"
          className="input-style"
          style={{ width: "480px", height: "48px" }}
        />
      </div>
    </div>
  );
}

export default SignInForm

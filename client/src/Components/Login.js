import React from 'react'
const login = () => {
  return (
      <>
<div className="login-container animated fadeInDown bootstrap snippets bootdeys">
        <div className="loginbox bg-white">
            <div className="loginbox-title">LOG IN</div>
            <div className="loginbox-or">
                <div className="or-line"></div>
            </div>
            <div className="loginbox-textbox">
                <input type="text" className="form-control" placeholder="Email" required= "true" />
            </div>
            <div className="loginbox-textbox">
                <input type="text" className="form-control" placeholder="Password" required />
            </div>
            <div className="loginbox-forgot">
                <a href="">Forgot Password?</a>
            </div>
            <div className="loginbox-submit">
                <input type="button" className="btn btn-primary btn-block" value="Login" />
            </div>
            <div className="loginbox-signup">
                <a href="/signup">Sign Up With Email</a>
            </div>
        </div>
    </div>
 </>   )
}
  export default login
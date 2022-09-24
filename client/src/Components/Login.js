import React from 'react'
const login = () => {
  return (
      <>
<div class="login-container animated fadeInDown bootstrap snippets bootdeys">
        <div class="loginbox bg-white">
            <div class="loginbox-title">LOG IN</div>
            <div class="loginbox-social">
                <div class="social-title ">Connect with Your Social Accounts</div>
                <div class="social-buttons">
                    <a href="" class="button-facebook">
                        <i class="social-icon fa fa-facebook"></i>
                    </a>
                    <a href="" class="button-twitter">
                        <i class="social-icon fa fa-twitter"></i>
                    </a>
                    <a href="" class="button-google">
                        <i class="social-icon fa fa-google-plus"></i>
                    </a>
                </div>
            </div>
            <div class="loginbox-or">
                <div class="or-line"></div>
                <div class="or">OR</div>
            </div>
            <div class="loginbox-textbox">
                <input type="text" class="form-control" placeholder="Email" />
            </div>
            <div class="loginbox-textbox">
                <input type="text" class="form-control" placeholder="Password" />
            </div>
            <div class="loginbox-forgot">
                <a href="">Forgot Password?</a>
            </div>
            <div class="loginbox-submit">
                <input type="button" class="btn btn-primary btn-block" value="Login" />
            </div>
            <div class="loginbox-signup">
                <a href="#register.html">Sign Up With Email</a>
            </div>
        </div>
    </div>
 </>   )
}
  export default login
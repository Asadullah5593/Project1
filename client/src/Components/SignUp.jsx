import React, { Component } from 'react'
export default class SignUp extends Component {
  render() {
    return (
      <>
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
        <div className='res-main-form'>
        <div class="col-md-6 pt-5 pt-sm-3">
            <h2 class="h4 mb-3">No Account? Sign up</h2>
            <p class="text-muted mb-4">Registration takes less than a minute but gives you full control over your orders.</p>
            <form>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label className='label' for="reg-fn">First Name</label>
                            <input class="res-input" type="text" required = "required" id="reg-fn" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label className='label' for="reg-ln">Last Name</label>
                            <input class="res-input" type="text" required id="reg-ln" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label className='label' for="reg-email">E-mail Address</label>
                            <input class="res-input" type="email" required id="reg-email" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label className='label' for="reg-phone">Phone Number</label>
                            <input class="res-input" type="text" required = "required" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label className='label' for="reg-password">Password</label>
                            <input class="res-input" type="password" id="reg-password" required = "required" />
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label className='label' for="reg-password-confirm">Confirm Password</label>
                            <input class="res-input" type="password" id="reg-password-confirm" required = "required" />
                        </div>
                    </div>
                </div>
                <div>
                    <button class="res-btn" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
      </div>
   </>
    )
  }
}
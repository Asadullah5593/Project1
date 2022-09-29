import React, {Component, useState} from 'react'

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
      <>
        <div className='res-main-form'>
        <div className="col-md-6 pt-5 pt-sm-3">
            <h1>No Account? Sign up</h1>
            <p className="text-muted mb-4">Registration takes less than a minute but gives you full control over your orders.</p>
            <hr/>
            <form>
                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <label className="res-label">First Name</label>
                            <input className="res-input" type="text" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <label className="res-label">Last Name</label>
                            <input className="res-input" type="text" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <label className="res-label">E-mail Address</label>
                            <input className="res-input" type="email" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <label className="res-label">Phone Number</label>
                            <input className="res-input" type="text" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <label className='res-label'>Password</label>
                            <input className="res-input" type="password" required />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div>
                            <label className="res-label">Confirm Password</label>
                            <input className="res-input" type="password" required />
                        </div>
                    </div>
                </div>
                <div>
                    <button className="res-btn" type="submit">Sign Up</button>
                </div>
            </form>
        </div>
      </div>
   </>
    )
}
export default SignUp;
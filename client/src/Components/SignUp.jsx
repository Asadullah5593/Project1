import React, {useState} from 'react'
import {signupUser} from "../ApiHelpers/AuthApiHelper";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

const SignUp = () => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const signUpdata = {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            password: password
        }

        signupUser(signUpdata).then((res) => {
            const {data} = res;
            if (data.success === true) {
                toast.success("Signup successful! Please login to continue.")
                navigate("/login");
            } else {
                toast.error(data.error)
            }
        }).catch((e) => {
            toast.error(e.message);
        })
    }

    return (
        <>
            <div className='res-main-form'>
                <div className="col-md-6 pt-5 pt-sm-3">
                    <h1>No Account? Sign up</h1>
                    <p className="text-muted mb-4">Registration takes less than a minute but gives you full control over
                        your orders.</p>
                    <hr/>
                    <form>
                        <div className="row">
                            <div className="col-sm-6">
                                <div>
                                    <label className="res-label">First Name</label>
                                    <input className="res-input" type="text" required
                                           onChange={(e) => setFname(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <label className="res-label">Last Name</label>
                                    <input className="res-input" type="text" required
                                           onChange={(e) => setLname(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <label className="res-label">E-mail Address</label>
                                    <input className="res-input" type="email" required
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <label className="res-label">Phone Number</label>
                                    <input className="res-input" type="number" required
                                           onChange={(e) => setPhone(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <label className='res-label'>Password</label>
                                    <input className="res-input" type="password" required
                                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <label className="res-label">Confirm Password</label>
                                    <input className="res-input" type="password" required
                                           onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="res-btn" type="submit"
                                    onClick={event => submitHandler(event)}>Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default SignUp;
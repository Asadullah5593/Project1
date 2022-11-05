import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {loginUser} from "../ApiHelpers/AuthApiHelper";
import {toast} from "react-toastify";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        // dispatch login
        loginUser({
            email: email,
            password: password
        }).then((res) => {
            const {data} = res;
            if (data.success === true) {
                toast.success("Login Successfull!")
                localStorage.setItem("accessToken", data.accessToken)
                navigate("/products")
            } else {
                toast.error(data.error)
            }
        }).catch((e) => {
            toast.error(e.message);
        })
    };

    return (
        <>
            <div className="login-container animated fadeInDown bootstrap snippets bootdeys">
                <div className="loginbox bg-white">
                    <div className="loginbox-title">SIGN IN</div>
                    <div className="loginbox-or">
                        <div className="or-line"></div>
                    </div>
                    <div className="loginbox-textbox">
                        <input type="email" className="form-control" placeholder="Email" required="true"
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="loginbox-textbox">
                        <input type="password" className="form-control" placeholder="Password" required
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="loginbox-forgot">
                        <a href="">Forgot Password?</a>
                    </div>
                    <div className="loginbox-submit">
                        <input type="button" className="btn btn-primary btn-block" value="Login"
                               onClick={event => submitHandler(event)}/>
                    </div>
                    <div className="loginbox-signup">
                        <a href="/signup">Sign Up With Email</a>
                    </div>
                </div>
            </div>
        </>)
}
export default Login;
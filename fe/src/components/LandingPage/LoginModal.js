import React from "react";
import ReactFormInputValidation from "react-form-input-validation";
import { login } from "./../../services/Auth";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";


    class Login extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                fields : {
                      email: "",
                      password: "",
                      remember_me: ""
                },
                redirect:null,
                errors: {}
            };

            this.props = props;
            this.form = new ReactFormInputValidation(this);
            this.form.useRules({
                email: "required|email",
                password: "required",
                remember_me: "present",
            });
            this.form.onformsubmit = (fields) => {
                this.getLogin(this.state.fields);
                
            }
        };

        getLogin = async(request) => {
            
         await   axios.post(process.env.REACT_APP_BASE_URL + 'login', request)
        .then(function (response) {

            console.log('test ', response);
            // this.setState({redirect : 'user-dashboard'});
            window.location.href = '/user-dashboard';
        
        })
        .catch(function (error) {
            console.log(error, 'error');
            if(error && (error.response.status == 422 || error.response.status == 401)){
                alert('Please enter valid creds');

            }
        });

        };

        

        render(){
            if (this.state.redirect) {
                return <Navigate to={this.state.redirect} />
            }
            return(
                <>
                    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered modal-lg-6">
                            <div className="modal-content login_modal"> 
                                <div className="modal-body">
                                    <div className="mb-4">
                                        <h5>Log in to Advizuru</h5>
                                        <p className="mb-0">Welcome Back! Login with your data that you entered during registration</p>
                                    </div>
                                    <form onSubmit={this.form.handleSubmit}>
                                        <div className="form-group-md">
                                            <i className="flaticon flaticon-email-1"></i>
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="emailAddress" name = "email" placeholder="name@example.com" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email}></input>
                                                <label htmlFor="emailAddress">Email address</label>              
                                            </div>
                                            <label className="error">
                                            {this.state.errors.email ? this.state.errors.email : ""}
                                        </label>         
                                        </div>
                                        
                                        <div className="form-group-md">
                                            <i className="flaticon flaticon-lock"></i>
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="PasswordField" name = "password" placeholder="name@example.com" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.password}/>
                                                <label htmlFor="PasswordField">Password</label>     
                                            </div>
                                            <label className="error">
                                                     {this.state.errors.password ? this.state.errors.password : ""}
                                                </label>   
                                        </div>
                                                
                                        <div className="d-between mb-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="defaultCheck1" name="remember_me"  onChange={this.form.handleChangeEvent} value="YES"/>
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Remember me
                                                </label>
                                            </div>
                                            <a data-bs-target="#forgotPassword" data-bs-toggle="modal" data-bs-dismiss="modal">Forgot Password?</a>
                                        </div>
                                        <button  type="submit"  name = "submit"  className="btn btn-primary w-100">Login</button>
                                        <span className="d-block or-line"><b>Or</b></span>
                                        <button className="btn btn-light btn-google w-100">
                                            <img src="assets/img/google.png" alt="google image" className="img-fluid me-3" width="20" height="20" />
                                            Login with Google
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )
        }   
}
export default Login;
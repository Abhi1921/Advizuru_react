import React from "react";
import axios from 'axios';
import { forgotPassword } from "./../../services/Auth";
import ReactFormInputValidation from "react-form-input-validation";
class ForgotPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                  email: ""
            },
            errors: {}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            email: "required|email",
        });
        this.form.onformsubmit = (fields) => {
            this.forgotPassword(this.state.fields);
            forgotPassword = async(request) => {
        
                await   axios.post(process.env.REACT_APP_BASE_URL + 'sendemail', request)
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
        }
    };

  

    };
    render() {
        return(
        <>
            <div className="modal fade" id="forgotPassword" tabIndex="-1" aria-labelledby="forgotPasswordLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg-6">
                    <div className="modal-content login_modal">
                        <div className="modal-body">
                            <div className="mb-4">
                                <h5>Reset Password</h5>
                                <p className="mb-0">You've successfully verified your account. Enter new password below.</p>
                            </div>
                            <form onSubmit={this.form.handleSubmit}>
                             
                                <div className="form-group-md">
                                    <i className="flaticon flaticon-email-1"></i>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="floatingInput" name="email" placeholder="name@example.com" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email}/>
                                        <label htmlFor="floatingInput">Your Email address</label>
                                    </div>
                                    <label className="error">
                                            {
                                                this.state.errors.email ? this.state.errors.email : ""
                                            }
                                        </label>
                                </div>
                                <button className="btn btn-primary w-100">Reset My password</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>  
    )
    };
}
export default ForgotPassword;
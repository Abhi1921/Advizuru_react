import axios from "axios";
import React from "react";
import ReactFormInputValidation from "react-form-input-validation";

class ContactUs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                name:"",
                email:"",
                subject:"",
                message:"",

            },
            errors:{}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name:"required|max:50",
            email:"required|email",
            subject:"required",
            message:"required",
        });
        this.form.onformsubmit = (fields) => {
            this.individualSignUp(this.state.fields);
        }
    };
     
     

    individualSignUp = async(request) => {
        await axios.post(process.env.REACT_APP_BASE_URL + 'contact_us', request)
        .then(function (response) {
            console.log(response);
            alert("Saved Successfully");
        }) 
        .catch(function (error) {
            console.log(error, 'error');
            return error;
        });  
    };
     
    render(){
        return(
            <>
        <div className="main-wrapper">
            <div className="cmt-page-title-row">
                <div className="cmt-page-title-row-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title">Contact Us</h2>
                                </div>
                                <div className="breadcrumb-wrapper">
                                    <span>
                                        <a title="Homepage" href="/index">Home</a>
                                    </span>
                                    <span>Contact Us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
            <div className="py-5 contact-wrap bg-white">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6 mb-3">
                            <div className="contact-box">
                                <div className="tm-heading">
                                    <h3 className="t-heading">
                                        Have Be Any Question?<br></br>
                                        <b>Feel Free To Contact With Us</b>
                                    </h3>
                                </div>
                                <div className="tm-box">
                                    <h3>Visit our office at</h3>
                                    <div>302, Sushma Infinium, Zirakpur, <br></br> Punjab 140603</div>
                                </div>
                                <div className="tm-box">
                                    <h3>Message us</h3>
                                    <div>
                                        <span>info@advizuru.com</span><br></br> 
                                        <span>(+91) 1762430331</span>
                                    </div>
                                </div>
                                
                                
                                <div className="tm-box">
                                    <h3>Follow us</h3>
                                    <ul className="list-inline mb-0 footer-social-link">
                                        <li className="list-inline-item">
                                            <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.advizuru.com/project-detail/?isSearchedProfile=true" className="fb-bg"><i className="fa fa-facebook"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://twitter.com/share?url=https://www.advizuru.com/project-detail/?isSearchedProfile=true" className="twitter-bg"><i className="fa fa-twitter"></i></a>
                                        </li>
                                       
                                        <li className="list-inline-item">
                                            <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.advizuru.com/project-detail/?isSearchedProfile=true" className="linked-bg"><i className="fa fa-linkedin"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://in.pinterest.com/pin/create/link/?url=https://www.advizuru.com/lead-detail/?isSearchedProfile=true" className="pinterest-bg"><i className="fa fa-pinterest"></i></a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a href="https://api.whatsapp.com/send/?text=https://www.advizuru.com/project-detail/?isSearchedProfile=true" className="whtsapp-bg"><i className="fa fa-whatsapp"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* <!-- Message Display --> */}
                                                
                                <form onSubmit={this.form.handleSubmit}>
                                    <div className="alert alert-success" id="msg" style={{display:'none'}} role="alert"></div>	
                                    <div className="d-card-x">
                                        <h3>Send us a message</h3>
                                        <div className="form-group">
                                            <label>Name <sup className="text-danger">*</sup></label>
                                            <input name="name" type="text" className="form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.name}/>
                                            <div className="help-block"></div>
                                            <label className="error">
                                               {this.state.errors.name ? this.state.errors.name : ""}
                                            </label>								
                                        </div>
                                        <div className="form-group">
                                            <label>Email<sup className="text-danger">*</sup></label>
                                            <input name="email" type="text" className="form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email}/>
                                            <div className="help-block"></div>
                                            <label className="error">
                                               {this.state.errors.email ? this.state.errors.email : ""}
                                            </label>	
                                        </div>
                                        <div className="form-group">
                                            <label>Subject<sup className="text-danger">*</sup></label>
                                            <input name="subject" type="text" className="form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.subject}/>
                                            <div className="help-block"></div>
                                            <label className="error">
                                               {this.state.errors.subject ? this.state.errors.subject : ""}
                                            </label>	
                                        </div>
                                        <div className="form-group">
                                            <label>Message<sup className="text-danger">*</sup></label>
                                            <textarea className="form-control" id="contact_v1-message" name="message" rows="3" cols="42" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.message}></textarea>
                                            <div className="help-block"></div>
                                            <label className="error">
                                               {this.state.errors.message ? this.state.errors.message : ""}
                                            </label>	
                                        </div>
                                    </div>
                                    <div className="d-flex-end contact-btn">
                                        <button type="submit" className="btn btn-primary saveBtn">Submit</button>
                                        <button type="button" className="btn btn-danger" >Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
	    </div>
          </>
        )
    }
}
export default ContactUs;
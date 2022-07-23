import React from 'react';
import ReactFormInputValidation from "react-form-input-validation";
class AddRecruitment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                designation: "",
                title:"",
                industry:"",
                education_qualification:"",
                city:"",
                state:"",
                country:"",
                skills:"",
                min_experience:"",
                max_experience:"",
                minimim_budget:"",
                max_budget:"",
                upload_image:"",
                notes:"",
                vendor_recruitment_company:"",
                recruiter_email:"",
    
            },
            errors:{}

        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
                designation: "required",
                title:"required",
                industry:"required",
                education_qualification:"required",
                city:"required",
                state:"required",
                country:"required",
                skills:"required",
                min_experience:"required",
                max_experience:"required",
                minimim_budget:"required",
                max_budget:"required",
                upload_image:"required",
                notes:"required",
                vendor_recruitment_company:"required",
                recruiter_email:"required",
            });
            this.form.onformsubmit = (fields) => {
                let obj = fields;
                obj.country_id = obj.country;
                obj.currency_id = obj.currency;
                axios.post(process.env.REACT_APP_BASE_URL + 'add/recruitment', obj)
                .then(function (response) {
                    console.log(response);
                    alert("Saved Successfully");
                }) 
                .catch(function (error) {
                    console.log(error, 'error');
                    return error;
                }); 
            }
        };
         
    render(){
        return(
            <>
                <div className="modal fade ag-modal show" id="addRecruitment" tabIndex="-1" aria-labelledby="addRecruitmentLabel" aria-modal="true" role="dialog">
                    <form onSubmit={this.form.handleSubmit}>
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="addRecruitmentLabel">Add Recruitment</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div className="form-group">
                                <label>Designation <sup className="text-danger">*</sup>
                                </label>
                                <input name="designation" className="form-control" type="text" data-validation-message="Designation is required, No special characters." onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.designation} />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.designation ? this.state.errors.designation : ""} </label>
                            </div>
                            <div className="form-group">
                                <label>Title <sup className="text-danger">*</sup>
                                </label>
                                <input name="title" className="form-control" type="text" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.title} />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.title ? this.state.errors.title : ""} </label>
                            </div>
                            <div className="form-group">
                                <label>Industry <sup className="text-danger">*</sup>
                                </label>
                                <select name="industry" className="js-states form-control" style={{width:'100%'}} onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.industry}>
                                <option>-- Select --</option>
                                <option value="1">BPO , Call Centre , ITES</option>
                                <option value="2">Accounting , Finance</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.industry ? this.state.errors.industry : ""} </label>
                            </div>
                            <div className="form-group">
                                <label>Educational Qualification <sup className="text-danger">*</sup>
                                </label>
                                <select name="education_qualification" id="qualification" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} data-select2-id="select2-data-qualification" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.education_qualification}>
                                <option data-select2-id="select2-data-4-n7tv">Select Qualification</option>
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-3-p5wj" style={{width: '100%'}}>
                                <span className="selection">
                                    <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-qualification-container" aria-controls="select2-qualification-container">
                                    <span className="select2-selection__rendered" id="select2-qualification-container" role="textbox" aria-readonly="true" title="Select Qualification">
                                        <span className="select2-selection__placeholder">Select Qualification</span>
                                    </span>
                                    <span className="select2-selection__arrow" role="presentation">
                                        <b role="presentation"></b>
                                    </span>
                                    </span>
                                </span>
                                <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.education_qualification ? this.state.errors.education_qualification : ""} </label>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>City <sup className="text-danger">*</sup>
                                    </label>
                                    <select name="city" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} id="contactcity" tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-contactcity" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.city}>
                                    <option data-select2-id="select2-data-27-53ln">Select city</option>
                                    </select>
                                    <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-26-qpuc" style={{width: '100%'}}>
                                    <span className="selection">
                                        <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-contactcity-container" aria-controls="select2-contactcity-container">
                                        <span className="select2-selection__rendered" id="select2-contactcity-container" role="textbox" aria-readonly="true" title="Select City">
                                            <span className="select2-selection__placeholder">Select City</span>
                                        </span>
                                        <span className="select2-selection__arrow" role="presentation">
                                            <b role="presentation"></b>
                                        </span>
                                        </span>
                                    </span>
                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                    </span>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.city ? this.state.errors.city : ""} </label>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>State <sup className="text-danger">*</sup>
                                    </label>
                                    <select name="state" className="js-states form-control" style={{width:'100%'}} id="contactstate" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.state}>
                                    <option>Select state</option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.state ? this.state.errors.state : ""} </label>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label>Country <sup className="text-danger">*</sup>
                                    </label>
                                    <select name="country" id="contactcountry2" className="form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.country}>
                                    <option>Select Country</option>
                                    <option value="1">Afghanistan</option>
                                    <option value="2">Albania</option>
                                    <option value="3">Algeria</option>
                                    <option value="245">Zimbabwe</option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.country ? this.state.errors.country : ""} </label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Skills</label>
                                <select name="skills" className="form-control select2-hidden-accessible" id="skillsfield" multiple="" data-select2-id="select2-data-skillsfield" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.skills}>
                                <option data-select2-id="select2-data-23-dfvz">Select Skills</option>
                                </select>
                                
                            </div>
                            
                            <div className="form-group">
                                <label>Min Exp</label>
                                <select name="min_experience" id="signup_v1-minexp" className="form-select" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.min_experience}>
                                <option value="0">Select Total Experience</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.min_experience ? this.state.errors.min_experience : ""} </label>
                            </div>
                            
                            <div className="form-group">
                                <label>Max Exp</label>
                                <select name="max_experience" id="signup_v1-minexp" className="form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.max_experience}>
                                <option value="0">Select Max Experience</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.max_experience ? this.state.errors.max_experience : ""} </label>
                            </div>
                            <div className="form-group">
                                <label>Minimum Budget <sup className="text-danger">*</sup>
                                </label>
                                <input id="signup_v1-minbudget" name="minimim_budget" className="form-control" type="text" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.minimim_budget} />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.minimim_budget ? this.state.errors.minimim_budget : ""} </label>
                            </div>
                            <div className="form-group">
                                <label>Maximum Budget <sup className="text-danger">*</sup>
                                </label>
                                <input id="signup_v1-maxbudget" name="max_budget" className="form-control" type="text" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.max_budget} />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.max_budget ? this.state.errors.max_budget : ""} </label>
                            </div>
                            <h4 className="popup-heading">OTHER DETAILS</h4> 
                            <div className="form-group file-upload">
                                <label>Upload Image</label>
                                <div className="d-flex align-items-center border border-radius-sm">
                                <label className="chose-file upload_img_recruitment dz-clickable" htmlFor="actual-btn">
                                    <i className="flaticon flaticon-upload"></i> Choose File </label>
                                <span id="file-chosen">
                                    <a target="_blank" href="">No file chosen</a>
                                </span>
                                </div>
                                <div className="progress-block"></div>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.upload_image ? this.state.errors.upload_image : ""} </label>
                            </div>
                            <div className="form-group">
                                <label>Notes <sup className="text-danger">*</sup>
                                </label>
                                <textarea id="signup_v1-notes" className="form-control" rows="3" name="notes" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.notes}></textarea>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.notes ? this.state.errors.notes : ""} </label>
                            </div>
                            <h4 className="popup-heading">Assign Recruiter</h4>
                            <div className="form-group">
                                <label>Vendor / Recruitment Consulting Company <sup className="text-danger">*</sup>
                                </label>
                                <select name="vendor_recruitment_company" className="form-select" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.vendor_recruitment_company}>
                                <option>-- Select --</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.vendor_recruitment_company ? this.state.errors.vendor_recruitment_company : ""} </label>
                            </div>
                            <div className="form-group">
                                <label>Recruitment Consulting % <sup className="text-danger">*</sup>
                                </label>
                                <input type="text" className="form-control" name="percentage_vendor" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.percentage_vendor} />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.percentage_vendor ? this.state.errors.percentage_vendor : ""} </label>
                            </div>
                            <div className="w98">
                                <div className="">
                                <label>Recruiter's Email Id</label>
                                </div>
                                <div className="form-group">
                                <input data-rule-email="true" id="emailid" name="recruiter_email" className="form-control" type="text" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.recruiter_email} />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.recruiter_email ? this.state.errors.recruiter_email : ""} </label>
                                </div>
                            </div>
                            </div>
                            <div className="modal-footer">
                            <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                            <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>

            </>
        )
    }
}
export default AddRecruitment;
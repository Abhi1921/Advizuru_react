import React from 'react';
import axios from 'axios';
import ReactFormInputValidation from "react-form-input-validation";
class AddSubContract extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                project_name: "",
                functional_area:"",
                industry:"",
                skills:"",
                city:"",
                state: "",
                country:"",
                availability:"",
                effort_required:"",
                effort_type:"",
                start_date:"",
                end_date:"",
                payment_type:"",
                estimated_cost:"",
                currency:"",
                experienced_required:"",
                qualification_desired:"",
                upload_image:"",
                other_requirement:"",
                notes:"",
                vendor_recruitment_company:"",
                recruitment_consulting_pct:"",
                recruiter_email:"",
    
            },
            
            errors:{}

        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
                project_name: "required",
                functional_area:"required",
                industry:"required",
                skills:"required",
                city:"required",
                state:"required",
                country: "required",
                availability:"required",
                effort_required:"required",
                effort_type:"required",
                start_date:"required",
                end_date:"required",
                payment_type:"required",
                estimated_cost:"required",
                currency:"required",
                experienced_required:"required",
                qualification_desired:"required",
                upload_image:"required",
                other_requirement:"required",
                notes:"required",
                vendor_recruitment_company:"required",
                recruitment_consulting_pct:"required",
                recruiter_email:"required",
               
            });
            this.form.onformsubmit = (fields) => {
                console.log("please submit your form");
            }
        };
            async componentDidMount() {
           
               
                this.getAllEducation_Qualification();
                this.getCountry();
                this.getState();
                this.getCity();
                this.getAllSkill();
               
                
            } 
            getAllEducation_Qualification = async(request) => {
                const req = await axios(process.env.REACT_APP_BASE_URL + 'degree');

                console.log(req, 'reqdegree');
                this.setState((prevState)=>({...prevState, allEducation_Qualification: req.data.data}));
                
                };
            getAllSkill = async(request) => {
                const req = await axios(process.env.REACT_APP_BASE_URL + 'all-skills');
                this.setState((prevState)=>({...prevState, allSkills: req.data.allSkills}));
            };
            getCountry = async() => {
                const req = await axios(process.env.REACT_APP_BASE_URL + 'country');
                console.log(req.data.user, 'cc')
                this.setState((prevState)=>({
                    ...prevState, country: req.data.Country
                }));
    
            };
            getState = async(id) => {
                const req = await axios.post(process.env.REACT_APP_BASE_URL + 'state?country_id='+id);
                console.log(req, 'ss')
                this.setState((prevState)=>({
                     ...prevState, state: req.data.State
                }));
            };
            getCity = async(id) => {
                const req = await axios.post(process.env.REACT_APP_BASE_URL + 'city?state_id='+id);
                console.log(req, 'dd')
                this.setState((prevState)=>({
                    ...prevState, city: req.data.city
                }));
            };
            changeCountry = (e) => {
                this.getState(e.target.value);
            }
            changeState = (e) => {
                this.getCity(e.target.value);
            }
    
    render(){
        return(
            <>
                <div className="modal fade ag-modal show" id="addContractProject" tabIndex="-1" aria-labelledby="addContractProjectLabel" aria-modal="true" role="dialog">
                    <form onSubmit={this.form.handleSubmit}>
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="addContractProjectLabel">Add Sub Contract</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <div className="form-group">
                                    <label>Project Name<sup className="text-danger">*</sup></label>
                                    <input type="text" name="project_name" className="form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.project_name}/>							 
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.project_name ? this.state.errors.project_name : ""} </label>
                                </div>
                                <div className="form-group">
                                    <label>Functional Area<sup className="text-danger">*</sup></label>
                                    <select name="functional_area" className="form-select" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.functional_area}>
                                        <option  >-- Select --</option>
                                        <option  value="1">Engineering</option>
                                        
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.functional_area ? this.state.errors.functional_area : ""} </label>

                                </div>
                                <div className="form-group">
                                    <label>Industry<sup className="text-danger">*</sup></label>
                                    <select name="industry" className="js-states form-select" style={{width:'100%'}} onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.industry}>
                                        <option key="1" >Select Industry</option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.industry ? this.state.errors.industry : ""} </label>

                                </div>
                                <div className="form-group">
                                    <label>Skills <sup className="text-danger">*</sup></label>
                                    <select name="skills" className="form-control select2-hidden-accessible" id="skillsfield" multiple="" data-select2-id="select2-data-skillsfield" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.skills}>
                                <option data-select2-id="select2-data-23-dfvz">Select Skills</option>
                                  
                                {
                                                this.state.allSkills && this.state.allSkills.map((row) => {
                                                    return (<option value={row.id}>{row.name}</option>)
                                                })
                                            }
                                </select>
                                        <option  key="1" data-select2-id="select2-data-6-qebj">Select Skills</option>
                                    
                                    <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-xwd7" style={{width: '100%'}}>
                                        <span className="selection">
                                            {/* <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1" aria-disabled="false">
                                            <ul className="select2-selection__rendered" id="select2-skillsfield12-container"></ul>
                                            <span className="select2-search select2-search--inline"><textarea className="select2-search__field" type="search" tabIndex="0" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" autoComplete="off" aria-label="Search" aria-describedby="select2-skillsfield12-container" placeholder="Select Skills" style={{width: '100%'}}></textarea></span>
                                            </span> */}
                                        </span>
                                        <span className="dropdown-wrapper" aria-hidden="true"></span>
                                    </span>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.skills ? this.state.errors.skills : ""} </label>

                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className="form-group">
                                <label>Select City</label>
                                            <select className="form-select" name="city" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent}  value={this.state.fields.city} >
                                            
                                                {
                                                    this.state.city && this.state.city.map((row) => {
                                                        return (<option value={row.city_id}>{row.city_name}</option>)
                                                    })
                                                }
                                            </select>
                                            <label className="error">
                                              {this.state.errors.city ? this.state.errors.city : ""}
                                            </label>
                                        </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                            <label>State</label>
                                            <select className="form-select" name="state" placeholder="Enter Your State" onBlur={this.form.handleBlurEvent} onChange={(e) => { this.form.handleChangeEvent(e);this.changeState(e) } } value={this.state.fields.state} >
                                            {/* <option>State</option>
                                            <option>Bihar</option> */}

                                            {
                                                this.state.state && this.state.state.map((row) => {
                                                    return (<option value={row.state_id}>{row.state_name}</option>)
                                                })
                                            }
                                            </select>
                                            <label className="error">
                                                   {this.state.errors.state ? this.state.errors.state : ""}
                                            </label>
                                        </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="form-group">
                                            <label>Country</label>
                                            <select className="form-select" name="country" onBlur={this.form.handleBlurEvent} onChange={(e) => {this.form.handleChangeEvent(e); this.changeCountry(e)}} >
                                           
                                            {
                                                this.state.country && this.state.country.map((row) => {
                                                    return (<option value={row.id}>{row.country_name}</option>)
                                                })
                                            }
                                            
                                            </select>
                                            <label className="error">
                                               {this.state.errors.country ? this.state.errors.country : ""}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Availability</label>
                                    <select name="availability" className="form-select" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.availability}>
                                        <option >Select Availability</option>
                                        <option value="Immediate">Immediate</option>
                                        <option value="Weekend">Weekend</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Within Month">Within Month</option>
                                        <option value="Within Two Months">Within Two Months</option>
                                        <option value="Within Three Months">Within Three Months</option>
                                        <option value="More Than Three Months">More Than Three Months</option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.availability ? this.state.errors.availability : ""} </label>

                                </div>
                                <h4 className="popup-heading">OTHER DETAILS</h4>
                                <div className="form-group">
                                    <label>Effort Required<sup className="text-danger">*</sup></label>
                                    <input type="number" min="0" className="form-control" name="effort_required"  placeholder="125 Days" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.effort_required}/>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.effort_required ? this.state.errors.effort_required : ""} </label>

                                </div>
                                <div className="form-group">
                                    <label>Effort Days<sup className="text-danger">*</sup></label>
                                    <select className="form-select" name="effort_type" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.effort_type}>
                                        <option >Select Days</option>
                                        <option value="Days">Days</option>
                                        <option value="Weeks">Weeks</option>
                                        <option value="Months">Months</option>
                                        <option value="Year">Year</option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.effort_type ? this.state.errors.effort_type : ""} </label>

                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Expected Start Date</label>
                                            <input type="date" className="form-control" name="start_date" id="expstartdate"  placeholder="" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.start_date}/>
                                            <div className="help-block"></div>
                                            <label className="error"> {this.state.errors.start_date ? this.state.errors.start_date : ""} </label>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Expected End Date</label>
                                            <input type="date" className="form-control" name="end_date" id="expenddate"  placeholder="" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.end_date}/>
                                            <div className="help-block"></div>
                                            <label className="error"> {this.state.errors.end_date ? this.state.errors.end_date : ""} </label>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Payment Model<sup className="text-danger">*</sup></label>
                                            
                                            <select className="form-select" name="payment_type" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.payment_type}>
                                            <option >Select Payment Model</option>
                                            <option value="0">Fixed</option>
                                            <option value="1">Hourly</option>
                                            <option value="2">Daily</option>
                                            <option value="3">Monthly</option>
                                            </select>
                                            <div className="help-block"></div>
                                            <label className="error"> {this.state.errors.payment_type ? this.state.errors.payment_type : ""} </label>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Estimated Project Cost<sup className="text-danger">*</sup></label>
                                            <input type="number" step=".01" min="0" className="form-control" name="estimated_cost"  placeholder="20000" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.estimated_cost}/>
                                            <div className="help-block"></div>
                                            <label className="error"> {this.state.errors.estimated_cost ? this.state.errors.estimated_cost : ""} </label>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Currency<sup className="text-danger">*</sup></label>
                                            <select name="currency" className="form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.currency}>
                                            <option >Select Currency</option>
                                            <option value="2">USD</option>
                                            <option value="1" >INR</option>
                                            </select>
                                            <div className="help-block"></div>
                                            <label className="error"> {this.state.errors.currency ? this.state.errors.currency : ""} </label>

                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Experience Desired<sup className="text-danger">*</sup></label>
                                            <select name="experienced_required" className="form-select" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.experienced_required}>
                                            <option >Select Experience</option>
                                            <option value="0-1 Years">0-1 Years</option>
                                            <option value="2-5 Years">2-5 Years</option>
                                            <option value="5-7 Years">5-7 Years</option>
                                            <option value="7-10 Years">7-10 Years</option>
                                            <option value="7+ Years">7+ Years</option>
                                            </select>
                                            <div className="help-block"></div>
                                            <label className="error"> {this.state.errors.experienced_required ? this.state.errors.experienced_required : ""} </label>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Qualification Desired<sup className="text-danger">*</sup></label>
                                            <select name="education_qualification" id="degreesfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-degreesfield" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.degree}>
                                            <option data-select2-id="select2-data-3-bq7b">Select Education_Qualification</option>
                                            {
                                                this.state.allEducation_Qualification && this.state.allEducation_Qualification.map((row) => {
                                                    return (<option key = {row.id} value={row.id}>  {row.name }</option>)
                                                })
                                            }
                                            </select>
                                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-7-g52z" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-qualification12-container" aria-controls="select2-qualification12-container"><span className="select2-selection__rendered" id="select2-qualification12-container" role="textbox" aria-readonly="true" title="Select Qualification"><span className="select2-selection__placeholder"></span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            <div className="help-block"></div>
                                            <label className="error"> {this.state.errors.qualification_desired ? this.state.errors.qualification_desired : ""} </label>

                                        </div>
                                    </div>
                                </div>
                                <div className="form-group file-upload">
                                    <label>Upload Image</label>
                                    <div className="d-flex align-items-center border border-radius-sm">
                                        <input type="hidden" className="hiddenDocField" name="upload_image" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.upload_image}/>
                                        <label className="chose-file upload_img_contract_project dz-clickable" htmlFor="actual-btn"><i className="flaticon flaticon-upload"></i>
                                        Choose File</label>
                                        <span id="file-chosen"><a target="_blank" href="">No file chosen</a></span>
                                    </div>
                                    <div className="progress-block"></div>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.upload_image ? this.state.errors.upload_image : ""} </label>

                                </div>
                                <div className="form-group">
                                    <label>Other Requirement</label>
                                    <input type="text"  className="form-control" name="other_requirement" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.other_requirement}/>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.other_requirement ? this.state.errors.other_requirement : ""} </label>

                                </div>
                                <div className="form-group">
                                    <label>Notes<sup className="text-danger">*</sup></label>
                                    <textarea className="form-control" name="description" rows="3" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.title}></textarea>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.industry ? this.state.errors.industry : ""} </label>

                                </div>
                                <h4 className="popup-heading">Assign Recruiter</h4>
                                <div className="form-group">
                                    <label>Vendor / Recruitment Consulting Company <sup className="text-danger">*</sup></label>
                                    <select name="vendor_recruitment_company" className="form-select" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.vendor_recruitment_company}>
                                        <option >Select</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.vendor_recruitment_company ? this.state.errors.vendor_recruitment_company : ""} </label>

                                </div>
                                <div className="form-group recruitment-section" style={{display:'none'}}>
                                    <label>Recruitment Consulting % <sup className="text-danger">*</sup></label>						
                                    <input type="text" className="form-control" name="recruitment_consulting_pct" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.recruitment_consulting_pct}/>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.recruitment_consulting_pct ? this.state.errors.recruitment_consulting_pct : ""} </label>

                                </div>
                                <div className="form-group recruitment-section" style={{display:'none'}}>
                                    <label>Recruiter's Email Id <sup className="text-danger">*</sup></label>		
                                    <input data-rule-email="true" name="recruiter_email" id="emailid12" className="form-control" type="text" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.recruiter_email}/>
                                    <span name="emailid12"></span>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.recruiter_email ? this.state.errors.recruiter_email : ""} </label>

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
export default AddSubContract;
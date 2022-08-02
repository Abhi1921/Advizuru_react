import React from 'react';
import axios from 'axios';
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
                minimum_budget:"",
                max_budget:"",
                upload_image:"",
                notes:"",
                vendor_recruitment_company:"",
                recruiter_email:"",
    
            },
            allindustry:[],
            allEducation_Qualification:[],
            country:[],
            getAllDesignation:[],
            state:[],
            city:[],
            errors: {}
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
                minimum_budget:"required",
                max_budget:"required",
                upload_image:"required",
                notes:"required",
                percentage_vendor:"required",
                 vendor_recruitment_company:"required",
                recruiter_email:"required",
            });
            this.form.onformsubmit = (fields) => {
                let obj = fields;
                obj.skill_id = obj.skills;
                obj.country_id = obj.country;
                obj.state_id = obj.state;
                obj.city_id = obj.city;
                obj.industry_id = obj.industry;
                obj.designation_id = obj.designation;
              
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
        async componentDidMount() {
           
            this.getAllIndustry();
            this.getAllEducation_Qualification();
            this.getCountry();
            this.getState();
            this.getCity();
            this.getAllSkill();
            this.getAllDesignation();
            
        } 
        getAllDesignation = async(request) => {
            const req = await axios(process.env.REACT_APP_BASE_URL + 'designation');
            console.log(req,'testingApi');
            this.setState((prevState)=>({...prevState, allDesignations:req.data.data}))
        }
        getAllSkill = async(request) => {
            const req = await axios(process.env.REACT_APP_BASE_URL + 'all-skills');
            this.setState((prevState)=>({...prevState, allSkills: req.data.allSkills}));
        };
        getAllIndustry = async(request) => {
            const req = await axios(process.env.REACT_APP_BASE_URL + 'industry');

            console.log(req, 'reqindustry');
            this.setState((prevState)=>({...prevState, allIndustry: req.data.data}));
            
            };
            getAllEducation_Qualification = async(request) => {
                const req = await axios(process.env.REACT_APP_BASE_URL + 'degree');

                console.log(req, 'reqdegree');
                this.setState((prevState)=>({...prevState, allEducation_Qualification: req.data.data}));
                
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
                                        <label>Designation</label>
                                        <select name="designation" id="designationsfield" placeholder="Select Designation" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} data-select2-id="select2-data-designationsfield" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.designation}>
                                        {
                                        this.state.allDesignations && this.state.allDesignations.map((row) => {
                                            return (<option key = {row.id} value={row.id}>  {row.name }</option>)
                                        })
                                        }    
                                        </select>
                                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-6-njnf" style={{width: '100%'}}>
                                        <span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-designationsfield-container" aria-controls="select2-designationsfield-container">
                                        <span className="select2-selection__rendered" id="select2-designationsfield-container" role="textbox" aria-readonly="true" title="Select Designation">
                                        <span className="select2-selection__placeholder">Select Designation</span></span>
                                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                        <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                        <div className="help-block"></div>
                                        <label className="error">
                                        {this.state.errors.designation ? this.state.errors.designation : ""}
                                        </label> 
                                    </div>
                            
                            <div className="form-group">
                                <label>Title <sup className="text-danger">*</sup>
                                </label>
                                <input name="title" className="form-control" type="text" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.title} />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.title ? this.state.errors.title : ""} </label>
                            </div>
                            <div className="form-group">
                                            <label>industry<sup className="text-danger">*</sup></label>
                                            <select name="industry" id="institutionsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-institutionsfield" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.institution}>
                                            <option data-select2-id="select2-data-3-bq7b">Select Industry</option>
                                            {
                                                this.state.allIndustry && this.state.allIndustry.map((row) => {
                                                    return (<option key = {row.industry_id} value={row.industry_id}>  {row.industry_name }</option>)
                                                })
                                            }
                                            </select>
                                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-6091-zx5r" style={{width: '100%'}}>
                                            <span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-institutionsfield-container" aria-controls="select2-institutionsfield-container">
                                            <span className="select2-selection__rendered" id="select2-institutionsfield-container" role="textbox" aria-readonly="true" title="Select industry">
                                            <span className="select2-selection__placeholder"></span></span>
                                            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                            <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            <div className="help-block"></div>
                                            <label className="error">
                                            {this.state.errors.institution ? this.state.errors.institution : ""}
                                            </label> 
                                        </div>
                            {/* <div className="form-group">
                                <label>Industry <sup className="text-danger">*</sup>
                                </label>
                                <select name="industry" className="js-states form-control" style={{width:'100%'}} onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.industry}>
                                <option>-- Select --</option>
                                <option value="1">BPO , Call Centre , ITES</option>
                                <option value="2">Accounting , Finance</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.industry ? this.state.errors.industry : ""} </label>
                            </div> */}
                             <div className="form-group">
                                            <label>Education_Qualification<sup className="text-danger">*</sup></label>
                                            <select name="education_qualification" id="degreesfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-degreesfield" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.degree}>
                                            <option data-select2-id="select2-data-3-bq7b">Select Education_Qualification</option>
                                            {
                                                this.state.allEducation_Qualification && this.state.allEducation_Qualification.map((row) => {
                                                    return (<option key = {row.id} value={row.id}>  {row.name }</option>)
                                                })
                                            }
                                            </select>
                                                
                                            <div className="help-block"></div>
                                            <label className="error">
                                            {this.state.errors.degree ? this.state.errors.degree : ""}
                                            </label> 
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
                                <label>Skills</label>
                                <select name="skills" className="form-control select2-hidden-accessible" id="skillsfield" multiple="" data-select2-id="select2-data-skillsfield" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.skills}>
                                <option data-select2-id="select2-data-23-dfvz">Select Skills</option>
                                  
                                {
                                                this.state.allSkills && this.state.allSkills.map((row) => {
                                                    return (<option value={row.id}>{row.name}</option>)
                                                })
                                            }
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
                                <input id="signup_v1-minbudget" name="minimum_budget" className="form-control" type="text" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.minimim_budget} />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.minimum_budget ? this.state.errors.minimim_budget : ""} </label>
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
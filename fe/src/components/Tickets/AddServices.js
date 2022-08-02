import React from 'react';
import axios from 'axios';
import ReactFormInputValidation from "react-form-input-validation";
class AddServices extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                title: "",
                service_type:"",
                service_cost:"",
                skills:"",
                effort_required:"",
                effort_type:"",
                industry: "",
                category:"",
                expected_cost:"",
                expected_cost_currency:"",
                contact_person:"",
                contact_person_email:"",
                contact_person_mobile:"",
                city:"",
                state:"",
                country:"",
                start_date:"",
                upload_image:"",
                description:"",
                notes:"",
                facebook_url:"",
                twitter_url:"",
                linkedin_url:"",
                upload_document:"",
    
            },
            country:[],
            state:[],
            city:[],
            errors:{}

        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
                title: "required",
                service_type:"required",
                service_cost:"required",
                skills:"required",
                effort_required:"required",
                effort_type:"required",
                industry:"required",
                category: "required",
                expected_cost:"required",
                expected_cost_currency:"required",
                contact_person:"required",
                contact_person_email:"required",
                contact_person_mobile:"required",
                city:"required",
                state:"required",
                country:"required",
                start_date:"required",
                upload_image:"required",
                description:"required",
                notes:"required",
                facebook_url:"required",
                twitter_url:"required",
                linkedin_url:"required",
                upload_document:"required",
               
            });
            this.form.onformsubmit = (fields) => {
                let obj = fields;
                obj.skill_id = obj.skills;
                obj.country_id = obj.country;
                obj.state_id = obj.state;
                obj.city_id = obj.city;
                obj.industry_id = obj.industry;
                obj.designation_id = obj.designation;
              
                axios.post(process.env.REACT_APP_BASE_URL + 'add/service', obj)
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
           
              
                this.getCountry();
                this.getState();
                this.getCity();
                this.getAllSkill();
              
                
            } 
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
                <div className="modal fade ag-modal show" id="businesspromotion" tabIndex="-1" aria-labelledby="addbusinesspromotionLabel"  aria-modal="true" role="dialog">
                    <form onSubmit={this.form.handleSubmit}>
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="addSkillsLabel">Add Service</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            
                            <div className="form-group">
                                <label>Title <sup className="text-danger">*</sup>
                                </label>
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.title} maxLength="100" name="title" className="form-control" type="text" />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.title ? this.state.errors.title : ""} </label>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label>Service Type <sup className="text-danger">*</sup>
                                    </label>
                                    <ul className="list-inline mb-0 radio-list">
                                    <li className="list-inline-item">
                                        <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_type} id="che_1" name="service_type"  type="radio"/>
                                        <label htmlFor="che_1">Implementation</label>
                                    </li>
                                    <li className="list-inline-item">
                                        <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_type} id="che_2" name="service_type"  type="radio"/>
                                        <label htmlFor="che_2">Advisory</label>
                                    </li>
                                    <li className="list-inline-item">
                                        <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_type} id="che_3" name="service_type"  type="radio"/>
                                        <label htmlFor="che_3">Product</label>
                                    </li>
                                    <li className="list-inline-item">
                                        <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_type} id="che_4" name="service_type"  type="radio"/>
                                        <label htmlFor="che_4">Support</label>
                                    </li>
                                    </ul>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.service_type ? this.state.errors.service_type : ""} </label>
                                </div>
                                </div>
                                <div className="col-md-12">
                                <div className="form-group">
                                    <label>Service Cost <sup className="text-danger">*</sup>
                                    </label>
                                    <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_cost} className="form-control" name="service_cost" type="text" />
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.service_cost ? this.state.errors.service_cost : ""} </label>
                                </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label>Skills <sup className="text-danger">*</sup>
                                </label>
                                <select name="skills" className="form-control select2-hidden-accessible" id="skillsfield" multiple="" data-select2-id="select2-data-skillsfield" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.skills}>
                                <option data-select2-id="select2-data-23-dfvz">Select Skills</option>
                                  
                                {
                                                this.state.allSkills && this.state.allSkills.map((row) => {
                                                    return (<option value={row.id}>{row.name}</option>)
                                                })
                                            }
                                </select>
                                <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-33-x0ey" style={{width: '100%'}}>
                                {/* <span className="selection">
                                    <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1" aria-disabled="false">
                                    <ul className="select2-selection__rendered" id="select2-skillsName32-container"></ul>
                                    <span className="select2-search select2-search--inline">
                                        <textarea className="select2-search__field" type="search" tabIndex="0" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" autoComplete="off" aria-label="Search" aria-describedby="select2-skillsName32-container" placeholder="Select Skills" style={{width: '100%'}}></textarea>
                                    </span>
                                    </span>
                                </span> */}
                                <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.skills ? this.state.errors.skills : ""} </label>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Industry <sup className="text-danger">*</sup>
                                    </label>
                                    <select onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.industry} name="industry" className="form-select">
                                    <option >-- Select --</option>
                                    <option value="1">BPO , Call Centre , ITES</option>
                                    <option value="2">Accounting , Finance</option>
                                    <option value="3">FMCG , Foods , Beverage</option>
                                    <option value="60">Chemicals , PetroChemical , Plastic , Rubber</option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.industry ? this.state.errors.industry : ""} </label>
                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Category <sup className="text-danger">*</sup>
                                    </label>
                                    <select onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.category} name="category" id="servicecategory" className=" form-select">
                                    <option >-- Select --</option>
                                    <option value="1">BPO , Call Centre , ITES</option>
                                    <option value="2">Accounting , Finance</option>
                                    <option value="3">FMCG , Foods , Beverage</option>
                                    <option value="4">Consumer Electronics , Appliances , Durables</option>
                                    <option value="5">Export , Import</option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.category ? this.state.errors.category : ""} </label>
                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Expected Cost Currency</label>
                                <select onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.expected_cost_currency} name="expected_cost_currency" className="form-select">
                                <option value="2">USD</option>
                                <option value="1">INR</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.expected_cost_currency ? this.state.errors.expected_cost_currency : ""} </label>
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
                            <h4 className="popup-heading">OTHER DETAILS</h4>
                            
                            <div className="form-group file-upload">
                                <label>Upload Image (Allow - jpg, png, gif, jpeg)</label>
                                <div className="d-flex align-items-center border border-radius-sm">
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.upload_image} type="hidden" className="hiddenDocField" name="upload_image" />
                                <label className="chose-file upload_img_service_image dz-clickable" htmlFor="actual-btn">
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
                                <textarea rows="3" className="form-control" name="notes" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.notes}></textarea>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.notes ? this.state.errors.notes : ""}</label>
                            </div>
                            <h4 className="popup-heading">SHARE DETAILS</h4>
                            <div className="form-group">
                                <label>Facebook URL</label>
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.facebook_url} id="signup_v1[facebook]" name="facebook_url" type="text" className="form-control" />
                                <label className="error"> {this.state.errors.facebook_url ? this.state.errors.facebook_url : ""}</label>
                            </div>
                            <div className="form-group">
                                <label>Twitter URL</label>
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.twitter_url} id="signup_v1[twitter]" name="twitter_url" type="text" className="form-control" />
                                <label className="error"> {this.state.errors.twitter_url ? this.state.errors.twitter_url : ""}</label>
                            </div>
                            <div className="form-group">
                                <label>Linkedin URL</label>
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.linkedin_url} id="signup_v1[linkedin]" name="linkedin_url" type="text" className="form-control" />
                                <label className="error"> {this.state.errors.linkedin_url ? this.state.errors.linkedin_url : ""}</label>
                            </div>
                            <div className="form-group file-upload">
                                <label>Upload Promotion Image (Allow - jpg, png, gif, jpeg)</label>
                                <div className="d-flex align-items-center border border-radius-sm">
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.upload_document} type="hidden" className="hiddenDocField" name="upload_document" />
                                <label className="chose-file upload_img_promotion_image dz-clickable" htmlFor="actual-btn">
                                    <i className="flaticon flaticon-upload"></i> Choose File </label>
                                <span id="file-chosen">
                                    <a target="_blank" href="">No file chosen</a>
                                </span>
                                </div>
                                <div className="progress-block"></div>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.upload_document ? this.state.errors.upload_document : ""} </label>
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
export default AddServices;
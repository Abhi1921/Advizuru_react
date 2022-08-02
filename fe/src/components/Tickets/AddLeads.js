import React from 'react';
import axios from 'axios';
import ReactFormInputValidation from "react-form-input-validation";
class AddLeads extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                heading: "",
                service_type:"",
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
                image:"",
                description:"",
    
            },
            errors:{}

        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
                heading: "required",
                service_type:"required",
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
                image:"required",
                description:"required",
               
            });
            this.form.onformsubmit = (fields) => {
                console.log("please submit your form");
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
                <div className="modal fade ag-modal show" id="addBussinessLead" tabIndex="-1" aria-labelledby="addaddBussinessLeadLabel" aria-modal="true" role="dialog">
                    <form onSubmit={this.form.handleSubmit}>
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="addSkillsLabel">Add Businsess Lead</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            
                            <div className="form-group">
                                <label>Heading <sup className="text-danger">*</sup>
                                </label>
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.heading} maxLength="100" name="heading" className="form-control" type="text" />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.heading ? this.state.errors.heading : ""} </label>

                            </div>
                            <div className="form-group">
                                <label>Service Type <sup className="text-danger">*</sup>
                                </label>
                                <ul className="list-inline mb-0 radio-list">
                                <li className="list-inline-item">
                                    <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_type} id="ch_1" name="service_type" className=""  type="radio"/>
                                    <label htmlFor="ch_1">Implementation</label>
                                </li>
                                <li className="list-inline-item">
                                    <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_type} id="ch_2" name="service_type" className=""  type="radio"/>
                                    <label htmlFor="ch_2">Advisory</label>
                                </li>
                                <li className="list-inline-item">
                                    <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_type} id="ch_3" name="service_type" className="" type="radio"/>
                                    <label htmlFor="ch_3">Product</label>
                                </li>
                                <li className="list-inline-item">
                                    <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.service_type} id="ch_4" name="service_type" className="" type="radio"/>
                                    <label htmlFor="ch_4">Support</label>
                                </li>
                                </ul>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.service_type ? this.state.errors.service_type : ""} </label>

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
                                <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-47-ycr6" style={{width: '100%'}}>
                                {/* <span className="selection">
                                    <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1" aria-disabled="false">
                                    <ul className="select2-selection__rendered" id="select2-skillsName4-container"></ul>
                                    <span className="select2-search select2-search--inline">
                                        <textarea className="select2-search__field" type="search" tabIndex="0" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" autoComplete="off" aria-label="Search" aria-describedby="select2-skillsName4-container" placeholder="Select Skills" style={{width: '100%'}}></textarea>
                                    </span>
                                    </span>
                                </span> */}
                                <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.skills ? this.state.errors.skills : ""} </label>

                            </div>
                            <div className="form-group">
                                <label>Expected Effort <sup className="text-danger">*</sup>
                                </label>
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.effort_required} id="signup_v1-effort" className="form-control" name="effort_required" type="text" />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.effort_required ? this.state.errors.effort_required : ""} </label>

                            </div>
                            <div className="form-group">
                                <label>Expected Effort Days <sup className="text-danger">*</sup>
                                </label>
                                <select onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.effort_type} name="effort_type" className="form-select">
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
                                    <label>Industry <sup className="text-danger">*</sup>
                                    </label>
                                    <select onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.industry} name="industry" className="form-select">
                                    <option >-- Select --</option>
                                    <option value="1">BPO , Call Centre , ITES</option>
                                    <option value="2">Accounting , Finance</option>
                                    
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.industry ? this.state.errors.industry : ""} </label>

                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label>Category <sup className="text-danger">*</sup>
                                    </label>
                                    <select onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.category} name="category" id="blcategory" className=" form-select">
                                    <option >-- Select --</option>
                                    <option value="1">BPO , Call Centre , ITES</option>
                                    <option value="2">Accounting , Finance</option>
                                    <option value="3">FMCG , Foods , Beverage</option>
                                    <option value="4">Consumer Electronics , Appliances , Durables</option>
                                    
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.category ? this.state.errors.category : ""} </label>

                                </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Expected Cost <sup className="text-danger">*</sup>
                                </label>
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.expected_cost} className="form-control" name="expected_cost" type="number" step=".01" min="0" />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.expected_cost ? this.state.errors.expected_cost : ""} </label>

                            </div>
                            <div className="form-group">
                                <label>Expected Cost Currency <sup className="text-danger">*</sup>
                                </label>
                                <select onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.expected_cost_currency} name="expected_cost_currency" className="form-select">
                                <option value="2">USD</option>
                                <option value="1">INR</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.expected_cost_currency ? this.state.errors.expected_cost_currency : ""} </label>

                            </div>
                            <div className="form-group">
                                <label>Contact Person <sup className="text-danger">*</sup>
                                </label>
                                <select onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.contact_person} name="contact_person" id="contactperson" className="form-select" >
                                <option value="self">Self</option>
                                <option value="others">Others</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.contact_person ? this.state.errors.contact_person : ""} </label>

                            </div>
                            <div className="row" id="otherperson">
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="head">Contact Person Email</label>
                                    <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.contact_person_email} name="contact_person_email" className="form-control"  type="text"/>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.contact_person_email ? this.state.errors.contact_person_email : ""} </label>

                                </div>
                                </div>
                                <div className="col-md-6">
                                <div className="form-group">
                                    <label className="head">Contact Person Mobile</label>
                                    <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.contact_person_mobile} name="contact_person_mobile" className="form-control"  type="text"/>
                                    <div className="help-block"></div>
                                    <label className="error"> {this.state.errors.contact_person_mobile ? this.state.errors.contact_person_mobile : ""} </label>

                                </div>
                                </div>
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
                            <div className="form-group">
                                <label className="head">Start Date <sup className="text-danger">*</sup>
                                </label>
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.start_date} type="date" name="start_date" className="form-control" />
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.start_date ? this.state.errors.start_date : ""} </label>

                            </div>
                            <div className="form-group file-upload">
                                <label>Upload Image (Allow - jpg, png, gif, jpeg)</label>
                                <div className="d-flex align-items-center border border-radius-sm">
                                <input onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.image} type="hidden" className="hiddenDocField" name="image" />
                                <label className="chose-file upload_img_business_lead dz-clickable" htmlFor="actual-btn">
                                    <i className="flaticon flaticon-upload"></i> Choose File </label>
                                <span id="file-chosen">
                                    <a target="_blank" href="">No file chosen</a>
                                </span>
                                </div>
                                <div className="progress-block"></div>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.image ? this.state.errors.image : ""} </label>

                            </div>
                            <div className="form-group">
                                <label>Description <sup className="text-danger">*</sup>
                                </label>
                                <textarea rows="3" className="form-control" name="description" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.description}></textarea>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.description ? this.state.errors.description : ""} </label>

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
export default AddLeads;
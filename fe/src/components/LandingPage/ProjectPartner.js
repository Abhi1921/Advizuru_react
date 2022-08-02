import React from "react";
import ReactFormInputValidation from "react-form-input-validation";
import axios from "axios";

class ProjectPartner extends React.Component{
   
    constructor(props){
        super(props);
        this.state = {
            fields : {
                name:"",
                email:"",
                password:"",
                password_confirmation:"",
                full_name:"",
                gender:"",
                dob:"",
                phone_number:"",
                mobile_number:"",
                city:"",
                state:"",
                country:"",
                address:"",
                pin_code:"",
                skills:"",
                experience:"",
                availability:"",
                company:"",
                state:"",
                part_time:"",
                profile:"",
                resume:"",
                currency:"",
                monthly_rate:"",
                hourly_rate:'',
                annually_rate:"",
                daily_rate:"",
 
            },
            searchCities : [],
            country:[],
            state:[],
            skills:[],
            city:[],   
            errors:{}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
           name:"required|max:50",
           email:"required|email",
           password:"required|max:8|confirmed:password_confirmation",
           password_confirmation: "required",
           full_name:"required",
           gender:"required",
           dob:"required",
           phone_number:"required",
           mobile_number:"required",
           city:"required",
           state:"required",
           country:"required",
           address:"required",
           pin_code:"required",
           skills:"required",
           experience:"required",
           company:"required",
           state:"required",
           part_time:"required",
           profile:"required",
           resume:"required",
           currency:"required",
           monthly_rate:"required",
           hourly_rate:"required",
           annually_rate:"required",
           daily_rate:"required",
           availability:"required"
 

        }); 
        this.form.onformsubmit = (fields) => {
            let obj = fields;
            obj.skill_id = fields.skills;

            this.individualSignUp(this.state.fields);
            window.location.href = '/user-dashboard';

        }
    };
    getAllSkill = async(request) => {
        const req = await axios(process.env.REACT_APP_BASE_URL + 'all-skills');
        this.setState((prevState)=>({...prevState, allSkills: req.data.allSkills}));
    };
        handleOnSearch = async(string, results) => {
            const req = await axios(process.env.REACT_APP_BASE_URL + 'allcity/'+string);
            console.log(req.data, 'ss')
            this.setState((prevState)=>({
                 ...prevState, searchCities: req.data
            }));
        }
        
        handleOnHover = (result) => {
            // the item hovered
            console.log(result)
        }
        
        handleOnSelect = (item) => {
            // the item selected
            console.log(item)
        }
        
        handleOnFocus = () => {
            console.log('Focused')
        };

        formatResult = (item) => {
            return (
            <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
            )
        }

        async componentDidMount() {
            this.getCountry();
            this.getAllSkill();
        
        
        }

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

        individualSignUp = async(request) => {
            await   axios.post(process.env.REACT_APP_BASE_URL + 'freelancer/register', request)
           .then(function (response) {
             console.log(response);
             alert("Profile Created");
            })
            .catch(function (error) {
            return error;
        });
        };

        calculateRate = (e, type) =>{
            let current_value = e.target.value;
            if (type === 'hourly') {
                this.setState(prevState => ({
                    fields: {                   
                        ...prevState.fields,    
                        daily_rate: current_value       
                    }
                }))

                // this.setState({ ...this.state, fields: { ...this.state.fields,  hourly_rate: current_value  } });
                // this.setState({ ...this.state, fields: { ...this.state.fields,daily_rate: current_value }  });
                // this.setState({ ...this.state, fields: { ...this.state.fields, monthly_rate: current_value  } });
                // this.setState({ ...this.state, fields: { ...this.state.fields, annually_rate: current_value }  });


            }

        }

    render(){
        return(
            <>
                <div className="wrapper">
                    
                    <div className="search-bar d-none mobile-xxs">
                        <input type="text" name="search" className="form-control" placeholder="Search here..." />
                        <button type="submit" className="search-btn">
                        <i className="flaticon flaticon-loupe"></i>
                        </button>
                    </div>
                    <div className="main-wrapper spacing">
                        <div className="container">
                            <form onSubmit={this.form.handleSubmit}>
                                <div className="d-card">
                                <div className="d-flex heading-wrap success">
                                    <i className="flaticon flaticon-check me-3"></i>
                                    <h3 className="page-heading">Account Information</h3>
                                </div>
                                <div className="row row-8-flex">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>User Name<sup className="text-danger">*</sup></label>
                                            <input type="text" className="form-control" name="name" placeholder="Enter Your Name" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.name}/>

                                            <label className="error">
                                               {this.state.errors.name ? this.state.errors.name : ""}
                                            </label>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Email ID<sup className="text-danger">*</sup></label>
                                            <input type="text" className="form-control" name="email" placeholder="Enter Your Email"  onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email}/>
                                            <div className="form-text">(This email id will be used for further communication)</div>
                                            <label className="error">
                                             {this.state.errors.email ? this.state.errors.email : ""}
                                            </label>
                                        </div>
                                       
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Password<sup className="text-danger">*</sup></label>
                                            <input type="Password" className="form-control" name="password" placeholder="Enter Your Password"  onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.password} />
                                            <label className="error">
                                        {this.state.errors.password ? this.state.errors.password : ""}
                                        </label>
                                        </div>
                                       
                                    </div>
                                       
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Confirm Password<sup className="text-danger">*</sup></label>
                                            <input type="password" className="form-control" name="password_confirmation" placeholder="Enter Your Password"   onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.password_confirmation}/>
                                            <label className="error">
                                        {this.state.errors.password_confirmation ? this.state.errors.password_confirmation : ""}
                                        </label>
                                        </div>
                                        
                                    </div>
                                        
                                </div>
                                <div className="form-note">
                                    <p className="mb-0"><b>Note:</b> By clicking on next, you are agreeing to advizuru, <a>terms & condition</a> and <a >privacy policy</a></p>
                                </div>
                                </div>
                                 <div className="d-card">
                                <div className="d-flex heading-wrap">
                                    <i className="flaticon flaticon-check me-3"></i>
                                    <h3 className="page-heading">Personal Information</h3>
                                </div>
                                <div className="row row-8-flex">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" className="form-control" name="full_name" placeholder="Enter Your Full Name" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.full_name} />
                                             <label className="error">
                                               {this.state.errors.full_name ? this.state.errors.full_name : ""}
                                             </label>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input type="text" className="form-control" name="phone_number" placeholder="Enter Your Phone Number" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.phone_number} />
                                            <label className="error">
                                        {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
                                        </label>
                                        </div>
                                       
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
                                        
                                        <div className="form-group">
                                            <label>Pin Code</label>
                                            <input type="number" className="form-control" name="pin_code" placeholder="Enter Your Pin Code" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.pin_code} />
                                            <label className="error">
                                                   {this.state.errors.pin_code ? this.state.errors.pin_code : ""}
                                        </label>
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <div className="d-between row">
                                            <div className="form-check check-icon col ps-2">
                                                <input className="form-check-input" type="radio" name="gender" id="male" onChange={this.form.handleChangeEvent} value="male"/>
                                                <label className="form-check-label" htmlFor="male">
                                                <i className="flaticon flaticon-male-sign icon"></i>
                                                Male
                                                </label>
                                                <i className="flaticon flaticon-check active-check"></i>
                                            </div>
                                            <div className="form-check check-icon col ps-2">
                                                <input className="form-check-input" type="radio" name="gender" id="female"  onChange={this.form.handleChangeEvent} value="female"/>
                                                <label className="form-check-label" htmlFor="female">
                                                <i className="flaticon flaticon-femenine icon"></i>
                                                Female
                                                </label>
                                                <i className="flaticon flaticon-check active-check"></i>
                                            </div>
                                            </div>
                                            <label className="error">
                                                 {this.state.errors.gender ? this.state.errors.gender : ""}
                                            </label>
                                        </div>
                                       
                                        <div className="form-group">
                                            <label>Mobile Number</label>
                                            <input type="text" className="form-control" name="mobile_number" placeholder="Enter Your Mobile Number" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.mobile_number} />
                                            <label className="error">
                                        {this.state.errors.mobile_number ? this.state.errors.mobile_number : ""}
                                        </label>
                                        </div>
                                        
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
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Date of Birth</label>
                                            <input type="date" className="form-control" name="dob" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.dob}/>  
                                            <label className="error">
                                                {this.state.errors.dob ? this.state.errors.dob : ""}
                                            </label>
                                        </div>
                                        
                                        <div className="form-group">
                                            {/* <div className="App">
                                                <header className="App-header">
                                                    <div style={{ width: 400 }}>
                                                        <ReactSearchAutocomplete
                                                            items={this.state.searchCities}
                                                            onSearch={this.handleOnSearch}
                                                            onHover={this.handleOnHover}
                                                            onSelect={this.handleOnSelect}
                                                            onFocus={this.handleOnFocus}
                                                            autoFocus
                                                            formatResult={this.formatResult}
                                                        />
                                                    </div>
                                                </header>
                                            </div> */}
                                            <label>Select City</label>
                                            <select className="form-select" name="city" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent}  value={this.state.fields.city} >
                                                <option value="select option">Select City</option>
                                            
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
                                        
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control" name="address" placeholder="Enter Your Address" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.Address} />
                                            <label className="error">
                                               {this.state.errors.address ? this.state.errors.address : ""}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                </div>
                                 <div className="d-card">
                                <div className="d-flex heading-wrap">
                                    <i className="flaticon flaticon-check me-3"></i>
                                    <h3 className="page-heading">Professional Information</h3>
                                </div>
                                <div className="row row-8-flex">
                                    <div className="col-md-4">
                                    <div className="form-group">
                        <label>Skill<sup className="text-danger">*</sup></label>
                        <select name="skill" id="skillsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-skillsfield" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.skill}>
                            {
                            this.state.allSkills && this.state.allSkills.map((row) => {
                            return (
                            <option key = {row.id.toString()} value={row.id}>  {row.name }</option>
                            )
                            })
                            }
                        </select>
                        <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-8-43s1" style={{width: '100%'}}>
                        <span className="selection">
                        <span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-skillsfield-container" aria-controls="select2-skillsfield-container">
                        <span className="select2-selection__rendered" id="select2-skillsfield-container" role="textbox" aria-readonly="true" title="LARAVEL">LARAVEL</span>
                        <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                        </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                        <div className="help-block"></div>
                        <label className="error">
                        {this.state.errors.skill ? this.state.errors.skill : ""}
                        </label> 
                    </div>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Total Experience</label>
                                            <input type="text" className="form-control" name="experience" placeholder="Type Your Total Experience" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.experience}/>
                                            <label className="error">
                                                {this.state.errors.experience ? this.state.errors.experience : ""}
                                            </label>
                                        </div>
                                        
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Current Company</label>
                                            <input type="text" className="form-control" name="company" placeholder="Type Your Company" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.company}/>

                                            <label className="error">
                                                {this.state.errors.company ? this.state.errors.company : ""}
                                            </label>
                                        </div>
                                        
                                    </div>
                                   
                                </div>
                                <div className="row row-8-flex">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <label>I am available as</label>
                                            <div className="d-flex justify-content-between form-field">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name = "availability" id="contractual" onChange={this.form.handleChangeEvent} value="freelancer-contractual"/>
                                                <label className="form-check-label" htmlFor="contractual">
                                                Freelancer/Contractual
                                                </label>
                                                
                                            </div>
                                            
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="full-time" name = "availability"   value="full-time" onChange={this.form.handleChangeEvent}/>
                                                <label className="form-check-label" htmlFor="full-time">
                                                Full time
                                                </label>

                                                
                                            </div>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="part-time" name = "availability"  id="Part-time" onChange={this.form.handleChangeEvent}/>
                                                <label className="form-check-label" htmlFor="Part-time">
                                                Part time
                                                </label>
                                                

                                                
                                            </div>
                                            
                                            </div>
                                            <label className="error">
                                                    {this.state.errors.availability ? this.state.errors.availability : ""}
                                                </label>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-4">
                                        <div className="form-group">
                                            <label>State</label>
                                            <select className="form-select" name="state" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.state}>
                                            {/* <option>State</option>
                                            <option value="bihar">Bihar</option> 

                                            {
                                                this.state.state && this.state.state.map((row) => {
                                                    return (<option value={row.id}>{row.state_name}</option>)
                                                })
                                            }

                                            </select>
                                            <label className="error">
                                              {this.state.errors.state ? this.state.errors.state : ""}
                                            </label>
                                        </div>
                                    </div> */}
                                    
                                </div>
                                 <div className="row row-8-flex">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Part Time Available</label>
                                            <select className="form-select" placeholder="Select full time availability" name="part_time" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.part_time}>
                                            <option>Select Time Availabilty</option>
                                            <option value="weekly 20 hours">Weekly 20 Hours</option>
                                            </select>
                                            <label className="error">
                                              {this.state.errors.part_time ? this.state.errors.part_time : ""}
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Which Profile suits you most?</label>
                                            <select className="form-select" placeholder="Select Profile" name="profile" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.profile}>
                                            <option>Select Profile</option>
                                            <option value="developer">php developer</option>
                                            </select>
                                            <label className="error">
                                                {this.state.errors.profile ? this.state.errors.profile : ""}
                                            </label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-4">
                                        <div className="form-group file-upload">
                                            <label>Upload Resume</label>
                                            <div className="d-flex align-items-center">
                                            <input type="file" id="actual-btn" hidden  name="resume" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.resume}/>
                                            <label className="chose-file" htmlFor="actual-btn"><i className="flaticon flaticon-upload"></i> Choose File</label>
                                            <span id="file-chosen">No file chosen</span>
                                            </div>
                                            <label className="error">
                                                 {this.state.errors.resume ? this.state.errors.resume : ""}
                                           </label>
                                        </div>
                                    </div>                                   
                                </div> 
                                </div>
                                <div className="d-card">
                                <div className="d-flex heading-wrap">
                                    <i className="flaticon flaticon-check me-3"></i>
                                    <h3 className="page-heading">Financial Information</h3>
                                </div>
                                
                                <div className="row row-8-flex">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <label>Select Currency</label>
                                            <select className="form-select" placeholder="Select Currency" name="currency" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.currency}>
                                            <option>Select Currency</option>
                                            <option value="rupees">Rupees</option>
                                            </select>
                                            <label className="error">
                                        {this.state.errors.currency ? this.state.errors.currency : ""}
                                        </label>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Hourly Rate <sup className="text-danger">*</sup></label>
                                            <input type="number" step=".01" min="0"   className="form-control" id="hourlyRate" name="hourly_rate" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.hourly_rate}/>
                                            <div className="help-block"></div>
                                                <label className="error">
                                                {this.state.errors.hourly_rate ? this.state.errors.hourly_rate : ""}
                                                </label> 
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                            <label>Daily Rate <sup className="text-danger">*</sup></label> 
                                            <input type="number" step=".01" min="0"   className="form-control" id="dailyRate" name="daily_rate" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.daily_rate}/>
                                            <div className="help-block"></div>
                                                <label className="error">
                                                {this.state.errors.daily_rate ? this.state.errors.daily_rate : ""}
                                                </label> 
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Monthly Rate <sup className="text-danger">*</sup></label>
                                            <input type="number" step=".01" min="0" className="form-control" id="monthlyRate" name="monthly_rate" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.monthly_rate}/>
                                            <div className="help-block"></div>
                                              <label className="error">
                                                {this.state.errors.monthly_rate ? this.state.errors.monthly_rate : ""}
                                                </label> 
                                        </div>
                                        
                                    </div>
                                    <div className="col-md-4">
                                    <div className="form-group">
                                            <label>Annually Rate <sup className="text-danger">*</sup></label>
                                            <input type="number" step=".01" min="0"  className="form-control" id="annuallyRate" name="annually_rate" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.annually_rate}/>
                                            <div className="help-block"></div>
                                                <label className="error">
                                                  {this.state.errors.annually_rate ? this.state.errors.annually_rate : ""}
                                                </label> 
                                        </div>
                                    </div>
                                   
                                </div>
                                
                                </div> 
                                <div className="d-center my-5">
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    </div>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
                    crossOrigin="anonymous"></script>

            
           
            </>
        )
    }

}
export default ProjectPartner;
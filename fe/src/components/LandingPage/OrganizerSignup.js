import React from "react";
import ReactFormInputValidation from "react-form-input-validation";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import axios from "axios";

class OrganizerSignup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                name:"",
                email:"",
                password: "",
                password_confirmation: "",
                company_name:"",
                company_size:"",
                industry_id:"",
                company_profile:"",
                website_url: "",
                service_type: [],
                full_name: '',
                landline_number: '',
                designation: '',
                country: '',
                city: '',
                phone_number: '',
                state: "",
                address: "",
                mobile_number: '',
                pincode:''
            },
            searchCities : [],
            country:[],
            state:[],
            city: [],
            industry: [],
            allServices : [],
            errors:{}
        };
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            name:"required|max:50",
            email:"required|email",
            password: "required|confirmed:password_confirmation",
            password_confirmation: "present",

            company_name:"required",
            company_size:"required",
            // industry_id:"required",
            company_profile:"required",
            website_url: "required",
            service_type:"required",

            full_name: "required",
            landline_number: "required",
            
            designation: "required",
            country: "required",
            city: "required",
            
            phone_number: "required",
            state: "required",
            address: "required",
            
            mobile_number: "required",
            pincode:"required"
            

        }); 
        this.form.onformsubmit = (fields) => {
            this.OwnerSignup(this.state.fields);
        }
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
        this.getIndustry();
        this.getAllServices();
    }

    getAllServices = async () => {
        const req = await axios(process.env.REACT_APP_BASE_URL + 'services');
        this.setState((prevState)=>({
            ...prevState, allServices: req.data.services
        }));
    };

    getCountry = async() => {
        const req = await axios(process.env.REACT_APP_BASE_URL + 'country');

        console.log(req);
        this.setState((prevState)=>({
            ...prevState, country: req.data.Country
        }));

    };

    getState = async(id) => {
        const req = await axios.post(process.env.REACT_APP_BASE_URL + 'state?country_id='+id);
        this.setState((prevState)=>({
             ...prevState, state: req.data.State
        }));
    };

    getCity = async(id) => {
        const req = await axios.post(process.env.REACT_APP_BASE_URL + 'city?state_id='+id);
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

    OwnerSignup = async (request) => {
        
        const req = await axios.post(process.env.REACT_APP_BASE_URL + 'organisation/register', this.state.fields);
        console.log(req);
//         await   axios.post(process.env.REACT_APP_BASE_URL + 'register', this.state.fields)
//        .then(function (response) {
//         alert('Profile Created');
//        })
//        .catch(function (error) {
//        return error;
//    });
};

    getIndustry = async() => {
        const req = await axios(process.env.REACT_APP_BASE_URL + 'industry');
        this.setState((prevState)=>({...prevState, industry: req.data.industry}));
    };

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
                        <div className="d-flex heading-wrap">
                            <h3 className="page-heading">Account Information</h3>
                        </div>
                        <div className="row row-8-flex">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>User Name<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-control" name="name" placeholder="Enter Your Name" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.name}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.name ? this.state.errors.name : ""}
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Email ID<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-control" name="email" placeholder="Enter Your Email" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.email}/>
                                    <div className="form-text">(This email id will be used for further communication)</div>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.email ? this.state.errors.email : ""}
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Password<sup className="text-danger">*</sup></label>
                                    <input type="Password" className="form-control" name="password" placeholder="Enter Your Password" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.password}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.password ? this.state.errors.password : ""}
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Confirm Password<sup className="text-danger">*</sup></label>
                                    <input type="Password" className="form-control" name="password_confirmation" placeholder="Re-Enter Your Password" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.password_confirmation}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.password_confirmation ? this.state.errors.password_confirmation : ""}
                                    </label>
                                </div>
                            </div>
                        </div>                       
                    </div>
                        <div className="d-card">
                        <div className="d-flex heading-wrap">
                            <h3 className="page-heading">Organization Information</h3>
                        </div>
                        <div className="row row-8-flex">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Company Name<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-control" name="company_name" placeholder="Type Your Company Name." onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.company_name}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.company_name ? this.state.errors.company_name : ""}
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Company Size<sup className="text-danger">*</sup></label>
                                    <select className="form-select" name="company_size" placeholder="Select company size" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.company_size}>
                                        <option value="">Select Company Size*</option>
                                     
                                        <option value="2 - 49" key="1"> 2 - 49 </option>
                                        <option value="50 - 99" key="2"> 50 - 99 </option>
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.company_size ? this.state.errors.company_size : ""}
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Industry<sup className="text-danger">*</sup></label>
                                    <select className="form-select" name="industry_id" placeholder="Select Industry" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.industry_id}>
                                            {
                                                this.state.industry && this.state.industry.map((row) => {
                                                    return (<option key = {row.industry_id} value={row.industry_id}>  {row.industry_name }</option>)
                                                })
                                            }
                                            
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.industry_id ? this.state.errors.industry_id : ""}
                                    </label>



                                </div>
                            </div>
                        </div>
                        <div className="row row-8-flex">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Company profile<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-control" name="company_profile" placeholder="Type Your Company Profile" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.company_profile}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.company_profile ? this.state.errors.company_profile : ""}
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Website/URL<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-control" name="website_url" placeholder="Type Your Company Website" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.website_url}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.website_url ? this.state.errors.website_url : ""}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="row row-8-flex"> 
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Service Type<sup className="text-danger">*</sup></label>
                                        <div className="form-field from_flex">
                                            {
                                                this.state.allServices && this.state.allServices.map((row) => { 
                                                    return ( 
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" name="service_type" value={ row.heading } id={'contractual' + row.id } onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent}/>
                                                            <label className="form-check-label" htmlFor="contractual1"> { row.description }</label>
                                                        </div>

                                                    )
                                                    }) 
                                            }
                                        </div>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.service_type ? this.state.errors.service_type : ""}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-card">
                        <div className="d-flex heading-wrap">
                            <h3 className="page-heading">Contact Details</h3>
                        </div>
                        <div className="row row-8-flex" id="addUser">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Full Name<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-control" name="full_name" placeholder="Type Contact Full Name" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.full_name}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.full_name ? this.state.errors.full_name : ""}
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Designation<sup className="text-danger">*</sup></label>                                     
                                    <select name="designation" id="designationsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} data-select2-id="select2-data-designationsfield" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.designation}>                                   
                                    <option value="select" key="2">Select Designation</option>
                                    <option value="php" key="3">Select PHP Developer</option>
                                    </select>
                                   <div className="help-block"></div>
                                   <label className="error">
                                        {this.state.errors.designation ? this.state.errors.designation : ""}
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Contact Number</label>
                                    <input type="text" className="form-control" name="phone_number" placeholder="Type Contact Phone Number" onBlur={this.form.handleBlurEvent} onChange={(e) => {this.form.handleChangeEvent(e)}} value={this.state.fields.phone_number}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.phone_number ? this.state.errors.phone_number : ""}
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Mobile Number<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-control" name="mobile_number" placeholder="Type Contact Mobile Number" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.mobile_number}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.mobile_number ? this.state.errors.mobile_number : ""}
                                    </label>
                                </div>                         
                            </div>                            
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Contact Landline</label>
                                    <input type="text" className="form-control" name="landline_number" placeholder="Type Contact Landline Number" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.landline_number}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.landline_number ? this.state.errors.landline_number : ""}
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Country<sup className="text-danger">*</sup></label>
                                                <select className="form-select" name="country" id="contactcountry2"
                                                    onBlur={this.form.handleBlurEvent}
                                                    onChange={(e) => { this.form.handleChangeEvent(e); this.changeCountry(e); }}
                                                    value={this.state.fields.country}>
                                       
                                            {
                                                this.state.country && this.state.country.map((row) => {
                                                    return (<option value={row.id} key={row.id}>{row.country_name}</option>)
                                                })
                                            }
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.country ? this.state.errors.country : ""}
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>State<sup className="text-danger">*</sup></label>
                                    <select className="form-select" name="state" id="contactstate" onBlur={this.form.handleBlurEvent} onChange={(e) => { this.form.handleChangeEvent(e); this.changeState(e);}} value={this.state.fields.state}>
                                        {/* <option>State</option> */}
                                            {
                                                this.state.state && this.state.state.map((row) => {
                                                    return (<option key={row.state_id} value={row.state_id}>{row.state_name}</option>)
                                                })
                                            }
                                    </select>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.state ? this.state.errors.state : ""}
                                    </label>
                                </div>                                
                            </div>
                            <div className="col-md-4"> 
                                <div className="form-group">
                                
                                <label>Select City<sup className="text-danger">*</sup></label>
                                                
                                    {/* <div className="App">
                                    <header className="App-header">
                                        <div style={{ width: 400 }}>
                                                            <ReactSearchAutocomplete
                                                                name="state"
                                                items={this.state.searchCities}
                                                onSearch={this.handleOnSearch}
                                                onHover={this.handleOnHover}
                                                onSelect={this.handleOnSelect}
                                                onFocus={this.handleOnFocus}
                                                autoFocus
                                                formatResult={this.formatResult}
                                                onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.city}
                                            />
                                        </div>
                                    </header>
                                </div> */}
                                    <select className="form-select select2-hidden-accessible" name="city" id="contactcity" data-select2-id="select2-data-contactcity" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.city}>
                                                {
                                                    this.state.city && this.state.city.map((row) => {
                                                        return (<option value={row.city_id} key={row.city_id}>{row.city_name}</option>)
                                                    })
                                                }
                                    </select>
                                    <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-osuz" style={{width: '579.453px'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-contactcity-container" aria-controls="select2-contactcity-container"><span className="select2-selection__rendered" id="select2-contactcity-container" role="textbox" aria-readonly="true" title="City"></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                    <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.city ? this.state.errors.city : ""}
                                    </label>
                                </div>                               
                                <div className="form-group">
                                    <label>Address<sup className="text-danger">*</sup></label>
                                    <input type="text" className="form-control addressField pac-target-input" name="address" id="address" placeholder="Type Your Address" autoComplete="off" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.address}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.address ? this.state.errors.address : ""}
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label>Pin Code<sup className="text-danger">*</sup></label>
                                    <input type="number" className="form-control" name="pincode" id="pincode" placeholder="Type Your Pincode" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.pincode}/>
                                    <div className="help-block"></div>
                                    <label className="error">
                                        {this.state.errors.pincode ? this.state.errors.pincode : ""}
                                    </label>
                                </div>                                
                            </div>
                        </div>
                        <div className="form-note">
                            <p className="mb-0"><b>Note:</b> By clicking on sign up, you are agreeing to advizuru, <a className="text-blue" target="_blank" href="https://www.advizuru.com/terms-and-conditions">terms &amp; condition</a> and 
                            <a className="text-blue" target="_blank" href="https://www.advizuru.com/privacy-policy">privacy policy</a></p>
                        </div>
                    </div> 
                    <div className="d-center my-5">
                        <button type="submit" className="btn btn-submit saveBtn">Sign up</button>
                    </div>
                </form>
                        </div>
                    </div>
                    </div>
                   

            
           
            </>
        )
    }

}
export default OrganizerSignup;
import React from 'react';
import axios from 'axios';
import ReactFormInputValidation from "react-form-input-validation";
class AddVisa extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                country: "",
                status:"",
                
            },  
            country:[],
            errors: {}
        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            country: "required",
            status:"required",
            
        });
        this.form.onformsubmit = (fields) => {
            let obj = fields;
            obj.country_id = obj.country;
            axios.post(process.env.REACT_APP_BASE_URL + 'visa/add', obj)
            .then(function (response) {
                console.log(response);
                alert("Saved Successfully");
            }) 
            .catch(function (error) {
                console.log(error, 'error');
                return error;
            }); 
        }
    }
    async componentDidMount() {
        this.getCountry();
        
    }   
    getCountry = async() => {
        const req = await axios(process.env.REACT_APP_BASE_URL + 'country');

        console.log(req);
        this.setState((prevState)=>({
            ...prevState, country: req.data.Country
        }));
    };
    render(){
        return(
            <>
               <div className="modal fade ag-modal show" id="addVisa" tabIndex="-1" aria-labelledby="addVisaLabel" aria-modal="true" role="dialog">
                    <form onSubmit={this.form.handleSubmit}>
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="addVisaLabel">Add Visa</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div className="form-group">
                                <label>Country <sup className="text-danger">*</sup>
                                </label>
                                <select name="country" id="contactcountry" className="js-states form-control" style={{width:'100%'}} onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.country}>
                                <option value="">Select Country</option> { this.state.country && this.state.country.map((row) => { return ( <option value={row.id} key={row.id}>{row.country_name}</option>) }) }
                                </select>
                                <div className="help-block"></div>
                                <label className="error"> {this.state.errors.country ? this.state.errors.country : ""} </label>
                            </div>
                            <div className="row row-8-flex">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Visa Status <sup className="text-danger">*</sup>
                                        </label>
                                        <div className="form-field">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" value="passport" name="status" id="contractual1" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} />
                                            <label className="form-check-label" for="contractual1">Passport</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" value="workvisa" name="status" id="contractual2" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} />
                                            <label className="form-check-label" for="contractual2">Work Visa</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" value="requirevisa" name="status" id="contractual3" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} />
                                            <label className="form-check-label" for="contractual3">Require Visa</label>
                                        </div>
                                        </div>
                                        <div className="help-block"></div>
                                        <label className="error"> {this.state.errors.status ? this.state.errors.status : ""} </label>
                                    </div>
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
export default AddVisa;
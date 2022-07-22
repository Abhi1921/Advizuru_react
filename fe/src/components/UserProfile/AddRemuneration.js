import React from 'react';
import axios from 'axios';
import ReactFormInputValidation from "react-form-input-validation";
class AddRemuneration extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                country: "",
                currency:"",
                hourly_rate: "",
                daily_rate: "",
                monthly_rate: "",
                annually_rate: "",
            },
            country:[],  
            errors: {}
        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            country: "required",
            currency:"required",
            hourly_rate: "required",
            daily_rate: "required",
            monthly_rate: "required",
            annually_rate: "required",
        });
        this.form.onformsubmit = (fields) => {
            let obj = fields;
            obj.country_id = obj.country;
            obj.currency_id = obj.currency;
            axios.post(process.env.REACT_APP_BASE_URL + 'remuneration/add', obj)
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
    //         console.log("please submit your form");
    //     }
    // }
    render(){
        return(
            <>
                <div className="modal fade ag-modal show" id="addRemuneration" tabIndex="-1" aria-labelledby="addRemunerationLabel" aria-modal="true" role="dialog">
                    <form onSubmit={this.form.handleSubmit}>
                        <input type="hidden" name="remuneration_id"/>
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="addRemunerationLabel">Add Remuneration</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                <div className="form-group">
                                    <label>Country<sup className="text-danger">*</sup></label>
                                    <select name="country" className="js-states form-control" style={{width:'100%'}} onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.country}>
                                    <option value="">Select Country</option> { this.state.country && this.state.country.map((row) => { return ( <option value={row.id} key={row.id}>{row.country_name}</option>) }) }
                                    </select>
                                    <div className="help-block"></div>
                                        <label className="error">
                                            {this.state.errors.country ? this.state.errors.country : ""}
                                        </label> 
                                </div>
                                <div className="form-group">
                                    <label>Currency<sup className="text-danger">*</sup></label>
                                    <select name="currency" className="js-states form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.currency}>
                                        <option >Select Currency</option>
                                        <option value="2">USD</option>
                                        <option value="1">INR</option>
                                    </select>
                                    <div className="help-block"></div>
                                        <label className="error">
                                            {this.state.errors.currency ? this.state.errors.currency : ""}
                                        </label> 
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Hourly Rate <sup className="text-danger">*</sup></label>
                                            <input type="number" step=".01" min="0"   className="form-control" id="hourlyRate" name="hourly_rate" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.hourly_rate}/>
                                            <div className="help-block"></div>
                                                <label className="error">
                                                {this.state.errors.hourly_rate ? this.state.errors.hourly_rate : ""}
                                                </label> 
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Daily Rate <sup className="text-danger">*</sup></label> 
                                            <input type="number" step=".01" min="0"   className="form-control" id="dailyRate" name="daily_rate" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.daily_rate}/>
                                            <div className="help-block"></div>
                                                <label className="error">
                                                {this.state.errors.daily_rate ? this.state.errors.daily_rate : ""}
                                                </label> 
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label>Monthly Rate <sup className="text-danger">*</sup></label>
                                            <input type="number" step=".01" min="0" className="form-control" id="monthlyRate" name="monthly_rate" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.monthly_rate}/>
                                            <div className="help-block"></div>
                                              <label className="error">
                                                {this.state.errors.monthly_rate ? this.state.errors.monthly_rate : ""}
                                                </label> 
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
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
export default AddRemuneration;
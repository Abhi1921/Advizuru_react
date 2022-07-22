import axios from 'axios';
import React from 'react';
import ReactFormInputValidation from "react-form-input-validation";
class AddExperience extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                company_name:"",
                designation:"",
                from_date:"",
                to_date:"",
                description:"",
            },
            allDesignations:[],
            errors: {}
        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
                company_name:"required",
                designation:"required",
                from_date:"required",
                to_date:"required",
                description:"required",    
        });

        this.form.onformsubmit = (fields) => {
            console.log("please submit your form");
        }
    };

    async componentDidMount(){
        this.getAllDesignation();
    }

    getAllDesignation = async(request) => {
        const req = await axios(process.env.REACT_APP_BASE_URL + 'designation');
        console.log(req,'testingApi');
        this.setState((prevState)=>({...prevState, allDesignations:req.data.data}))
    }

    render(){
        return(
            <>

                <div className="modal fade ag-modal show" id="addExperiences" tabIndex="-1" aria-labelledby="addExperiencesLabel" aria-modal="true" role="dialog">
                    <form onSubmit={this.form.handleSubmit}>
                    <input type="hidden" name="experience_id"/>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                            
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addExperiencesLabel">Add Experience</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                                <div className="modal-body">
                                    <div className="form-group">
                                        <label>Company Name<sup className="text-danger">*</sup></label>
                                    
                                        <input type="text" name="company_name" id="companyname" className="js-states form-control" placeholder="" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.company_name}/>
                                        <div className="help-block"></div>
                                        <label className="error">
                                        {this.state.errors.company_name ? this.state.errors.company_name : ""}
                                        </label> 
                                    </div>
                                    <div className="form-group">
                                        <label>Designation<sup className="text-danger">*</sup></label>
                                        <select name="designation" id="designationsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} data-select2-id="select2-data-designationsfield" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.designation}>
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
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>From Date<sup className="text-danger">*</sup></label>
                                                <input type="date" className="form-control" id="fromdate" name="from_date" placeholder="" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.from_date}/>
                                                <div className="help-block"></div>
                                                <label className="error">
                                                {this.state.errors.from_date ? this.state.errors.from_date : ""}
                                                </label> 
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>To Date<sup className="text-danger">*</sup></label>
                                                <input type="date" className="form-control" id="todate" name="to_date" placeholder="" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.to_date}/>
                                                <div className="help-block"></div>
                                                <label className="error">
                                                {this.state.errors.to_date ? this.state.errors.to_date : ""}
                                                </label> 
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="form-group">
                                        <label>Description (Briefly describe the tasks performed earlier using the skill in 50 to
                                                1000 characters)
                                            <sup className="text-danger">*</sup>
                                        </label>
                                        <textarea name="description" id="descriptionn" className="form-control" rows="4" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.description}></textarea>                        
                                        <div className="help-block"></div>
                                        <label className="error">
                                        {this.state.errors.description ? this.state.errors.description : ""}
                                        </label> 
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
export default AddExperience;
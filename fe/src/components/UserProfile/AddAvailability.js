import React from 'react';
import ReactFormInputValidation from "react-form-input-validation";
class AddAvailability extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                availibility: "",
                part_time_availibility:"",
            },  
            errors: {}
        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            availibility: "required",
            part_time_availibility:"required",
            
        });
        this.form.onformsubmit = (fields) => {
            console.log("please submit your form");
        }
    }

render(){
    return(
        <>
            <div className="modal fade ag-modal show" id="addAvailability" tabIndex="-1" aria-labelledby="addAvailabilityLable"  aria-modal="true" role="dialog">
                <form onSubmit={this.form.handleSubmit}>
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="addAvailabilityLable">Add/Update Virtual Availability</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                            <div className="form-field form-group">
                                <label>Availability<sup className="text-danger">*</sup></label>
                                <div className="form-check">
                                    <input id="availibility_1" className="form-check-input" name="availibility" type="radio" value="Immediate"/>
                                    <label htmlFor="availibility_1" className="form-check-label">Immediate</label>
                                </div>
                                <div className="form-check">
                                    <input id="availibility_2" className="form-check-input" name="availibility" type="radio" value="Within one week"/>
                                    <label htmlFor="availibility_2" className="form-check-label">Within one week</label>
                                </div>
                                <div className="form-check">
                                    <input id="availibility_3" className="form-check-input" name="availibility" type="radio" value="Within two weeks"/>
                                    <label htmlFor="availibility_3" className="form-check-label">Within two weeks</label>
                                </div>
                                <div className="form-check">
                                    <input id="availibility_4" className="form-check-input" name="availibility" type="radio" value="Within one month"/>
                                    <label htmlFor="availibility_4" className="form-check-label">Within one month</label>
                                </div>
                                <div className="form-check">
                                    <input id="availibility_5" className="form-check-input" name="availibility" type="radio" value="Within two months"/>
                                    <label htmlFor="availibility_5" className="form-check-label">Within two months</label>
                                </div>
                                <div className="form-check">
                                    <input id="availibility_6" className="form-check-input" name="availibility" type="radio" value="Within three months"/>
                                    <label htmlFor="availibility_6" className="form-check-label">Within three months</label>
                                </div>
                                <div className="form-check">
                                    <input id="availibility_7" className="form-check-input" name="availibility" type="radio" checked="checked" value="More than three months"/>
                                    <label htmlFor="availibility_7" className="form-check-label">More than three months</label>
                                </div>
                                
                                <div className="help-block"></div>
                                           <label className="error">
                                                {this.state.errors.availibility ? this.state.errors.availibility : ""}
                                            </label> 
                            </div>
                            <div className="form-field form-group">
                                <label>Part Time Availability</label>
                                <div className="form-check">
                                    <input id="parttime_1" className="form-check-input" name="part_time_availibility" type="radio" value="8"/>
                                    <label htmlFor="parttime_1" className="form-check-label">Weekly 20 hours</label>
                                </div>
                                <div className="form-check">
                                    <input id="parttime_2" className="form-check-input" name="part_time_availibility" type="radio" value="9"/>
                                    <label htmlFor="parttime_2" className="form-check-label">Weekly 10 hours</label>
                                </div>
                                <div className="form-check">
                                    <input id="parttime_3" className="form-check-input" name="part_time_availibility" type="radio" checked="checked" value="10"/>
                                    <label htmlFor="parttime_3" className="form-check-label">Weekly 30 hours</label>
                                </div>
                                    <label className="error">
                                        {this.state.errors.part_time_availibility ? this.state.errors.part_time_availibility : ""}
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
export default AddAvailability;
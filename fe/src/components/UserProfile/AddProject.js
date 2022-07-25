import React from 'react';
import axios from 'axios';
import ReactFormInputValidation from "react-form-input-validation";
class AddProject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                project_name: "",
                project_duration_month: "",
                skill_id:"",
                project_description:"",
            },
            allSkill:[],
            errors:{}
        };
        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            project_name: "required",
            project_duration_month: "required",
            skill_id:"required",
            project_description:"required",
        });
        this.form.onformsubmit = (fields) => {
            let obj = fields;
            obj.country_id = obj.country;
            obj.currency_id = obj.currency;
            axios.post(process.env.REACT_APP_BASE_URL + 'myproject/add', obj)
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
        this.getAllSkill();
        
        
    }

    getAllSkill = async(request) => {
        const req = await axios(process.env.REACT_APP_BASE_URL + 'all-skills');
        console.log(req, 'reqskill');
        this.setState((prevState)=>({...prevState, allSkill: req.data.allSkills}));
        
        };
     
    render(){
        return(
            <>  
    <div className="modal fade ag-modal show" id="addProjects" tabIndex="-1" aria-labelledby="addProjectsLabel" aria-hidden="true">
        <form onSubmit={this.form.handleSubmit} >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md"> 
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="addProjectLabel">Add Project</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Project Name<sup className="text-danger">*</sup></label>
                            <input type="text" className="form-control" name="project_name" id="project" placeholder="Type Your Project Name"  onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.project_name}/>
                            <div className="help-block"></div>
                            <label className="error">
                            {this.state.errors.project_name ? this.state.errors.project_name : ""}
                            </label> 
                        </div>
                        <div className="form-group">
                            <label>Project Duration (In Month)<sup className="text-danger">*</sup></label>
                            <input type="number" min="0" className="form-control" id="projectduration" name="project_duration_month" placeholder="Type Project Duration" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.project_duration_month}/>
                            <div className="help-block"></div>
                            <label className="error">
                            {this.state.errors.project_duration_month ? this.state.errors.project_duration_month : ""}
                            </label> 
                        </div>
                        <div className="form-group">
                            <label>Skills Used<sup className="text-danger">*</sup></label>
                            <select name="skill_id" id="skill_id" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} multiple="" data-select2-id="select2-data-skills_used" tabIndex="-1" aria-hidden="true" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.skill_id}>
                            <option data-select2-id="select2-data-3-bq7b">Select Skills</option>
                            {
                                this.state.allSkill && this.state.allSkill.map((row) => {
                                    return (<option key = {row.id} value={row.id}>  {row.name }</option>)
                                })
                            }
                                

                            </select>
                          
                            <div className="help-block"></div>
                            <label className="error">
                            {this.state.errors.skill_id ? this.state.errors.skill_id : ""}
                            </label> 
                        </div>
                        <div className="form-group">
                            <label>project_description ( Briefly describe the tasks performed earlier using the skill in 50 to
                            1000 characters)
                            <sup className="text-danger">*</sup>
                            </label>
                            <textarea name="project_description" id="skillproject_descriptionn" className="form-control" rows="4" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.project_description}></textarea>
                            <div className="help-block"></div>
                            <label className="error">
                            {this.state.errors.project_description ? this.state.errors.project_description : ""}
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

export default AddProject;
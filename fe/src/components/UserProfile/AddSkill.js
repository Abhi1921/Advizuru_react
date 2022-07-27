import axios from 'axios';
import React from 'react';
import ReactFormInputValidation from "react-form-input-validation";
import Ratings from 'react-ratings-declarative';

class AddSkill extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                skill: "",
                skill_level: "",
                year_of_experience: "",
                support_project: "",
                implementation: "",
                self_assesment:"",
                description: "",
            },
            allSkills:[],
            rating: 0,
            experience:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            errors: {}
        };

        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            skill: "required",
            skill_level: "required",
            year_of_experience: "required",
            support_project: "required",
            implementation: "required",
            self_assesment:"required",
            description: "required",
        });
        this.form.onformsubmit = (fields) => {
           
            let obj = fields;
            obj.self_assesment = this.state.rating;
            obj.skill_id = fields.skill;

            // console.log("please submit your form", obj);



            axios.post(process.env.REACT_APP_BASE_URL + 'user-skill-details/add', obj)
            .then(function (response) {
                console.log(response);
                alert("Saved Successfully");
            }) 
            .catch(function (error) {
                console.log(error, 'error');
                return error;
            }); 
        }

        this.changeRating = this.changeRating.bind(this);

    };
    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }


    async componentDidMount() {
        this.getAllSkill();
        
    }

    getAllSkill = async(request) => {
        const req = await axios(process.env.REACT_APP_BASE_URL + 'all-skills');
        this.setState((prevState)=>({...prevState, allSkills: req.data.allSkills}));
    };

    changeRating( newRating ) {
        this.setState({
            rating: newRating
        });
    }

    saveSkills = () => {
        // await axios.post(process.env.REACT_APP_BASE_URL + 'contact_us', request)
        //     .then(function (response) {
        //         console.log(response);
        //         alert("Saved Successfully");
        //     }) 
        //     .catch(function (error) {
        //         console.log(error, 'error');
        //         return error;
        //     }); 
    };
    
        
    
    render(){
        return(
        <> 
        <div className="modal fade ag-modal" id="addSkills" tabIndex="-1" aria-labelledby="addSkillsLabel" aria-hidden="true">
        <form onSubmit={this.form.handleSubmit} >
            <input type="hidden" name="skill_id"/>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="addSkillsLabel">Add Skill</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
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
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Skill Level<sup className="text-danger">*</sup></label>
                                <select className="form-select" placeholder="Select Skill Level" name="skill_level" id="single" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.skill_level}>
                                <option value="">Select Skill Level</option>
                                <option value="advanced">Advanced</option>
                                <option value="expert">Expert</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error">
                                {this.state.errors.skill_level ? this.state.errors.skill_level : ""}
                                </label> 
                            </div>
                        </div>
                        
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Year Of Experience<sup className="text-danger">*</sup></label>
                                <select name="year_of_experience" id="yearofexp" className="form-select" placeholder="Year Of Experience" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.year_of_experience}>
                                <option value="">Select</option>
                                {
                                this.state.experience.map((year)=> {
                                return (
                                <option value={year} key={year.toString()}>{year}</option>
                                );
                                })
                                }
                                </select>
                                <div className="help-block"></div>
                                <label className="error">
                                {this.state.errors.year_of_experience ? this.state.errors.year_of_experience : ""}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Support Project</label>
                                <select name="support_project" id="supportproject" className="form-select" placeholder="Year Of Experience" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.support_project}>
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error">
                                {this.state.errors.support_project ? this.state.errors.support_project : ""}
                                </label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Implementations<sup className="text-danger"></sup></label>
                                <select name="implementation" id="implementations" className="form-select" placeholder="Implementations" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.implementation}>
                                <option value="">Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                </select>
                                <div className="help-block"></div>
                                <label className="error">
                                {this.state.errors.implementation ? this.state.errors.implementation : ""}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Self Assesment</label>
                        <div className="rating-wrap">
                        <Ratings
                            rating={this.state.rating}
                            widgetRatedColors="blue"
                            changeRating={this.changeRating}
                        >
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget />
                            <Ratings.Widget  />
                            <Ratings.Widget />
                        </Ratings>
                        </div>
                        <div className="help-block"></div>
                        <label className="error">
                        {this.state.errors.self_assesment ? this.state.errors.self_assesment : ""}
                        </label>
                    </div>
                    <div className="form-group">
                        <label className="d-inline-block">Description (Briefly describe the tasks performed earlier using the skill in 50 to 1000 characters)
                        <sup className="text-danger">*</sup>
                        </label>
                        <textarea name="description" id="skilldescriptionn" className="form-control" rows="4" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.description}></textarea>
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
export default AddSkill;
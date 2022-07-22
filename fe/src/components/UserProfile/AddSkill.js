import axios from 'axios';
import React from 'react';
import ReactFormInputValidation from "react-form-input-validation";
import Ratings from 'react-ratings-declarative';
import { MutatingDots } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AddSkill extends React.Component{
    constructor(props){
        super(props);
        let initialFields = {
            skill_id: "",
            skill_level: "",
            year_of_experience: "",
            support_project: "",
            implementation: "",
            self_assesment: "",
            description: "",
        };
        this.state = {
            fields : initialFields,
            allSkills: [],
            isLoading: false,
            hasError : false,
            rating: 0,
            experience:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
            errors: {}
        };

        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            x: "required",
            skill_level: "required",
            year_of_experience: "required",
            support_project: "required",
            implementation: "required",
            self_assesment:"required",
            description: "required",
        });
        this.form.onformsubmit = (fields) => {
            if(Object.keys(this.state.errors).length == 0){
                let obj = fields;
                obj.self_assesment = this.state.rating;
                // obj.skill_id = fields.skill;
                this.setState({
                    isLoading: true
                });
                let vm = this;
                axios.post(process.env.REACT_APP_BASE_URL + 'user-skill-details/add', obj)
                    .then(function (response) {
                    toast.info(response.data.message);
                    vm.setState({
                        isLoading: false
                    });
                    vm.setState({
                        fields: initialFields
                    });
                })
                .catch(function (error) {
                    console.log(error, 'error');
                    return error;
                });
            }

            
            
        }

        this.changeRating = this.changeRating.bind(this);
        this.getButtonSection = this.getButtonSection.bind(this);
        this.getLoader = this.getLoader.bind(this);
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

    createNumberOption = (limit) => {
        return [...Array(limit)].map((x, i) => {
            return (<option value={i} key={ i}>{i}</option>)
        })
    }
    
    getLoader = () => {
        return (
            <MutatingDots
                height="100"
                width="100"
                color='grey'
                ariaLabel='loading'
            />
        )
    }

    getButtonSection = () => { 
        return (
            <div className="modal-footer">
                <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
            </div>
        );
    }

    
    render(){
        return(
            <div className="modal fade ag-modal" id="addSkills" tabIndex="-1" aria-labelledby="addSkillsLabel" aria-hidden="true">
                <ToastContainer />
                <form onSubmit={this.form.handleSubmit} >
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addSkillsLabel">Add Skill</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Skill<sup className="text-danger">*</sup></label>
                                    <select name="skill" id="skillsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-skillsfield" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.skill_id}>
                                        {
                                        this.state.allSkills && this.state.allSkills.map((row) => {
                                        return (
                                        <option key = {row.id.toString()} value={row.id}>  {row.name }</option>
                                        )
                                        })
                                        }
                                    </select>
                                    
                                    <div className="help-block"></div>
                                    <label className="error">
                                    {this.state.errors.skill_id ? this.state.errors.skill_id : ""}
                                    </label> 
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Skill Level<sup className="text-danger">*</sup></label>
                                            <select className="form-select" placeholder="Select Skill Level" name="skill_level" id="single" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state._id_level}>
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
                                            {
                                                this.createNumberOption(10)
                                            }
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
                                            {
                                                this.createNumberOption(20)
                                            }
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
                                        <Ratings rating={this.state.rating} widgetRatedColors="green" changeRating={this.changeRating} >
                                            {
                                                [...Array(5)].map(() => {
                                                    return (<Ratings.Widget widgetDimension="25px" />)
                                                })
                                            }
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
                            {
                                this.state.isLoading ? this.getLoader() : this.getButtonSection()
                            }
                            
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default AddSkill;
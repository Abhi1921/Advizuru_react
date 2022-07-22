import React from "react";
import Project from "../../components/UserProfile/Project";
import Skill from "../../components/UserProfile/Skill";
import ProfileProject from "../../components/UserProfile/Project";
import AddProject from "../../components/UserProfile/AddProject";
import AddSkill from "../../components/UserProfile/AddSkill";
import AddEducation from "../../components/UserProfile/AddEducation";
import Education from "../../components/UserProfile/Education";
import Experience from "../../components/UserProfile/Experience";
import AddExperience from "../../components/UserProfile/AddExperience";
import Others from "../../components/UserProfile/Other";
import AddRemuneration from "../../components/UserProfile/AddRemuneration";
import AddVisa from "../../components/UserProfile/AddVisa";
import AddAvailability from "../../components/UserProfile/AddAvailability";
import TopNav from "../Common/TopNav";

class UserDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    };
      

    render(){
        return(
            <>
            <div className="wrapper bg-gray">
                <TopNav></TopNav>
            
                            
            <div className="main-wrapper spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                        <div className="profile-heading bg-light fw-bold py-2 ps-3 mb-2 d-block d-md-none">
                            Profile              
                        </div>
                        <button className="btn_filter d-none"><i className="flaticon flaticon-filter"></i>
                        <span>Filter</span></button> 
                        <input type="hidden" name="isSearchedProfile"  className="_searchele"/>
                        <input type="hidden" id="searchedProfile" name="searchedProfile"  className="_searchele"/>
                        <div className="profile-block">
                            <div className="profile-card bg-white p-2 rounded mb-4 bg-shadow">
                                <div className="update-prof profile-parent mb-2 mb-md-3 d-flex align-items-start">
                                    <div className="d-inline-block img-div position-relative col-4">
                                    <span className="d-inline-block position-relative">
                                    <img src="assets/img/defaultImg.jpeg"  className="img-fluid" alt="profile fig" width="150" height="150"/> 
                                    </span>
                                    </div>
                                    <div className="d-flex flex-column justify-content-start edit-prof ps-3 col-8">
                                    <h5 className="text-truncate fw-bold text-uppercase me-auto w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Test P">
                                        Test P            
                                    </h5>
                                    <div className="d-flex my-3 text-nowrap">
                                        <span className="orng-bg rounded-circle me-2 d-flex align-items-center justify-content-between">
                                        <i className="fas fa-star text-white fs-12 mx-auto"></i>
                                        </span> Premium Account
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="upload-prof">
                                            <a className="text-white" href="/edit-partner-profile/81074"><i className="fal fa-pencil-alt fs-12"></i></a>
                                        </div>
                                        <div className="upload-prof">
                                            <label htmlFor="upload"><i className="fal fa-camera upload_img_profile_picture fs-12 dz-clickable"></i></label>
                                            <div className="progress-block"></div>
                                        </div>
                                        <ul className="rating mb-0 list-inline p-1 col-8 justify-content-around d-flex">
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex border-top border-bottom p-2 align-items-center">
                                    <i className="fas fa-map-marker-alt me-2"></i>
                                    <span className="lblValue">155 De  Mayo Road, Chandigarh, Chandigarh, India 140603</span>
                                </div>
                                <div className="badge-block d-flex justify-content-between align-items-center d-none">
                                    <ul className="medal-list list-inline col-6 p-1 m-1 justify-content-between d-flex">
                                    
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-yellow"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-blue"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-purple"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-green"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-red"></i>
                                    </li>
                                    </ul>
                                </div>
                                <div className="d-flex flex-column rounded bg-light-success p-2 mt-2">
                                    <div className="d-flex justify-content-between">
                                    <span className="complete d-flex mb-1 mt-2">
                                        Profile Strength
                                        
                                    </span>
                                    <span className="complete mt-2"><b>15%</b></span>
                                    </div>
                                    <div className="progress col-12">
                                    <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                
                            </div>
                            <script>
                                var uploadUrl = "https://www.advizuru.com/profile/image/upload";
                            </script>
                            <div className="gray-card mb-4 bx-shadow">
                                <div className="card-title pb-2 d-flex align-items-center">
                                    <h6>Skill</h6>
                                </div>
                                <div id="experience_block">
                                    <ul className="u-list list-unstyled mb-1 d-none">
                                    
                                    </ul>
                                    <div className="d-flex">
                                    <span className="lblValue fw-bold">null</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gray-card mb-4 bx-shadow">
                                <div className="card-title pb-2 d-flex align-items-center">
                                    <h6>Remuneration</h6>
                                    
                                </div>
                                <div id="remuneration_block">
                                    <ul className="u-list list-unstyled mb-2 d-flex row me-0">
                                    {/* <li className="col-4">
                                        <span>Country: </span>
                                        <span className="lblValue fw-bold">INR </span>
                                    </li> */}
                                    <li className="col-4">
                                        <label>Hourly Rate :</label>
                                        <span className="lblValue fw-bold">₹ 5.00</span>
                                    </li>
                                    <li className="col-4">
                                        <label>Daily Rate :</label>
                                        <span className="lblValue fw-bold">₹ 40.00</span>
                                    </li>
                                    </ul>
                                    <ul className="u-list list-unstyled mb-2 d-flex row me-0">
                                    {/* <li className="col-4">
                                        <span>Country: </span>
                                        <span className="lblValue fw-bold">INR </span>
                                    </li> */}
                                    <li className="col-4">
                                        <label>Hourly Rate :</label>
                                        <span className="lblValue fw-bold">₹ 15.00</span>
                                    </li>
                                    <li className="col-4">
                                        <label>Daily Rate :</label>
                                        <span className="lblValue fw-bold">₹ 120.00</span>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="gray-card mb-4 bx-shadow">
                                <div className="card-title pb-2 d-flex align-items-center">
                                    <h6>Availability</h6>
                                </div>
                                <div id="availability_block">
                                    <ul className="u-list list-unstyled  d-flex mb-2">
                                    <li className="col-6">
                                        <label>Full Time :</label>
                                        <span className="lblValue fw-bold">More than three months</span>
                                    </li>
                                    <li className="col-6">
                                        <label>Part Time :</label>
                                        <span className="lblValue fw-bold">Weekly 30 hours</span>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion mb-3 gray-acc" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Education 
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div id="education_block">
                                            <ul className="u-list list-unstyled mb-1 d-none">
                                                <li>
                                                <span>Degree :</span>
                                                <span className="lblValue">PG Diploma in Accommodation Operation and Management</span>
                                                </li>
                                                <li>
                                                <span>Major :</span>
                                                <span className="lblValue">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span>
                                                </li>
                                                <li>
                                                <span>Completion Year :</span>
                                                <span className="lblValue">2017</span>
                                                </li>
                                                <li>
                                                <span>Institution :</span>
                                                <span className="lblValue">APJ Abdul Kalam Technological University</span>
                                                </li>
                                            </ul>
                                            <div className="d-flex">
                                                <span>Degree :</span>
                                                <span className="lblValue fw-bold">PG Diploma in Accommodation Operation and Management - 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="profile-info" id="profile_info_block">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed fw-bold text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className="list-unstyled prof-list mb-0">
                                                <li>
                                                <span>City :</span>
                                                <span className="lblValue">Chandigarh</span>
                                                </li>
                                                <li>
                                                <span>Profession :</span>
                                                <span className="lblValue">Techno Functional</span>
                                                </li>
                                                <li>
                                                <span>Company: </span>
                                                <span className="lblValue">PPN Solutions</span>
                                                </li>
                                                <li>
                                                <span>Mobile :</span>
                                                <span className="lblValue">9053262000</span>
                                                </li>
                                                <li>
                                                <span>Email id :</span>
                                                <span className="lblValue">test7@yopmail.com</span>
                                                </li>
                                                <li>
                                                <span>Landline :</span>
                                                <span className="lblValue">9053262000</span>
                                                </li>
                                                <li>
                                                <span>Address :</span>
                                                <span className="lblValue">155 De  Mayo Road, Chandigarh, Chandigarh, India 140603</span>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8 col-12">
                        <div className="tab-wrap full-tab">
                            <nav className="cust-nav-tab">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-skill-tab" data-bs-toggle="tab" data-bs-target="#nav-skill" type="button" role="tab" aria-controls="nav-skill" aria-selected="true">Skill</button>
                                    <button className="nav-link" id="nav-project-tab" data-bs-toggle="tab" data-bs-target="#nav-project" type="button" role="tab" aria-controls="nav-project" aria-selected="false">Project</button>
                                    <button className="nav-link" id="nav-edu-tab" data-bs-toggle="tab" data-bs-target="#nav-edu" type="button" role="tab" aria-controls="nav-edu" aria-selected="false">Education</button>
                                    <button className="nav-link" id="nav-exp-tab" data-bs-toggle="tab" data-bs-target="#nav-exp" type="button" role="tab" aria-controls="nav-exp" aria-selected="false">Experience</button>
                                    <button className="nav-link" id="nav-other-tab" data-bs-toggle="tab" data-bs-target="#nav-other" type="button" role="tab" aria-controls="nav-other" aria-selected="false">Other</button>
                                </div>
                            </nav>
                            <div className="tab-content cust-tab" id="nav-tabContent">
                                <Skill></Skill>
                               
                                <AddSkill></AddSkill>
                                    
                                <ProfileProject></ProfileProject>
                                
                                <AddProject></AddProject>
                                
                                
                                <Education></Education>
                                <AddEducation></AddEducation>
                                <Experience></Experience>
                                
                                <AddExperience></AddExperience>
                                <Others></Others>
                                <AddRemuneration></AddRemuneration>
                                <AddAvailability></AddAvailability>
                                <AddVisa></AddVisa>
                               
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            </>
        )
    }

}
export default UserDashboard;
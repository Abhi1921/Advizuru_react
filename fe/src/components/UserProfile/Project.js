import React from "react";
class ProfileProject extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <>
                <div className="tab-pane fade" id="nav-project" role="tabpanel" aria-labelledby="nav-project-tab">
                <div className="d-flex justify-content-end p-2">
                    <a href="" data-bs-toggle="modal" data-bs-target="#addProjects" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1" title="Add Project">Add Project<i className="fas fa-plus-circle m-0"></i></a>
                </div>
                <div className="project-list py-0 ps-3 pe-2">
                    <div id="record-list-projects" data-url="https://www.advizuru.com/get-profile-status-list/Project" data-listurl="/project-partner-profile">
                        <div className="skill-card col-12 d-flex rounded py-1 flex-column flex-lg-row align-items-center mb-2 position-relative">
                            <ul className="list-unstyled d-flex row m-0 col-lg-3 col-12 card-title p-2 p-lg-3">
                            <li className="col-12 d-flex justify-content-between align-items-center p-0">
                                <h6 className="mb-0 text-white w-100 d-flex"> 
                                    <span className="fw-normal fs-14 me-2">Project Name : </span>
                                    <span className="lblValue text-truncate text-white fw-bold" data-bs-toggle="tooltip" data-bs-html="true" title="CRM" data-bs-original-title="CRM"> CRM</span>
                                </h6>
                            </li>
                            </ul>
                            <div className="d-flex col-lg-9 col-11 flex-column px-md-0">
                            <ul className="list-unstyled d-flex row p-1 m-0 bg-white rounded align-items-center">
                                <li className="d-flex flex-md-row flex-column col-md-4 col-12">
                                    <label>Duration:</label>
                                    <span className="lblValue ms-1"> 12 Months </span>
                                </li>
                                <li className="col-12 col-md-6 d-flex flex-lg-row flex-column">
                                    <span>Skill :</span>
                                    <span className="lblValue d-flex ms-1 text-truncate" data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="LARAVEL">LARAVEL</span>
                                </li>
                                <li className="col-md-2 col-12 d-flex justify-content-end">
                                    <div className="btn-group btn-group-sm bg-white rounded">
                                        <button href=" " data-bs-toggle="modal" data-bs-target="#addProjects"  className="btn btn-outline-secondary m-0">
                                        Edit
                                        </button>
                                        <button href="" className="btn btn-outline-danger m-0">
                                        Delete
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            <ul className="list-unstyled d-flex row p-1 m-0 mt-1 bg-white rounded">
                                <li className="d-flex flex-column">
                                    <span>Project Description : </span>
                                    <span className="lblValue"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </span>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </>
        )
    }
}
export default ProfileProject;
import React from 'react';
class Experience extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div className="tab-pane fade" id="nav-exp" role="tabpanel" aria-labelledby="nav-exp-tab">
                    <div className="d-flex justify-content-end p-2">
                        <a href="" data-bs-toggle="modal" data-bs-target="#addExperiences" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1" title="Add Work Experience">Add Experience<i className="fas fa-plus-circle m-0"></i></a>
                    </div>
                    <div className="exp-list experience_list">
                        <div id="record-list-experiences" className="row m-1 g-1 ps-2 pe-1" data-url="https://www.advizuru.com/get-profile-status-list/Experience" data-listurl="/project-partner-profile">
                            <div className="skill-card col-12 d-flex rounded py-1 flex-column flex-lg-row align-items-center mb-2 position-relative">
                                <ul className="list-unstyled d-flex row m-0 col-lg-3 card-title p-lg-3 p-2 col-12">
                                <li className="col-12 d-flex justify-content-between align-items-center p-0">
                                    <h6 className="mb-0 text-white d-flex flex-column flex-md-row"> 
                                        <span className="fw-normal fs-14 me-2">Company Name : </span>
                                        <span className="lblValue text-truncate text-white fs-bold" data-bs-toggle="tooltip" data-bs-html="true" title="PPN" data-bs-original-title="PPN"> PPN</span>
                                    </h6>
                                </li>
                                </ul>
                                <div className="d-flex col-lg-9 col-11 flex-column px-md-0">
                                    <ul className="list-unstyled d-flex row p-1 m-0 bg-white rounded">
                                        <li className="col-12 col-md-4 d-flex flex-md-column">
                                            <span>Designation : </span>
                                            <span className="lblValue"> null</span>
                                        </li>
                                        <li className="col-12 col-md-3 d-flex flex-md-column">
                                            <span>From Date : </span>
                                            <span className="lblValue"> 19th Oct, 2021</span>
                                        </li>
                                        <li className="col-12 col-md-3 d-flex flex-md-column">
                                            <span>To Date : </span>
                                            <span className="lblValue"> 7th Oct, 2021</span>
                                        </li>
                                        <li className="col-12 col-md-2 align-items-end d-flex flex-column">
                                            <div className="btn-group btn-group-sm bg-white rounded">
                                                <button href=" " data-bs-toggle="modal" data-bs-target="#addExperiences"  className="btn btn-outline-secondary m-0">
                                                Edit                 
                                                </button>
                                                <button href=" "  className="btn btn-outline-danger m-0">
                                               Delete                   
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled d-flex row p-1 m-0 mt-1 bg-white rounded">
                                        <span>Description : </span>
                                        <span className="lblValue minimize"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                        </span>
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
export default Experience;
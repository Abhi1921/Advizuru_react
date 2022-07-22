import React from 'react';
class Education extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className="tab-pane fade" id="nav-edu" role="tabpanel" aria-labelledby="nav-edu-tab">
                    <div className="d-flex justify-content-end p-2">
                        <a href=" " data-bs-toggle="modal" data-bs-target="#addEducation" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1" title="Add Education">Add Education<i className="fas fa-plus-circle m-0"></i></a>
                    </div>
                    <div className="edu-list">
                        <div className="">
                            <div className="row m-0 gr-2" id="record-list-educations" data-url="https://www.advizuru.com/get-profile-status-list/Education" data-listurl="/project-partner-profile">
                                <div className="col-12 py-0 ps-3 pe-2 mb-3">
                                <div className="skill-card col-12 d-flex flex-column flex-lg-row rounded align-items-center position-relative">
                                    <ul className="list-unstyled d-flex mt-2 mb-3 p-0 m-0 col-lg-3 col-12 card-title">
                                        <li className="col-12 d-flex justify-content-start align-items-center text-white text-nowrap p-2">
                                            <span className="fw-normal fs-14 me-2">Degree : </span>
                                            <span className="lblValue text-truncate text-white fw-bold col-md-8 col-9" data-bs-toggle="tooltip" data-bs-html="true" title="PG Diploma in Accommodation Operation and Management" data-bs-original-title="PG Diploma in Accommodation Operation and Management"> PG Diploma in Accommodation Operation and Management</span>                           
                                        </li>
                                    </ul>
                                    <ul className="list-unstyled d-flex px-2 m-0 col-lg-9 col-12 flex-md-row flex-column my-1">
                                        <li className="col-12 col-md-5 d-flex flex-column">
                                            <span>Institution :</span>
                                            <span className="lblValue text-truncate pe-3" data-bs-toggle="tooltip" data-bs-html="true" title="APJ Abdul Kalam Technological University"> APJ Abdul Kalam Technological University</span>
                                        </li>
                                        <li className="col-12 col-md-2 d-flex flex-column">
                                            <span>Major : </span>
                                            <span className="lblValue"> t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span>
                                        </li>
                                        <li className="col-12 col-md-3 d-flex flex-column">
                                            <span>Completion Year : </span>
                                            <span className="lblValue"> 2017</span>
                                        </li>
                                        <li className="col-md-2 col-12 d-flex align-items-center justify-content-end mb-0">
                                            <div className="btn-group btn-group-sm bg-white rounded">
                                            <button  data-bs-toggle="modal" data-bs-target="#addEducation"  className="btn btn-outline-secondary m-0">
                                            <i className="fas fa-edit m-0"></i>                                 
                                            </button>
                                            <button   className="btn btn-outline-danger m-0">
                                            <i className="fas fa-trash-alt m-0"></i>                                 
                                            </button>
                                            </div>
                                        </li>
                                    </ul>
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
export default Education;
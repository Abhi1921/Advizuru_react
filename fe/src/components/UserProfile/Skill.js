import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 
class Skill extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className="tab-pane fade active show" id="nav-skill" role="tabpanel" aria-labelledby="nav-skill-tab">
                    <div className="d-flex justify-content-end p-2">
                          <a href="" data-bs-toggle="modal" data-bs-target="#addSkills" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1" title="Add Skills">Add Skill<i className="fas fa-plus-circle m-0"></i></a>
                    </div>
                    <div className="exp-list skill-list">
                        <div id="record-list-skills" className="row m-0 g-2 py-0 ps-3 pe-2" data-url="https://www.advizuru.com/get-profile-status-list/Skill" data-listurl="/project-partner-profile">
                            <div className="exp-card skill-card col-12 d-flex rounded p-0 flex-column flex-lg-row mb-2 position-relative">
                                <ul className="list-unstyled d-flex mt-2 mb-3 p-0 m-0 col-lg-3 col-12 card-title">
                                <li className="col-12 d-flex justify-content-between align-items-center p-2">
                                    <h6 className="lblValue text-truncate text-white mb-0" data-bs-toggle="tooltip" data-bs-html="true" title="LARAVEL"> 
                                        LARAVEL            
                                    </h6>
                                </li>
                                </ul>
                                <ul className="list-unstyled d-flex px-3 m-0 col-lg-9 col-12 flex-md-row flex-column my-1">
                                <li className="col-md-3 col-12 d-flex flex-md-column flex-row mb-0">
                                    <span>Level :</span>
                                    <span className="lblValue"> Expert</span>
                                </li>
                                <li className="col-md-3 col-12 d-flex flex-md-column flex-row mb-0">
                                    <span>Experience(Yrs) : </span>
                                    <span className="lblValue"> 5</span>
                                </li>
                                <li className="col-md-4 col-12 d-flex flex-md-column flex-row align-items-start mb-0">
                                    <span>Self Assesment : </span>
                                    <ul className="list-inline">
                                        <div className="rating-list fs-12" id="star_rating">
                                            <input disabled="" type="radio" id="star519761" name="selfassmnt19761" value="5"/>
                                            <label className="full" htmlFor="star519761" title="Awesome - 5 stars"></label>
                                            <input disabled="" type="radio" id="star4half19761" name="selfassmnt19761" value="4 and a half"/>
                                            <label className="half" htmlFor="star4half19761" title="Pretty good - 4.5 stars"></label>
                                            <input disabled="" type="radio" id="star419761" name="selfassmnt19761" value="4"/>
                                            <label className="full" htmlFor="star419761" title="Pretty good - 4 stars"></label>
                                            <input disabled="" type="radio" id="star3half19761" name="selfassmnt19761" value="3 and a half"/>
                                            <label className="half" htmlFor="star3half19761" title="Meh - 3.5 stars"></label>
                                            <input disabled="" type="radio" id="star319761" name="selfassmnt19761" value="3"/>
                                            <label className="full" htmlFor="star319761" title="Meh - 3 stars"></label>
                                            <input disabled="" type="radio" id="star2half19761" name="selfassmnt19761" value="2 and a half"/>
                                            <label className="half" htmlFor="star2half19761" title="Kinda bad - 2.5 stars"></label>
                                            <input disabled="" type="radio" id="star219761" name="selfassmnt19761" value="2"/>
                                            <label className="full" htmlFor="star219761" title="Kinda bad - 2 stars"></label>
                                            <input disabled="" type="radio" id="star1half19761" name="selfassmnt19761" value="1 and a half"/>
                                            <label className="half" htmlFor="star1half19761" title="Meh - 1.5 stars"></label>
                                            <input disabled="" type="radio" id="star119761" name="selfassmnt19761" value="1"/>
                                            <label className="full" htmlFor="star119761" title="Sucks big time - 1 star"></label>
                                            <input disabled="" type="radio" id="starhalf19761" name="selfassmnt19761" value="half"/>
                                            <label className="half" htmlFor="starhalf19761" title="Sucks big time - 0.5 stars"></label>
                                        </div>
                                    </ul>
                                </li>
                                <li className="col-md-2 col-12 d-flex align-items-center justify-content-end mb-0">
                                    <div className="btn-group btn-group-sm bg-white rounded" role="group">
                                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addSkills"   data-toggle="tooltip" data-placement="top">
                                        Edit
                                        </button>
                                        
                                        <button type="button" className="btn btn-outline-danger"  data-toggle="tooltip" data-placement="top">
                                        Delete
                              
                                        </button>
                                        
                                    </div>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="comment-section skillCommnents mt-3">
                        <h4>Comments</h4>
                        <div id="record-list-comments" data-url="https://www.advizuru.com/get-profile-status-list/Comments" data-listurl="/project-partner-profile">
                            <div className="text-center">
                                <h3> No Comment Found!</h3>
                            </div>
                        </div>
                        <div className="d-flex align-items-start">
                            <img src="assets/img/no-user.png"  className="img-fluid rounded-circle me-3" alt="user" width="50" height="50"/>
                            <div className="text-wrap form-group">
                                <textarea className="form-control mb-4" rows="6" placeholder="Write your comment here* ( 50 to 200 words limit)" name="skillfeedbackcomment" id="skillfeedbackcomment"></textarea>
                                <div className="help-block"></div>
                                <button type="submit" className="btn btn-primary btn-sm saveBtn" >Post Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Skill;
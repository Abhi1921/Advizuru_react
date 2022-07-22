import {Link} from "react-router-dom";
import $ from 'jquery';
function SignUp(props){

    function handleClick() {
        $("#SignUpModal").modal("hide");
      }

    return(
        <>
            <div className="modal fade" id="SignUpModal" tabIndex="-1" aria-labelledby="SignUpModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg-8">
                    <div className="modal-content signUp_modal">
                        <div className="modal-body p-0">
                            <h5><b>Let’s get started!</b> First, tell us what you’re looking for.</h5>
                            <div className="row g-0">
                                <div className="col-md-6">
                                    <div className="block org-block">
                                        <i className="flaticon flaticon-team"></i>
                                        <p>Collaborate with other organization 
                                            for sharing business leads, 
                                            subcontracting resources & projects 
                                            and hiring free lancers 
                                        </p>
                                        <h6>Find, collaborate with, Organization 
                                            & skilled professionals.</h6>
                                        <Link className="btn btn-primary w-100" to="project-owner" onClick={handleClick} >Signup As Organization</Link>
                                    </div>
                                </div>
                                <div className="col-md-6 bg-light-blue">
                                    <div className="block individual-block">
                                        <i className="flaticon flaticon-user-2"></i>
                                        <p>I’m looking for projects, business leads 
                                            & training                                    
                                        </p>
                                        <h6>Find projects, share business leads, be 
                                            part of virtual team & enhance your skill 
                                            as trainee or trainer</h6>
                                        <Link className="btn btn-outline-primary w-100"    to="project-partner" onClick={handleClick}>Signup As Individual</Link>
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

export default SignUp;
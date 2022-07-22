import React, { Component } from 'react';
import AddSubContract from './AddSubContract';
class SubContract extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div className="tab-pane fade" id="sub-contracting" role="tabpanel" aria-labelledby="sub-contracting-tab">
                    <div className="d-flex justify-content-end p-2">
                    <a href=" " data-bs-toggle="modal" data-bs-target="#addContractProject" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1"> Add SubContract<i className="fal fa-user-plus"></i></a>
                        <AddSubContract></AddSubContract>
                    </div>
                    <div className="listing p-2 pt-0">
                        <div id="record-list-sub-contracting" className="row g-2 m-0" data-url="https://www.advizuru.com/my-project-listing" data-listurl="https://www.advizuru.com/org-recruitment-list">
                        <div className="subcontractblock col-lg-4 col-md-6 col-12">
                            <div className="d-card p-0 d-flex flex-column">
                            <div className="card-header">
                                <span>ID :</span>
                                <span className="lblValue">
                                <a href="/project-detail/MjUx194">251</a>
                                </span>
                            </div>
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item d-flex">
                                    <span>Project :</span>
                                    <span className="lblValue">abc</span>
                                </li>
                                <li className="list-group-item d-flex text-nowrap">
                                    <span>Skill Required :</span>
                                    <span className="lblValue text-truncate" data-bs-toggle="tooltip" data-bs-html="true" title="Laravel 122,Php programmer laravel framework"> Laravel 122,Php programmer laravel framework </span>
                                </li>
                                <li className="list-group-item d-flex">
                                    <span>Effort Required :</span>
                                    <span className="lblValue">2 Days</span>
                                </li>
                                <li className="list-group-item d-flex">
                                    <span>Status :</span>
                                    <span className="lblValue"> Active</span>
                                </li>
                                <li className="list-group-item d-flex">
                                    <span>Interest Received :</span>
                                    <span className="lblValue"> 2</span>
                                </li>
                                </ul>
                            </div>
                            <div className="card-footer justify-content-end d-flex">
                                <a href=""> Close <i className="fa fa-lock"></i>
                                </a>
                                <a href="" data-bs-toggle="modal" data-bs-target="#addContractProject" className="btn-sm btn-secondary btn bg-gradient mx-2">
                                <i className="fas fa-pencil-alt m-0"></i>
                                </a>
                                <a href="">
                                <i className="fas fa-trash-alt m-0"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div id="pagination-record-list-sub-contracting"></div>
                    </div>
                </div>
            </>
        )
    }
}
export default SubContract;
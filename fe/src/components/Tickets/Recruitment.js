import React from 'react';
import AddRecruitment from './AddRecruitment';
class Recruitment extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return( <>
          <div className="tab-pane fade show active" id="recruitment" role="tabpanel" aria-labelledby="recruitment-tab">
            <div className="d-flex justify-content-end p-2">
                <a href="" data-bs-toggle="modal" data-bs-target="#addRecruitment" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1"> Add Recruitment <i className="fal fa-user-plus"></i></a>
            </div>
            <AddRecruitment></AddRecruitment>
            <div className="listing p-2 pt-0">
                <div id="record-list-recruitment" className="row m-0" data-url="https://www.advizuru.com/org-recruitment-listing" data-listurl="https://www.advizuru.com/org-recruitment-list">
                    <div className="exp-card recruitmentblocks col-md-6 border border-3 border-white">
                        <ul className="list-unstyled">
                        <li>
                            <span>ID :</span>
                            <span className="lblValue">305</span>
                        </li>
                        <li>
                            <span>Designation :</span>
                            <span className="lblValue"> Laravel Developer</span>
                        </li>
                        <li>
                            <span>Experience :</span>
                            <span className="lblValue"> 14-6</span>
                        </li>
                        <li>
                            <span>Education Qualification :</span>
                            <span className="lblValue"> </span>
                        </li>
                        <li>
                            <span>Status :</span>
                            <span className="lblValue">Inactive</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled align-self-center my-2">
                        <li className="flex-end">
                            <a href="" title="change"  className="btn bg-gradient btn-outline-success">
                            Re-Open <i className="fas me-1 fa-unlock-alt"></i>
                            </a>
                            <a href="" data-bs-toggle="modal" data-bs-target="#addRecruitment" className="btn btn-secondary bg-gradient mx-2">
                            <i className="fas fa-pencil-alt"></i>
                            </a>
                            <a href="" className="btn btn-danger bg-gradient">
                            <i className="fas fa-trash-alt"></i>
                            </a>
                        </li>
                        </ul>
                    </div>
                    
                </div>
                <div id="pagination-record-list-recruitment">
                    <div className="list-foot" id="pagination_ele">
                        <span className="text-muted small">Showing 1 to 10 of 13 entries</span>
                        <nav className="cust-pagination" aria-label="...">
                        <ul className="pagination mb-0">
                            <li className="page-item prev active disabled">
                                <a className="page-link" href="" data-page="1"><i className="fal fa-angle-double-left fa-lg"></i></a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" data-page="1" href="">1</a>
                            </li>
                            <li className="page-item ">
                                <a className="page-link" data-page="2" href="">2</a>
                            </li>
                            <li className="page-item next ">
                                <a className="page-link" data-page="2" href=""><i className="fal fa-angle-double-right fa-lg"></i></a>
                            </li>
                        </ul>
                        </nav>
                    </div>
                </div>
            </div>
            </div>
        </>
    )}
}
export default Recruitment;
import React from 'react';
import AddBusinessLeads from './AddBusinessLeads';
class BusinessLeads extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
        <>
            <div className="tab-pane fade" id="nav-member" role="tabpanel" aria-labelledby="nav-member-tab">
                <div className="d-flex justify-content-end p-2">
                    <a href="" data-bs-toggle="modal" data-bs-target="#addRateCard" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1">Add Leads<i className="fal fa-user-tie"></i>
                    </a>
                </div>
                <AddBusinessLeads></AddBusinessLeads>
                <div className="listing list-sm p-3">

                    <div id="record-list-leads1" className="d-flex row g-2" data-url="https://www.advizuru.com/business-leads-listing" data-listurl="https://www.advizuru.com/business-leads-all">
                    <div className="col-md-6 col-sm-12 col-lg-4">
                        <div className="d-card p-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                            <div className="">
                            <span>Id :</span>
                            <span className="lblValue">
                                <a href="/lead-detail/NjI=751">62</a>
                            </span>
                            </div>
                            <a href="" data-bs-toggle="modal" data-bs-target="#addRateCard" className="btn btn-outline-secondary px-2 py-1">
                            <i className="fas fa-edit m-0"></i>
                            </a>
                        </div>
                        <div className="card-body p-0">
                            <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex">
                                <span>Title :</span>
                                <span className="lblValue">SAP EPM 123</span>
                            </li>
                            <li className="list-group-item d-flex">
                                <span>Effort :</span>
                                <span className="lblValue">qwerty Weeks</span>
                            </li>
                            <li className="list-group-item d-flex">
                                <span>Cost :</span>
                                <span className="lblValue">$ 500</span>
                            </li>
                            <li className="list-group-item d-flex">
                                <span>Status :</span>
                                <span className="lblValue">In-active</span>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    
                    
                <div id="pagination-record-list-leads1"></div>   
            </div>
                </div>
            </div>   
        </>
        )
    }
}
export default BusinessLeads;
import React from 'react';
import AddServices from './AddServices';
class Services extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
               <div className="tab-pane fade" id="services" role="tabpanel" aria-labelledby="services-tab">
                    <div className="d-flex justify-content-end p-2">
                        <a href="" data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1">Service <i className="fal fa-cogs"></i>
                        </a>
                        <AddServices></AddServices>
                    </div>
                    <div className="listing p-2 pt-0">
                        <div id="record-list-services" className="row m-0" data-url="https://www.advizuru.com/businesss-promotion-listing" data-listurl="https://www.advizuru.com/org-recruitment-list">
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/MTUw895">MTUw278</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> CRM</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"> Business Consulting</span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Advisory</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Active</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> ₹ 500</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href=""  className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href=""  data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href=""  className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/MTQ5352">MTQ5746</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> ERP</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"> Recruitment</span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Product</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Active</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> $ 250</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/MTQ4177">MTQ4147</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> CRM</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"></span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Advisory</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Active</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> $ 500</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href=""  className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href=""  data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href=""  className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/MTQ3339">MTQ3620</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> Testing</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"></span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Advisory</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Active</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> $ 750</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/MTQ2578">MTQ2341</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> PPN</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"></span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Implementation</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Active</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> ₹ 500</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href=""  className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href=""  data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href=""  className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/MTQ1871">MTQ1366</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> My Services</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"></span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Product</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Inactive</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> $ 120</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href=""  className="btn bg-gradient btn-outline-success"> Re-Open <i className="fas fa-unlock-alt"></i>
                                </a>
                                <a href=""  data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href=""  className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/MTQ0518">MTQ0837</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> Developer</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"></span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Advisory</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Active</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> 1500</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href=""  className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href=""  data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href=""  className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/MTQz409">MTQz738</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> Web Applications</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"> Web/Application Development</span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Implementation</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Active</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> 4 lack</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/NTY=643">NTY=881</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> dsdfdsf</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"> Web/Application Development</span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"></span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Inactive</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"></span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href=""  className="btn bg-gradient btn-outline-success"> Re-Open <i className="fas fa-unlock-alt"></i>
                                </a>
                                <a href=""  data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href=""  className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card serviceblocks col-md-6 border border-4 border-white p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span>ID :</span>
                                <span className="lblValue">
                                <a className="link-info" href="/business-promotion-detail/NDQ=778">NDQ=622</a>
                                </span>
                            </li>
                            <li>
                                <span>Title :</span>
                                <span className="lblValue"> Audit Services</span>
                            </li>
                            <li>
                                <span>Service Category :</span>
                                <span className="lblValue"> Audit Firm</span>
                            </li>
                            <li>
                                <span>Service Type :</span>
                                <span className="lblValue"> Advisory</span>
                            </li>
                            <li>
                                <span>Status :</span>
                                <span className="lblValue"> Active</span>
                            </li>
                            <li>
                                <span>Service Cost :</span>
                                <span className="lblValue"> 200k </span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href=""  className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href=""  data-bs-toggle="modal" data-bs-target="#businesspromotion" className="btn bg-gradient btn-secondary mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href=""  className="btn bg-gradient btn-danger">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div id="pagination-record-list-services">
                        <div className="list-foot" id="pagination_ele">
                        <span className="text-muted small">Showing 1 to 10 of 14 entries</span>
                        <nav className="cust-pagination" aria-label="...">
                            <ul className="pagination mb-0">
                            <li className="page-item prev active disabled">
                                <a className="page-link" href="" data-page="1">
                                <i className="fal fa-angle-double-left fa-lg"></i>
                                </a>
                            </li>
                            <li className="page-item active">
                                <a className="page-link" data-page="1" href="">1</a>
                            </li>
                            <li className="page-item ">
                                <a className="page-link" data-page="2" href="">2</a>
                            </li>
                            <li className="page-item next ">
                                <a className="page-link" data-page="2" href="">
                                <i className="fal fa-angle-double-right fa-lg"></i>
                                </a>
                            </li>
                            </ul>
                        </nav>
                        </div>
                    </div>
               </div>
            </>
        )
    }
}
export default Services;
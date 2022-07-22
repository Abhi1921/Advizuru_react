import React from 'react';
class Others extends  React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <>
        <div className="tab-pane fade" id="nav-other" role="tabpanel" aria-labelledby="nav-other-tab">
            <div className="other-list p-2">
                <h4 className="heading d-flex my-0 p-2 align-items-center card-header border-end text-white fs-bold">
                    Remuneration 
                    <a href="" data-bs-toggle="modal" data-bs-target="#addRemuneration" className="btn btn-light rounded-2 btn-sm text-center">Add Remuneration<i className="fas fa-plus-circle m-0"></i></a>
                    
                </h4>
                <div id="record-list-remuneration" className="row g-2 m-0" data-url="https://www.advizuru.com/get-profile-status-list/Remuneration" data-listurl="/project-partner-profile">
                    <div className="skill-card p-2 d-flex flex-column flex-md-row mt-0 mb-1">
                        <ul className="list-unstyled d-flex justify-content-between flex-row col-md-11 flex-grow-1 row">
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Country :</span>
                            <span className="lblValue">San Marino</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Currency :</span>
                            <span className="lblValue">INR</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Hourly Rate :</span>
                            <span className="lblValue">₹ 5.00</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Daily Rate :</span>
                            <span className="lblValue">₹ 40.00</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Monthly Rate :</span>
                            <span className="lblValue">₹ 880.00</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Annually Rate :</span>
                            <span className="lblValue">₹ 10560.00</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0">
                        <li className="flex-end d-flex flex-row flex-sm-column align-items-center px-1 btn-group-vertical">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addRemuneration"  className="btn btn-outline-secondary p-1 me-md-0 me-2">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href="" className="btn btn-outline-danger p-1">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex flex-column flex-md-row mt-0 mb-1">
                        <ul className="list-unstyled d-flex justify-content-between flex-row col-md-11 flex-grow-1 row">
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Country :</span>
                            <span className="lblValue">India</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Currency :</span>
                            <span className="lblValue">INR</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Hourly Rate :</span>
                            <span className="lblValue">₹ 15.00</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Daily Rate :</span>
                            <span className="lblValue">₹ 120.00</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Monthly Rate :</span>
                            <span className="lblValue">₹ 2640.00</span>
                        </li>
                        <li className="flex-row d-flex flex-md-column col-md-2 col-12">
                            <span className="col-md-12 col-6">Annually Rate :</span>
                            <span className="lblValue">₹ 31680.00</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0">
                        <li className="flex-end d-flex flex-row flex-sm-column align-items-center px-1 btn-group-vertical">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addRemuneration"   className="btn btn-outline-secondary p-1 me-md-0 me-2">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""  className="btn btn-outline-danger p-1">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
                <h4 className="heading d-flex  mt-4 p-2 align-items-center card-header border-end mb-0 availabile rounded-top text-white fw-bold">Availability 
                    <a href="" data-bs-toggle="modal" data-bs-target="#addAvailability" className="btn btn-light rounded-2 btn-sm text-center">Add Availability<i className="fas fa-plus-circle m-0"></i></a>
                </h4>
                
                <div id="record-list-availability" className="skill-card" data-url="https://www.advizuru.com/get-profile-status-list/Availability" data-listurl="/project-partner-profile">
                    <ul className="m-0 p-3 list-unstyled d-flex flex-sm-row flex-column">
                        <li className="w-100">
                        <span>Full Time Availability :</span>
                        <span id="fitme" className="lblValue">More than three months</span>
                        </li>
                        <li className="w-100">
                        <span>Part Time Availabilty :</span>
                        <span id="ptime" className="lblValue">Weekly 30 hours</span>
                        </li>
                    </ul>
                    
                </div>
                <h4 className="heading d-flex  mt-4 p-2 align-items-center card-header border-end mb-0 rounded-top text-white fs-bold">Visa
                    <a href="" data-bs-toggle="modal" data-bs-target="#addVisa" className="btn btn-light rounded-2 btn-sm text-center">Add Visa<i className="fas fa-plus-circle m-0"></i></a>
                </h4>
                
                <div className="row g-2 m-0 " id="record-list-visa" data-url="https://www.advizuru.com/get-profile-status-list/Visa" data-listurl="/project-partner-profile">
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Antarctica</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Passport</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"   className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""   className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Anguilla</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Require Visa</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group"  className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            
                            <a href=""  className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Argentina</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Work Visa</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"   className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""   className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Croatia (Hrvatska)</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Passport</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"   className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""   className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:American Samoa</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Passport</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href="" className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:American Samoa</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Passport</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"   className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""   className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Cambodia</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Work Visa</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa" className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""  className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Aruba</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Work Visa</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"   className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""  className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Angola</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Work Visa</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"   className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""   className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Angola</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Work Visa</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa" >
                            </a>
                            <a href="" className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Angola</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Work Visa</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href="" className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                    <div className="skill-card p-2 d-flex mt-0 mb-1">
                        <ul className="list-unstyled mb-0 d-flex flex-column flex-sm-row w-100">
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Country</span>
                            <span className="w-100 lblValue">:Angola</span>
                        </li>
                        <li className="d-flex w-100 align-items-center">
                            <span className="w-50">Visa Status</span>
                            <span className="w-100 lblValue">:Work Visa</span>
                        </li>
                        </ul>
                        <ul className="list-unstyled m-0 d-flex ">
                        <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                            <a href="" data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                            <i className="fas fa-edit m-0"></i>                        
                            </a>
                            <a href=""  className="btn btn-outline-danger px-1 py-0">
                            <i className="fas fa-trash-alt m-0"></i>                         
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            </>
        )
    }
}
export default Others;
import React from "react";
import {Link} from "react-router-dom";

class TopNav extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    };
      

    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top main-header">
            <div className="progress header-progress-bar" style={{display: 'none'}}>
                <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="container align-items-stretch">
                <div className="d-flex align-items-center logo-group">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    
                    </button>
                    <a className="navbar-brand" href="https://www.advizuru.com">
                    <img src="https://www.advizuru.com/assets/img/ag-logo.png" className="large-logo" width="180" height="48"/>
                    <img src="https://www.advizuru.com/assets/img/small-logo.png" className="small-logo d-none" alt="logo" width="31" height="26"/>
                    </a>
                </div>
                <div className="d-flex mobile-search">
                    
                    <div className="mobile-options d-none">
                    <a href="/find-pundit" className="m-icon">
                    <i className="flaticon flaticon-loupe"></i>
                    </a>
                    <div className="dropdown message dropdown-widget mx-2">
                        <a  className="m-icon dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="flaticon flaticon-email"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            <div className="dropdown-content">
                                <div className="dropdown-top d-between rounded-top bg-primary">
                                <span className="text-white">Messages</span>
                                </div>
                                <div className="ag-scroll">
                                <ul className="dropdown-list list-unstyled mb-0" id="record-list-head-messages-mob">
                                    <li> No Messages Yet!</li>
                                </ul>
                                </div>
                                <div className="dropdown-foot">
                                <a href="/message-inbox" className="btn-sm btn btn-primary">View all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown notification dropdown-widget">
                        <a  className="m-icon dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="flaticon flaticon-alarm i-bold"></i>
                        <span className="badge badge-danger badge-notify newCountFront" style={{display: 'none'}}>0</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            <div className="dropdown-content">
                                <div className="dropdown-top d-between rounded-top bg-primary">
                                <span className="text-white">Recent Notifications</span>
                                <span className="badge bg-warning mb-0"><span className="newConut">0</span> NEW</span>
                                </div>
                                <div className="ag-scroll">
                                <ul className="dropdown-list list-unstyled mb-0" id="record-list-head-notification-mob">
                                    <li className="">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Request Updated - Aalok N Koomar</h5>
                                            <span className="text-muted">6 months ago</span>
                                        </div>
                                        <span className="text-dark d-block mb-1">Your interest for  training program App Development has been Accepted. Please check your summary dashboard to join sessions.</span>
                                        
                                    </li>
                                    <li className="">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Request Updated - Aalok N Koomar</h5>
                                            <span className="text-muted">6 months ago</span>
                                        </div>
                                        <span className="text-dark d-block mb-1">Your interest for  training program Advizuru dev has been Rejected. Please check your summary dashboard to join sessions.</span>
                                        
                                    </li>
                                    <li className="">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Request Updated - Aalok N Koomar</h5>
                                            <span className="text-muted">6 months ago</span>
                                        </div>
                                        <span className="text-dark d-block mb-1">Your interest for  training program Advizuru dev has been Accepted. Please check your summary dashboard to join sessions.</span>
                                        
                                    </li>
                                    <li className="">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                        </div>
                                        <span className="text-dark d-block mb-1">You have recieved an interest on your training program JAVA. Please check your summary dashboard to accept interest.</span>
                                        
                                    </li>
                                    <li className="">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                        </div>
                                        <span className="text-dark d-block mb-1">You have recieved an interest on your training program ABC. Please check your summary dashboard to accept interest.</span>
                                        
                                    </li>
                                    <li className="">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                        </div>
                                        <span className="text-dark d-block mb-1">You have recieved an interest on your training program JAVA. Please check your summary dashboard to accept interest.</span>
                                        
                                    </li>
                                    <li className="">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                        </div>
                                        <span className="text-dark d-block mb-1">You have recieved an interest on your training program html. Please check your summary dashboard to accept interest.</span>
                                        
                                    </li>
                                    <li className="">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                        </div>
                                        <span className="text-dark d-block mb-1">You have recieved an interest on your training program HTML. Please check your summary dashboard to accept interest.</span>
                                        
                                    </li>
                                </ul>
                                </div>
                                <div className="dropdown-foot">
                                <a href="/callnotificationlist" className="btn-sm btn btn-primary">View all</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-dropdown dropdown dropdown-widget">
                        <a  className="dropdown-toggle ms-2 m-icon p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="assets/img/defaultImg.jpeg" className="rounded-circle profile-header-picture" alt="user profile" width="45" height="45"/>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            <div className="dropdown-content">
                                <div className="ag-scroll-x">
                                <ul className="dropdown-list list-unstyled mb-0">
                                    <li>
                                        <a href="https://www.advizuru.com/project-partner-profile">
                                        <i className="fal fa-user-circle"></i>
                                        <span>My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.advizuru.com/partner-my-interest">
                                        <i className="fal fa-check-circle"></i>
                                        <span>My Interests Sent</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.advizuru.com/partner-admin-recommendations">
                                        <i className="fal fa-thumbs-up"></i>
                                        <span>Admin Recommendations</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/change-password">
                                        <i className="fal fa-unlock-alt"></i>
                                        <span>Change Password</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/mytransactionlist#nav-pay-now">
                                        <i className="fal fa-credit-card"></i>
                                        <span>Pay Now</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/mytransactionlist">
                                        <i className="fal fa-exchange-alt"></i>
                                        <span>Transaction History</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/mytransactionlist#nav-point-history">
                                        <i className="fal fa-star"></i>
                                        <span>Points History</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/list/blogs">
                                        <i className="fal fa-rss"></i>
                                        <span>Blog</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/mytransactionlist#nav-redeem">
                                        <i className="fal fa-hand-holding-usd"></i>
                                        <span>Redeem</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/logout">
                                        <i className="fal fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                        </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="line-inline navbar-menu m-0 p-0">
                    <li className="list-inline-item active">
                        <a className="active" href="https://www.advizuru.com/project-partner-profile"><i className="fad fa-home"></i> <span>Home</span> </a>
                    </li>
                    <li className="list-inline-item ">
                        <a className="" href="https://www.advizuru.com/project-partner-summary"><i className="fad fa-scroll"></i> <span>Summary</span></a>
                    </li>
                    <li className="list-inline-item ">
                        <a className="" href="/my-organization-all"><i className="fad fa-dollar-sign"></i> <span>Rate</span></a>
                    </li>
                    <li className="list-inline-item ">
                        <a className="" href="/all-virtual-team-list"><i className="fa fa-users"></i> <span>Teams</span></a>
                    </li>
                    <li className="list-inline-item ">
                        <a className="" href="/trainer-profile-list"><i className="fad fa-chalkboard-teacher"></i> <span>Training</span></a>
                    </li>
                    <li className="list-inline-item ">
                       
                        <Link to="/sub-contract"><i className="fad fa-envelope-open-text"></i> <span>Ticket</span></Link>
                    </li>
                    <li className="list-inline-item ">
                        <a className="" href="/raise-ticket"><i className="fad fa-headset"></i> <span>Raise Ticket</span></a>
                    </li>
                    </ul>
                    <div className="d-flex head-btn">
                    <ul className="list-inline mb-0 d-flex align-items-center">
                        <li className="list-inline-item">
                            <a href="/find-pundit">
                            <i className="fal fa-search"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/list/blogs">
                            <i className="fal fa-blog"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/mytransactionlist#nav-pay-now">
                            <i className="fal fa-credit-card"></i>
                            </a>
                        </li>
                        <li className="list-inline-item dropdown message dropdown-widget">
                            <a  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fal fa-envelope"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <div className="dropdown-content">
                                <div className="dropdown-top d-between rounded-top bg-primary">
                                    <span className="text-white">Messages</span>
                                </div>
                                <div className="ag-scroll">
                                    <ul className="dropdown-list list-unstyled mb-0" id="record-list-head-messages" data-url="https://www.advizuru.com/message-inbox-listing">
                                        <li> No Messages Yet!</li>
                                    </ul>
                                </div>
                                <div className="dropdown-foot">
                                    <a href="/message-inbox" className="btn-sm btn btn-primary">View all</a>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-inline-item dropdown notification dropdown-widget">
                            <a  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fal fa-bell"></i>
                            <span className="badge badge-danger badge-notify newCountFront" style={{display: 'none'}}>0</span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <div className="dropdown-content">
                                <div className="dropdown-top d-between rounded-top bg-primary">
                                    <span className="text-white">Recent Notifications</span>
                                    <span className="badge bg-warning mb-0"><span className="newConut">0</span> NEW</span>
                                </div>
                                <div className="ag-scroll">
                                    <ul className="dropdown-list list-unstyled mb-0" id="record-list-head-notification" data-url="https://www.advizuru.com/callnotificationlisting">
                                        <li className="">
                                            <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Request Updated - Aalok N Koomar</h5>
                                            <span className="text-muted">6 months ago</span>
                                            </div>
                                            <span className="text-dark d-block mb-1">Your interest for  training program App Development has been Accepted. Please check your summary dashboard to join sessions.</span>
                                            
                                        </li>
                                        <li className="">
                                            <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Request Updated - Aalok N Koomar</h5>
                                            <span className="text-muted">6 months ago</span>
                                            </div>
                                            <span className="text-dark d-block mb-1">Your interest for  training program Advizuru dev has been Rejected. Please check your summary dashboard to join sessions.</span>
                                        
                                        </li>
                                        <li className="">
                                            <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Request Updated - Aalok N Koomar</h5>
                                            <span className="text-muted">6 months ago</span>
                                            </div>
                                            <span className="text-dark d-block mb-1">Your interest for  training program Advizuru dev has been Accepted. Please check your summary dashboard to join sessions.</span>
                                        
                                        </li>
                                        <li className="">
                                            <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                            </div>
                                            <span className="text-dark d-block mb-1">You have recieved an interest on your training program JAVA. Please check your summary dashboard to accept interest.</span>
                                            
                                        </li>
                                        <li className="">
                                            <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                            </div>
                                            <span className="text-dark d-block mb-1">You have recieved an interest on your training program ABC. Please check your summary dashboard to accept interest.</span>
                                            
                                        </li>
                                        <li className="">
                                            <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                            </div>
                                            <span className="text-dark d-block mb-1">You have recieved an interest on your training program JAVA. Please check your summary dashboard to accept interest.</span>
                                            
                                        </li>
                                        <li className="">
                                            <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                            </div>
                                            <span className="text-dark d-block mb-1">You have recieved an interest on your training program html. Please check your summary dashboard to accept interest.</span>
                                            
                                        </li>
                                        <li className="">
                                            <div className="d-flex justify-content-between">
                                            <h5 className="mb-0 text-primary">Interest Received - Test video</h5>
                                            <span className="text-muted">8 months ago</span>
                                            </div>
                                            <span className="text-dark d-block mb-1">You have recieved an interest on your training program HTML. Please check your summary dashboard to accept interest.</span>
                                            
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown-foot">
                                    <a href="/callnotificationlist" className="btn-sm btn btn-primary">View all</a>
                                </div>
                                </div>
                            </div>
                        </li>
                        <li className="profile-dropdown dropdown dropdown-widget">
                            <a  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://www.advizuru.com/upload/1635135476_photo 10.jpeg"  className="img-fluid rounded-circle profile-header-picture" alt="user profile" width="40" height="40"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                                <div className="dropdown-content">
                                <div className="ag-scroll-x">
                                    <ul className="dropdown-list list-unstyled mb-0">
                                        <li>
                                            <a href="https://www.advizuru.com/project-partner-profile">
                                            <i className="fal fa-user-circle"></i>
                                            <span>My Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.advizuru.com/partner-my-interest">
                                            <i className="fal fa-check-circle"></i>
                                            <span>My Interests Sent</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.advizuru.com/partner-admin-recommendations">
                                            <i className="fal fa-thumbs-up"></i>
                                            <span>Admin Recommendations</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/change-password">
                                            <i className="fal fa-unlock-alt"></i>
                                            <span>Change Password</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/mytransactionlist#nav-pay-now">
                                            <i className="fal fa-credit-card"></i>
                                            <span>Pay Now</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/mytransactionlist">
                                            <i className="fal fa-exchange-alt"></i>
                                            <span>Transaction History</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/mytransactionlist#nav-point-history">
                                            <i className="fal fa-star"></i>
                                            <span>Points History</span>
                                            </a>
                                        </li>
                                        
                                        <li>
                                            <a href="/mytransactionlist#nav-redeem">
                                            <i className="fal fa-hand-holding-usd"></i>
                                            <span>Redeem</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/logout">
                                            <i className="fal fa-sign-out-alt"></i>
                                            <span>Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            </nav>
            </>
        )
    }

}
export default TopNav;
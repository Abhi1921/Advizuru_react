import React from 'react';
class ProjectPartnerProfile extends React.Component{
  
    render(){
        return(  
            <>

       <div className="wrapper bg-gray">
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
                        <img src="https://www.advizuru.com/upload/1635135476_photo 10.jpeg"  className="rounded-circle profile-header-picture" alt="user profile" width="45" height="45"/>
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
                        <a className="" href="/org-recruitment-list"><i className="fad fa-envelope-open-text"></i> <span>Ticket</span></a>
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
                            
            <div className="main-wrapper spacing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-12">
                        <div className="profile-heading bg-light fw-bold py-2 ps-3 mb-2 d-block d-md-none">
                            Profile              
                        </div>
                        <button className="btn_filter d-none"><i className="flaticon flaticon-filter"></i>
                        <span>Filter</span></button> 
                        <input type="hidden" name="isSearchedProfile"  className="_searchele"/>
                        <input type="hidden" id="searchedProfile" name="searchedProfile"  className="_searchele"/>
                        <div className="profile-block">
                            <div className="profile-card bg-white p-2 rounded mb-4 bg-shadow">
                                <div className="update-prof profile-parent mb-2 mb-md-3 d-flex align-items-start">
                                    <div className="d-inline-block img-div position-relative col-4">
                                    <span className="d-inline-block position-relative">
                                    <img src="/upload/1635135476_photo 10.jpeg"  className="img-fluid" alt="profile fig" width="150" height="150"/> 
                                    </span>
                                    </div>
                                    <div className="d-flex flex-column justify-content-start edit-prof ps-3 col-8">
                                    <h5 className="text-truncate fw-bold text-uppercase me-auto w-100" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Test P">
                                        Test P            
                                    </h5>
                                    <div className="d-flex my-3 text-nowrap">
                                        <span className="orng-bg rounded-circle me-2 d-flex align-items-center justify-content-between">
                                        <i className="fas fa-star text-white fs-12 mx-auto"></i>
                                        </span> Premium Account
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="upload-prof">
                                            <a className="text-white" href="/edit-partner-profile/81074"><i className="fal fa-pencil-alt fs-12"></i></a>
                                        </div>
                                        <div className="upload-prof">
                                            <label htmlFor="upload"><i className="fal fa-camera upload_img_profile_picture fs-12 dz-clickable"></i></label>
                                            <div className="progress-block"></div>
                                        </div>
                                        <ul className="rating mb-0 list-inline p-1 col-8 justify-content-around d-flex">
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                            <li className="list-inline-item">
                                                <i className="fas fa-star "></i>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex border-top border-bottom p-2 align-items-center">
                                    <i className="fas fa-map-marker-alt me-2"></i>
                                    <span className="lblValue">155 De  Mayo Road, Chandigarh, Chandigarh, India 140603</span>
                                </div>
                                <div className="badge-block d-flex justify-content-between align-items-center d-none">
                                    <ul className="medal-list list-inline col-6 p-1 m-1 justify-content-between d-flex">
                                    
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-yellow"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-blue"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-purple"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-green"></i>
                                    </li>
                                    <li className="list-inline-item">
                                        <i className="fas fa-medal text-red"></i>
                                    </li>
                                    </ul>
                                </div>
                                <div className="d-flex flex-column rounded bg-light-success p-2 mt-2">
                                    <div className="d-flex justify-content-between">
                                    <span className="complete d-flex mb-1 mt-2">
                                        Profile Strength
                                        
                                    </span>
                                    <span className="complete mt-2"><b>15%</b></span>
                                    </div>
                                    <div className="progress col-12">
                                    <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                
                            </div>
                            <script>
                                var uploadUrl = "https://www.advizuru.com/profile/image/upload";
                            </script>
                            <div className="gray-card mb-4 bx-shadow">
                                <div className="card-title pb-2 d-flex align-items-center">
                                    <h6>Skill</h6>
                                </div>
                                <div id="experience_block">
                                    <ul className="u-list list-unstyled mb-1 d-none">
                                    
                                    </ul>
                                    <div className="d-flex">
                                    <span className="lblValue fw-bold">null</span>
                                    </div>
                                </div>
                            </div>
                            <div className="gray-card mb-4 bx-shadow">
                                <div className="card-title pb-2 d-flex align-items-center">
                                    <h6>Remuneration</h6>
                                    
                                </div>
                                <div id="remuneration_block">
                                    <ul className="u-list list-unstyled mb-2 d-flex row me-0">
                                    <li className="col-4">
                                        <span>Country: </span>
                                        <span className="lblValue fw-bold">INR </span>
                                    </li>
                                    <li className="col-4">
                                        <span>Hourly Rate :</span>
                                        <span className="lblValue fw-bold">₹ 5.00</span>
                                    </li>
                                    <li className="col-4">
                                        <span>Daily Rate :</span>
                                        <span className="lblValue fw-bold">₹ 40.00</span>
                                    </li>
                                    </ul>
                                    <ul className="u-list list-unstyled mb-2 d-flex row me-0">
                                    <li className="col-4">
                                        <span>Country: </span>
                                        <span className="lblValue fw-bold">INR </span>
                                    </li>
                                    <li className="col-4">
                                        <span>Hourly Rate :</span>
                                        <span className="lblValue fw-bold">₹ 15.00</span>
                                    </li>
                                    <li className="col-4">
                                        <span>Daily Rate :</span>
                                        <span className="lblValue fw-bold">₹ 120.00</span>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="gray-card mb-4 bx-shadow">
                                <div className="card-title pb-2 d-flex align-items-center">
                                    <h6>Availability</h6>
                                </div>
                                <div id="availability_block">
                                    <ul className="u-list list-unstyled  d-flex mb-2">
                                    <li className="col-6">
                                        <span>Full Time :</span>
                                        <span className="lblValue fw-bold">More than three months</span>
                                    </li>
                                    <li className="col-6">
                                        <span>Part Time :</span>
                                        <span className="lblValue fw-bold">Weekly 30 hours</span>
                                    </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="accordion mb-3 gray-acc" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed text-uppercase fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Education 
                                    </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <div id="education_block">
                                            <ul className="u-list list-unstyled mb-1 d-none">
                                                <li>
                                                <span>Degree :</span>
                                                <span className="lblValue">PG Diploma in Accommodation Operation and Management</span>
                                                </li>
                                                <li>
                                                <span>Major :</span>
                                                <span className="lblValue">t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here</span>
                                                </li>
                                                <li>
                                                <span>Completion Year :</span>
                                                <span className="lblValue">2017</span>
                                                </li>
                                                <li>
                                                <span>Institution :</span>
                                                <span className="lblValue">APJ Abdul Kalam Technological University</span>
                                                </li>
                                            </ul>
                                            <div className="d-flex">
                                                <span>Degree :</span>
                                                <span className="lblValue fw-bold">PG Diploma in Accommodation Operation and Management - 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="profile-info" id="profile_info_block">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed fw-bold text-uppercase" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <ul className="list-unstyled prof-list mb-0">
                                                <li>
                                                <span>City :</span>
                                                <span className="lblValue">Chandigarh</span>
                                                </li>
                                                <li>
                                                <span>Profession :</span>
                                                <span className="lblValue">Techno Functional</span>
                                                </li>
                                                <li>
                                                <span>Company: </span>
                                                <span className="lblValue">PPN Solutions</span>
                                                </li>
                                                <li>
                                                <span>Mobile :</span>
                                                <span className="lblValue">9053262000</span>
                                                </li>
                                                <li>
                                                <span>Email id :</span>
                                                <span className="lblValue">test7@yopmail.com</span>
                                                </li>
                                                <li>
                                                <span>Landline :</span>
                                                <span className="lblValue">9053262000</span>
                                                </li>
                                                <li>
                                                <span>Address :</span>
                                                <span className="lblValue">155 De  Mayo Road, Chandigarh, Chandigarh, India 140603</span>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-8 col-12">
                        <div className="tab-wrap full-tab">
                            <nav className="cust-nav-tab">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-skill-tab" data-bs-toggle="tab" data-bs-target="#nav-skill" type="button" role="tab" aria-controls="nav-skill" aria-selected="true">Skill</button>
                                    <button className="nav-link" id="nav-project-tab" data-bs-toggle="tab" data-bs-target="#nav-project" type="button" role="tab" aria-controls="nav-project" aria-selected="false">Project</button>
                                    <button className="nav-link" id="nav-edu-tab" data-bs-toggle="tab" data-bs-target="#nav-edu" type="button" role="tab" aria-controls="nav-edu" aria-selected="false">Education</button>
                                    <button className="nav-link" id="nav-exp-tab" data-bs-toggle="tab" data-bs-target="#nav-exp" type="button" role="tab" aria-controls="nav-exp" aria-selected="false">Experience</button>
                                    <button className="nav-link" id="nav-other-tab" data-bs-toggle="tab" data-bs-target="#nav-other" type="button" role="tab" aria-controls="nav-other" aria-selected="false">Other</button>
                                </div>
                            </nav>
                            <div className="tab-content cust-tab" id="nav-tabContent">
                                {/* <style>
                                    #star_rating{pointer-events:none}
                                    #star_rating:hover{color:red;}
                                </style> */}
                                <div className="tab-pane fade show active" id="nav-skill" role="tabpanel" aria-labelledby="nav-skill-tab">
                                    <div className="d-flex justify-content-end p-2">
                                    <a  data-bs-toggle="modal" data-bs-target="#addSkills" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1" title="Add Skills">Add</a>
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
                                                        <input disabled="" type="radio" id="star2half19761" name="selfassmnt19761" value="2 and a half" defaultChecked=""/>
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
                                                    <i className="fas fa-edit m-0"></i>
                                                    </button>
                                                    
                                                    <button type="button" className="btn btn-outline-danger"  data-toggle="tooltip" data-placement="top">
                                                    <i className="fas fa-trash-alt m-0"></i>    
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
                                <div className="modal fade ag-modal" id="addSkills" tabIndex="-1" aria-labelledby="addSkillsLabel" aria-hidden="true">
                                    <form action="https://www.advizuru.com/more-skills" method="post" >
                                    <input type="hidden" name="skill_id"/>
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="addSkillsLabel">Add Skill</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                <label>Skill<sup className="text-danger">*</sup></label>
                                                <select name="skills[]" id="skillsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} data-select2-id="select2-data-skillsfield" tabIndex="-1" aria-hidden="true">
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-1-0kec" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-skillsfield-container" aria-controls="select2-skillsfield-container"><span className="select2-selection__rendered" id="select2-skillsfield-container" role="textbox" aria-readonly="true" title="Select Skills"><span className="select2-selection__placeholder">Select Skills</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Skill Level<sup className="text-danger">*</sup></label>
                                                        <select className="form-select" placeholder="Select Skill Level" name="skilllevel[]" id="single">
                                                            <option >Select Skill Level</option>
                                                            <option value="advanced">Advanced</option>
                                                            <option value="expert">Expert</option>
                                                        </select>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Year Of Experience<sup className="text-danger">*</sup></label>
                                                        <select name="yearofexp[]" id="yearofexp" className="form-select" placeholder="Year Of Experience">
                                                            <option >Select</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                            <option value="18">18</option>
                                                            <option value="19">19</option>
                                                            <option value="20">20</option>
                                                        </select>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Support Project</label>
                                                        <select name="supportproject[]" id="supportproject" className="form-select" placeholder="Year Of Experience">
                                                            <option >Select</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                        </select>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>Implementations<sup className="text-danger"></sup></label>
                                                        <select name="implementations[]" id="implementations" className="form-select" placeholder="Implementations">
                                                            <option >Select</option>
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                        </select>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="form-group">
                                                <label>Self Assesment</label>
                                                <div className="rating-wrap">
                                                    <div className="rating-list">
                                                        <input type="radio" id="star5" name="selfassmnt" value="5"/>
                                                        <label className="full" htmlFor="star5" title="Awesome - 5 stars"></label>
                                                        <input type="radio" id="star4half" name="selfassmnt" value="4 and a half"/>
                                                        <label className="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>
                                                        <input type="radio" id="star4" name="selfassmnt" value="4"/>
                                                        <label className="full" htmlFor="star4" title="Pretty good - 4 stars"></label>
                                                        <input type="radio" id="star3half" name="selfassmnt" value="3 and a half"/>
                                                        <label className="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>
                                                        <input type="radio" id="star3" name="selfassmnt" value="3"/>
                                                        <label className="full" htmlFor="star3" title="Meh - 3 stars"></label>
                                                        <input type="radio" id="star2half" name="selfassmnt" value="2 and a half"/>
                                                        <label className="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>
                                                        <input type="radio" id="star2" name="selfassmnt" value="2"/>
                                                        <label className="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>
                                                        <input type="radio" id="star1half" name="selfassmnt" value="1 and a half"/>
                                                        <label className="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>
                                                        <input type="radio" id="star1" name="selfassmnt" value="1"/>
                                                        <label className="full" htmlFor="star1" title="Sucks big time - 1 star"></label>
                                                        <input type="radio" id="starhalf" name="selfassmnt" value="half"/>
                                                        <label className="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                                                    </div>
                                                </div>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-group">
                                                <label className="d-inline-block">Description (Briefly describe the tasks performed earlier using the skill in 50 to 1000 characters)
                                                <sup className="text-danger">*</sup>
                                                </label>
                                                <textarea name="skilldescriptionn[]" id="skilldescriptionn" className="form-control" rows="4"></textarea>
                                                <div className="help-block"></div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                                                <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="nav-project" role="tabpanel" aria-labelledby="nav-project-tab">
                                    <div className="d-flex justify-content-end p-2">
                                    <a  data-bs-toggle="modal" data-bs-target="#addProjects" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1" title="Add Project"> <i className="fas fa-plus-circle m-0"></i>Add</a>
                                    </div>
                                    <div className="project-list py-0 ps-3 pe-2">
                                    <div id="record-list-projects" data-url="https://www.advizuru.com/get-profile-status-list/Project" data-listurl="/project-partner-profile">
                                        <div className="skill-card col-12 d-flex rounded py-1 flex-column flex-lg-row align-items-center mb-2 position-relative">
                                            <ul className="list-unstyled d-flex row m-0 col-lg-3 col-12 card-title p-2 p-lg-3">
                                                <li className="col-12 d-flex justify-content-between align-items-center p-0">
                                                <h6 className="mb-0 text-white w-100 d-flex"> 
                                                    <span className="fw-normal fs-14 me-2">Project Name : </span>
                                                    <span className="lblValue text-truncate text-white fw-bold" data-bs-toggle="tooltip" data-bs-html="true" title="CRM" data-bs-original-title="CRM"> CRM</span>
                                                </h6>
                                                </li>
                                            </ul>
                                            <div className="d-flex col-lg-9 col-11 flex-column px-md-0">
                                                <ul className="list-unstyled d-flex row p-1 m-0 bg-white rounded align-items-center">
                                                <li className="d-flex flex-md-row flex-column col-md-4 col-12">
                                                    <span> Duration : </span>
                                                    <span className="lblValue ms-1"> 12 Months </span>
                                                </li>
                                                <li className="col-12 col-md-6 d-flex text-nowrap flex-lg-row flex-column">
                                                    <span>Skill : </span>
                                                    <span className="lblValue d-flex ms-1 text-truncate" data-bs-placement="bottom" data-bs-toggle="tooltip" data-bs-html="true" title="LARAVEL">LARAVEL</span>
                                                </li>
                                                <li className="col-md-2 col-12 d-flex justify-content-end">
                                                    <div className="btn-group btn-group-sm bg-white rounded">
                                                        <button  data-bs-toggle="modal" data-bs-target="#addProjects"  className="btn btn-outline-secondary m-0">
                                                        <i className="fas fa-edit m-0"></i>
                                                        </button>
                                                        <button   className="btn btn-outline-danger m-0">
                                                        <i className="fas fa-trash-alt m-0"></i>
                                                        </button>
                                                    </div>
                                                </li>
                                                </ul>
                                                <ul className="list-unstyled d-flex row p-1 m-0 mt-1 bg-white rounded">
                                                <li className="d-flex flex-column">
                                                    <span>Project Description : </span>
                                                    <span className="lblValue"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                                    </span>
                                                </li>
                                                
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                <div className="modal fade ag-modal" id="addProjects" tabIndex="-1" aria-labelledby="addProjectsLabel" aria-hidden="true">
                                    <form action="https://www.advizuru.com/more-projects" method="post">
                                    <input type="hidden" name="project_id"/>
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="addProjectLabel">Add Project</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                <label>Project Name<sup className="text-danger">*</sup></label>
                                                <input type="text" className="form-control" name="project[]" id="project"  placeholder="Type Your Project Name"/>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-group">
                                                <label>Project Duration (In Month)<sup className="text-danger">*</sup></label>
                                                <input type="number" min="0" className="form-control" id="projectduration" name="projectduration[]" placeholder="Type Project Duration"/>
                                                <div className="help-block"></div>
                                                </div>
                                                
                                                
                                                <div className="form-group">
                                                <label>Skills Used<sup className="text-danger">*</sup></label>
                                                <select name="skillsused[0][]" id="skills_used" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} multiple="" data-select2-id="select2-data-skills_used" tabIndex="-1" aria-hidden="true">
                                                    <option data-select2-id="select2-data-3-3z8t">Select Skills</option>
                                                </select>
                                                <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-2-jar2" style={{width: '100%'}}>
                                                    <span className="selection">
                                                        <span className="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="-1" aria-disabled="false">
                                                            <ul className="select2-selection__rendered" id="select2-skills_used-container"></ul>
                                                            <span className="select2-search select2-search--inline"><textarea className="select2-search__field" type="search" tabIndex="0" autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" autoComplete="off" aria-label="Search" aria-describedby="select2-skills_used-container" placeholder="Select Skills" style={{width: '100%'}}></textarea></span>
                                                        </span>
                                                    </span>
                                                    <span className="dropdown-wrapper" aria-hidden="true"></span>
                                                </span>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-group">
                                                <label>Description ( Briefly describe the tasks performed earlier using the skill in 50 to
                                                1000 characters)
                                                <sup className="text-danger">*</sup>
                                                </label>
                                                <textarea name="skilldescriptionn[]" id="skilldescriptionn" className="form-control" rows="4"></textarea>
                                                <div className="help-block"></div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                                                <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="nav-edu" role="tabpanel" aria-labelledby="nav-edu-tab">
                                    <div className="d-flex justify-content-end p-2">
                                    <a  data-bs-toggle="modal" data-bs-target="#addEducation" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1" title="Add Education"> <i className="fas fa-plus-circle m-0"></i>Add</a>
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
                                
                                <div className="modal fade ag-modal" id="addEducation" tabIndex="-1" aria-labelledby="addProjectsLabel" aria-hidden="true">
                                    <form action="https://www.advizuru.com/more-education" method="post">
                                    <input type="hidden" name="education_id"/>
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="addEducationLabel">Add Education</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                <label>Degree<sup className="text-danger">*</sup></label>
                                                <select name="degree[]" id="degreesfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} data-select2-id="select2-data-degreesfield" tabIndex="-1" aria-hidden="true">
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-4-wuzw" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-degreesfield-container" aria-controls="select2-degreesfield-container"><span className="select2-selection__rendered" id="select2-degreesfield-container" role="textbox" aria-readonly="true" title="Select Degree"><span className="select2-selection__placeholder">Select Degree</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-group">
                                                <label>Institution<sup className="text-danger">*</sup></label>
                                                <select name="institution[]" id="institutionsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} data-select2-id="select2-data-institutionsfield" tabIndex="-1" aria-hidden="true">
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-5-cr2g" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-institutionsfield-container" aria-controls="select2-institutionsfield-container"><span className="select2-selection__rendered" id="select2-institutionsfield-container" role="textbox" aria-readonly="true" title="Select institute"><span className="select2-selection__placeholder">Select institute</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-group">
                                                <label>Major<sup className="text-danger">*</sup></label>
                                                <input type="text" className="form-control" id="major" name="major[]" placeholder=""/>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-group">
                                                <label>Completion Year<sup className="text-danger">*</sup></label>
                                                <select name="completionyear[]" className="form-control">
                                                    <option >Select Completion Year</option>
                                                    <option value="2022"> 2022 </option>
                                                    <option value="2021"> 2021 </option>
                                                    <option value="2020"> 2020 </option>
                                                    <option value="2019"> 2019 </option>
                                                    <option value="2018"> 2018 </option>
                                                    <option value="2017"> 2017 </option>
                                                    <option value="2016"> 2016 </option>
                                                    <option value="2015"> 2015 </option>
                                                    <option value="2014"> 2014 </option>
                                                    <option value="2013"> 2013 </option>
                                                    <option value="2012"> 2012 </option>
                                                    <option value="2011"> 2011 </option>
                                                    <option value="2010"> 2010 </option>
                                                    <option value="2009"> 2009 </option>
                                                    <option value="2008"> 2008 </option>
                                                    <option value="2007"> 2007 </option>
                                                    <option value="2006"> 2006 </option>
                                                    <option value="2005"> 2005 </option>
                                                    <option value="2004"> 2004 </option>
                                                    <option value="2003"> 2003 </option>
                                                    <option value="2002"> 2002 </option>
                                                    <option value="2001"> 2001 </option>
                                                    <option value="2000"> 2000 </option>
                                                    <option value="1999"> 1999 </option>
                                                    <option value="1998"> 1998 </option>
                                                    <option value="1997"> 1997 </option>
                                                    <option value="1996"> 1996 </option>
                                                    <option value="1995"> 1995 </option>
                                                    <option value="1994"> 1994 </option>
                                                    <option value="1993"> 1993 </option>
                                                    <option value="1992"> 1992 </option>
                                                    <option value="1991"> 1991 </option>
                                                    <option value="1990"> 1990 </option>
                                                    <option value="1989"> 1989 </option>
                                                    <option value="1988"> 1988 </option>
                                                    <option value="1987"> 1987 </option>
                                                    <option value="1986"> 1986 </option>
                                                    <option value="1985"> 1985 </option>
                                                    <option value="1984"> 1984 </option>
                                                    <option value="1983"> 1983 </option>
                                                    <option value="1982"> 1982 </option>
                                                    <option value="1981"> 1981 </option>
                                                    <option value="1980"> 1980 </option>
                                                    <option value="1979"> 1979 </option>
                                                    <option value="1978"> 1978 </option>
                                                    <option value="1977"> 1977 </option>
                                                    <option value="1976"> 1976 </option>
                                                    <option value="1975"> 1975 </option>
                                                    <option value="1974"> 1974 </option>
                                                    <option value="1973"> 1973 </option>
                                                    <option value="1972"> 1972 </option>
                                                    <option value="1971"> 1971 </option>
                                                    <option value="1970"> 1970 </option>
                                                    <option value="1969"> 1969 </option>
                                                    <option value="1968"> 1968 </option>
                                                    <option value="1967"> 1967 </option>
                                                    <option value="1966"> 1966 </option>
                                                    <option value="1965"> 1965 </option>
                                                    <option value="1964"> 1964 </option>
                                                    <option value="1963"> 1963 </option>
                                                    <option value="1962"> 1962 </option>
                                                    <option value="1961"> 1961 </option>
                                                    <option value="1960"> 1960 </option>
                                                    <option value="1959"> 1959 </option>
                                                    <option value="1958"> 1958 </option>
                                                    <option value="1957"> 1957 </option>
                                                    <option value="1956"> 1956 </option>
                                                    <option value="1955"> 1955 </option>
                                                    <option value="1954"> 1954 </option>
                                                    <option value="1953"> 1953 </option>
                                                    <option value="1952"> 1952 </option>
                                                    <option value="1951"> 1951 </option>
                                                    <option value="1950"> 1950 </option>
                                                    <option value="1949"> 1949 </option>
                                                    <option value="1948"> 1948 </option>
                                                    <option value="1947"> 1947 </option>
                                                    <option value="1946"> 1946 </option>
                                                    <option value="1945"> 1945 </option>
                                                    <option value="1944"> 1944 </option>
                                                    <option value="1943"> 1943 </option>
                                                    <option value="1942"> 1942 </option>
                                                    <option value="1941"> 1941 </option>
                                                    <option value="1940"> 1940 </option>
                                                    <option value="1939"> 1939 </option>
                                                    <option value="1938"> 1938 </option>
                                                    <option value="1937"> 1937 </option>
                                                    <option value="1936"> 1936 </option>
                                                    <option value="1935"> 1935 </option>
                                                    <option value="1934"> 1934 </option>
                                                    <option value="1933"> 1933 </option>
                                                    <option value="1932"> 1932 </option>
                                                    <option value="1931"> 1931 </option>
                                                    <option value="1930"> 1930 </option>
                                                    <option value="1929"> 1929 </option>
                                                    <option value="1928"> 1928 </option>
                                                    <option value="1927"> 1927 </option>
                                                    <option value="1926"> 1926 </option>
                                                    <option value="1925"> 1925 </option>
                                                    <option value="1924"> 1924 </option>
                                                    <option value="1923"> 1923 </option>
                                                    <option value="1922"> 1922 </option>
                                                </select>
                                                <div className="help-block"></div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                                                <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="nav-exp" role="tabpanel" aria-labelledby="nav-exp-tab">
                                    <div className="d-flex justify-content-end p-2">
                                    <a  data-bs-toggle="modal" data-bs-target="#addExperiences" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1" title="Add Work Experience"> <i className="fas fa-plus-circle m-0"></i>Add</a>
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
                                                        <button  data-bs-toggle="modal" data-bs-target="#addExperiences"  className="btn btn-outline-secondary m-0">
                                                        <i className="fas fa-edit m-0"></i>                        
                                                        </button>
                                                        <button   className="btn btn-outline-danger m-0">
                                                        <i className="fas fa-trash-alt m-0"></i>                        
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
                                
                                <div className="modal fade ag-modal" id="addExperiences" tabIndex="-1" aria-labelledby="addExperiencesLabel" aria-hidden="true">
                                    <form action="https://www.advizuru.com/more-work-experience" method="post">
                                    <input type="hidden" name="experience_id"/>
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="addExperiencesLabel">Add Experience</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                <label>Company Name<sup className="text-danger">*</sup></label>
                                                
                                                <input type="text" name="companyname[]" id="companyname" className="js-states form-control" placeholder=""/>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-group">
                                                <label>Designation<sup className="text-danger">*</sup></label>
                                                <select name="designation[]" id="designationsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} data-select2-id="select2-data-designationsfield" tabIndex="-1" aria-hidden="true">
                                                </select>
                                                <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-6-pz9q" style={{width: '100%'}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-designationsfield-container" aria-controls="select2-designationsfield-container"><span className="select2-selection__rendered" id="select2-designationsfield-container" role="textbox" aria-readonly="true" title="Select Designation"><span className="select2-selection__placeholder">Select Designation</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>From Date<sup className="text-danger">*</sup></label>
                                                        <input type="date" className="form-control" id="fromdate" name="fromdate[]" placeholder=""/>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>To Date<sup className="text-danger">*</sup></label>
                                                        <input type="date" className="form-control" id="todate" name="todate[]" placeholder=""/>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="form-group">
                                                <label>Description (Briefly describe the tasks performed earlier using the skill in 50 to
                                                1000 characters)
                                                <sup className="text-danger">*</sup>
                                                </label>
                                                <textarea name="descriptionn[]" id="descriptionn" className="form-control" rows="4"></textarea>
                                                <div className="help-block"></div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                                                <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="nav-other" role="tabpanel" aria-labelledby="nav-other-tab">
                                    <div className="other-list p-2">
                                    <h4 className="heading d-flex my-0 p-2 align-items-center card-header border-end text-white fs-bold">
                                        Remuneration 
                                        <a  data-bs-toggle="modal" data-bs-target="#addRemuneration" className="btn btn-light rounded-2 btn-sm text-center"><i className="fas fa-plus-circle m-0"></i>Add</a>
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addRemuneration"  className="btn btn-outline-secondary p-1 me-md-0 me-2">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger p-1">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addRemuneration"  className="btn btn-outline-secondary p-1 me-md-0 me-2">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger p-1">
                                                <i className="fas fa-trash-alt m-0"></i>                         
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h4 className="heading d-flex  mt-4 p-2 align-items-center card-header border-end mb-0 availabile rounded-top text-white fw-bold">Availability 
                                        <a  data-bs-toggle="modal" data-bs-target="#addAvailability" className="btn btn-light rounded-2 btn-sm text-center"><i className="fas fa-plus-circle m-0"></i>Add</a>
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
                                        <a  data-bs-toggle="modal" data-bs-target="#addVisa" className="btn btn-light rounded-2 btn-sm text-center"><i className="fas fa-plus-circle m-0"></i>Add</a>
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <li className="flex-end d-flex flex-column flex-sm-row btn-group">
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa" 
                                                 className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa" 
                                                 className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a  
                                                 className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a  
                                                 className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
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
                                                <a  data-bs-toggle="modal" data-bs-target="#addVisa"  className="btn btn-outline-secondary px-1 py-0">
                                                <i className="fas fa-edit m-0"></i>                        
                                                </a>
                                                <a   className="btn btn-outline-danger px-1 py-0">
                                                <i className="fas fa-trash-alt m-0"></i>                         
                                                </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                
                                <div className="modal fade ag-modal" id="addVisa" tabIndex="-1" aria-labelledby="addVisaLabel" aria-hidden="true">
                                    <form action="https://www.advizuru.com/add-work-visa" method="post">
                                    <input type="hidden" name="visa_id"/>
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="addVisaLabel">Add Visa</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                <label>Country<sup className="text-danger">*</sup></label>
                                                <select name="contactcountry" id="contactcountry" className="js-states form-control" style={{width:'100%'}}>
                                                    <option >Select Country</option>
                                                    <option value="1">Afghanistan</option>
                                                    <option value="2">Albania</option>
                                                    <option value="3">Algeria</option>
                                                    <option value="4">American Samoa</option>
                                                    <option value="5">Andorra</option>
                                                    <option value="6">Angola</option>
                                                    <option value="7">Anguilla</option>
                                                    <option value="8">Antarctica</option>
                                                    <option value="9">Antigua and Barbuda</option>
                                                    <option value="10">Argentina</option>
                                                    <option value="11">Armenia</option>
                                                    <option value="12">Aruba</option>
                                                    <option value="13">Australia</option>
                                                    <option value="14">Austria</option>
                                                    <option value="15">Azerbaijan</option>
                                                    <option value="16">Bahamas</option>
                                                    <option value="17">Bahrain</option>
                                                    <option value="18">Bangladesh</option>
                                                    <option value="19">Barbados</option>
                                                    <option value="20">Belarus</option>
                                                    <option value="21">Belgium</option>
                                                    <option value="22">Belize</option>
                                                    <option value="23">Benin</option>
                                                    <option value="24">Bermuda</option>
                                                    <option value="25">Bhutan</option>
                                                    <option value="26">Bolivia</option>
                                                    <option value="27">Bosnia and Herzegovina</option>
                                                    <option value="28">Botswana</option>
                                                    <option value="29">Bouvet Island</option>
                                                    <option value="30">Brazil</option>
                                                    <option value="31">British Indian Ocean Territory</option>
                                                    <option value="32">Brunei Darussalam</option>
                                                    <option value="33">Bulgaria</option>
                                                    <option value="34">Burkina Faso</option>
                                                    <option value="35">Burundi</option>
                                                    <option value="36">Cambodia</option>
                                                    <option value="37">Cameroon</option>
                                                    <option value="38">Canada</option>
                                                    <option value="39">Cape Verde</option>
                                                    <option value="40">Cayman Islands</option>
                                                    <option value="41">Central African Republic</option>
                                                    <option value="42">Chad</option>
                                                    <option value="43">Chile</option>
                                                    <option value="44">China</option>
                                                    <option value="45">Christmas Island</option>
                                                    <option value="46">Cocos (Keeling) Islands</option>
                                                    <option value="47">Colombia</option>
                                                    <option value="48">Comoros</option>
                                                    <option value="49">Congo</option>
                                                    <option value="50">Cook Islands</option>
                                                    <option value="51">Costa Rica</option>
                                                    <option value="52">Croatia (Hrvatska)</option>
                                                    <option value="53">Cuba</option>
                                                    <option value="54">Cyprus</option>
                                                    <option value="55">Czech Republic</option>
                                                    <option value="56">Denmark</option>
                                                    <option value="57">Djibouti</option>
                                                    <option value="58">Dominica</option>
                                                    <option value="59">Dominican Republic</option>
                                                    <option value="60">East Timor</option>
                                                    <option value="61">Ecuador</option>
                                                    <option value="62">Egypt</option>
                                                    <option value="63">El Salvador</option>
                                                    <option value="64">Equatorial Guinea</option>
                                                    <option value="65">Eritrea</option>
                                                    <option value="66">Estonia</option>
                                                    <option value="67">Ethiopia</option>
                                                    <option value="68">Falkland Islands (Malvinas)</option>
                                                    <option value="69">Faroe Islands</option>
                                                    <option value="70">Fiji</option>
                                                    <option value="71">Finland</option>
                                                    <option value="72">France</option>
                                                    <option value="73">France, Metropolitan</option>
                                                    <option value="74">French Guiana</option>
                                                    <option value="75">French Polynesia</option>
                                                    <option value="76">French Southern Territories</option>
                                                    <option value="77">Gabon</option>
                                                    <option value="78">Gambia</option>
                                                    <option value="79">Georgia</option>
                                                    <option value="80">Germany</option>
                                                    <option value="81">Ghana</option>
                                                    <option value="82">Gibraltar</option>
                                                    <option value="83">Guernsey</option>
                                                    <option value="84">Greece</option>
                                                    <option value="85">Greenland</option>
                                                    <option value="86">Grenada</option>
                                                    <option value="87">Guadeloupe</option>
                                                    <option value="88">Guam</option>
                                                    <option value="89">Guatemala</option>
                                                    <option value="90">Guinea</option>
                                                    <option value="91">Guinea-Bissau</option>
                                                    <option value="92">Guyana</option>
                                                    <option value="93">Haiti</option>
                                                    <option value="94">Heard and Mc Donald Islands</option>
                                                    <option value="95">Honduras</option>
                                                    <option value="96">Hong Kong</option>
                                                    <option value="97">Hungary</option>
                                                    <option value="98">Iceland</option>
                                                    <option value="99">India</option>
                                                    <option value="100">Isle of Man</option>
                                                    <option value="101">Indonesia</option>
                                                    <option value="102">Iran (Islamic Republic of)</option>
                                                    <option value="103">Iraq</option>
                                                    <option value="104">Ireland</option>
                                                    <option value="105">Israel</option>
                                                    <option value="106">Italy</option>
                                                    <option value="107">Ivory Coast</option>
                                                    <option value="108">Jersey</option>
                                                    <option value="109">Jamaica</option>
                                                    <option value="110">Japan</option>
                                                    <option value="111">Jordan</option>
                                                    <option value="112">Kazakhstan</option>
                                                    <option value="113">Kenya</option>
                                                    <option value="114">Kiribati</option>
                                                    <option value="115">Korea, Democratic People's Republic of</option>
                                                    <option value="116">Korea, Republic of</option>
                                                    <option value="117">Kosovo</option>
                                                    <option value="118">Kuwait</option>
                                                    <option value="119">Kyrgyzstan</option>
                                                    <option value="120">Lao People's Democratic Republic</option>
                                                    <option value="121">Latvia</option>
                                                    <option value="122">Lebanon</option>
                                                    <option value="123">Lesotho</option>
                                                    <option value="124">Liberia</option>
                                                    <option value="125">Libyan Arab Jamahiriya</option>
                                                    <option value="126">Liechtenstein</option>
                                                    <option value="127">Lithuania</option>
                                                    <option value="128">Luxembourg</option>
                                                    <option value="129">Macau</option>
                                                    <option value="130">Macedonia</option>
                                                    <option value="131">Madagascar</option>
                                                    <option value="132">Malawi</option>
                                                    <option value="133">Malaysia</option>
                                                    <option value="134">Maldives</option>
                                                    <option value="135">Mali</option>
                                                    <option value="136">Malta</option>
                                                    <option value="137">Marshall Islands</option>
                                                    <option value="138">Martinique</option>
                                                    <option value="139">Mauritania</option>
                                                    <option value="140">Mauritius</option>
                                                    <option value="141">Mayotte</option>
                                                    <option value="142">Mexico</option>
                                                    <option value="143">Micronesia, Federated States of</option>
                                                    <option value="144">Moldova, Republic of</option>
                                                    <option value="145">Monaco</option>
                                                    <option value="146">Mongolia</option>
                                                    <option value="147">Montenegro</option>
                                                    <option value="148">Montserrat</option>
                                                    <option value="149">Morocco</option>
                                                    <option value="150">Mozambique</option>
                                                    <option value="151">Myanmar</option>
                                                    <option value="152">Namibia</option>
                                                    <option value="153">Nauru</option>
                                                    <option value="154">Nepal</option>
                                                    <option value="155">Netherlands</option>
                                                    <option value="156">Netherlands Antilles</option>
                                                    <option value="157">New Caledonia</option>
                                                    <option value="158">New Zealand</option>
                                                    <option value="159">Nicaragua</option>
                                                    <option value="160">Niger</option>
                                                    <option value="161">Nigeria</option>
                                                    <option value="162">Niue</option>
                                                    <option value="163">Norfolk Island</option>
                                                    <option value="164">Northern Mariana Islands</option>
                                                    <option value="165">Norway</option>
                                                    <option value="166">Oman</option>
                                                    <option value="167">Pakistan</option>
                                                    <option value="168">Palau</option>
                                                    <option value="169">Palestine</option>
                                                    <option value="170">Panama</option>
                                                    <option value="171">Papua New Guinea</option>
                                                    <option value="172">Paraguay</option>
                                                    <option value="173">Peru</option>
                                                    <option value="174">Philippines</option>
                                                    <option value="175">Pitcairn</option>
                                                    <option value="176">Poland</option>
                                                    <option value="177">Portugal</option>
                                                    <option value="178">Puerto Rico</option>
                                                    <option value="179">Qatar</option>
                                                    <option value="180">Reunion</option>
                                                    <option value="181">Romania</option>
                                                    <option value="182">Russian Federation</option>
                                                    <option value="183">Rwanda</option>
                                                    <option value="184">Saint Kitts and Nevis</option>
                                                    <option value="185">Saint Lucia</option>
                                                    <option value="186">Saint Vincent and the Grenadines</option>
                                                    <option value="187">Samoa</option>
                                                    <option value="188">San Marino</option>
                                                    <option value="189">Sao Tome and Principe</option>
                                                    <option value="190">Saudi Arabia</option>
                                                    <option value="191">Senegal</option>
                                                    <option value="192">Serbia</option>
                                                    <option value="193">Seychelles</option>
                                                    <option value="194">Sierra Leone</option>
                                                    <option value="195">Singapore</option>
                                                    <option value="196">Slovakia</option>
                                                    <option value="197">Slovenia</option>
                                                    <option value="198">Solomon Islands</option>
                                                    <option value="199">Somalia</option>
                                                    <option value="200">South Africa</option>
                                                    <option value="201">South Georgia South Sandwich Islands</option>
                                                    <option value="202">Spain</option>
                                                    <option value="203">Sri Lanka</option>
                                                    <option value="204">St. Helena</option>
                                                    <option value="205">St. Pierre and Miquelon</option>
                                                    <option value="206">Sudan</option>
                                                    <option value="207">Suriname</option>
                                                    <option value="208">Svalbard and Jan Mayen Islands</option>
                                                    <option value="209">Swaziland</option>
                                                    <option value="210">Sweden</option>
                                                    <option value="211">Switzerland</option>
                                                    <option value="212">Syrian Arab Republic</option>
                                                    <option value="213">Taiwan</option>
                                                    <option value="214">Tajikistan</option>
                                                    <option value="215">Tanzania, United Republic of</option>
                                                    <option value="216">Thailand</option>
                                                    <option value="217">Togo</option>
                                                    <option value="218">Tokelau</option>
                                                    <option value="219">Tonga</option>
                                                    <option value="220">Trinidad and Tobago</option>
                                                    <option value="221">Tunisia</option>
                                                    <option value="222">Turkey</option>
                                                    <option value="223">Turkmenistan</option>
                                                    <option value="224">Turks and Caicos Islands</option>
                                                    <option value="225">Tuvalu</option>
                                                    <option value="226">Uganda</option>
                                                    <option value="227">Ukraine</option>
                                                    <option value="228">United Arab Emirates</option>
                                                    <option value="229">United Kingdom</option>
                                                    <option value="230">United States</option>
                                                    <option value="231">United States minor outlying islands</option>
                                                    <option value="232">Uruguay</option>
                                                    <option value="233">Uzbekistan</option>
                                                    <option value="234">Vanuatu</option>
                                                    <option value="235">Vatican City State</option>
                                                    <option value="236">Venezuela</option>
                                                    <option value="237">Vietnam</option>
                                                    <option value="238">Virgin Islands (British)</option>
                                                    <option value="239">Virgin Islands (U.S.)</option>
                                                    <option value="240">Wallis and Futuna Islands</option>
                                                    <option value="241">Western Sahara</option>
                                                    <option value="242">Yemen</option>
                                                    <option value="243">Zaire</option>
                                                    <option value="244">Zambia</option>
                                                    <option value="245">Zimbabwe</option>
                                                </select>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="row row-8-flex">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Visa Status<sup className="text-danger">*</sup></label>
                                                        <div className="form-field">
                                                            <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="visastatus" value="passport" id="contractual1"/>
                                                            <label className="form-check-label" htmlFor="contractual1">Passport</label>
                                                            </div>
                                                            <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="visastatus" value="work visa" id="contractual2"/>
                                                            <label className="form-check-label" htmlFor="contractual2">Work Visa</label>
                                                            </div>
                                                            <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="visastatus" value="require visa" id="contractual3"/>
                                                            <label className="form-check-label" htmlFor="contractual3">Require Visa</label>
                                                            </div>
                                                        </div>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                                                <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="modal fade ag-modal" id="addRemuneration" tabIndex="-1" aria-labelledby="addRemunerationLabel" aria-hidden="true">
                                    <form action="https://www.advizuru.com/add-remuneration" method="post">
                                    <input type="hidden" name="remuneration_id"/>
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="addRemunerationLabel">Add Remuneration</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-group">
                                                <label>Country<sup className="text-danger">*</sup></label>
                                                <select name="contactcountry[]" className="js-states form-control" style={{width:'100%'}}>
                                                    <option >Select Country</option>
                                                    <option value="1">Afghanistan</option>
                                                    <option value="2">Albania</option>
                                                    <option value="3">Algeria</option>
                                                    <option value="4">American Samoa</option>
                                                    <option value="5">Andorra</option>
                                                    <option value="6">Angola</option>
                                                    <option value="7">Anguilla</option>
                                                    <option value="8">Antarctica</option>
                                                    <option value="9">Antigua and Barbuda</option>
                                                    <option value="10">Argentina</option>
                                                    <option value="11">Armenia</option>
                                                    <option value="12">Aruba</option>
                                                    <option value="13">Australia</option>
                                                    <option value="14">Austria</option>
                                                    <option value="15">Azerbaijan</option>
                                                    <option value="16">Bahamas</option>
                                                    <option value="17">Bahrain</option>
                                                    <option value="18">Bangladesh</option>
                                                    <option value="19">Barbados</option>
                                                    <option value="20">Belarus</option>
                                                    <option value="21">Belgium</option>
                                                    <option value="22">Belize</option>
                                                    <option value="23">Benin</option>
                                                    <option value="24">Bermuda</option>
                                                    <option value="25">Bhutan</option>
                                                    <option value="26">Bolivia</option>
                                                    <option value="27">Bosnia and Herzegovina</option>
                                                    <option value="28">Botswana</option>
                                                    <option value="29">Bouvet Island</option>
                                                    <option value="30">Brazil</option>
                                                    <option value="31">British Indian Ocean Territory</option>
                                                    <option value="32">Brunei Darussalam</option>
                                                    <option value="33">Bulgaria</option>
                                                    <option value="34">Burkina Faso</option>
                                                    <option value="35">Burundi</option>
                                                    <option value="36">Cambodia</option>
                                                    <option value="37">Cameroon</option>
                                                    <option value="38">Canada</option>
                                                    <option value="39">Cape Verde</option>
                                                    <option value="40">Cayman Islands</option>
                                                    <option value="41">Central African Republic</option>
                                                    <option value="42">Chad</option>
                                                    <option value="43">Chile</option>
                                                    <option value="44">China</option>
                                                    <option value="45">Christmas Island</option>
                                                    <option value="46">Cocos (Keeling) Islands</option>
                                                    <option value="47">Colombia</option>
                                                    <option value="48">Comoros</option>
                                                    <option value="49">Congo</option>
                                                    <option value="50">Cook Islands</option>
                                                    <option value="51">Costa Rica</option>
                                                    <option value="52">Croatia (Hrvatska)</option>
                                                    <option value="53">Cuba</option>
                                                    <option value="54">Cyprus</option>
                                                    <option value="55">Czech Republic</option>
                                                    <option value="56">Denmark</option>
                                                    <option value="57">Djibouti</option>
                                                    <option value="58">Dominica</option>
                                                    <option value="59">Dominican Republic</option>
                                                    <option value="60">East Timor</option>
                                                    <option value="61">Ecuador</option>
                                                    <option value="62">Egypt</option>
                                                    <option value="63">El Salvador</option>
                                                    <option value="64">Equatorial Guinea</option>
                                                    <option value="65">Eritrea</option>
                                                    <option value="66">Estonia</option>
                                                    <option value="67">Ethiopia</option>
                                                    <option value="68">Falkland Islands (Malvinas)</option>
                                                    <option value="69">Faroe Islands</option>
                                                    <option value="70">Fiji</option>
                                                    <option value="71">Finland</option>
                                                    <option value="72">France</option>
                                                    <option value="73">France, Metropolitan</option>
                                                    <option value="74">French Guiana</option>
                                                    <option value="75">French Polynesia</option>
                                                    <option value="76">French Southern Territories</option>
                                                    <option value="77">Gabon</option>
                                                    <option value="78">Gambia</option>
                                                    <option value="79">Georgia</option>
                                                    <option value="80">Germany</option>
                                                    <option value="81">Ghana</option>
                                                    <option value="82">Gibraltar</option>
                                                    <option value="83">Guernsey</option>
                                                    <option value="84">Greece</option>
                                                    <option value="85">Greenland</option>
                                                    <option value="86">Grenada</option>
                                                    <option value="87">Guadeloupe</option>
                                                    <option value="88">Guam</option>
                                                    <option value="89">Guatemala</option>
                                                    <option value="90">Guinea</option>
                                                    <option value="91">Guinea-Bissau</option>
                                                    <option value="92">Guyana</option>
                                                    <option value="93">Haiti</option>
                                                    <option value="94">Heard and Mc Donald Islands</option>
                                                    <option value="95">Honduras</option>
                                                    <option value="96">Hong Kong</option>
                                                    <option value="97">Hungary</option>
                                                    <option value="98">Iceland</option>
                                                    <option value="99">India</option>
                                                    <option value="100">Isle of Man</option>
                                                    <option value="101">Indonesia</option>
                                                    <option value="102">Iran (Islamic Republic of)</option>
                                                    <option value="103">Iraq</option>
                                                    <option value="104">Ireland</option>
                                                    <option value="105">Israel</option>
                                                    <option value="106">Italy</option>
                                                    <option value="107">Ivory Coast</option>
                                                    <option value="108">Jersey</option>
                                                    <option value="109">Jamaica</option>
                                                    <option value="110">Japan</option>
                                                    <option value="111">Jordan</option>
                                                    <option value="112">Kazakhstan</option>
                                                    <option value="113">Kenya</option>
                                                    <option value="114">Kiribati</option>
                                                    <option value="115">Korea, Democratic People's Republic of</option>
                                                    <option value="116">Korea, Republic of</option>
                                                    <option value="117">Kosovo</option>
                                                    <option value="118">Kuwait</option>
                                                    <option value="119">Kyrgyzstan</option>
                                                    <option value="120">Lao People's Democratic Republic</option>
                                                    <option value="121">Latvia</option>
                                                    <option value="122">Lebanon</option>
                                                    <option value="123">Lesotho</option>
                                                    <option value="124">Liberia</option>
                                                    <option value="125">Libyan Arab Jamahiriya</option>
                                                    <option value="126">Liechtenstein</option>
                                                    <option value="127">Lithuania</option>
                                                    <option value="128">Luxembourg</option>
                                                    <option value="129">Macau</option>
                                                    <option value="130">Macedonia</option>
                                                    <option value="131">Madagascar</option>
                                                    <option value="132">Malawi</option>
                                                    <option value="133">Malaysia</option>
                                                    <option value="134">Maldives</option>
                                                    <option value="135">Mali</option>
                                                    <option value="136">Malta</option>
                                                    <option value="137">Marshall Islands</option>
                                                    <option value="138">Martinique</option>
                                                    <option value="139">Mauritania</option>
                                                    <option value="140">Mauritius</option>
                                                    <option value="141">Mayotte</option>
                                                    <option value="142">Mexico</option>
                                                    <option value="143">Micronesia, Federated States of</option>
                                                    <option value="144">Moldova, Republic of</option>
                                                    <option value="145">Monaco</option>
                                                    <option value="146">Mongolia</option>
                                                    <option value="147">Montenegro</option>
                                                    <option value="148">Montserrat</option>
                                                    <option value="149">Morocco</option>
                                                    <option value="150">Mozambique</option>
                                                    <option value="151">Myanmar</option>
                                                    <option value="152">Namibia</option>
                                                    <option value="153">Nauru</option>
                                                    <option value="154">Nepal</option>
                                                    <option value="155">Netherlands</option>
                                                    <option value="156">Netherlands Antilles</option>
                                                    <option value="157">New Caledonia</option>
                                                    <option value="158">New Zealand</option>
                                                    <option value="159">Nicaragua</option>
                                                    <option value="160">Niger</option>
                                                    <option value="161">Nigeria</option>
                                                    <option value="162">Niue</option>
                                                    <option value="163">Norfolk Island</option>
                                                    <option value="164">Northern Mariana Islands</option>
                                                    <option value="165">Norway</option>
                                                    <option value="166">Oman</option>
                                                    <option value="167">Pakistan</option>
                                                    <option value="168">Palau</option>
                                                    <option value="169">Palestine</option>
                                                    <option value="170">Panama</option>
                                                    <option value="171">Papua New Guinea</option>
                                                    <option value="172">Paraguay</option>
                                                    <option value="173">Peru</option>
                                                    <option value="174">Philippines</option>
                                                    <option value="175">Pitcairn</option>
                                                    <option value="176">Poland</option>
                                                    <option value="177">Portugal</option>
                                                    <option value="178">Puerto Rico</option>
                                                    <option value="179">Qatar</option>
                                                    <option value="180">Reunion</option>
                                                    <option value="181">Romania</option>
                                                    <option value="182">Russian Federation</option>
                                                    <option value="183">Rwanda</option>
                                                    <option value="184">Saint Kitts and Nevis</option>
                                                    <option value="185">Saint Lucia</option>
                                                    <option value="186">Saint Vincent and the Grenadines</option>
                                                    <option value="187">Samoa</option>
                                                    <option value="188">San Marino</option>
                                                    <option value="189">Sao Tome and Principe</option>
                                                    <option value="190">Saudi Arabia</option>
                                                    <option value="191">Senegal</option>
                                                    <option value="192">Serbia</option>
                                                    <option value="193">Seychelles</option>
                                                    <option value="194">Sierra Leone</option>
                                                    <option value="195">Singapore</option>
                                                    <option value="196">Slovakia</option>
                                                    <option value="197">Slovenia</option>
                                                    <option value="198">Solomon Islands</option>
                                                    <option value="199">Somalia</option>
                                                    <option value="200">South Africa</option>
                                                    <option value="201">South Georgia South Sandwich Islands</option>
                                                    <option value="202">Spain</option>
                                                    <option value="203">Sri Lanka</option>
                                                    <option value="204">St. Helena</option>
                                                    <option value="205">St. Pierre and Miquelon</option>
                                                    <option value="206">Sudan</option>
                                                    <option value="207">Suriname</option>
                                                    <option value="208">Svalbard and Jan Mayen Islands</option>
                                                    <option value="209">Swaziland</option>
                                                    <option value="210">Sweden</option>
                                                    <option value="211">Switzerland</option>
                                                    <option value="212">Syrian Arab Republic</option>
                                                    <option value="213">Taiwan</option>
                                                    <option value="214">Tajikistan</option>
                                                    <option value="215">Tanzania, United Republic of</option>
                                                    <option value="216">Thailand</option>
                                                    <option value="217">Togo</option>
                                                    <option value="218">Tokelau</option>
                                                    <option value="219">Tonga</option>
                                                    <option value="220">Trinidad and Tobago</option>
                                                    <option value="221">Tunisia</option>
                                                    <option value="222">Turkey</option>
                                                    <option value="223">Turkmenistan</option>
                                                    <option value="224">Turks and Caicos Islands</option>
                                                    <option value="225">Tuvalu</option>
                                                    <option value="226">Uganda</option>
                                                    <option value="227">Ukraine</option>
                                                    <option value="228">United Arab Emirates</option>
                                                    <option value="229">United Kingdom</option>
                                                    <option value="230">United States</option>
                                                    <option value="231">United States minor outlying islands</option>
                                                    <option value="232">Uruguay</option>
                                                    <option value="233">Uzbekistan</option>
                                                    <option value="234">Vanuatu</option>
                                                    <option value="235">Vatican City State</option>
                                                    <option value="236">Venezuela</option>
                                                    <option value="237">Vietnam</option>
                                                    <option value="238">Virgin Islands (British)</option>
                                                    <option value="239">Virgin Islands (U.S.)</option>
                                                    <option value="240">Wallis and Futuna Islands</option>
                                                    <option value="241">Western Sahara</option>
                                                    <option value="242">Yemen</option>
                                                    <option value="243">Zaire</option>
                                                    <option value="244">Zambia</option>
                                                    <option value="245">Zimbabwe</option>
                                                </select>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-group">
                                                <label>Currency<sup className="text-danger">*</sup></label>
                                                <select name="prcurrency[]" className="js-states form-control">
                                                    <option >Select Currency</option>
                                                    <option value="2">USD</option>
                                                    <option value="1">INR</option>
                                                </select>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Hourly Rate <sup className="text-danger">*</sup></label>
                                                        <input type="number" step=".01" min="0"   className="form-control" id="hourlyRate" name="hourlyrate[]"/>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Daily Rate <sup className="text-danger">*</sup></label> 
                                                        <input type="number" step=".01" min="0"    className="form-control" id="dailyRate" name="dailyrate[]"/>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Monthly Rate <sup className="text-danger">*</sup></label>
                                                        <input type="number" step=".01" min="0"    className="form-control" id="monthlyRate" name="monthlyrate[]"/>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group">
                                                        <label>Annually Rate <sup className="text-danger">*</sup></label>
                                                        <input type="number" step=".01" min="0"    className="form-control" id="annuallyRate" name="annuallyrate[]"/>
                                                        <div className="help-block"></div>
                                                    </div>
                                                </div>
                                                </div>
                                                
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                                                <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
                                <div className="modal fade ag-modal" id="addAvailability" tabIndex="-1" aria-labelledby="addAvailabilityLable" aria-hidden="true">
                                    <form action="https://www.advizuru.com/add-virtual-details/1" method="post">
                                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="addAvailabilityLable">Add/Update Virtual Availability</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-field form-group">
                                                <label>Availability<sup className="text-danger">*</sup></label>
                                                <div className="form-check">
                                                    <input id="availibility_1" className="form-check-input" name="availibility[]" type="radio" value="Immediate"/>
                                                    <label htmlFor="availibility_1" className="form-check-label">Immediate</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="availibility_2" className="form-check-input" name="availibility[]" type="radio" value="Within one week"/>
                                                    <label htmlFor="availibility_2" className="form-check-label">Within one week</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="availibility_3" className="form-check-input" name="availibility[]" type="radio" value="Within two weeks"/>
                                                    <label htmlFor="availibility_3" className="form-check-label">Within two weeks</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="availibility_4" className="form-check-input" name="availibility[]" type="radio" value="Within one month"/>
                                                    <label htmlFor="availibility_4" className="form-check-label">Within one month</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="availibility_5" className="form-check-input" name="availibility[]" type="radio" value="Within two months"/>
                                                    <label htmlFor="availibility_5" className="form-check-label">Within two months</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="availibility_6" className="form-check-input" name="availibility[]" type="radio" value="Within three months"/>
                                                    <label htmlFor="availibility_6" className="form-check-label">Within three months</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="availibility_7" className="form-check-input" name="availibility[]" type="radio" defaultChecked="checked" value="More than three months"/>
                                                    <label htmlFor="availibility_7" className="form-check-label">More than three months</label>
                                                </div>
                                                <div className="help-block"></div>
                                                </div>
                                                <div className="form-field form-group">
                                                <label>Part Time Availability</label>
                                                <div className="form-check">
                                                    <input id="parttime_1" className="form-check-input" name="parttimeavailibility[]" type="radio" value="8"/>
                                                    <label htmlFor="parttime_1" className="form-check-label">Weekly 20 hours</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="parttime_2" className="form-check-input" name="parttimeavailibility[]" type="radio" value="9"/>
                                                    <label htmlFor="parttime_2" className="form-check-label">Weekly 10 hours</label>
                                                </div>
                                                <div className="form-check">
                                                    <input id="parttime_3" className="form-check-input" name="parttimeavailibility[]" type="radio" defaultChecked="checked" value="10"/>
                                                    <label htmlFor="parttime_3" className="form-check-label">Weekly 30 hours</label>
                                                </div>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button className="btn btn-primary-light btn-sm saveBtn">Add</button>
                                                <button type="button" className="btn btn-danger-light btn-sm" data-bs-dismiss="modal">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    </form>
                                </div>
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
}
                       



export default ProjectPartnerProfile;

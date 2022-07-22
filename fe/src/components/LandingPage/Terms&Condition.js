import React from "react";
class TermsConditions extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
            <div className="wrapper bg-gray">
            <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg-6">
                    <div className="modal-content login_modal">
                        
                        <div className="modal-body" id="login-sec">
                            <div className="mb-4">
                                <h5>Log in to Advizuru</h5>
                                <p className="mb-0">Welcome Back! Login with your data that you entered during registration</p>
                            </div>
                            <form action="https://www.advizuru.com/login-post" method="post" >
                                
                                <div className="alert alert-success msg" style={{display:'none'}} role="alert"></div>
        
                                <div className="form-group-md">
                                    <i className="flaticon flaticon-email-1"></i>
                                    <div className="form-floating">
                                        <input type="email" className="form-control" name="email" placeholder="name@example.com"/>
                                        <label htmlFor="signup_v1-email">Email address</label>
                                    </div>
                                    <div className="help-block"></div>
                                </div>
                                <div className="form-group-md">
                                    <i className="flaticon flaticon-lock"></i>
                                    <div className="form-floating">
                                        <input type="password" name="password" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label htmlFor="floatingInput">Password</label>
                                    </div>
                                    <div className="help-block"></div>
                                </div>
                                <div className="d-between mb-4">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Remember me
                                        </label>
                                        <div className="help-block"></div>
                                    </div>
                                    <a  data-bs-toggle="modal" data-bs-target="#forgetPassword" id="forgetPasswordbtn">Forgot Password?</a>
                                </div>
                                <button className="btn btn-primary w-100 saveBtn">Login</button>
                                <span className="d-block or-line"><b>Or</b></span>
                                <button type="button" className="btn btn-light btn-google w-100">
                                    
                                    <i className="fa fa-google-plus me-2"></i>
                                    Sign In with Google
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
      
            <div className="modal fade" id="SignUpModal" tabIndex="-1" aria-labelledby="SignUpModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg-8">
                    <div className="modal-content signUp_modal">
                        <div className="modal-header border-bottom-0">
                           
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body p-0">
                            <h5><b>Let’s get started!</b> First, tell us what you’re looking for.</h5>
                                                <div className="row g-0">
                                <div className="col-md-6">
                                    <div className="block org-block">
                                        <i className="flaticon flaticon-team"></i>
                                        <p>Collaborate with other organization 
                                            for sharing business leads, 
                                            subcontracting resources &amp; projects 
                                            and hiring free lancers 
                                        </p>
                                        <h6>Find, collaborate with, Organization 
                                            &amp; skilled professionals.</h6>
                                            <button className="btn btn-primary w-100">Signup As Organization</button>
                                        
                                    </div>
                                </div>
                                <div className="col-md-6 bg-light-blue">
                                    <div className="block individual-block">
                                        <i className="flaticon flaticon-user-2"></i>
                                        <p>I’m looking for projects, business leads 
                                            &amp; training                                    
                                        </p>
                                        <h6>Find projects, share business leads, be 
                                            part of virtual team &amp; enhance your skill 
                                            as trainee or trainer</h6>
                                            <button className="btn btn-outline-primary w-100">Signup As Individual</button>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         
         <div className="modal fade" id="forgetPassword" tabIndex="-1" aria-labelledby="forgotPasswordLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg-6">
                    <div className="modal-content login_modal">
                        <div className="modal-body">
                            <div className="mb-4">
                                <h5>Reset Password</h5>
                                <p className="mb-0">
                                                        </p>
        
                                
                                <p className="mb-0">Enter your mail id to get temp password by mail.</p>
                            </div>
                            <form action="https://www.advizuru.com/forget-password" method="post">
                            <div className="alert alert-success msg" style={{display:'none'}} role="alert"></div>
                                
                                <div className="form-group-md">
                                    <i className="flaticon flaticon-email-1"></i>
                                    <div className="form-floating">
                                        <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label htmlFor="floatingInput">Your Email address</label>
                                    </div>
                                </div> 
                                <button className="btn btn-primary w-100 saveBtn">Reset My password</button> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>                          
                
        <div className="main-wrapper">
            <div className="cmt-page-title-row">
                <div className="cmt-page-title-row-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="page-title-heading">
                                    <h2 className="title">Terms &amp; Conditions</h2>
                                </div>
                                <div className="breadcrumb-wrapper">
                                    <span>
                                        <a title="Homepage" href="/index">Home</a>
                                    </span>
                                    <span>Terms &amp; Conditions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
            <div className="page-content pb-5 bg-white">
                <div className="container">
                    <div className="page-content-inner">
                        <p>PPN Solutions Private limited carries on the business inter alia, of providing an online marketplace, for Connecting, collaborating, Team building, advertisement and marketing, sales promotions, fulfillment services, and collection and disbursement services.</p>
                        <p>PPN Solutions Private limited owns a website - advizuru. which is an online marketplace, where users of the Website can place an order/(s) on various listed Advertising agents to fulfill the same.</p>
                        <p>Advizuru's role is limited to managing Website (defined below) over which the services are displayed and other incidental services are provided to enable the transactions between the Professionals and the Buyers of the services.
                        </p>
                        <p>The following terms and conditions (these "Terms of Service") govern your access to and use of the advizuru website, including any content, functionality, and services offered on or through www.advizuru.com</p>
                        <p>If you do not want to agree to these Terms of Service or the Privacy Policy, kindly discontinue the access or use of the Site. The privacy policy is an inclusive part of this agreement.</p>
                        <p className="list-bullet">In This Agreement:</p>
                        <ul className="sub-page-list">
                            <li>"Account" means the account you open when you register on the Website.</li>
                            <li>"Buyers" are users who purchase services on advizuru</li>
                            <li>"Sellers" are users who offer and perform services through an account on advizuru</li>
                            <li>"Projects/work" is where the seller can describe their work and the work's terms, to give an opportunity to the buyer to view the work and purchase the service or create an order. These projects are the services or work offered on advizuru.com alone.</li>
                            <li>"Completed Order" means the customer has accepted and approved the order changing the order status to completed.</li>
                            <li>"Website" means advizuru and instances of the same</li>
                            <li>"Intellectual Property Rights" means any and all intellectual property rights, existing worldwide and the subject matter of such rights, including:</li>
                            <li>Patents, copyright, rights in circuit layouts (or similar rights), registered designs, registered and unregistered trademarks, and any right to have confidential information kept confidentially</li>
                            <li>Any application or right to apply for registration of any of the rights referred to in paragraph (a), whether or not such rights are registered or capable of being registered and whether existing under any laws, at common law or in equity</li>
                            <li>"Orders" are the formal agreement between a buyer and seller/advizuru after a purchase was made using advizuru platform.</li>
                            <li>"Disputes" are disagreements experienced during an order between a buyer and seller.</li>
                            <li>By accessing and/or using the Website, you agree to the following terms with advizuru We may amend this agreement and any linked information from time to time by posting amended terms on the Website.</li>
                            <li>The Website is an online venue where users buy and seller sells services and items. Buyers and Sellers must register for an Account in order to buy or sell Seller Services and/or items. The Website enables buyers and sellers to work together online to complete and pay for Projects, buy and sell items and to use the services that we provide.</li>
                        </ul>
                        <p className="list-bullet">Before using the advizuru Website, we recommend that you read the whole Agreement, the Website policies and all linked information. Some Freelancer Websites may have additional or other terms.</p>
                        <ul className="sub-page-list">
                            <li>Only registered sellers may sell on advizuru</li>
                            <li>Users are responsible for scanning all transferred files for viruses and malware. advizuru will not be held responsible for any damages which might occur due to site usage, use of content or files transferred</li>
                            <li>Advizuru reserves the right to select the services to be displayed on its Website</li>
                            <li>Buyers are granted all rights for canceling the order. If an order is canceled (for any reason), the same may be taken care by the parties involved and not involve advizuru.com. The pre-determined agreement between the sellers &amp; buyers may be imposed. However, advizuru shall never be liable to any payments, refunds or credits whatsoever</li>
                            <p className="list-bullet">Projects uploaded may be removed by advizuru for violations to these Terms of Service, which may include (but are not limited to) the following violations and/or materials:</p>
                            <ul className="sub-page-list">
                                <li>Illegal or Fraudulent services, Copyright Infringement, Trademark Infringement</li>
                                <li>Adult oriented services, Pornographic, Inappropriate/Obscene</li>
                                <li>Spam, Nonsense, or Violent Projects</li>
                                <li>Projects misleading to buyers, including violations of third party terms of service</li>
                                <li>Reselling of regulated services/goods</li>
                            </ul>
                            <li>Projects/work that is removed for violations mentioned above, may result in the removal of the seller's account</li>
                            <li>Projects/work that is removed for violations is not eligible to be restored or edited</li>
                            <li>Projects/work may be removed from our Search feature due to poor performance and/or user misconduct</li>
                            <li>URLs in your Project/worktext that redirect to third-party websites are subject to approval and may be considered inappropriate to use on advizuru</li>
                            <li>Statements on the Overview of work/project Page that undermine or circumvent these Terms of Service is prohibited</li>
                            <li>advizuru retains the right to use all published delivered works for advizuru marketing and promotional purposes</li>
                            <li>Services requested on advizuru  must be an allowed service on advizuru</li>
                            <li>Buyers can request an order which addresses specific buyer requirements and receives email notification of order placed</li>
                            <li>Buyer can review and accept the total amount of the order</li>
                        </ul>
                        <p className="list-bullet">Reviews</p>
                        <ul className="sub-page-list">
                            <li>Reviews provided by buyers while completing an order are an essential part of advizuru rating system. Reviews demonstrate the buyer's overall experience with the sellers and their service. Buyers are encouraged to communicate to the seller any concerns experienced during their active order in regards to the service provided by the seller</li>
                        </ul>
                        <p className="list-bullet">Refunds</p>
                        <ul className="sub-page-list">
                            <li>Advizuru under no situation will be liable to refunds should there be any</li>
                        </ul>
                        <p className="list-bullet">User Conduct</p>
                        <p>advizuru enables people around the world to create, share, sell and purchase any service related to marketing &amp; advertising they need at an unbeatable value.</p>
                        <p>advizuru maintains a friendly, community spirited, and professional environment. Users should keep to that spirit while participating in any activity or extensions of advizuru</p>
                        <p>This section relates to the expected conduct users should adhere to while interacting with each other on advizuru</p>
                        <ul className="sub-page-list">
                            <li>Advizuru shall not be held responsible for any personal impairment or harm if users in the course of work request or provide and obtain Email addresses, Skype/IM usernames, telephone numbers or any other personal contact details to communicate outside of advizuru.com</li>
                            <li>advizuru does not provide any guarantee of the level of service offered to buyers</li>
                            <li>advizuru does not provide protection for users who interact outside of the advizuru platform</li>
                            <li>advizuru does not provide protection for users that are actively violating our Terms of Service</li>
                            <li>Rude, abusive, improper language or violent messages sent to users will not be tolerated and may result in an account warning or the suspension/removal of your account
                                This section relates to the service provided by advizuru</li>
                            <li>It's the responsibility of both the parties involved in financial transaction to honor financial terms and condition and advizuru will not have financial liability for the same</li>
                            <li>If Any party decided not to honor financial obligation on successful completion of assigned task, will be barred from using advizuru for using its services</li>
                        </ul>
                        <p className="list-bullet">Reporting Violations</p>
                        <ul className="sub-page-list">
                            <li>If you come across any content that may violate our Terms of Service, you should report it to us through the appropriate channels created to handle those issues as outlined in our Terms of Service. All cases are reviewed by our Trust &amp; Safety team. To protect individual privacy, the results of the investigation are not shared. You can review our Privacy Policy for more information.</li>
                        </ul>
                        <p className="list-bullet">Violations</p>
                        <ul className="sub-page-list">
                            <li>Users may receive a warning to their account for violations of our Terms of Service or any user misconduct reported to our Trust and Safety team. A warning will be sent to the user's email address and will be displayed for such user on the Site. Warnings do not limit account activity but can lead to your account becoming permanently disabled based on the severity of the violation.</li>
                        </ul>
                        <p className="list-bullet">Explicit content</p>
                        <ul className="sub-page-list">
                            <li>advizuru does not allow any exchange of adult oriented or pornographic materials and services.</li>
                        </ul>
                        <p className="list-bullet">Inappropriate Behavior &amp; Language</p>
                        <ul className="sub-page-list">
                            <li>Communication on advizuru should be friendly, constructive, and professional. advizuru.com condemns bullying, harassment, rudeness, offensive language and hate speech towards others. We allow users a medium for which messages are exchanged between individuals, a system to rate orders and to engage on larger platforms such as our Community Forum and Social Media pages. Phishing and Spam - advizuru.com takes the matter its members' security seriously. Any attempts to publish or send malicious content with the intent to compromise another member's account or computer environment is strictly prohibited. Please respect our member's privacy by not contacting them for commercial purposes without their consent.</li>
                        </ul>
                        <p className="list-bullet">Privacy &amp; Identity</p>
                        <ul className="sub-page-list">
                            <li>You may not publish or post other people's private and confidential information. Any exchange of personal information required for the completion of a service must be provided on the order page. Sellers further confirm that whatever information they receive from the buyer, which is not public domain, shall not be used for any purpose whatsoever other than for the delivery of the work to the buyer. Any users who engage and communicate off ofadvizuru.com will not be protected by our Terms of Service.</li>
                        </ul>
                        <p className="list-bullet">Fraud / Unlawful Use</p>
                        <ul className="sub-page-list">
                            <li>You may not use advizuru for any unlawful purposes or to conduct illegal activities.</li>
                        </ul>
                        <p className="list-bullet">Multiple Accounts</p>
                        <ul className="sub-page-list">
                            <li>To prevent fraud and abuse, users are limited to one active account. Any additional account determined to be created to circumvent guidelines, promote competitive advantages, or mislead the advizuru.com community will be disabled. Mass account creation may result in disabling of all related accounts. Note: any violations to advizuru.com's Terms of Service is cause for permanent suspension of all accounts..</li>
                        </ul>
                        <p className="list-bullet">Targeted Abuse</p>
                        <ul className="sub-page-list">
                            <li>We do not tolerate users who engage in targeted abuse or harassment towards other users on advizuru This includes creating new multiple accounts to harass members through our message or ordering system.</li>
                        </ul>
                        <p className="list-bullet">Selling Accounts</p>
                        <ul className="sub-page-list">
                            <li>You may not buy or sell advizuru accounts. advizuru reserves the right to put any account on hold or permanently disable accounts due to a breach of these terms of service or due to any illegal or inappropriate use of the Site or services.</li>
                            <li>Violation of advizuru Terms of Service may get your account disabled permanently.</li>
                            <li>Users with disabled accounts will not be able to sell or buy on advizuru</li>
                            <li>advizuru may make changes to its Terms of Service from time to time. When these changes are made, advizur will make a new copy of the terms of service available on this page.</li>
                            <li>You understand and agree that if you use advizuru after the date on which the Terms of Service have changed, advizuru will treat your use as acceptance of the updated Terms of Service.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                {/* <!--main wrapper closed--> */}
        
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://www.advizuru.com/assets/js/select2.min.js"></script>
        <script>
            $(document).ready(function(){	 
                $("#forgetPasswordbtn").click(function(){
                    $("#loginModal").hide();
                });
        
                $("#forgetPassword").on("hidden.bs.modal", function () {
                    $(".modal-backdrop ").removeClass("modal-backdrop ");
                });
        
                    }); 
        </script>
        <script>
            const loginBtn = document.getElementById("loader-btn");
            if(loginBtn)
            loginBtn.addEventListener('click', () => {
                loginBtn.classList.add("loading");
                setTimeout(() => loginBtn.classList.remove("loading"), 3000);
            });
        </script> */}
        
            </div>
            </>
        )
    }
}
export default TermsConditions; 
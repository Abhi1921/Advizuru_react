import React from "react";
class PrivacyPolicy extends React.Component{
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
                            <form>
                                
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
        {/* <!-- Signup Popup Style --> */}
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
         {/* <!-- Forgot passwrod Style --> */}
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
                            <form>
                            <div className="alert alert-success msg" style={{display:"none"}} role="alert"></div>
                                
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
                                    <h2 className="title">Privacy Policy</h2>
                                </div>
                                <div className="breadcrumb-wrapper">
                                    <span>
                                        <a title="Homepage" href="/index">Home</a>
                                    </span>
                                    <span>Privacy Policy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                    
            </div>
            <div className="page-content pb-5 bg-white">
                <div className="container">
                    <div className="page-content-inner">
                        <p>We understand that many companies and individuals have information of a sensitive nature
                            pertaining to them or their clients and thus we take great care to ensure the highest
                            possible levels of privacy.</p>
                        <p>To this end below are the details of our "Privacy Policy" which outlines our procedures on
                            the collection and use of Client information.</p>
                        <p>This Privacy Policy governs the manner in which Advizuru collects, uses, maintains and
                            discloses information collected from users (each, a "User") of the
                            digitalmarketinginstitute.com website ("Site"). This privacy policy applies to the Site and
                            all products and services offered by Digital Marketing Institute.</p>
                        <p>Advizuru operates the / website, the marketplace for various IT related services.This page
                            informs you of our policies regarding the collection, use, and disclosure of personal data
                            when you use our Service and the choices you have associated with that data.</p>
                        <p>We use your data to provide and improve the Service. By using the Service, you agree to the
                            collection and use of information in accordance with this policy. Unless otherwise defined
                            in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our
                            Terms and Conditions, accessible from <a href="advizuru.com"><b>advizuru.com</b></a></p>
                        <p className="list-bullet">Information Collection And Use</p>
                        <ul className="sub-page-list">
                            <li>We collect several different types of information for various purposes to provide and
                                improve our Service to you.</li>
                        </ul>
                        <p className="list-bullet">Types of Data Collected</p>
                        <ul className="sub-page-list">
                            <li>Personal Data: We may collect personal identification information from Users in a
                                variety of ways, including, but not limited to, when Users visit our site, register on
                                the site, place a job, subscribe to the newsletter, respond to a survey, fill out a
                                form, and in connection with other activities, services, features or resources we make
                                available on our Site. Users may be asked for, as appropriate, name, email address,
                                mailing address, phone number, credit card information. We will collect personal
                                identification information from Users only if they voluntarily submit such information
                                to us. Users can always refuse to supply personally identification information, except
                                that it may prevent them from engaging in certain Site related activities.</li>
                            <li>Advizuru may collect personal data about you on this website, including information
                                which you volunteer (for example by using our online feedback form). Information which
                                you provide in this way may on occasion be made available to third parties and/or
                                business partners, and may be used by Advizuru or/and its Business affilicates for the
                                purposes of, but not limited to, in which you provided it.</li>
                            <li>As part of routine administration, Advizuru collects statistical information such as
                                page view, and browser statistics. Where possible these are collected anonymously, and
                                are not on-sold or disclosed to others.</li>
                        </ul>
                        <p className="list-bullet">Cookies and Usage Data</p>
                        <ul className="sub-page-list">
                            <li>Usage Data : We may also collect information how the Service is accessed and used
                                ("Usage Data"). This Usage Data may include information such as your computer's Internet
                                Protocol address (e.g. IP address), browser type, browser version, the pages of our
                                Service that you visit, the time and date of your visit, the time spent on those pages,
                                unique device identifiers and other diagnostic data.</li>
                            <li>Advizuru does not retain client/project/individual personal information longer than is
                                necessary for the purposes of compliance with the law and routine administration.</li>
                            <li>Advizuru keeps client/project/individual information on controlled facilities, which are
                                secured against unauthorised access. Proof of identity will be required before
                                information is released to any person, including the client.</li>
                        </ul>
                        <p className="list-bullet">Tracking &amp; Cookies Data</p>
                        <ul className="sub-page-list">
                            <li>We use cookies and similar tracking technologies to track the activity on our Service
                                and hold certain information. Your acknowledgement and acceptance of these cookies will
                                be expressly provided by clicking on the cookie banner we present to you when visiting
                                the site.</li>
                            <li>Cookies are files with small amount of data which may include an anonymous unique
                                identifier. Cookies are sent to your browser from a website and stored on your device.
                                Tracking technologies also used are beacons, tags, and scripts to collect and track
                                information and to improve and analyze our Service.</li>
                            <li>You can instruct your browser to refuse all cookies or to indicate when a cookie is
                                being sent. However, if you do not accept cookies, you may not be able to use some
                                portions of our Service.</li>
                        </ul>
                        <p className="list-bullet">Cookie Types</p>
                        <ul className="sub-page-list">
                            <li>Two types of cookies may be used on the Site: session cookies and persistent cookies.
                                Session cookies are temporary cookies that remain in your browser or device until you
                                leave the site. They are deleted from your device once you leave the Site. Persistent
                                cookies are small files stored on your hard drive until you delete them or until they
                                reach their expiry date. These may, for example, be used to remember your preferences
                                when you use the Site, recognize you on your return, and enhance your experience on the
                                Site.</li>
                        </ul>
                        <p className="list-bullet">Use of Data</p>
                        <ul className="page-list">
                            <li>Advizuru uses the collected data for various purposes:</li>
                            <ul className="sub-page-list">
                                <li>To provide and maintain the Service</li>
                                <li>To notify you about changes to our Service</li>
                                <li>To allow you to participate in interactive features of our Service when you choose
                                    to do so</li>
                                <li>To provide customer care and support</li>
                                <li>To provide analysis or valuable information so that we can improve the Service</li>
                                <li>To monitor the usage of the Service</li>
                                <li>To detect, prevent and address technical issues</li>
                            </ul>
                        </ul>
                        <p className="list-bullet">Transfer Of Data</p>
                        <ul className="sub-page-list">
                            <li>Your information, including Personal Data, may be transferred to - and maintained on -
                                computers located outside of your state, province, country or other governmental
                                jurisdiction where the data protection laws may differ than those from your
                                jurisdiction.</li>
                            <li>If you are located outside India and choose to provide information to us, please note
                                that we transfer the data, including Personal Data, to India and process it there. Your
                                consent to this Privacy Policy followed by your submission of such information
                                represents your agreement to that transfer.</li>
                            <li>Advizuru will take all steps reasonably necessary to ensure that your data is treated
                                securely and in accordance with this Privacy Policy and no transfer of your Personal
                                Data will take place to an organization or a country unless there are adequate controls
                                in place including the security of your data and other personal information.</li>
                        </ul>
                        <p className="list-bullet">Disclosure Of Data</p>
                        <ul className="page-list">
                            <li>Legal Requirements:</li>
                            <li>Advizuru may disclose your Personal Data in the good faith belief that such action is
                                necessary to:</li>
                            <ul className="sub-page-list">
                                <li>To comply with a legal obligation</li>
                                <li>To protect and defend the rights or property of Advizuru</li>
                                <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
                                <li>To protect the personal safety of users of the Service or the public</li>
                                <li>To protect against legal liability</li>
                            </ul>
                        </ul>
                        <p className="list-bullet">Security Of Data</p>
                        <ul className="sub-page-list">
                            <li>The security of your data is important to us, but remember that no method of
                                transmission over the Internet, or method of electronic storage is 100% secure. While we
                                strive to use commercially acceptable means to protect your Personal Data, we cannot
                                guarantee its absolute security.</li>
                        </ul>
                        <p className="list-bullet">Service Providers</p>
                        <ul className="sub-page-list">
                            <li>We may employ third party companies and individuals to facilitate our Service ("Service
                                Providers"), to provide the Service on our behalf, to perform Service-related services
                                or to assist us in analyzing how our Service is used.</li>
                            <li>These third parties have access to your Personal Data only to perform these tasks on our
                                behalf and are obligated not to disclose or use it for any other purpose.</li>
                        </ul>
                        <p className="list-bullet">Links To Other Sites</p>
                        <ul className="sub-page-list">
                            <li>Our Service may contain links to other sites that are not operated by us. If you click
                                on a third party link, you will be directed to that third party's site. We strongly
                                advise you to review the Privacy Policy of every site you visit.</li>
                            <li>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</li>
                        </ul>
                        <p className="list-bullet">Children's Privacy</p>
                        <ul className="sub-page-list">
                            <li>Our Service does not address anyone under the age of 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                            </li>
                        </ul>
                        <p className="list-bullet">Changes To This Privacy Policy</p>
                        <ul className="sub-page-list">
                            <li>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.
                                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</li>
                        </ul>
                        <p className="list-bullet">Contact Us</p>
                        <ul className="sub-page-list">
                            <li>If you have any questions about this Privacy Policy, please contact us by email: <a href="mailto:info@advizuru.com">info@advizuru.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        {/* main wrapper closed */}
        {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://www.advizuru.com/assets/js/select2.min.js"></script>
        <script>
            $(document).ready(function(){	 
                $("#forgetPasswordbtn").click(function(){
                    $("#loginModal").hide();
                })
        
                ("#forgetPassword").on("hidden.bs.modal", function () {
                    $(".modal-backdrop ").removeClass("modal-backdrop ");
                })
        
                    }) 
        </script>
        <script>
            const loginBtn = document.getElementById("loader-btn");
            if(loginBtn)
            loginBtn.addEventListener('click', () => {
                loginBtn.classList.add("loading");
                setTimeout(()
                
                => loginBtn.classList.remove("loading"), 3000);
            })
        </script> */}
        
            </div>
            </>
        )
    }
}
export default PrivacyPolicy;
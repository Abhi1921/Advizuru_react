import {Link, hi} from "react-router-dom";
import './LandingPage.css';
function LandingPage() {
  return (
    <>  
        <div className="main-wrapper">
            <div className="section_one">
                <img src="assets/img/banner.jpg" className="img-fluid w-100" alt="home banner" width="1920" height="900" />
                <div className="container-fluid">
                    <div className="center">
                        <div className="section_content">
                            <h3>An Ecosystem for Organizations <br/>
                                & Professionals for 
                            </h3>
                            <p>Hiring | Freelancing | Training |
                                Subcontracting of Projects & Resources | Virtual teams
                                |
                                Business lead sharing & Promotion.</p>
                            <div className="flex-btn">
                                <Link to="project-partner"  className="btn btn-blue me-3">Register As A Professional /
                                    Individual User <i className="flaticon flaticon-right-arrow"></i></Link>
                                <Link  to="project-owner" className="btn btn-light">Register As An Organization
                                    <i className="flaticon flaticon-right-arrow"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_two">
                <div className="container-fluid d-between">
                    <h3><b>News :</b> Corporate Actions - Scheme of
                        Arrangement 2021</h3>
                    <a  className="btn btn-blue">Learn More
                        <i className="flaticon flaticon-right-arrow"></i></a>
                </div>
            </div>
            <div className="section_three space" id="ourServices">
                <div className="container-fluid">
                    <div className="row service_flex">
                        <div className="col-md-3 align-self-center">
                            <div className="slide_content">
                                <h2>All Advizuru Services</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum is simply dummy text of the printing and typesetting industry</p>
                                <a >Visit the knowledge Center</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="service_slider">
                                <div>
                                    <div className="slide_card">
                                        <img src="assets/img/slide-img-1.jpg" className="img-fluid" alt="slider image"
                                            width="357" height="201" />
                                        <div className="card_content">
                                            <h5>Recruitment</h5>
                                            <p>Advizuru is an organised online market place for corporate companies
                                                and individuals to showcase their business or individual
                                                professional portfolio, generate qualified business leads &
                                                associate for professional contracts.</p>
                                            <a >Learn More <i
                                                    className="flaticon flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="slide_card">
                                        <img src="assets/img/slide-img-2.jpg" className="img-fluid" alt="slider image"
                                            width="357" height="201" />
                                        <div className="card_content">
                                            <h5>Freelancing</h5>
                                            <p>Advizuru is an organised online market place for corporate companies
                                                and individuals to showcase their business or individual
                                                professional portfolio, generate qualified business leads &
                                                associate for professional contracts.</p>
                                            <a >Learn More <i
                                                    className="flaticon flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="slide_card">
                                        <img src="assets/img/slide-img-3.jpg" className="img-fluid" alt="slider image"
                                            width="357" height="201" />
                                        <div className="card_content">
                                            <h5>Subcontracting</h5>
                                            <p>Advizuru is an organised online market place for corporate companies
                                                and individuals to showcase their business or individual
                                                professional portfolio, generate qualified business leads &
                                                associate for professional contracts.</p>
                                            <a >Learn More <i
                                                    className="flaticon flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="slide_card">
                                        <img src="assets/img/slide-img-4.jpg" className="img-fluid" alt="slider image"
                                            width="357" height="201" />
                                        <div className="card_content">
                                            <h5>Subcontracting</h5>
                                            <p>Advizuru is an organised online market place for corporate companies
                                                and individuals to showcase their business or individual
                                                professional portfolio, generate qualified business leads &
                                                associate for professional contracts.</p>
                                            <a >Learn More <i
                                                    className="flaticon flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section_four space">
                <div className="container-fluid">
                    <div className="section_title">
                        <div>
                            <h2>All Advizuru Technologies </h2>
                            <p>Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry</p>
                        </div>
                        <a  className="btn btn-blue">See More
                            <i className="flaticon flaticon-right-arrow"></i></a>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="tech-card-new">
                                <div className="t-img-box">
                                    <img src="assets/img/sap-s-icon.png" className="img-fluid" width="184" height="72" alt="sap icon" />
                                </div>
                                <h4>Sap</h4>
                                <p>SAP is Enterprise software that is used to manage business operations and customer relations across various sectors and industries.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tech-card-new">
                                <div className="t-img-box">
                                    <img src="assets/img/oracle-s-icon.png" className="img-fluid" width="184" height="72" alt="sap icon" />
                                </div>
                                <h4>Oracle</h4>
                                <p>Advizuru offers a comprehensive Network of professionals & organizations with extensive experience in Oracle ERP , Oracle analytics , Oracle database etc.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tech-card-new">
                                <div className="t-img-box">
                                    <img src="assets/img/analytics-s-icon.png" className="img-fluid" width="184" height="72" alt="sap icon" />
                                </div>
                                <h4>Analytics</h4>
                                <p>Advizuru analytics offering include Business Intelligence, Corporate performance management, Big data , data visualization across key products i..e SAP BO, ORACLE , Qlikview , tableau.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tech-card-new">
                                <div className="t-img-box">
                                    <img src="assets/img/accounting-s-icon.png" className="img-fluid" width="184" height="72" alt="sap icon" />
                                </div>
                                <h4>Accounting & Finance</h4>
                                <p>This is one of the key functions of almost every business which is handled by an chartered accountant or a Bookkeeper. Advizuru offers a Network of professionals & organization's possessing multiple years extensive experience in Accounting, MIS reporting, Budgeting, Legal consolidation, Audit , Risk assurance, fund management etc for your customised for your business needs.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tech-card-new">
                                <div className="t-img-box">
                                    <img src="assets/img/microsoft-s-icon.png" className="img-fluid" width="184" height="72" alt="sap icon" />
                                </div>
                                <h4>Microsoft</h4>
                                <p>Microsoft service offering includes application development, maintenance, SharePoint, ERP & CRM. Through our extensive network of experienced freelancer's & Organization's we strive to provide customized, cost effective and cutting edge business solutions.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tech-card-new">
                                <div className="t-img-box">
                                    <img src="assets/img/web-technology-s-icon.png" className="img-fluid" width="184" height="72" alt="sap icon" />
                                </div>
                                <h4>Web Technology</h4>
                                <p>Advizuru offers a comprehensive Network of professionals & organizations with extensive experience in Oracle ERP , Oracle analytics , Oracle database etc.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="tech-card-new">
                                <div className="t-img-box">
                                    <img src="assets/img/sap-s-icon.png" className="img-fluid" width="184" height="72" alt="sap icon" />
                                </div>
                                <h4>Zoho</h4>
                                <p>Website. zoho.com. Zoho Office Suite is an Indian web-based online office suite containing word processing, spreadsheets, presentations, databases, note-taking, wikis, web conferencing, customer relationship management (CRM), project management, invoicing and other applications.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="section_five space">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-7">
                            <img src="assets/img/find-project1.png" className="img-fluid" alt="img-fluid" width=""
                                height="" />
                        </div>
                        <div className="col-md-5 align-self-center project_slider">
                            <div className="hoz_sliderContent">
                                <h3>Powerful services help you work, <br/>
                                    learn, Organize, Connect <br/>
                                    and create
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop
                                </p>
                                <a  className="link-1">Learn More <i
                                        className="flaticon flaticon-right-arrow"></i></a>
                            </div>
                            <div className="hoz_sliderContent">
                                <h3>Powerful services help you work, <br/>
                                    learn, Organize, Connect <br/>
                                    and create 2
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop
                                </p>
                                <a  className="link-1">Learn More <i
                                        className="flaticon flaticon-right-arrow"></i></a>
                            </div>
                            <div className="hoz_sliderContent">
                                <h3>Powerful services help you work, <br/>
                                    learn, Organize, Connect <br/>
                                    and create 3
                                </h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop
                                </p>
                                <a  className="link-1">Learn More <i
                                        className="flaticon flaticon-right-arrow"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gray-bg-slice">
                <div className="section_six space">
                    <div className="container-fluid">
                        <div className="row service_flex">
                            <div className="col-md-3 align-self-center">
                                <div className="slide_content">
                                    <h2>All Blog</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                        Ipsum is simply dummy text of the printing and typesetting industry</p>
                                    <a >Visit the knowledge Center</a>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="service_slider">
                                    <div>
                                        <div className="slide_card bg-white">
                                            <img src="assets/img/slide-img-4.jpg" className="img-fluid" alt="slider image"
                                                width="" height="" />
                                            <div className="card_content">
                                                <h5>Interested in growing your career?</h5>
                                                <p>Advizuru is an organised online market place for corporate companies
                                                    and individuals to showcase their business or individual
                                                    professional portfolio, generate qualified business leads &
                                                    associate for professional contracts.</p>
                                                <a >Learn More <i
                                                        className="flaticon flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slide_card bg-white">
                                            <img src="assets/img/slide-img-5.jpg" className="img-fluid" alt="slider image"
                                                width="" height="" />
                                            <div className="card_content">
                                                <h5>employers use credentials to validate skills</h5>
                                                <p>Advizuru is an organised online market place for corporate companies
                                                    and individuals to showcase their business or individual
                                                    professional portfolio, generate qualified business leads &
                                                    associate for professional contracts.</p>
                                                <a >Learn More <i
                                                        className="flaticon flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slide_card bg-white">
                                            <img src="assets/img/slide-img-1.jpg" className="img-fluid" alt="slider image"
                                                width="" height="" />
                                            <div className="card_content">
                                                <h5>SAP PP in steel industries</h5>
                                                <p>Advizuru is an organised online market place for corporate companies
                                                    and individuals to showcase their business or individual
                                                    professional portfolio, generate qualified business leads &
                                                    associate for professional contracts.</p>
                                                <a >Learn More <i
                                                        className="flaticon flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="slide_card bg-white">
                                            <img src="assets/img/slide-img-2.jpg" className="img-fluid" alt="slider image"
                                                width="" height="" />
                                            <div className="card_content">
                                                <h5>SAP PP in steel industries</h5>
                                                <p>Advizuru is an organised online market place for corporate companies
                                                    and individuals to showcase their business or individual
                                                    professional portfolio, generate qualified business leads &
                                                    associate for professional contracts.</p>
                                                <a >Learn More <i
                                                        className="flaticon flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_seven space">
                    <div className="container-fluid">
                        <div className="row about-flex">
                            <div className="col-md-3">
                                <div className="about_content">
                                    <h4>About Us</h4>
                                    <p>Advizuru is an organised online market
                                        place for corporate companies and
                                        individuals
                                        to showcase their business or individual professional portfolio, generate
                                        qualified
                                        business leads & associate for professional contracts. Our forte lies in
                                        providing
                                        our audience an access to filtered, authenticated and trustworthy client-vendor
                                        need
                                        based information and professional service exchange platform. As the name of the
                                        company suggests, we help develop Partners Network for seeking and rendering
                                        Professional services.
                                        Our core philosophy 'Help develop an ecosystem that enables Organizations &
                                        Professional's to choose right project partner's and contribute in churning
                                        business
                                        unit goals and profitability'.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="position-relative">
                                            <img src="assets/img/about-banner-1.png" className="img-fluid" alt="about image"
                                                width="" height="" />
                                            <div className="about_bannerContent">
                                                <h2>Use your skills to take
                                                    on climate <br/> change</h2>
                                                <p>Our core philosophy 'Help
                                                    develop an ecosystem that enables
                                                    Organizations &
                                                    Professional's to choose right project partner's and contribute in
                                                    churning
                                                    business unit goals and profitability'.</p>
                                                <a  className="btn btn btn-outline-light">Learn
                                                    More <i className="flaticon flaticon-right-arrow"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <img src="assets/img/about-img-1.png" className="img-fluid w-100" alt="about image"
                                            width="357" height="229" />
                                        <div className="about_subContent">
                                            <h3>Use your skills to take on
                                                climate change</h3>
                                            <p>Lorem Ipsum is simply
                                                dummy text of the printing and
                                                typesetting industry.
                                                Lorem Ipsum is simply dummy text </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section_eight">
                    <div className="container-fluid">

                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default LandingPage;

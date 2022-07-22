import {Outlet,Link} from "react-router-dom";
import SignUp from '../../components/LandingPage/SignUpModal';
import Login from "../../components/LandingPage/LoginModal";
import ForgotPassword from '../../components/LandingPage/ForgotPassword';
const LandingLayout = () => {
    return (
        <>
            <div className="wrapper bg-gray">
                <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top home-header">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center">
                            <Link className="navbar-brand" to="/">
                                <img src="assets/img/logo.png" alt="logo" className="large-logo" width="180" height="48" />
                                <img src="assets/img/small-logo.png" className="small-logo d-none" alt="logo" width="31" height="26" />
                            </Link>
                        </div>
                        <div className="ms-auto">
                            <div className="session_btn">
                                <a href="javacsript:void(0);" className="btn btn-login" data-bs-toggle="modal" data-bs-target="#loginModal">Login <i
                                    className="flaticon flaticon-lock"></i></a>
                                <a href="javacsript:void(0);" className="btn btn-blue"  data-bs-toggle="modal" data-bs-target="#SignUpModal">SignUp <i
                                        className="flaticon flaticon-user"></i></a>
                            </div>
                        </div>
                    </div>
                </nav>

                <Outlet>
                </Outlet>

                <Login></Login>
                <ForgotPassword></ForgotPassword>
                <SignUp></SignUp>
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="footer-logo">
                                    <img src="assets/img/ag-logo.png" className="img-fluid d-inline-block mb-4" alt="footer logo"
                                        width="180" height="51" />
                                    <p className="mb-0">Advizuru is an organised online market place for corporate companies and
                                        individuals to
                                        showcase their business or individual professional portfolio, generate qualified
                                        business leads & associate for professional contracts.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h4 className="f_heading">Useful Links</h4>
                                <ul className="list-unstyled footer-nav">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <a  data-bs-toggle="modal" data-bs-target="#loginModal">Find Project</a>
                                    </li>
                                    <li>
                                        <Link to="about-us">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/#ourServices">Our Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4 className="f_heading">Useful Links</h4>
                                <ul className="list-unstyled footer-nav">
                                    <li>
                                        <Link to="cookies">Cookies</Link>
                                    </li>
                                    <li>
                                        <Link to="privacy-policy">Privacy & Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="terms-conditions" >Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="contact-us">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h4 className="f_heading">CONTACT WITH US</h4>
                                <ul className="list-unstyled footer-nav">
                                    <li>
                                        <a ><i className=""></i> (+91) 9123456798</a>
                                    </li>
                                    <li>
                                        <a ><i className=""></i> info@advizuru.com</a>
                                    </li>
                                </ul>
                                <h4 className="f_heading">FOLLOW US</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a ><i className=""></i></a>
                                    </li>
                                    <li>
                                        <a ><i className=""></i></a>
                                    </li>
                                    <li>
                                        <a ><i className=""></i></a>
                                    </li>
                                    <li>
                                        <a ><i className=""></i></a>
                                    </li>
                                    <li>
                                        <a ><i className=""></i></a>
                                    </li>
                                    <li>
                                        <a ><i className=""></i></a>
                                    </li>
                                    <li>
                                        <a ><i className=""></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            
        </>
    );
}
export default LandingLayout


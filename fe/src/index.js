import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import LandingPage from "./views/LandingPage/LandingPage";
import LandingLayout  from "./components/layout/LandingLayout";
import NotFound from "./views/NotFound";
import ProjectPartner  from "./components/LandingPage/ProjectPartner";
import OrganizerSignup  from "./components/LandingPage/OrganizerSignup";
import AboutUs from './components/LandingPage/AboutUs';
import ContactUs from './components/LandingPage/ContactUs';
import PrivacyPolicy from './components/LandingPage/Privacy&Policy';
import TermsConditions from './components/LandingPage/Terms&Condition';
import Cookies from './components/LandingPage/Cookies';
import ProjectPartnerProfile from './components/LandingPage/ProjectPartnerProfile';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Ticket from './views/User/Tickets';
import UserDashboard  from "./views/User/Profile"
// admin
import Adminlogin from './components/Admin/Adminlogin';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingLayout></LandingLayout>}>
          <Route index element={<LandingPage></LandingPage>}></Route>
          <Route path="project-partner" element={<ProjectPartner></ProjectPartner>}></Route>
          <Route path="project-owner" element={<OrganizerSignup></OrganizerSignup>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
          <Route path="about-us" element={<AboutUs></AboutUs>}></Route>
          <Route path="contact-us" element={<ContactUs></ContactUs>}></Route>
          <Route path="privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path="terms-conditions" element={<TermsConditions></TermsConditions>}></Route>
          <Route path="cookies" element={<Cookies></Cookies>}></Route>
          <Route path="user-dashboard" element={<UserDashboard></UserDashboard>}></Route>
          <Route path="admin-login" element={<Adminlogin></Adminlogin>}></Route>
          <Route path="project-partner-profile" element={<ProjectPartnerProfile></ProjectPartnerProfile>}></Route>
          {/* Ticket Module */}
          <Route path="sub-contract" element={<Ticket></Ticket>}></Route>
        </Route>   
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

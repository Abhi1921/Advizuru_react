import React from "react";
import AddSubContract from "../../components/Tickets/AddSubContract";
import Recruitment from "../../components/Tickets/Recruitment"; 
import SubContract from "../../components/Tickets/SubContract";
import BusinessLeads from "../../components/Tickets/BusinessLeads";
import Leads from "../../components/Tickets/Leads";
import Services from "../../components/Tickets/Services";


class Ticket extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    };
      
    render(){
        return(
            <>
            <div className="main-wrapper spacing">
                    <div className="container">
                        <div className="tab-wrap full-tab">
                            <nav className="cust-nav-tab">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="recruitment-tab" data-bs-toggle="tab" data-bs-target="#recruitment" type="button" role="tab" aria-controls="recruitment" aria-selected="true">Recruitment</button>
                                <button className="nav-link " id="sub-contracting-tab" data-bs-toggle="tab" data-bs-target="#sub-contracting" type="button" role="tab" aria-controls="sub-contracting" aria-selected="false">Sub Contracting</button>
                                <button className="nav-link" id="nav-member-tab" data-bs-toggle="tab" data-bs-target="#nav-member" type="button" role="tab" aria-controls="nav-member" aria-selected="false">Business Leads List</button>
                                <button className="nav-link" id="leads-tab" data-bs-toggle="tab" data-bs-target="#leads" type="button" role="tab" aria-controls="leads" aria-selected="false">Leads
                                </button>
                                <button className="nav-link" id="services-tab" data-bs-toggle="tab" data-bs-target="#services" type="button" role="tab" aria-controls="services" aria-selected="false">Services
                                </button>
                                </div>
                            </nav>
                            <div className="tab-content cust-tab" id="nav-tabContent">
                                <Recruitment></Recruitment>
                                <SubContract></SubContract>
                                <AddSubContract></AddSubContract>
                                <BusinessLeads></BusinessLeads>
                                <Leads></Leads>
                                <Services></Services>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}
export default Ticket;
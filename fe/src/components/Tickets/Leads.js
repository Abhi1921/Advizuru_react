import React from 'react';
import AddLeads from './AddLeads';

class Leads extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <>
                <div className="tab-pane fade" id="leads" role="tabpanel" aria-labelledby="leads-tab">
                    <div className="d-flex justify-content-end p-2">
                        <a href=" " data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-light rounded-2 pt-1 pr-3 pb-1 me-1">Business Lead<i className="fal fa-user-tie"></i>
                        </a>
                       <AddLeads></AddLeads> 
                    </div>
                    <div className="listing p-2 pt-0">
                        <div id="record-list-leads" className="row m-0" data-url="https://www.advizuru.com/leads-listing" data-listurl="https://www.advizuru.com/org-recruitment-list">
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/NjI=752">62</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">SAP EPM 123</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">qwerty Weeks</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Inactive</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> $ 500</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">5th Sep, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" > Re-Open <i className="fas fa-unlock-alt"></i>
                                </a>
                                <a href=""  data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href=""  className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/NTk=712">59</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">SAP EPM 123</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">zz Weeks</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Active</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> ₹ 230</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">26th Aug, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(59, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/59/1')" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;59&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;4&quot;,&quot;bl_industry_fk&quot;:&quot;17&quot;,&quot;bl_category_fk&quot;:&quot;17&quot;,&quot;bl_heading&quot;:&quot;SAP EPM 123&quot;,&quot;bl_expected_effort&quot;:&quot;zz&quot;,&quot;bl_expected_effort_time&quot;:&quot;Weeks&quot;,&quot;bl_expected_cost&quot;:&quot;230&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;1&quot;,&quot;bl_start_date&quot;:&quot;1629916200&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.&quot;,&quot;bl_status&quot;:&quot;0&quot;,&quot;bl_image&quot;:&quot;&quot;,&quot;bl_created_on&quot;:&quot;1629870450&quot;,&quot;bl_updated_on&quot;:&quot;1629870450&quot;,&quot;bls_id&quot;:&quot;4&quot;,&quot;bls_name&quot;:&quot;Support&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;55&quot;,&quot;bll_leadid_fk&quot;:&quot;59&quot;,&quot;bll_city_fk&quot;:&quot;3395&quot;,&quot;bll_state_fk&quot;:&quot;737&quot;,&quot;bll_country_fk&quot;:&quot;99&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:&quot;INR&quot;,&quot;currency_code&quot;:&quot;₹&quot;,&quot;skill_id&quot;:&quot;35895,46047&quot;,&quot;skill_name&quot;:&quot; 11g on various UNIX FlavorsInvolved in Managing the databas, 1 To work as a part of the technical team and provide Level&quot;,&quot;city_name&quot;:&quot;Delhi&quot;,&quot;state_name&quot;:&quot;Delhi&quot;,&quot;country_name&quot;:&quot;India&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(59, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/59')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/NTM=397">53</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">CRM</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">566 Days</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Inactive</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> $ 5000</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">18th Aug, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(53, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/53/0')" className="btn bg-gradient btn-outline-success"> Re-Open <i className="fas fa-unlock-alt"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;53&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;2&quot;,&quot;bl_industry_fk&quot;:&quot;17&quot;,&quot;bl_category_fk&quot;:&quot;19&quot;,&quot;bl_heading&quot;:&quot;CRM&quot;,&quot;bl_expected_effort&quot;:&quot;566&quot;,&quot;bl_expected_effort_time&quot;:&quot;Days&quot;,&quot;bl_expected_cost&quot;:&quot;5000&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;2&quot;,&quot;bl_start_date&quot;:&quot;1629225000&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;Description\r\n&quot;,&quot;bl_status&quot;:&quot;1&quot;,&quot;bl_image&quot;:&quot;&quot;,&quot;bl_created_on&quot;:&quot;1629272028&quot;,&quot;bl_updated_on&quot;:&quot;1629272028&quot;,&quot;bls_id&quot;:&quot;2&quot;,&quot;bls_name&quot;:&quot;Advisory&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;49&quot;,&quot;bll_leadid_fk&quot;:&quot;53&quot;,&quot;bll_city_fk&quot;:&quot;4342&quot;,&quot;bll_state_fk&quot;:&quot;971&quot;,&quot;bll_country_fk&quot;:&quot;142&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:&quot;USD&quot;,&quot;currency_code&quot;:&quot;$&quot;,&quot;skill_id&quot;:&quot;35895&quot;,&quot;skill_name&quot;:&quot; 11g on various UNIX FlavorsInvolved in Managing the databas&quot;,&quot;city_name&quot;:&quot;Aguascalientes&quot;,&quot;state_name&quot;:&quot;Aguascalientes&quot;,&quot;country_name&quot;:&quot;Mexico&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(53, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/53')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/NTI=361">52</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">SAP </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">Low Days</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Active</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> $ 2000</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">18th Aug, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(52, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/52/1')" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;52&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;3&quot;,&quot;bl_industry_fk&quot;:&quot;15&quot;,&quot;bl_category_fk&quot;:&quot;15&quot;,&quot;bl_heading&quot;:&quot;SAP &quot;,&quot;bl_expected_effort&quot;:&quot;Low&quot;,&quot;bl_expected_effort_time&quot;:&quot;Days&quot;,&quot;bl_expected_cost&quot;:&quot;2000&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;2&quot;,&quot;bl_start_date&quot;:&quot;1629225000&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;desc&quot;,&quot;bl_status&quot;:&quot;0&quot;,&quot;bl_image&quot;:&quot;&quot;,&quot;bl_created_on&quot;:&quot;1629268566&quot;,&quot;bl_updated_on&quot;:&quot;1629268566&quot;,&quot;bls_id&quot;:&quot;3&quot;,&quot;bls_name&quot;:&quot;Product&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;48&quot;,&quot;bll_leadid_fk&quot;:&quot;52&quot;,&quot;bll_city_fk&quot;:&quot;3395&quot;,&quot;bll_state_fk&quot;:&quot;737&quot;,&quot;bll_country_fk&quot;:&quot;99&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:&quot;USD&quot;,&quot;currency_code&quot;:&quot;$&quot;,&quot;skill_id&quot;:&quot;35895&quot;,&quot;skill_name&quot;:&quot; 11g on various UNIX FlavorsInvolved in Managing the databas&quot;,&quot;city_name&quot;:&quot;Delhi&quot;,&quot;state_name&quot;:&quot;Delhi&quot;,&quot;country_name&quot;:&quot;India&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(52, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/52')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/NTE=999">51</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">SAP EPM 123</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">High Weeks</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Active</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> ₹ 5000</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">18th Aug, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(51, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/51/1')" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;51&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;1&quot;,&quot;bl_industry_fk&quot;:&quot;17&quot;,&quot;bl_category_fk&quot;:&quot;17&quot;,&quot;bl_heading&quot;:&quot;SAP EPM 123&quot;,&quot;bl_expected_effort&quot;:&quot;High&quot;,&quot;bl_expected_effort_time&quot;:&quot;Weeks&quot;,&quot;bl_expected_cost&quot;:&quot;5000&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;1&quot;,&quot;bl_start_date&quot;:&quot;1629225000&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;Description&quot;,&quot;bl_status&quot;:&quot;0&quot;,&quot;bl_image&quot;:&quot;&quot;,&quot;bl_created_on&quot;:&quot;1629268460&quot;,&quot;bl_updated_on&quot;:&quot;1629268460&quot;,&quot;bls_id&quot;:&quot;1&quot;,&quot;bls_name&quot;:&quot;Implementation&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;47&quot;,&quot;bll_leadid_fk&quot;:&quot;51&quot;,&quot;bll_city_fk&quot;:&quot;3488&quot;,&quot;bll_state_fk&quot;:&quot;745&quot;,&quot;bll_country_fk&quot;:&quot;99&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:&quot;INR&quot;,&quot;currency_code&quot;:&quot;₹&quot;,&quot;skill_id&quot;:&quot;35895,46047,51155&quot;,&quot;skill_name&quot;:&quot; 11g on various UNIX FlavorsInvolved in Managing the databas, 1 To work as a part of the technical team and provide Level, 12c agent installation and setupPerforming database health 122&quot;,&quot;city_name&quot;:&quot;Pune&quot;,&quot;state_name&quot;:&quot;Maharashtra&quot;,&quot;country_name&quot;:&quot;India&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(51, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/51')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/NTA=301">50</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">Testing</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">150 Days</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Active</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> ₹ 450</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">17th Aug, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(50, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/50/1')" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;50&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;1&quot;,&quot;bl_industry_fk&quot;:&quot;14&quot;,&quot;bl_category_fk&quot;:&quot;17&quot;,&quot;bl_heading&quot;:&quot;Testing&quot;,&quot;bl_expected_effort&quot;:&quot;150&quot;,&quot;bl_expected_effort_time&quot;:&quot;Days&quot;,&quot;bl_expected_cost&quot;:&quot;450&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;1&quot;,&quot;bl_start_date&quot;:&quot;1629138600&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;Description&quot;,&quot;bl_status&quot;:&quot;0&quot;,&quot;bl_image&quot;:&quot;&quot;,&quot;bl_created_on&quot;:&quot;1629202074&quot;,&quot;bl_updated_on&quot;:&quot;1629202074&quot;,&quot;bls_id&quot;:&quot;1&quot;,&quot;bls_name&quot;:&quot;Implementation&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;46&quot;,&quot;bll_leadid_fk&quot;:&quot;50&quot;,&quot;bll_city_fk&quot;:&quot;3387&quot;,&quot;bll_state_fk&quot;:&quot;735&quot;,&quot;bll_country_fk&quot;:&quot;99&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:&quot;INR&quot;,&quot;currency_code&quot;:&quot;₹&quot;,&quot;skill_id&quot;:&quot;35895,46047,51155&quot;,&quot;skill_name&quot;:&quot; 11g on various UNIX FlavorsInvolved in Managing the databas, 1 To work as a part of the technical team and provide Level, 12c agent installation and setupPerforming database health 122&quot;,&quot;city_name&quot;:&quot;Chandigarh&quot;,&quot;state_name&quot;:&quot;Chandigarh&quot;,&quot;country_name&quot;:&quot;India&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(50, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/50')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/NDA=107">40</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">Wordpress</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">123 Months</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Inactive</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> $ 25000</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">25th Jul, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(40, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/40/0')" className="btn bg-gradient btn-outline-success"> Re-Open <i className="fas fa-unlock-alt"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;40&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;4&quot;,&quot;bl_industry_fk&quot;:&quot;11&quot;,&quot;bl_category_fk&quot;:&quot;8&quot;,&quot;bl_heading&quot;:&quot;Wordpress&quot;,&quot;bl_expected_effort&quot;:&quot;123&quot;,&quot;bl_expected_effort_time&quot;:&quot;Months&quot;,&quot;bl_expected_cost&quot;:&quot;25000&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;2&quot;,&quot;bl_start_date&quot;:&quot;1627151400&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;\r\nDescription\r\n&quot;,&quot;bl_status&quot;:&quot;1&quot;,&quot;bl_image&quot;:null,&quot;bl_created_on&quot;:&quot;1627294590&quot;,&quot;bl_updated_on&quot;:&quot;1627294590&quot;,&quot;bls_id&quot;:&quot;4&quot;,&quot;bls_name&quot;:&quot;Support&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;36&quot;,&quot;bll_leadid_fk&quot;:&quot;40&quot;,&quot;bll_city_fk&quot;:&quot;3441&quot;,&quot;bll_state_fk&quot;:&quot;742&quot;,&quot;bll_country_fk&quot;:&quot;99&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:&quot;USD&quot;,&quot;currency_code&quot;:&quot;$&quot;,&quot;skill_id&quot;:&quot;51155&quot;,&quot;skill_name&quot;:&quot; 12c agent installation and setupPerforming database health 122&quot;,&quot;city_name&quot;:&quot;Bangalore&quot;,&quot;state_name&quot;:&quot;Karnataka&quot;,&quot;country_name&quot;:&quot;India&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(40, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/40')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/Mzg=402">38</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">qwerty</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">good Months</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Active</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> ₹ 10000</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">23rd Jul, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(38, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/38/1')" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;38&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;4&quot;,&quot;bl_industry_fk&quot;:&quot;14&quot;,&quot;bl_category_fk&quot;:&quot;15&quot;,&quot;bl_heading&quot;:&quot;qwerty&quot;,&quot;bl_expected_effort&quot;:&quot;good&quot;,&quot;bl_expected_effort_time&quot;:&quot;Months&quot;,&quot;bl_expected_cost&quot;:&quot;10000&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;1&quot;,&quot;bl_start_date&quot;:&quot;1626978600&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;Description&quot;,&quot;bl_status&quot;:&quot;0&quot;,&quot;bl_image&quot;:null,&quot;bl_created_on&quot;:&quot;1627126150&quot;,&quot;bl_updated_on&quot;:&quot;1627126150&quot;,&quot;bls_id&quot;:&quot;4&quot;,&quot;bls_name&quot;:&quot;Support&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;34&quot;,&quot;bll_leadid_fk&quot;:&quot;38&quot;,&quot;bll_city_fk&quot;:&quot;3396&quot;,&quot;bll_state_fk&quot;:&quot;737&quot;,&quot;bll_country_fk&quot;:&quot;99&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:&quot;INR&quot;,&quot;currency_code&quot;:&quot;₹&quot;,&quot;skill_id&quot;:&quot;35895,46047&quot;,&quot;skill_name&quot;:&quot; 11g on various UNIX FlavorsInvolved in Managing the databas, 1 To work as a part of the technical team and provide Level&quot;,&quot;city_name&quot;:&quot;New Delhi&quot;,&quot;state_name&quot;:&quot;Delhi&quot;,&quot;country_name&quot;:&quot;India&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(38, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/38')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/MzY=458">36</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">Heading</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">xyz Weeks</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Active</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> $ 512</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">15th Jul, 2021</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(36, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/36/1')" className="btn bg-gradient btn-outline-danger"> Close <i className="fas fa-lock"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;36&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;2&quot;,&quot;bl_industry_fk&quot;:&quot;9&quot;,&quot;bl_category_fk&quot;:&quot;9&quot;,&quot;bl_heading&quot;:&quot;Heading&quot;,&quot;bl_expected_effort&quot;:&quot;xyz&quot;,&quot;bl_expected_effort_time&quot;:&quot;Weeks&quot;,&quot;bl_expected_cost&quot;:&quot;512&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;2&quot;,&quot;bl_start_date&quot;:&quot;1626287400&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;DescriptionDescriptionDescriptionDescriptionDescription&quot;,&quot;bl_status&quot;:&quot;0&quot;,&quot;bl_image&quot;:null,&quot;bl_created_on&quot;:&quot;1626779586&quot;,&quot;bl_updated_on&quot;:&quot;1626779586&quot;,&quot;bls_id&quot;:&quot;2&quot;,&quot;bls_name&quot;:&quot;Advisory&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;32&quot;,&quot;bll_leadid_fk&quot;:&quot;36&quot;,&quot;bll_city_fk&quot;:&quot;3458&quot;,&quot;bll_state_fk&quot;:&quot;743&quot;,&quot;bll_country_fk&quot;:&quot;99&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:&quot;USD&quot;,&quot;currency_code&quot;:&quot;$&quot;,&quot;skill_id&quot;:&quot;35895,46047,51155&quot;,&quot;skill_name&quot;:&quot; 11g on various UNIX FlavorsInvolved in Managing the databas, 1 To work as a part of the technical team and provide Level, 12c agent installation and setupPerforming database health 122&quot;,&quot;city_name&quot;:&quot;Cochin (Kochi)&quot;,&quot;state_name&quot;:&quot;Kerala&quot;,&quot;country_name&quot;:&quot;India&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(36, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/36')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="exp-card leadblocks col-md-6 border-4 border-white border p-2">
                            <ul className="list-unstyled">
                            <li>
                                <span className="col-md-4 col">ID :</span>
                                <span className="col lblValue">
                                <a href="/lead-detail/NA==315">4</a>
                                </span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Heading :</span>
                                <span className="col lblValue">Reporting solution</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Contact Person Email :</span>
                                <span className="col lblValue"></span>
                            </li>
                            <li>
                                <span className="col-md-4 col text-wrap">Effort Required (No of Days) :</span>
                                <span className="col lblValue">150 Days</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Status :</span>
                                <span className="col lblValue"> Inactive</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Effor Benefit (approx) :</span>
                                <span className="col lblValue"> 200000</span>
                            </li>
                            <li>
                                <span className="col-md-4 col">Start Date :</span>
                                <span className="col lblValue">6th Feb, 2022</span>
                            </li>
                            </ul>
                            <ul className="list-unstyled">
                            <li className="flex-end">
                                <a href="" onclick="changeStatusRecordsFromList(4, $(this), 'leadblocks', 'https://www.advizuru.com/delete-lead/4/0')" className="btn bg-gradient btn-outline-success"> Re-Open <i className="fas fa-unlock-alt"></i>
                                </a>
                                <a href="" onclick="openEditLeadModal({&quot;bl_id&quot;:&quot;4&quot;,&quot;bl_userid_fk&quot;:&quot;3&quot;,&quot;bl_service_type_fk&quot;:&quot;1&quot;,&quot;bl_industry_fk&quot;:&quot;17&quot;,&quot;bl_category_fk&quot;:&quot;17&quot;,&quot;bl_heading&quot;:&quot;Reporting solution&quot;,&quot;bl_expected_effort&quot;:&quot;150&quot;,&quot;bl_expected_effort_time&quot;:&quot;Days&quot;,&quot;bl_expected_cost&quot;:&quot;200000&quot;,&quot;bl_expected_cost_converted&quot;:&quot;0&quot;,&quot;bl_currency&quot;:&quot;USD&quot;,&quot;bl_start_date&quot;:&quot;1644085800&quot;,&quot;bl_contact_person_type&quot;:&quot;self&quot;,&quot;bl_contact_person_email&quot;:&quot;&quot;,&quot;bl_contact_person_mobile&quot;:&quot;&quot;,&quot;bl_desc&quot;:&quot;Leads&quot;,&quot;bl_status&quot;:&quot;1&quot;,&quot;bl_image&quot;:null,&quot;bl_created_on&quot;:&quot;1528434009&quot;,&quot;bl_updated_on&quot;:&quot;1528434009&quot;,&quot;bls_id&quot;:&quot;1&quot;,&quot;bls_name&quot;:&quot;Implementation&quot;,&quot;bls_status&quot;:&quot;0&quot;,&quot;bll_id&quot;:&quot;3&quot;,&quot;bll_leadid_fk&quot;:&quot;4&quot;,&quot;bll_city_fk&quot;:&quot;3629&quot;,&quot;bll_state_fk&quot;:&quot;755&quot;,&quot;bll_country_fk&quot;:&quot;99&quot;,&quot;bll_other&quot;:&quot;&quot;,&quot;bll_status&quot;:&quot;0&quot;,&quot;currency_name&quot;:null,&quot;currency_code&quot;:null,&quot;skill_id&quot;:null,&quot;skill_name&quot;:null,&quot;city_name&quot;:&quot;Gorakhpur&quot;,&quot;state_name&quot;:&quot;Uttar Pradesh&quot;,&quot;country_name&quot;:&quot;India&quot;})" data-bs-toggle="modal" data-bs-target="#addBussinessLead" className="btn btn-secondary bg-gradient mx-2">
                                <i className="fas fa-pencil-alt"></i>
                                </a>
                                <a href="" onclick="deleteRecordsFromList(4, $(this), 'leadblocks', 'https://www.advizuru.com/deleteprojectow/4')" className="btn btn-danger bg-gradient">
                                <i className="fas fa-trash-alt"></i>
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div id="pagination-record-list-leads">
                        <div className="list-foot" id="pagination_ele">
                        <span className="text-muted small">Showing 1 to 10 of 11 entries</span>
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
export default Leads;
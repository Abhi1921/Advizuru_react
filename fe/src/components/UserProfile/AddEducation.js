import React from 'react';
import axios from 'axios';
import ReactFormInputValidation from "react-form-input-validation";

class AddEducation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields : {
                degree: "",
                institute: "",
                major: "",
                completion_year: "",
            },
            allDegree:[],
            allInstitution:[],
            errors: {}
        };

        this.props = props;
        this.form = new ReactFormInputValidation(this);
        this.form.useRules({
            degree: "required",
            institute: "required",
            major: "required",
            completion_year: "required",
        });
        this.form.onformsubmit = (fields) => {
            let obj = fields;
            obj.degree_id = obj.degree;
            obj.institute_id = obj.institute;
            axios.post(process.env.REACT_APP_BASE_URL + 'education/add', obj)
            .then(function (response) {
                console.log(response);
                alert("Saved Successfully");
            }) 
            .catch(function (error) {
                console.log(error, 'error');
                return error;
            }); 
        }
    };
     

            async componentDidMount() {
                this.getAllDegree();
                this.getAllInstitution();
                
            }

            getAllDegree = async(request) => {
                const req = await axios(process.env.REACT_APP_BASE_URL + 'degree');

                console.log(req, 'reqdegree');
                this.setState((prevState)=>({...prevState, allDegree: req.data.data}));
                
                };

            getAllInstitution = async(request) => {
                const req = await axios(process.env.REACT_APP_BASE_URL + 'institute');

                console.log(req, 'reqinstitution');
                this.setState((prevState)=>({...prevState, allInstitution: req.data.data}));
                
                };
    render(){
        return(
             <>
                    <div className="modal fade ag-modal show" id="addEducation" tabIndex="-1" aria-labelledby="addProjectsLabel" data-select2-id="select2-data-addEducation" aria-modal="true" role="dialog"  >
                        <form onSubmit={this.form.handleSubmit}>

                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-md">
                                
                                <div className="modal-content" data-select2-id="select2-data-6084-pvkl">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="addEducationLabel">Add Education</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body" data-select2-id="select2-data-6083-zi8u">
                                        <div className="form-group">
                                            <label>Degree<sup className="text-danger">*</sup></label>
                                            <select name="degree" id="degreesfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-degreesfield" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.degree}>
                                            <option data-select2-id="select2-data-3-bq7b">Select Degree</option>
                                            {
                                                this.state.allDegree && this.state.allDegree.map((row) => {
                                                    return (<option key = {row.id} value={row.id}>  {row.name }</option>)
                                                })
                                            }
                                            </select>
                                                
                                            <div className="help-block"></div>
                                            <label className="error">
                                            {this.state.errors.degree ? this.state.errors.degree : ""}
                                            </label> 
                                        </div>
                                        <div className="form-group">
                                            <label>Institution<sup className="text-danger">*</sup></label>
                                            <select name="institute" id="institutionsfield" className="js-states form-control select2-hidden-accessible" style={{width:'100%'}} tabIndex="-1" aria-hidden="true" data-select2-id="select2-data-institutionsfield" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.institution}>
                                            <option data-select2-id="select2-data-3-bq7b">Select Institution</option>
                                            {
                                                this.state.allInstitution && this.state.allInstitution.map((row) => {
                                                    return (<option key = {row.id} value={row.id}>  {row.name }</option>)
                                                })
                                            }
                                            </select>
                                            <span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="select2-data-6091-zx5r" style={{width: '100%'}}>
                                            <span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-disabled="false" aria-labelledby="select2-institutionsfield-container" aria-controls="select2-institutionsfield-container">
                                            <span className="select2-selection__rendered" id="select2-institutionsfield-container" role="textbox" aria-readonly="true" title="Select institute">
                                            <span className="select2-selection__placeholder">Select institute</span></span>
                                            <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
                                            <span className="dropdown-wrapper" aria-hidden="true"></span></span>
                                            <div className="help-block"></div>
                                            <label className="error">
                                            {this.state.errors.institution ? this.state.errors.institution : ""}
                                            </label> 
                                        </div>
                                        <div className="form-group">
                                            <label>Major<sup className="text-danger">*</sup></label>
                                            <input type="text" className="form-control" id="major" name="major" placeholder="" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.major}/>
                                            <div className="help-block"></div>
                                            <label className="error">
                                            {this.state.errors.major ? this.state.errors.major : ""}
                                            </label> 
                                        </div>
                                        <div className="form-group">
                                            <label>Completion Year<sup className="text-danger">*</sup></label>
                                            <select name="completion_year" className="form-control" onBlur={this.form.handleBlurEvent} onChange={this.form.handleChangeEvent} value={this.state.fields.completion_year}>
                                                <option value="">Select Completion Year</option>
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
                                            <label className="error">
                                            {this.state.errors.completion_year ? this.state.errors.completion_year : ""}
                                            </label> 
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
             
             </>
        )
    }
}
export default AddEducation;
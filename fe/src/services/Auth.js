import { call_api } from "./Core"

function login(request) { 
    call_api('POST', 'login', request, {}).then(function (res) { 
        return res;
    });
}
function Adminlogin(request) { 
    call_api('POST', 'login', request, {}).then(function (res) { 
        return res;
    });
}
function OwnerSignup(request) {
    call_api('POST', 'register', request, {}).then(function (res) {
        return res;
    });
}

function individualSignUp(request){
    call_api('POST', '', request, {}).then(function (res){
        return res;
    });
}

function forgotPassword(request){
    call_api('POST', '', request, {}).then(function (res){
        return res;
    });
}


export {Adminlogin,login, OwnerSignup, individualSignUp, forgotPassword}
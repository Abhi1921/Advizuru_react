import { call_api } from "./Core"
async function country() { 
    let data = await call_api('GET', 'country', {});
        console.log(data, 'test');
}

function state(request){
    call_api('GET', 'state', {}).then(function(res){
        return res;
    });

}

function city(request){
    call_api('GET', 'city', {}).then(function(res){
        return res;
    });
}

export { country, state , city }
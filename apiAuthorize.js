import http from "k6/http";
import {sleep} from 'k6'

const authorization = `Basic YXBpX2Nvbm5lY3Q6MTIzZHNkQDE=`
const eventId = 145
const  uri = "https://api-apprc.expoplatform.com"
const login = '/oauth/authorize';
const payload = JSON.stringify({
    username: "a.ozernyuk+load@expoplatform.com",
    password: "Qwerty12#",
    eid: eventId,
    redirect_uri: 'token',
    android: true,
    response_type: 'code'

});
export const options={
    stages:[
        { duration: "10s", target: 1 },
        // { duration: "1m", target: 50 },
        // { duration: "20s", target: 0 },

    ]
}
var data = $.csv.toObjects(csv)
const params = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': authorization,
        'User-Agent': `Expoplatform apprc android Postman`,
        'Accept': `application/json`
    },
};

export default function (){
    const  postResp = http.post(uri + login, payload, params);
    sleep(1);
}
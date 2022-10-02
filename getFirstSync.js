import http from "k6/http";
import {sleep} from 'k6'

const  uri = "https://api-apprc.expoplatform.com";
const route = '/profileappnew?getSynchronise=true&timestamp=0&event_id=145&place_id=62&lang=en';
const authorization = `Basic YXBpX2Nvbm5lY3Q6MTIzZHNkQDE=`;

export const options={
    discardResponseBodies: false,
    stages:[
        { duration: "1m", target: 50 },
        { duration: "1m", target: 50 },
        { duration: "5m", target: 100 },
    ]
}
const params = {
    headers: {
         'Authorization': authorization,
    },
};

export default function (){
        const  res = http.get(uri + route,params);
        sleep(1);
}
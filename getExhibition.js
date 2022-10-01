import http from "k6/http";
import {sleep} from 'k6'

const  uri = "https://api-apprc.expoplatform.com";
const route = '/app/getexhibitions?app_id=1&lang=en';
const authorization = `Basic YXBpX2Nvbm5lY3Q6MTIzZHNkQDE=`;

export const options={
    stages:[
        { duration: "10s", target: 1 },
        // { duration: "1m", target: 50 },
        // { duration: "20s", target: 0 },

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
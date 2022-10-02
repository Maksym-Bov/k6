import http from "k6/http";
import {sleep} from 'k6'

const  uri = "https://api-apprc.expoplatform.com";
const route = '/getApp?id=1';
const authorization = `Basic YXBpX2Nvbm5lY3Q6MTIzZHNkQDE=`;

export const options={
    stages:[
        { duration: "1m", target: 50 },
        { duration: "1m", target: 50 },
        { duration: "5m", target: 100 },
        { duration: "2m", target: 300 },
        { duration: "2m", target: 400 },
        { duration: "2m", target: 300 },
        { duration: "2m", target: 500 },
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
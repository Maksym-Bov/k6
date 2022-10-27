import http from "k6/http";
import {sleep} from 'k6'

const  uri = "https://api-apprc.expoplatform.com";

const pages = ['/profileappnew?getSynchronise=true&timestamp=1664474545&event_id=145&place_id=62&lang=en',
'/visitors?getSynchronise=true&timestamp=1664474545&event_id=145&lang=en'];

const authorization = `Basic YXBpX2Nvbm5lY3Q6MTIzZHNkQDE=`;

export const options={
    discardResponseBodies: true,
    stages:[
        { duration: "30s", target: 150 },
        { duration: "30s", target: 200 },
        { duration: "1m", target: 300 },
        { duration: "2m", target: 1000 },
        { duration: "2m", target: 1000 },
        { duration: "2m", target: 300 },
        { duration: "2m", target: 1000 },
    ]
}
const params = {
    headers: {
        'Authorization': authorization,
    },
    timeout: "4m"
};

export default function (){
    for(const page of pages) {
        const  res = http.get(uri + page,params);
        sleep(10);
    }

}
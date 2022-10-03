import http from "k6/http";
import {sleep} from 'k6'

const  uri = "https://api-apprc.expoplatform.com";

const pages = ['/profileappnew?getSynchronise=true&timestamp=1648819273&event_id=145&place_id=62&lang=en',
'/visitors?getSynchronise=true&timestamp=1648819273&event_id=145&lang=en'];

const authorization = `Basic YXBpX2Nvbm5lY3Q6MTIzZHNkQDE=`;

export const options={
    discardResponseBodies: true,
    stages:[
        { duration: "30s", target: 10 },
        { duration: "30s", target: 2000 },
        { duration: "1m", target: 5000 },
        { duration: "2m", target: 6000 },
        { duration: "2m", target: 5000 },
        { duration: "2m", target: 6000 },
        { duration: "2m", target: 7000 },
    ]
}
const params = {
    headers: {
        'Authorization': authorization,
        'Accept-encoding':`gzip`,

    },
    timeout: "4m"
};

export default function (){
    for(const page of pages) {
        const  res = http.get(uri + page,params);
        sleep(1);
    }

}
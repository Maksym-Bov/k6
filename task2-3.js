import http from "k6/http";
import {sleep} from 'k6'

const  uri = "https://api-apprc.expoplatform.com";

const pages = [
`/visitors?getSynchronise=true&timestamp=1634925658&event_id=145&place_id=62&lang=en`,
`/account/recommendations?id=170057&token=de374eaff3dfb45aaff7f0ed69df6d40&event_id=145`,
`/app/database?type=android&statkey=sdfh749234*$%26*4%23kjsGGGWdsad&event_id=145`];

const authorization = `Basic YXBpX2Nvbm5lY3Q6MTIzZHNkQDE=`;

export const options={
    discardResponseBodies: true,
    stages:[
        { duration: "1m", target: 20 },
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
    for(const page of pages) {
        const  res = http.get(uri + page,params);
        sleep(1);
    }

}
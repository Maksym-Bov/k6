import http from "k6/http";
import {sleep} from 'k6';


const authorization = `Basic YXBpX2Nvbm5lY3Q6MTIzZHNkQDE=`
const  uri = "https://api-apprc.expoplatform.com"
const lead = '/profileappnew?time=1634925658&badge_scan=true&id=170057&token=de374eaff3dfb45aaff7f0ed69df6d40&event_id=145&team_member_id=170057&cid=1&new=0&barcode=110790062247';

export const options={
    stages:[
        { duration: "1m", target: 1000 },
        { duration: "1m", target: 2000 },
        { duration: "2m", target: 3000 },
        { duration: "2m", target: 5000 },
        { duration: "2m", target: 5000 },
    ],
}
const params = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': authorization,
        'User-Agent': `Expoplatform apprc android Postman`,
        'Accept': `*/*`,

    }
};


export default function () {
    const formData = {
        team_member_id: 62200,
        cid: 1,
        contacted: 1,
        new: 0,
        rate: 5,
        notes: 'test new=0, contqcted=1',
        barcode: 154979589012,
        exhibitorId:4738
    };
        const postResp = http.post(uri + lead, formData, params);
        sleep(1);
}

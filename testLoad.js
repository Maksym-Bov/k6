import http from "k6/http";
import {check, sleep} from 'k6'

const  uri = "https://rctest-clone-1625730023-rc.expoplatform.com/newfront"
const login = '/api/v1/login';
const payload = JSON.stringify({
    username: "Forest",
    password: "Qwerty1@"
});
export const options={
    stages:[
        { duration: "10s", target: 1 },
        // { duration: "1m", target: 50 },
        // { duration: "20s", target: 0 },

    ]
}
const params = {
    headers: {
        'Content-Type': 'application/json',
    },
};

export default function (){
    const  pages = [
        "/community",
        "/delegates",
        "/marketplace/exhibitors?limit=12"
    ]
    for (const page of pages){
        const  res = http.get(uri + page);
        check(res, {
            "status was 200": (r) => r.status == 200,
            "duration was <=": (r) => r.timings.duration <= 200
        });
        sleep(1);
    }
    const  postResp = http.post(uri + login, payload, params)
}
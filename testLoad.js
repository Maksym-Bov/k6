import http from "k6/http";
import {check, sleep} from 'k6'

const  uri = "https://rctest-clone-1625730023-rc.expoplatform.com/newfront"
export const options={
    stages:[
        { duration: "30s", target: 5 },
        // { duration: "1m", target: 50 },
        // { duration: "20s", target: 0 },

    ]
}

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
}
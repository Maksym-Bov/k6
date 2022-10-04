import http from 'k6/http';
import {sleep} from 'k6';

export const options={
    stages:[
        { duration: "2s", target: 2 }
    ],
}
const url = 'https://api-alpha2.expoplatform.com/api/v2/product/set';


const params = {
    headers: {
        'Content-Type':'multipart/form-data',
        'Authorization': '123456ijFEKau5TyCWaIMrfSszvFqQ7zVEMDCV'
    },
};

export default function () {
    const formData = [{
        exhibitor_id: 2420,
        id: 1598,
        name: `Product 18`,
        event_id: 147,
        description: '4test1'},
        {exhibitor_id: 2420,
            id: 1600,
            name: 'Product 20',
            event_id: 147,
            description: '4test2'} ]

    for (const param of formData){
        http.post(url, param, params);
        sleep(500);

        }

}
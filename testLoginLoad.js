import http from 'k6/http';

export default function () {
    const url = 'https://rctest-clone-1625730023-rc.expoplatform.com/api/v1/login';
    const payload = JSON.stringify({
        username: "Forest",
        password: "Qwerty1@"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    http.post(url, payload, params);
}
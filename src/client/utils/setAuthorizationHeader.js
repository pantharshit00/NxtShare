import axios from 'axios';

export default function () {
    if (typeof window !== "undefined") {
        if (window.localStorage.jwt_token) {
            return axios.defaults.headers.common["Authorization"] = "JWT " + window.localStorage.jwt_token;
        } else {
            return delete axios.defaults.headers.common["Authorization"];
        }
    }
};


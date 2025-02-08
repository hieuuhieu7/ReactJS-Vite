
// import axios from "axios"
import axios from './axios.customize';

const createUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);
}

const fetchAllUserApi = () => {
    const URL_BACKEND = "/api/v1/user";
    return axios.get(URL_BACKEND);
}

const updateUserApi = () => {

}

const deleteUserApi = () => {

}

export {
    createUserApi,
    fetchAllUserApi,
    updateUserApi,
    deleteUserApi
}
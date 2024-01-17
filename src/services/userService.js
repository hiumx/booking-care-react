import axios from "../axios";

export const handleLogin = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

export const getUser = (user) => {
    return axios.get(`/api/users/?id=${user.id}`)
}

export const getAllUsers = (userId) => {
    return axios.get(`/api/users?id=${userId}`)
}

export const createNewUserService = (data) => {
    return axios.post('api/users/create', data)
}

export const EditUserService = (inputData) => {
    return axios.put('api/users/edit', inputData)
}

export const deleteUser = (userId) => {
    return axios.delete('api/users/delete', { data: { id: userId } })
}

export const getAllCode = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);

}







import axios from'axios'

const server = 'http://127.0.0.1:8000/api'
const headers = {'Content-Type':'application/json'}
export const connect = () => axios.get(`${server}/connect`)


// export const userRegister = body = axios.post(`${server}/api/users`, {header, body})
// export const userList = () => axios.get(`${server}/api/user`)
// export const userDetail = id = axios.get(`${server}/api/users/${id}`)
// export const userRetriever = (key, value) = axios.get(`${server}/api/users/${key}/${value}`)
// export const userModify = body = axios.put(`${server}/api/users`, {header, body})
// export const userRemove = id = axios.delete(`${server}/api/users/${id}`)

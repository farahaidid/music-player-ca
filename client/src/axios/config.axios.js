import axios from "axios"
const baseUrl =  "http://localhost:3500/api/"
export const API = axios.create({
   baseURL: baseUrl
})

export const API_FORM_DATA = axios.create({
   baseURL: baseUrl,
   headers: {'Content-Type': 'multipart/form-data'}
})

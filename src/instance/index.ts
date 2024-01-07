import axios from "axios";

const httpsInstance = axios.create( {
    baseURL: process.env.REACT_APP_BASE_API_URL
} )

export default httpsInstance
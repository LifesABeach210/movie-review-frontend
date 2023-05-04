import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 3000,
});

export default Axios;

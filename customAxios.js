import axios from "axios";

const customAxios = axios.create();

// Remove the "User-Agent" header
delete customAxios.defaults.headers.common["User-Agent"];

export default customAxios;
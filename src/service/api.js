import axios from "axios";

const handleAxiosCreate = () => {
  const token = localStorage.getItem("token");
  let config = {
    baseURL: "http://localhost:3000",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.create(config);
}

let api = handleAxiosCreate();

const setToken = () => {
  api = handleAxiosCreate();
}


export { api, setToken };
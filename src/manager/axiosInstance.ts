import axios from "axios";

import { AxiosInstanceProps } from "./axios";

const Axios = (parameters: AxiosInstanceProps) => {
  const { baseURL } = parameters;
  const axiosInstance = axios.create({ baseURL });

  return axiosInstance;
};

export default Axios;

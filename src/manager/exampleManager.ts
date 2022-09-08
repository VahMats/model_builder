import { IAxiosResponse } from "./axios";
import Axios from "./axiosInstance";

const baseURL = process.env.BASE_URL;

const axiosInstance = Axios({ baseURL });

const exampleManager = {
  getData() {
    return axiosInstance.get<any, IAxiosResponse<any>>("/v1/data");
  },
};

export default exampleManager;

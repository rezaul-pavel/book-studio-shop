import axios from "axios";
import { baseUrl } from "@/apiEndpoints";

export const getRequest = (endPoint, param, headers = {}) => {
  return axios.get(`${baseUrl}/${endPoint}/${param}`, {
    headers,
  });
};

export const postRequest = (endPoint, payload = {}, headers = {}) => {
  return axios.post(`${baseUrl}/${endPoint}`, payload, {
    headers,
  });
};

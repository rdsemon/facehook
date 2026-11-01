import axios from "axios";
import { useAuth } from "./useAuth";
export const useAxios = () => {
  const { auth } = useAuth();

  const api = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  //   api.interceptors.response.use(
  //     function (config) {
  //       console.log(config);

  //       return config;
  //     },
  //     function (error) {
  //       return Promise.reject(error);
  //     },
  //   );

  //   api.interceptors.request.use(
  //     function (respons) {
  //       return respons;
  //     },
  //     function (error) {
  //       return Promise.reject(error);
  //     },
  //   );

  return api;
};

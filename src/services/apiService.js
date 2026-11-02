import { api } from "../api";

export const loginWithEmailAndPassword = async (userData) => {
  const response = await api.post("/auth/login", userData);

  return response.data;
};

export const getRefreshToken = async (token) => {
  const response = await api.post(`/auth/refresh-token`, token);

  return response.data;
};

export const getMe = async (userId) => {
  console.log("i am geting call");
  const response = await api.get(`/profile/${userId}`);
  console.log(response.data);
  return response.data;
};

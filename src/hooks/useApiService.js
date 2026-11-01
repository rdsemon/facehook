import { useAxios } from "./useAxios";

export const useApiservice = () => {
  const api = useAxios();

  const loginWithEmailAndPassword = async (userData) => {
    console.log(userData);
    const response = await api.post("/auth/login", userData);

    console.log(response);

    return response.data;
  };

  return { loginWithEmailAndPassword };
};

import { useLayoutEffect } from "react";
import { api } from "../api";
import { useAuth } from "../hooks/useAuth";

export const useAxios = () => {
  const { auth, setAuth } = useAuth();

  useLayoutEffect(() => {
    const requestInterceptor = api.interceptors.request.use(
      (config) => {
        const authToken = auth.user?.authToken;

        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseInterceptor = api.interceptors.response.use(
      (response) => response,

      async (error) => {
        const originalRequest = error.config;

        console.log("Response interceptor:", error.response?.status);

        if (
          error.response?.status === 401 &&
          originalRequest &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth.user?.refreshToken;

            if (!refreshToken) {
              throw new Error("Refresh token not found");
            }

            const response = await api.post("/auth/refresh-token", {
              refreshToken,
            });

            const token = response.data.token;

            setAuth((prev) => ({
              ...prev,
              user: {
                ...prev.user,
                authToken: token,
              },
            }));

            originalRequest.headers.Authorization = `Bearer ${token}`;

            return api(originalRequest);
          } catch (refreshError) {
            setAuth({});
            window.location.href = "/login";

            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [auth.user?.authToken, auth.user?.refreshToken, setAuth]);

  return api;
};

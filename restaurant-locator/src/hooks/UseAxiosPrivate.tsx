import React, { useEffect } from "react";
import { axiosInstance } from "../api/axios";
import { useRefreshToken } from "./UseRefreshToken";

export const useAxiosPrivate = () => {
  const refresh = useRefreshToken();

  useEffect(() => {
    const responseIntercept = axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosInstance(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosInstance.interceptors.response.eject(responseIntercept);
    };
  }, [refresh]);

  return axiosInstance;
};

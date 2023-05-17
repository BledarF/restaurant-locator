import React from "react";
import { useHttp } from "./UseHttp";
import {
  AUTH_ENDPOINT,
  BASE_URL,
  POST_METHOD,
  REFRESH_ENDPOINT,
} from "../data/AuthConstants";

export const useRefreshToken = () => {
  const refreshToken = async () => {
    const response = await useHttp(
      BASE_URL + AUTH_ENDPOINT + REFRESH_ENDPOINT,
      POST_METHOD
    );
    const newAccessToken = response?.data.accessToken;
    return newAccessToken;
  };

  return refreshToken;
};

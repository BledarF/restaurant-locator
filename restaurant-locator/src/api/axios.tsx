import React from "react";
import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
});

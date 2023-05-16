import axios, { AxiosResponse } from "axios";
import { axiosInstance } from "../api/axios";

export const useHttp = async (
  url: string,
  method: string,
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  data?: any
) => {
  try {
    const response: AxiosResponse = await axiosInstance(url, {
      method,
      data,
    });
    return response as AxiosResponse;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else {
      return undefined;
    }
  }
};

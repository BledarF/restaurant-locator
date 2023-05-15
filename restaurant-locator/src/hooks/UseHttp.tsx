import axios, { AxiosResponse } from "axios";

export const useHttp = async (
  url: string,
  method: string,
  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  data?: any
) => {
  try {
    const response: AxiosResponse = await axios(url, {
      method,
      data,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
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

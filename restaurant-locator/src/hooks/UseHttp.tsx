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
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

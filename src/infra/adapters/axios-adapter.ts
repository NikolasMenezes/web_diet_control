import axios, { type AxiosError, type AxiosHeaders, type AxiosResponse } from "axios";
import { URL_BASE_API } from "../../constants/api";

type requestPayload = {
  endpoint: string,
  method: string,
  headers: AxiosHeaders,
  body: string
}

export interface HttpClient {
  request: <T>(data: requestPayload) => Promise<{ statusCode: number, data?: T }>
}

export class AxiosHttpClientAdapter implements HttpClient {
  public async request<T>({ endpoint, method, headers, body }: requestPayload): Promise<{ statusCode: number; data?: T | undefined; }> {
    let axiosResponse: AxiosResponse;

    try {
      axiosResponse = await axios.request({
        url: URL_BASE_API + endpoint,
        method,
        headers,
        data: body
      })
    }
    catch (error) {
      let _error = error as AxiosError<{ message: string }>
      throw new Error(_error?.response?.data?.message);
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse?.data
    }
  };

}
import axios, { AxiosHeaders, type AxiosError, type AxiosResponse } from "axios";

type requestPayload = {
  endpoint: string,
  method: string,
  headers: any,
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
        url: "http://localhost:3408/api" + endpoint,
        method,
        headers,
        data: body
      })
    }
    catch (error) {
      let _error = error as AxiosError<{ error: string }>
      throw new Error(_error?.response?.data.error);
    }

    return {
      statusCode: axiosResponse.status,
      data: axiosResponse?.data
    }
  };

}
import { AxiosHttpClientAdapter, HttpClient } from "../adapters/http";

export const httpClientFactory = (): HttpClient => new AxiosHttpClientAdapter()
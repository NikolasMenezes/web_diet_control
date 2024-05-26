import { AxiosHttpClientAdapter, HttpClient } from "@/infra/adapters/http";

export const httpClientFactory = (): HttpClient => new AxiosHttpClientAdapter();

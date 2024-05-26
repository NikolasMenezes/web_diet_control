import { HttpClient } from "@/infra/adapters/http";
import { httpClientFactory } from "@/infra/factory/http-client-factory";

class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  public async create(payload: {
    name: string;
    email: string;
    password: string;
  }) {
    return this.httpClient.request({
      endpoint: "/user",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
}

export const userService = new UserService(httpClientFactory());

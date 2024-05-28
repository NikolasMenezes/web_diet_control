import { HttpClient } from "@/infra/adapters/http";
import { httpClientFactory } from "@/infra/factory/http-client-factory";

class UserService {
  constructor(private readonly httpClient: HttpClient) {}

  public create = async (payload: {
    name: string;
    email: string;
    password: string;
    isPremium: boolean;
  }) => {
    return await this.httpClient.request({
      endpoint: "/user",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  };
}

export const userService = new UserService(httpClientFactory());

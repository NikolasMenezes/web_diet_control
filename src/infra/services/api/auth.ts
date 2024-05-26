import { HttpClient } from "@/infra/adapters/http";
import { httpClientFactory } from "@/infra/factory/http-client-factory";

class AuthService {
  constructor(private readonly httpClient: HttpClient) {}

  public async login(payload: { email: string; password: string }) {
    return this.httpClient.request({
      endpoint: "/login",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
}

export const authService = new AuthService(httpClientFactory());

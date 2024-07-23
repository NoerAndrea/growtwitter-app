import { isAxiosError } from "axios";
import { growtwetterApi } from "./api.cliente-http";

interface Credentials {
  email: string;
  password: string;
}

export interface ResponseAuthAPI<T> {
  ok: boolean;
  message: string;
  authToken?: string;
  data?: T;
}

export async function login(credentials: Credentials) {
  try {
    const resposta = await growtwetterApi.post("/auth/signin", credentials);
    return resposta.data as ResponseAuthAPI<string>;
  } catch (err: unknown) {
    // Como descobrir erro do axios = erro de requisição
    if (isAxiosError(err)) {
      return err.response?.data as ResponseAuthAPI<string>;
    }
    // Erro do programador
    return {
      ok: false,
      message: "Deu ruim!",
    };
  }
}

export async function outLogin(token: string) {
  try {
    const resposta = await growtwetterApi.post(
      "/auth/logout",
      {},
      { headers: { Authorization: token } }
    );
    return resposta.data as ResponseAuthAPI<string>;
  } catch (err: unknown) {
    // Como descobrir erro do axios = erro de requisição
    if (isAxiosError(err)) {
      return err.response?.data as ResponseAuthAPI<string>;
    }
    // Erro do programador
    return {
      ok: false,
      message: "Deu ruim!",
    };
  }
}

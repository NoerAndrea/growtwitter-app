import { isAxiosError } from "axios";
import { growtwetterApi } from "./api.cliente-http";

interface Credentials {
  email: string;
  password: string;
}

interface ResponseAuthAPI {
  ok: boolean;
  message: string;
  authToken?: string;
}

export async function login(credentials: Credentials) {
  try {
    const resposta = await growtwetterApi.post("/auth/signin", credentials);
    return resposta.data as ResponseAuthAPI;
  } catch (err: unknown) {
    // Como descobrir erro do axios = erro de requisição
    if (isAxiosError(err)) {
      return err.response?.data as ResponseAuthAPI;
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
    return resposta.data as ResponseAuthAPI;
  } catch (err: unknown) {
    // Como descobrir erro do axios = erro de requisição
    if (isAxiosError(err)) {
      return err.response?.data as ResponseAuthAPI;
    }
    // Erro do programador
    return {
      ok: false,
      message: "Deu ruim!",
    };
  }
}

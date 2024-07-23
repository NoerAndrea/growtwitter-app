import { growtwetterApi } from "./api.cliente-http";
import { ResponseAuthAPI } from "./auth.service";

export interface Tweet {
  id: string;
  user: { username: string; name: string };
  content: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  likes: number[];
}

export async function listTweet() {
  try {
    const resposta = await growtwetterApi.get("/tweet/tweetsAll");
    return resposta.data as ResponseAuthAPI<Tweet[]>;
  } catch (err: unknown) {
    // Erro do programador
    return {
      ok: false,
      message: "Deu ruim!",
    };
  }
}

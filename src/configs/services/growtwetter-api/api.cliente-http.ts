import axios from "axios";

export const growtwetterApi = axios.create({
  baseURL: "http://localhost:8888",
});

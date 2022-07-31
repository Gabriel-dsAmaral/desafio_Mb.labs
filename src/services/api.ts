import axios from "axios";

export const api = axios.create({
  baseURL: "https://api-desafio-mb-labs.herokuapp.com",
});

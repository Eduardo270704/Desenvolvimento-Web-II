import axios, { AxiosInstance } from "axios";
import { NameProps, ResponseProps } from "../types";

class Service {
  private api: AxiosInstance = axios.create({
    baseURL: "http://localhost:3011",
    headers: {
      "Content-Type": "application/json",
    },
  });

  async list(column: string): Promise<NameProps[]> {
    try {
      const response = await this.api.get(`/list/${column}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar dados do backend:", error);
      throw error;
    }
  }

  async create(firstName: string, lastName: string): Promise<NameProps> {
    try {
      const response = await this.api.get(`/create/${firstName}/${lastName}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao criar nome:", error);
      throw error;
    }
  }

  async remove(id: string): Promise<ResponseProps> {
    try {
      const response = await this.api.get(`/remove${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao remover nome:", error);
      throw error;
    }
  }
}

const service = new Service();
export default service;

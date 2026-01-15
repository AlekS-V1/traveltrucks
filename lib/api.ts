import { CamperFilters } from "@/store/campers";
import { Camper } from "@/type/type";
import axios from "axios";

export type CatalogResponse = {
  items: Camper[];
  total: number;
};

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = async (page: number, limit: number, filters?: CamperFilters) => {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
  });
  
  if (filters) {
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        params.append(key, value);
      }
    });
  }
  
  const response = await axios.get<CatalogResponse>("/campers", { params });
  return response.data;
}

export const getCamperbyId = async (id: string) => {
  const response = await axios.get<Camper>(`/campers/${id}`);
  return response.data;
}
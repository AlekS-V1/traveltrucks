import { CamperFilters } from "@/store/campers";
import axios from "axios";

export type Camper = {
      id: string;
      name: string;
      price: number;
      rating: number;
      location: string;
      description: string;
      form: VehType;
      length: number;
      width: number;
      height: number;
      tank: number;
      consumption: number;
      transmission: string;
      engine: string;
      AC: boolean;
      bathroom: boolean;
      kitchen: boolean;
      TV: boolean;
      radio: boolean;
      refrigerator: boolean;
      microwave: boolean,
      gas: boolean;
      water: boolean;
      gallery:[
        {
          thumb: string;
          original: string;
        }
      ];
      reviews: [
        {
          reviewer_name: string;
          reviewer_rating: number;
          comment: string;
        }
      ]
};

export type CatalogResponse = {
  items: Camper[];
  total: number;
};

export type VehType = "panelTruck" | "fullyIntegrated" | "alcove";

// export type VehEquipment = "AC" | "Automatic" | "Bathroom" | "Kitchen" | "TV" | "Radio" | "Refrigerator" | "Microwave" | "Gas" | "Water";

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
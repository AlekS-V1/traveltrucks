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
      gallery: string[];
      reviews: [
        {
          reviewer_name: string;
          reviewer_rating: number;
          comment: string;
        },
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

// axios.defaults.baseURL = "http://localhost:3000";

export const getCampers = async (filters?: { form?: string }) => {
  const response = await axios.get<CatalogResponse>("http://localhost:3000/api/campers", { params: filters });
  return response.data;
}

export const getCamperbyId = async (id: string) => {
  const response = await axios.get<Camper>(`http://localhost:3000/api/campers/${id}`);
  return response.data;
}
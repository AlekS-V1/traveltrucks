import axios from "axios";

export type Camper = {
      id: number;
      name: string;
      price: number;
      rating: number;
      location: string;
      description: string;
      form: string;
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

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const getCampers = async () => {
  const response = await axios.get<CatalogResponse>("/campers");
  return response.data;
}

export const getCamperbyId = async (id: string) => {
  const response = await axios.get<Camper>(`/campers/${id}`);
  return response.data;
}
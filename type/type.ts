
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

export type VehType = "panelTruck" | "fullyIntegrated" | "alcove";
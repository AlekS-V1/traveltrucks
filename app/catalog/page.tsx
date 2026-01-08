'use client';

import CamperList from "@/components/CamperList/CamperList";
import { getCampers, Camper } from "@/lib/api";
import { useState } from "react";

const Catalog = () => {
  const [campers, setCampers] = useState<Camper[]>([]);
    const handlClick = async() => {
      const campersCatalog = await getCampers();
      if (campersCatalog?.items) {
        setCampers(campersCatalog.items);
      }
    }
  return (
    <section>
        <h1>Catalog Page</h1>
        <button onClick={handlClick}>Load Campers</button>
        {campers?.length > 0 &&<CamperList catalog={campers}/>}
    </section>
  ); 
};

export default Catalog;


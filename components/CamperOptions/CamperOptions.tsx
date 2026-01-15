import { Camper } from "@/type/type";
import css from "./CamperOptions.module.css";
import React from "react";

interface CamperOptionsProps {
  camper: Camper; 
  limit?: number
}
const CamperOptions = ({ camper, limit }: CamperOptionsProps) => {
  const options = [
    {
      show: true,
      icon: "diagram",
      label: camper.transmission.charAt(0).toUpperCase() + camper.transmission.slice(1),
    },
    {
      show: true,
      icon: "fuel-pump",
      label: camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1),
    },
    { show: camper.AC, icon: "ac", label: "AC" },
    { show: camper.bathroom, icon: "bathroom", label: "Bathroom" },
    { show: camper.kitchen, icon: "cup", label: "Kitchen" },
    { show: camper.TV, icon: "tv", label: "TV" },
    { show: camper.radio, icon: "ui-radios", label: "Radio" },
    { show: camper.refrigerator, icon: "solar_fridge", label: "Refrigerator" },
    { show: camper.microwave, icon: "microwave", label: "Microwave" },
    { show: camper.gas, icon: "gas", label: "Gas" },
    { show: camper.water, icon: "ion_water", label: "Water" },
  ].filter(o => o.show);

  const visible = limit ? options.slice(0, limit) : options;

  return (
    <li className={css.options}>
      {visible.map((opt, i) => (
        <p key={i} className={css.equipment}>
          <svg className={css.iconFilter} width="20" height="20">
            <use href={`/sprite.svg#${opt.icon}`} />
          </svg>
          {opt.label}
        </p>
      ))}
    </li>
  );
};

export default CamperOptions;
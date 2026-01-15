import { Camper } from "@/lib/api"
import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ camper }: { camper: Camper }) => {
  const details = [
    { label: "Form:", value: camper.form },
    { label: "Length:", value: camper.length },
    { label: "Width:", value: camper.width },
    { label: "Height:", value: camper.height },
    { label: "Tank:", value: camper.tank },
    { label: "Consumption:", value: camper.consumption },
  ];
    return (      
      <>
        {details.map((detail, index) => (
          <li key={index} className={css.detailRow}>
            <span className={css.detailText}>{detail.label}</span>
            <span className={css.detailText}>{detail.value}</span>
          </li>
        ))}
      </>
    
    )
}

export default VehicleDetails;
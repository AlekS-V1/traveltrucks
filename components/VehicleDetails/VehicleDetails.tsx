import { Camper } from "@/lib/api"
import css from "./VehicleDetails.module.css";

const VehicleDetails = ({ camper }: { camper: Camper }) => {
    return (
        
    <div className={css.vehicleDetails}>
        <h3>Vehicle Details</h3>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Form:</span>
          <span className={css.detailValue}>{camper.form}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Length:</span>
          <span className={css.detailValue}>{camper.length}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Width:</span>
          <span className={css.detailValue}>{camper.width}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Height:</span>
          <span className={css.detailValue}>{camper.height}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Tank:</span>
          <span className={css.detailValue}>{camper.tank}</span>
        </div>
        <div className={css.detailRow}>
          <span className={css.detailLabel}>Consumption:</span>
          <span className={css.detailValue}>{camper.consumption}</span>
        </div>
      </div>

    )
}

export default VehicleDetails;
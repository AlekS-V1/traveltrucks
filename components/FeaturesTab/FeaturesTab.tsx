import { Camper } from '@/type/type';
import css from './FeaturesTab.module.css';
import CamperOptions from '../CamperOptions/CamperOptions';
import VehicleDetails from '../VehicleDetails/VehicleDetails';

const FeaturesTab = ({camper}: {camper: Camper}) => {
    return (
        
        <div className={css.features}>
            <ul>
                <CamperOptions camper={camper} />
            </ul>
            <div className={css.vehicleDetails}>
                <h3 className={css.titleDetails}>Vehicle Details</h3>
                <div className={css.borderDetails} />
                <ul>
                    <VehicleDetails camper={camper} />
                </ul>
            </div>
        </div>
    );
}

export default FeaturesTab;
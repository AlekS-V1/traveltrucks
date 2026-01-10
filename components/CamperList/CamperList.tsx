import { Camper } from "@/lib/api"
import CamperItem from "../CamperItem/CamperItem";
import css from "./CamperList.module.css";

type Props = {
    catalog: Camper[];
}
const CamperList = ({catalog}: Props) => {
    return (
        <ul className={css.camperList}>
            {catalog.map((camper) => (
                <CamperItem key={camper.id} item={camper}/>
            ))}
        </ul>
    )
}

export default CamperList;
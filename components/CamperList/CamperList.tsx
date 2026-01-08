import { Camper } from "@/lib/api"
import CamperItem from "../CamperItem/CamperItem";

type Props = {
    catalog: Camper[];
}
const CamperList = ({catalog}: Props) => {
    return (
        <ul>
            {catalog.map((camper) => (
                <CamperItem key={camper.id} item={camper}/>
            ))}
        </ul>
    )
}

export default CamperList;
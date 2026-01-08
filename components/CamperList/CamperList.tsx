import { Campers } from "@/lib/api"
import CamperItem from "../CamperItem/CamperItem";

type Props = {
    catalog: Campers[];
}
const CamperList = ({catalog}: Props) => {
    console.log("catalog map:", catalog.map(c => c.name));
    return (
        <ul>
            {catalog.map((camper) => (
                <CamperItem key={camper.id} item={camper}/>
            ))}
        </ul>
    )
}

export default CamperList;
import { Camper } from "@/lib/api";

type CamperItemProps = {
    item: Camper;
}

const CamperItem = ({item}: CamperItemProps) => {
    return (
        <li>{item.name}</li>
    )
}

export default CamperItem;
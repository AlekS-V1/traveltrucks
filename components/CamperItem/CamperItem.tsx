import { Campers } from "@/lib/api";

type CamperItemProps = {
    item: Campers;
}

const CamperItem = ({item}: CamperItemProps) => {
    // console.log("camper name:", item.name);
    return (
        <li>{item.name}</li>
    )
}

export default CamperItem;
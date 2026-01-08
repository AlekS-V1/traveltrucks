import { getCamperbyId, getCampers } from "@/lib/api";

type Props = {
    params: Promise<{ id: string }>;
}

const CamperDetail = async({params}: Props) => {
    const { id } = await params;
    const camper = await getCamperbyId(id);
    console.log(camper);
    return <div>Camper Detail Page</div>;
}

export default CamperDetail;
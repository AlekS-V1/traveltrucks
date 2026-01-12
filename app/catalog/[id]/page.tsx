import { getCamperbyId } from "@/lib/api";
import css from "./CamperDetail.module.css";

export default async function CamperDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;

  const camper = await getCamperbyId(resolved.id);

  return (
    <div>
      <h2>{camper.name}</h2>
      <p>{camper.description}</p>
      <p>{camper.price}</p>
      <p>{camper.rating}</p>
      <div className={css.reviews}>{camper.reviews.map((r) =>(
                        <div key={r.reviewer_name}>
                            <span>{r.reviewer_rating}</span>
                        </div>
                    ))}</div>
      <p>{camper.location}</p>
      <p>{camper.transmission}</p>
      <p>{camper.engine}</p>

      {camper.AC && <p>AC</p>}
      {camper.bathroom && <p>Bathroom</p>}
      {camper.kitchen && <p>Kitchen</p>}
      {camper.TV && <p>TV</p>}
      {camper.radio && <p>Radio</p>}
      {camper.refrigerator && <p>Refrigerator</p>}
      {camper.microwave && <p>Microwave</p>}
      {camper.gas && <p>Gas</p>}
      {camper.water && <p>Water</p>}
    </div>
  );
}
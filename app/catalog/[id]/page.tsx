import { getCamperbyId } from "@/lib/api";
import css from "./CamperDetail.module.css";
import Image from "next/image";
import Link from "next/link";
import VehicleDetails from "@/components/VehicleDetails/VehicleDetails";
import CamperOptions from "@/components/CamperOptions/CamperOptions";

export default async function CamperDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolved = await params;

  const camper = await getCamperbyId(resolved.id);

  if (!camper) {
    return <p>Camper not found</p>;
  }

  return (

  <div className={css.camperCard}>                        
  
    <div className={css.boxHeader}>

        <div className={css.namePrice}>
            <h2 className={css.name}>{camper.name}</h2>
        </div>
        
    </div> 

    <div className={css.boxInfo}>
      <p className={css.ratingInfo}>
        <svg className={css.iconStar} width="16" height="16">
          <use href='/sprite.svg#star_disable' />
        </svg>{camper.rating}
        <span className={css.rating}>({camper.reviews.length} Reviews)</span>
      </p>

      <p className={css.location}>
        <svg className={css.iconFilter} width="20" height="20">
          <use href='/sprite.svg#map' />
        </svg>{camper.location}
      </p>
    </div>
    
    <p className={css.price} >{camper.price.toFixed(2)}</p>
    <div className={css.imageContainer}>
      {camper.gallery.map((img) => (
        <Image className={css.camperImage}
          key={img.original}
          src={img.original}
          alt={camper.name}
        width={292}
        height={312} />
      ))}      
    </div>

    <p className={css.description}>{camper.description}</p>

    <div className={css.features}>
        <CamperOptions camper={camper} />
        <VehicleDetails camper={camper} />
    </div>

 

    {/* <div className={css.buttonShowMore}>
      <Link href={`/catalog/${camper.id}`}>Show more</Link>
      
    </div> */}
  </div>

  );
}
    
    // <div>
    //   <h2>{camper.name}</h2>
    //   <p>{camper.description}</p>
    //   <p>{camper.price}</p>
    //   <p>{camper.rating}</p>
    //   <div className={css.reviews}>{camper.reviews.map((r) =>(
    //                     <div key={r.reviewer_name}>
    //                         <span>{r.reviewer_rating}</span>
    //                     </div>
    //                 ))}</div>
    //   <p>{camper.location}</p>
    //   <p>{camper.transmission}</p>
    //   <p>{camper.engine}</p>

    //   {camper.AC && <p>AC</p>}
    //   {camper.bathroom && <p>Bathroom</p>}
    //   {camper.kitchen && <p>Kitchen</p>}
    //   {camper.TV && <p>TV</p>}
    //   {camper.radio && <p>Radio</p>}
    //   {camper.refrigerator && <p>Refrigerator</p>}
    //   {camper.microwave && <p>Microwave</p>}
    //   {camper.gas && <p>Gas</p>}
    //   {camper.water && <p>Water</p>}
    // </div>
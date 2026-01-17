import { getCamperbyId } from "@/lib/api";
import css from "./CamperDetail.module.css";
import Image from "next/image";
import TabsContainer from "@/components/TabsContainer/TabsContainer";
import Link from "next/link";

interface CamperDetailProps {
  params: Promise<{ id: string }> 
}

export default async function CamperDetail({ params }: CamperDetailProps) {
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
      <Link href="#reviewers">
        <p className={css.ratingInfo}>
          <svg className={css.iconStar} width="16" height="16">
            <use href='/sprite.svg#star_disable' />
          </svg>{camper.rating}
          <span className={css.rating}>({camper.reviews.length} Reviews)</span>
        </p>
      </Link>

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
     
      <div className={css.reviewsFeaturesAndBook}>
        <TabsContainer camper={camper} />       
      </div>
  </div>
    
)};

    
 

    {/* <div className={css.buttonShowMore}>
      <Link href={`/catalog/${camper.id}`}>Show more</Link>
      
    </div> */}
  
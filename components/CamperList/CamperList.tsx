'use client';

import css from "./CamperList.module.css";
import Link from "next/link";
import Image from "next/image";
import { useCampersQuery } from "@/lib/useCampersQuery";
import { useCampersFilters } from "@/store/campers";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const CampersList = () => {
    const { data } = useCampersQuery();
    const appliedFilters = useCampersFilters((state) => state.appliedFilters);
      if (!data) return <p>Loading...</p>;

    const filteredCampers = data.items.filter((camper) => {
        if (appliedFilters.location && !camper.location.toLowerCase().includes(appliedFilters.location.toLowerCase())) return false;
        if (appliedFilters.transmission && camper.transmission !== appliedFilters.transmission) return false;
        if (appliedFilters.AC && !camper.AC) return false;
        if (appliedFilters.bathroom && !camper.bathroom) return false;
        if (appliedFilters.kitchen && !camper.kitchen) return false;
        if (appliedFilters.TV && !camper.TV) return false;
        return true;
    });

    return (
        <ul className={css.camperList}>
            {filteredCampers.map((camper) => (
                <li key={camper.id} className={css.listItem}>
                    <Image className={css.camperImage}
                            src={camper.gallery.map(image => image.thumb)[0]}
                            alt={camper.name}
                            width={292}
                            height={320}
                        />
                    <div className={css.camperCard}>                        
                        <div className={css.boxTop}>
                            <div className={css.boxHeader}>
                                <div className={css.namePrice}>
                                    <h2 className={css.name}>{camper.name}</h2>
                                    
                                    <div className={css.priceHeart}>
                                        <p className={css.price}>{camper.price}</p>
                                        <FavoriteButton camperId={camper.id} />  
                                    </div>
                                </div>
                                
                            </div> 

                            <div className={css.boxInfo}>
                                <svg className={css.iconStar} width="20" height="20">
                                    <use href='/sprite.svg#star_disable' />
                                </svg>
                                <p className={css.rating}>{camper.rating}
                                <span className={css.rating}>({camper.reviews.length} Reviews)</span>
                                </p>
                                <p className={css.location}><svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#map' />
                                </svg>{camper.location}</p>
                            </div>
                        </div>

                        <p className={css.description}>{camper.description}</p>

                        <div className={css.options}>
                            <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#diagram' />
                                </svg> 
                                {camper.transmission.charAt(0).toUpperCase() + camper.transmission.slice(1)}</p>
                            <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#fuel-pump' />
                                </svg>
                                {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}</p>
                            {camper.AC && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#ac' />
                                </svg>AC</p>}
                            {camper.bathroom && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#bathroom' />
                                </svg>Bathroom</p>}
                            {camper.kitchen && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#cup' />
                                </svg>Kitchen</p>}
                            {camper.TV && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#tv' />
                                </svg>TV</p>}
                            {camper.radio && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#ui-radios' />
                                </svg>Radio</p>}
                            {camper.refrigerator && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#solar_fridge' />
                                </svg>Refrigerator</p>}
                            {camper.microwave && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#microwave' />
                                </svg>Microwave</p>}
                            {camper.gas && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#gas' />
                                </svg>Gas</p>}
                            {camper.water && <p className={css.equipment}>
                                <svg className={css.iconFilter} width="20" height="20">
                                    <use href='/sprite.svg#ion_water' />
                                </svg>Water</p>}
                        </div> 

                        <div className={css.buttonShowMore}>
                            <Link href={`/catalog/${camper.id}`}>Show more</Link>
                            
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default CampersList;
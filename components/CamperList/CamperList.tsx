'use client';

import css from "./CamperList.module.css";
import Link from "next/link";
import Image from "next/image";
import { useCampersQuery } from "@/lib/useCampersQuery";
import { useCampersFilters } from "@/store/campers";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useEffect } from "react";
import CamperOptions from "../CamperOptions/CamperOptions";

const CampersList = () => {
    const { data } = useCampersQuery();
    const { appliedFilters, items, appendItems, incrementPage, page, total, limit } = useCampersFilters();
      
    useEffect(()=> {
        if (data?.items) {
            appendItems(data.items, data.total);
        }
    }, [data]);
    if (!data) return <p>Loading...</p>;

    const hasMore = page * limit < total;  

    const filteredCampers = items.filter((camper) => {
        if (appliedFilters.location && !camper.location.toLowerCase().includes(appliedFilters.location.toLowerCase())) return false;
        if (appliedFilters.transmission && camper.transmission !== appliedFilters.transmission) return false;
        if (appliedFilters.AC && !camper.AC) return false;
        if (appliedFilters.bathroom && !camper.bathroom) return false;
        if (appliedFilters.kitchen && !camper.kitchen) return false;
        if (appliedFilters.TV && !camper.TV) return false;
        return true;
    });

    return (
    <>
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
                                        <p className={css.price} >{camper.price.toFixed(2)}</p>
                                        <FavoriteButton camperId={camper.id} />  
                                    </div>
                                </div>
                                
                            </div> 

                            <div className={css.boxInfo}>                                
                                <p className={css.rating}>
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
                        </div>

                        <p className={css.description}>{camper.description}</p>                        
                        
                        <ul><CamperOptions camper={camper} limit={4} /></ul>
                        
                        <div className={css.buttonShowMore}>
                            <Link href={`/catalog/${camper.id}`}>Show more</Link>                            
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        {hasMore && (
            <button className={css.loadMore} 
            onClick={incrementPage}>Load More</button>)}
    
    </>
        );
}

export default CampersList;


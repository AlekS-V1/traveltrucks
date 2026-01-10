'use client';

import CamperList from "@/components/CamperList/CamperList";
import { getCampers, Camper } from "@/lib/api";
import { useState } from "react";
import css from "./catalog.module.css";

const Catalog = () => {
  const [campers, setCampers] = useState<Camper[]>([]);
    const handlClick = async() => {
      const campersCatalog = await getCampers();
      if (campersCatalog?.items) {
        setCampers(campersCatalog.items);
      }
    }
  return (
    <section className={css.catalogSection}>

        <div className={css.container}>
          <div className={css.catalogMenu}>
            <div>
              <h6 className={css.label}>Location</h6>
              <div className={css.inputWrapper}>
                <input className={css.input} name="location" type="text" placeholder="Enter location"/>
                <svg className={css.iconInput} width="20" height="20">
                  <use href='/sprite.svg#map' />
                </svg>
              </div>
            </div>
            <div className={css.filterContainer}>
              <h5 className={css.titleFiltrs}>Filtr</h5>

              <div className={css.equipmentContainer}>

                <h6 className={css.labelFiltr}>Vehicle equipment</h6>
              <div className={css.borderFiltr} />
              <div className={css.filterButtons}>
                <div className={css.buttonFilter}>
                  <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#ac' />
                  </svg>
                  <p>AC</p>
                </div>
              <div className={css.buttonFilter}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#diagram' />
                  </svg>
                  <p>Automatic</p>
                  </div>
              <div className={css.buttonFilter}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#cup' />
                  </svg>
                  <p>Kitchen</p>
                  </div>
              <div className={css.buttonFilter}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#tv' />
                  </svg>
                  <p>TV</p>
                  </div>
              <div className={css.buttonFilter}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#bathroom' />
                  </svg>
                  <p>Bathroom</p>
                  </div>
              </div>

              </div>
              
            <div className={css.vehicleTypeContainer}>

              <h6  className={css.labelFiltr}>Vehicle type</h6>
              <div className={css.borderFiltr} />
              <div className={css.filterButtons}>
                <button className={css.buttonFilter}>
                  <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#van' />
                  </svg>Van</button>
                <button className={css.buttonFilter}>
                  <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#full_integrated' />
                  </svg>Fully Integrated</button>
                <button className={css.buttonFilter}>
                  <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#alcove' />
                  </svg>Alcove</button>
              </div>

            </div>
              
            </div>
            <button className={css.buttonSearch} onClick={handlClick}>Search</button>
          </div>

          <div className={css.catalog}>
            {campers?.length > 0 &&<CamperList catalog={campers}/>}
          </div>
        </div>

    </section>
  ); 
};

export default Catalog;


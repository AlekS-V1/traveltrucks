'use client';
import { useCampersFilters } from "@/store/campers"
import { VehType } from "@/lib/api";
import css from "./SidebarCatalog.module.css";
// import Link from "next/link";

const form: VehType[] = ["panelTruck", "fullyIntegrated", "alcove"];

export const CampersFilters = () => {
    const {draftFilters, setDraftFilters, applyFilters} = useCampersFilters();

    return(
        <div className={css.container}>
          <div className={css.catalogMenu}>
            <div>
              <h6 className={css.label}>Location</h6>
              <div className={css.inputWrapper}>
                <input value={draftFilters.location} onChange={(e) => setDraftFilters({location: e.target.value})} className={css.input} name="location" type="text" placeholder="Enter location"/>
                <svg className={css.iconInput} width="20" height="20">
                  <use href='/sprite.svg#map' />
                </svg>
              </div>
            </div>
            <div className={css.filterContainer}>
              <h5 className={css.titleFiltrs}>Filters</h5>

              <div className={css.equipmentContainer}>

                <h6 className={css.labelFiltr}>Vehicle equipment</h6>
              <div className={css.borderFiltr} />
              <div className={css.filterButtons}>
                <button className={css.buttonFilter}
                onClick={() => setDraftFilters({AC: !draftFilters.AC})}>
                  <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#ac' />
                  </svg>
                  <p>AC</p>
                </button>
              <div className={css.buttonFilter}
                onClick={() => setDraftFilters({transmission: draftFilters.transmission ? "" : "automatic"})}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#diagram' />
                  </svg>
                  <p>Automatic</p>
                  </div>
              <div className={css.buttonFilter}
                onClick={() => setDraftFilters({kitchen: !draftFilters.kitchen})}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#cup' />
                  </svg>
                  <p>Kitchen</p>
                  </div>
              <div className={css.buttonFilter}
                onClick={() => setDraftFilters({TV: !draftFilters.TV})}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#tv' />
                  </svg>
                  <p>TV</p>
                  </div>
              <div className={css.buttonFilter}
                onClick={() => setDraftFilters({bathroom: !draftFilters.bathroom})}>
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
              <ul className={css.filterButtons}>
                <li className={css.buttonFilter} onClick={() =>
                        setDraftFilters({
                        form: draftFilters.form === "panelTruck" ? null : "panelTruck",
                        })
                    }>
                  {/* <Link href="/catalog/filter/panelTruck"> */}
                    <div>
                    <svg className={css.iconFilter} width="32" height="32">
                      <use href='/sprite.svg#van' />
                    </svg>
                    <p>Van</p>
                  </div>
                  {/* </Link> */}
                </li>
                <li className={css.buttonFilter}
                onClick={() =>
                    setDraftFilters({
                    form: draftFilters.form === "fullyIntegrated" ? null : "fullyIntegrated",
                    })
                }
                    >
                  {/* <Link href="/catalog/filter/fullyIntegrated"> */}
                    <div>
                    <svg className={css.iconFilter} width="32" height="32">
                      <use href='/sprite.svg#full_integrated' />
                    </svg>
                    <p>Fully Integrated</p>
                  </div>
                  {/* </Link> */}
                </li>
                <li className={css.buttonFilter} onClick={() =>
                        setDraftFilters({
                        form: draftFilters.form === "alcove" ? null : "alcove",
                        })
                    }
                    >
                  {/* <Link href="/catalog/filter/alcove"> */}
                  <div>
                    <svg className={css.iconFilter} width="32" height="32">
                      <use href='/sprite.svg#alcove' />
                    </svg>
                    <p>Alcove</p>
                  </div>
                  {/* </Link> */}
                </li>
              </ul>

            </div>
              
            </div>
            <button className={css.buttonSearch} onClick={applyFilters}>Search</button>
          </div>

          {/* <div className={css.catalog}>
            {campers?.length > 0 &&<CamperList catalog={campers}/>}
          </div> */}
        </div>
    )
}
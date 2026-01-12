'use client';
import { useCampersFilters } from "@/store/campers"
import { VehType } from "@/lib/api";
import css from "./SidebarCatalog.module.css";
import { FilterToggleButton } from "../FilterToggleButton/FilterToggleButton";
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
                <FilterToggleButton 
                  filterKey="AC"
                  isActive={draftFilters.AC.includes("true")}
                  toggleValue="true"
                  onChange={(key, value) => setDraftFilters({ AC: value })}
                  icon="/sprite.svg#ac"
                  label="AC"
                />
                {/* <button className={css.buttonFilter}
                onClick={() => setDraftFilters({AC: !draftFilters.AC})}>
                  <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#ac' />
                  </svg>
                  <p>AC</p>
                </button> */}
                <FilterToggleButton 
                  filterKey="transmission"
                  isActive={draftFilters.transmission.includes("automatic")}
                  toggleValue="automatic"
                  onChange={(key, value) => setDraftFilters({ transmission: value ? "automatic" : "" })}
                  icon="/sprite.svg#diagram"
                  label="Automatic"
                />
              {/* <div className={css.buttonFilter}
                onClick={() => setDraftFilters({transmission: draftFilters.transmission ? "" : "automatic"})}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#diagram' />
                  </svg>
                  <p>Automatic</p>
              </div> */}
              <FilterToggleButton 
                  filterKey="kitchen"
                  isActive={draftFilters.kitchen.includes("true")}
                  toggleValue="true"
                  onChange={(key, value) => setDraftFilters({ kitchen: value })}
                  icon="/sprite.svg#cup"
                  label="Kitchen"
                />
              {/* <div className={css.buttonFilter}
                onClick={() => setDraftFilters({kitchen: !draftFilters.kitchen})}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#cup' />
                  </svg>
                  <p>Kitchen</p>
                  </div> */}
                  <FilterToggleButton 
                  filterKey="TV"
                  isActive={draftFilters.TV.includes("true")}
                  toggleValue="true"
                  onChange={(key, value) => setDraftFilters({ TV: value })}
                  icon="/sprite.svg#tv"
                  label="TV"
                />
              {/* <div className={css.buttonFilter}
                onClick={() => setDraftFilters({TV: !draftFilters.TV})}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#tv' />
                  </svg>
                  <p>TV</p>
                  </div> */}
                <FilterToggleButton 
                  filterKey="bathroom"
                  isActive={draftFilters.bathroom.includes("true")}
                  toggleValue="true"
                  onChange={(key, value) => setDraftFilters({ bathroom: value })}
                  icon="/sprite.svg#bathroom"
                  label="Bathroom"
                />
              {/* <div className={css.buttonFilter}
                onClick={() => setDraftFilters({bathroom: !draftFilters.bathroom})}>
                <svg className={css.iconFilter} width="32" height="32">
                    <use href='/sprite.svg#bathroom' />
                  </svg>
                  <p>Bathroom</p>
                  </div> */}
              </div>

              </div>
              
            <div className={css.vehicleTypeContainer}>

              <h6  className={css.labelFiltr}>Vehicle type</h6>
              <div className={css.borderFiltr} />
              <ul className={css.filterButtons}>
                <li className={css.itemFilter} 
                  // onClick={() =>
                  // setDraftFilters({
                  //   form: draftFilters.form === "panelTruck" ? null : "panelTruck",
                  // })
                  //   }
                    >
                    <FilterToggleButton 
                  filterKey="form"
                  isActive={draftFilters.form.includes("panelTruck")}
                  toggleValue="panelTruck"
                  onChange={(key, value) => setDraftFilters({ form: value ? "panelTruck" : "" })}
                  icon="/sprite.svg#van"
                  label="Van"
                />
                  {/* <Link href="/catalog/filter/panelTruck"> */}
                    {/* <div>
                    <svg className={css.iconFilter} width="32" height="32">
                      <use href='/sprite.svg#van' />
                    </svg>
                    <p>Van</p>
                  </div> */}
                  {/* </Link> */}
                </li>
                <li className={css.itemFilter}
                // onClick={() =>
                //     setDraftFilters({
                //     form: draftFilters.form === "fullyIntegrated" ? null : "fullyIntegrated",
                //     })
                //
                    >
                      <FilterToggleButton 
                  filterKey="form"
                  isActive={draftFilters.form.includes("fullyIntegrated")}
                  toggleValue="fullyIntegrated"
                  onChange={(key, value) => setDraftFilters({ form: value ? "fullyIntegrated" : "" })}
                  icon="/sprite.svg#full_integrated"
                  label="Fully Integrated"
                />
                  {/* <Link href="/catalog/filter/fullyIntegrated"> */}
                    {/* <div>
                    <svg className={css.iconFilter} width="32" height="32">
                      <use href='/sprite.svg#full_integrated' />
                    </svg>
                    <p>Fully Integrated</p>
                  </div> */}
                  {/* </Link> */}
                </li>
                <li className={css.itemFilter} 
                // onClick={() =>
                //         setDraftFilters({
                //         form: draftFilters.form === "alcove" ? null : "alcove",
                //         })
                //     }
                    >
                    <FilterToggleButton 
                  filterKey="form"
                  isActive={draftFilters.form.includes("alcove")}
                  toggleValue="alcove"
                  onChange={(key, value) => setDraftFilters({ form: value ? "alcove" : "" })}
                  icon="/sprite.svg#alcove"
                  label="Alcove"
                />
                  {/* <Link href="/catalog/filter/alcove"> */}
                  {/* <div>
                    <svg className={css.iconFilter} width="32" height="32">
                      <use href='/sprite.svg#alcove' />
                    </svg>
                    <p>Alcove</p>
                  </div> */}
                  {/* </Link> */}
                </li>
              </ul>

            </div>
              
            </div>
            <div className={css.searchButtonWrapper}>
              <button className={css.buttonSearch} onClick={applyFilters}>Search</button>
            </div>
          </div>

        </div>
    )
}
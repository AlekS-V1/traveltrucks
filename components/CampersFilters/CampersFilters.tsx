'use client';
import { useCampersFilters, CamperFilters } from "@/store/campers"
import css from "./SidebarCatalog.module.css";
import { FilterToggleButton } from "../FilterToggleButton/FilterToggleButton";

interface ButtonsType {
  filterKey: keyof CamperFilters; 
  isActive: boolean; 
  toggleValue: string; 
  onChange: (value: string) => void; 
  icon: string; 
  label: string
}

export const CampersFilters = () => {
    const {draftFilters, setDraftFilters, applyFilters} = useCampersFilters();

    const buttonsEquip: Array<ButtonsType> = [
      {
        filterKey: "AC",
        isActive: draftFilters.AC.includes("true"),
        toggleValue: "true",
        onChange: (value: string) => setDraftFilters({ AC: value }),
        icon: "/sprite.svg#ac",
        label: "AC",
      },
      {
        filterKey: "transmission",
        isActive: draftFilters.transmission.includes("automatic"),
        toggleValue: "automatic",
        onChange: (value: string) => setDraftFilters({ transmission: value ? "automatic" : "" }),
        icon: "/sprite.svg#diagram",
        label: "Automatic",
      },
      {
        filterKey: "kitchen",
        isActive: draftFilters.kitchen.includes("true"),
        toggleValue: "true",
        onChange: (value: string) => setDraftFilters({ kitchen: value }),
        icon: "/sprite.svg#cup",
        label: "Kitchen",
      },
      {
        filterKey: "TV",
        isActive: draftFilters.TV.includes("true"),
        toggleValue: "true",
        onChange: (value: string) => setDraftFilters({ TV: value }),
        icon: "/sprite.svg#tv",
        label: "TV",
      },
      {
        filterKey: "bathroom",
        isActive: draftFilters.bathroom.includes("true"),
        toggleValue: "true",
        onChange: (value: string) => setDraftFilters({ bathroom: value }),
        icon: "/sprite.svg#bathroom",
        label: "Bathroom",
      },
    ]

    const buttonsType: Array<ButtonsType> = [ 
      {
        filterKey: "form",
        isActive: draftFilters.form.includes("panelTruck"),
        toggleValue: "panelTruck",
        onChange: (value: string) => setDraftFilters({ form: value ? "panelTruck" : ""  }),
        icon: "/sprite.svg#van",
        label: "Van",
      },
      {
        filterKey: "form",
        isActive: draftFilters.form.includes("fullyIntegrated"),
        toggleValue: "fullyIntegrated",
        onChange: (value: string) => setDraftFilters({ form: value ? "fullyIntegrated" : "" }),
        icon: "/sprite.svg#full_integrated",
        label: "Fully Integrated",
      },
      {
        filterKey: "form",
        isActive: draftFilters.form.includes("alcove"),
        toggleValue: "alcove",
        onChange: (value: string) => setDraftFilters({ form: value ? "alcove" : "" }),
        icon: "/sprite.svg#alcove",
        label: "Alcove",
      },    
    ]

    return (
      <div className={css.container}>
        <div className={css.catalogMenu}>
          <div>
            <h6 className={css.label}>Location</h6>
            <div className={css.inputWrapper}>
              <input value={draftFilters.location} 
                onChange={(e) => setDraftFilters({location: e.target.value})} 
                className={css.input} 
                name="location" 
                type="text" 
                placeholder="City"
              />
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
              <ul className={css.filterButtons}>                  
                  {buttonsEquip.map((button) => (
                    <li 
                      key={button.filterKey} 
                      className={css.options}>
                        <FilterToggleButton 
                          filterKey={button.filterKey}
                          isActive={button.isActive}
                          toggleValue={button.toggleValue}
                          onChange={button.onChange}
                          icon={button.icon}
                          label={button.label}
                        />
                    </li>                      
                  ))}
              </ul>

            </div>
            
            <div className={css.vehicleTypeContainer}>
              <h6  className={css.labelFiltr}>Vehicle type</h6>
              <div className={css.borderFiltr} />
              <ul className={css.filterButtons}>
                {buttonsType.map((button) => (
                  <li 
                    key={button.toggleValue} 
                    className={css.itemFilter}>
                      <FilterToggleButton 
                        filterKey={button.filterKey}
                        isActive={button.isActive}
                        toggleValue={button.toggleValue}
                        onChange={button.onChange}
                        icon={button.icon}
                        label={button.label}
                      />
                  </li>                      
                ))}
                
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
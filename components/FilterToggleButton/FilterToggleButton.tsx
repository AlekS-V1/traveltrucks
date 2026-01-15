import { useEffect, useState } from "react";
import css from "./FilterToggleButton.module.css";
import { CamperFilters } from "@/store/campers";

export interface FilterToggleButtonProps<T extends keyof CamperFilters> {
  filterKey: T;
  isActive?: boolean;
  onChange: (value: CamperFilters[T]) => void;
  label?: string;
  icon?: string;
  className?: string;
  toggleValue: CamperFilters[T];
};


export function FilterToggleButton<T extends keyof CamperFilters>({
    filterKey,
    isActive,
    onChange,
    label,
    icon,
    className ="",
    toggleValue,
}: FilterToggleButtonProps<T>) {
    // const [isActive, setIsActive] = useState(value);

    // useEffect(() => {
    //     setIsActive(value);
    // }, [value]);

    const handleClick = () => {
        const newValue = isActive ? ("" as CamperFilters[T]) : toggleValue;
        // setIsActive(newValue);
        onChange(newValue);
    };
    return (
        <button 
        className={`${css.buttonFilter} ${isActive ? css.active : ''} ${className}`}
        onClick={handleClick}>
            {icon && (
                <svg className={css.iconFilter} width="32" height="32">
                    <use href={icon} />
                </svg>
            )}
            <p className={css.labelButton}>{label}</p>
        </button>
    )
}
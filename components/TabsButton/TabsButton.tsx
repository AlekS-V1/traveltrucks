'use client';
import { useState } from "react";
import css from "./TabsButton.module.css";

interface TabsButtonProps {
    labels: string[]; 
    onChange: (index: number) => void
}

const TabsButton = ({labels, onChange}: TabsButtonProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        if (onChange) {
            onChange(index);
        }
    }
    return (
        <nav className={css.navReviewsFeatures}>
            <ul className={css.navList}>
                {labels.map((label, index) => (<li key={index} onClick={() => handleTabClick(index)} className={`${css.navItem} ${activeTab === index ? css.active : ''}`}>{label}</li>))}
            </ul>
        </nav>
    );

}
export default TabsButton;
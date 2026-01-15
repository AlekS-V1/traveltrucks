'use client';

import { useState } from "react";
import css from "./TabsContainer.module.css";
import { Camper } from "@/type/type";
import FeaturesTab from "../FeaturesTab/FeaturesTab";
import ReviewsTab from "../ReviewsTab/ReviewsTab";
import Book from "../Book/Book";

interface TabsContainerProps {
    camper: Camper;
}

const TabsContainer = ({ camper }: TabsContainerProps) => {
 const [activeTab, setActiveTab] = useState(0);
   
 const handleTabClick = (index: number) => {
    setActiveTab(index);
 }
 return (
       <div className={css.tabsContainer}> 
              <nav className={css.navReviewsFeatures}>
                     <ul className={css.navList}>
                            <li onClick={() => handleTabClick(0)} className={`${css.navItem} ${activeTab === 0 ? css.active : ''}`}>Features</li>
                            <li onClick={() => handleTabClick(1)} className={`${css.navItem} ${activeTab === 1 ? css.active : ''}`}>Reviews</li>
                     </ul>
              </nav>
              {/* <div className={css.borderSection} /> */}
              <div className={css.tabContentAndBook}>
                     {activeTab === 0 && <FeaturesTab camper={camper} />}
                     {activeTab === 1 && <ReviewsTab />}
                     <Book />
              </div>
       </div>
 )
}
export default TabsContainer;

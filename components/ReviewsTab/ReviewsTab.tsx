import {CamperProps } from "@/type/type";
import ReviewsItem from "../ReviewItem/ReviewItem";
import css from "./ReviewsTab.module.css";

const ReviewsTab = ({camper}: CamperProps) => {
    const reviewer = camper.reviews
    return (
    <ul className={css.reviews}>
        {reviewer.map((rev) => (
            <li className={css.reviewerItem} key={rev.reviewer_name}>
                <ReviewsItem 
                    reviewer_name={rev.reviewer_name} 
                    reviewer_rating={rev.reviewer_rating}  
                    comment={rev.comment}
                />
            </li>
        ))}
    </ul>);
}
export default ReviewsTab;
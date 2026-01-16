import StarRating from "../StarRating/StarRating";
import css from "./ReviewItem.module.css"

export interface ReviewersProps {  
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;       
};

const ReviewsItem = ({reviewer_name, reviewer_rating, comment}: ReviewersProps) => {
    
    return (
                               
        <div className={css.reviewerCard}>
            <div className={css.reviewerInfo}>
                <p className={css.avatar}>{reviewer_name[0].toUpperCase()}</p>
                <div>
                    <h6 className={css.name}>{reviewer_name}</h6>
                    <StarRating rate={reviewer_rating} />
                </div>
            </div>
            <div>
                <p className={css.comment}>{comment}</p>
            </div>
        </div>
        
    )
};

export default ReviewsItem;

// reviews": [
//         {
//           "reviewer_name": "Alice",
//           "reviewer_rating": 5,
//           "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//         },
//         {
//           "reviewer_name": "Bob",
//           "reviewer_rating": 4,
//           "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//         }
//       ]
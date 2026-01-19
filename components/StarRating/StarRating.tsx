import css from './StarRating.module.css'

type StarRatingProps = {
  rate: number;
  size?: 'small' | 'medium' | 'large';
};

export function StarRating({ rate, size = 'small' }: StarRatingProps) {
  const roundedRate = Math.round(rate);
  const valueClass = `value-${roundedRate}`;

  return (
    <div
    className={[ css.rating, css[`rating-${size}`], css.ratingStatic, css.starSvg, css[valueClass] ].join(' ')}
    //   className={`rating {rating-${size}} rating-static ${valueClass} star-svg`}
      role="meter"
      aria-valuemin={0}
      aria-valuemax={5}
      aria-valuenow={roundedRate}
      aria-label={`Rating: ${roundedRate} out of 5`}
    >
      <span className={css.srOnly}>{roundedRate} out of 5 stars</span>

      <div className={css.starContainer}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={`${css.star} ${css.starSvg}`}>
            <svg className={css.starEmpty}>
              <use xlinkHref={"/sprite.svg#starEmpty"} />
            </svg>
            <svg className={css.starFilled}>
              <use xlinkHref={"/sprite.svg#starFilled"} />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StarRating;
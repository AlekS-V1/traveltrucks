import css from "./Book.module.css";

const Book = () => {
    return (
        <form className={css.book} action="submit">
            <h3>Book your campervan now</h3>
            <p>Stay connected! We are always ready to help you.</p>
        </form>
    )
}
export default Book;
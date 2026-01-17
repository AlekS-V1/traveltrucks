import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import css from "./Book.module.css";
import * as Yup from "yup";
import FormikDatePicker from "../FormikDatePicker/FormikDatePicker";
import "react-datepicker/dist/react-datepicker.css";


interface BookingFormValues {
    username: string;
    email: string;
    booking_date: string;
    comment: string;
    dateRange: [Date | null, Date | null];

}
 const initialValues: BookingFormValues = {
    username: "",
    email: "",
    booking_date: "",
    comment: "",
    dateRange: [null, null],
 }

const BookFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name is too long")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  comment: Yup.string(),

  dateRange: Yup.array()
  .of(Yup.date().nullable())
  .test("range", "Оберіть діапазон дат", (value) => {
    return Boolean(value && value[0] && value[1]);
  }),

});


const Book = () => {
    const handleSubmit = (
        values: BookingFormValues,
        actions: FormikHelpers<BookingFormValues>,
    ) => {
        console.log("Booking:", values );
        actions.resetForm();
    }
    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={handleSubmit}
            validationSchema={BookFormSchema}>
            <Form className={css.book}>
                <fieldset className={css.fieldset}>
                    <Field 
                        className={css.input} 
                        type="text" 
                        name="username"
                        placeholder="Name*" 
                    />
                    <ErrorMessage 
                        name="username" 
                        component="span" 
                        className={css.error} 
                    />
                </fieldset>
                <fieldset className={css.fieldset}>
                    <Field 
                        type="text" 
                        name="email" 
                        className={css.input}
                        placeholder="Email*" 
                    />
                    <ErrorMessage 
                        name="email" 
                        component="span" 
                        className={css.error} 
                    />
                </fieldset>
                <fieldset className={css.fieldset}>
                    <FormikDatePicker
                        name="dateRange"
                        placeholder="Booking date*"
                    />
                   
                </fieldset>
                <fieldset className={css.fieldset}>
                    <Field 
                        as="textarea" 
                        name="comment" 
                        rows={4} 
                        className={css.inputarea}
                        placeholder="Comment" 
                    />
                    <ErrorMessage 
                        name="comment" 
                        component="span" 
                        className={css.error} 
                    />
                </fieldset>
                <button 
                    type="submit" 
                    className={css.button}
                    >Send
                </button>
            </Form>
        </Formik>
    )
}
export default Book;
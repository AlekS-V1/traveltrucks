'use client';

import { useField } from "formik";
import { useCallback } from "react";
import DatePicker from "react-datepicker";
import css from "./FormikDatePicker.module.css"
// import "./reactDatepickerBase.css";
import { addMonths } from "date-fns";

interface DatePickerProps {
    name: string;
    label?: string;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
}

const FormikDatePicker = ({label, name, ...props}: DatePickerProps)=> {
    const [field, meta, helpers] = useField<[Date | null, Date | null]>(name);

    const handleChange = useCallback(
        (dates: [Date | null, Date | null]) => {
            helpers.setValue(dates);
        }, [helpers]
    );
    const [startDate, endDate] = field.value || [null, null];

    return (
        <div className={css.wrapper}>
            {label && <label className={css.label}>{label}</label>}
            <DatePicker
                selected={startDate}
                onChange={handleChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={props.minDate ?? new Date()}
                maxDate={props.maxDate ?? addMonths(new Date(), 5)}
                onBlur={()=> helpers.setTouched(true)}
                placeholderText={props.placeholder}
                className={css.input} 
                popperClassName={css.popper}
                calendarClassName={css.calendar}
                showDisabledMonthNavigation
        />
            {meta.touched && meta.error && (
                <p className={css.errorText}>{meta.error as string}</p>
            )}
        </div>
    );
};

export default FormikDatePicker;
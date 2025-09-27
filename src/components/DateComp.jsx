import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./cmpStyles.module.scss";

const DateComp = () => {
  const [dateSelect, setDateSelect] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <span
        onClick={() => {
          setOpen(!open);
        }}
      >
        {dateSelect.toLocaleDateString()}
      </span>

      {open && (
        <div className={styles.calenderbox}>
        <DatePicker
          selected={dateSelect}
          onChange={(date) => {
            setDateSelect(date);
            setOpen(false);
          }}
          inline
        />
        </div>
      )}
    </>
  );
};

export default DateComp;

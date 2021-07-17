import React, { useState, useEffect } from "react";
import "./CustomDatePicker.css";
import Moment from "react-moment";
import moment from "moment";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CustomDatePicker = ({ dateChange }) => {
  const [date, setDate] = useState(moment.now());
  const datePickerRange = [-3, -2, -1, 0, 1, 2, 3];

  // const handleDateChange = () => {
  //   dateChange(date);
  // };
  useEffect(() => {
    //handleDateChange();
  }, [date]);

  const prevDateClickHandler = () => {
    setDate(moment(date).add(-1, "days"));
  };

  const nextDateClickHandler = () => {
    setDate(moment(date).add(1, "days"));
  };
  return (
    <>
      <div className="date-row">
        <AiOutlineLeft
          color="#ababab"
          className="navDateIcon"
          size={26}
          onClick={prevDateClickHandler}
        />
        {datePickerRange.map((ele, index) => {
          return (
            <div className="date-component" key={index}>
              <p className="dayOfWeek">
                <Moment add={{ days: ele }} format="ddd">
                  {date}
                </Moment>
              </p>
              <p className="day">
                <Moment add={{ days: ele }} format="DD">
                  {date}
                </Moment>
              </p>
            </div>
          );
        })}

        <AiOutlineRight
          color="#ababab"
          className="navDateIcon"
          size={26}
          onClick={nextDateClickHandler}
        />
      </div>
    </>
  );
};

export default CustomDatePicker;

import React from "react";
import "./CustomDatePicker.css";
import Moment from "react-moment";
import moment from "moment";

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

//TODO try to make this more efficient using map or forEach
const CustomDatePicker = () => {
  const date = new Date();
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <>
      <div className="date-row">
        <AiOutlineLeft color="#ababab" className="navDateIcon" size={26} />
        <div className="date-component">
          <p className="dayOfWeek">
            {days[moment().add(-3, "days").isoWeekday() - 1]}
          </p>
          <p className="day">
            <Moment subtract={{ days: 3 }} format="DD">
              {date}
            </Moment>
          </p>
        </div>
        <div className="date-component">
          <p className="dayOfWeek">
            {days[moment().add(-2, "days").isoWeekday() - 1]}
          </p>
          <p className="day">
            <Moment subtract={{ days: 2 }} format="DD">
              {date}
            </Moment>
          </p>
        </div>
        <div className="date-component">
          <p className="dayOfWeek">
            {days[moment().add(-1, "days").isoWeekday() - 1]}
          </p>
          <p className="day">
            <Moment subtract={{ days: 1 }} format="DD">
              {date}
            </Moment>
          </p>
        </div>
        <div className="date-component">
          <p className="dayOfWeek">{days[moment().isoWeekday() - 1]}</p>
          <p className="day">
            <Moment add={{ days: 0 }} format="DD">
              {date}
            </Moment>
          </p>
        </div>
        <div className="date-component">
          <p className="dayOfWeek">
            {days[moment().add(1, "days").isoWeekday() - 1]}
          </p>
          <p className="day">
            <Moment add={{ days: 1 }} format="DD">
              {date}
            </Moment>
          </p>
        </div>
        <div className="date-component">
          <p className="dayOfWeek">
            {days[moment().add(2, "days").isoWeekday() - 1]}
          </p>
          <p className="day">
            <Moment add={{ days: 2 }} format="DD">
              {date}
            </Moment>
          </p>
        </div>
        <div className="date-component">
          <p className="dayOfWeek">
            {days[moment().add(3, "days").isoWeekday() - 1]}
          </p>
          <p className="day">
            <Moment add={{ days: 3 }} format="DD">
              {date}
            </Moment>
          </p>
        </div>

        <AiOutlineRight color="#ababab" className="navDateIcon" size={26} />
      </div>
    </>
  );
};

export default CustomDatePicker;

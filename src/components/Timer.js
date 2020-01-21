import React from "react";
import "./styles/timer.scss";

const Timer = () => {
  const addZero = number => (number > 9 ? number : `0${number}`);

  const getTime = () => {
    const today = new Date();
    const date = addZero(today.getDate());
    const month = addZero(today.getMonth() + 1);
    const year = today.getFullYear();
    let day = "";
    switch (today.getDay()) {
      case 1:
        day = "MON";
        break;
      case 2:
        day = "TUE";
        break;
      case 3:
        day = "WED";
        break;
      case 4:
        day = "THU";
        break;
      case 5:
        day = "FRI";
        break;
      case 6:
        day = "SAT";
        break;
      case 0:
        day = "SUN";
        break;
      default:
        day = "???";
        break;
    }
    return { date, month, day, year };
  };

  const { date, month, day, year } = getTime();

  return (
    <div className="timer">
      <section className="left">
        <span className="day">{day}</span>
      </section>
      <section className="right">
        <span className="year">{year}</span>
        <div className="right-bottom">
          <span className="month">{month}</span>
          <span className="date">{date}</span>
        </div>
      </section>
    </div>
  );
};

export default Timer;

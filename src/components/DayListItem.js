import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";

export default function DayListItem(props) {
  function formatSpots(props) {
    let spotsRemaining = ""
    if (props.spots === 0) {
      spotsRemaining += 'no spots remaining'
    } else if (props.spots === 1) {
      spotsRemaining += '1 spot remaining'
    } else {
      spotsRemaining += props.spots + ' spots remaining'
    }
    return spotsRemaining;
  };

  let dayClass = classNames({
    'day-list__item': true,
    'day-list__item--selected': props.selected,
    'day-list__item--full': props.spots === 0
  });

  return (
    <li
      className={dayClass}
      onClick={() => props.setDay(props.name)}
      data-testid="day">
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props)}</h3>
    </li>
  );
};
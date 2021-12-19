import React from "react";
import 'components/DayListItem.scss';
import classNames from "classnames";

function formatSpots(spots) {
  let spotsRemaining = ""
  if (spots === 0) {
    spotsRemaining += 'no spots remaining'
  } else if (spots === 1) {
    spotsRemaining += '1 spot remaining'
  } else {
    spotsRemaining += spots + ' spots remaining'
  }
  return spotsRemaining;
};

export default function DayListItem(props) {
  
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
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};
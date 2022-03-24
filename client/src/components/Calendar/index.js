import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from 'moment';

export default function Calendar() {
  var currentWk = moment().week(12);
	var valid = function (current) {
		const start = moment ().add(3,'days')
        const end = moment().add (10, 'days')
		return moment(current).isBetween(start , end);
	};
	
	return <Datetime value={"Choose a Date"} timeFormat={false} isValidDate={ valid } />;
}

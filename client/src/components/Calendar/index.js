import React from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";

export default function Calendar() {
  var currentWk = moment().week(12);
	var valid = function (current) {
		return moment(current).isBetween('2022-03-13', '2022-03-20');
	};
  
	return <Datetime timeFormat={false} isValidDate={ valid } />;
}

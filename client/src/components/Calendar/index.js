import React, {useState, createContext} from "react";
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from 'moment';
import { useCallback } from "react";
import { ADD_TO_CART } from "../../utils/actions";



export default function Calendar() {
	
	
	function onChange (e) {
	    const orderdate = e['_d'] ;
		  console.log (orderdate)
		 
		 
	}

	var valid = function (current) {
		const start = moment ().add(3,'days')
        const end = moment().add (10, 'days')
		return moment(current).isBetween(start , end);
	};
	
	return <Datetime value={"Choose a Date"} timeFormat={false} isValidDate={ valid }  onChange={onChange} />;
}




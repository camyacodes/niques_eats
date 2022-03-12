import React from 'react'
import '../Calendar/style.css'
import $ from 'jquery';

const DatePicker =   $( function() {
  $( "#datepicker" ).datepicker();
});
DatePicker()

export default function Calendar() {
  return (
    <div>
          <p>Select Date: <input type="text" id="datepicker" /></p>
    </div>
  )
}

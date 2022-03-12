import React from 'react'
import '../Calendar/style.css'
import $ from 'jquery';

export default function Calendar() {
  const Picker = $( function() {
    $( "#datepicker" ).datepicker();
  });

  return (
    <div>
          <p>Select Date: <input type="text" id="datepicker" /></p>
    </div>
  )
}

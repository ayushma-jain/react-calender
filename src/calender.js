import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css'

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const events = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2022, 8, 13, 0, 0, 0),
      end: new Date(2022, 8, 20, 0, 0, 0),
    },
    {
        id: 1,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2022, 7, 3, 12, 0, 0),
        end: new Date(2022, 7, 3, 12, 30, 0),
      },
]

/*var ta = document.getElementsByClassName("rbc-events-container");
console.log(ta.click);
var stopMusicExt = document.getElementsByClassName("rbc-events-container");
console.log(stopMusicExt);
stopMusicExt.onclick = function() {
    alert("hi");
    var ta = document.getElementsByClassName("rbc-events-container")[0];
    document['player'].stopMusicExt(ta.value);
    ta.value = "";
};

document.querySelector(".rbc-events-container").addEventListener("click", function(){
    alert("Hello");
});*/
class MyCalendar extends Component {

  render() {
    console.log(events);
    return (
      <div className="App">
      
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="week"
          localizer={localizer}
          events={events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          resizable
          style={{ height: "80vh" }}
          onSelectEvent = {this.eventClicked}
          eventPropGetter={(this.props.eventPropGetter)}
    />
        <div>
        </div>
        
      </div>
    );
  }
}
export default MyCalendar;
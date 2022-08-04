import React from 'react'
import { Calendar, momentLocalizer } from "react-big-calendar";
import events from "./Events";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.css';

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

const moveEvent = function({ event, start, end }){
  console.log(event);
  console.log(start);
  console.log(end);
  const { events } = {
    events: events
  };

  const idx = events.indexOf(event);
  const updatedEvent = { ...event, start, end };

  const nextEvents = [...events];
  nextEvents.splice(idx, 1, updatedEvent);

  this.setState({
    events: nextEvents
  });
}
export default function Calender() {

  return (
    <div className="CalenderDiv">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="week"
          localizer={localizer}
          onEventDrop={moveEvent}
          draggableAccessor={event => true}
          events={events}
          resizable
          style={{ height: "80vh" }}
        />
  </div>
  )
}

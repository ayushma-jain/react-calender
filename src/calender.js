import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);
const events = [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2022, 2, 13, 0, 0, 0),
      end: new Date(2022, 2, 20, 0, 0, 0),
    },
]

class MyCalendar extends Component {

  render() {
    return (
      <div className="App">
        <DnDCalendar
            localizer={localizer}
            events={events}
            draggableAccessor={(event) => true}
        />
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="week"
          localizer={localizer}
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
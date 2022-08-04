import React from "react";
import events from "./Events";
//import {HTML5Backend} from "react-dnd-html5-backend";
//import {DndContext} from "react-dnd";
import {Calendar}  from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
//import moment from "moment";
//import 'moment/locale/nb';
//Calendar.momentLocalizer(moment);
//Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const DragAndDropCalendar = withDragAndDrop(Calendar);
console.log("Hi");
class CalenderWithDragDrop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events
    };

    this.moveEvent = this.moveEvent.bind(this);
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state;

    const idx = events.indexOf(event);
    const updatedEvent = { ...event, start, end };

    const nextEvents = [...events];
    nextEvents.splice(idx, 1, updatedEvent);

    this.setState({
      events: nextEvents
    });
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });

    this.setState({
      events: nextEvents
    });
  };

  render() {
    return (
      <DragAndDropCalendar
        selectable
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        defaultView="week"
        defaultDate={new Date(2015, 3, 12)}
      />
    );
  }
}
export default CalenderWithDragDrop;
//const BigCalendar = DndContext(HTML5Backend)(CalenderWithDragDrop);
//export default BigCalendar;
//ReactDOM.render(<Calendar />, document.getElementById("DragDropCalender"));
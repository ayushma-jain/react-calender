import React from 'react';
  import FullCalendar from "@fullcalendar/react";
  import dayGridPlugin from "@fullcalendar/daygrid";
  import timeGridPlugin from "@fullcalendar/timegrid";
  import interactionPlugin from "@fullcalendar/interaction";
  import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
  import axios from 'axios';
 
  import "@fullcalendar/daygrid/main.css";
  import "@fullcalendar/timegrid/main.css";


  export default class CalendarView extends React.Component {
   calendarComponentRef = React.createRef();

    state = {
      modal: false,
      calendarWeekends: true,
      event: []
    };

  componentDidMount() {
      axios.get('/events')
        .then(response => {
          this.setState({event: response.data})
          console.log({calendarEvents: response.data})
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    toggle = () => {
      this.setState({ modal: !this.state.modal });
    };

    handleEventClick = ({ event, el }) => {
      this.toggle();
      this.setState({ event });
    };

    render() {
      return (
        <div className="cal-container">
          <div style={{marginTop: 30}}>
            <FullCalendar
              defaultView="timeGridDay"
              header={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
              }}
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              nowIndicator='true'
              height='parent'
            />
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>
              EVENT TITLE SHOULD GO HERE: {this.state.event.title}
            </ModalHeader>
            <ModalBody>
              <div>
                EVENT INFO SHOULD GO HERE: {this.state.event.start}
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="primary">Do Something</Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
          </div>
        </div>
      );
    }
  }

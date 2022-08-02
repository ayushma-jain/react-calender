import './App.css';
import ApiCalendar from 'react-google-calendar-api';
import {
  SyntheticEvent,
  useState,
} from 'react';

const config = {
  "clientId": '448999060526-9e0cu143n9vligo3ob4rkfje0p19mesk.apps.googleusercontent.com',
  "apiKey": 'AIzaSyCvcgAT9x-NWbvuIyMS47LXbhOxajHtCbY',
  "scope": "https://www.googleapis.com/auth/calendar",
  "discoveryDocs": [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}

const apiCalendar = new ApiCalendar(config)

//react-calender.com

const App = () => {
  
  const [events, setEvents] = useState([]);
  const handleItemClick = (event: SyntheticEvent<any>, name: string): void => {
    if (name === 'sign-in') {
      apiCalendar.handleAuthClick()
    } else if (name === 'sign-out') {
      apiCalendar.handleSignoutClick();
    }
  };

  return (
    <div>
      
      <div style={{ padding: '0.5em' }}>
        <button onClick={(e) => handleItemClick(e, 'sign-in')}>sign-in</button>
        <button onClick={(e) => handleItemClick(e, 'sign-out')}>
          sign-out
        </button>
      </div>
      <div style={{ padding: '0.5em' }}>
        <button
          onClick={(e) => {
            const eventFromNow: object = {
              summary: 'Poc Dev From Now',
              time: 480,
            };

            apiCalendar.createEventFromNow(eventFromNow)
              .then((result: object) => {
                console.log(result);
              })
              .catch((error: any) => {
                console.log(error);
              });
          }}
        >
          Create Event from now
        </button>
      </div>
      <div style={{ padding: '0.5em' }}>
        <button
          onClick={(e) => {
            apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
              console.log(result.items);
              setEvents(result.items);
            });
          }}
        >
          List upcoming events
        </button>
        <div>
          <h4>Events</h4>
          {events.length === 0 && <p>No events to show</p>}
          {events.map((event) => (
            <p key={event.id}>{JSON.stringify(event)}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;

// ud-ui-toolkit
import { Box } from "../Box";
import CalendarCardEvent from "../CalendarEvent/CalendarEvent";
import { Typography } from "../Typography";
const CalendarSection = () => {

  // Sample events data
  const events = [
    {
      time: "10:00 AM",
      mins: '30',
      title: "Team Standup Meeting",
      location: "Conference Room A",
      color: "#DEE9F1",
    },
    {
      time: "11:30 AM",
      mins: '60',
      title: "Client Presentation",
      location: "Zoom",
      color: "#DEE9F1",
    },
    {
      time: "2:00 PM",
      mins: '45',
      title: "Project Planning",
      location: "Conference Room B",
      color: "#DEE9F1",
    },
    {
      time: "4:00 PM",
      mins: '20',
      title: "Quick Sync with Designer",
      location: "Slack",
      color: "#DEE9F1",
    },
  ];
  // Get today's date, tomorrow's date, and next week's date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate() + 7);

  return (
    <Box sx={{ width: '100%' }}>
      {/* Section Title */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          June 6, 2024
        </Typography>
        {/* <Button variant="contained" color="primary">
          Add Event
        </Button> */}
      </Box>
      {/* List of Calendar Events */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {events.map((event, index) => (
          <CalendarCardEvent
            key={index}
            time={event.time}
            mins={event.mins}
            title={event.title}
            location={event.location}
            color={event.color}
          />
        ))}
      </Box>
      {/* View Calendar Hyperlink */}
      <Box sx={{ marginTop: 2, display: "flex", justifyContent: "flex-start", position: 'absolute', bottom: '1rem' }}>
        <a style={{ textTransform: 'uppercase', textDecoration: 'none' }} href="#">View calendar</a>
      </Box>

    </Box>
  );
};

export default CalendarSection;

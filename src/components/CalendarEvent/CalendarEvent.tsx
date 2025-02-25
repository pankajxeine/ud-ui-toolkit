import { useTheme } from "@mui/material";
import { Box } from "../Box";
import { Paper } from "../Paper"; 
import { Typography } from "../Typography";
import { CalendarEventProps } from "./ICalendarEventProps";
import { Link } from "react-router-dom";

const CalendarEvent = ({
  time,
  mins,
  title,
  location,
  color,
  isLink = false,
  ...rest
}: CalendarEventProps) => {
  const theme = useTheme();

  const content = (
    <Paper
      sx={{
        ...rest.sxStyles,
        backgroundColor: color,
        borderLeft: `0.25rem solid ${theme.palette.primary.main}`,
        elevation: 0, 
        boxShadow: "none", 
        padding: theme.spacing(1), 
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start", 
          gap: "1rem",
        }}
      >
        {/* Time and Duration */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center", 
          }}
        >
          <Typography variant="body2" sx={{color: '#000'}}>
            {time}
          </Typography>
          <Typography variant="body2" sx={{color: '#000'}}>
            {mins} min
          </Typography>
        </Box>

        {/* Event Name and Location */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", 
            justifyContent: "center",
            alignItems: "flex-start", 
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: "bold", color: '#000' }}>
            {title} 
          </Typography>
          {location && (
            <Typography variant="body2" sx={{ color: '#0000008a', fontSize: theme.typography.body2.fontSize }}>
              {location}
            </Typography>
          )}
        </Box>
      </Box>
    </Paper>
  );

  // If isLink is true, wrap the entire Paper with a Link component to make it clickable
  if (isLink) {
    return <Link to="/link-target-url">{content}</Link>; // Replace with actual link target
  }

  return content;
};

export default CalendarEvent;

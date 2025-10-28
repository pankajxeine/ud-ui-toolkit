// ud-ui-toolkit
import { format, getDay, parse, startOfWeek } from "date-fns";
import { enUS } from "date-fns/locale";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { SchedularWrapperProps } from "./types";

//@ts-ignore
const DragAndDropCalendar = withDragAndDrop(Calendar);

const getLocale = (locale: string) => {
  if (locale === "US") {
    return enUS;
  }
  return enUS;
};

const Schedular = (props: SchedularWrapperProps) => {
  const locales = {
    "en-US": getLocale(props.locale),
  };

  // The types here are `object`. Strongly consider making them better as removing `locales` caused a fatal error
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  return (
    <DragAndDropCalendar
      {...props}
      defaultView="week"
      events={props.events}
      localizer={localizer}
      //@ts-ignore
      onSelectEvent={props.onSelectEvent}
      style={{ height: "100vh" }}
    />
  );
};

export default Schedular;

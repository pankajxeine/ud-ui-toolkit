import { CalendarProps } from "react-big-calendar";
import { withDragAndDropProps } from "react-big-calendar/lib/addons/dragAndDrop";

export type SchedularEvent = {
  allDay: boolean | undefined;
  title: React.ReactNode | undefined;
  start: Date | undefined;
  end: Date | undefined;
  resource: Resource | undefined;
};

export type Resource = {
  id: string;
  name: string;
};

export type SlotInfo = {
  start: Date;
  end: Date;
  slots: Date[];
};

export type SchedularWrapperProps = CalendarProps<SchedularEvent, Resource> &
  withDragAndDropProps<SchedularEvent, Resource> & {
    locale: string;
  };

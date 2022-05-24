import { useState } from "react";

import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  WeekView,
  DateNavigator,
  Appointments,
  AppointmentForm,
  DayView,
  AllDayPanel,
  ViewSwitcher,
  MonthView,
} from "@devexpress/dx-react-scheduler-material-ui";

const Meetings = () => {
  return (
    <section>
      <div className="meetings-calendar" id="calendar">
        <Scheduler>
          <ViewState />
          <EditingState />
          <IntegratedEditing />
          <WeekView startDayHour={9} endDayHour={18} />
          <DayView startDayHour={9} endDayHour={18} />
          <MonthView />
          <AllDayPanel />
          <Appointments />
          <AppointmentForm />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
        </Scheduler>
      </div>
    </section>
  );
};

export default Meetings;

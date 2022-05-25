import { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthProvider";
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

const url = "http://127.0.0.1:8000/meetings/";

const Meetings = () => {
  const [meetingsData, setMeetingsData] = useState([]);
  const { auth } = useContext(AuthContext);

  const fetchDownloadFilesData = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      const dataFromResponse = await response.json();
      setMeetingsData(dataFromResponse);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDownloadFilesData();
  }, []);

  // fetching meetings time from api
  // const schedulerData = [
  //   meetingsData.map((element) => {
  //     return {
  //       startDate: element.time.slice(0, 16),
  //       endDate: "2022-05-22T22:00",
  //       title: element.title,
  //     };
  //   }),
  // ];

  const schedulerData = [
    {
      startDate: "2022-05-22T20:00",
      endDate: "2022-05-22T22:00",
      title: "Tst",
    },
    {
      startDate: "2022-05-25T18:39",
      endDate: "2022-05-25T20:39",
      title: "Test Meeting",
    },
  ];

  // console.log(schedulerData);

  return (
    <section>
      <div className="meetings-calendar" id="calendar">
        <Scheduler data={schedulerData}>
          <ViewState />
          <EditingState />
          <IntegratedEditing />
          <WeekView startDayHour={9} endDayHour={23} />
          <DayView startDayHour={9} endDayHour={23} />
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

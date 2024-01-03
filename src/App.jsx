import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import activities from "./services/activities.js";
import LogsListView from "./components/CallLog/LogsListView.jsx";

const App = () => {
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    activities.getActivities().then((initalData) => {
      setActivityLog(initalData);
    });
  }, []);
  console.log(activityLog);
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        Some activities should be here
        {activityLog.map((activity) => {
          return (
            // <li key={activity.id}>
            //   Call from: {activity.from} was {activity.call_type}
            // </li>
            <LogsListView key={activity.id} activity={activity} />
          );
        })}
      </div>
    </div>
  );
};

export default App;

import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import activities from "./services/activities.js";
import ActivityCard from "./components/CallLog/ActivityCard";

const App = () => {
  const [activityLog, setActivityLog] = useState([]);

  useEffect(() => {
    activities.getActivities().then((initalData) => {
      setActivityLog(initalData);
    });
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="container-view">
        Some activities should be here
        {activityLog.map((activity) => {
          return <ActivityCard key={activity.id} activity={activity} />;
        })}
      </div>
    </div>
  );
};

export default App;

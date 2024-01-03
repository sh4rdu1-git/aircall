/* eslint react/prop-types: 0 */
import "../../css/app.css";
import "../../css/activity.css";

const handleActivityCardClick = () => {};

const ActivityCard = ({ activity }) => {
  let callTypeAltText = `${activity.call_type}_call_icon`;
  return (
    <>
      <div className="activity-container" onClick={handleActivityCardClick}>
        <img className="activity-icon" src="" alt={callTypeAltText} />
        <div>
          <p>call from {activity.from}</p>
          <p>to {activity.to}</p>
          <p>call type: {activity.call_type}</p>
          <p>call direction: {activity.direction}</p>
        </div>
        <div>
          <p>creation date: {activity.created_at}</p>
          <p>call duration: {activity.duration}</p>
        </div>
      </div>
    </>
  );
};

export default ActivityCard;

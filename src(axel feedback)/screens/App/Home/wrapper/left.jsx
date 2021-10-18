import eventIcon from "../images/event.png";
import favoriteIcon from "../images/favorite.png";
import feedbackIcon from "../images/feedback.png";
import eventSupervisorIcon from "../images/event-supervisor.png";
import favoriteSupervisorIcon from "../images/favorite-supervisor.png";
import feedbackSupervisorIcon from "../images/feedback-supervisor.png";
import participantsSupervisorIcon from "../images/participants-supervisor.png";
import { Link } from 'react-router-dom';
import { Flex } from "../../../../components/Flex";

const HomeLeftWrapper = ({supervisor, admin}) => {
    return (
        <div className="left-wrapper">
          <Flex justifyContent="space-between">
            <div className={supervisor || admin ? "icon-wrapper" : "icon-wrapper-supervisor"}>
              <Link className="link" to={supervisor ? "/supervisor/events" : admin ? "/admin/supervisor" : "/events"}>
                <div className="icon">
                  <img alt="event-icon" className={supervisor || admin ? "icon-supervisor" : "icon"} src={supervisor || admin ? participantsSupervisorIcon : eventIcon} />
                </div>
                <p>{supervisor ? "Participants" : admin ? "Assign Supervisors" : "Upcoming Events"}</p>
              </Link>
            </div>
            <div className={supervisor || admin ? "icon-wrapper" : "icon-wrapper-supervisor"}>
              <Link className="link" to="#">
                <div className="icon">
                  <img alt="favorite-icon" className={supervisor || admin ? "icon-supervisor" : "icon"} src={supervisor || admin ? favoriteSupervisorIcon : favoriteIcon} />
                </div>
                <p>Favourite Projects</p>
              </Link>
            </div>
          </Flex>
          <div className="feedback-wrapper">
            <Flex justifyContent="space-between">
              <div className={supervisor || admin ? "icon-wrapper" : "icon-wrapper-supervisor"}>
                <Link className="link" to={supervisor ? "/supervisor/feedback" : admin ? "/admin/feedback" : "/feedback"}>
                  <div className="icon">
                    <img alt="feedback-icon" className={supervisor || admin ? "icon-supervisor" : "icon"} src={supervisor || admin ? feedbackSupervisorIcon : feedbackIcon} />
                  </div>
                  <p>{admin ? "Compile Feedbacks" : "Feedback"}</p>
                </Link>
              </div>
              {(supervisor || admin) && (
                <div className={supervisor || admin ? "icon-wrapper" : "icon-wrapper-supervisor"}>
                  <Link className="link" to={supervisor ? "/supervisor/events" : "/admin/events"}>
                    <div className="icon">
                      <img alt="feedback-icon" className={supervisor || admin ? "icon-supervisor" : "icon"} src={eventSupervisorIcon} />
                    </div>
                    <p>Upcoming Events</p>
                  </Link>
                </div>
              )}
            </Flex>
          </div>
        </div>
    )
}

export default HomeLeftWrapper;
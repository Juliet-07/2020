import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Auth screens
import Signup from "../../screens/Auth/Signup";
import Signin from "../../screens/Auth/Signin";
// import participant screens
import Articles from "../../screens/App/Participant/Articles";
import Events from "../../screens/App/Participant/Events";
import Feedback from "../../screens/App/Participant/Feedback";
import Home from "../../screens/App/Participant/Home";
import Journals from "../../screens/App/Participant/Journals";
import Projects from "../../screens/App/Participant/Projects";
import Resources from "../../screens/App/Participant/Resources";
import Profile from "../../screens/App/Participant/Profile";
import EditProfile from "../../screens/App/Participant/Profile/EditProfile";
// import supervisor screens
import SupervisorArticles from "../../screens/App/Supervisor/Articles";
import SupervisorEvents from "../../screens/App/Supervisor/Events";
import SupervisorFeedback from "../../screens/App/Supervisor/Feedback";
import SupervisorHome from "../../screens/App/Supervisor/Home";
import SupervisorJournals from "../../screens/App/Supervisor/Journals";
import SupervisorProjects from "../../screens/App/Supervisor/Projects";
import SupervisorResources from "../../screens/App/Supervisor/Resources";
import SupervisorSupervised from "../../screens/App/Supervisor/Supervised";
import SupervisorProfile from "../../screens/App/Supervisor/Profile";
import SupervisorEditProfile from "../../screens/App/Supervisor/Profile/EditProfile";
import NotFound from "../../components/NotFound/index";
import AdminHome from "../../screens/App/Admin/Home";
import AssignSupervisor from "../../screens/App/Admin/Supervisor";
import DownloadFeedback from '../../screens/App/Admin/DownloadFeedback'
import AdminJournal from '../../screens/App/Admin/Journals'


const index = () => (
  <BrowserRouter>
    <div>
      <Switch>
        {/* AUTH ROUTES */}
        <Route path="/" component={Signup} exact={true} />
        <Route path="/signin" component={Signin} />
        {/* PARTICIPANT ROUTES */}
        <Route path="/home" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/events" component={Events} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/journals" component={Journals} />
        <Route path="/profile" component={Profile} />
        <Route path="/editProfile" component={EditProfile} />
        <Route path="/projects" component={Projects} />
        <Route path="/resources" component={Resources} />

        {/* SUPERVISOR ROUTES */}
        <Route path="/supervisor" component={SupervisorHome} exact={true} />
        <Route path="/supervisor/articles" component={SupervisorArticles} />
        <Route path="/supervisor/events" component={SupervisorEvents} />
        <Route path="/supervisor/feedback" component={SupervisorFeedback} />
        <Route path="/supervisor/journals" component={SupervisorJournals} />
        <Route
          path="/supervisor/supervisorProfile"
          component={SupervisorProfile}
        />
        <Route
          path="/supervisor/supervisorEditProfile"
          component={SupervisorEditProfile}
        />
        <Route path="/supervisor/projects" component={SupervisorProjects} />
        <Route path="/supervisor/resources" component={SupervisorResources} />
        <Route path="/supervisor/supervised" component={SupervisorSupervised} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" component={AdminHome} exact={true} />
        <Route path="/admin/supervisor" component={AssignSupervisor} exact={true} />
        <Route path="/admin/feedback" component={DownloadFeedback} />
        <Route path="/admin/journal" component={AdminJournal} />
        <Route
          path="/admin/supervisor"
          component={AssignSupervisor}
          exact={true}
        />

        {/* NOT FOUND ROUTE */}
        <Route path="/notFound" component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default index;

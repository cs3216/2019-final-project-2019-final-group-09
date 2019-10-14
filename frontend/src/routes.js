import React from "react";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Dashboard from "./pages/Dashboard";
import EventsPage from "./pages/EventsPage";
import VenueBookingPage from "./pages/VenueBookingPage";
import ProfilePage from "./pages/ProfilePage";
import Login from "./pages/authentication/Login";

export const Routes = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/events" component={EventsPage}></Route>
        <Route path="/bookings" component={VenueBookingPage}></Route>
        <Route path="/profile" component={ProfilePage}></Route>
      </Switch>
    </div>
  );
};

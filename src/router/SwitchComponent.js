import React from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage"
import Profile from "../pages/Profile"

export default function SwitchComponent(){
    return (
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
    )
}
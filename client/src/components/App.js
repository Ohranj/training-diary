import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../screens/home/Home";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../screens/dashboard/Dashboard";
import NoPageFound from "../screens/404/404";

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <Route component={NoPageFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default App;

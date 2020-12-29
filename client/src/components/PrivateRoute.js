import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Loader, Grid, Dimmer } from "semantic-ui-react";

import user from "../apis/user";

const PrivateRoute = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        user()
            .then(() => setIsAuth(true))
            .then(() => setFetched(true))
            .catch(() => setFetched(true));
    }, []);

    if (fetched) {
        return isAuth ? <props.component /> : <Redirect to="/" />;
    } else {
        return (
            <Grid verticalAlign="middle" className="pageContainer">
                <Dimmer>
                    <Loader active inline="centered">
                        Loading...
                    </Loader>
                </Dimmer>
            </Grid>
        );
    }
};

export default PrivateRoute;

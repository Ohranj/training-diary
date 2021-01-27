import React from "react";
import { useHistory } from "react-router-dom";
import { Grid, Image, Message } from "semantic-ui-react";

import "../../assets/css/404.css";

import user from "../../apis/user";

const NoPageFound = () => {
    const history = useHistory();

    const handleClickToReturn = () =>
        user()
            .then(() => history.push("/dashboard"))
            .catch(() => history.push("/"));

    return (
        <Grid verticalAlign="middle" textAlign="center">
            <Grid.Row className="pageContent">
                <Grid.Column>
                    <Image
                        src="https://training-diary.herokuapp.com/img/404.png"
                        size="large"
                        centered
                    />
                    <Message
                        floating
                        header="404"
                        content="Page not found - Click here to return"
                        compact
                        color="orange"
                        size="large"
                        onClick={() => handleClickToReturn()}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default NoPageFound;

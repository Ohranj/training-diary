import React, { useState } from "react";
import { Grid, Label } from "semantic-ui-react";

import "../../assets/css/home.css";

import Welcome from "./Welcome";
import Login from "./Login";
import Register from "./Register";
import FailMessage from "../../components/FailMessage";
import SuccessMessage from "../../components/SuccessMessage";

const Home = () => {
    const [loginFailed, setLoginFailed] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    return (
        <Grid verticalAlign="middle">
            <Grid.Row className="homePage">
                <Grid.Column width={3}></Grid.Column>
                <Grid.Column
                    verticalAlign="middle"
                    textAlign="center"
                    width={10}
                    className="mainContent"
                >
                    <Grid>
                        <Label
                            as="a"
                            href="http://localhost:8080/login/google"
                            color="orange"
                            tag
                            floating
                            size="large"
                            content="Sign in with Google"
                        />
                        <Grid.Row>
                            <Grid.Column
                                verticalAlign="middle"
                                width={7}
                                className="leftColumn"
                            >
                                <Welcome />
                            </Grid.Column>
                            <Grid.Column
                                width={9}
                                verticalAlign="middle"
                                className="rightColumn"
                            >
                                {loginFailed ? <FailMessage /> : null}
                                {loginSuccess ? (
                                    <SuccessMessage
                                        text={"Success - We're logging you in."}
                                    />
                                ) : null}
                                <Login
                                    setLoginFailed={setLoginFailed}
                                    setLoginSuccess={setLoginSuccess}
                                />
                                <Register />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={3}></Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default Home;

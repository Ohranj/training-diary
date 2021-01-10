import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { addEmail, addPassword } from "../../actions/login";
import { Container, Form, Button, Label } from "semantic-ui-react";

import login from "../../apis/login";

const Login = ({
    dispatchEmail,
    dispatchPassword,
    setLoginFailed,
    setLoginSuccess,
    loginState,
}) => {
    const history = useHistory();

    const handleLogin = () =>
        login(loginState)
            .then(() =>
                setTimeout(() => {
                    history.push("/dashboard");
                }, 2000)
            )
            .then(() => setLoginFailed(false))
            .then(() => setLoginSuccess(true))
            .catch(() => setLoginFailed(true));

    return (
        <Container className="login">
            <Form className="loginForm" onSubmit={() => handleLogin()}>
                <Form.Field>
                    <Label color="orange" pointing="below" content="Email" />
                    <input
                        className="loginInput"
                        type="text"
                        onChange={({ target }) => dispatchEmail(target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <Label color="orange" pointing="below" content="Password" />
                    <input
                        className="loginInput"
                        type="password"
                        onChange={({ target }) =>
                            dispatchPassword(target.value)
                        }
                    />
                </Form.Field>
                <Button color="orange" type="submit" compact content="Login" />
            </Form>
        </Container>
    );
};

const mapStateToProps = (state) => ({
    loginState: state.login,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchEmail: (email) => dispatch(addEmail(email)),
    dispatchPassword: (password) => dispatch(addPassword(password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

import React from "react";
import { Form, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import {
    addFirstname,
    addSurname,
    addEmail,
    addPassword,
} from "../../actions/register";

const RegisterForm = ({ addFirstname, addSurname, addEmail, addPassword }) => (
    <Form className="registerForm">
        <Form.Group>
            <Form.Field width={5}>
                <label>First name</label>
                <Form.Input
                    fluid
                    placeholder="First name"
                    onChange={({ target }) => addFirstname(target.value)}
                />
            </Form.Field>
            <Form.Field width={5}>
                <label>Surname</label>
                <Form.Input
                    fluid
                    placeholder="Surname"
                    onChange={({ target }) => addSurname(target.value)}
                />
            </Form.Field>
        </Form.Group>
        <Form.Group>
            <Form.Field width={6}>
                <label>Email</label>
                <Form.Input
                    fluid
                    required
                    placeholder="Email"
                    type="email"
                    onChange={({ target }) => addEmail(target.value)}
                />
            </Form.Field>
            <Form.Field width={5}>
                <label>Password</label>
                <Form.Input
                    fluid
                    placeholder="Password"
                    type="password"
                    onChange={({ target }) => addPassword(target.value)}
                />
                <Label pointing color="orange">
                    Passwords need to be at least 7 characters and contain a
                    digit
                </Label>
            </Form.Field>
            <Form.Field width={5}>
                <label>Confirm Password</label>
                <Form.Input
                    fluid
                    placeholder="Confirm Password"
                    type="password"
                />
            </Form.Field>
        </Form.Group>
    </Form>
);

const mapDispatchToProps = (dispatch) => ({
    addFirstname: (val) => dispatch(addFirstname(val)),
    addSurname: (val) => dispatch(addSurname(val)),
    addEmail: (val) => dispatch(addEmail(val)),
    addPassword: (val) => dispatch(addPassword(val)),
});

export default connect(null, mapDispatchToProps)(RegisterForm);

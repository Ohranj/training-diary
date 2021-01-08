import React, { useState } from "react";
import { Form, Input, Button, Icon, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { addBodyStats } from "../../actions/newEntry";

const NewEntryBodyForm = ({ dispatchBodyStats }) => {
    const [bodyInputs, setBodyInputs] = useState({});
    const [showAddedMsg, setShowAddedMsg] = useState(false);

    const handleInputs = (val = 0, prop) =>
        setBodyInputs((prev) => ({
            ...prev,
            [prop]: val,
        }));

    const addBodyStats = (cb) => {
        dispatchBodyStats(bodyInputs);
        setShowAddedMsg(true);
        cb();
    };

    const resetLocalState = () => {
        setBodyInputs({});
        setTimeout(() => {
            setShowAddedMsg(false);
        }, 1500);
    };

    return (
        <div>
            {showAddedMsg ? (
                <Message success header="Stats Added" size="tiny" />
            ) : null}
            <Form
                onSubmit={() => addBodyStats(() => resetLocalState())}
                className="bodyForm"
            >
                <Form.Group>
                    <Form.Field width={5}>
                        <Input
                            label="Calories"
                            type="number"
                            onChange={(e, { value }) =>
                                handleInputs(value, "calories")
                            }
                            value={bodyInputs.calories || ""}
                        />
                    </Form.Field>
                    <Form.Field width={6}>
                        <Input
                            label="B'weight"
                            type="number"
                            onChange={(e, { value }) =>
                                handleInputs(value, "bodyweight")
                            }
                            value={bodyInputs.bodyweight || ""}
                        />
                    </Form.Field>
                    <Form.Field width={5}>
                        <Input
                            label="Bodyfat"
                            type="number"
                            onChange={(e, { value }) =>
                                handleInputs(value, "bodyfat")
                            }
                            value={bodyInputs.bodyfat || ""}
                        />
                    </Form.Field>
                </Form.Group>
                <Button
                    disabled={!bodyInputs.hasOwnProperty("bodyweight")}
                    icon
                    labelPosition="left"
                    compact
                    color="orange"
                    type="submit"
                    size="mini"
                >
                    <Icon name="plus" className="iconLabel" />
                    Add
                </Button>
            </Form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchBodyStats: (stats) => dispatch(addBodyStats(stats)),
});

export default connect(null, mapDispatchToProps)(NewEntryBodyForm);

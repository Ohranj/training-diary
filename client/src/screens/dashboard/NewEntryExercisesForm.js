import React, { useState } from "react";
import { Form, Input, Button, Icon, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { addExercise } from "../../actions/newEntry";

import ExercisesList from "../../components/ExercisesList";

const NewEntryExercisesForm = ({ dispatchExercise }) => {
    const [exerciseInput, setExerciseInput] = useState({});
    const [showAddedMsg, setShowAddedMsg] = useState(false);

    const handleInputs = (val = 0, prop) =>
        setExerciseInput((prev) => ({
            ...prev,
            [prop]: val,
        }));

    const addExercise = (cb) => {
        dispatchExercise(exerciseInput);
        setShowAddedMsg(true);
        cb();
    };

    const resetLocalState = () => {
        setExerciseInput({});
        setTimeout(() => {
            setShowAddedMsg(false);
        }, 1500);
    };

    return (
        <div>
            {showAddedMsg ? (
                <Message success header="Exercise Added" size="tiny" />
            ) : null}

            <Form
                onSubmit={() => addExercise(() => resetLocalState())}
                className="exerciseForm"
            >
                <Form.Group>
                    <Form.Field width={9}>
                        <Input
                            list="exercises"
                            label="Exercise"
                            placeholder="Choose Exercise..."
                            onChange={(e, { value }) =>
                                handleInputs(value, "exercise")
                            }
                            value={exerciseInput.exercise || ""}
                        />
                        <datalist id="exercises">
                            {ExercisesList.map((exercise, i) => (
                                <option key={i} value={exercise}>
                                    {exercise}
                                </option>
                            ))}
                        </datalist>
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Field width={4}>
                        <Input
                            label="Sets"
                            onChange={(e, { value }) =>
                                handleInputs(value, "sets")
                            }
                            type="number"
                            value={exerciseInput.sets || ""}
                        />
                    </Form.Field>
                    <Form.Field width={4}>
                        <Input
                            label="Reps"
                            onChange={(e, { value }) =>
                                handleInputs(value, "reps")
                            }
                            type="number"
                            value={exerciseInput.reps || ""}
                        />
                    </Form.Field>
                    <Form.Field width={5}>
                        <Input
                            label="Weight"
                            onChange={(e, { value }) =>
                                handleInputs(value, "weight")
                            }
                            type="number"
                            value={exerciseInput.weight || ""}
                        />
                    </Form.Field>
                </Form.Group>
                <Button
                    disabled={!exerciseInput.hasOwnProperty("exercise")}
                    icon
                    labelPosition="left"
                    basic
                    compact
                    color="orange"
                    type="submit"
                >
                    <Icon name="plus" />
                    Add
                </Button>
            </Form>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchExercise: (exercise) => dispatch(addExercise(exercise)),
});

export default connect(null, mapDispatchToProps)(NewEntryExercisesForm);

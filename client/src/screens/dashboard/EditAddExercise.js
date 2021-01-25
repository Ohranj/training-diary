import React, { useState } from "react";
import { Table, Input, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleAddExercise } from "../../actions/entries";

import ExercisesList from "../../components/ExercisesList";

const EditAddExercise = ({ date, dispatchHandleAddExercise }) => {
    const [inputs, setInputs] = useState({});

    const handleInputs = (value, prop) =>
        setInputs((prev) => ({
            ...prev,
            [prop]: value,
        }));

    return (
        <Table.Row>
            <Table.Cell
                content={
                    <div>
                        <Input
                            list="exercises"
                            label="Exercise"
                            placeholder="Choose Exercise..."
                            onChange={(e, { value }) =>
                                handleInputs(value, "exercise")
                            }
                        />
                        <datalist id="exercises">
                            {ExercisesList.map((exercise, i) => (
                                <option key={i} value={exercise}>
                                    {exercise}
                                </option>
                            ))}
                        </datalist>
                    </div>
                }
            />
            <Table.Cell
                content={
                    <Input
                        onChange={(e, { value }) => handleInputs(value, "sets")}
                    />
                }
            />
            <Table.Cell
                content={
                    <Input
                        onChange={(e, { value }) => handleInputs(value, "reps")}
                    />
                }
            />
            <Table.Cell
                content={
                    <Input
                        onChange={(e, { value }) =>
                            handleInputs(value, "weight")
                        }
                    />
                }
            />
            <Table.Cell
                content={
                    <Icon
                        className="addEditIcon"
                        name="plus"
                        onClick={() =>
                            dispatchHandleAddExercise(
                                { ...inputs, id: Math.random() },
                                date
                            )
                        }
                    />
                }
            />
            <Table.Cell />
        </Table.Row>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchHandleAddExercise: (exercise, date) =>
        dispatch(handleAddExercise(exercise, date)),
});

export default connect(null, mapDispatchToProps)(EditAddExercise);

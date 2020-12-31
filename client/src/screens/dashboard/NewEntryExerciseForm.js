import React, { useEffect, useState } from "react";
import { Form, Button, Icon } from "semantic-ui-react";

const exercises = [
    { key: "0", value: "0", text: "Squats" },
    { key: "1", value: "1", text: "Bench Press - Flat" },
    { key: "2", value: "2", text: "Bench Press - Decline" },
    { key: "3", value: "3", text: "Bench Press - Incline" },
    { key: "4", value: "4", text: "Deadlift" },
    { key: "5", value: "5", text: "Bent over row" },
    { key: "6", value: "6", text: "Pull ups" },
    { key: "7", value: "7", text: "Shoulder press" },
    { key: "8", value: "8", text: "T-bar row" },
    { key: "9", value: "9", text: "Lat pull down" },
];

const formField = (
    <div style={{ display: "flex", flexDirection: "row" }}>
        <Form.Select
            label="Exercise"
            placeholder="Select an exercise"
            options={exercises}
        />
        <Form.Input label="Sets" placeholder="Enter your sets" type="number" />
        <Form.Input label="Reps" placeholder="Enter your reps" type="number" />
    </div>
);

const NewEntryExerciseForm = () => {
    const [formRow, setFormRow] = useState([formField]);

    useEffect(() => {
        console.log(formRow);
    }, [formRow]);

    return (
        <Form>
            {formRow.map((item, i) => (
                <Form.Group inline widths="equal" key={i}>
                    {item}
                    <Icon
                        name="close"
                        onClick={() => setFormRow((cur) => cur.splice(i, 1))}
                    />
                </Form.Group>
            ))}
            <Button
                color="orange"
                content="Add an exercise"
                onClick={() => setFormRow((prev) => prev.concat([formField]))}
            />
        </Form>
    );
};

export default NewEntryExerciseForm;

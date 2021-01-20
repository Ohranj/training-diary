import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Form, Radio } from "semantic-ui-react";

const ChartSelectorBtns = ({ allEntries, getActiveChart }) => {
    const [uniqueExercises, setUniqueExercises] = useState([]);
    const [activeBtn, setActiveBtn] = useState(null);

    useEffect(() => {
        if (allEntries.loaded) {
            setUniqueExercises([
                ...new Set(
                    allEntries.entries
                        .flatMap((x) => x.exercises)
                        .map((x) => x.exercise)
                        .sort()
                ),
            ]);
        }
    }, [allEntries]);

    useEffect(() => {
        getActiveChart(activeBtn);
    }, [activeBtn, getActiveChart]);

    return allEntries.loaded ? (
        <Form className="exerciseRadioBtns">
            <Form.Group>
                {uniqueExercises.map((x, i) => (
                    <Form.Field key={i}>
                        <Radio
                            label={x}
                            name="exerciseBtn"
                            value={x}
                            checked={activeBtn === x}
                            onChange={(e, { value }) => setActiveBtn(value)}
                        />
                    </Form.Field>
                ))}
            </Form.Group>
        </Form>
    ) : null;
};

const mapStateToProps = (state) => ({
    allEntries: state.allEntries,
});

export default connect(mapStateToProps)(ChartSelectorBtns);

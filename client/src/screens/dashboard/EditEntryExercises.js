import React from "react";
import { Table, Icon, Input } from "semantic-ui-react";

import ExercisesList from "../../components/ExercisesList";

const EditEntryExercises = ({ entry }) => (
    <Table compact celled size="small" textAlign="center" attached="top">
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Exercise</Table.HeaderCell>
                <Table.HeaderCell>Sets</Table.HeaderCell>
                <Table.HeaderCell>Reps</Table.HeaderCell>
                <Table.HeaderCell>Weight</Table.HeaderCell>
                <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {entry.exercises.map(({ exercise, sets, reps, weight }, i) => (
                <Table.Row key={i}>
                    <Table.Cell content={exercise} />
                    <Table.Cell content={sets} />
                    <Table.Cell content={reps} />
                    <Table.Cell content={weight} />
                    <Table.Cell content={<Icon name="trash" />} />
                </Table.Row>
            ))}
            <Table.Row>
                <Table.Cell
                    content={
                        <div>
                            <Input
                                size="mini"
                                list="exercises"
                                onChange={(e, { value }) => console.log(value)}
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
                <Table.Cell content={<Input size="mini" />} />
                <Table.Cell content={<Input size="mini" />} />
                <Table.Cell content={<Input size="mini" />} />
                <Table.Cell content={<Icon name="plus" />} />
            </Table.Row>
        </Table.Body>
    </Table>
);

export default EditEntryExercises;

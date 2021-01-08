import React from "react";
import { Table, Segment, Header, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { removeExercise } from "../../actions/newEntry";

const RenderFormEntry = ({
    entry: { exercises, calories, bodyweight, bodyfat },
    dispatchRemoveRow,
}) => (
    <Segment.Group raised>
        <Segment padded raised>
            <Header color="orange" as="h3" content="Preview your entry" />
            <Table celled textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Exercise</Table.HeaderCell>
                        <Table.HeaderCell>Sets</Table.HeaderCell>
                        <Table.HeaderCell>Reps</Table.HeaderCell>
                        <Table.HeaderCell>Weight</Table.HeaderCell>
                        <Table.HeaderCell>
                            <Icon name="trash" color="orange" />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {exercises.map(({ exercise, sets, reps, weight }, i) => (
                        <Table.Row key={i}>
                            <Table.Cell>{exercise}</Table.Cell>
                            <Table.Cell>{sets}</Table.Cell>
                            <Table.Cell>{reps}</Table.Cell>
                            <Table.Cell>{weight}</Table.Cell>
                            <Table.Cell>
                                <Icon
                                    name="delete"
                                    color="orange"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => dispatchRemoveRow(i)}
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Segment>
        <Segment>Body stats</Segment>
        <Segment>Memo</Segment>
    </Segment.Group>
);

const mapStateToProps = (state) => ({
    entry: state.newEntry,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchRemoveRow: (row) => dispatch(removeExercise(row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderFormEntry);

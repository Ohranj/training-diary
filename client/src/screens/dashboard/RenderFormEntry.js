import React from "react";
import {
    Table,
    Segment,
    Header,
    Icon,
    Statistic,
    Container,
} from "semantic-ui-react";
import { connect } from "react-redux";
import { removeExercise } from "../../actions/newEntry";

const RenderFormEntry = ({
    entry: { exercises, calories, bodyweight, bodyfat, memo },
    dispatchRemoveRow,
}) => (
    <Segment.Group raised className="entryPreview">
        <Segment padded raised>
            <Header color="orange" as="h3" content="Preview your entry" />
            <Table
                celled
                textAlign="center"
                compact
                inverted
                color="grey"
                size="small"
            >
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Exercise</Table.HeaderCell>
                        <Table.HeaderCell>Sets</Table.HeaderCell>
                        <Table.HeaderCell>Reps</Table.HeaderCell>
                        <Table.HeaderCell>Weight</Table.HeaderCell>
                        <Table.HeaderCell icon="trash" />
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
                                    className="deleteRowIcon"
                                    name="delete"
                                    onClick={() => dispatchRemoveRow(i)}
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Segment>
        <Segment className="bodyStats">
            <Statistic.Group size="mini" color="orange">
                <Statistic label="Calories" value={calories} />
                <Statistic label="Weight" value={bodyweight} />
                <Statistic label="Bodyfat" value={bodyfat} />
            </Statistic.Group>
        </Segment>
        <Segment className="memoPreview">
            <Container textAlign="center">
                <Header as="h4" color="grey" content="Memo" />
                <p>{memo}</p>
            </Container>
        </Segment>
    </Segment.Group>
);

const mapStateToProps = (state) => ({
    entry: state.newEntry,
});

const mapDispatchToProps = (dispatch) => ({
    dispatchRemoveRow: (row) => dispatch(removeExercise(row)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderFormEntry);

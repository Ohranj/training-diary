import React, { useState, useEffect } from "react";
import { Table, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleDeleteExercise } from "../../actions/entries";

const EditEntryExercises = ({ dispatchDeleteExercise, entry }) => {
    const [currentEntry, setCurrentEntry] = useState(null);

    useEffect(() => {
        setCurrentEntry(entry);
    }, [entry, currentEntry]);

    const handleDelete = (id, i) => {
        dispatchDeleteExercise({
            date: currentEntry.date,
            id,
        });
        setCurrentEntry((prev) => ({
            ...prev,
            exercises: prev.exercises.splice(i, 1),
        }));
    };

    return (
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
                {currentEntry
                    ? currentEntry.exercises.map(
                          ({ exercise, sets, reps, weight, id }, i) => (
                              <Table.Row key={id}>
                                  <Table.Cell content={exercise} />
                                  <Table.Cell content={sets} />
                                  <Table.Cell content={reps} />
                                  <Table.Cell content={weight} />
                                  <Table.Cell
                                      content={
                                          <Icon
                                              name="trash"
                                              onClick={() =>
                                                  handleDelete(id, i)
                                              }
                                          />
                                      }
                                  />
                              </Table.Row>
                          )
                      )
                    : null}
            </Table.Body>
        </Table>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchDeleteExercise: (entry) => dispatch(handleDeleteExercise(entry)),
});

export default connect(null, mapDispatchToProps)(EditEntryExercises);

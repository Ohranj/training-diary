import React, { useState, useEffect } from "react";
import { Table, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleDeleteExercise } from "../../actions/entries";

import SuccessMessage from "../../components/SuccessMessage";

const EditEntryExercises = ({ dispatchDeleteExercise, entry }) => {
    const [currentEntry, setCurrentEntry] = useState(null);
    const [showDeleteMsg, setShowDeleteMsg] = useState(false);
    const [row, setRow] = useState(null);

    useEffect(() => {
        setCurrentEntry(entry);
    }, [entry, currentEntry]);

    const checkActiveRow = (i) => (row === i ? setRow(null) : setRow(i));

    const handleDelete = (id, i) => {
        deleteFromStore(id, i);
        resetDisplay();
    };

    const deleteFromStore = (id, i) => {
        dispatchDeleteExercise({
            date: currentEntry.date,
            id,
        });
        setCurrentEntry((prev) => ({
            ...prev,
            exercises: prev.exercises.splice(i, 1),
        }));
    };

    const resetDisplay = () => {
        setRow(null);
        setShowDeleteMsg(true);
        setTimeout(() => {
            setShowDeleteMsg(false);
        }, 1500);
    };

    return (
        <div>
            {showDeleteMsg ? <SuccessMessage text="Exercise deleted" /> : null}
            <Table compact celled size="small" textAlign="center">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Exercise</Table.HeaderCell>
                        <Table.HeaderCell>Sets</Table.HeaderCell>
                        <Table.HeaderCell>Reps</Table.HeaderCell>
                        <Table.HeaderCell>Weight</Table.HeaderCell>
                        <Table.HeaderCell></Table.HeaderCell>
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
                                                      checkActiveRow(i)
                                                  }
                                              />
                                          }
                                      />
                                      {row === i ? (
                                          <Table.Cell
                                              content={
                                                  <Icon
                                                      name="check"
                                                      onClick={() =>
                                                          handleDelete(id, i)
                                                      }
                                                  />
                                              }
                                          />
                                      ) : (
                                          <Table.Cell />
                                      )}
                                  </Table.Row>
                              )
                          )
                        : null}
                </Table.Body>
            </Table>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    dispatchDeleteExercise: (entry) => dispatch(handleDeleteExercise(entry)),
});

export default connect(null, mapDispatchToProps)(EditEntryExercises);

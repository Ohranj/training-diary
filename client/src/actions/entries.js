import getEntries from "../apis/getEntries";
import deleteEntry from "../apis/deleteEntry";

export const getAllEntries = () => (dispatch) => {
    dispatch(getEntriesStarted());
    getEntries()
        .then((allEntries) => {
            dispatch(getEntriesSuccess(allEntries));
        })
        .catch((err) => {
            dispatch(getEntriesFailed(err.message));
        });
};

export const handleDeleteEntry = (entry) => (dispatch) => {
    dispatch(deleteStoreEntry(entry));
    deleteEntry(entry)
        .then(() => console.log("ok"))
        .catch(() => dispatch(deleteEntryFailed()));
};

export const handleDeleteExercise = (entry) => (dispatch) => {
    dispatch(deleteStoreExercise(entry));
    //Delete entry from backend
};

const getEntriesStarted = () => ({
    type: "GET_ENTRIES_STARTED",
});

const getEntriesSuccess = (allEntries) => ({
    type: "GET_ENTRIES_SUCCESS",
    payload: allEntries,
});

const getEntriesFailed = () => ({
    type: "GET_ENTRIES_FAILED",
});

const deleteStoreEntry = (entry) => ({
    type: "DELETE_ENTRY",
    payload: entry,
});

const deleteEntryFailed = () => ({
    type: "DELETE_ENTRY_FAILED",
});

const deleteStoreExercise = (entry) => ({
    type: "DELETE_EXERCISE",
    payload: entry,
});

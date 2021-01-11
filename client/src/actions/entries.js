import getEntries from "../apis/getEntries";

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

export const addExercise = (exercise) => ({
    type: "ADD_EXERCISE",
    payload: exercise,
});

export const addBodyStats = (stats) => ({
    type: "ADD_BODY_STATS",
    payload: stats,
});

export const addMemo = (memo) => ({
    type: "ADD_MEMO",
    payload: memo,
});

export const addDate = (date) => ({
    type: "ADD_DATE",
    payload: date,
});

export const removeExercise = (position) => ({
    type: "REMOVE_EXERCISE",
    payload: position,
});

export const resetState = () => ({
    type: "RESET_STATE",
});

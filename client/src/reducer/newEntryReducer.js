const initialState = {
    date: "",
    exercises: [],
    bodyweight: 0,
    bodyfat: 0,
    calories: 0,
    memo: "",
};

export const newEntryReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EXERCISE":
            return {
                ...state,
                exercises: [...state.exercises, action.payload],
            };
        case "ADD_BODY_STATS":
            return {
                ...state,
                ...action.payload,
            };
        case "ADD_MEMO":
            return {
                ...state,
                memo: action.payload,
            };
        case "ADD_DATE":
            return {
                ...state,
                date: action.payload,
            };
        case "REMOVE_EXERCISE":
            return {
                ...state,
                exercises: [
                    ...state.exercises.slice(0, action.payload),
                    ...state.exercises.slice(action.payload + 1),
                ],
            };
        case "RESET_STATE":
            return initialState;
        default:
            return state;
    }
};

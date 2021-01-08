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
            const { calories, bodyweight, bodyfat } = action.payload;
            return {
                ...state,
                calories,
                bodyweight,
                bodyfat,
            };
        case "ADD_MEMO":
            return {
                ...state,
                memo: action.payload,
            };
        case "REMOVE_EXERCISE":
            return {
                ...state,
                exercises: [
                    ...state.exercises.slice(0, action.payload),
                    ...state.exercises.slice(action.payload + 1),
                ],
            };
        default:
            return state;
    }
};

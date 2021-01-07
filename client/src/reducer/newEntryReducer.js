const initialState = {
    date: "",
    exercises: [],
    bodyweight: "",
    bodyfat: "",
    calories: "",
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
        default:
            return state;
    }
};

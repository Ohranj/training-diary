const initialState = {
    entries: [],
    loaded: false,
    error: false,
};

export const entriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ENTRIES_STARTED":
            return {
                ...state,
            };
        case "GET_ENTRIES_SUCCESS":
            return {
                entries: action.payload,
                loaded: true,
            };
        case "GET_ENTRIES_FAILED":
            return {
                ...state,
                loaded: true,
                error: true,
            };
        default:
            return state;
    }
};

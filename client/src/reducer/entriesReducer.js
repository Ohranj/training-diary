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
                error: false,
            };
        case "GET_ENTRIES_FAILED":
            return {
                ...state,
                loaded: true,
                error: true,
            };
        case "DELETE_ENTRY":
            return {
                ...state,
                entries: state.entries.filter(
                    (entry) => entry.date !== action.payload
                ),
            };
        case "DELETE_ENTRY_FAILED":
            return {
                ...state,
                error: true,
            };
        case "DELETE_EXERCISE":
            return {
                ...state,
                entries: state.entries.map((entry) =>
                    entry.date === action.payload.date
                        ? {
                              ...entry,
                              exercises: entry.exercises.filter(
                                  (exercise) =>
                                      exercise.id !== action.payload.id
                              ),
                          }
                        : entry
                ),
            };
        default:
            return state;
    }
};

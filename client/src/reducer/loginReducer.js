const initialState = {
    email: "",
    password: "",
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_EMAIL":
            return { ...state, email: action.payload };
        case "ADD_PASSWORD":
            return { ...state, password: action.payload };
        default:
            return state;
    }
};

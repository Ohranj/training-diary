const initialState = {
    firstname: "",
    surname: "",
    email: "",
    password: "",
};

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FIRSTNAME":
            return {
                ...state,
                firstname: action.payload,
            };
        case "ADD_SURNAME":
            return {
                ...state,
                surname: action.payload,
            };
        case "ADD_EMAIL":
            return {
                ...state,
                email: action.payload,
            };
        case "ADD_PASSWORD":
            return {
                ...state,
                password: action.payload,
            };
        default:
            return state;
    }
};

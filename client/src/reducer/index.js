import { combineReducers } from "redux";
import { registerReducer } from "./registerReducer";
import { loginReducer } from "./loginReducer";
import { newEntryReducer } from "./newEntryReducer";
import { entriesReducer } from "./entriesReducer";

export default combineReducers({
    register: registerReducer,
    login: loginReducer,
    newEntry: newEntryReducer,
    allEntries: entriesReducer,
});

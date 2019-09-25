import { createStore, Store } from "redux";
import { application, initialState } from "./reducers";

export const store: Store = createStore(
    application,
    initialState,
);

import { applyMiddleware, createStore, Store } from "redux";
import { power } from "./middleware";
import { application, initialState } from "./reducers";

export const store: Store = createStore(
    application,
    initialState,
    applyMiddleware(power),
);

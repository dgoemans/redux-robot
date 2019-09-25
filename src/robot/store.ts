import { applyMiddleware, createStore, Store } from "redux";
import { power, speak } from "./middleware";
import { application, initialState } from "./reducers";

export const makeStore = (log: (...params: any[]) => void) => createStore(
    application,
    initialState,
    applyMiddleware(power, speak(log)),
);

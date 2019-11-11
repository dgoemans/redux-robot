import { applyMiddleware, createStore, Store } from "redux";
import { autoAdvance, power, requestWord, speak } from "./middleware";
import { application, initialState } from "./reducers";

export const makeStore = (log: (...params: any[]) => void) => createStore(
    application,
    initialState,
    applyMiddleware(power, speak(log), autoAdvance, requestWord),
);

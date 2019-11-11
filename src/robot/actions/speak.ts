import { ActionTypes } from "./actionTypes";

export interface Speak {
    type: ActionTypes.Speak;
    payload: {
        message: string,
    };
}

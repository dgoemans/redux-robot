import { ActionTypes } from "./actionTypes";
export interface StartAdvance {
    type: ActionTypes.StartAdvance;
    payload: {
        interval: number;
    };
}
export interface StopAdvance {
    type: ActionTypes.StopAdvance;
}

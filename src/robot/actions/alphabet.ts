import { ActionTypes } from "./actionTypes";

export interface NextLetter {
    type: ActionTypes.NextLetter;
}

export interface RequestWord {
    type: ActionTypes.RequestWord;
    payload: {
        character: string,
    };
}

export interface ReceiveWord {
    type: ActionTypes.ReceiveWord;
    payload: {
        word: string,
    };
}

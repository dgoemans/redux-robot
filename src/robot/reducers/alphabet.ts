import { Action, ActionTypes } from "../actions";

export interface AlphabetState {
    currentLetter: string;
}

const minCode = "A".charCodeAt(0);
const moduloCode = "Z".charCodeAt(0) - minCode;

export function alphabet(state: AlphabetState, action: Action): AlphabetState {
    switch (action.type) {
        case ActionTypes.NextLetter:
            const oldCharCode = state.currentLetter.charCodeAt(0);
            return {
                ...state,
                currentLetter: String.fromCharCode(
                    minCode + (oldCharCode - minCode + 1) % (moduloCode),
                ),
            };
        default:
            return state;
    }
}

import { State } from "../reducers";

export function selectCurrentLetter(state: State) {
    if (!state.power.isOn) {
        throw new Error("Robot is off");
    }
    return state.alphabet.currentLetter;
}

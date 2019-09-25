import { Action } from "../actions";
import { selectIsRobotOn } from "../selectors";
import { alphabet, AlphabetState, power, PowerState } from "./";

export interface State {
    power: PowerState;
    alphabet: AlphabetState;
}

export const initialState: State = {
    alphabet: {
        currentLetter: "A",
    },
    power: {
        isOn: false,
    },
};

export const application = (state: State = initialState, action: Action): State => ({
    alphabet: selectIsRobotOn(state) ? alphabet(state.alphabet, action) : state.alphabet,
    power: power(state.power, action),
});

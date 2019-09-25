import { Action } from "../actions";
import { power, PowerState } from "./";

export interface State {
    power: PowerState;
}

export const initialState: State = {
    power: {
        isOn: false,
    },
};

export const application = (state: State = initialState, action: Action): State => ({
    power: power(state.power, action),
});

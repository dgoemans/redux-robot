import { Action, ActionTypes, PowerOn } from "../actions";

export interface PowerState {
    isOn: boolean;
}

export function power(state: PowerState, action: Action): PowerState {
    switch (action.type) {
        case ActionTypes.PowerOn:
            return {
                ...state,
                isOn: true,
            };
        case ActionTypes.PowerOff:
            return {
                ...state,
                isOn: false,
            };
        default:
            return state;
    }
}

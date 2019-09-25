import { State } from "../reducers";

export function selectIsRobotOn(state: State) {
    return state.power.isOn;
}

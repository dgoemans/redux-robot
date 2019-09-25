import { ActionTypes, store } from "./robot/";
import { selectIsRobotOn } from "./robot/selectors";

export default class Robot {

    public turnOn = () => {
        store.dispatch({ type: ActionTypes.PowerOn });
    }

    public isOn = ()  => selectIsRobotOn(store.getState());
}

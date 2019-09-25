import { ActionTypes, store } from "./robot/";
import { selectCurrentLetter, selectIsRobotOn } from "./robot/selectors";

export default class Robot {

    public turnOn = () => store.dispatch({type: ActionTypes.PowerOn});
    public isOn = ()  => selectIsRobotOn(store.getState());
    public nextLetter = () => store.dispatch({type: ActionTypes.NextLetter});
    public getCurrentLetter = ()  => selectCurrentLetter(store.getState());
}

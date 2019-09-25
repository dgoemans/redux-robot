import { Store } from "redux";
import { log } from "./logger";
import { ActionTypes, makeStore } from "./robot/";
import { selectCurrentLetter, selectIsRobotOn } from "./robot/selectors";

export default class Robot {
    private store: Store;
    constructor() {
        this.store = makeStore(log);
    }
    public turnOn = () => this.store.dispatch({type: ActionTypes.PowerOn});
    public isOn = ()  => selectIsRobotOn(this.store.getState());
    public nextLetter = () => this.store.dispatch({type: ActionTypes.NextLetter});
    public getCurrentLetter = ()  => selectCurrentLetter(this.store.getState());
}

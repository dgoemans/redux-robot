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
    public turnOff = () => this.store.dispatch({type: ActionTypes.PowerOff});
    public isOn = ()  => selectIsRobotOn(this.store.getState());
    public nextLetter = () => this.store.dispatch({type: ActionTypes.NextLetter});
    public getCurrentLetter = ()  => selectCurrentLetter(this.store.getState());
    public say = (message: string) => this.store.dispatch({type: ActionTypes.Speak, payload: { message }});
    public start = () => this.store.dispatch({ type: ActionTypes.StartAdvance,  payload: { interval: 1000 }});
    public stop = () => this.store.dispatch({ type: ActionTypes.StopAdvance });
}

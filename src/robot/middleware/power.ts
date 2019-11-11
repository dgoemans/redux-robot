import { AnyAction, Dispatch, MiddlewareAPI, Store } from "redux";
import { ActionTypes } from "../actions";
import { selectIsRobotOn } from "../selectors";

export const power =
    (api: MiddlewareAPI) =>
    (next: Dispatch) =>
    (action: AnyAction): AnyAction => {
        if (action.type !== ActionTypes.PowerOn) {
            const isOn = selectIsRobotOn(api.getState());
            if (!isOn) {
                throw Error("Cannot perform actions other than PowerOn when Robot is off");
            }
        }
        return next(action);
    };

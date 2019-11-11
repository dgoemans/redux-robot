import { AnyAction, Dispatch, MiddlewareAPI, Store } from "redux";
import { ActionTypes, StartAdvance } from "../actions";

let interval: NodeJS.Timeout;

export const autoAdvance =
    (api: MiddlewareAPI) =>
    (next: Dispatch) =>
    (action: AnyAction): AnyAction => {
        const advance = () => {
            api.dispatch({ type: ActionTypes.NextLetter });
        };

        switch (action.type) {
            case ActionTypes.StartAdvance:
                clearInterval(interval);
                advance();
                interval = setInterval(advance, (action as StartAdvance).payload.interval);
                break;
            case ActionTypes.PowerOff:
            case ActionTypes.StopAdvance:
                clearInterval(interval);
                break;
        }

        return next(action);
    };

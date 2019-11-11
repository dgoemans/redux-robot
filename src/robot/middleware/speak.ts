import { AnyAction, Dispatch, MiddlewareAPI, Store } from "redux";
import { ActionTypes, ReceiveWord, Speak } from "../actions";
import { selectCurrentLetter } from "../selectors";

export const speak =
    (log: (...params: any[]) => void) =>
    (api: MiddlewareAPI) =>
    (next: Dispatch) =>
    (action: AnyAction): AnyAction => {
        const result = next(action);

        const say = (message: string) => {
            api.dispatch({
                payload: {
                    message,
                },
                type: ActionTypes.Speak,
            });
        };

        switch (action.type) {
            case ActionTypes.Speak:
                log((action as Speak).payload.message);
                break;
            case ActionTypes.NextLetter:
                api.dispatch({
                    payload: {
                        character: selectCurrentLetter(api.getState()),
                    },
                    type: ActionTypes.RequestWord,
                });
                break;
            case ActionTypes.ReceiveWord:
                say((action as ReceiveWord).payload.word);
            case ActionTypes.PowerOn:
                say(`He says "hello"`);
                break;
        }

        return result;
    };

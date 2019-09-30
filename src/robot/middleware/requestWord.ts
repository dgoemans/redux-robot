import { readFile } from "fs";
import { AnyAction, Dispatch, MiddlewareAPI, Store } from "redux";
import { ActionTypes } from "../actions";
import { selectIsRobotOn } from "../selectors";

export const requestWord =
    (api: MiddlewareAPI) =>
    (next: Dispatch) =>
    async (action: AnyAction): Promise<AnyAction> => {
        const result = next(action);

        if (action.type === ActionTypes.RequestWord) {
            const allWords = await new Promise((resolve, reject) => {
                    readFile("./words/words_alpha.txt",
                        (err, data: Buffer) => {
                            err == null
                                ? resolve(data)
                                : reject();

                        },
                    );
                });
            allWords.;
            const isOn = selectIsRobotOn(api.getState());
            if (!isOn) {
                throw Error("Cannot perform actions other than PowerOn when Robot is off");
            }
        }
    };

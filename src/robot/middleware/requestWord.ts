import { exists, existsSync, readFile, writeFile } from "fs";
import { AnyAction, Dispatch, MiddlewareAPI, Store } from "redux";
import { ActionTypes, RequestWord } from "../actions";
import { selectIsRobotOn } from "../selectors";

let dictionaryLock = false;

const createWordDictionary = async (allWords: string[]) => {
    const dictionary = allWords.reduce((prev: any, current: string) => {
        const index = current.charAt(0);
        const res = {
            ...prev,
        };
        if (!res[index]) {
            res[index] = [];
        }
        res[index].push(current.trim());

        return res;
    }, {});
    await new Promise((resolve, reject) => {
        writeFile("./words/words_alpha.json", JSON.stringify(dictionary), (err) => {
            err == null
                ? resolve()
                : reject(err);
        });
    });
};

const readFileAsync = async (path: string): Promise<string> => {
    return await new Promise((resolve, reject) => {
        readFile(path,
            (err, data: Buffer) => {
                err == null
                    ? resolve(data.toString())
                    : reject(err);
            },
        );
    });
};

const existsAsync = async (path: string): Promise<boolean> => {
    return await new Promise((resolve) => {
        exists(path, (exist: boolean) => resolve(exist));
    });
};

const sleep = async (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const notCreatingDictionary = async (): Promise<void> => {
    while (dictionaryLock) {
        await sleep(100);
    }
};

export const requestWord =
    (api: MiddlewareAPI) =>
    (next: Dispatch) =>
    async (action: AnyAction): Promise<AnyAction> => {
        const result = next(action);

        await notCreatingDictionary();

        if (!await existsAsync("./words/words_alpha.json")) {
            dictionaryLock = true;
            const data = await readFileAsync("./words/words_alpha.txt");
            const allWords = data.split(/\r?\n/);
            createWordDictionary(allWords);
            dictionaryLock = false;
        }

        const jsonData = await readFileAsync("./words/words_alpha.json");
        const wordDictionary = JSON.parse(jsonData);

        if (action.type === ActionTypes.RequestWord) {

            const character = (action as RequestWord).payload.character.toLowerCase();
            const subDictionary: string[] = wordDictionary[character];
            const index = Math.floor(Math.random() * subDictionary.length);

            api.dispatch({
                payload: {
                    message: `He says "${subDictionary[index]}"`,
                },
                type: ActionTypes.Speak,
            });

            const isOn = selectIsRobotOn(api.getState());
            if (!isOn) {
                throw Error("Cannot perform actions other than PowerOn when Robot is off");
            }
        }

        return result;
    };

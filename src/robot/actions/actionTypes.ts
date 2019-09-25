import { NextLetter, PowerOff, PowerOn, Speak } from ".";

export enum ActionTypes {
    PowerOn = "power-on",
    PowerOff = "power-off",
    NextLetter = "next-letter",
    Speak = "speak",
}

export type Action = PowerOn | PowerOff | NextLetter | Speak;

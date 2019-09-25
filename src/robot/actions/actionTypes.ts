import { PowerOn, PowerOff, NextLetter } from "./"

export enum ActionTypes {
    PowerOn = "power-on",
    PowerOff = "power-off",
    NextLetter = "next-letter"
}

export type Action = PowerOn | PowerOff | NextLetter;

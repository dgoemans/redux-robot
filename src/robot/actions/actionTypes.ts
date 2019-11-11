import { NextLetter, PowerOff, PowerOn, Speak, StartAdvance, StopAdvance } from ".";

export enum ActionTypes {
    PowerOn = "power-on",
    PowerOff = "power-off",
    NextLetter = "next-letter",
    Speak = "speak",
    StartAdvance = "start-advance",
    StopAdvance = "stop-advance",
    RequestWord = "request-word",
    ReceiveWord = "receive-word",
}

export type Action = PowerOn
    | PowerOff
    | NextLetter
    | Speak
    | StartAdvance
    | StopAdvance;

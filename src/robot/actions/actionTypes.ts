import { PowerOn, PowerOff } from "./"

export enum ActionTypes {
    PowerOn = "power-on",
    PowerOff = "power-off",
}

export type Action = PowerOn | PowerOff;

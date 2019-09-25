import * as cucumber from "cucumber";
import { Store } from "redux";
import { makeStore } from "../robot/store";

export class RobotWorld implements cucumber.World {

    get store(): Store {
        return this.robotStore;
    }

    private robotStore: Store;
    private logs: string[];

    constructor() {
        this.robotStore  = makeStore(this.log);
        this.logs = [];
    }

    public log = (message: string) => {
        // tslint:disable-next-line: no-console
        console.log(message);
        this.logs.push(message);
    }

}

cucumber.setWorldConstructor(RobotWorld);

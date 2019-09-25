import * as cucumber from "cucumber";
import { Store } from "redux";
import { store } from "../robot/store";

export class RobotWorld implements cucumber.World {
    get store(): Store {
        return store;
    }
}

cucumber.setWorldConstructor(RobotWorld);

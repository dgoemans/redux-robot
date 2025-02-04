import { expect } from "chai";
import * as cucumber from "cucumber";
import { ActionTypes, selectIsRobotOn } from "../robot/";
// tslint:disable: no-unused-expression

cucumber.Given(
    "a robot that is currently off",
    () => null,
);

cucumber.Given(
    "a robot that is currently on",
    function() {
        this.store.dispatch({ type: ActionTypes.PowerOn });
    },
);

cucumber.When(
    "a power on Action is dispatched",
    function() {
        this.store.dispatch({ type: ActionTypes.PowerOn });
    },
);

cucumber.Then(
    "the robot is turned on",
    function() {
        const state = this.store.getState();
        const isOn = selectIsRobotOn(state);

        expect(isOn).to.be.true;
    },
);

cucumber.When(
    "a power off Action is dispatched",
    function() {
        this.store.dispatch({ type: ActionTypes.PowerOff });
    },
);

cucumber.Then(
    "the robot is turned off",
    function() {
        const state = this.store.getState();
        const isOn = selectIsRobotOn(state);

        expect(isOn).to.be.false;
    },
);

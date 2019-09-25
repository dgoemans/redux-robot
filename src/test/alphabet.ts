import { expect } from "chai";
import * as cucumber from "cucumber";
import { ActionTypes, selectCurrentLetter } from "../robot/";
// tslint:disable: no-unused-expression

cucumber.When(
    "the next letter is requested",
    function() {
        this.store.dispatch({ type: ActionTypes.NextLetter });
    },
);

cucumber.Then(
    "the robot does not go to the next letter",
    function() {
        this.store.dispatch({ type: ActionTypes.PowerOn });
        const state = this.store.getState();
        const currentLetter = selectCurrentLetter(state);

        expect(currentLetter).to.equal("A");
    },
);

cucumber.Then(
    "the current letter cannot be requested",
    function() {
        const state = this.store.getState();
        expect(() => selectCurrentLetter(state)).throws;
    },
);

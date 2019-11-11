import Robot from "./robot";

main();

async function main() {
    const log = (message: string) => {
        // tslint:disable-next-line: no-console
        console.log(`%c  ${message}  `, " background: #ff3333; color: #666666");
     };

    const robot = new Robot();
    robot.turnOn();
    log(`Robot is on: ${robot.isOn()}`);
    robot.nextLetter();
    log(`Robot has letter: ${robot.getCurrentLetter()}`);
    robot.say("Ha ha. Laughter");
    robot.start();

    await new Promise((resolve) => setTimeout(resolve, 5000));

    robot.turnOff();

    await new Promise((resolve) => {
        while (robot.isOn()) { /* Do nothing */ }
        resolve();
    });

    log(`Robot is on: ${robot.isOn()}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
}

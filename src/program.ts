import Robot from "./robot";

main();

async function main() {
    const robot = new Robot();
    robot.turnOn();
    // tslint:disable-next-line: no-console
    console.log(robot.isOn());
}

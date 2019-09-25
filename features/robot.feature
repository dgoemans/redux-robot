Feature: Robot should react to actions
    Scenario: Turn on
        Given a robot that is currently off
        When a power on Action is dipatched
        Then the robot is turned on

    Scenario: Turn off
        Given a robot that is currently on
        When a power off Action is dipatched
        Then the robot is turned off

    Scenario: Next letter when off
        Given a robot that is currently off
        Then the next letter cannot be requested

    Scenario: Current letter when off
        Given a robot that is currently off
        Then the current letter cannot be requested

    Scenario: Letters wrap around at Z
        Given a robot that is currently on
        When the next letter is requested 26 times
        Then the current letter is "A"

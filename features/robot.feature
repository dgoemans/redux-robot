Feature: Robot should react to actions
    Scenario: Turn on
        Given a robot that is currently off
        When a power on Action is dipatched
        Then the robot is turned on

    Scenario: Turn off
        Given a robot that is currently on
        When a power off Action is dipatched
        Then the robot is turned off

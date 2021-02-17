input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 3; index++) {
        servos.P1.setAngle(110)
        servos.P2.setAngle(70)
        basic.pause(randint(0, 300))
        servos.P1.setAngle(80)
        servos.P2.setAngle(100)
        basic.pause(randint(0, 200))
    }
})
input.onButtonPressed(Button.B, function () {
    servos.P1.setAngle(110)
    servos.P2.setAngle(70)
})
servos.P1.setAngle(80)
servos.P2.setAngle(100)
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        servos.P1.setAngle(110)
        servos.P2.setAngle(70)
        basic.pause(125)
        servos.P1.setAngle(80)
        servos.P2.setAngle(100)
        basic.pause(125)
    }
})

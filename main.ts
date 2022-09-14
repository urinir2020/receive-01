radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (receivedNumber == 2) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        100,
        SuperBit.enMotors.M3,
        -100
        )
    } else if (receivedNumber == 3) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -100,
        SuperBit.enMotors.M3,
        100
        )
    } else if (receivedNumber == 4) {
        SuperBit.MotorStopAll()
    } else if (receivedNumber == 5) {
        SuperBit.Servo(SuperBit.enServo.S1, 100)
    } else if (receivedNumber == 6) {
        SuperBit.Servo(SuperBit.enServo.S1, 0)
    } else if (receivedNumber == 7) {
        SuperBit.Servo(SuperBit.enServo.S1, 50)
    }
})
SuperBit.Servo(SuperBit.enServo.S1, 50)
radio.setGroup(10)
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)

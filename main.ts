radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onPinPressed(TouchPin.P2, function () {
    for (let i = 0; i <= 255; i++) {
        radio.setGroup(i)
        radio.sendNumber(randint(0, 10000))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (input.compassHeading() >= 337.5 || input.compassHeading() < 22.5) {
        basic.showArrow(ArrowNames.North)
    }
    if (input.compassHeading() >= 292.5 && input.compassHeading() < 337.5) {
        basic.showArrow(ArrowNames.NorthWest)
    }
    if (input.compassHeading() >= 247.5 && input.compassHeading() < 292.5) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.compassHeading() >= 202.5 && input.compassHeading() < 247.5) {
        basic.showArrow(ArrowNames.SouthWest)
    }
    if (input.compassHeading() >= 157.5 && input.compassHeading() < 202.5) {
        basic.showArrow(ArrowNames.South)
    }
    if (input.compassHeading() >= 112.5 && input.compassHeading() < 157.5) {
        basic.showArrow(ArrowNames.SouthEast)
    }
    if (input.compassHeading() >= 67.5 && input.compassHeading() < 112.5) {
        basic.showArrow(ArrowNames.East)
    }
    if (input.compassHeading() >= 22.5 && input.compassHeading() < 67.5) {
        basic.showArrow(ArrowNames.NorthEast)
    }
})
let location = [0, 0]
basic.forever(function () {
    input.onButtonPressed(Button.A, function on_button_pressed_a() {
        
        while (location[1] < 5) {
            while (location[0] < 5) {
                led.toggle(location[0], location[1])
                location = [location[0] + 1, location[1]]
                basic.pause(100)
            }
            location = [0, location[1] + 1]
        }
        location = [0, 0]
    })
input.onButtonPressed(Button.B, function bttnpressedB() {
        for (let i = 0; i < 25; i++) {
            led.toggle(randint(0, 5), randint(0, 5))
            basic.pause(5)
        }
    })
input.onPinPressed(TouchPin.P0, function on_pin_pressed_p0() {
        
        while (location[1] < 5) {
            while (location[0] < 5) {
                led.unplot(location[0], location[1])
                location = [location[0] + 1, location[1]]
            }
            location = [0, location[1] + 1]
        }
        location = [0, 0]
    })
function shake() {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    }
if (input.isGesture(Gesture.Shake)) {
        shake()
    }
})

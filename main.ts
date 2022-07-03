input.onPinPressed(TouchPin.P1, function () {
    if (0 < 0 && 0 < 0) {
    	
    }
    if (0 < 0 && 0 < 0) {
    	
    }
    if (0 < 0 && 0 < 0) {
    	
    }
    if (0 < 0 && 0 < 0) {
    	
    }
    if (0 < 0 && 0 < 0) {
    	
    }
    if (0 < 0 && 0 < 0) {
    	
    }
    if (0 < 0 && 0 < 0) {
    	
    }
    if (0 < 0 && 0 < 0) {
    	
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
                basic.pause(100)
            }
            location = [0, location[1] + 1]
        }
        location = [0, 0]
    })
})

location = [0, 0]

def on_forever():
    
    def on_button_pressed_a():
        global location
        while location[1] < 5:
            while location[0] < 5:
                led.toggle(location[0], location[1])
                location = [location[0] + 1, location[1]]
                basic.pause(100)
            location = [0, location[1] + 1]
        location = [0, 0]
    input.on_button_pressed(Button.A, on_button_pressed_a)
    
    
    def bttnpressedB():
        for i in range(25):
            led.toggle(randint(0, 5), randint(0, 5))
            basic.pause(5)
    input.on_button_pressed(Button.B, bttnpressedB)
    
    
    def on_pin_pressed_p0():
        global location
        while location[1] < 5:
            while location[0] < 5:
                led.unplot(location[0], location[1])
                location = [location[0] + 1, location[1]]
                basic.pause(100)
            location = [0, location[1] + 1]
        location = [0, 0]
    input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)
    
basic.forever(on_forever)

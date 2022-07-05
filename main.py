def on_pin_pressed_p1():
    if input.compass_heading() >= 337.5 or input.compass_heading() < 22.5:
        basic.show_arrow(ArrowNames.NORTH)
    if input.compass_heading() >= 292.5 and input.compass_heading() < 337.5:
        basic.show_arrow(ArrowNames.NORTH_WEST)
    if input.compass_heading() >= 247.5 and input.compass_heading() < 292.5:
        basic.show_arrow(ArrowNames.WEST)
    if input.compass_heading() >= 202.5 and input.compass_heading() < 247.5:
        basic.show_arrow(ArrowNames.SOUTH_WEST)
    if input.compass_heading() >= 157.5 and input.compass_heading() < 202.5:
        basic.show_arrow(ArrowNames.SOUTH)
    if input.compass_heading() >= 112.5 and input.compass_heading() < 157.5:
        basic.show_arrow(ArrowNames.SOUTH_EAST)
    if input.compass_heading() >= 67.5 and input.compass_heading() < 112.5:
        basic.show_arrow(ArrowNames.EAST)
    if input.compass_heading() >= 22.5 and input.compass_heading() < 67.5:
        basic.show_arrow(ArrowNames.NORTH_EAST)
input.on_pin_pressed(TouchPin.P1, on_pin_pressed_p1)

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
            location = [0, location[1] + 1]
        location = [0, 0]
    input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

    def shake():

        basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    if input.is_gesture(Gesture.SHAKE) : shake()
basic.forever(on_forever)

def on_button_pressed_a():
    global dado, j1
    basic.show_string("Jug 1")
    dado = randint(1, 6)
    basic.show_number(dado)
    basic.pause(100)
    j1 = j1 + dado
    basic.show_string("Esta en casilla:")
    basic.clear_screen()
    basic.pause(100)
    basic.show_number(j1)
    basic.pause(200)
    basic.clear_screen()
    if j1 == 16:
        j1 += 3
        basic.show_icon(IconNames.SAD)
    if j1 == 29:
        j1 += 10
        basic.show_icon(IconNames.SAD)
    if j1 == 39:
        j1 += 20
        basic.show_icon(IconNames.SAD)
    if j1 == 45:
        j1 += 34
        basic.show_icon(IconNames.SAD)
    if j1 == 6:
        j1 += 14
        basic.show_icon(IconNames.HAPPY)
    if j1 == 17:
        j1 += 23
        basic.show_icon(IconNames.HAPPY)
    if j1 == 27:
        j1 += 33
        basic.show_icon(IconNames.HAPPY)
    if j1 == 38:
        j1 += 43
        basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global dado, j2
    basic.show_string("Jug 2")
    dado = randint(1, 6)
    basic.show_number(dado)
    basic.pause(100)
    j2 = j2 + dado
    basic.show_string("Esta en casilla:")
    basic.clear_screen()
    basic.pause(100)
    basic.show_number(j2)
    basic.pause(200)
    basic.clear_screen()
    if j2 == 16:
            j2 += 3
            basic.show_icon(IconNames.SAD)
    if j2 == 29:
        j2 += 10
        basic.show_icon(IconNames.SAD)
    if j2 == 39:
        j2 += 20
        basic.show_icon(IconNames.SAD)
    if j2 == 45:
        j2 += 34
        basic.show_icon(IconNames.SAD)
    if j2 == 6:
        j2 += 14
        basic.show_icon(IconNames.HAPPY)
    if j2 == 17:
        j2 += 23
        basic.show_icon(IconNames.HAPPY)
    if j2 == 27:
        j2 += 33
        basic.show_icon(IconNames.HAPPY)
    if j2 == 38:
        j2 += 43
        basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.B, on_button_pressed_b)

dado = 0
j2 = 0
j1 = 0
j1 = 0
j2 = 0
dado = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("Jug 1")
    dado = randint(1, 6)
    basic.showNumber(dado)
    basic.pause(100)
    j1 = j1 + dado
    basic.pause(200)
    basic.clearScreen()
    basic.showString("Esta en casilla:")
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(j1)
    basic.pause(200)
    basic.clearScreen()
    if (j1 == 16) {
        j1 = 3
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j1)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j1 == 29) {
        j1 = 10
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j1)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j1 == 39) {
        j1 = 20
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j1)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j1 == 45) {
        j1 = 34
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j1)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j1 == 6) {
        j1 = 14
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j1)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j1 == 17) {
        j1 = 23
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j1)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j1 == 27) {
        j1 = 33
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j1)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j1 == 38) {
        j1 = 43
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j1)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j1 >= 50) {
        basic.showString("GANADOR JUGADOR 1")
        basic.showIcon(IconNames.Heart)
        j1 = 0
        j2 = 0
        basic.pause(200)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Jug 2")
    dado = randint(1, 6)
    basic.showNumber(dado)
    basic.pause(100)
    j2 = j2 + dado
    basic.pause(200)
    basic.clearScreen()
    basic.showString("Esta en casilla:")
    basic.clearScreen()
    basic.pause(100)
    basic.showNumber(j2)
    basic.pause(200)
    basic.clearScreen()
    if (j2 == 16) {
        j2 = 3
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j2)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j2 == 29) {
        j2 = 10
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j2)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j2 == 39) {
        j2 = 20
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j2)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j2 == 45) {
        j2 = 34
        basic.showIcon(IconNames.Sad)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j2)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j2 == 6) {
        j2 = 14
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j2)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j2 == 17) {
        j2 = 23
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j2)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j2 == 27) {
        j2 = 33
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j2)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j2 == 38) {
        j2 = 43
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(200)
        basic.clearScreen()
        basic.showNumber(j2)
        basic.pause(200)
        basic.clearScreen()
    }
    if (j2 >= 50) {
        basic.showString("GANADOR JUGADOR 2")
        basic.showIcon(IconNames.Heart)
        j1 = 0
        j2 = 0
        basic.pause(200)
        basic.clearScreen()
    }
})
let dado = 0
let j2 = 0
let j1 = 0
j1 = 0
j2 = 0
dado = 0

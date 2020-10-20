let caja = 0
basic.forever(function () {
    caja = input.temperature()
    basic.showNumber(caja)
    if (caja >= 0) {
        basic.showIcon(IconNames.Heart)
        basic.pause(1000)
        basic.clearScreen()
    } else if (caja >= 21) {
        basic.showIcon(IconNames.Skull)
        basic.pause(1000)
        basic.clearScreen()
    } else if (caja >= 31) {
        basic.showIcon(IconNames.Chessboard)
        basic.pause(1000)
        basic.clearScreen()
    } else if (caja < 0) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(1000)
        basic.clearScreen()
    }
    basic.clearScreen()
})

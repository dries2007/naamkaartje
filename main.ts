input.onButtonPressed(Button.A, function () {
    basic.showString("DE COOMAN")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("2 AMTWE-B")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (images.createImage(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)))
})
basic.forever(function () {
	
})

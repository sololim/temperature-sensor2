basic.forever(function () {
    if (input.temperature() > 1) {
        soundExpression.happy.playUntilDone()
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
    if (input.temperature() < 1) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
})

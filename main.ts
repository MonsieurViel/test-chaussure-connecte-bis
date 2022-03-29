input.onButtonPressed(Button.A, function () {
    temps = input.runningTime() + 1000
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (pas))
    basic.pause(1000)
    basic.showString("" + (distance))
    basic.pause(1000)
    basic.showString("" + (temps))
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    pas = pas + 1
})
let vitesse = 0
let distance = 0
let temps = 0
let pas = 0
let foulée = 0.1
pas = 0
temps = 0
basic.forever(function () {
    distance = pas * foulée
    vitesse = distance / temps
})

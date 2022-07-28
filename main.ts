namespace SpriteKind {
    export const Pared = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Jugador = assets.animation`Pacman`
})
let Jugador: Image[] = []
scene.setBackgroundColor(15)
Jugador = sprites.create(assets.image`miImagen`, SpriteKind.Player)

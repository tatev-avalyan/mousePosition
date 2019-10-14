
let div = document.getElementsByTagName('div')
const red = div[0]
const black = div[1]

red.style.border = 'solid 1px'
red.style.width = '120px'
red.style.height = '100px'
red.style.color = 'red'
red.style.position = 'absolute'

black.style.border = 'solid 1px'
black.style.width = '120px'
black.style.height = '100px'
black.style.color = 'black'
black.style.position = 'absolute'
black.style.left = '600px'
black.style.top = '300px'


document.addEventListener('mousemove', getMousePosition);

function getMousePosition(event) {
    red.style.left = event.clientX - 60 + 'px'
    red.style.top = event.clientY - 50 + 'px'
}

function mouse() {

    const blackTop1 = parseInt(black.style.top)
    const blackLeft1 = parseInt(black.style.left)

    let redLeft = parseInt(red.style.left)
    let redTop = parseInt(red.style.top)

    const redWidth = parseInt(red.style.width)
    const redHeight = parseInt(red.style.height)

    if (
        redLeft < blackLeft1 - redWidth
        || redLeft > (blackLeft1 + redWidth)
        || redTop < blackTop1 - redHeight
        || redTop > blackTop1 + redHeight) {

        red.style.color = 'red'

    } else {
        red.style.color = 'black'
    }
    requestAnimationFrame(mouse)

}
mouse()


let div = document.getElementsByTagName('div')
const red = div[0]
const black = div[1]

red.style.border = 'solid'
red.style.width = '120px'
red.style.height = '100px'
red.style.color = 'red'
red.style.position = 'absolute'

black.style.border = 'solid'
black.style.width = '120px'
black.style.height = '100px'
black.style.color = 'black'
black.style.position = 'absolute'
black.style.left = '600px'
black.style.top = '300px'


document.addEventListener('mousemove', getMousePosition);

function getMousePosition(event) {
    red.style.left = event.clientX + 'px'
    red.style.top = event.clientY + 'px'
}

function mouse() {

    const blackTop1 = parseInt(black.style.top, 10)
    const blackLeft1 = parseInt(black.style.left, 10)

    let redLeft = parseInt(red.style.left)
    let redTop = parseInt(red.style.top)

    if (redLeft >= blackLeft1-125 && redLeft <= (blackLeft1 + 125) &&
     redTop >= blackTop1-105 && redTop <= blackTop1+105) {

        red.style.color = 'black'

    } else {

        red.style.color = 'red'
    }
    requestAnimationFrame(mouse)

}
mouse()

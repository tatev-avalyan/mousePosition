// import './SetTimeOut_SetInterval_requestAnimationFrame/index'



let div = document.getElementsByTagName('div')
const red = div[0]
const black = div[1]

red.style.border = 'solid'
red.style.width = '120px'
red.style.height = '100px'
red.style.color = 'red'
red.style.position = 'relative'

black.style.border = 'solid'
black.style.width = '120px'
black.style.height = '100px'
black.style.color = 'black'
black.style.position = 'relative'
black.style.left = '600px'
black.style.top = '200px'


document.addEventListener('mousemove', getMousePosition);

function getMousePosition(event) {
    red.style.left = event.screenX + 'px'
    red.style.top = event.screenY + 'px'
}

function mouse() {

    const blackTop1 = parseInt(black.style.top, 10)
    const blackLeft1 = parseInt(black.style.left, 10)
    // const blackTop2 = parseInt(black.style.top + 100, 10)
    // const blackLeft2 = parseInt(black.style.left + 120, 10)

    let redLeft = parseInt(red.style.left)
    let redTop = parseInt(red.style.top)

    if (redLeft <= (blackLeft1 + 120) && redLeft >= blackLeft1 &&
        redTop >= blackTop1 && redTop <= (blackTop1 + 100)) {
          
        red.style.color = 'black'

    } else {

        red.style.color = 'red'
    }

    requestAnimationFrame(mouse)
}
mouse()
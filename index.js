
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576



let y = 100
function animated(){
    window.requestAnimationFrame(animated)

    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)


    c.fillStyle = 'red'
    c.fillRect(200, y, 100, 100)
    y++
}

animated()
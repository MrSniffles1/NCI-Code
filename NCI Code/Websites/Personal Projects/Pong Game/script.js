import Ball from "./Ball.js"

const ball = new Ball(document.getElementById("Ball"))

let lastTime
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        //Update code
        ball.update(delta)
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}


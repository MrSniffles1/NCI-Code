const INITIAL_VELOCITY = 0.025

export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
        this.reset()
    }


    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value) {
        this.ballElem.style.setProperty("--x", value)
    }

    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value) {
        this.ballElem.style.setProperty("--y", value)
    }

    rect() {
        return this.ballElem.getBoundingClientRect
    }

    reset() {
        this.x = 50
        this.y = 50
        this.direction = { x: 0 }

        while(Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {

            const heading = randomNumberBetween(0, 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
        this.velocity = INITIAL_VELOCITY
    }

    update(delta) {
        this.x += this.direction.x * this.velocity 
        this.y += this.direction.y * this.velocity 
        
    }

}

function randomNumberBetween(min, max) {
    return Math.random() * (max - min) + min
}

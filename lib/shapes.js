class Shape{
    setColor(color) {
        this.color = color
    }

    render() {
        const shapeInfo = `<${this.shape} fill="${this.color}" />`
        return shapeInfo
    }
}

class Circle extends Shape {
    constructor(setColor) {
        super(setColor)
        this.shape = 'circle cx="150" cy="105" r="80"'
    }
}

class Square extends Shape {
    constructor(setColor) {
        super(setColor)
        this.shape = 'rect x="50" y="25" width="200" height="200"'
        }
}

class Triangle extends Shape {
    constructor(setColor) {
        super(setColor)
        this.shape = 'polygon points="150, 0 270, 182 30, 182"'
        }
}

module.exports = {Circle, Square, Triangle}
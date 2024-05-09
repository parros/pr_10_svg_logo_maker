class Shape{
    constructor(shapeColor){
        this.shapeColor = shapeColor
    }

    render() {
        const shapeInfo = `<${this.shape} fill="${this.shapeColor}" />`
        return shapeInfo
    }
}

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
        this.shape = 'circle cx="150" cy="105" r="80"'
    }
}

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
        this.shape = 'rect x="50" y="25" width="200" height="200"'
        }
}

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor)
        this.shape = 'polygon points="150, 0 270, 182 30, 182"'
        }
}

module.exports = {Circle, Square, Triangle}
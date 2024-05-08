class Shape{
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    render() {
        const logoInfo = `
        <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        <${this.shape} fill="${this.shapeColor}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>

        </svg>
        `
        return logoInfo
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
        this.shape = 'circle cx="150" cy="105" r="80"'
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
        this.shape = 'rect x="50" y="25" width="200" height="200"'
        }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
        this.shape = 'polygon points="150, 18 244, 182 56, 182"'
        }
}

module.exports = {Circle, Square, Triangle}
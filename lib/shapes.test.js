const {Circle, Square, Triangle} = require('../lib/shapes.js')

describe('Shapes module', () => {
    describe('Circle class', () => {
        test('Input a color and returns the correct shape points and color', () => {
            const shape = new Circle("red")
            shape.setColor("red")
            expect(shape.render()).toBe('<circle cx="150" cy="105" r="80" fill="red" />')
        })
    })
    describe('Square class', () => {
        test('Input a color and returns the correct shape points and color', () => {
            const shape = new Square("green")
            shape.setColor("green")
            expect(shape.render()).toBe('<rect x="50" y="25" width="200" height="200" fill="green" />')
        })
    })
    describe('Triangle class', () => {
        test('Input a color and returns the correct shape points and color', () => {
            const shape = new Triangle()
            shape.setColor("blue")
            expect(shape.render()).toBe('<polygon points="150, 0 270, 182 30, 182" fill="blue" />')
        })
    })
})
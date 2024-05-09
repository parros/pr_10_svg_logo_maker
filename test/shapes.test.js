const {Circle, Square, Triangle} = require('../lib/shapes.js')

describe('things', () => {
    test('add things', () => {
        const shape = new Triangle("blue")

        expect(shape.render()).toBe('<polygon points="150, 0 270, 182 30, 182" fill="blue" />')
    })
})
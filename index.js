const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shapes.js')

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'text',
            message: 'Enter up to three characters',
            maxLength: 3
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for text'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Pick a shape',
            choices: ['square', 'circle', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape'
        }
    ]).then((answers) => {
        let logoContent = ''
        console.log(answers.shape)
        if (answers.shape === 'square') {
            logoContent = new Square(answers.text, answers.textColor, answers.shapeColor)
            console.log('square')
        }   else if (answers.shape === 'circle') {
            logoContent = new Circle(answers.text, answers.textColor, answers.shapeColor)
            console.log('circle')
        }   else if (answers.shape === 'triangle') {
            logoContent = new Triangle(answers.text, answers.textColor, answers.shapeColor)
            console.log('triangle')
        }
        console.log(logoContent)
        const logoDone = logoContent.render()

        fs.writeFileSync('logo.svg', logoDone, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        )
    })
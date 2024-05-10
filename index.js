const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const fs = require('fs')
const {Circle, Square, Triangle} = require('./lib/shapes.js')

// limits max input length for inquirer prompt
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// SVG general information
const logoInfo = (text, textColor, shapeInfo) => `        
    <svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">

    ${shapeInfo}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

    </svg>
    `
// Asks user for text, text color, shape and shape color when prompted
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

        // Picks shape information based on answer from user
        let shapeContent = ''
        if (answers.shape === 'square') {
            shapeContent = new Square()
        }   else if (answers.shape === 'circle') {
            shapeContent = new Circle()
        }   else if (answers.shape === 'triangle') {
            shapeContent = new Triangle()
        }

        shapeContent.setColor(answers.shapeColor)
        const shapeInfo = shapeContent.render()

        // Combines SVG general information and user input
        const logoDone = logoInfo(answers.text, answers.textColor, shapeInfo)

        // writes SVG file
        fs.writeFileSync('logo.svg', logoDone, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        )
    })

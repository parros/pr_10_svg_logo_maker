const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
const Color = require('color')

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
    ])
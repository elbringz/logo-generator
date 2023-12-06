const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shape');
const Rectangle = require('./lib/rectangle');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
var userShape = '';
const file = './Examples/logo.svg';

const promptQuestions = [
    'Provide 3 letters you wish to include in your logo.',

    'Pick a shape for your logo.',

    'Pick a color for your shape.',
    
    'Pick a color for your 3 letters.',
];

function startShape() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: promptQuestions[0]
        },
        {
            type: 'list',
            name: 'shape',
            message: promptQuestions[1],
            choices: ['Triangle', 'Rectangle', 'Circle']
        },
        {
            type: 'input',
            name: 'colorShape',
            message: promptQuestions[2]
        },
        {
            type: 'input',
            name: 'colorText',
            message: promptQuestions[3]
        }
    ])
    .then((content) => {
        if(content.shape == 'Triangle') {
            userShape = new Triangle(content.text, content.colorText, content.colorShape);
        } else if(content.shape == 'Rectangle') {
            userShape = new Rectangle(content.text, content.colorText, content.colorShape);
        } else if(content.shape == 'Circle') {
            userShape = new Circle(content.text, content.colorText, content.colorShape);
        } else {
            console.log('Error creating your logo. Please try again.');
        }

        userShape.generateShape();
        const userShapeCode = userShape.generate();
        fs.writeFile(file, userShapeCode, (err) => {
            err ? console.log(err) : console.log('Your logo has been created successfully!');
        })
    })
}
startShape();
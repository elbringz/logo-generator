// Add required files.
const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shape');
const Rectangle = require('./lib/rectangle');
const Circle = require('./lib/circle');
const Triangle = require('./lib/triangle');
var userShape = '';
const file = './Examples/logo.svg';

// Set of prompt questions to be answered by the user
const promptQuestions = [
    'Provide 3 letters you wish to include in your logo.',

    'Pick a shape for your logo.',

    'Pick a color for your shape.',
    
    'Pick a color for your 3 letters.',
];
// Function that starts the prompts and writes resulting data to the logo.svg file
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
        const shapeMap = {
            'Triangle': Triangle,
            'Rectangle': Rectangle,
            'Circle': Circle
        };
        
        const selectedShapeClass = shapeMap[content.shape];
        
        if (selectedShapeClass) {
            userShape = new selectedShapeClass(content.text, content.colorText, content.colorShape);
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
// Calls the function to start logo generation
startShape();
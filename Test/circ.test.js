const Circle = require("../lib/circle")
// Tests that the result from the generateShape function returns the correct data

describe('Create circle svg.', () => {
    describe('Tests the create method from class.', () => {
       
        it('should generate the values from the create method.', () => {
            const shape = new Circle("ttt", "green", "blue");
            shape.generateShape();
            const shapeVals = shape.create;
            expect(shapeVals).toBe(`cx="100" cy="100" r="75" fill="blue"`);
        })
    })
    });
            
const Triangle = require("../lib/triangle");


describe('Create triangle svg.', () => {
    describe('Tests the create method from class.', () => {
       
        it('should generate the values from the create method.', () => {
            const shape = new Triangle("ttt", "green", "blue");
            shape.generateShape();
            const shapeVals = shape.create;
            expect(shapeVals).toBe(`points="20, 180 115, 5 225, 180" fill="blue"`);
        })
    })
    });
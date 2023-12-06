const Rectangle = require("../lib/rectangle");


describe('Create rectangle svg.', () => {
    describe('Tests the create method from class.', () => {
       
        it('should generate the values from the create method.', () => {
            const shape = new Rectangle("ttt", "green", "blue");
            shape.generateShape();
            const shapeVals = shape.create;
            expect(shapeVals).toBe(`x="50" y="75" width="125" height="125" fill="blue"`);
        })
    })
    });
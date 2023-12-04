const Circle = require("../lib/circle")


describe('Create circle svg.', () => {
    describe('Tests the create method from class.', () => {
       
        it('should generate the values from the create method.', () => {
            const shape = new Circle("ttt", "green", "blue");
            shape.generateShape();
            const shapeVals = shape.create;
            expect(shapeVals).toBe(`cx="25" cy="75" r="20" fill="blue"`);
        })
    })
    });
            
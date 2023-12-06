const shape = require('./shape');
// Triangle class that extends from base shape class
class Triangle extends shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape)
        this.p1 = [20, 180];
        this.p2 = [115, 5];
        this.p3 = [225, 180];
        this.shape = 'polygon';
        this.tx = 125;
        this.ty = 80;
        this.create;
    }
    generateShape() {
        this.create = `points="${this.p1[0]}, ${this.p1[1]} ${this.p2[0]}, ${this.p2[1]} ${this.p3[0]}, ${this.p3[1]}" fill="${this.colorShape}"`
    }
}

module.exports = Triangle;
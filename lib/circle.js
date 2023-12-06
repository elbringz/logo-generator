const shape = require('./shape');
// Circle shape class that extends from the base shape class
class Circle extends shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape)
        this.r = 75;
        this.cx = 100;
        this.cy = 100;
        this.shape = 'circle';
        this.tx = 105;
        this.ty = 90;
        this.create;
    }
    generateShape() {
        this.create = `cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.colorShape}"`
    }
}

module.exports = Circle;
const shape = require('./shape');

class Circle extends shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape)
        this.r = '20';
        this.cx = '25';
        this.cy = '75';
        this.shape = 'circle';
        this.tx = '125';
        this.ty = '80';
        this.create;
    }
    generateShape() {
        this.create = `cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.colorShape}"`
    }
}

module.exports = Circle;
const shape = require('./shape');
// Rectangle class that extends from the base shape class
class Rectangle extends shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape)
        this.width = 125;
        this.height = 125;
        this.x = 50;
        this.y = 75;
        this.shape = 'rect';
        this.tx = 115;
        this.ty = 130;
        this.create;
    }
    generateShape() {
        this.create = `x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" fill="${this.colorShape}"`
    }
}

module.exports = Rectangle;
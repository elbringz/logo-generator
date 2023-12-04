class Shape {
    constructor(text, colorText, colorShape) {
        this.text = text;
        this.colorText = colorText;
        this.colorShape = colorShape;
    }
    generate() {
        return `<svg width="400" height="300" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} ${this.create}></${this.shape}>
        <text x="${this.tx}" y="${this.ty}" text-anchor="middle" alignment-baseline="middle" font-size="30" fill="${this.colorText}">${this.text}</text>
        </svg>`
    }
}

module.exports = Shape;
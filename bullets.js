export class Bullet {
    constructor(x, y, characterWidth,  characterHeight, bulletHeight) {
        this.x = x + characterWidth / 2;
        this.y = y + characterHeight / 2 - bulletHeight / 2;
    }
    update(bSpeed) {
        this.x += bSpeed;
    }
    draw(colour, bulletWidth, ctx, bulletHeight) {
        ctx.fillStyle = colour;
        ctx.fillRect(this.x, this.y, bulletWidth, bulletHeight);
    }
}
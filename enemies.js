export class EnemyOne {
    constructor(image, width, height, spriteWidth, spriteHeight, imageCoorX, imageCoorY) {
      this.image = new Image();
      this.image.src = "./assets/raven.png";
      this.image.onload = () => {
        this.width = width;
        this.height = height;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.imageCoorX = imageCoorX;
        this.imageCoorY = imageCoorY;
        this.spritecordX = 0;
      };
    }
  
    draw(ctx) {
      ctx.drawImage(
        this.image,
        this.spritecordX * this.spriteWidth,
        0,
        this.spriteWidth,
        this.spriteHeight,
        this.imageCoorX,
        this.imageCoorY,
        this.width,
        this.height
      );
    }
  
    update() {
      this.spritecordX++;
      if (this.spritecordX == 6) {
        this.spritecordX = 0;
      }
      this.imageCoorX -= 5;
    }
  }

  export class EnemyTwo {
    constructor(image, width, height, spriteWidth, spriteHeight, imageCoordX, imageCoordY) {
      this.image = image;
        this.width = width;
        this.height = height;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;
        this.imageCoordX = imageCoordX;
        this.imageCoordY = imageCoordY;
        this.spritecordX = 0;
        this.Dircetion = 'Down'
    }
    draw(ctx) {
    ctx.drawImage(
      this.image,
      this.spritecordX * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight, 
      this.imageCoordX,
      this.imageCoordY,
      this.width, 
      this.height
    )  
    }
    update() {
      
      this.spritecordX++;
      if (this.spritecordX == 6) {
        this.spritecordX = 0;
      }
      if (this.imageCoordY == 500) {
        this.Dircetion = 'Up'
      } else if (this.imageCoordY == 0) {
        this.Dircetion = 'Down';
      }
      if (this.Dircetion == 'Up') {
        this.imageCoordX -= 1.5;
      this.imageCoordY -= 5;
      } else if (this.Dircetion == 'Down') {
        this.imageCoordX -= 1.5;
      this.imageCoordY += 5;
      }
    }
  }
let rect1 = {x: 5, y: 5, width: 50, height: 50,};
let rect2 = {x: 20, y: 10, width: 50, height: 50,};

if (rect1.x < rect2.x + rect2.width && 
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
    ) {
    // collision detected
} else () {
    // no collision
}


if(bullets[i].x < enemiesForPhaseTwo[j].imageCoordX + enemyTwoWidth &&
    bullets[i].x + characterBulletWidth > enemiesForPhaseTwo[j].imageCoordX &&
    bullets[i].y < enemiesForPhaseTwo[j].imageCoordY + enemyTwoHeight &&
    bullets[i].y + characterBulletHeight > enemiesForPhaseTwo[j].imageCoordY)  {
      console.log("collision");
      bullets.splice(i, 1);
      enemiesForPhaseTwo.splice(j, 1);
    }
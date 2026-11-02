let gameOver = false;

// Adding game and player!

const game = document.getElementById("game");
const player = document.getElementById("player");

let playerX = 20;
let playerY = 20;

player.style.left = playerX + "px";
player.style.top = playerY + "px";

function movePlayer(event) {

    if (gameOver) {
        return; // Stop moving the player if the game is over
    }
    if (event.key === "ArrowRight") playerX += 10;
    if (event.key === "ArrowLeft") playerX -= 10;
    if (event.key === "ArrowUp") playerY -= 10;
    if (event.key === "ArrowDown") playerY += 10;

    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
    }

    // Prevent movement outside the game area
    // clientWidth, clientHeight are the width and height of the game box.
    playerX = Math.max(0, Math.min(playerX, game.clientWidth - 30));
    playerY = Math.max(0, Math.min(playerY, game.clientHeight - 30));

    // Instead of using transform, we can simply use left and top too!
    // 
    player.style.left = playerX + "px";
    player.style.top = playerY + "px";
}

document.addEventListener("keydown", movePlayer);

// Adding enemy !

const enemy = document.getElementById("enemy");
let enemyX = 100;
let enemyY = 100;
enemy.style.left = enemyX + "px";
enemy.style.top = enemyY + "px";

// Make the enemy follow the player
function followPlayer() {
    if (gameOver) {
        return; // Stop moving the player if the game is over
    }
    // Horizontal movement
    if (enemyX < playerX) {
        enemyX += 1;
    } else if (enemyX > playerX) {
        enemyX -= 1;
    }

    // Vertical movement
    if (enemyY < playerY) {
        enemyY += 1;
    } else if (enemyY > playerY) {
        enemyY -= 1;
    }

    // Update the enemy's position
    enemy.style.left = enemyX + "px";
    enemy.style.top = enemyY + "px";

    // If they collide,
    if (Math.abs(playerX - enemyX) < 30 && Math.abs(playerY - enemyY) < 30) {
        gameOver = true;
        // Stop enemy movement and print game over!
        const gameOverDiv = document.getElementById("game-over");
        gameOverDiv.textContent = "GAME OVER!";
    }

}

// Call the followPlayer function every 50 milliseconds
setInterval(followPlayer, 50);

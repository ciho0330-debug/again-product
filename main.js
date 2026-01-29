const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Player (Cat)
const player = {
    x: 100,
    y: 100,
    width: 50,
    height: 50,
    color: 'blue',
    speed: 5
};

// Enemy (Dog)
const enemy = {
    x: 500,
    y: 300,
    width: 50,
    height: 50,
    color: 'red',
    speed: 3
};

function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function update() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player and enemy
    drawRect(player.x, player.y, player.width, player.height, player.color);
    drawRect(enemy.x, enemy.y, enemy.width, enemy.height, enemy.color);

    // Player movement
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') player.y -= player.speed;
        if (e.key === 'ArrowDown') player.y += player.speed;
        if (e.key === 'ArrowLeft') player.x -= player.speed;
        if (e.key === 'ArrowRight') player.x += player.speed;
    });

    // Enemy movement (chase player)
    if (enemy.x < player.x) enemy.x += enemy.speed;
    if (enemy.x > player.x) enemy.x -= enemy.speed;
    if (enemy.y < player.y) enemy.y += enemy.speed;
    if (enemy.y > player.y) enemy.y -= enemy.speed;

    // Collision detection
    if (
        player.x < enemy.x + enemy.width &&
        player.x + player.width > enemy.x &&
        player.y < enemy.y + enemy.height &&
        player.y + player.height > enemy.y
    ) {
        alert('Game Over!');
        document.location.reload();
    }

    requestAnimationFrame(update);
}

update();

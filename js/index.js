var ball = document.getElementById('ball');
var colors = ['green', 'blue', 'red', 'yellow', 'black', 'purple'];

function changeRandomColor() {
    ball.style.backgroundColor = colors[Math.floor(colors.length * Math.random())];
}

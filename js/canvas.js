var columns = 30;
var rows = 30;
var empty = 0;
var snake = 1;
var fruit = 2;

var left = 0;
var up = 1;
var right = 2;
var down = 3;

var keyLeft = 37;
var keyUp = 38;
var keyRight = 39;
var keyDown = 40;

var keyA = 65;
var keyW = 87;
var keyD = 68;
var keyS = 83;

var keyP = 80;
var pauseGame = false;

var startGame = false;
var stopGame = false;

var keyQ = 113;
var quitGame = false;
var quit = function () {
    if (quitGame === true) {
        console.log(quitGame);
    }
};

var canvas;
var context;
var keyState;
var frames;
var playerScore;

var setGrid = {
    height: null,
    width: null,
    _grid: null,

    init: function (direction, column, row) {
        this.height = row;
        this.width = column;
        this._grid = [];
        for (var x = 0; x < column; x++) {
            this._grid.push([]);
            for (var y = 0; y < row; y++) {
                this._grid[x].push(direction);
            }
        }
    },

    set: function (value, x, y) {
        this._grid[x][y] = value;
    },

    get: function (x, y) {
        return this._grid[x][y];
    }
};

var setSnake = {
    direction: null,
    last: null,
    _queue: null,

    init: function (direction, x, y) {
        this.direction = direction;
        this._queue = [];
        this.insert(x, y);
    },

    insert: function (x, y) {
        this._queue.unshift({ x: x, y: y });
        this.last = this._queue[0];
    },

    remove: function () {
        return this._queue.pop();
    }
};

var setFood = function () {
    var emptyCell = [];
    for (var x = 1; x < setGrid.width - 2; x++) {
        for (var y = 1; y < setGrid.height - 2; y++) {
            if (setGrid.get(x, y) === empty) {
                emptyCell.push({ x: x, y: y });
            }
        }
    }
    
    var randomPosition = emptyCell[Math.round(Math.random() * (emptyCell.length - 1))];
    setGrid.set(fruit, randomPosition.x, randomPosition.y);
};

var main = function () {
    stopGame = false;

    canvas = document.getElementById('canvas');
    canvas.height = rows * 15;
    canvas.width = columns * 15;
    context = canvas.getContext('2d');
    // context.font = '1vw Slackey';
    frames = 0;
    keyState = {};

    document.addEventListener('keyDown', function (event) {
        keyState[event.keyCode] = true;
    })

    document.addEventListener('keyUp', function (event) {
        delete keyState[event.keyCode];
    })

    init();
    if (!startGame) {
        startGame = true;
        loop();
    }
};

var init = function () {
    playerScore = 0;
    setGrid.init(empty, columns, rows);
    var startPosition = { x: Math.floor(columns / 2), y: rows - 1 };
    setSnake.init(up, startPosition.x, startPosition.y);
    setGrid.set(snake, startPosition.x, startPosition.y);
    setFood();
}

var loop = function () {
    if (!pauseGame && !quitGame && !stopGame) {
        update();
        draw();
    }
    window.requestAnimationFrame(loop, canvas);
};

var update = function () {
    frames++;
    if (keyState[keyLeft] && snake.direction !== right || keyState[keyA] && snake.direction !== right) {
        snake.direction = left;
    }
    if (keyState[keyUp] && snake.direction !== down || keyState[keyW] && snake.direction !== down) {
        snake.direction = up;
    }
    if (keyState[keyRight] && snake.direction !== left || keyState[keyD] && snake.direction !== left) {
        snake.direction = right;
    }
    if (keyState[keyDown] && snake.direction !== up || keyState[keyS] && snake.direction !== up) {
        snake.direction = down;
    }
    if (keyState[keyQ]) {
        if (quitGame === false) {
            quitGame = true;
            quit();
        } else {
            quitGame = false;
        }
    }
    
    if (frames % 5 === 0) {

        var nx = snake.last.x;
        var ny = snake.last.y;

        switch (setSnake.direction) {
            case left:
                nx--;
                break;
            case up:
                ny--;
                break;
            case right:
                nx++;
                break;
            case down:
                ny++;
                break;
        }

        if (1 > nx || nx > setGrid.width - 2 || 1 > ny || ny > setGrid.height - 2 || setGrid.get(nx, ny) === snake) {
            stopGame = true;

            setTimeout(function () {
                $('div.gameOverMenu').css('display', 'block');
            }, 1000);
            angular.element(document.getElementById('gameOverMenu')).scope().stopGame();
        }

        if (setGrid.get(nx, ny) === fruit) {
            playerScore++;
            setFood();
        } else {
            var tail = setSnake.remove();
            setGrid.set(empty, tail.x, tail.y);
        }
        setGrid.set(snake, nx, ny);
        snake.insert(nx, ny);
    }
};

var draw = function () {
    var tileHeight = canvas.height / setGrid.height;
    var tileWidth = canvas.width / setGrid.width;

    for (var x = 0; x < setGrid.width; x++) {
        for (var y = 0; y < setGrid.height; y++) {
            switch (setGrid.get(x, y)) {
                case empty:
                    context.fillStyle = "rgba(0,0,0,0)";
                    break;
                case snake:
                    context.fillStyle = "rgb(50,200,50)";
                    break;
                case fruit:
                    context.fillStyle = "rgb(200,0,0)";
                    break;
            }
            context.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
        }
    }   
    context.fillStyle = "rgba(255,255,255,.5)";
    // context.font = '1vw Slackey';
    context.fillText("playerScore: " + playerScore, 10, canvas.height - 15);    
};
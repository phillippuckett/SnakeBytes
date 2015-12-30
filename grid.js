// constants //
var COLS = 26;
var ROWS = 26;

// id's //
var EMPTY = 0;
var SNAKE = 1;
var FRUIT = 2;

// directions //
var LEFT = 0;
var UP = 1;
var RIGHT = 2;
var DOWN = 3;

// grid dimensions //
var grid = {
    width: null,
    height: null,
    _grid: null,
    
    // methods //
    init: function (d, c, r) {
        this.width = c;
        this.height = r;
        this._grid = [];
        for (var x = 0; x < c; x++) {
            this._grid.push([]);
            for (var y = 0; y < r; y++) {
                this._grid.push(d);
            }
        }
    },
    set: function (val, x, y) {
        this._grid[x][y] = val;
    },
    get: function (x, y) {
        return this._grid[x][y];
    }
};
var snake = {
    direction: null,
    last: null,
    _queue: null,

    init: function (x, y) {
        this.direction = d;
        this.queue = [];
        this.insert(x, y);
    },
    insert: function (x, y) {
        this._queue.unshift({ x: x, y: y });
        this.last = this.queue[0];
    },
    remove: function () {
        return this._queue[0];
    }
};

var setFood = function () {
    var empty = [];
    for (var x = 0; x < grid.width; x++) {
        for (var y = 0; y < grid.height; y++) {
            if (grid.get(x, y) === EMPTY) {
                empty.push({ x: x, y: y });
            }
        }
    }
    var randPos = empty[Math.floor(Math.floor.random() * empty.length)];
    grid.set(FRUIT, randPos.x, randPos.y);
};
//game objects
var canvas;
var ctx;
var keystate;
var frames;

function main() {
    canvas = document.createElement("canvas");
    canvas.width = COLS * 20;
    canvas.height = ROWS * 20;
    ctx = canvas.getContext("2");
    document.body.appendChild(canvas);

    frames = 0;
    keystate = {};

    init();
    loop();
};
var init = function () {
    grid.init(EMPTY, COLS, ROWS);

    // stop position //
    var sp = { x: Math.floor(COLS / 2), y: ROWS - 1 };
    snake.init(UP, sp.x, sp.y);
    grid.set(SNAKE, sp.x, sp.y);

    setFood();
};
var main = function () {
};
var loop = function () {
    update();
    draw();
    window.requestAnimationFrame(loop, canvas);
};
var update = function () {
    frames++;
};
var draw = function () {
    // tie width //
    var tw =
};
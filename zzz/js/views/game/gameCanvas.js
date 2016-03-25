// /** Here we will declare functions */
// // QUIT //
// var qQuit = 113;
// var quitGame = false;
// var quit = function () {
//     if (quitGame === true) {
//         console.log("Keystate Running; QUIT", quitGame);
//     }
// };
// /** Here we will declare our variables */
// // CONSTANTS //
// var COLS = 25;
// var ROWS = 25;
// var EMPTY = 0;
// var SNAKE = 1;
// var FRUIT = 2;

// // DIRECTIONS //
// var LEFT = 0;
// var UP = 1;
// var RIGHT = 2;
// var DOWN = 3;

// // ARROW KEYS //
// var leftLEFT = 37;
// var upUP = 38;
// var rightRIGHT = 39;
// var downDOWN = 40;

// // W, A, S, D //
// var aLEFT = 65;
// var wUP = 87;
// var dRIGHT = 68;
// var sDOWN = 83;

// // PAUSE //
// var pPause = 80;
// var pauseGame = false;

// // ONE GAME AT A TIME //
// var gameGoing = false;

// // GAME OVER //
// var gameOver = false;

// // RESTART //
// // var rRestart = 82;
// // var restartGame = false;

// // GAME OBJECTS //
// var canvas;	  /* HTMLCanvas */
// var context;  /* CanvasRenderingContext2d */
// var keystate; /* Object, used for keyboard inputs */
// var frames;   /* number, used for animation */
// var score;	  /* number, keep track of the player score */

// // THE GRID //
// var grid = {
//     width: null,  /* number, the number of columns */
//     height: null, /* number, the number of rows */
//     _grid: null,  /* Array<any>, data representation */
//     init: function (d, c, r) {
//         this.width = c;
//         this.height = r;
//         this._grid = [];
//         for (var x = 0; x < c; x++) {
//             this._grid.push([]);
//             for (var y = 0; y < r; y++) {
//                 this._grid[x].push(d);
//             }
//         }
//     },
       
//     set: function (val, x, y) {
//         this._grid[x][y] = val;
//     },   
    
//     get: function (x, y) {
//         return this._grid[x][y];
//     }
// }

// // THE SNAKE //
// var snake = {
//     direction: null, /* number, the direction */
//     last: null,		 /* Object, pointer to the last element in the queue */
//     _queue: null,	 /* Array<number>, data representation*/
    
//     /** Clears queue, sets start position */
//     init: function (d, x, y) {
//         this.direction = d;
//         this._queue = [];
//         this.insert(x, y);
//     },
    
//     /** Adds an element to the queue */
//     insert: function (x, y) {
//         /* unshift prepends an element to an array */
//         this._queue.unshift({ x: x, y: y });
//         this.last = this._queue[0];
//     },
    
//     /** Removes and returns the first element in the queue */
//     remove: function () {
//         /* pop returns the last element of an array */
//         return this._queue.pop();
//     }
// };

// // SETTING THE FOOD //
// /** Set a food id at a random free cell in the grid*/
// var setFood = function () {
//     var empty = [];
//     /** iterate through the grid and find all empty cells */
//     for (var x = 1; x < grid.width - 2; x++) {
//         for (var y = 1; y < grid.height - 2; y++) {
//             if (grid.get(x, y) === EMPTY) {
//                 empty.push({ x: x, y: y });
//             }
//         }
//     }
    
//     /** chooses a random cell position */
//     var randpos = empty[Math.round(Math.random() * (empty.length - 1))];
//     grid.set(FRUIT, randpos.x, randpos.y);
// }

// // START GAME //
// /** Starts the game*/
// var main = function () {
//     gameOver = false;
    
//     /** create and initiate the canvas element */
//     //canvas = document.createElement("canvas");
//     canvas = document.getElementById("myCanvas")
//     canvas.width = COLS * 15;
//     canvas.height = ROWS * 15;
//     context = canvas.getContext("2d");
    
//     // SCORE FONT //    
//     /** add the canvas element to the body of the document */
//     //document.body.appendChild(canvas);
//     // sets a base font for bigger score display
//     context.font = "10px Slackey";
//     frames = 0;
//     keystate = {};
    
//     /** keeps track of the keyboard input */
//     document.addEventListener("keydown", function (evt) {
//         keystate[evt.keyCode] = true;
//     });
//     document.addEventListener("keyup", function (evt) {
//         delete keystate[evt.keyCode];
//     });
    
//     /** initiates game objects and starts the game loop */
//     init();
//     if (!gameGoing) {
//         gameGoing = true;
//         loop();
//     }
// }

// // GAME RESTART //
// /** Resets and initiates game objects*/
// var init = function () {
//     score = 0;
//     grid.init(EMPTY, COLS, ROWS);
//     var sp = { x: Math.floor(COLS / 2), y: ROWS - 1 };
//     snake.init(UP, sp.x, sp.y);
//     grid.set(SNAKE, sp.x, sp.y);
//     setFood();
// }

// /** The game loop function, used for game updates and rendering*/
// var loop = function () {
//     if (!pauseGame && !quitGame && !gameOver) {
//         update();
//         draw();
//     }
//     /** When ready to redraw the canvas call the loop function first. Runs about 60 frames a second */
//     window.requestAnimationFrame(loop, canvas);

// }
// /** Updates the game logic*/
// var update = function () {
//     frames++;
    
//     /** changing direction of the snake depending on which keys that are pressed */
//     if (keystate[leftLEFT] && snake.direction !== RIGHT || keystate[aLEFT] && snake.direction !== RIGHT) {
//         snake.direction = LEFT;
//     }
//     if (keystate[upUP] && snake.direction !== DOWN || keystate[wUP] && snake.direction !== DOWN) {
//         snake.direction = UP;
//     }
//     if (keystate[rightRIGHT] && snake.direction !== LEFT || keystate[dRIGHT] && snake.direction !== LEFT) {
//         snake.direction = RIGHT;
//     }
//     if (keystate[downDOWN] && snake.direction !== UP || keystate[sDOWN] && snake.direction !== UP) {
//         snake.direction = DOWN;
//     }
//     if (keystate[qQuit]) {
//         if (quitGame === false) {
//             quitGame = true;
//             quit();
//         } else {
//             quitGame = false;
//         }
//     }
//     /** each five frames update the game state */
//     if (frames % 5 === 0) {
        
//         /** pop the last element from the snake queue i.e. the head */
//         var nx = snake.last.x;
//         var ny = snake.last.y;
        
//         /** updates the position depending on the snake direction */
//         switch (snake.direction) {
//             case LEFT:
//                 nx--;
//                 break;
//             case UP:
//                 ny--;
//                 break;
//             case RIGHT:
//                 nx++;
//                 break;
//             case DOWN:
//                 ny++;
//                 break;
//         }
        
//         // GAME OVER //
//         /** checks all gameover conditions */
//         if (1 > nx || nx > grid.width - 2 || 1 > ny || ny > grid.height - 2 || grid.get(nx, ny) === SNAKE) {
//             gameOver = true;
//             console.log("GameOver", gameOver);
//             setTimeout(function () {
//                 $('div#gameOverMenu').css('display', 'block');
//             }, 1000);
//             // console.log('getting here game over');
//                 angular.element(document.getElementById('gameOverMenu')).scope().gameOver();
//         }
           
//         /** check wheter the new position are on the fruit item */
//         if (grid.get(nx, ny) === FRUIT) {
            
//             /** increment the score and sets a new fruit position */
//             score++;
//             setFood();
//         } else {
            
//             /** take out the first item from the snake queue i.e the tail and remove id from grid */
//             var tail = snake.remove();
//             grid.set(EMPTY, tail.x, tail.y);
//         }
//         /** add a snake id at the new position and append it to the snake queue */
//         grid.set(SNAKE, nx, ny);
//         snake.insert(nx, ny);
//     }
// }

// /** Render the grid to the canvas.*/
// var draw = function () {
    
//     /** calculate tile-width and -height */
//     var tw = canvas.width / grid.width;
//     var th = canvas.height / grid.height;
    
//     /** iterate through the grid and draw all cells */
//     for (var x = 0; x < grid.width; x++) {
//         for (var y = 0; y < grid.height; y++) {
            
//             /** sets the color of the fillstyle depending on the id of each cell */
//             switch (grid.get(x, y)) {
//                 case EMPTY:
//                     context.fillStyle = "darkgreen";
//                     break;
//                 case SNAKE:
//                     context.fillStyle = "darkorange";
//                     break;
//                 case FRUIT:
//                     context.fillStyle = "darkred";
//                     break;
//             }
//             context.fillRect(x * tw, y * th, tw, th);
//         }
//     }
    
//     /** changes the fillstyle once more and draws the SCORE message to the canvas */
//     context.fillStyle = "darkorange";
//     context.fillText("SCORE: " + score, 10, canvas.height - 10);
// }
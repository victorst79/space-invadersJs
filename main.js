import {Player} from './modules/player.js';
import {Invaders} from './modules/invaders.js';
import {Projectile} from './modules/projectile.js';

var player = new Player(225,450,100,"game-screen");
var invaders = new Array;
var projectiles = new Array;
var evento;
player.print("game-screen");
console.log(player);

// FUNCTIONS

function controlProjectiles(){

}

document.addEventListener("keydown", (event) =>{
    var key = event.keyCode;
    // !!!Improve movement and achieve greater fluency!!!
    if(player.getPositionPlayerX() > 0){
        if(key == 37){
            player.x = player.x - (player.speed * 5);
            player.ship.setAttribute("x", player.x);
        }
    }
    if(player.getPositionPlayerX() < 450){
        if(key == 39){
            player.x = player.x + (player.speed * 5);
            player.ship.setAttribute("x", player.x);
        }
    }
    // Player shoots
    if(key == 32){
        var bullet = new Projectile(player.x + 20,(player.y - 25));
        bullet.print("game-screen");
        projectiles.push(bullet);        
        console.log(projectiles);
    }
});


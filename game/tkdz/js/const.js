"use strict";var SCREEN_WIDTH=512,SCREEN_HEIGHT=448,MENU_IMAGE=new Image;MENU_IMAGE.src="images/menu.gif";var RESOURCE_IMAGE=new Image;RESOURCE_IMAGE.src="images/tankAll.gif";var POS=new Array;POS.selectTank=[128,96],POS.stageLevel=[396,96],POS.num=[256,96],POS.map=[0,96],POS.home=[256,0],POS.score=[0,112],POS.player=[0,0],POS.protected=[160,96],POS.enemyBefore=[256,32],POS.enemy1=[0,32],POS.enemy2=[128,32],POS.enemy3=[0,64],POS.bullet=[80,96],POS.tankBomb=[0,160],POS.bulletBomb=[320,0],POS.over=[384,64],POS.prop=[256,110];var START_AUDIO=new Audio("audio/start.mp3"),BULLET_DESTROY_AUDIO=new Audio("audio/bulletCrack.mp3"),TANK_DESTROY_AUDIO=new Audio("audio/tankCrack.mp3"),PLAYER_DESTROY_AUDIO=new Audio("audio/playerCrack.mp3"),MOVE_AUDIO=new Audio("audio/move.mp3"),ATTACK_AUDIO=new Audio("audio/attack.mp3"),PROP_AUDIO=new Audio("audio/prop.mp3"),GAME_STATE_MENU=0,GAME_STATE_INIT=1,GAME_STATE_START=2,GAME_STATE_OVER=3,GAME_STATE_WIN=4,WALL=1,GRID=2,GRASS=3,WATER=4,ICE=5,HOME=9,ANOTHREHOME=8,UP=0,DOWN=1,LEFT=2,RIGHT=3,ENEMY_LOCATION=[192,0,384],BULLET_TYPE_PLAYER=1,BULLET_TYPE_ENEMY=2,CRACK_TYPE_TANK="tank",CRACK_TYPE_BULLET="bullet";
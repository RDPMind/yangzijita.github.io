"use strict";var Tank=function(){this.x=0,this.y=0,this.size=32,this.dir=UP,this.speed=1,this.frame=0,this.hit=!1,this.isAI=!1,this.isShooting=!1,this.bullet=null,this.shootRate=.6,this.isDestroyed=!1,this.tempX=0,this.tempY=0,this.move=function(){this.isAI&&0<emenyStopTime||(this.tempX=this.x,this.tempY=this.y,this.isAI&&(this.frame++,this.frame%100!=0&&!this.hit||(this.dir=parseInt(4*Math.random()),this.hit=!1,this.frame=0)),this.dir==UP?this.tempY-=this.speed:this.dir==DOWN?this.tempY+=this.speed:this.dir==RIGHT?this.tempX+=this.speed:this.dir==LEFT&&(this.tempX-=this.speed),this.isHit(),this.hit||(this.x=this.tempX,this.y=this.tempY))},this.isHit=function(){this.dir==LEFT?this.x<=map.offsetX&&(this.x=map.offsetX,this.hit=!0):this.dir==RIGHT?this.x>=map.offsetX+map.mapWidth-this.size&&(this.x=map.offsetX+map.mapWidth-this.size,this.hit=!0):this.dir==UP?this.y<=map.offsetY&&(this.y=map.offsetY,this.hit=!0):this.dir==DOWN&&this.y>=map.offsetY+map.mapHeight-this.size&&(this.y=map.offsetY+map.mapHeight-this.size,this.hit=!0),this.hit||tankMapCollision(this,map)&&(this.hit=!0)},this.isShot=function(){},this.shoot=function(t){if(!(this.isAI&&0<emenyStopTime||this.isShooting)){var i=this.x,s=this.y;this.bullet=new Bullet(this.ctx,this,t,this.dir),this.dir==UP?(i=this.x+parseInt(this.size/2)-parseInt(this.bullet.size/2),s=this.y-this.bullet.size):this.dir==DOWN?(i=this.x+parseInt(this.size/2)-parseInt(this.bullet.size/2),s=this.y+this.size):this.dir==LEFT?(i=this.x-this.bullet.size,s=this.y+parseInt(this.size/2)-parseInt(this.bullet.size/2)):this.dir==RIGHT&&(i=this.x+this.size,s=this.y+parseInt(this.size/2)-parseInt(this.bullet.size/2)),this.bullet.x=i,this.bullet.y=s,this.isAI||ATTACK_AUDIO.play(),this.bullet.draw(),bulletArray.push(this.bullet),this.isShooting=!0}},this.distroy=function(){this.isDestroyed=!0,crackArray.push(new CrackAnimation(CRACK_TYPE_TANK,this.ctx,this)),TANK_DESTROY_AUDIO.play()}},SelectTank=function(){this.ys=[250,281],this.x=140,this.size=27};SelectTank.prototype=new Tank;var PlayTank=function(t){this.ctx=t,this.lives=3,this.isProtected=!0,this.protectedTime=500,this.offsetX=0,this.speed=2,this.draw=function(){if(this.hit=!1,this.ctx.drawImage(RESOURCE_IMAGE,POS.player[0]+this.offsetX+this.dir*this.size,POS.player[1],this.size,this.size,this.x,this.y,this.size,this.size),this.isProtected){var t=parseInt((500-this.protectedTime)/5)%2;this.ctx.drawImage(RESOURCE_IMAGE,POS.protected[0],POS.protected[1]+32*t,32,32,this.x,this.y,32,32),this.protectedTime--,0==this.protectedTime&&(this.isProtected=!1)}},this.distroy=function(){this.isDestroyed=!0,crackArray.push(new CrackAnimation(CRACK_TYPE_TANK,this.ctx,this)),PLAYER_DESTROY_AUDIO.play()},this.renascenc=function(t){this.lives--,this.dir=UP,this.isProtected=!0,this.protectedTime=500,this.isDestroyed=!1;var i=0;i=1==t?129:256,this.x=i+map.offsetX,this.y=385+map.offsetY}};PlayTank.prototype=new Tank;var EnemyOne=function(t){this.ctx=t,this.isAppear=!1,this.times=0,this.lives=1,this.isAI=!0,this.speed=1.5,this.draw=function(){if(this.times++,this.isAppear){if(this.ctx.drawImage(RESOURCE_IMAGE,POS.enemy1[0]+this.dir*this.size,POS.enemy1[1],32,32,this.x,this.y,32,32),this.times%50==0)Math.random()<this.shootRate&&this.shoot(2),this.times=0;this.move()}else{var t=parseInt(this.times/5)%7;this.ctx.drawImage(RESOURCE_IMAGE,POS.enemyBefore[0]+32*t,POS.enemyBefore[1],32,32,this.x,this.y,32,32),34==this.times&&(this.isAppear=!0,this.times=0,this.shoot(2))}}};EnemyOne.prototype=new Tank;var EnemyTwo=function(t){this.ctx=t,this.isAppear=!1,this.times=0,this.lives=2,this.isAI=!0,this.speed=1,this.draw=function(){if(this.times++,this.isAppear){if(this.ctx.drawImage(RESOURCE_IMAGE,POS.enemy2[0]+this.dir*this.size,POS.enemy2[1],32,32,this.x,this.y,32,32),this.times%50==0)Math.random()<this.shootRate&&this.shoot(2),this.times=0;this.move()}else{var t=parseInt(this.times/5)%7;this.ctx.drawImage(RESOURCE_IMAGE,POS.enemyBefore[0]+32*t,POS.enemyBefore[1],32,32,this.x,this.y,32,32),35==this.times&&(this.isAppear=!0,this.times=0,this.shoot(2))}}};EnemyTwo.prototype=new Tank;var EnemyThree=function(t){this.ctx=t,this.isAppear=!1,this.times=0,this.lives=3,this.isAI=!0,this.speed=.5,this.draw=function(){if(this.times++,this.isAppear){if(this.ctx.drawImage(RESOURCE_IMAGE,POS.enemy3[0]+this.dir*this.size+(3-this.lives)*this.size*4,POS.enemy3[1],32,32,this.x,this.y,32,32),this.times%50==0)Math.random()<this.shootRate&&this.shoot(2),this.times=0;this.move()}else{var t=parseInt(this.times/5)%7;this.ctx.drawImage(RESOURCE_IMAGE,POS.enemyBefore[0]+32*t,POS.enemyBefore[1],32,32,this.x,this.y,32,32),35==this.times&&(this.isAppear=!0,this.times=0,this.shoot(2))}}};EnemyThree.prototype=new Tank;
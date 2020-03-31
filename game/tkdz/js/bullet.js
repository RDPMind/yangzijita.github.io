"use strict";var Bullet=function(t,i,s,e){this.ctx=t,this.x=0,this.y=0,this.owner=i,this.type=s,this.dir=e,this.speed=3,this.size=6,this.hit=!1,this.isDestroyed=!1,this.draw=function(){this.ctx.drawImage(RESOURCE_IMAGE,POS.bullet[0]+this.dir*this.size,POS.bullet[1],this.size,this.size,this.x,this.y,this.size,this.size),this.move()},this.move=function(){this.dir==UP?this.y-=this.speed:this.dir==DOWN?this.y+=this.speed:this.dir==RIGHT?this.x+=this.speed:this.dir==LEFT&&(this.x-=this.speed),this.isHit()},this.isHit=function(){if(!this.isDestroyed){if(this.x<map.offsetX?(this.x=map.offsetX,this.hit=!0):this.x>map.offsetX+map.mapWidth-this.size&&(this.x=map.offsetX+map.mapWidth-this.size,this.hit=!0),this.y<map.offsetY?(this.y=map.offsetY,this.hit=!0):this.y>map.offsetY+map.mapHeight-this.size&&(this.y=map.offsetY+map.mapHeight-this.size,this.hit=!0),!this.hit&&null!=bulletArray&&0<bulletArray.length)for(var t=0;t<bulletArray.length;t++)if(bulletArray[t]!=this&&this.owner.isAI!=bulletArray[t].owner.isAI&&0==bulletArray[t].hit&&CheckIntersect(bulletArray[t],this,0)){this.hit=!0,bulletArray[t].hit=!0;break}if(!this.hit)if(bulletMapCollision(this,map)&&(this.hit=!0),this.type==BULLET_TYPE_PLAYER){if(null!=enemyArray||0<enemyArray.length)for(t=0;t<enemyArray.length;t++){var i=enemyArray[t];if(!i.isDestroyed&&CheckIntersect(this,i,0)){CheckIntersect(this,i,0),1<i.lives?i.lives--:i.distroy(),this.hit=!0;break}}}else this.type==BULLET_TYPE_ENEMY&&(0<player1.lives&&CheckIntersect(this,player1,0)?(player1.isProtected||player1.isDestroyed||player1.distroy(),this.hit=!0):0<player2.lives&&CheckIntersect(this,player2,0)&&(player2.isProtected||player2.isDestroyed||player2.distroy(),this.hit=!0));this.hit&&this.distroy()}},this.distroy=function(){this.isDestroyed=!0,crackArray.push(new CrackAnimation(CRACK_TYPE_BULLET,this.ctx,this)),this.owner.isAI||BULLET_DESTROY_AUDIO.play()}};
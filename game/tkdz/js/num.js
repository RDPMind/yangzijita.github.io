"use strict";var Num=function(s){this.ctx=s,this.size=14,this.draw=function(s,i,t){var e=i,h=t,n=[];if(0==s)n.push(0);else for(;0<s;)n.push(s%10),s=parseInt(s/10);for(var r=n.length-1;0<=r;r--)e=i+(n.length-r-1)*this.size,this.ctx.drawImage(RESOURCE_IMAGE,POS.num[0]+14*n[r],POS.num[1],this.size,this.size,e,h,this.size,this.size)}};
"use strict";Array.prototype.remove=function(t){var r=0,i=0,h=this.length;for(r=0;r<h;r++)this[r]!=t&&(this[i++]=this[r]);i<r&&(this.length=i)},Array.prototype.removeByIndex=function(t){var r=0,i=0,h=this.length;for(r=0;r<h;r++)this[r]!=this[t]&&(this[i++]=this[r]);i<r&&(this.length=i)},Array.prototype.contain=function(t){var r=0,i=this.length;for(r=0;r<i;r++)if(this[r]==t)return!0;return!1};
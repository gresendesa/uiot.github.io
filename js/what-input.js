!function(b,c){"object"==typeof exports&&"object"==typeof module?module.exports=c():"function"==typeof define&&define.amd?define("whatInput",[],c):"object"==typeof exports?exports.whatInput=c():b.whatInput=c()}(this,function(){return function(a){function c(d){if(b[d])return b[d].exports;var e=b[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,c),e.loaded=!0,e.exports}var b={};return c.m=a,c.c=b,c.p="",c(0)}([function(a,b){a.exports=function(){var a=document.documentElement,b="initial",c=null,d=["input","select","textarea"],e=[16,17,18,91,93],f={keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},g=[],h=!1,i={2:"touch",3:"touch",4:"mouse"},j=null,k=function(){f[r()]="mouse",l(),n()},l=function(){window.PointerEvent?(a.addEventListener("pointerdown",m),a.addEventListener("pointermove",o)):window.MSPointerEvent?(a.addEventListener("MSPointerDown",m),a.addEventListener("MSPointerMove",o)):(a.addEventListener("mousedown",m),a.addEventListener("mousemove",o),"ontouchstart"in window&&a.addEventListener("touchstart",p)),a.addEventListener(r(),o),a.addEventListener("keydown",m),a.addEventListener("keyup",m)},m=function(a){if(!h){var g=a.which,i=f[a.type];if("pointer"===i&&(i=q(a)),b!==i||c!==i){var j=!(!document.activeElement||d.indexOf(document.activeElement.nodeName.toLowerCase())!==-1);("touch"===i||"mouse"===i&&e.indexOf(g)===-1||"keyboard"===i&&j)&&(b=c=i,n())}}},n=function(){a.setAttribute("data-whatinput",b),a.setAttribute("data-whatintent",b),g.indexOf(b)===-1&&(g.push(b),a.className+=" whatinput-types-"+b)},o=function(b){if(!h){var d=f[b.type];"pointer"===d&&(d=q(b)),c!==d&&(c=d,a.setAttribute("data-whatintent",c))}},p=function(a){window.clearTimeout(j),m(a),h=!0,j=window.setTimeout(function(){h=!1},200)},q=function(a){return"number"==typeof a.pointerType?i[a.pointerType]:"pen"===a.pointerType?"touch":a.pointerType},r=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"};return"addEventListener"in window&&Array.prototype.indexOf&&k(),{ask:function(a){return"loose"===a?c:b},types:function(){return g}}}()}])});
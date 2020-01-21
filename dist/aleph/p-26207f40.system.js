System.register(["./p-d09772b4.system.js"],function(n){"use strict";var r;return{setters:[function(n){r=n.a}],execute:function(){var t=function(n,r,t){n.style.setProperty(r,t)};var e=function(n,r){n.style.removeProperty(r)};var i=function(n,r){var t;var e={passive:true};var i=function(){if(t){t()}};var a=function(t){if(n===t.target){i();r(t)}};if(n){n.addEventListener("webkitAnimationEnd",a,e);n.addEventListener("animationend",a,e);t=function(){n.removeEventListener("webkitAnimationEnd",a,e);n.removeEventListener("animationend",a,e)}}return i};var a=function(n){if(n===void 0){n=[]}return n.map(function(n){var r=n.offset;var t=[];for(var e in n){if(n.hasOwnProperty(e)&&e!=="offset"){t.push(e+": "+n[e]+";")}}return r*100+"% { "+t.join(" ")+" }"}).join(" ")};var o=[];var f=function(n){var r=o.indexOf(n);if(r<0){r=o.push(n)-1}return"ion-animation-"+r};var u=function(n){var r=n.getRootNode();return r.head||r};var c=function(n,r,t){var e=u(t);var i=e.querySelector("#"+n);if(i){return i}var a=(t.ownerDocument||document).createElement("style");a.id=n;a.textContent="@keyframes "+n+" { "+r+" } @keyframes "+n+"-alt { "+r+" }";e.appendChild(a);return a};var v=function(n,r){if(n===void 0){n=[]}if(r!==undefined){var t=Array.isArray(r)?r:[r];return n.concat(t)}return n};var s=n("c",function(){var n;var o;var u;var s;var l;var d;var m=[];var h=[];var p=[];var g=false;var y;var E={};var A=[];var b=[];var C={};var S=0;var T=false;var k=false;var w;var D;var L;var P;var F=true;var I=false;var R=true;var x;var O;var j=[];var N=[];var W=[];var M=[];var q=[];var K=[];var z=[];var B=[];var G=[];var H=[];var J=typeof AnimationEffect==="function"||typeof window.AnimationEffect==="function";var Q=typeof Element==="function"&&typeof Element.prototype.animate==="function"&&J;var U=100;var V=function(){return H};var X=function(){M.forEach(function(n){n.destroy()});Y();W.length=0;M.length=0;m.length=0;$();g=false;R=true;return O};var Y=function(){_();nn()};var Z=function(n,r){var t=r&&r.oneTimeCallback?N:j;t.push({c:n,o:r});return O};var $=function(){j.length=0;N.length=0;return O};var _=function(){if(Q){H.forEach(function(n){n.cancel()});H.length=0}else{var n=W.slice();r(function(){n.forEach(function(n){e(n,"animation-name");e(n,"animation-duration");e(n,"animation-timing-function");e(n,"animation-iteration-count");e(n,"animation-delay");e(n,"animation-play-state");e(n,"animation-fill-mode");e(n,"animation-direction")})})}};var nn=function(){q.forEach(function(n){if(n&&n.parentNode){n.parentNode.removeChild(n)}});q.length=0};var rn=function(n){K.push(n);return O};var tn=function(n){z.push(n);return O};var en=function(n){B.push(n);return O};var an=function(n){G.push(n);return O};var on=function(n){h=v(h,n);return O};var fn=function(n){p=v(p,n);return O};var un=function(n){if(n===void 0){n={}}E=n;return O};var cn=function(n){if(n===void 0){n=[]}for(var r=0,t=n;r<t.length;r++){var e=t[r];E[e]=""}return O};var vn=function(n){A=v(A,n);return O};var sn=function(n){b=v(b,n);return O};var ln=function(n){if(n===void 0){n={}}C=n;return O};var dn=function(n){if(n===void 0){n=[]}for(var r=0,t=n;r<t.length;r++){var e=t[r];C[e]=""}return O};var mn=function(){if(l!==undefined){return l}if(y){return y.getFill()}return"both"};var hn=function(){if(D!==undefined){return D}if(d!==undefined){return d}if(y){return y.getDirection()}return"normal"};var pn=function(){if(T){return"linear"}if(u!==undefined){return u}if(y){return y.getEasing()}return"linear"};var gn=function(){if(k){return 0}if(L!==undefined){return L}if(o!==undefined){return o}if(y){return y.getDuration()}return 0};var yn=function(){if(s!==undefined){return s}if(y){return y.getIterations()}return 1};var En=function(){if(P!==undefined){return P}if(n!==undefined){return n}if(y){return y.getDelay()}return 0};var An=function(){return m};var bn=function(n){d=n;Qn(true);return O};var Cn=function(n){l=n;Qn(true);return O};var Sn=function(r){n=r;Qn(true);return O};var Tn=function(n){u=n;Qn(true);return O};var kn=function(n){if(!Q&&n===0){n=1}o=n;Qn(true);return O};var wn=function(n){s=n;Qn(true);return O};var Dn=function(n){y=n;return O};var Ln=function(n){if(n!=null){if(n.nodeType===1){W.push(n)}else if(n.length>=0){for(var r=0;r<n.length;r++){W.push(n[r])}}else{console.error("Invalid addElement value")}}return O};var Pn=function(n){if(n!=null){if(Array.isArray(n)){for(var r=0,t=n;r<t.length;r++){var e=t[r];e.parent(O);M.push(e)}}else{n.parent(O);M.push(n)}}return O};var Fn=function(n){m=n;return O};var In=function(){K.forEach(function(n){n()})};var Rn=function(){z.forEach(function(n){n()})};var xn=function(){var n=h;var r=p;var e=E;W.forEach(function(i){var a=i.classList;n.forEach(function(n){return a.add(n)});r.forEach(function(n){return a.remove(n)});for(var o in e){if(e.hasOwnProperty(o)){t(i,o,e[o])}}})};var On=function(){In();Rn();xn()};var jn=function(){B.forEach(function(n){n()})};var Nn=function(){G.forEach(function(n){n()})};var Wn=function(){var n=A;var r=b;var e=C;W.forEach(function(i){var a=i.classList;n.forEach(function(n){return a.add(n)});r.forEach(function(n){return a.remove(n)});for(var o in e){if(e.hasOwnProperty(o)){t(i,o,e[o])}}})};var Mn=function(){rr();jn();Nn();Wn();var n=F?1:0;j.forEach(function(r){return r.c(n,O)});N.forEach(function(r){return r.c(n,O)});N.length=0;R=true;I=true};var qn=function(){if(S===0){return}S--;if(S===0){Mn();if(y){y.animationFinish()}}};var Kn=function(n){if(n===void 0){n=true}nn();W.forEach(function(e){if(m.length>0){var i=a(m);x=f(i);var o=c(x,i,e);q.push(o);t(e,"animation-duration",gn()+"ms");t(e,"animation-timing-function",pn());t(e,"animation-delay",En()+"ms");t(e,"animation-fill-mode",mn());t(e,"animation-direction",hn());var u=yn()===Infinity?"infinite":yn().toString();t(e,"animation-iteration-count",u);t(e,"animation-play-state","paused");if(n){t(e,"animation-name",o.id+"-alt")}r(function(){t(e,"animation-name",o.id||null)})}})};var zn=function(){W.forEach(function(n){var r=n.animate(m,{delay:En(),duration:gn(),easing:pn(),iterations:yn(),fill:mn(),direction:hn()});r.pause();H.push(r)});if(H.length>0){H[0].onfinish=function(){qn()}}};var Bn=function(n){if(n===void 0){n=true}On();if(m.length>0){if(Q){zn()}else{Kn(n)}}g=true};var Gn=function(n){n=Math.min(Math.max(n,0),.999);if(Q){H.forEach(function(r){r.currentTime=r.effect.getComputedTiming().delay+gn()*n;r.pause()})}else{var r=En()||0;var e="-"+(r+gn()*n)+"ms";W.forEach(function(n){if(m.length>0){t(n,"animation-delay",e);t(n,"animation-play-state","paused")}})}};var Hn=function(){H.forEach(function(n){n.effect.updateTiming({delay:En(),duration:gn(),easing:pn(),iterations:yn(),fill:mn(),direction:hn()})})};var Jn=function(n){if(n===void 0){n=true}W.forEach(function(e){r(function(){t(e,"animation-name",x||null);t(e,"animation-duration",gn()+"ms");t(e,"animation-timing-function",pn());t(e,"animation-delay",En()+"ms");t(e,"animation-fill-mode",mn()||null);t(e,"animation-direction",hn()||null);var i=yn()===Infinity?"infinite":yn().toString();t(e,"animation-iteration-count",i);if(n){t(e,"animation-name",x+"-alt")}r(function(){t(e,"animation-name",x||null)})})})};var Qn=function(n,r){if(n===void 0){n=false}if(r===void 0){r=true}if(n){M.forEach(function(r){r.update(n)})}if(Q){Hn()}else{Jn(r)}return O};var Un=function(n){if(n===void 0){n=false}M.forEach(function(r){r.progressStart(n)});Yn();T=n;if(!g){Bn()}else{Qn();Gn(0)}return O};var Vn=function(n){M.forEach(function(r){r.progressStep(n)});Gn(n);return O};var Xn=function(n,r,t){T=false;M.forEach(function(e){e.progressEnd(n,r,t)});if(t!==undefined){L=t}I=false;F=n===1;if(!F){D=hn()==="reverse"?"normal":"reverse";if(Q){Qn();Gn(1-r)}else{P=(1-r)*gn()*-1;Qn(false,false)}}else{if(!Q){P=r*gn()*-1;Qn(false,false)}}Z(function(){F=true;L=undefined;D=undefined;P=undefined},{oneTimeCallback:true});if(!y){or()}return O};var Yn=function(){if(g){if(Q){H.forEach(function(n){n.pause()})}else{W.forEach(function(n){t(n,"animation-play-state","paused")})}}};var Zn=function(){M.forEach(function(n){n.pause()});Yn();return O};var $n=function(){return or()};var _n=function(){or({sync:true});return O};var nr=function(){w=undefined;qn()};var rr=function(){if(w){clearTimeout(w)}};var tr=function(){rr();W.forEach(function(n){if(m.length>0){r(function(){t(n,"animation-play-state","running")})}});if(m.length===0||W.length===0){qn()}else{var n=En()||0;var e=gn()||0;var a=yn()||1;w=setTimeout(nr,n+e*a+U);i(W[0],function(){rr();r(function(){er();r(qn)})})}};var er=function(){W.forEach(function(n){e(n,"animation-duration");e(n,"animation-delay");e(n,"animation-play-state")})};var ir=function(){H.forEach(function(n){n.play()});if(m.length===0||W.length===0){qn()}};var ar=function(){if(Q){Gn(0)}else{Jn()}};var or=function(n){return new Promise(function(r){if(n&&n.sync){k=true;Z(function(){return k=false},{oneTimeCallback:true})}if(!g){Bn()}if(I){ar();I=false}if(R){S=M.length+1;R=false}Z(function(){return r()},{oneTimeCallback:true});M.forEach(function(n){n.play()});if(Q){ir()}else{tr()}})};var fr=function(){M.forEach(function(n){n.stop()});if(g){_();g=false}};var ur=function(n,r){var t;var e=m[0];if(e!==undefined&&e.offset===0){e[n]=r}else{m=[(t={offset:0},t[n]=r,t)].concat(m)}return O};var cr=function(n,r){var t;var e=m[m.length-1];if(e!==undefined&&e.offset===1){e[n]=r}else{m=m.concat([(t={offset:1},t[n]=r,t)])}return O};var vr=function(n,r,t){return ur(n,r).to(n,t)};return O={parentAnimation:y,elements:W,childAnimations:M,animationFinish:qn,from:ur,to:cr,fromTo:vr,parent:Dn,play:or,playAsync:$n,playSync:_n,pause:Zn,stop:fr,destroy:X,keyframes:Fn,addAnimation:Pn,addElement:Ln,update:Qn,fill:Cn,direction:bn,iterations:wn,duration:kn,easing:Tn,delay:Sn,getWebAnimations:V,getKeyframes:An,getFill:mn,getDirection:hn,getDelay:En,getIterations:yn,getEasing:pn,getDuration:gn,afterAddRead:en,afterAddWrite:an,afterClearStyles:dn,afterStyles:ln,afterRemoveClass:sn,afterAddClass:vn,beforeAddRead:rn,beforeAddWrite:tn,beforeClearStyles:cn,beforeStyles:un,beforeRemoveClass:fn,beforeAddClass:on,onFinish:Z,progressStart:Un,progressStep:Vn,progressEnd:Xn}})}}});
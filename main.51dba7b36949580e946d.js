!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],e.days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],e.nsu="http://www.w3.org/2000/svg"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);e.toPolyline=function(t,e){var n=document.createElementNS(i.nsu,"polyline");return n.classList.add("polyline"),n.classList.add(e),n.style.stroke=t,{polyline:n,setPoints:function(t,e,i,r,a,o,s){for(var u=o.start,c=o.end,l=s.height,d=(l-10)/(e-t),h=s.width/(c-u),v="",f=a.start;f<=a.end;f++)0!=f&&(v+=" "),v+=(r[f]-u)*h+","+(l-(i[f]-t)*d);n.setAttribute("points",v)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(3),r=n(13);n(14),window.onload=function(){var t=window,e=document,n=e.documentElement,a=e.getElementsByTagName("body")[0],o=t.innerWidth||n.clientWidth||a.clientWidth,s=Math.min(o,500),u=new XMLHttpRequest;u.overrideMimeType("application/json"),u.open("GET","./chart_data.json",!0),u.onreadystatechange=function(){if(4===u.readyState&&200==u.status){var t=JSON.parse(u.responseText).map(function(t){return new r.DataService(s,t)});i.drawContainer(t,s)}},u.send(null)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(4),r=n(10),a=n(11);e.drawContainer=function(t,e){var n=document.createElement("div");document.body.append(n),n.id="app",n.style.width=e+"px";var o=document.createElement("div");n.appendChild(o),o.id="header",o.innerHTML="<h1>Header</h1>",t.forEach(function(t){var e=document.createElement("div");e.classList.add("chart"),n.appendChild(e),i.toChart(e,t),a.toMiniMap(e,t),r.toMenu(e,t)}),function(t,e){var n,i=document.createElement("div");function r(){n=!0,document.body.classList.remove("night"),i.innerHTML="Switch to Night Mode"}t.appendChild(i),i.classList.add("mode"),r(),i.onclick=function(){n?(n=!1,document.body.classList.add("night"),i.innerHTML="Switch to Day Mode"):r()},e.onDestroy(function(){i.onclick=null,t.removeChild(i),i=null,t=null})}(n,t[0])}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(5),a=n(1),o=n(6),s=n(8);e.toChart=function(t,e){var n,u,c,l,d=[],h=[],v={},f=document.createElementNS(i.nsu,"svg"),m=document.createElementNS(i.nsu,"g"),p=document.createElementNS(i.nsu,"g");t.appendChild(f),f.appendChild(m),f.appendChild(p);var g=e.jsonData,b=g.columns,y=g.colors,M=e.viewport,L=M.width,E=M.height,C=e.indexRange,A=e.timeRange,x=e.viewport,S=e.min;f.setAttribute("width",L.toString()),f.setAttribute("height",(E+20).toString());var w=s.toTimes(p,e);n=e.toMaxVisibleValue(C),r.toLine(m,e.min,E,L,""),d=P(n);for(var R=1;R<b.length;R++){var T=b[R][0];j(T,n,b[R],b[0],y[T],C,A,x)}function D(t){l&&cancelAnimationFrame(l),w.redrawTimes(t);var i=e.toMaxVisibleValue(e.indexRange);0!==i&&(function(t){if(0!=t){d.forEach(function(t){t.g.classList.add("transparent"),h.push(t),setTimeout(function(){h=h.filter(function(e){return e!==t}),t.destroy()},400)});var e=P(u,"transparent");d=e,requestAnimationFrame(function(){e.forEach(function(t){return t.g.classList.remove("transparent")})})}}(c=(u=i)-n),function t(){l=requestAnimationFrame(function(){var i;i=(E-10)/(n-S),d.forEach(function(t){return t.setHeight(E-i*(t.value-S))}),h.forEach(function(t){return t.setHeight(E-i*(t.value-S))});for(var r=e.indexRange,a=e.timeRange,o=1;o<b.length;o++)v[b[o][0]].setPoints(S,n,b[o],b[0],r,a,x);if(n!==u){for(var s=Math.abs(c),o=0;o<s*e.animationSpeed&&(n+=c/s)!==u;o++);return t()}})}())}function j(t,e,n,i,r,o,s,u){var c=a.toPolyline(r,"main-chart");f.appendChild(c.polyline),c.setPoints(S,e,n,i,o,s,u),v[t]=c}function P(t,n){void 0===n&&(n="");var i,a=(E-5)/(t-S);t>50?i=10*Math.floor((t-20/a)/10):(i=t-t%5)*a>E-10&&(i-=5);for(var o=(i-S)/e.lines,s=[],u=S+o;u<=i;u+=o){var c=E-(u-S)*a;s.push(r.toLine(m,u,c,L,n))}return s}o.toPopUp(t,f,e,function(){return n}),e.onTimeRangeChange(function(t){D(t)}),e.onVisibilityChange(function(t){v[t].polyline.classList.toggle("transparent"),D("visible")})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);e.toLine=function(t,e,n,r,a){var o=document.createElementNS(i.nsu,"g");o.classList.add("line"),a&&o.classList.add(a),c(n);var s=document.createElementNS(i.nsu,"line"),u=document.createElementNS(i.nsu,"text");function c(t){o.setAttribute("transform","translate(0,"+t+")")}return s.setAttribute("x1","5"),s.setAttribute("x2",(r-5).toString()),s.setAttribute("y1","-1"),s.setAttribute("y2","-1"),u.setAttribute("x","5"),u.setAttribute("y","-10"),u.textContent=e.toString(),o.appendChild(s),o.appendChild(u),t.appendChild(o),{g:o,value:e,setHeight:c,destroy:function(){t.removeChild(o),t=null}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(7);e.toPopUp=function(t,e,n,a){var o,s=null,u=n.viewport,c=u.width,l=u.height,d=n.jsonData,h=d.columns,v=d.colors,f=document.createElementNS(i.nsu,"g");e.appendChild(f),f.classList.add("pop-up"),function(){h[0];var t=h.slice(1);f.classList.add("invisible");var e=document.createElementNS(i.nsu,"line");e.classList.add("line"),e.setAttribute("y1","0"),e.setAttribute("y2",l.toString()),f.appendChild(e);var a=t.map(function(t){var e=document.createElementNS(i.nsu,"circle"),n=document.createElementNS(i.nsu,"circle");return f.appendChild(e),e.style.fill=v[t[0]],e.setAttribute("r","5"),f.appendChild(n),n.classList.add("inner-circle"),n.setAttribute("r","3"),{circle:e,innerCircle:n}});o={line:e,dots:a,block:r.toPopUpBlock(n,f)}}();var m,p=document.createElementNS(i.nsu,"rect");p.classList.add("hover"),p.setAttribute("width",e.width.baseVal.value.toString()),p.setAttribute("height",e.height.baseVal.value.toString()),e.appendChild(p);var g=function(t,e){null!=m&&cancelAnimationFrame(m),m=requestAnimationFrame(function(){var i=n.indexRange,r=i.start,u=i.end,d=c/(u-r),v=r+Math.round(t/d);v!=s&&(s=v,function(t,e){var i=n.timeRange,r=i.start,s=i.end,u=h[0],d=h.slice(1),v=u[t],m=c/(s-r)*(v-r),p=m.toString();o.line.setAttribute("x1",p),o.line.setAttribute("x2",p);var g=(l-10)/(a()-n.min);o.dots.forEach(function(e,i){var r=d[i][t]-n.min,a=l-r*g,o=a.toString();e.circle.setAttribute("cx",p),e.circle.setAttribute("cy",o),e.innerCircle.setAttribute("cx",p),e.innerCircle.setAttribute("cy",o)}),o.block.setData(v,t,m,e),f.classList.remove("invisible")}(v,e))})};function b(){f.classList.add("invisible")}function y(t){t.target===p?g(t.offsetX,t.offsetY):b()}function M(){p.removeEventListener("touchmove",E),b()}function L(t){t.preventDefault(),t.stopPropagation();var e=t.targetTouches[0],n=e.clientX,i=e.clientY,r=e.target.getBoundingClientRect(),a=n-r.left,o=i-r.top;g(a,o)}function E(t){1==t.targetTouches.length&&L(t)}function C(t){1==t.targetTouches.length&&(L(t),p.addEventListener("touchmove",E,{passive:!1}))}t.addEventListener("mousemove",y),p.addEventListener("mouseout",b),p.addEventListener("touchstart",C,{passive:!1}),p.addEventListener("touchend",M),n.onVisibilityChange(function(t){o.dots.forEach(function(e,i){n.jsonData.columns[i+1][0]==t&&(e.circle.classList.toggle("invisible"),e.innerCircle.classList.toggle("invisible"))})}),n.onDestroy(function(){t.removeEventListener("mousemove",y),p.removeEventListener("mouseout",b),p.removeEventListener("touchstart",C),p.removeEventListener("touchend",M),f.removeChild(o.line),o.dots.forEach(function(t){var e=t.circle,n=t.innerCircle;f.removeChild(e),f.removeChild(n)}),o=null})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);e.toPopUpBlock=function(t,e){var n=document.createElementNS(i.nsu,"g"),r=document.createElementNS(i.nsu,"rect"),a=document.createElementNS(i.nsu,"rect"),o=document.createElementNS(i.nsu,"text"),s=t.jsonData,u=s.columns,c=s.colors,l=s.names,d=t.viewport,h=d.height,v=d.width,f=(u[0],u.slice(1));e.appendChild(n),n.appendChild(a),n.appendChild(r);var m=25+40*Math.ceil(f.length/2);function p(t,e){t.setAttribute("transform","translate("+(10+e%2*50)+","+(20+40*Math.floor(e/2))+")")}r.setAttribute("height",m.toString()),r.setAttribute("width","120"),r.setAttribute("rx","10"),r.setAttribute("ry","10"),r.classList.add("rect"),a.setAttribute("height",m.toString()),a.setAttribute("width","120"),a.setAttribute("x","1"),a.setAttribute("y","1"),a.setAttribute("rx","10"),a.setAttribute("ry","10"),a.classList.add("shadow"),n.appendChild(o),o.setAttribute("x","10"),o.setAttribute("y","18"),o.classList.add("date");var g=f.map(function(t,e){var r=document.createElementNS(i.nsu,"g");n.appendChild(r),p(r,e);var a=document.createElementNS(i.nsu,"text"),o=document.createElementNS(i.nsu,"text");return r.appendChild(a),r.appendChild(o),a.setAttribute("x","0"),a.setAttribute("y","20"),a.classList.add("value"),o.setAttribute("x","0"),o.setAttribute("y","38"),o.innerHTML=l[t[0]],a.style.fill=c[t[0]],o.style.fill=c[t[0]],{block:r,value:a,name:o,key:t[0]}});return t.onVisibilityChange(function(e){var i=[];g.forEach(function(n){n.key===e&&n.block.classList.toggle("invisible"),t.visibility[n.key]&&i.push(n)}),0===i.length?n.classList.add("invisible"):(n.classList.remove("invisible"),i.forEach(function(t,e){return p(t.block,e)}),m=25+40*Math.ceil(i.length/2),r.setAttribute("height",m.toString()),a.setAttribute("height",m.toString()))}),t.onDestroy(function(){e.removeChild(n),e.removeChild(r),e.removeChild(a),e.removeChild(o),g.forEach(function(t){return e.removeChild(t.block)})}),{setData:function(t,e,r,a){var s=new Date(t);o.innerHTML=i.days[s.getDay()]+", "+s.getDate()+" "+i.month[s.getMonth()],g.forEach(function(t,n){var i=f[n][e].toString();t.value.innerHTML=i.length>6?i.substr(0,i.length-6)+"."+i.substr(i.length-6,1)+"M":i.length>4?i.substr(0,i.length-3)+"K":i});var u=a>h/2?20:h-20-m,c=Math.min(Math.max(r-20,0),v-120);n.setAttribute("transform","translate("+c+","+u+")")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(9);e.toTimes=function(t,e){var n,r,a,o=80,s=80,u=20,c=0,l=e.viewport,d=l.height,h=l.width,v=e.jsonData.columns;t.setAttribute("transform","translate(0,"+d+")");var f=new Array(v[0].length),m=[];function p(t){return null!=e.jsonData.columns[0][t]}function g(t){return e.jsonData.columns[0][t]}function b(t){return y(g(t))}function y(t){return(t-e.timeRange.start)*a}function M(t){var e=f[t];f[t]=void 0,e.text.classList.add("transparent"),m.push(e),setTimeout(function(){m=m.filter(function(t){return t!=e}),e.destroy()},300)}function L(e,n){var r=i.toTime(t,g(e),b(e),n?"transparent":"");f[e]=r,n&&requestAnimationFrame(function(){r.text.classList.remove("transparent")})}function E(t){var i=e.timeRange;a=h/(i.end-i.start),t(),function(){var t=n-c;p(t)&&b(t)>-o&&(L(t,!0),n=t),b(n)<-o&&(M(n),n+=c);var e=r+c;p(e)&&b(e)<h+o&&(L(e,!0),r=e),b(r)>h+o&&(M(r),r-=c)}();for(var s=n;s<=r;s+=c)f[s].setLeft(b(s));m.forEach(function(t){return t.setLeft(y(t.value))})}return e.onDestroy(function(){f.forEach(function(t){return t&&t.destroy()})}),function(){var t=e.indexRange,i=e.timeRange;for(a=h/(i.end-i.start),n=t.start;b(n)<u;)n++;for(var o=-1;b(n+c)<s+u;)o++,c=Math.pow(2,o);for(r=n-=c;p(r+c)&&b(r)<=h;)r+=c;for(var l=n;l<=r;l+=c)L(l,!1)}(),{redrawTimes:function(t){switch(t){case"left":return E(function(){!function(){if(1!==c){var t=c/2,e=r-t;if(p(e)&&(g(r)-g(e))*a>s){for(var i=0;e>=n;){var o=b(e);f[e]?o<0?M(e):i=e:o>0&&(L(e,!0),i=e),e-=t}n=i,c=t}}}(),function(){var t=2*c,e=r-c;if(p(e)&&(g(r)-g(e))*a<s){for(var i=r,u=!1,l=0;b(i)>=-o;)u?f[i]&&M(i):(f[i]||L(i,!0),l=i),u=!u,i-=c;n=l,c=t}}()});case"right":return E(function(){!function(){if(1!==c){var t=c/2,e=n+t;if(p(e)&&(g(e)-g(n))*a>s){for(var i=0;e<=r;){var o=b(e);f[e]?o>h?M(e):i=e:o<h&&(L(e,!0),i=e),e+=t}r=i,c=t}}}(),function(){var t=2*c,e=n+c;if(p(e)&&(g(e)-g(n))*a<s){for(var i=n,u=!1,l=0;b(i)<=h+o;)u?f[i]&&M(i):(f[i]||L(i,!0),l=i),u=!u,i+=c;r=l,c=t}}()});case"move":return function(){(function t(){var e=n-c;if(p(e)&&b(e)>-o){var i=f[r];f[r]=void 0,r-=c,i.update(g(e),b(e)),f[e]=i,n=e,t()}})(),function t(){var e=r+c;if(p(e)&&b(e)<h+o){var i=f[n];f[n]=void 0,n+=c,i.update(g(e),b(e)),f[e]=i,r=e,t()}}();for(var t=n;t<=r;t+=c)f[t].setLeft(b(t))}();default:return}}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);e.toTime=function(t,e,n,r){var a=document.createElementNS(i.nsu,"text"),o=document.createElementNS(i.nsu,"tspan");function s(t,e){!function(t){var e=new Date(t);o.innerHTML=e.getDate()+" "+i.month[e.getMonth()]}(t),u(e)}function u(t){o.setAttribute("x",t.toString())}return a.classList.add("time"),r&&a.classList.add(r),a.appendChild(o),s(e,n),o.setAttribute("y","18"),o.setAttribute("text-anchor","middle"),t.appendChild(a),{text:a,value:e,update:s,setLeft:u,destroy:function(){t.removeChild(a)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0);function r(t,e,n,r,a){var o,s=document.createElement("div");return s.classList.add("checkbox"),e&&s.classList.add("as-check"),s.innerHTML+=r,requestAnimationFrame(function(){s.appendChild(function(t,e){var n=document.createElementNS(i.nsu,"svg"),r=document.createElementNS(i.nsu,"circle");r.classList.add("shadow"),r.setAttribute("cx","22"),r.setAttribute("cy","21"),r.setAttribute("r",e.toString()),n.appendChild(r);var a=document.createElementNS(i.nsu,"circle");n.appendChild(a),a.style.fill=t,a.setAttribute("cx","22"),a.setAttribute("cy","21"),a.setAttribute("r","13");var o=document.createElementNS(i.nsu,"polyline");n.appendChild(o),o.classList.add("check-mark"),o.setAttribute("points","16,21.5 20,25.5 27,17.5");var s=document.createElementNS(i.nsu,"circle");return n.appendChild(s),s.classList.add("cover"),s.setAttribute("cx","22"),s.setAttribute("cy","21"),s.setAttribute("r","12"),n}(n,s.clientWidth))}),s.onclick=function(){a.toggleVisibility(t),s.classList.add("as-click"),o&&clearTimeout(o),o=setTimeout(function(){s.classList.remove("as-click")},300)},a.onVisibilityChange(function(e){e===t&&s.classList.toggle("as-check")}),a.onDestroy(function(){s.onclick=null}),s}e.toMenu=function(t,e){var n=document.createElement("div");for(var i in t.appendChild(n),n.classList.add("menu"),e.visibility)n.appendChild(r(i,e.visibility[i],e.jsonData.colors[i],e.jsonData.names[i],e));e.onDestroy(function(){t.removeChild(n)})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),r=n(12),a=n(1);e.toMiniMap=function(t,e){var n=document.createElement("div");t.appendChild(n),n.classList.add("mini-map"),function(t,e){var n,r,o,s,u={},c=document.createElementNS(i.nsu,"svg");t.appendChild(c);var l=e.jsonData,d=l.columns,h=l.colors,v=e.miniMap,f=v.viewport,m=v.viewport,p=m.width,g=m.height,b=v.indexRange,y=v.timeRange,M=e.visibility,L=e.min;c.setAttribute("width",p.toString()),c.setAttribute("height",g.toString()),n=e.toMaxVisibleValue(e.miniMap.indexRange);for(var E=1;E<d.length;E++){var C=d[E][0];x(C,n,d[E],d[0],h[C])}function A(t){s&&cancelAnimationFrame(s);var i=e.toMaxVisibleValue(e.miniMap.indexRange);0!==i&&(o=(r=i)-n,function t(i){s=requestAnimationFrame(function(){for(var a=1;a<d.length;a++){var s=d[a][0];M[s]&&u[s].setPoints(L,n,d[a],d[0],b,y,f)}if(n===r)return i&&i();for(var c=Math.abs(o),a=0;a<c*e.animationSpeed&&(n+=o/c)!==r;a++);return t(i)})}(t))}function x(t,e,n,i,r){var o=a.toPolyline(r,"mini-map-chart");c.appendChild(o.polyline),o.setPoints(L,e,n,i,b,y,f),u[t]=o}e.onVisibilityChange(function(t,e){e?A(function(){return u[t].polyline.classList.remove("invisible")}):(u[t].polyline.classList.add("invisible"),A())}),e.onDestroy(function(){t.removeChild(c)})}(n,e),r.drawLens(n,e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.drawLens=function(t,e){var n=document.createElement("div");t.appendChild(n),n.className="lens";var i=document.createElement("div");t.appendChild(i),i.className="cover",i.style.left="0px";var r=document.createElement("div");t.appendChild(r),r.className="cover",r.style.right="0px";var a=document.createElement("span");n.appendChild(a),a.style.left="-5px";var o=document.createElement("span");n.appendChild(o),o.style.right="-5px";var s=e.miniMap,u=s.viewport.width,c=s.timeRange,l=c.start,d=c.end,h=e.timeRange,v=u/(d-l),f=function(t){var e=Math.floor((t.end-t.start)*v),a=Math.floor((t.start-l)*v);n.style.width=e+"px",n.style.left=a+"px",i.style.width=a+"px",r.style.left=a+e+"px"};function m(i,r){var s,c=(e.timeRange.end-e.timeRange.start)*v,d=(e.timeRange.start-l)*v;function h(t){s&&cancelAnimationFrame(s),s=requestAnimationFrame(function(){return function(t){switch(i){case a:if((s=Math.min(Math.max(d+t-r,0),d+c-20))===d)return;e.setTimeRange("left",{start:Math.floor(l+s/v),end:e.timeRange.end});break;case o:var n=Math.min(u-d,Math.max(20,c+t-r));if(n===c)return;e.setTimeRange("right",{start:e.timeRange.start,end:Math.floor(l+(d+n)/v)});break;default:var s;if((s=Math.min(Math.max(d+t-r,0),u-c))===d)return;e.setTimeRange("move",{start:Math.floor(l+s/v),end:Math.floor(l+(s+c)/v)})}}(t)})}function f(t){t.stopPropagation(),t.preventDefault(),h(t.clientX)}function m(t){1==t.targetTouches.length&&(t.stopPropagation(),t.preventDefault(),h(t.targetTouches[0].clientX))}function p(){document.removeEventListener("mousemove",f),document.removeEventListener("touchmove",m),n.removeEventListener("mouseup",p),t.addEventListener("mouseleave",p),n.removeEventListener("touchend",p)}document.addEventListener("mousemove",f),document.addEventListener("touchmove",m,{passive:!1}),n.addEventListener("mouseup",p),t.addEventListener("mouseleave",p),n.addEventListener("touchend",p)}f(h),e.onTimeRangeChange(function(t,e){return f(e)}),n.addEventListener("mousedown",function(t){t.stopPropagation(),t.preventDefault(),m(t.target,t.clientX)}),n.addEventListener("touchstart",function(t){1==t.targetTouches.length&&(t.stopPropagation(),t.preventDefault(),m(t.targetTouches[0].target,t.targetTouches[0].clientX))},{passive:!1})}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){this.jsonData=e,this.animationSpeed=.15,this.lines=5,this.visibility={},this.timeChangeWatchers=[],this.visibilityWatchers=[],this.destroyWatchers=[];var n=e.columns[0];for(var i in this.timeRange={start:n[Math.max(Math.round(.8*n.length),1)],end:n[n.length-1]},this.indexRange=this.toIndexRange(this.timeRange),this.viewport={width:t,height:Math.round(.8*t)},this.miniMap={viewport:{width:t-10,height:46},indexRange:{start:1,end:n.length-1},timeRange:{start:n[1],end:n[n.length-1]}},e.names)this.visibility[i]=!0;this.min=this.toMinValue()}return t.prototype.onTimeRangeChange=function(t){this.timeChangeWatchers.push(t)},t.prototype.setTimeRange=function(t,e){this.timeRange=e,this.indexRange=this.toIndexRange(e),this.timeChangeWatchers.forEach(function(n){return n(t,e)})},t.prototype.toIndexRange=function(t){for(var e=this.jsonData.columns[0],n=1;e[n]<t.start;)n++;n=Math.max(n-1,1);for(var i=e.length-1;e[i]>t.end;)i--;return{start:n,end:i=Math.min(i+1,e.length-1)}},t.prototype.toggleVisibility=function(t){var e=this;this.visibility[t]=!this.visibility[t],this.visibilityWatchers.forEach(function(n){return n(t,e.visibility[t])})},t.prototype.onVisibilityChange=function(t){this.visibilityWatchers.push(t)},t.prototype.onDestroy=function(t){this.destroyWatchers.push(t)},t.prototype.toMaxVisibleValue=function(t){for(var e=0,n=t.start,i=t.end,r=this.jsonData.columns,a=this.visibility,o=1;o<r.length;o++)if(a[r[o][0]])for(var s=n;s<=i;s++)e=Math.max(e,r[o][s]);return e},t.prototype.toMinValue=function(){for(var t=this.jsonData.columns,e=t[1][1],n=1;n<t.length;n++)for(var i=1;i<t[0].length;i++)e=Math.min(e,t[n][i]);return e>1e3?e-e%100:0},t}();e.DataService=i},function(t,e,n){}]);
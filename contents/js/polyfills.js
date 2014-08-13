window.matchMedia=window.matchMedia||function(e,t){"use strict";var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");o.id="mq-test-1";o.style.cssText="position:absolute;top:-100em";s.style.background="none";s.appendChild(o);return function(e){o.innerHTML='­<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>';r.insertBefore(s,i);n=o.offsetWidth===42;r.removeChild(s);return{matches:n,media:e}}}(document);(function(e){"use strict";function x(){w(true)}var t={};e.respond=t;t.update=function(){};t.mediaQueriesSupported=e.matchMedia&&e.matchMedia("only all").matches;if(t.mediaQueriesSupported){return}var n=e.document,r=n.documentElement,i=[],s=[],o=[],u={},a=30,f=n.getElementsByTagName("head")[0]||r,l=n.getElementsByTagName("base")[0],c=f.getElementsByTagName("link"),h=[],p=function(){for(var t=0;t<c.length;t++){var n=c[t],r=n.href,i=n.media,s=n.rel&&n.rel.toLowerCase()==="stylesheet";if(!!r&&s&&!u[r]){if(n.styleSheet&&n.styleSheet.rawCssText){v(n.styleSheet.rawCssText,r,i);u[r]=true}else{if(!/^([a-zA-Z:]*\/\/)/.test(r)&&!l||r.replace(RegExp.$1,"").split("/")[0]===e.location.host){h.push({href:r,media:i})}}}}d()},d=function(){if(h.length){var t=h.shift();E(t.href,function(n){v(n,t.href,t.media);u[t.href]=true;e.setTimeout(function(){d()},0)})}},v=function(e,t,n){var r=e.match(/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi),o=r&&r.length||0;t=t.substring(0,t.lastIndexOf("/"));var u=function(e){return e.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"$1"+t+"$2$3")},a=!o&&n;if(t.length){t+="/"}if(a){o=1}for(var f=0;f<o;f++){var l,c,h,p;if(a){l=n;s.push(u(e))}else{l=r[f].match(/@media *([^\{]+)\{([\S\s]+?)$/)&&RegExp.$1;s.push(RegExp.$2&&u(RegExp.$2))}h=l.split(",");p=h.length;for(var d=0;d<p;d++){c=h[d];i.push({media:c.split("(")[0].match(/(only\s+)?([a-zA-Z]+)\s?/)&&RegExp.$2||"all",rules:s.length-1,hasquery:c.indexOf("(")>-1,minw:c.match(/\(\s*min\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:c.match(/\(\s*max\-width\s*:\s*(\s*[0-9\.]+)(px|em)\s*\)/)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}}w()},m,g,y=function(){var e,t=n.createElement("div"),i=n.body,s=false;t.style.cssText="position:absolute;font-size:1em;width:1em";if(!i){i=s=n.createElement("body");i.style.background="none"}i.appendChild(t);r.insertBefore(i,r.firstChild);e=t.offsetWidth;if(s){r.removeChild(i)}else{i.removeChild(t)}e=b=parseFloat(e);return e},b,w=function(t){var u="clientWidth",l=r[u],h=n.compatMode==="CSS1Compat"&&l||n.body[u]||l,p={},d=c[c.length-1],v=(new Date).getTime();if(t&&m&&v-m<a){e.clearTimeout(g);g=e.setTimeout(w,a);return}else{m=v}for(var E in i){if(i.hasOwnProperty(E)){var S=i[E],x=S.minw,T=S.maxw,N=x===null,C=T===null,k="em";if(!!x){x=parseFloat(x)*(x.indexOf(k)>-1?b||y():1)}if(!!T){T=parseFloat(T)*(T.indexOf(k)>-1?b||y():1)}if(!S.hasquery||(!N||!C)&&(N||h>=x)&&(C||h<=T)){if(!p[S.media]){p[S.media]=[]}p[S.media].push(s[S.rules])}}}for(var L in o){if(o.hasOwnProperty(L)){if(o[L]&&o[L].parentNode===f){f.removeChild(o[L])}}}for(var A in p){if(p.hasOwnProperty(A)){var O=n.createElement("style"),M=p[A].join("\n");O.type="text/css";O.media=A;f.insertBefore(O,d.nextSibling);if(O.styleSheet){O.styleSheet.cssText=M}else{O.appendChild(n.createTextNode(M))}o.push(O)}}},E=function(e,t){var n=S();if(!n){return}n.open("GET",e,true);n.onreadystatechange=function(){if(n.readyState!==4||n.status!==200&&n.status!==304){return}t(n.responseText)};if(n.readyState===4){return}n.send(null)},S=function(){var t=false;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}();p();t.update=p;if(e.addEventListener){e.addEventListener("resize",x,false)}else if(e.attachEvent){e.attachEvent("onresize",x)}})(this);(function(e,t){"use strict";var n=function(){var e=document.createElement("div");e.style.cssText="font-size: 1rem;";return/rem/.test(e.style.fontSize)},r=function(){var e=document.getElementsByTagName("link"),t=[];for(var n=0;n<e.length;n++){if(e[n].rel.toLowerCase()==="stylesheet"&&e[n].getAttribute("data-norem")===null){t.push(e[n])}}return t},i=function(){var e=[];v=r();v.og=v.length;for(var t=0;t<v.length;t++){e[t]=v[t].href;f(e[t],s,t)}},s=function(e,t){var n=l(h(e.responseText)),r=/[\w\d\s\-\/\\\[\]:,.'"*()<>+~%#^$_=|@]+\{[\w\d\s\-\/\\%#:;,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:;,.'"*()]*\}/g,i=n.match(r),s=/\d*\.?\d+rem/g,u=n.match(s);if(i!==null&&i.length!==0){m=m.concat(i);g=g.concat(u)}if(t===v.og-1){o()}},o=function(){var e=/[\w\d\s\-\/\\%#:,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:,.'"*()]*[;}]/g;for(var t=0;t<m.length;t++){d=d+m[t].substr(0,m[t].indexOf("{")+1);var n=m[t].match(e);for(var r=0;r<n.length;r++){d=d+n[r];if(r===n.length-1&&d[d.length-1]!=="}"){d=d+"\n}"}}}u()},u=function(){var e;for(var t=0;t<g.length;t++){e=parseFloat(g[t].substr(0,g[t].length-3));y[t]=Math.round(e*w)+"px"}a()},a=function(){for(var e=0;e<y.length;e++){if(y[e]){d=d.replace(g[e],y[e])}}var t=document.createElement("style");t.setAttribute("type","text/css");t.id="remReplace";document.getElementsByTagName("head")[0].appendChild(t);if(t.styleSheet){t.styleSheet.cssText=d}else{t.appendChild(document.createTextNode(d))}},f=function(t,n,r){try{var i=p();i.open("GET",t,true);i.send();var s=function(){var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]);return t>4?t:e}();if(s>=7){i.onreadystatechange=function(){if(i.readyState===4){n(i,r)}}}else{i.onreadystatechange=new function(){if(i.readyState===4){n(i,r)}}}}catch(o){if(e.XDomainRequest){var u=new XDomainRequest;u.open("get",t);u.onload=function(){n(u,r)};u.onerror=function(){return false};u.send()}}},l=function(e){var t=e.search(/\/\*/),n=e.search(/\*\//);if(t>-1&&n>t){e=e.substring(0,t)+e.substring(n+2);return l(e)}else{return e}},c=function(){if(e.matchMedia||e.msMatchMedia){return true}return false},h=function(e){if(!c()){e=e.replace(/@media.*?\}/g,"")}return e},p=function(){if(e.XMLHttpRequest){return new XMLHttpRequest}else{try{return new ActiveXObject("MSXML2.XMLHTTP")}catch(t){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(n){}}}};if(!n()){var d="",v=[],m=[],g=[],y=[],b=document.getElementsByTagName("body")[0],w="";if(b.currentStyle){if(b.currentStyle.fontSize.indexOf("px")>=0){w=b.currentStyle.fontSize.replace("px","")}else if(b.currentStyle.fontSize.indexOf("em")>=0){w=b.currentStyle.fontSize.replace("em","")}else if(b.currentStyle.fontSize.indexOf("pt")>=0){w=b.currentStyle.fontSize.replace("pt","")}else{w=b.currentStyle.fontSize.replace("%","")/100*16}}else if(e.getComputedStyle){w=document.defaultView.getComputedStyle(b,null).getPropertyValue("font-size").replace("px","")}i()}})(window)

!function(t){"function"==typeof define&&define.amd?define(t):window.purl=t()}(function(){function t(t,e){for(var a=decodeURI(t),r=v[e?"strict":"loose"].exec(a),n={attr:{},param:{},seg:{}},s=14;s--;)n.attr[f[s]]=r[s]||"";return n.param.query=o(n.attr.query),n.param.fragment=o(n.attr.fragment),n.seg.path=n.attr.path.replace(/^\/+|\/+$/g,"").split("/"),n.seg.fragment=n.attr.fragment.replace(/^\/+|\/+$/g,"").split("/"),n.attr.base=n.attr.host?(n.attr.protocol?n.attr.protocol+"://"+n.attr.host:n.attr.host)+(n.attr.port?":"+n.attr.port:""):"",n}function e(t){var e=t.tagName;return"undefined"!=typeof e?h[e.toLowerCase()]:e}function a(t,e){if(0===t[e].length)return t[e]={};var a={};for(var r in t[e])a[r]=t[e][r];return t[e]=a,a}function r(t,e,n,o){var s=t.shift();if(s){var i=e[n]=e[n]||[];"]"==s?c(i)?""!==o&&i.push(o):"object"==typeof i?i[u(i).length]=o:i=e[n]=[e[n],o]:~s.indexOf("]")?(s=s.substr(0,s.length-1),!g.test(s)&&c(i)&&(i=a(e,n)),r(t,i,s,o)):(!g.test(s)&&c(i)&&(i=a(e,n)),r(t,i,s,o))}else c(e[n])?e[n].push(o):e[n]="object"==typeof e[n]?o:"undefined"==typeof e[n]?o:[e[n],o]}function n(t,e,a){if(~e.indexOf("]")){var n=e.split("[");r(n,t,"base",a)}else{if(!g.test(e)&&c(t.base)){var o={};for(var i in t.base)o[i]=t.base[i];t.base=o}""!==e&&s(t.base,e,a)}return t}function o(t){return l(String(t).split(/&|;/),function(t,e){try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(a){}var r=e.indexOf("="),o=i(e),s=e.substr(0,o||r),l=e.substr(o||r,e.length);return l=l.substr(l.indexOf("=")+1,l.length),""===s&&(s=e,l=""),n(t,s,l)},{base:{}}).base}function s(t,e,a){var r=t[e];"undefined"==typeof r?t[e]=a:c(r)?r.push(a):t[e]=[r,a]}function i(t){for(var e,a,r=t.length,n=0;r>n;++n)if(a=t[n],"]"==a&&(e=!1),"["==a&&(e=!0),"="==a&&!e)return n}function l(t,e){for(var a=0,r=t.length>>0,n=arguments[2];r>a;)a in t&&(n=e.call(void 0,n,t[a],a,t)),++a;return n}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function u(t){var e=[];for(var a in t)t.hasOwnProperty(a)&&e.push(a);return e}function d(e,a){return 1===arguments.length&&e===!0&&(a=!0,e=void 0),a=a||!1,e=e||window.location.toString(),{data:t(e,a),attr:function(t){return t=p[t]||t,"undefined"!=typeof t?this.data.attr[t]:this.data.attr},param:function(t){return"undefined"!=typeof t?this.data.param.query[t]:this.data.param.query},fparam:function(t){return"undefined"!=typeof t?this.data.param.fragment[t]:this.data.param.fragment},segment:function(t){return"undefined"==typeof t?this.data.seg.path:(t=0>t?this.data.seg.path.length+t:t-1,this.data.seg.path[t])},fsegment:function(t){return"undefined"==typeof t?this.data.seg.fragment:(t=0>t?this.data.seg.fragment.length+t:t-1,this.data.seg.fragment[t])}}}var h={a:"href",img:"src",form:"action",base:"href",script:"src",iframe:"src",link:"href",embed:"src",object:"data"},f=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","fragment"],p={anchor:"fragment"},v={strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/},g=/^[0-9]+$/;return d.jQuery=function(t){null!=t&&(t.fn.url=function(a){var r="";return this.length&&(r=t(this).attr(e(this[0]))||""),d(r,a)},t.url=d)},d.jQuery(window.jQuery),d}),function(t,e,a){function r(t){var e={},r=/^jQuery\d+$/;return a.each(t.attributes,function(t,a){a.specified&&!r.test(a.name)&&(e[a.name]=a.value)}),e}function n(t,r){var n=this,o=a(n);if(n.value==o.attr("placeholder")&&o.hasClass("placeholder"))if(o.data("placeholder-password")){if(o=o.hide().next().show().attr("id",o.removeAttr("id").data("placeholder-id")),t===!0)return o[0].value=r;o.focus()}else n.value="",o.removeClass("placeholder"),n==e.activeElement&&n.select()}function o(){var t,e=this,o=a(e),s=this.id;if(""==e.value){if("password"==e.type){if(!o.data("placeholder-textinput")){try{t=o.clone().attr({type:"text"})}catch(i){t=a("<input>").attr(a.extend(r(this),{type:"text"}))}t.removeAttr("name").data({"placeholder-password":o,"placeholder-id":s}).bind("focus.placeholder",n),o.data({"placeholder-textinput":t,"placeholder-id":s}).before(t)}o=o.removeAttr("id").hide().prev().attr("id",s).show()}o.addClass("placeholder"),o[0].value=o.attr("placeholder")}else o.removeClass("placeholder")}var s,i,l="placeholder"in e.createElement("input"),c="placeholder"in e.createElement("textarea"),u=a.fn,d=a.valHooks,h=a.propHooks;l&&c?(i=u.placeholder=function(){return this},i.input=i.textarea=!0):(i=u.placeholder=function(){var t=this;return t.filter((l?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":o}).data("placeholder-enabled",!0).trigger("blur.placeholder"),t},i.input=l,i.textarea=c,s={get:function(t){var e=a(t),r=e.data("placeholder-password");return r?r[0].value:e.data("placeholder-enabled")&&e.hasClass("placeholder")?"":t.value},set:function(t,r){var s=a(t),i=s.data("placeholder-password");return i?i[0].value=r:s.data("placeholder-enabled")?(""==r?(t.value=r,t!=e.activeElement&&o.call(t)):s.hasClass("placeholder")?n.call(t,!0,r)||(t.value=r):t.value=r,s):t.value=r}},l||(d.input=s,h.value=s),c||(d.textarea=s,h.value=s),a(function(){a(e).delegate("form","submit.placeholder",function(){var t=a(".placeholder",this).each(n);setTimeout(function(){t.each(o)},10)})}),a(t).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),function(){var t;$.fn.extend({styledControls:function(){return $(this).find("label.control").each(function(){return this.hasStyledControls?void 0:(this.hasStyledControls=!0,$(this).find("input").after("<span class='control_styled' />"))})}}),$.fn.extend({flashPlaceholder:function(t,e){return this.each(function(){var a;return a=$(this).attr("placeholder"),$(this).val(""),$(this).attr("placeholder",t),$(this).data("original-placeholder")||$(this).data("original-placeholder",a),e?setTimeout(function(t){return function(){return $(t).attr("placeholder",$(t).data("original-placeholder")),$(t).data("original-placeholder","")}}(this),e):void 0})}}),t="http://dobt-knowledge-base-search.herokuapp.com/search",$(document).on("click","[data-toggle-class]",function(){return $($(this).data("target")).toggleClass($(this).data("toggle-class"))}),$(function(){var e,a,r,n,o,s;for($("body").styledControls(),$("input, textarea").placeholder(),n=["hello","@","dobt",".","co"].join(""),$(".dynamic_email").attr("href","mailto:"+n).append(n),s=$(".article_body > :header"),a=0,r=s.length;r>a;a++)e=s[a],$(e).hover(function(){return $("#anchor-"+this.id).show()},function(){return $("#anchor-"+this.id).hide()}),$(e).prepend("<a class='anchor' id='anchor-"+e.id+"' href='#"+e.id+"'><i class='fa fa-link'></i></a>"),$("#anchor-"+e.id).hide();if($.getJSON("https://c73bgtwgrhvh.statuspage.io/api/v1/status.json",function(t){var e;if(null!=(null!=(e=t.status)?e.indicator:void 0))return $(".status.loading").hide(),"none"===t.status.indicator?$(".status.up").show():"minor"===t.status.indicator?$(".status.partial").show():"major"===t.status.indicator||"critical"===t.status.indicator?$(".status.major").show():void 0}),$("#choose-app").on("change",function(){return window.location.href="/"+$(this).val()}),$(".toggle_toc").on("click",function(){var t,e,a,r;return t=$(this).find("h4"),e=$(this).find(".fa"),a=$("#"+$(this).attr("name")),r=e.hasClass("fa-chevron-down"),$(".toc_section").find("h4").removeClass("active"),r||t.addClass("active"),e.removeClass("fa-chevron-down fa-chevron-up"),e.addClass(r?"fa-chevron-up":"fa-chevron-down"),a[r?"hide":"show"]()}),$(".search-results")[0]){if(o=$.url().param("q"),!(o.length>0))return $(".search-results-loading").remove(),$(".no-query").show();$(".centersearch-input").val(o),$.getJSON(t,{q:o},function(t){var e,a,r,n;if($(".search-results-loading").remove(),t.length<1)return $(".no-search-results").show();for($(".results-count").show().find("h3").text(t.length+" search result"+(1===t.length?"":"s")),n=[],e=0,a=t.length;a>e;e++)r=t[e],n.push($(".search-results").append("<div class='result'> <h4><a href='"+r.url+"'>"+r.title+"</a></h4> <p class='result-body'> "+r.excerpt+" </p> </div>"));return n})}return $.getJSON("https://c73bgtwgrhvh.statuspage.io/api/v1/status.json",function(t){var e,a;if(null!=(null!=(a=t.status)?a.indicator:void 0))return e=function(){switch(t.status.indicator){case"none":return"is_up";case"minor":return"is_partial";case"major":case"critical":return"is_down"}}(),$(".footer_status").addClass(e)})}),$(document).on("submit",".newsletter_form",function(t){var e;return t.preventDefault(),e=$(this).find("input[type=email]"),e.val()?($.ajax({url:"http://dobt.createsend.com/t/t/s/dijhkj/?callback=?",type:"get",dataType:"json",data:{"cm-dijhkj-dijhkj":e.val()},success:function(t){return 400===t.Status?e.flashPlaceholder("Whoops, an error occurred!",2e3):e.flashPlaceholder("Thanks!",2e3)}}),e.flashPlaceholder("Subscribing..."),e.blur()):void 0})}.call(this);
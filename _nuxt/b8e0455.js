(window.webpackJsonp=window.webpackJsonp||[]).push([[7,2,3],{297:function(t,e,n){"use strict";t.exports=function(t){const e=function(t){try{return JSON.parse(t)}catch(e){return t}}(t);return void 0===e?null:e}},298:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(34),n(303),n(304),n(144),n(41),n(54);var r=n(82),c=n(305),o=function(t){c("tasks",JSON.stringify(t))},f={tasks:[]},l=Object(r.defineStore)({id:"tasks",state:function(){return f},actions:{clear:function(){for(;this.tasks.length>0;)this.tasks.pop();o(this.tasks)},checkAll:function(t){this.tasks.forEach((function(e){e.checked=t})),o(this.tasks)},check:function(t,e){var n=this.findTaskById(t);n&&(n.checked=e),o(this.tasks)},findTaskById:function(t){return this.tasks.find((function(e){return e.id===t}))},remove:function(t){var e=this.tasks.findIndex((function(e){return e.id===t}));e>=0&&this.tasks.splice(e,1),o(this.tasks)},create:function(label){var t=this.tasks.length+1;this.tasks.push({id:t,icon:"circle",label:label,checked:!1}),o(this.tasks)},load:function(){var t;this.tasks=(t=c("tasks"))?JSON.parse(t):[]}},getters:{status:function(){var t=this.tasks.filter((function(t){return!0===t.checked})),e=this.tasks.length;return"".concat(t.length,"/").concat(e)}}})},299:function(t,e,n){"use strict";n.r(e);var r=n(0),c=function(t){return t?"check-circle":"circle"},o=Object(r.h)({props:{checked:{type:Boolean,required:!0}},setup:function(){return{getIcon:c}}}),f=n(23),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-icon",{staticClass:"cursor-pointer",class:{"text-primary":t.checked,"text-disabled hover:text-primary":!t.checked},attrs:{icon:t.getIcon(t.checked),size:"is-dashboard"}})}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);var r=n(23),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("b-icon",{staticClass:"pr-4 pt-1 cursor-pointer text-disabled hover:text-primary",attrs:{icon:"close",size:"is-dashboard"}})}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){var r=n(26),c=n(19),o="["+n(302)+"]",f=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),d=function(t){return function(e){var n=c(r(e));return 1&t&&(n=n.replace(f,"")),2&t&&(n=n.replace(l,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},302:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,e,n){"use strict";var r=n(2),c=n(64).find,o=n(143),f="find",l=!0;f in[]&&Array(1).find((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{find:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(f)},304:function(t,e,n){"use strict";var r=n(2),c=n(64).findIndex,o=n(143),f="findIndex",l=!0;f in[]&&Array(1).findIndex((function(){l=!1})),r({target:"Array",proto:!0,forced:l},{findIndex:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}}),o(f)},305:function(t,e,n){"use strict";(function(e){var r=n(306),c=n(297),o=n(307),f="localStorage"in e&&e.localStorage?e.localStorage:r;function l(t,e){return 1===arguments.length?d(t):h(t,e)}function d(t){const e=f.getItem(t);return c(e)}function h(t,e){try{return f.setItem(t,JSON.stringify(e)),!0}catch(t){return!1}}l.set=h,l.get=d,l.remove=function(t){return f.removeItem(t)},l.clear=function(){return f.clear()},l.backend=function(t){return t&&(f=t),f},l.on=o.on,l.off=o.off,t.exports=l}).call(this,n(40))},306:function(t,e,n){"use strict";var r={};t.exports={getItem:function(t){return t in r?r[t]:null},setItem:function(t,e){return r[t]=e,!0},removeItem:function(t){return!!(t in r)&&delete r[t]},clear:function(){return r={},!0}}},307:function(t,e,n){"use strict";(function(e){var r=n(297),c={};function o(t){t||(t=e.event);var n=c[t.key];n&&n.forEach((function(e){e(r(t.newValue),r(t.oldValue),t.url||t.uri)}))}t.exports={on:function(t,n){c[t]?c[t].push(n):c[t]=[n],e.addEventListener?e.addEventListener("storage",o,!1):e.attachEvent?e.attachEvent("onstorage",o):e.onstorage=o},off:function(t,e){var n=c[t];n.length>1?n.splice(n.indexOf(e),1):c[t]=[]}}}).call(this,n(40))},308:function(t,e,n){"use strict";var r=n(17),c=n(7),o=n(80),f=n(22),l=n(16),d=n(55),h=n(145),k=n(111),v=n(205),I=n(6),m=n(46),x=n(65).f,y=n(29).f,N=n(18).f,E=n(301).trim,_="Number",A=c.Number,S=A.prototype,C=d(m(S))==_,O=function(t){if(k(t))throw TypeError("Cannot convert a Symbol value to a number");var e,n,r,c,o,f,l,code,d=v(t,"number");if("string"==typeof d&&d.length>2)if(43===(e=(d=E(d)).charCodeAt(0))||45===e){if(88===(n=d.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+d}for(f=(o=d.slice(2)).length,l=0;l<f;l++)if((code=o.charCodeAt(l))<48||code>c)return NaN;return parseInt(o,r)}return+d};if(o(_,!A(" 0o1")||!A("0b1")||A("+0x1"))){for(var w,T=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof T&&(C?I((function(){S.valueOf.call(n)})):d(n)!=_)?h(new A(O(e)),n,T):O(e)},j=r?x(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;j.length>F;F++)l(A,w=j[F])&&!l(T,w)&&N(T,w,y(A,w));T.prototype=S,S.constructor=T,f(c,_,T)}},310:function(t,e,n){"use strict";n.r(e);n(308);var r=n(0),c=n(298),o=n(300),f=n(299),l=Object(r.h)({components:{Close:o.default,Check:f.default},props:{id:{type:Number,required:!0},label:{type:String,required:!0},checked:{type:Boolean,required:!0}},setup:function(){var t=Object(c.a)();return{checkTask:function(e,n){t.check(e,n)},removeTask:function(e){t.remove(e)}}}}),d=n(23),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"group pl-4 pt-2 pb-2 flex items-center"},[n("div",{staticClass:"w-12",attrs:{role:"check-task"},on:{click:function(e){return t.checkTask(t.id,!t.checked)}}},[n("check",{attrs:{checked:t.checked}})],1),t._v(" "),n("div",{staticClass:"flex flex-grow"},[n("p",{staticClass:"text-base",class:{"line-through":t.checked}},[t._v("\n      "+t._s(t.label)+"\n    ")])]),t._v(" "),n("div",{staticClass:"w-12 flex justify-end"},[n("div",{staticClass:"opacity-0 group-hover:opacity-100",attrs:{role:"remove-task"},on:{click:function(e){return t.removeTask(t.id)}}},[n("close")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);
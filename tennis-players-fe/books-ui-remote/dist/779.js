"use strict";(self.webpackChunkbooks_ui_remote=self.webpackChunkbooks_ui_remote||[]).push([[779],{779:(e,t,n)=>{n.r(t),n.d(t,{App:()=>m,default:()=>y});var r=n(629),o=n.n(r),a=n(833),u=n(231),c=n(974),s=n(805),i=n(248),l=n.n(i);function f(e,t,n,r,o,a,u){try{var c=e[a](u),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){f(a,r,o,u,c,"next",e)}function c(e){f(a,r,o,u,c,"throw",e)}u(void 0)}))}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],u=!0,c=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(c)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return v(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(e){var t=e.user,n=e.token,i=h((0,r.useState)([]),2),f=i[0],v=i[1],m=h((0,r.useState)(!1),2),y=(m[0],m[1]),d=function(){var e=p(l().mark((function e(){var r,o,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r="http://localhost:8092/gate/v1/books?",console.log("sending request: ".concat(r)),e.next=5,fetch(r+new URLSearchParams({username:t}),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(n)}});case 5:return o=e.sent,e.next=8,o.json();case 8:return a=e.sent,e.abrupt("return",{success:!0,data:a});case 12:return e.prev=12,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",{success:!1});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return(0,r.useEffect)((function(){p(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!1),e.next=3,d();case 3:(t=e.sent).success&&(v(t.data),y(!0),console.log(f));case 5:case"end":return e.stop()}}),e)})))()}),[t]),o().createElement("div",null,o().createElement(s.Z,{variant:"h3",component:"h3"},"Your books"),o().createElement(a.Z,null,f.map((function(e,t){return o().createElement(u.ZP,{key:t},o().createElement(c.Z,{primary:e.content}))}))))};const y=m}}]);
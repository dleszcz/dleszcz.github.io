(this["webpackJsonpfocus-poc"]=this["webpackJsonpfocus-poc"]||[]).push([[0],{250:function(e,t,n){e.exports=n(625)},475:function(e,t,n){},60:function(e,t,n){},625:function(e,t,n){"use strict";n.r(t);n(251);var i=n(1),a=n.n(i),c=n(168),o=n.n(c),r=(n(475),n(169)),u=n(18);n(60);var m=Object(u.withFocusable)()((function(e){var t=e.id,n=e.focused,c=e.setFocus,o=Object(i.useRef)();return Object(i.useEffect)((function(){n&&(function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(o.current)||o.current.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}))}),[n]),console.log("xxx render Item",t),a.a.createElement("div",{className:"Item",style:{border:"1px solid ".concat(n?"blue":"#eee")},onClick:function(){c()},ref:o},t)}));var l=Object(u.withFocusable)()((function(e){var t=e.items;return a.a.createElement("div",{className:"Grid"},t.map((function(e){return a.a.createElement(m,Object.assign({},e,{key:e.id}))})))}));var s=Object(u.withFocusable)()((function(e){var t=e.id,n=e.focused,i=e.setFocus;return a.a.createElement("div",{className:"MenuItem",style:{border:"1px solid ".concat(n?"blue":"#eee")},onClick:function(){i()}},t)})),d=[{id:"menu-item-1"},{id:"menu-item-2"},{id:"menu-item-3"},{id:"menu-item-4"},{id:"menu-item-5"},{id:"menu-item-6"}];var b=function(){return a.a.createElement("div",{className:"Menu"},d.map((function(e){return a.a.createElement(s,Object.assign({},e,{key:e.id}))})))},f=n(247),E=n.n(f),h=n(249),p=Object(u.withFocusable)()((function(e){var t=e.Component,n=Object(h.a)(e,["Component"]);return a.a.createElement(t,n)})),g=function(e){var t=e.handleClick,n=e.handleArrowPress,i=e.handleBecameFocused,c=e.handleBecameBlurred,o=e.handleWillUnmount;return a.a.createElement(p,Object.assign({},e,{onClick:t,onEnterPress:t,onArrowPress:n,onBecameFocused:i,onBecameBlurred:c,onWillUnmount:o,trackChildren:!0}))},v=function(e){var t=e.current,n=e.focused,c=e.text,o=void 0===c?"":c,r=Object(i.useMemo)((function(){return E()({button:!0,"is-current":t,"is-focused":n})}),[t,n]);return a.a.createElement("div",{className:r,style:{height:"40px",width:"100px",border:"1px solid ".concat(n?"blue":"#eee")}},a.a.createElement("span",{className:"button__text"},o))},j=Object(i.memo)((function(e){return a.a.createElement(g,Object.assign({Component:v},e))})),x=n(118),O=n(13);var k=Object(u.withFocusable)()((function(e){var t=Object(O.f)();return console.log("xxx home"),Object(i.useEffect)((function(){e.setFocus("button-1")}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"Home App-content-container"},a.a.createElement(j,{focusKey:"button-1"}),F.map((function(e){return a.a.createElement(l,Object.assign({},e,{key:e.id}))})),a.a.createElement(j,{focusKey:"button-2",text:"Go to About",handleClick:function(){console.log("xxx handle click"),t.push("/about")}}),a.a.createElement(j,{focusKey:"button-3",disabled:!0,text:"Home disabled btn"}),C.map((function(e){return a.a.createElement(l,Object.assign({},e,{key:e.id}))})),a.a.createElement(j,{focusKey:"button-4",text:"About button"}),N.map((function(e){return a.a.createElement(l,Object.assign({},e,{key:e.id}))}))))}));var w,y=Object(u.withFocusable)()((function(e){var t=Object(O.f)();return Object(i.useEffect)((function(){e.setFocus("button-about-back")}),[e]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"About App-content-container"},a.a.createElement(j,{focusKey:"button-about-back",text:"Back",handleClick:function(){t.push("/")}}),a.a.createElement(j,{focusKey:"button-about-1",text:"Home button 1"}),N.map((function(e){return a.a.createElement(l,Object.assign({},e,{key:e.id}))})),a.a.createElement(j,{focusKey:"button-about-2",text:"Go to Home",handleClick:function(){console.log("xxx handle click"),t.push("/")}}),a.a.createElement(j,{focusKey:"button-about-3",disabled:!0,text:"Home disabled btn"}),C.map((function(e){return a.a.createElement(l,Object.assign({},e,{key:e.id}))})),a.a.createElement(j,{focusKey:"button-about-4",text:"Home button"}),F.map((function(e){return a.a.createElement(l,Object.assign({},e,{key:e.id}))}))))})),F=[{id:"grid-1",items:[{id:"item-1-1"},{id:"item-1-2"},{id:"item-1-3"},{id:"item-1-4"},{id:"item-1-5"}]},{id:"grid-2",items:[{id:"item-2-1"},{id:"item-2-2"},{id:"item-2-3"},{id:"item-2-4"},{id:"item-2-5"}]},{id:"grid-3",items:[{id:"item-3-1"}]}],C=[{id:"grid-4",items:[{id:"item-4-1"},{id:"item-4-2"},{id:"item-4-3"},{id:"item-4-4"},{id:"item-4-5"}]},{id:"grid-5",items:[{id:"item-5-1"},{id:"item-5-2"},{id:"item-5-3"},{id:"item-5-4"},{id:"item-5-5"},{id:"item-5-6"},{id:"item-5-7"},{id:"item-5-8"},{id:"item-5-9"}]},{id:"grid-6",items:[{id:"item-6-1"},{id:"item-6-2"},{id:"item-6-3"},{id:"item-6-4"},{id:"item-6-5"}]}],N=[{id:"grid-7",items:[{id:"item-7-1"},{id:"item-7-2"},{id:"item-7-3"},{id:"item-7-4"},{id:"item-7-5"}]},{id:"grid-8",items:[{id:"item-8-1"},{id:"item-8-2"},{id:"item-8-3"},{id:"item-8-4"},{id:"item-8-5"}]}],B="/",A="/about",K=(w={},Object(r.a)(w,B,"button-2"),Object(r.a)(w,A,"button-about-back"),w);var H=Object(u.withFocusable)()((function(e){var t=e.setFocus;return Object(i.useEffect)((function(){Object(u.initNavigation)({});var e=K[window.location.pathname];t(e)}),[t]),a.a.createElement(x.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-menu-container"},a.a.createElement(b,null)),a.a.createElement(O.c,null,a.a.createElement(O.a,{path:B,exact:!0},a.a.createElement(k,null)),a.a.createElement(O.a,{path:A,exact:!0},a.a.createElement(y,null)))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[250,1,2]]]);
//# sourceMappingURL=main.67fb89a2.chunk.js.map
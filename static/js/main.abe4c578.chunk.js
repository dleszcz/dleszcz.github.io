(this["webpackJsonpfocus-poc"]=this["webpackJsonpfocus-poc"]||[]).push([[0],{478:function(e,t,i){},61:function(e,t,i){},628:function(e,t,i){"use strict";i.r(t);var c=i(3),n=(i(273),i(467),i(1)),o=i(172),a=i.n(o),r=(i(478),i(93)),u=i(21),d=(i(61),i(11));var s=Object(u.withFocusable)()((function(e){var t=e.id,i=e.focused,o=e.setFocus,a=Object(n.useRef)();return Object(n.useEffect)((function(){i&&(function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(a.current)||a.current.scrollIntoView({behavior:"smooth",block:"center",inline:"nearest"}))}),[i]),console.log("xxx render Item",t),Object(c.jsx)("div",{className:"Item",style:{border:"1px solid ".concat(i?"blue":"#eee")},onClick:function(){o()},ref:a,children:t})}));var b=Object(u.withFocusable)()((function(e){var t=e.items;return Object(c.jsx)("div",{className:"Grid",children:t.map((function(e){return Object(n.createElement)(s,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))}))})}));var m=Object(u.withFocusable)()((function(e){var t=e.id,i=e.focused,n=e.setFocus;return Object(c.jsx)("div",{className:"MenuItem",style:{border:"1px solid ".concat(i?"blue":"#eee")},onClick:function(){n()},children:t})})),j=[{id:"menu-item-1"},{id:"menu-item-2"},{id:"menu-item-3"},{id:"menu-item-4"},{id:"menu-item-5"},{id:"menu-item-6"}];var l=function(){return Object(c.jsx)("div",{className:"Menu",children:j.map((function(e){return Object(n.createElement)(m,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))}))})},O=i(268),f=i.n(O),h=i(270),x=Object(u.withFocusable)()((function(e){var t=e.Component,i=Object(h.a)(e,["Component"]);return Object(c.jsx)(t,Object(d.a)({},i))})),p=function(e){var t=e.handleClick,i=e.handleArrowPress,n=e.handleBecameFocused,o=e.handleBecameBlurred,a=e.handleWillUnmount;return Object(c.jsx)(x,Object(d.a)(Object(d.a)({},e),{},{onClick:t,onEnterPress:t,onArrowPress:i,onBecameFocused:n,onBecameBlurred:o,onWillUnmount:a,trackChildren:!0}))},v=function(e){var t=e.current,i=e.focused,o=e.text,a=void 0===o?"":o,r=Object(n.useMemo)((function(){return f()({button:!0,"is-current":t,"is-focused":i})}),[t,i]);return Object(c.jsx)("div",{className:r,style:{height:"40px",width:"100px",border:"1px solid ".concat(i?"blue":"#eee")},children:Object(c.jsx)("span",{className:"button__text",children:a})})},k=Object(n.memo)((function(e){return Object(c.jsx)(p,Object(d.a)({Component:v},e))})),g=i(122),w=i(15);var y=Object(u.withFocusable)()((function(e){var t=Object(w.f)();return console.log("xxx home"),Object(n.useEffect)((function(){e.setFocus("button-1")}),[e]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"Home App-content-container",children:[Object(c.jsx)(k,{focusKey:"button-1"}),C.map((function(e){return Object(n.createElement)(b,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))})),Object(c.jsx)(k,{focusKey:"button-2",text:"Go to About",handleClick:function(){console.log("xxx handle click"),t.push("/about")}}),Object(c.jsx)(k,{focusKey:"button-3",disabled:!0,text:"Home disabled btn"}),N.map((function(e){return Object(n.createElement)(b,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))})),Object(c.jsx)(k,{focusKey:"button-4",text:"About button"}),B.map((function(e){return Object(n.createElement)(b,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))}))]})})}));var E,F=Object(u.withFocusable)()((function(e){var t=Object(w.f)();return Object(n.useEffect)((function(){e.setFocus("button-about-back")}),[e]),Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"About App-content-container",children:[Object(c.jsx)(k,{focusKey:"button-about-back",text:"Back",handleClick:function(){t.push("/")}}),Object(c.jsx)(k,{focusKey:"button-about-1",text:"Home button 1"}),B.map((function(e){return Object(n.createElement)(b,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))})),Object(c.jsx)(k,{focusKey:"button-about-2",text:"Go to Home",handleClick:function(){console.log("xxx handle click"),t.push("/")}}),Object(c.jsx)(k,{focusKey:"button-about-3",disabled:!0,text:"Home disabled btn"}),N.map((function(e){return Object(n.createElement)(b,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))})),Object(c.jsx)(k,{focusKey:"button-about-4",text:"Home button"}),C.map((function(e){return Object(n.createElement)(b,Object(d.a)(Object(d.a)({},e),{},{key:e.id}))}))]})})})),C=[{id:"grid-1",items:[{id:"item-1-1"},{id:"item-1-2"},{id:"item-1-3"},{id:"item-1-4"},{id:"item-1-5"}]},{id:"grid-2",items:[{id:"item-2-1"},{id:"item-2-2"},{id:"item-2-3"},{id:"item-2-4"},{id:"item-2-5"}]},{id:"grid-3",items:[{id:"item-3-1"}]}],N=[{id:"grid-4",items:[{id:"item-4-1"},{id:"item-4-2"},{id:"item-4-3"},{id:"item-4-4"},{id:"item-4-5"}]},{id:"grid-5",items:[{id:"item-5-1"},{id:"item-5-2"},{id:"item-5-3"},{id:"item-5-4"},{id:"item-5-5"},{id:"item-5-6"},{id:"item-5-7"},{id:"item-5-8"},{id:"item-5-9"}]},{id:"grid-6",items:[{id:"item-6-1"},{id:"item-6-2"},{id:"item-6-3"},{id:"item-6-4"},{id:"item-6-5"}]}],B=[{id:"grid-7",items:[{id:"item-7-1"},{id:"item-7-2"},{id:"item-7-3"},{id:"item-7-4"},{id:"item-7-5"}]},{id:"grid-8",items:[{id:"item-8-1"},{id:"item-8-2"},{id:"item-8-3"},{id:"item-8-4"},{id:"item-8-5"}]}],A="/",K="/about",H=(E={},Object(r.a)(E,A,"button-2"),Object(r.a)(E,K,"button-about-back"),E);var W=Object(u.withFocusable)()((function(e){var t=e.setFocus;return Object(n.useEffect)((function(){Object(u.initNavigation)({});var e=H[window.location.pathname];t(e)}),[t]),Object(c.jsx)(g.a,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"App-menu-container",children:Object(c.jsx)(l,{})}),Object(c.jsxs)(w.c,{children:[Object(c.jsx)(w.a,{path:A,exact:!0,children:Object(c.jsx)(y,{})}),Object(c.jsx)(w.a,{path:K,exact:!0,children:Object(c.jsx)(F,{})})]})]})})}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(c.jsx)(W,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[628,1,2]]]);
//# sourceMappingURL=main.abe4c578.chunk.js.map
(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,n){},21:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(13),i=n.n(a),o=(n(19),n(0));var s=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsx)("a",{className:"navbar-brand",href:"https://urkelx.github.io/employee-directory/",children:"Employee Directory"})})};n(21);var l=function(){return Object(o.jsx)("footer",{className:"footer",children:Object(o.jsxs)("span",{children:["ED ",(new Date).getFullYear()]})})},u=n(3),j=n(14),b=n.n(j),h=function(){return b.a.get("https://randomuser.me/api/?results=20").then((function(e){var t=e.data;return{name:t.name,email:t.email,phone:t.phone,image:t.picture}}))};n(40);var m=function(e){var t=e.name,n=e.image,c=e.phone,r=e.email;return Object(o.jsxs)("div",{children:[t,n,c,r]})};var d=function(){var e=Object(c.useState)({}),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(u.a)(a,2),s=i[0],l=i[1],j=Object(c.useState)(0),b=Object(u.a)(j,2),d=b[0],p=b[1];return Object(c.useEffect)((function(){h().then((function(e){l(e),r(e[0])})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(o.jsx)("p",{className:"text-center h3",children:"Browse employees"}),Object(o.jsx)(m,{name:n.name,image:n.picture,phone:n.phone,email:n.email,handleBtnClick:function(e){"next"===e.target.getAttribute("data-value")?function(e){e>=s.length&&(e=0),r(s[e]),p(e)}(d+1):function(e){e<0&&(e=s.length-1),r(s[e]),p(e)}(d-1)}})]})};var p=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s,{}),Object(o.jsx)(d,{}),Object(o.jsx)(l,{})]})};n(41);i.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.1e28d569.chunk.js.map
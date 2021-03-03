(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(14),i=n.n(a),l=(n(20),n(4)),s=n(15),o=n.n(s),j=function(){return o.a.get("https://randomuser.me/api/?results=20").then((function(e){return e.data.results.map((function(e){return{id:e.id.value,firstName:e.name.first,lastName:e.name.last,email:e.email,picture:e.picture.thumbnail}}))}))},u=n(0);var b=function(e){var t=e.profileUrl;return Object(u.jsxs)("p",{className:"h4 pt-3",children:["GitHub: ",Object(u.jsx)("a",{target:"blank",href:t,children:t})]})},d=n(3);n(40);var f=function(e){return Object(u.jsx)("button",Object(d.a)({onClick:e.onClick,className:"card-btn ".concat(e["data-value"])},e))};var h=function(e){var t=e.image;return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{style:{maxWidth:"60px"},className:"rounded-full shadow-md border border-gray-300",src:t,alt:"employee"}),!t&&Object(u.jsx)("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"})]})};n(41);var x=function(e){var t=e.title;return Object(u.jsx)("h2",{children:t})};var m=function(e){var t=e.title;return Object(u.jsx)("div",{className:"blue text-center",children:Object(u.jsx)(x,{title:t})})};n(42);var O=function(e){var t=e.title;return Object(u.jsx)("div",{children:Object(u.jsx)(m,{title:t})})};n(43);var p=function(e){var t=e.title,n=e.image,r=e.profileUrl,c=e.email,a=e.handleBtnClick;return Object(u.jsxs)("div",{ClassName:"md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300",children:[Object(u.jsx)(O,{title:t}),Object(u.jsx)(h,{image:n}),Object(u.jsx)(b,{profileUrl:r}),!n&&Object(u.jsx)("i",{className:"fa fa-spinner fa-spin","aria-hidden":"true"}),Object(u.jsx)(f,{style:{opacity:n?1:0},onClick:a,"data-value":"back"}),Object(u.jsx)(f,{style:{opacity:n?1:0},onClick:a,"data-value":"next"}),Object(u.jsx)("p",{className:"font-bold text-md",children:t}),Object(u.jsx)("p",{children:"Content Here"}),Object(u.jsx)("p",{className:"text-blue-500",children:c}),Object(u.jsx)("p",{children:"More Content Here"})]})};n(44);var v=function(e){var t=e.title,n=e.image,r=e.profileUrl,c=e.handleBtnClick;return Object(u.jsx)("div",{className:"jumbotron card-container",children:Object(u.jsx)(p,{title:t,image:n,profileUrl:r,handleBtnClick:c})})};var g=function(e){return Object(u.jsx)("div",Object(d.a)({className:"row".concat(e.fluid?"-fluid":"")},e))};var y=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),i=Object(l.a)(a,2),s=i[0],o=i[1],b=Object(r.useState)(0),d=Object(l.a)(b,2),f=d[0],h=d[1];return Object(r.useEffect)((function(){console.log(j()),j().then((function(e){o(e),c(e[0])})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(u.jsx)("p",{className:"text-center h3",children:"Use search and filters to browse employees"}),Object(u.jsx)(g,{children:Object(u.jsx)(v,{title:n.firstName,image:n.picture,profileUrl:n.profileUrl,handleBtnClick:function(e){"next"===e.target.getAttribute("data-value")?function(e){e>=s.length&&(e=0),c(s[e]),h(e)}(f+1):function(e){e<0&&(e=s.length-1),c(s[e]),h(e)}(f-1)}})})]})};n(45);var N=function(){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/",children:"Employee Directory"})})};n(46);var k=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("a",{className:"",href:"https://urkelx.github.io/Portfolio/",children:Object(u.jsxs)("span",{children:["UrkelX ",(new Date).getFullYear()]})})})};n(47);var C=function(e){return Object(u.jsx)("main",Object(d.a)({className:"wrapper"},e))};var w=function(){return Object(u.jsxs)("div",{children:[' "Hello"',Object(u.jsx)(N,{}),Object(u.jsx)(C,{children:Object(u.jsx)(y,{})}),Object(u.jsx)(k,{})]})};n(48);i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.32f4c0fd.chunk.js.map
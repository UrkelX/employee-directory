(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(13),s=n.n(c),i=(n(20),n(3)),l=n(14),o=n.n(l),j=function(){return o.a.get("https://randomuser.me/api/?results=20").then((function(e){return e.data.results.map((function(e){return{id:e.id.value,firstName:e.name.first,lastName:e.name.last,email:e.email,picture:e.picture.thumbnail,username:e.login.username}}))}))},u=(n(39),n(0));var m=function(e){var t=e.title,n=e.titleTwo,r=e.image,a=e.phone,c=e.email,s=e.username;return e.handleBtnClick,Object(u.jsxs)("div",{ClassName:"md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300",children:[Object(u.jsx)("img",{style:{maxWidth:"60px"},className:"rounded-full shadow-md border border-gray-300",src:r,alt:"employee"}),Object(u.jsxs)("p",{className:"font-bold text-md",children:[t," ",n]}),Object(u.jsx)("p",{children:a}),Object(u.jsx)("p",{children:c}),Object(u.jsx)("p",{children:s})]})};var b=function(){var e=Object(r.useState)({}),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(i.a)(c,2),l=(s[0],s[1]),o=Object(r.useState)(0),b=Object(i.a)(o,2);return b[0],b[1],Object(r.useEffect)((function(){console.log(j()),j().then((function(e){l(e),a(e[0])})).catch((function(e){return console.log(e)}))}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-center",children:"Employee Directory"}),Object(u.jsx)("p",{className:"text-center h3",children:"Use search and filters to browse employees"}),Object(u.jsx)(m,{image:n.picture,title:n.firstName,titleTwo:n.lastName,phone:n.phone,email:n.email,username:n.login.username})]})};n(41);var d=function(){return Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsx)("a",{className:"navbar-brand",href:"/",children:"Employee Directory"})})};n(42);var h=function(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("a",{className:"",href:"https://urkelx.github.io/Portfolio/",children:Object(u.jsxs)("span",{children:["UrkelX ",(new Date).getFullYear()]})})})},f=n(15);n(43);var p=function(e){return Object(u.jsx)("main",Object(f.a)({className:"wrapper"},e))};var x=function(){return Object(u.jsxs)("div",{children:[' "Hello"',Object(u.jsx)(d,{}),Object(u.jsx)(p,{children:Object(u.jsx)(b,{})}),Object(u.jsx)(h,{})]})};n(44);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.cd49790c.chunk.js.map
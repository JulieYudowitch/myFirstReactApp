(this.webpackJsonpexperimental_app=this.webpackJsonpexperimental_app||[]).push([[0],{25:function(e,c,t){},26:function(e,c,t){},27:function(e,c,t){},29:function(e,c,t){},30:function(e,c,t){},31:function(e,c,t){},50:function(e,c,t){},51:function(e,c,t){},52:function(e,c,t){},53:function(e,c,t){"use strict";t.r(c);var s=t(1),n=t.n(s),i=t(19),j=t.n(i),r=(t(25),t(26),t(27),t(6)),l=t(0);var a=function(){return Object(l.jsxs)("div",{className:"headerContainer",children:[Object(l.jsxs)("div",{className:"Header",children:[Object(l.jsx)("h1",{children:"Julie Yudowitch First React App"}),Object(l.jsx)("p",{children:"A work in progress for learning by doing"})]}),Object(l.jsxs)("ul",{className:"navBar",children:[Object(l.jsx)(r.b,{to:"/SearchImages",className:"item",children:"Search Images"}),Object(l.jsx)(r.b,{to:"/Blog",className:"item",children:"Blog & Comments"}),Object(l.jsx)(r.b,{to:"/Shop",className:"item",children:"Shop"})]})]})};t(29);var o=function(){return Object(l.jsx)("div",{className:"footer",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("h4",{children:"Footer Stuff"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"info"}),Object(l.jsx)("li",{children:"info"}),Object(l.jsx)("li",{children:"info"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("h4",{children:"Footer Stuff"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"info"}),Object(l.jsx)("li",{children:"info"}),Object(l.jsx)("li",{children:"info"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("h4",{children:"Footer Stuff"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"info"}),Object(l.jsx)("li",{children:"info"}),Object(l.jsx)("li",{children:"info"})]})]})]}),Object(l.jsx)("div",{classsName:"copyright",children:Object(l.jsxs)("p",{children:["\xa9",(new Date).getFullYear()," Julie Yudowitch | All rights reserved"]})})]})})},h=(t(30),t(5)),d=(t(31),t(20)),b=t.n(d);var x=function(){var e=Object(s.useState)(""),c=Object(h.a)(e,2),t=c[0],n=c[1],i=Object(s.useState)(""),j=Object(h.a)(i,2),r=j[0],a=(j[1],Object(s.useState)([])),o=Object(h.a)(a,2),d=o[0],x=o[1],O='https://api.unsplash.com/search/photos?page=1&query="'.concat(t,'"&client_id=').concat(r);return Object(s.useEffect)((function(){b.a.get(O).then((function(e){console.log(e),x(e.data.results)}))}),[O]),Object(l.jsx)("div",{children:Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"searchBar",children:[Object(l.jsx)("input",{onChange:function(e){n(e.target.value)},type:"text",name:"photo"}),Object(l.jsx)("img",{src:"https://img.icons8.com/doodle/48/000000/search--v1.png"})]}),Object(l.jsx)("div",{className:"photos",children:d.map((function(e){return Object(l.jsx)("img",{src:e.urls.small})}))})]})})};var O=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"promise",children:"Coming Soon!"}),Object(l.jsx)("p",{children:"Image Search"}),Object(l.jsx)("div",{className:"photos",children:Object(l.jsx)(x,{})})]})};t(50);var u=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"promise",children:"Coming Soon!"}),Object(l.jsx)("p",{className:"posterB",children:"A blog you can leave comments on"})]})};t(51);var m=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{className:"promise",children:"Coming Soon!"}),Object(l.jsxs)("div",{className:"poster",children:[Object(l.jsx)("p",{children:"A store where you will actually be able to buy things!"}),Object(l.jsx)("p",{children:"Completely True Story..."})]})]})},p=t(2);t(52);var f=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:"plans",children:"Plans for this App"}),Object(l.jsx)("p",{children:"Finish styling and mobile version"}),Object(l.jsx)("p",{children:"Add functionality to existing pages"}),Object(l.jsx)("p",{children:"User Login"}),Object(l.jsx)("p",{children:"User settings including dark mode"}),Object(l.jsx)("p",{children:"More pages"}),Object(l.jsx)("p",{children:"& more!"})]})};var v=function(){return Object(l.jsx)(r.a,{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsx)(a,{})}),Object(l.jsx)("div",{className:"page-container",children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{path:"/",exact:!0,element:Object(l.jsx)(f,{})}),Object(l.jsx)(p.a,{path:"/SearchImages",exact:!0,element:Object(l.jsx)(O,{})}),Object(l.jsx)(p.a,{path:"/Blog",exact:!0,element:Object(l.jsx)(u,{})}),Object(l.jsx)(p.a,{path:"/Shop",exact:!0,element:Object(l.jsx)(m,{})})]})}),Object(l.jsx)(o,{})]})})};j.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.88712cb0.chunk.js.map
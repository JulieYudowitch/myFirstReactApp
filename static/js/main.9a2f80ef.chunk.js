(this.webpackJsonpexperimental_app=this.webpackJsonpexperimental_app||[]).push([[0],{11:function(e,c,t){},33:function(e,c,t){},34:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},42:function(e,c,t){},43:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){},63:function(e,c,t){},68:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t.n(s),n=t(26),a=t.n(n),j=(t(33),t(34),t(11),t(7)),r=t(4),l=t(28),o=t(0);var h=function(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],i=c[1];return Object(o.jsxs)("nav",{className:"mobilenav",children:[Object(o.jsx)(l.a,{className:"menu",size:"40px",color:"white",onClick:function(){return i(!t)}}),t&&Object(o.jsxs)("ul",{className:"navlinks",children:[Object(o.jsx)(j.b,{to:"/SearchImages",className:"item",onClick:function(){return i(!t)},children:"Search Images"}),Object(o.jsx)(j.b,{to:"/Blog",className:"item",onClick:function(){return i(!t)},children:"Blog & Comments"}),Object(o.jsx)(j.b,{to:"/Shop",className:"item",onClick:function(){return i(!t)},children:"Shop"})]})]})};var b=function(){var e=Object(s.useState)(!1),c=Object(r.a)(e,2),t=c[0],i=c[1];return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("ul",{className:"navlinks",children:[Object(o.jsx)(j.b,{to:"/SearchImages",className:"item",onClick:function(){return i(!t)},children:"Search Images"}),Object(o.jsx)(j.b,{to:"/Blog",className:"item",onClick:function(){return i(!t)},children:"Blog & Comments"}),Object(o.jsx)(j.b,{to:"/Shop",className:"item",onClick:function(){return i(!t)},children:"Shop"})]})})};var d=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)(h,{}),Object(o.jsx)(b,{})]}),Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(j.b,{to:"/myFirstReactApp",children:Object(o.jsx)("h1",{children:"Julie Yudowitch First React App"})}),Object(o.jsx)("p",{children:"A work in progress for learning by doing"})]})]})},m=(t(36),t(37),t(8)),x=t(9);var u=function(){return Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/julie-yudowitch-041645208/",className:"linkedIn",children:Object(o.jsx)(m.a,{icon:x.e,size:"2x"})}),Object(o.jsx)("a",{href:"https://github.com/JulieYudowitch",className:"github",children:Object(o.jsx)(m.a,{icon:x.c,size:"2x"})}),Object(o.jsx)("a",{href:"https://julieyudowitch.medium.com/",className:"medium",children:Object(o.jsx)(m.a,{icon:x.f,size:"2x"})}),Object(o.jsx)("a",{href:"https://julieyudowitch.blogspot.com/",className:"blogger",children:Object(o.jsx)(m.a,{icon:x.a,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.tiktok.com/@julieyudowitch?",className:"tiktok",children:Object(o.jsx)(m.a,{icon:x.h,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.pinterest.com/julieyudowitch/_saved/",className:"pinterest",children:Object(o.jsx)(m.a,{icon:x.g,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.facebook.com/Julieyudowitch",className:"facebook",children:Object(o.jsx)(m.a,{icon:x.b,size:"2x"})}),Object(o.jsx)("a",{href:"https://twitter.com/YudowitchJulie",className:"twitter",children:Object(o.jsx)(m.a,{icon:x.i,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/julieyudowitch/",className:"instagram",children:Object(o.jsx)(m.a,{icon:x.d,size:"2x"})})]})};var O=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"social-links",children:Object(o.jsx)(u,{})}),Object(o.jsxs)("div",{className:"footer-info",children:[Object(o.jsx)("div",{className:"email",children:Object(o.jsx)("a",{className:"email",href:"mailto:julieyudo@gmail.com",target:"_blank",children:"JulieYudo@gmail.com"})}),Object(o.jsx)("div",{})]}),Object(o.jsxs)("p",{className:"copyright",children:["\xa9",(new Date).getFullYear()," Julie Yudowitch | All rights reserved"]})]})})})},p=(t(42),t(43),t(27)),f=t.n(p);var g=function(){var e=Object(s.useState)(""),c=Object(r.a)(e,2),t=c[0],i=c[1],n=Object(s.useState)(""),a=Object(r.a)(n,2),j=a[0],l=(a[1],Object(s.useState)([])),h=Object(r.a)(l,2),b=h[0],d=h[1],m='https://api.unsplash.com/search/photos?page=1&query="'.concat(t,'"&client_id=').concat(j);return Object(s.useEffect)((function(){f.a.get(m).then((function(e){console.log(e),d(e.data.results)}))}),[m]),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"searchBar",children:[Object(o.jsx)("input",{onChange:function(e){i(e.target.value)},type:"text",name:"photo"}),Object(o.jsx)("img",{className:"image",src:"https://img.icons8.com/doodle/48/000000/search--v1.png"})]}),Object(o.jsx)("div",{className:"photos",children:b.map((function(e){return Object(o.jsx)("img",{src:e.urls.small})}))})]})})};var v=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"promise",children:"Coming Soon!"}),Object(o.jsx)("p",{children:"Image Search"}),Object(o.jsx)("a",{className:"placeholderImage",href:"https://ibb.co/dDBB1JM",children:Object(o.jsx)("img",{src:"https://i.ibb.co/5LTTtx4/james-harrison-vp-Oe-Xr5wm-R4-unsplash.jpg",alt:"james-harrison-vp-Oe-Xr5wm-R4-unsplash",border:"0"})}),Object(o.jsx)("div",{className:"photo-results",children:Object(o.jsx)(g,{})})]})};t(61);var N=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"promise",children:"Coming Soon!"}),Object(o.jsx)("p",{className:"posterB",children:"A blog you can leave comments on"})]})};t(62);var w=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"promise",children:"Coming Soon!"}),Object(o.jsxs)("div",{className:"poster",children:[Object(o.jsx)("p",{children:"A store where you will actually be able to buy things!"}),Object(o.jsx)("p",{children:"Completely True Story..."})]})]})},k=t(2);t(63);var y=function(){return Object(o.jsxs)("div",{className:"plans",children:[Object(o.jsx)("h2",{className:"plans-title",children:"Plans for this App"}),Object(o.jsx)("p",{children:"Finish styling and mobile version (I am actively working on this part -12/3/2021)"}),Object(o.jsx)("p",{children:"Add functionality to existing pages"}),Object(o.jsx)("p",{children:"User Login"}),Object(o.jsx)("p",{children:"User settings including dark mode"}),Object(o.jsx)("p",{children:"More pages"}),Object(o.jsx)("p",{children:"& more!"})]})};var S=function(){return Object(o.jsx)(j.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(d,{})}),Object(o.jsx)("div",{children:Object(o.jsxs)(k.c,{children:[Object(o.jsx)(k.a,{path:"/myFirstReactApp",exact:!0,element:Object(o.jsx)(y,{})}),Object(o.jsx)(k.a,{path:"/",exact:!0,element:Object(o.jsx)(y,{})}),Object(o.jsx)(k.a,{path:"/SearchImages",exact:!0,element:Object(o.jsx)(v,{})}),Object(o.jsx)(k.a,{path:"/Blog",exact:!0,element:Object(o.jsx)(N,{})}),Object(o.jsx)(k.a,{path:"/Shop",exact:!0,element:Object(o.jsx)(w,{})})]})}),Object(o.jsx)(O,{})]})})};t(64).config(),a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.9a2f80ef.chunk.js.map
(this.webpackJsonpexperimental_app=this.webpackJsonpexperimental_app||[]).push([[0],{16:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},65:function(e,t,c){},66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(27),i=c.n(a),j=(c(34),c(35),c(16),c(7)),r=c(4),l=c(29),o=c(0);var h=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(o.jsxs)("nav",{className:"mobilenav",children:[Object(o.jsx)(l.a,{className:"menu",size:"40px",color:"white",onClick:function(){return n(!c)}}),c&&Object(o.jsxs)("ul",{className:"navlinks",children:[Object(o.jsx)(j.b,{to:"/SearchImages",className:"item",onClick:function(){return n(!c)},children:"Search Images"}),Object(o.jsx)(j.b,{to:"/Blog",className:"item",onClick:function(){return n(!c)},children:"Blog & Comments"}),Object(o.jsx)(j.b,{to:"/Shop",className:"item",onClick:function(){return n(!c)},children:"Shop"})]})]})};var b=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("ul",{className:"navlinks",children:[Object(o.jsx)(j.b,{to:"/SearchImages",className:"item",onClick:function(){return n(!c)},children:"Search Images"}),Object(o.jsx)(j.b,{to:"/Blog",className:"item",onClick:function(){return n(!c)},children:"Blog & Comments"}),Object(o.jsx)(j.b,{to:"/Shop",className:"item",onClick:function(){return n(!c)},children:"Shop"})]})})};var d=function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)(h,{}),Object(o.jsx)(b,{})]}),Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(j.b,{to:"/myFirstReactApp",children:Object(o.jsx)("h1",{children:"Julie Yudowitch First React App"})}),Object(o.jsx)("p",{className:"description",children:"A work in progress"})]})]})},m=(c(37),c(38),c(8)),x=c(9);var u=function(){return Object(o.jsxs)("div",{className:"social",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/julie-yudowitch-041645208/",className:"linkedIn",target:"blank",children:Object(o.jsx)(m.a,{icon:x.e,size:"2x"})}),Object(o.jsx)("a",{href:"https://github.com/JulieYudowitch",className:"github",target:"blank",children:Object(o.jsx)(m.a,{icon:x.c,size:"2x"})}),Object(o.jsx)("a",{href:"https://julieyudowitch.medium.com/",className:"medium",target:"blank",children:Object(o.jsx)(m.a,{icon:x.f,size:"2x"})}),Object(o.jsx)("a",{href:"https://julieyudowitch.blogspot.com/",className:"blogger",target:"blank",children:Object(o.jsx)(m.a,{icon:x.a,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.tiktok.com/@julieyudowitch?",className:"tiktok",target:"blank",children:Object(o.jsx)(m.a,{icon:x.h,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.pinterest.com/julieyudowitch/_saved/",className:"pinterest",target:"blank",children:Object(o.jsx)(m.a,{icon:x.g,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.facebook.com/Julieyudowitch",className:"facebook",target:"blank",children:Object(o.jsx)(m.a,{icon:x.b,size:"2x"})}),Object(o.jsx)("a",{href:"https://twitter.com/YudowitchJulie",className:"twitter",target:"blank",children:Object(o.jsx)(m.a,{icon:x.i,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/julieyudowitch/",className:"instagram",target:"blank",children:Object(o.jsx)(m.a,{icon:x.d,size:"2x"})})]})};var O=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("div",{className:"social-links",children:Object(o.jsx)(u,{})}),Object(o.jsxs)("div",{className:"footer-info",children:[Object(o.jsx)("div",{className:"email",children:Object(o.jsx)("a",{className:"email",href:"mailto:julieyudo@gmail.com",target:"_blank",children:"JulieYudo@gmail.com"})}),Object(o.jsx)("div",{})]}),Object(o.jsxs)("p",{className:"copyright",children:["\xa9",(new Date).getFullYear()," Julie Yudowitch | All rights reserved"]})]})})})},p=(c(43),c(44),c(28)),g=c.n(p);c(26).config();var f=function(){var e=Object(s.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)("process.env.API_KEY"),i=Object(r.a)(a,2),j=i[0],l=(i[1],Object(s.useState)([])),h=Object(r.a)(l,2),b=h[0],d=h[1],m='https://api.unsplash.com/search/photos?page=1&query="'.concat(c,'"&client_id=').concat(j);return Object(s.useEffect)((function(){g.a.get(m).then((function(e){console.log(e),d(e.data.results)}))}),[m]),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{className:"searchBar",children:[Object(o.jsx)("input",{onChange:function(e){n(e.target.value)},type:"text",name:"photo"}),Object(o.jsx)("img",{className:"image",src:"https://img.icons8.com/doodle/48/000000/search--v1.png"})]}),Object(o.jsx)("div",{className:"photos",children:b.map((function(e){return Object(o.jsx)("img",{src:e.urls.small})}))})]})})};var v=function(){return Object(o.jsxs)("div",{className:"landing-page",children:[Object(o.jsx)("h2",{className:"promise",children:"Coming Soon!"}),Object(o.jsx)("p",{children:"Image Search"}),Object(o.jsx)("div",{className:"photo-results",children:Object(o.jsx)(f,{})})]})};c(65);var N=function(){return Object(o.jsxs)("div",{className:"landing-page",children:[Object(o.jsx)("h1",{className:"promise",children:"Coming Soon!"}),Object(o.jsx)("p",{className:"posterB",children:"A blog you can leave comments on"})]})};c(66);var w=function(){return Object(o.jsxs)("div",{className:"landing-page",children:[Object(o.jsx)("h1",{className:"promise",children:"Coming Soon!"}),Object(o.jsxs)("div",{className:"poster",children:[Object(o.jsx)("p",{children:"A store where you will actually be able to buy things!"}),Object(o.jsx)("p",{children:"Completely True Story..."})]})]})},k=c(2);c(67);var y=function(){return Object(o.jsx)("div",{className:"landing-page",children:Object(o.jsxs)("div",{className:"plans",children:[Object(o.jsx)("h2",{className:"plans-title",children:"Plans for this App"}),Object(o.jsx)("p",{children:"Finish styling (I am actively working on this part -12/3/2021)"}),Object(o.jsx)("p",{children:"Add functionality to existing pages"}),Object(o.jsx)("p",{children:"User Login"}),Object(o.jsx)("p",{children:"User settings including dark mode"}),Object(o.jsx)("p",{children:"More pages"}),Object(o.jsx)("p",{children:"& more!"})]})})};c(68);var S=function(){return Object(o.jsx)("div",{className:"sharing-nail"})};var C=function(){return Object(o.jsx)(j.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(d,{})}),Object(o.jsx)("div",{children:Object(o.jsxs)(k.c,{children:[Object(o.jsx)(k.a,{path:"/myFirstReactApp",exact:!0,element:Object(o.jsx)(y,{})}),Object(o.jsx)(k.a,{path:"/",exact:!0,element:Object(o.jsx)(y,{})}),Object(o.jsx)(k.a,{path:"/SearchImages",exact:!0,element:Object(o.jsx)(v,{})}),Object(o.jsx)(k.a,{path:"/Blog",exact:!0,element:Object(o.jsx)(N,{})}),Object(o.jsx)(k.a,{path:"/Shop",exact:!0,element:Object(o.jsx)(w,{})}),Object(o.jsx)(k.a,{path:"/Images",exact:!0,element:Object(o.jsx)(S,{})})]})}),Object(o.jsx)(O,{})]})})};c(26).config(),i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.cace3dd1.chunk.js.map
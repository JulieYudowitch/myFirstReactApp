(this.webpackJsonpexperimental_app=this.webpackJsonpexperimental_app||[]).push([[0],{61:function(e,c,t){},62:function(e,c,t){},63:function(e,c){},64:function(e,c,t){},65:function(e,c,t){},71:function(e,c,t){},92:function(e,c,t){},93:function(e,c,t){},95:function(e,c,t){},96:function(e,c,t){},97:function(e,c,t){},98:function(e,c,t){},99:function(e,c,t){"use strict";t.r(c);var s=t(7),i=t.n(s),n=t(53),a=t.n(n),r=(t(61),t(62),t(63),t(64),t(65),t(23)),l=t(24),o=t(4);var j=function(){return Object(o.jsxs)("div",{className:"social-links",children:[Object(o.jsx)("a",{href:"https://www.linkedin.com/in/julie-yudowitch-041645208/",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.e,size:"2x"})}),Object(o.jsx)("a",{href:"https://github.com/JulieYudowitch",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.c,size:"2x"})}),Object(o.jsx)("a",{href:"https://julieyudowitch.medium.com/",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.f,size:"2x"})}),Object(o.jsx)("a",{href:"https://julieyudowitch.blogspot.com/",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.a,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.tiktok.com/@julieyudowitch?",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.h,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.pinterest.com/julieyudowitch/_saved/",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.g,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.facebook.com/Julieyudowitch",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.b,size:"2x"})}),Object(o.jsx)("a",{href:"https://twitter.com/YudowitchJulie",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.i,size:"2x"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/julieyudowitch/",className:"social-link",target:"blank",rel:"noopener noreferrer",children:Object(o.jsx)(r.a,{color:"#1e1052",icon:l.d,size:"2x"})})]})};var d=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("footer",{children:Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsx)("div",{className:"social-links",children:Object(o.jsx)(j,{})}),Object(o.jsx)("div",{className:"footer-info",children:Object(o.jsx)("div",{className:"email",children:Object(o.jsx)("a",{className:"email",href:"mailto:julieyudo@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"JulieYudo@gmail.com"})})}),Object(o.jsxs)("p",{className:"copyright",children:["\xa9",(new Date).getFullYear()," Julie Yudowitch | All rights reserved"]})]})})})},b=t(13),h=t(42),u=t(55),m=(t(71),t(54)),O=t.n(m);t(52).config();var p=function(){var e=Object(s.useState)(""),c=Object(b.a)(e,2),t=c[0],i=c[1],n=Object(s.useState)([]),a=Object(b.a)(n,2),r=a[0],l=a[1],j=Object(s.useState)("1"),d=Object(b.a)(j,2),m=d[0],p=d[1],x=Object(s.useState)(""),g=Object(b.a)(x,2),f=g[0],N=g[1],v="https://api.unsplash.com/search/photos?per_page=20&page=".concat(m,'?&query="').concat(t,'"&client_id=').concat("DLv6inw2AWo1Koi7Nng1lOYD7FDkiDhhWRimQ1oic9A");return Object(s.useEffect)((function(){O.a.get(v).then((function(e){console.log(e),l(e.data.results)}))}),[v]),Object(o.jsxs)("div",{className:"image-search-page",children:[Object(o.jsxs)("div",{className:"image-search-bar",children:[Object(o.jsx)("input",{className:"image-search-input",inputmode:"search",onChange:function(e){N(e.target.value)},onKeyPress:function(e){13===e.charCode&&i(f)},placeholder:"Enter a category",name:"photo",type:"search"}),Object(o.jsx)("button",{type:"submit",onClick:function(e){i(f)},className:"image-search-icon",children:Object(o.jsx)(u.a,{})})]}),Object(o.jsx)("div",{children:Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"image-search-results-container",children:r.map((function(e){return Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"image-search-result-item",src:e.urls.thumb})})}))})})}),!t&&Object(o.jsx)("div",{className:"image-search-prod",children:Object(o.jsx)("p",{className:"image-search-greeting",children:"Sometimes I like to just take a minute and look at pictures of cats.  What will you search for?"})}),t&&Object(o.jsxs)("div",{className:"arrows",children:[Object(o.jsx)("button",{className:"arrow",children:Object(o.jsx)(h.a,{className:"arrow",onClick:function(e){p(m-1),e.preventDefault()}})}),Object(o.jsx)("button",{className:"arrow",children:Object(o.jsx)(h.b,{className:"arrow",onClick:function(e){p(m+1),e.preventDefault()}})})]})]})};t(92);var x=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"blog-page",children:[Object(o.jsxs)("div",{className:"blog-container",children:[Object(o.jsxs)("ul",{className:"blog-entry-menu",children:[Object(o.jsx)("li",{className:"picnic",children:Object(o.jsx)("h5",{children:"Lorem ipsum"})}),Object(o.jsx)("li",{className:"picnic",children:Object(o.jsx)("h5",{children:"ipsum veniam"})}),Object(o.jsx)("li",{className:"picnic",children:Object(o.jsx)("h5",{children:"dolar consectetur"})}),Object(o.jsx)("li",{className:"picnic",children:Object(o.jsx)("h5",{children:"sit amet tempor"})})]}),Object(o.jsxs)("div",{className:"blog-entry",children:[Object(o.jsx)("h3",{children:"Picnic Blog"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]}),Object(o.jsxs)("div",{className:"comments-container",children:[Object(o.jsx)("h3",{className:"comments-prod",children:"Would you try this picnic idea? Comment below!"}),Object(o.jsx)("input",{className:"comments",placeholder:"comment here"})]})]})})};t(93);var g=function(){return Object(o.jsx)("div",{className:"shop-page",children:Object(o.jsx)("div",{className:"shop-poster",children:Object(o.jsx)("div",{className:"shop-menu",children:Object(o.jsx)("p",{})})})})},f=t(43),N=t(1),v=t.n(N),k=t(5),w=(t(95),t(56)),S=t(36),E=Object(w.a)({apiKey:"FIREBASE_API_KEY",authDomain:"FIREBASE_AUTH_DOMAIN",projectId:"FIREBASE_PROJECT_ID",storageBucket:"FIREBASE_STORAGE_BUCKET",messagingSenderId:"FIREBASE_MESSAGING_SENDER_ID",appId:"FIREBASE_APP_ID",measurementId:"FIREBASE_MEASUREMENT_ID"}),y=Object(S.d)(E),I=t(40);var A=function(){var e=Object(s.useState)(""),c=Object(b.a)(e,2),t=(c[0],c[1]),i=Object(s.useState)([]),n=Object(b.a)(i,2),a=(n[0],n[1]),r=Object(s.useState)(""),l=Object(b.a)(r,2),j=(l[0],l[1],Object(I.b)(y,"users"));return Object(s.useEffect)((function(){var e=function(){var e=Object(k.a)(v.a.mark((function e(){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.c)(j);case 2:c=e.sent,a(c.docs.map((function(e){return Object(f.a)(Object(f.a)({},e.data()),{},{id:e.id})})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(o.jsxs)("div",{className:"sign-in-page",children:[Object(o.jsx)("input",{className:"sign-input",placeholder:"email",onChange:function(e){t(e)}}),Object(o.jsx)("input",{className:"sign-input",placeholder:"password"}),Object(o.jsx)("button",{className:"sign-in-submit",children:"Sign In"})]})},_=t(21),R=t(12);t(96),t(97);var B=function(){return Object(o.jsxs)("div",{className:"login-container",children:[Object(o.jsx)("div",{className:"sign-in",children:Object(o.jsx)(_.b,{to:"/SignIn",children:Object(o.jsx)("button",{className:"sign-in-button",children:"Sign in"})})}),Object(o.jsxs)("div",{className:"sign-up",children:[Object(o.jsx)("p",{className:"sign-up-prod",children:"don't have an account?"}),Object(o.jsx)("button",{className:"sign-up-button",children:"Create Account"}),Object(o.jsx)("p",{className:"sign-up-prod",children:"Sign up!"})]})]})};var D=function(){return Object(o.jsxs)("div",{className:"landing-page",children:[Object(o.jsx)("div",{className:"login",children:Object(o.jsx)(B,{})}),Object(o.jsxs)("div",{className:"title",children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{className:"logo-on-title",src:"https://i.ibb.co/jk5S5Tm/logotransp.png",alt:"Logo for My First React App"})}),Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)("p",{children:"A work in progress"}),Object(o.jsx)("h1",{children:"By Julie Yudowitch"})]})]})]})};t(98);var F=function(){return Object(o.jsxs)("div",{className:"bar",children:[Object(o.jsx)("div",{className:"leftside",children:Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)(_.b,{to:"/myFirstReactApp",children:Object(o.jsx)("img",{className:"logo",src:"https://i.ibb.co/jk5S5Tm/logotransp.png",alt:"Logo for My First React App"})})})}),Object(o.jsx)("div",{className:"rightside",children:Object(o.jsxs)("div",{className:"bar-links",children:[Object(o.jsx)(_.b,{to:"/myFirstReactApp",className:"link",children:"Home"}),Object(o.jsx)(_.b,{to:"/PhotoSearch",className:"link",children:"Search Images"}),Object(o.jsx)(_.b,{to:"/Blog",className:"link",children:"Picnic Blog"}),Object(o.jsx)(_.b,{to:"/Shop",className:"link",children:"Shop"}),Object(o.jsx)(_.b,{to:"/SignIn",className:"link",children:"Log In"})]})})]})};var C=function(){return Object(o.jsx)(_.a,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)(F,{})}),Object(o.jsx)("div",{children:Object(o.jsxs)(R.c,{children:[Object(o.jsx)(R.a,{path:"/myFirstReactApp",exact:!0,element:Object(o.jsx)(D,{})}),Object(o.jsx)(R.a,{path:"/PhotoSearch",exact:!0,element:Object(o.jsx)(p,{})}),Object(o.jsx)(R.a,{path:"/Blog",exact:!0,element:Object(o.jsx)(x,{})}),Object(o.jsx)(R.a,{path:"/Shop",exact:!0,element:Object(o.jsx)(g,{})}),Object(o.jsx)(R.a,{path:"/SignIn",exact:!0,element:Object(o.jsx)(A,{})})]})}),Object(o.jsx)(d,{})]})})};t(52).config(),a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.20397cc5.chunk.js.map
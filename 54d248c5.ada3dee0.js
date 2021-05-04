(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),i=r.n(a);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,m=s["".concat(o,".").concat(d)]||s[d]||b[d]||n;return r?i.a.createElement(m,c(c({ref:t},p),{},{components:r})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<n;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var a=r(2),i=r(6),n=(r(0),r(106)),o={slug:"flutter-appwrite-starter-template",title:"Flutter\u2764\ufe0fAppwrite Starter Template",author:"Damodar Lohani",author_title:"Web and Mobile Developer",author_url:"https://github.com/lohanidamodar",author_image_url:"https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4",tags:["appwrite","flutter"]},c={permalink:"/blog/flutter-appwrite-starter-template",editUrl:"https://github.com/lohanidamodar/dlohani.com.np/edit/master/website/blog/blog/2021-05-04-flutter-appwrite-starter.md",source:"@site/blog/2021-05-04-flutter-appwrite-starter.md",description:"Introduction",date:"2021-05-04T00:00:00.000Z",tags:[{label:"appwrite",permalink:"/blog/tags/appwrite"},{label:"flutter",permalink:"/blog/tags/flutter"}],title:"Flutter\u2764\ufe0fAppwrite Starter Template",readingTime:1.34,truncated:!1,nextItem:{title:"Appwrite \u2764\ufe0f Flutter - Tutorial Series",permalink:"/blog/appwrite-and-flutter"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Episode 1",id:"episode-1",children:[]},{value:"Episode 2",id:"episode-2",children:[]},{value:"Episode 3",id:"episode-3",children:[]},{value:"Episode 4",id:"episode-4",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Want to Connect with me",id:"want-to-connect-with-me",children:[]}],p={rightToc:l};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"introduction"},"Introduction"),Object(n.b)("p",null,"I'm planning to build a lot more applications with Flutter and Appwrite. If you are too, then this is for you. In this series we will build a Starter Template for our FlAppwrite Applications where we will implement some repeatitive tasks like Localization, State management, Authorization etc, that we do for each of our project. So that we can use this as a base template next time we want to create a new FlAppwrite Application."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note")," If you just want the code\n//github repository embed"),Object(n.b)("h2",{id:"episode-1"},"Episode 1"),Object(n.b)("p",null,"In this part, we will setup basic flutter project, create login, signup pages and simple routes."),Object(n.b)("div",{class:"player"},Object(n.b)("iframe",{src:"https://www.youtube.com/embed/ECtoXQ50Ar0",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h2",{id:"episode-2"},"Episode 2"),Object(n.b)("p",null,"In this part, we will setup Appwrite console project, setup Appwrite SDK configs, create basic login and signup functionalities."),Object(n.b)("div",{class:"player"},Object(n.b)("iframe",{src:"https://www.youtube.com/embed/W_PH5tHbhhM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h2",{id:"episode-3"},"Episode 3"),Object(n.b)("p",null,"In this part we will setup State management (Riverpod) and then setup handling of user authentication (login, signup) using Appwrite. Awesome, let's get started"),Object(n.b)("div",{class:"player"},Object(n.b)("iframe",{src:"https://www.youtube.com/embed/UZw4VVpt_ZI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h2",{id:"episode-4"},"Episode 4"),Object(n.b)("p",null,"This is the final video on the series. In this series we will use user preferences to save various user settings, app version they are using, device Id etc."),Object(n.b)("div",{class:"player"},Object(n.b)("iframe",{src:"https://www.youtube.com/embed/h3D40BQ4a2E",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(n.b)("h2",{id:"source-code"},"Source Code"),Object(n.b)("p",null,"{% github lohanidamodar/appwrite_starter %}"),Object(n.b)("h2",{id:"want-to-connect-with-me"},"Want to Connect with me"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Facebook: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://fb.me/lohanidamodar"}),"https://fb.me/lohanidamodar")),Object(n.b)("li",{parentName:"ul"},"GitHub: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/lohanidamodar"}),"https://github.com/lohanidamodar")),Object(n.b)("li",{parentName:"ul"},"YouTube: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://youtube.com/c/reactbits"}),"https://youtube.com/c/reactbits")),Object(n.b)("li",{parentName:"ul"},"Twitter: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://twitter.com/LohaniDamodar"}),"https://twitter.com/LohaniDamodar")),Object(n.b)("li",{parentName:"ul"},"Linked In: ",Object(n.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.linkedin.com/in/lohanidamodar"}),"https://www.linkedin.com/in/lohanidamodar"))))}u.isMDXComponent=!0}}]);
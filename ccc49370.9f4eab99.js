(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(109),i=a(113),c=a(110);var s=function(e){var t=e.nextItem,a=e.prevItem;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),l.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))};var o=function(e,t,a){var l=Object(n.useState)(void 0),r=l[0],i=l[1];Object(n.useEffect)((function(){var n,l;function c(){var c=function(){var e=0,t=null;for(n=document.getElementsByClassName("anchor");e<n.length&&!t;){var l=n[e],r=l.getBoundingClientRect().top;r>=0&&r<=a&&(t=l),e+=1}return t}();if(c){var s=0,o=!1;for(l=document.getElementsByClassName(e);s<l.length&&!o;){var m=l[s],v=m.href,d=decodeURIComponent(v.substring(v.indexOf("#")+1));c.id===d&&(r&&r.classList.remove(t),m.classList.add(t),i(m),o=!0),s+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},m=a(94),v=a.n(m),d="table-of-contents__link";function u(e){var t=e.headings,a=e.isChild;return t.length?l.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:"#"+e.id,className:d,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(u,{isChild:!0,headings:e.children}))}))):null}var g=function(e){var t=e.headings;return o(d,"table-of-contents__link--active",100),l.a.createElement("div",{className:v.a.tableOfContents},l.a.createElement(u,{headings:t}))};t.default=function(e){var t=e.content,a=t.frontMatter,n=t.metadata,c=n.title,o=n.description,m=n.nextItem,v=n.prevItem,d=n.editUrl,u=a.hide_table_of_contents;return l.a.createElement(r.a,{title:c,description:o},t&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement(i.a,{frontMatter:a,metadata:n,isBlogPostPage:!0},l.a.createElement(t,null)),l.a.createElement("div",null,d&&l.a.createElement("a",{href:d,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(m||v)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(s,{nextItem:m,prevItem:v}))),!u&&t.rightToc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(g,{headings:t.rightToc})))))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{119:function(e,t,a){"use strict";var r=a(0),n=a(17);t.a=function(){var e=Object(r.useContext)(n.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},121:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c}));var r=a(119),n=a(125);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,r){var i=void 0===r?{}:r,c=i.forcePrependBaseUrl,s=void 0!==c&&c,l=i.absolute,o=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if(Object(n.b)(a))return a;if(s)return t+a;var u=a.startsWith(t)?a:t+a.replace(/^\//,"");return o?e+u:u}(i,a,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},125:function(e,t,a){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}))},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(50),c=a.n(i),s=a(121);t.default=function(e){var t=e.title,a=e.description,r=e.slide,i=e.link,l=e.code,o=e.date;return n.a.createElement("div",{className:"card margin-bottom--lg"},n.a.createElement("div",{className:"card__header"},n.a.createElement("h3",{className:"card__title"},t),n.a.createElement("p",{className:""},new Date(o).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}))),n.a.createElement("div",{className:"card__body"},n.a.createElement("p",null,a)),n.a.createElement("div",{className:"card__footer"},n.a.createElement("div",{className:c.a.links},l&&n.a.createElement("a",{title:"github",href:l,target:"_blank"},n.a.createElement("img",{alt:"github",src:Object(s.a)("img/github.svg"),className:c.a.iconsm})),i&&n.a.createElement("a",{title:"website",href:i,target:"_blank"},n.a.createElement("img",{alt:"website",src:Object(s.a)("img/web.svg"),className:c.a.iconsm})),r&&n.a.createElement("a",{title:"slide",href:r,target:"_blank"},n.a.createElement("img",{alt:"slide",src:Object(s.a)("img/slide.svg"),className:c.a.iconsm})))))}}}]);
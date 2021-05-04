(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{106:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return w}));var i=r(0),a=r.n(i);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,n=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),b=i,w=d["".concat(n,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(w,p(p({ref:t},c),{},{components:r})):a.a.createElement(w,p({ref:t},c))}));function w(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=b;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,n[1]=p;for(var c=2;c<o;c++)n[c]=r[c];return a.a.createElement.apply(null,n)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},89:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return n})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var i=r(2),a=r(6),o=(r(0),r(106)),n={slug:"appwrite-and-flutter",title:"Appwrite \u2764\ufe0f Flutter - Tutorial Series",author:"Damodar Lohani",author_title:"Web and Mobile Developer",author_url:"https://github.com/lohanidamodar",author_image_url:"https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4",tags:["appwrite","flutter"]},p={permalink:"/blog/appwrite-and-flutter",editUrl:"https://github.com/lohanidamodar/dlohani.com.np/edit/master/website/blog/blog/2021-03-06-appwrite_flutter.md",source:"@site/blog/2021-03-06-appwrite_flutter.md",description:"Introduction",date:"2021-03-06T00:00:00.000Z",tags:[{label:"appwrite",permalink:"/blog/tags/appwrite"},{label:"flutter",permalink:"/blog/tags/flutter"}],title:"Appwrite \u2764\ufe0f Flutter - Tutorial Series",readingTime:3.92,truncated:!1,prevItem:{title:"Flutter\u2764\ufe0fAppwrite Starter Template",permalink:"/blog/flutter-appwrite-starter-template"},nextItem:{title:"Singleton Pattern in Dart",permalink:"/blog/singleton-in-dart"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Update Appwrite 0.7 is\xa0here",id:"update-appwrite-07-is-here",children:[]},{value:"Introduction",id:"introduction-1",children:[]},{value:"Episode 1\u200a-\u200aSetup",id:"episode-1-setup",children:[]},{value:"Episode 2\u200a-\u200aWireframing",id:"episode-2-wireframing",children:[]},{value:"Episode 3\u200a-\u200aNew flutter project and UI\xa0design",id:"episode-3-new-flutter-project-and-ui-design",children:[]},{value:"Episode 4\u200a-\u200aAuthenticating users",id:"episode-4-authenticating-users",children:[]},{value:"Episode 5\u200a-\u200aState management, Routing and Navigation setup",id:"episode-5-state-management-routing-and-navigation-setup",children:[]},{value:"Episode 6\u200a-\u200aRouting, profile page and logging out\xa0user",id:"episode-6-routing-profile-page-and-logging-out-user",children:[]},{value:"Episode 7\u200a-\u200aQuerying and Listing Transactions",id:"episode-7-querying-and-listing-transactions",children:[]},{value:"Episode 8\u200a-\u200aCreate, Read, Update and Delete operations",id:"episode-8-create-read-update-and-delete-operations",children:[]},{value:"Episode 9\u200a-\u200aSearching, ordering and filtering",id:"episode-9-searching-ordering-and-filtering",children:[]},{value:"Episode 10\u200a-\u200aDeploying appwrite in VPS + Tips for running Appwrite in Production",id:"episode-10-deploying-appwrite-in-vps--tips-for-running-appwrite-in-production",children:[]},{value:"Episode 11\u200a-\u200aUser Preferences and Locale\xa0API",id:"episode-11-user-preferences-and-locale-api",children:[]},{value:"Episode 12\u200a-\u200aStorage Service, uploading files,\xa0preview",id:"episode-12-storage-service-uploading-files-preview",children:[]},{value:"Bonus\u200a-\u200aWhat&#39;s coming to Appwrite 0.7 and\xa0beyond",id:"bonus-whats-coming-to-appwrite-07-and-beyond",children:[]},{value:"Source code for the\xa0series",id:"source-code-for-the-series",children:[]},{value:"Want to Connect with\xa0me",id:"want-to-connect-with-me",children:[]}],c={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"introduction"},"Introduction"),Object(o.b)("p",null,"Appwrite is an open source back-end server, that you can easily setup using docker. And it can be used to support your web and mobile applications. And, it is great for Flutter developers to have Appwrite in their toolbox, as this will give them alternative to Firebase, or building own service in back-end. This is unique opportunity for Flutter developers, as they can focus on their application rather than on setting up a remote database, API and stuff. So, in this ongoing tutorial series, we will learn to setup Appwrite and use it as a back-end for our flutter application."),Object(o.b)("h2",{id:"update-appwrite-07-is-here"},"[Update]"," Appwrite 0.7 is\xa0here"),Object(o.b)("p",null,"Appwrite 0.7 has been released with awesome new features like Cloud Functions, Flutter Web support, Appwrite CLI and 100+ more features."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/uuZq3K4Wjrc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"introduction-1"},"Introduction"),Object(o.b)("p",null,"In this episode I will introduce you to Appwrite and why is it important and what it provides."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/eYXb_xbUjio",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-1-setup"},"Episode 1\u200a-\u200aSetup"),Object(o.b)("p",null,"In this episode we will learn to setup Appwrite locally using docker, and define a database structure in Appwrite for the application we will be building in this series"),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/teUUt4ZqIvI",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-2-wireframing"},"Episode 2\u200a-\u200aWireframing"),Object(o.b)("p",null,"In this episode we will create wireframe design for our flutter application using open source vector design tool\u200a-\u200aInkspace"),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/RjE0tmyBdow",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-3-new-flutter-project-and-ui-design"},"Episode 3\u200a-\u200aNew flutter project and UI\xa0design"),Object(o.b)("p",null,"In this episode we will create a new flutter project and create UI for login and signup."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/HvcemJhSeE8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-4-authenticating-users"},"Episode 4\u200a-\u200aAuthenticating users"),Object(o.b)("p",null,"In this eipsode we will connect our Flutter app with Appwrite and allow users to login and signup."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/WcGQDmuwGMM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("p",null,"Also remember to watch the 4.1 quick fix for permission error."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/EBevk7dfTjY",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-5-state-management-routing-and-navigation-setup"},"Episode 5\u200a-\u200aState management, Routing and Navigation setup"),Object(o.b)("p",null,"In this episode, we will setup state management using Provider, setup Routing and Navigation"),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/kYpwnYY9Gf8",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-6-routing-profile-page-and-logging-out-user"},"Episode 6\u200a-\u200aRouting, profile page and logging out\xa0user"),Object(o.b)("p",null,"In this episode we will continue on, setup routing, and design and display user's profile page and allow users to logout."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/4ZSX0VSg4bM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-7-querying-and-listing-transactions"},"Episode 7\u200a-\u200aQuerying and Listing Transactions"),Object(o.b)("p",null,"In this episode we will learn to query the appwrite database that we designed during appwrite setup and list the returned documents in Flutter application"),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/X9vw4PGDbGc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-8-create-read-update-and-delete-operations"},"Episode 8\u200a-\u200aCreate, Read, Update and Delete operations"),Object(o.b)("p",null,"In this episode we will allow users to create, read, update and delete the documents in the database."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/1HodtTldSdA",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-9-searching-ordering-and-filtering"},"Episode 9\u200a-\u200aSearching, ordering and filtering"),Object(o.b)("p",null,"In this episode we will learn to use appwrite to query, order and filter the documents returned by database."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/bcG7G-1QBOk",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-10-deploying-appwrite-in-vps--tips-for-running-appwrite-in-production"},"Episode 10\u200a-\u200aDeploying appwrite in VPS + Tips for running Appwrite in Production"),Object(o.b)("p",null,"In this episode we will learn to deploy Appwrite server in production using digitalocean servers."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/WzHdvLItrEc",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-11-user-preferences-and-locale-api"},"Episode 11\u200a-\u200aUser Preferences and Locale\xa0API"),Object(o.b)("p",null,"In this episode we will learn about User's preferences api that we can use to store settings for particular users and also some uses of Locale API provided by appwrite."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/qKkgXy3H7Mw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"episode-12-storage-service-uploading-files-preview"},"Episode 12\u200a-\u200aStorage Service, uploading files,\xa0preview"),Object(o.b)("p",null,"In this episode we will learn to leverage the Appwrite's storage service, to upload file and display previews. Here we are using it for uploading and displaying user's profile picture."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/CNjvNNYWgGU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"bonus-whats-coming-to-appwrite-07-and-beyond"},"Bonus\u200a-\u200aWhat's coming to Appwrite 0.7 and\xa0beyond"),Object(o.b)("p",null,"Appwrite has more greate features in plan for next version and beyond. We will look into those and also show you some of those features in action."),Object(o.b)("div",{class:"player"},Object(o.b)("iframe",{src:"https://youtu.be/QEzvo9sUkik",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(o.b)("h2",{id:"source-code-for-the-series"},"Source code for the\xa0series"),Object(o.b)("p",null,"The source code for the series can be found in the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://lohanidamodar/flutter_appwrite"}),"Github repository"),". The code after the completion of each episode can be found in the specific branches linked above"),Object(o.b)("h2",{id:"want-to-connect-with-me"},"Want to Connect with\xa0me"),Object(o.b)("p",null,"Facebook: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://fb.me/lohanidamodar"}),"https://fb.me/lohanidamodar"),"\nGitHub: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/lohanidamodar"}),"https://github.com/lohanidamodar"),"\nYouTube: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://youtube.com/c/reactbits"}),"https://youtube.com/c/reactbits"),"\nTwitter: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://twitter.com/LohaniDamodar"}),"https://twitter.com/LohaniDamodar"),"\nLinked In: ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.linkedin.com/in/lohanidamodar"}),"https://www.linkedin.com/in/lohanidamodar")))}s.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{118:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},y=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=p(r),y=n,b=d["".concat(i,".").concat(y)]||d[y]||c[y]||o;return r?a.a.createElement(b,l(l({ref:t},s),{},{components:r})):a.a.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(118)),i={slug:"getting-flutter-android-app-ready-to-publish",title:"Getting your Flutter Android App ready to Publish to Play Store",tags:["flutter","android","automation"]},l={permalink:"/blog/getting-flutter-android-app-ready-to-publish",editUrl:"https://github.com/lohanidamodar/dlohani.com.np/edit/master/website/blog/blog/2020-10-21-publishing-flutter-android-app.md",source:"@site/blog/2020-10-21-publishing-flutter-android-app.md",description:"Now that you have coded your first Flutter app and you want to build a release version and publish it to Google play store. In this article we will learn how to prepare your flutter app to release to Google Play Store.",date:"2020-10-21T00:00:00.000Z",tags:[{label:"flutter",permalink:"/blog/tags/flutter"},{label:"android",permalink:"/blog/tags/android"},{label:"automation",permalink:"/blog/tags/automation"}],title:"Getting your Flutter Android App ready to Publish to Play Store",readingTime:2.19,truncated:!0,prevItem:{title:"Flutter Recipes 1 - ListView recipes",permalink:"/blog/flutter-recipes-1-listview-recipes"}},u=[],s={rightToc:u};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you have coded your first Flutter app and you want to build a release version and publish it to Google play store. In this article we will learn how to prepare your flutter app to release to Google Play Store."),Object(o.b)("p",null,"At this point we assume that you have coded and tested your Flutter app successfully and are ready to release it to the world. To follow this tutorial you can use any of your app that's working or just create a brand new Flutter project."),Object(o.b)("p",null,"Releasing android app to play store has few steps that we need to cover. Most important is that, we need to build a signed apk or appbundle. And to build signed app we need to generate a keystore and signing key. Then we need to configure our build.gradle to use that keystore and key to generate a signed apk or appbundle when we run ",Object(o.b)("inlineCode",{parentName:"p"},"flutter build --release")," command. Doing all that every time you create a new app is a tedious task. So in this tutorial we will learn how to do that the easiest way."),Object(o.b)("p",null,"First of all, add ",Object(o.b)("inlineCode",{parentName:"p"},"flutter_automation")," package to your dev dependencies section in pubspec.yaml. If flutter packages get doesn't run automatically, run ",Object(o.b)("inlineCode",{parentName:"p"},"flutter packages get")," from terminal to get the newly added dependency. Now setting up a releasing config for Flutter Android app is as simple as running one command from terminal and answering the questions it asks."),Object(o.b)("p",null,"So to setup android signing after adding flutter_automation package, from your terminal just run"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"flutter pub pub run flutter_automation --android-sign\n")),Object(o.b)("p",null,"Once you run the command you will be asked a series of questions that are required to generate your keystore and signing keys."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"First is the key alias for your signing key, type key alias you desire and press enter."),Object(o.b)("li",{parentName:"ol"},"The dname that is the details of your organization generating the signing key in the format ",Object(o.b)("inlineCode",{parentName:"li"},"CN=<first and last name>, OU=<organizational_unit>, O=<Organization>, L=<city>, S=<state>, C=<country_code>")),Object(o.b)("li",{parentName:"ol"},"The key password, the password to protect your signing key with. Must be at least 6 characters long"),Object(o.b)("li",{parentName:"ol"},"Finally the keystore password, the password to protect your keystore. Must be at least 6 characters long")),Object(o.b)("p",null,"After you enter all the information and press enter, the command will automatically generate the keystore file and save it in keys/keystore.jks. It will also generate key.properties file with the signing keystore and key details and finally add the required configurations in build.gradle file so that you are ready to run ",Object(o.b)("inlineCode",{parentName:"p"},"flutter build\u200a --\u200arelease")," command to successfully generate a signed apk or appbundle which you can upload to the play store."))}p.isMDXComponent=!0}}]);
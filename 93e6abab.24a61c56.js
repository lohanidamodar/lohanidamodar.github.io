(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),b=r,h=d["".concat(o,".").concat(b)]||d[b]||s[b]||a;return n?i.a.createElement(h,l(l({ref:t},p),{},{components:n})):i.a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(6),a=(n(0),n(102)),o={slug:"flutter-url-preview",title:"Flutter URL Preview",author:"Damodar Lohani",author_title:"Web and Mobile Developer",author_url:"https://github.com/lohanidamodar",author_image_url:"https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4",tags:["flutter","android","automation"]},l={permalink:"/blog/flutter-url-preview",editUrl:"https://github.com/lohanidamodar/dlohani.com.np/edit/master/website/blog/blog/2020-10-23-flutter-url-preview.md",source:"@site/blog/2020-10-23-flutter-url-preview.md",description:"So, what is URL preview if you remember whenever you share some url in facebook or twitter or any other social network the app automatically generates the preview for that url with the title image description this seems like a simple feature but this can add a lot of value to few types of applications like chat applications social network applications and any other applications where users are allowed to share data with one another so if they share any link having the preview of the url adds a lot of value.",date:"2020-10-23T00:00:00.000Z",tags:[{label:"flutter",permalink:"/blog/tags/flutter"},{label:"android",permalink:"/blog/tags/android"},{label:"automation",permalink:"/blog/tags/automation"}],title:"Flutter URL Preview",readingTime:3.065,truncated:!0,prevItem:{title:"Flutter Recipes 2 - Firebase Firestore Helpers",permalink:"/blog/flutter-recipes-2-firebase-firestore-helpers"},nextItem:{title:"Flutter Recipes 1 - ListView recipes",permalink:"/blog/flutter-recipes-1-listview-recipes"}},c=[{value:"Add Dependency",id:"add-dependency",children:[]},{value:"Import flutter_link_preview",id:"import-flutter_link_preview",children:[]},{value:"Get the preview",id:"get-the-preview",children:[]},{value:"Text Styling",id:"text-styling",children:[]},{value:"Complete customization",id:"complete-customization",children:[]},{value:"Want to connect with me",id:"want-to-connect-with-me",children:[]}],p={rightToc:c};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"So, what is URL preview if you remember whenever you share some url in facebook or twitter or any other social network the app automatically generates the preview for that url with the title image description this seems like a simple feature but this can add a lot of value to few types of applications like chat applications social network applications and any other applications where users are allowed to share data with one another so if they share any link having the preview of the url adds a lot of value."),Object(a.b)("p",null,"If you would rather watch a video"),Object(a.b)("div",{class:"player"},Object(a.b)("iframe",{src:"https://www.youtube.com/embed/8c-EIwbNchw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(a.b)("p",null,'In flutter I found few different plugins to help display URL preview. However the one I liked "flutter_link_preview" provided the most customization possible. One thing to note that, I was unable to get preview of youtube URLs from any of the available plugins. However most of them worked fine with other URLs. So in this tutorial we will learn to use "flutter_link_preview" plugin to display the preview of URL in our Flutter application.\nThe final source code for this tutorial can be found at my ',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/lohanidamodar/flutter_plugin_tuts/tree/link-preview"}),"Github repository"),"."),Object(a.b)("h2",{id:"add-dependency"},"Add Dependency"),Object(a.b)("p",null,"To start, add flutter_link_preview: ","<","latest version> to the pubspec.yaml file under dependencies."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"dependencies:\n  flutter_link_preview: ^1.4.2\n")),Object(a.b)("h2",{id:"import-flutter_link_preview"},"Import flutter_link_preview"),Object(a.b)("p",null,'Then in your widget where you want to use the preview widget, import the "flutter_link_preview"'),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dart"}),"import 'package:flutter_link_preview/flutter_link_preview.dart';\n")),Object(a.b)("h2",{id:"get-the-preview"},"Get the preview"),Object(a.b)("p",null,"Next, to get the preview of any url, use the following code, it gives the default preview with title, fav icon etc."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dart"}),'FlutterLinkPreview(url: "your url")\n')),Object(a.b)("h2",{id:"text-styling"},"Text Styling"),Object(a.b)("p",null,"Easy as that. Now, if we want to style the title and body text, we can pass in ",Object(a.b)("inlineCode",{parentName:"p"},"titleStyle")," and ",Object(a.b)("inlineCode",{parentName:"p"},"bodyStyle")," parameters."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dart"}),'FlutterLinkPreview(\n    url: "your url",\n    bodyStyle: TextStyle(\n        fontSize: 18.0,\n    ),\n    titleStyle: TextStyle(\n        fontSize: 20.0,\n        fontWeight: FontWeight.bold,\n    ),\n)\n')),Object(a.b)("p",null,'Default preview for URL "',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@LohaniDamodar/flutter-recipes-2-firebase-firestore-recipes-2f09e58a7298%22"}),'https://medium.com/@LohaniDamodar/flutter-recipes-2-firebase-firestore-recipes-2f09e58a7298"')," looked like"),Object(a.b)("center",null,Object(a.b)("img",{src:"../img/blog/up2.png",height:"480px"})),Object(a.b)("h2",{id:"complete-customization"},"Complete customization"),Object(a.b)("p",null,"Finally, if we want to completely customize how our preview looks, we can use the ",Object(a.b)("inlineCode",{parentName:"p"},"builder")," parameter, that gives us the information returned after parsing the url we provided and we build our own preview widget using the information provided."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-dart"}),"FlutterLinkPreview(\n    url: article,\n    bodyStyle: TextStyle(\n        fontSize: 18.0,\n    ),\n    titleStyle: TextStyle(\n        fontSize: 20.0,\n        fontWeight: FontWeight.bold,\n    ),\n    builder: (info) {\n        if (info is WebInfo) {\n        return SizedBox(\n            height: 350,\n            child: Card(\n            shape: RoundedRectangleBorder(\n                borderRadius: BorderRadius.circular(20.0)),\n            clipBehavior: Clip.antiAlias,\n            child: Column(\n                crossAxisAlignment: CrossAxisAlignment.start,\n                children: [\n                if (info.image != null)\n                    Expanded(\n                        child: Image.network(\n                    info.image,\n                    width: double.maxFinite,\n                    fit: BoxFit.cover,\n                    )),\n                Padding(\n                    padding:\n                        const EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 0),\n                    child: Text(\n                    info.title,\n                    style: TextStyle(\n                        fontSize: 20.0,\n                        fontWeight: FontWeight.bold,\n                    ),\n                    ),\n                ),\n                if (info.description != null)\n                    Padding(\n                    padding: const EdgeInsets.all(16.0),\n                    child: Text(info.description),\n                    ),\n                ],\n            ),\n            ),\n        );\n        }\n        if (info is WebImageInfo) {\n        return SizedBox(\n            height: 350,\n            child: Card(\n            shape: RoundedRectangleBorder(\n                borderRadius: BorderRadius.circular(20.0)),\n            clipBehavior: Clip.antiAlias,\n            child: Image.network(\n                info.image,\n                fit: BoxFit.cover,\n                width: double.maxFinite,\n            ),\n            ),\n        );\n        } else if (info is WebVideoInfo) {\n        return SizedBox(\n            height: 350,\n            child: Card(\n            shape: RoundedRectangleBorder(\n                borderRadius: BorderRadius.circular(20.0)),\n            clipBehavior: Clip.antiAlias,\n            child: Image.network(\n                info.image,\n                fit: BoxFit.cover,\n                width: double.maxFinite,\n            ),\n            ),\n        );\n        }\n    },\n    )\n")),Object(a.b)("p",null,'Custom preview for URL "',Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/@LohaniDamodar/flutter-recipes-2-firebase-firestore-recipes-2f09e58a7298%22"}),'https://medium.com/@LohaniDamodar/flutter-recipes-2-firebase-firestore-recipes-2f09e58a7298"')," looked like"),Object(a.b)("center",null,Object(a.b)("img",{src:"../img/blog/up2.png",height:"480px"})),Object(a.b)("p",null,"As we can see from the code above, the information returned after parsing the URL can be of three different types ",Object(a.b)("inlineCode",{parentName:"p"},"WebInfo")," for normal web URLs, ",Object(a.b)("inlineCode",{parentName:"p"},"WebImageInfo")," for URLs of images and ",Object(a.b)("inlineCode",{parentName:"p"},"WebVideoInfo")," for the URLs of videos. We can us the type of information returned to display different preview and actions in our application."),Object(a.b)("h2",{id:"want-to-connect-with-me"},"Want to connect with me"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Facebook: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://fb.me/lohanidamodar"}),"https://fb.me/lohanidamodar")),Object(a.b)("li",{parentName:"ul"},"GitHub: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/lohanidamodar"}),"https://github.com/lohanidamodar")),Object(a.b)("li",{parentName:"ul"},"YouTube: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://youtube.com/c/reactbits"}),"https://youtube.com/c/reactbits")),Object(a.b)("li",{parentName:"ul"},"Twitter: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://twitter.com/LohaniDamodar"}),"https://twitter.com/LohaniDamodar")),Object(a.b)("li",{parentName:"ul"},"Linked In: ",Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.linkedin.com/in/lohanidamodar/"}),"https://www.linkedin.com/in/lohanidamodar/"))))}u.isMDXComponent=!0}}]);
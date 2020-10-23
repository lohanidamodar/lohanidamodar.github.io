(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{69:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return o})),i.d(t,"default",(function(){return c}));var n=i(2),r=i(6),a=(i(0),i(92)),l={slug:"flutter-recipes-1-listview-recipes",title:"Flutter Recipes 1 - ListView recipes",author:"Damodar Lohani",author_title:"Web and Mobile Developer",author_url:"https://github.com/lohanidamodar",author_image_url:"https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4",tags:["flutter"]},s={permalink:"/blog/flutter-recipes-1-listview-recipes",editUrl:"https://github.com/lohanidamodar/dlohani.com.np/edit/master/website/blog/blog/2020-10-21-futter-recipes2.md",source:"@site/blog/2020-10-21-futter-recipes2.md",description:"Lists are an integral part of mobile applications. Being able to present a list of items is therefore an undeniably important thing to know as a mobile developer. In this article, I will provide various code recipes for implementing ListView in your Flutter applications. Let's get started.",date:"2020-10-21T00:00:00.000Z",tags:[{label:"flutter",permalink:"/blog/tags/flutter"}],title:"Flutter Recipes 1 - ListView recipes",readingTime:3.345,truncated:!0,prevItem:{title:"Flutter URL Preview",permalink:"/blog/flutter-url-preview"},nextItem:{title:"Getting your Flutter Android App ready to Publish to Play Store",permalink:"/blog/getting-flutter-android-app-ready-to-publish"}},o=[{value:"1. A very simple scrollable ListView",id:"1-a-very-simple-scrollable-listview",children:[]},{value:"2. Displaying predefined list of information two different ways",id:"2-displaying-predefined-list-of-information-two-different-ways",children:[{value:"1. Using the spreading operator",id:"1-using-the-spreading-operator",children:[]},{value:"2. Using builder",id:"2-using-builder",children:[]}]},{value:"3. Creating infinite list using builder",id:"3-creating-infinite-list-using-builder",children:[]},{value:"4. Separated list",id:"4-separated-list",children:[]},{value:"5. Prevent ListView from expanding to fill the area",id:"5-prevent-listview-from-expanding-to-fill-the-area",children:[]},{value:"6. ListView with fixed header and footer",id:"6-listview-with-fixed-header-and-footer",children:[]}],d={rightToc:o};function c(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Lists are an integral part of mobile applications. Being able to present a list of items is therefore an undeniably important thing to know as a mobile developer. In this article, I will provide various code recipes for implementing ListView in your Flutter applications. Let's get started."),Object(a.b)("h2",{id:"1-a-very-simple-scrollable-listview"},"1. A very simple scrollable ListView"),Object(a.b)("p",null,"Can be used to display list of any number of items using any widgets."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleListView extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return ListView(\n      children: <Widget>[\n        ListTile(\n          title: Text("List item 1"),\n        ),\n        ListTile(\n          title: Text("List item 2"),\n        ),\n        ListTile(\n          title: Text("List item 3"),\n        ),\n        ListTile(\n          title: Text("List item 4"),\n        ),\n        ListTile(\n          title: Text("List item 5"),\n        ),\n      ],\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"2-displaying-predefined-list-of-information-two-different-ways"},"2. Displaying predefined list of information two different ways"),Object(a.b)("h3",{id:"1-using-the-spreading-operator"},"1. Using the spreading operator"),Object(a.b)("p",null,"Can be used when you have a predefined list of data that you want to display as well as render some widgets before the list of items and/or after the list of items is displayed."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleListSpread extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return ListView(\n      children: <Widget>[\n        ListTile(\n          title: Text("List item 0"),\n        ),\n        ...items.map(\n          (item) => ListTile(\n            title: Text("List item 1"),\n          ),\n        ),\n        ListTile(\n          title: Text("List item 6"),\n        ),\n      ],\n    );\n  }\n}\n')),Object(a.b)("h3",{id:"2-using-builder"},"2. Using builder"),Object(a.b)("p",null,"This is particularly useful if you have a list of data and just want to display those in a list"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleListBuilder extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return ListView.builder(\n      itemCount: items.length,\n      itemBuilder: (context, index) => ListTile(\n        title: Text(items[index]),\n      ),\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"3-creating-infinite-list-using-builder"},"3. Creating infinite list using builder"),Object(a.b)("p",null,"This creates an infinite list of items in the screen as user scrolls the list"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleInfiniteList extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return ListView.builder(\n      itemBuilder: (context, index) => ListTile(\n        title: Text("List item $index"),\n      ),\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"4-separated-list"},"4. Separated list"),Object(a.b)("p",null,"This creates a list, where you can specify a divider widget to render between list items"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleSeparatedList extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return ListView.separated(\n      itemCount: items.length,\n      itemBuilder: (context, index) => ListTile(\n        title: Text(items[index]),\n      ),\n      separatorBuilder: (context,index)=>Divider(),\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"5-prevent-listview-from-expanding-to-fill-the-area"},"5. Prevent ListView from expanding to fill the area"),Object(a.b)("p",null,"You can do this by providing the shrinkwrap property to true. Once the shrinkWrap is set to true, the ListView only takes the space required by it to layout all the children."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleSeparatedList extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return ListView.separated(\n      shrinkWrap: true,\n      itemCount: items.length,\n      itemBuilder: (context, index) => ListTile(\n        title: Text(items[index]),\n      ),\n      separatorBuilder: (context,index)=>Divider(),\n    );\n  }\n}\n')),Object(a.b)("h2",{id:"6-listview-with-fixed-header-and-footer"},"6. ListView with fixed header and footer"),Object(a.b)("p",null,"Many times we would like to display a ListView with a fixed header and/or footer. For this we can wrap expanded ",Object(a.b)("inlineCode",{parentName:"p"},"ListView")," by a ",Object(a.b)("inlineCode",{parentName:"p"},"Column")," widget and add header and footer as we require as follows."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class ListWithHeaderFooter extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: <Widget>[\n        Container(\n          child: Text("This is header"),\n        ),\n        Expanded(\n          child: ListView.builder(\n            itemCount: items.length,\n            itemBuilder: (context, index) => ListTile(\n              title: Text(items[index]),\n            ),\n          ),\n        ),\n        Container(\n          child: Text("This is Footer"),\n        ),\n      ],\n    );\n  }\n}\n')),Object(a.b)("p",null,"More over,"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"You can set ",Object(a.b)("inlineCode",{parentName:"li"},"scrollDirection")," property to ",Object(a.b)("inlineCode",{parentName:"li"},"Axis.horizontal")," to make a horizontal list view"),Object(a.b)("li",{parentName:"ol"},"You can set ",Object(a.b)("inlineCode",{parentName:"li"},"reverse")," property to ",Object(a.b)("inlineCode",{parentName:"li"},"true")," to change the scroll behavior, in opposite direction (end of the list to the begining)")))}c.isMDXComponent=!0},92:function(e,t,i){"use strict";i.d(t,"a",(function(){return p})),i.d(t,"b",(function(){return m}));var n=i(0),r=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=r.a.createContext({}),c=function(e){var t=r.a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(i),b=n,m=p["".concat(l,".").concat(b)]||p[b]||u[b]||a;return i?r.a.createElement(m,s(s({ref:t},d),{},{components:i})):r.a.createElement(m,s({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=b;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var d=2;d<a;d++)l[d]=i[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"}}]);
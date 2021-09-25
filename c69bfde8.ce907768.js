(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{96:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return l})),i.d(t,"metadata",(function(){return a})),i.d(t,"rightToc",(function(){return d})),i.d(t,"default",(function(){return p}));var n=i(2),s=i(6),r=(i(0),i(114)),l={slug:"flutter-recipes-1-listview-recipes",title:"Flutter Recipes 1 - ListView recipes",tags:["flutter"]},a={permalink:"/blog/flutter-recipes-1-listview-recipes",editUrl:"https://github.com/lohanidamodar/dlohani.com.np/edit/master/website/blog/blog/2020-10-21-futter-recipes-1.md",source:"@site/blog/2020-10-21-futter-recipes-1.md",description:"Lists are an integral part of mobile applications. Being able to present a list of items is therefore an undeniably important thing to know as a mobile developer. In this article, I will provide various code recipes for implementing ListView in your Flutter applications. Let's get started.",date:"2020-10-21T00:00:00.000Z",tags:[{label:"flutter",permalink:"/blog/tags/flutter"}],title:"Flutter Recipes 1 - ListView recipes",readingTime:3.345,truncated:!0,prevItem:{title:"Flutter URL Preview",permalink:"/blog/flutter-url-preview"},nextItem:{title:"Getting your Flutter Android App ready to Publish to Play Store",permalink:"/blog/getting-flutter-android-app-ready-to-publish"}},d=[{value:"1. A very simple scrollable ListView",id:"1-a-very-simple-scrollable-listview",children:[]},{value:"2. Displaying predefined list of information two different ways",id:"2-displaying-predefined-list-of-information-two-different-ways",children:[{value:"1. Using the spreading operator",id:"1-using-the-spreading-operator",children:[]},{value:"2. Using builder",id:"2-using-builder",children:[]}]},{value:"3. Creating infinite list using builder",id:"3-creating-infinite-list-using-builder",children:[]},{value:"4. Separated list",id:"4-separated-list",children:[]},{value:"5. Prevent ListView from expanding to fill the area",id:"5-prevent-listview-from-expanding-to-fill-the-area",children:[]},{value:"6. ListView with fixed header and footer",id:"6-listview-with-fixed-header-and-footer",children:[]}],o={rightToc:d};function p(e){var t=e.components,i=Object(s.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Lists are an integral part of mobile applications. Being able to present a list of items is therefore an undeniably important thing to know as a mobile developer. In this article, I will provide various code recipes for implementing ListView in your Flutter applications. Let's get started."),Object(r.b)("h2",{id:"1-a-very-simple-scrollable-listview"},"1. A very simple scrollable ListView"),Object(r.b)("p",null,"Can be used to display list of any number of items using any widgets."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleListView extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return ListView(\n      children: <Widget>[\n        ListTile(\n          title: Text("List item 1"),\n        ),\n        ListTile(\n          title: Text("List item 2"),\n        ),\n        ListTile(\n          title: Text("List item 3"),\n        ),\n        ListTile(\n          title: Text("List item 4"),\n        ),\n        ListTile(\n          title: Text("List item 5"),\n        ),\n      ],\n    );\n  }\n}\n')),Object(r.b)("h2",{id:"2-displaying-predefined-list-of-information-two-different-ways"},"2. Displaying predefined list of information two different ways"),Object(r.b)("h3",{id:"1-using-the-spreading-operator"},"1. Using the spreading operator"),Object(r.b)("p",null,"Can be used when you have a predefined list of data that you want to display as well as render some widgets before the list of items and/or after the list of items is displayed."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleListSpread extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return ListView(\n      children: <Widget>[\n        ListTile(\n          title: Text("List item 0"),\n        ),\n        ...items.map(\n          (item) => ListTile(\n            title: Text("List item 1"),\n          ),\n        ),\n        ListTile(\n          title: Text("List item 6"),\n        ),\n      ],\n    );\n  }\n}\n')),Object(r.b)("h3",{id:"2-using-builder"},"2. Using builder"),Object(r.b)("p",null,"This is particularly useful if you have a list of data and just want to display those in a list"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleListBuilder extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return ListView.builder(\n      itemCount: items.length,\n      itemBuilder: (context, index) => ListTile(\n        title: Text(items[index]),\n      ),\n    );\n  }\n}\n')),Object(r.b)("h2",{id:"3-creating-infinite-list-using-builder"},"3. Creating infinite list using builder"),Object(r.b)("p",null,"This creates an infinite list of items in the screen as user scrolls the list"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleInfiniteList extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    return ListView.builder(\n      itemBuilder: (context, index) => ListTile(\n        title: Text("List item $index"),\n      ),\n    );\n  }\n}\n')),Object(r.b)("h2",{id:"4-separated-list"},"4. Separated list"),Object(r.b)("p",null,"This creates a list, where you can specify a divider widget to render between list items"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleSeparatedList extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return ListView.separated(\n      itemCount: items.length,\n      itemBuilder: (context, index) => ListTile(\n        title: Text(items[index]),\n      ),\n      separatorBuilder: (context,index)=>Divider(),\n    );\n  }\n}\n')),Object(r.b)("h2",{id:"5-prevent-listview-from-expanding-to-fill-the-area"},"5. Prevent ListView from expanding to fill the area"),Object(r.b)("p",null,"You can do this by providing the shrinkwrap property to true. Once the shrinkWrap is set to true, the ListView only takes the space required by it to layout all the children."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class SimpleSeparatedList extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return ListView.separated(\n      shrinkWrap: true,\n      itemCount: items.length,\n      itemBuilder: (context, index) => ListTile(\n        title: Text(items[index]),\n      ),\n      separatorBuilder: (context,index)=>Divider(),\n    );\n  }\n}\n')),Object(r.b)("h2",{id:"6-listview-with-fixed-header-and-footer"},"6. ListView with fixed header and footer"),Object(r.b)("p",null,"Many times we would like to display a ListView with a fixed header and/or footer. For this we can wrap expanded ",Object(r.b)("inlineCode",{parentName:"p"},"ListView")," by a ",Object(r.b)("inlineCode",{parentName:"p"},"Column")," widget and add header and footer as we require as follows."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-dart"}),'class ListWithHeaderFooter extends StatelessWidget {\n  final List<String> items = [\n    "List item 1",\n    "List item 2",\n    "List item 3",\n    "List item 4",\n    "List item 5",\n  ];\n  @override\n  Widget build(BuildContext context) {\n    return Column(\n      children: <Widget>[\n        Container(\n          child: Text("This is header"),\n        ),\n        Expanded(\n          child: ListView.builder(\n            itemCount: items.length,\n            itemBuilder: (context, index) => ListTile(\n              title: Text(items[index]),\n            ),\n          ),\n        ),\n        Container(\n          child: Text("This is Footer"),\n        ),\n      ],\n    );\n  }\n}\n')),Object(r.b)("p",null,"More over,"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"You can set ",Object(r.b)("inlineCode",{parentName:"li"},"scrollDirection")," property to ",Object(r.b)("inlineCode",{parentName:"li"},"Axis.horizontal")," to make a horizontal list view"),Object(r.b)("li",{parentName:"ol"},"You can set ",Object(r.b)("inlineCode",{parentName:"li"},"reverse")," property to ",Object(r.b)("inlineCode",{parentName:"li"},"true")," to change the scroll behavior, in opposite direction (end of the list to the begining)")))}p.isMDXComponent=!0}}]);
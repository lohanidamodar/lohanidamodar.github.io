(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{118:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(n),p=a,u=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return n?r.a.createElement(u,i(i({ref:t},s),{},{components:n})):r.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(118)),c={slug:"intro-to-linux-command-line",title:"Introduction to Linux Command Line",tags:["linux","command-line"]},i={permalink:"/blog/intro-to-linux-command-line",editUrl:"https://github.com/lohanidamodar/dlohani.com.np/edit/master/website/blog/blog/2021-09-27-intro-to-linux-command-line.md",source:"@site/blog/2021-09-27-intro-to-linux-command-line.md",description:"Linux is famous for its command line. Everything can be done with the help of commands, which makes it very easy to automate things by writing a script that combines these commands to carry out multiple actions. This makes linux very essential for developers, security analysts, data analysts or anyone in technology field. So in this article we will learn the basics of linux command line. To continue with this you will need to access to a unix system. These commands work on macos terminals, Windows Subsystem Linux terminals and any linux distribution terminals. So Let's get started.",date:"2021-09-27T00:00:00.000Z",tags:[{label:"linux",permalink:"/blog/tags/linux"},{label:"command-line",permalink:"/blog/tags/command-line"}],title:"Introduction to Linux Command Line",readingTime:4.215,truncated:!0,prevItem:{title:"Understanding BuildContext in Flutter",permalink:"/blog/decoding-flutter-build-context"},nextItem:{title:"Easy Flutter Tutorial Series in Nepali",permalink:"/blog/flutter-intro-nepali-series"}},l=[{value:"Basic commands",id:"basic-commands",children:[{value:"Cal",id:"cal",children:[]},{value:"Date",id:"date",children:[]},{value:"PWD",id:"pwd",children:[]},{value:"Man",id:"man",children:[]},{value:"CD",id:"cd",children:[]},{value:"Exit",id:"exit",children:[]},{value:"Echo",id:"echo",children:[]},{value:"Mkdir",id:"mkdir",children:[]},{value:"Ls",id:"ls",children:[]},{value:"Less",id:"less",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Linux is famous for its command line. Everything can be done with the help of commands, which makes it very easy to automate things by writing a script that combines these commands to carry out multiple actions. This makes linux very essential for developers, security analysts, data analysts or anyone in technology field. So in this article we will learn the basics of linux command line. To continue with this you will need to access to a unix system. These commands work on macos terminals, Windows Subsystem Linux terminals and any linux distribution terminals. So Let's get started."),Object(o.b)("h2",{id:"basic-commands"},"Basic commands"),Object(o.b)("p",null,"Let's start by going through some of the basic commands that you can use in unix terminal."),Object(o.b)("h3",{id:"cal"},"Cal"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"cal")," command is used to display the calendar of the current month in your terminal. It displays the calendar of the current month highlighting the current date."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cal\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"   September 2021\nSu Mo Tu We Th Fr Sa\n          1  2  3  4\n 5  6  7  8  9 10 11\n12 13 14 15 16 17 18\n19 20 21 22 23 24 25\n26 27 28 29 30\n")),Object(o.b)("h3",{id:"date"},"Date"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"date")," command is used to display the current date and time details."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ date\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Mon Sep 27 06:47:07 +0545 2021\n")),Object(o.b)("h3",{id:"pwd"},"PWD"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"pwd")," or (print working directory) command is used to print name of the present working directory active in the command line."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ pwd\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"/home/dl\n")),Object(o.b)("h3",{id:"man"},"Man"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"man")," command gives the manual of the any command specified after it."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ man pwd\n")),Object(o.b)("p",null,"This command will give us the manual of the ",Object(o.b)("strong",{parentName:"p"},"pwd")," command. Which has few options"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"PWD(1)                    BSD General Commands Manual                   PWD(1)\n\nNAME\n     pwd -- return working directory name\n\nSYNOPSIS\n     pwd [-L | -P]\n\nDESCRIPTION\n     The pwd utility writes the absolute pathname of the current working directory to the standard output.\n\n     Some shells may provide a builtin pwd command which is similar or identical to this utility.  Consult the\n     builtin(1) manual page.\n\n     The options are as follows:\n\n     -L      Display the logical current working directory.\n\n     -P      Display the physical current working directory (all symbolic links resolved).\n\n     If no options are specified, the -L option is assumed.\n")),Object(o.b)("h3",{id:"cd"},"CD"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"cd")," or change directory is used to change the directory in command line. When we know where we are using ",Object(o.b)("strong",{parentName:"p"},"pwd")," command we can go to other directory using ",Object(o.b)("strong",{parentName:"p"},"cd")," command."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd /home\n$ pwd\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"/home\n")),Object(o.b)("p",null,"Here, we changed to ",Object(o.b)("em",{parentName:"p"},"/home")," directory and when we used ",Object(o.b)("strong",{parentName:"p"},"pwd")," command, we could see that ",Object(o.b)("em",{parentName:"p"},"/home")," was our current directory. Wherever we go, we can use the ",Object(o.b)("strong",{parentName:"p"},"pwd")," command to check where we are in the command line."),Object(o.b)("h3",{id:"exit"},"Exit"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"exit")," command is used to terminate the terminal session. It is always a good practice to end the session once you are done using the terminal."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ exit\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": ",Object(o.b)("br",null),"\nYou can use the UP and DOWN arrow keys to navigate the command line history. ",Object(o.b)("br",null),"\nYou can use LEFT and RIGHT arrow keys to navigate withing the current command to modify it as required")),Object(o.b)("h3",{id:"echo"},"Echo"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"echo")," command is used to print message in the terminal. It prints any string passed to it"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ echo "Namaste, World"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"Namaste, World\n")),Object(o.b)("h3",{id:"mkdir"},"Mkdir"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"mkdir")," command is used to create directories"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ mkdir src\n")),Object(o.b)("p",null,"This will create a new ",Object(o.b)("em",{parentName:"p"},"src")," directory in the current directory. We can use the ",Object(o.b)("strong",{parentName:"p"},"-v")," option to get the message that the directory was created."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ mkdir -v bin\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"mkdir: created directory 'bin'\n")),Object(o.b)("h3",{id:"ls"},"Ls"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"ls")," command is used to list the files and directories in the current directory"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"$ ls\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"src    bin\n")),Object(o.b)("p",null,"We can also verify that ",Object(o.b)("strong",{parentName:"p"},"mkdir")," command successfully created new directory by using ",Object(o.b)("strong",{parentName:"p"},"ls")," command. We can also pass a path as argument to the ",Object(o.b)("strong",{parentName:"p"},"ls")," command to list the contents of any directory"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ls /home/dl\n")),Object(o.b)("p",null,"This will display the contents of ",Object(o.b)("em",{parentName:"p"},"/home/dl")," instead of current directory."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": To learn more about any command you can use the ",Object(o.b)("strong",{parentName:"p"},"man")," command we discussed above")),Object(o.b)("h3",{id:"less"},"Less"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"less")," command is used to view the contents of a text file."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ less /path/to/text/file.txt\n")),Object(o.b)("p",null,"This will display the contents of the text file. If the content doesn't fit on the terminal screen, we can use the ",Object(o.b)("em",{parentName:"p"},"space")," to move forward and ",Object(o.b)("em",{parentName:"p"},"b")," to move backwards. We can then use the ",Object(o.b)("strong",{parentName:"p"},"q")," key to exit the less and get back to the terminal. We can also use ",Object(o.b)("strong",{parentName:"p"},"-N")," flag to enable the display of line numbers while viewing the text file."),Object(o.b)("p",null,"In this article we learned the basics of Linux command line. We will have more articles to cover more on Linux and linux command line. I hope you enjoyed this article. Thank you \ud83d\ude4f"))}b.isMDXComponent=!0}}]);
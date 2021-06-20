(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[468],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={title:"CLI",sidebar_label:"CLI"},s="CLI",c={unversionedId:"cli",id:"cli",isDocsHomePage:!1,title:"CLI",description:"ReScript Test comes with a little retest CLI to help your run your tests.",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/rescript-test/cli",editUrl:"https://github.com/bloodyowl/rescript-test/edit/main/docs/docs/cli.md",version:"current",frontMatter:{title:"CLI",sidebar_label:"CLI"},sidebar:"docs",previous:{title:"Installation",permalink:"/rescript-test/installation"},next:{title:"Environment file",permalink:"/rescript-test/environment-file"}},p=[{value:"Testing a single file",id:"testing-a-single-file",children:[]},{value:"ES6 modules",id:"es6-modules",children:[]},{value:"Recursive directory testing",id:"recursive-directory-testing",children:[{value:"Enable DOM testing in the CLI",id:"enable-dom-testing-in-the-cli",children:[]}]}],u={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cli"},"CLI"),(0,o.kt)("p",null,"ReScript Test comes with a little ",(0,o.kt)("inlineCode",{parentName:"p"},"retest")," CLI to help your run your tests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Console"',title:'"Console"'},"$ retest tests/*.mjs\n")),(0,o.kt)("p",null,"Note here that we're using the ",(0,o.kt)("inlineCode",{parentName:"p"},"mjs")," extension. This gives the runner infer the information about which extension you've specified in your compiler. It can be either of the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".bs.js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".js")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".mjs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},".cjs"))),(0,o.kt)("h2",{id:"testing-a-single-file"},"Testing a single file"),(0,o.kt)("p",null,"If you're focused on a particular component, you can pass a single test to the CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Console"',title:'"Console"'},"$ retest tests/MyFile_test.mjs\n")),(0,o.kt)("h2",{id:"es6-modules"},"ES6 modules"),(0,o.kt)("p",null,"ReScript Test works out of the box with either ES6 modules (starting with ",(0,o.kt)("strong",{parentName:"p"},"Node\xa014"),", unfortunately) or CommonJS. "),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You'll need to use the ",(0,o.kt)("inlineCode",{parentName:"p"},".mjs")," extension when using ES6 modules. "),(0,o.kt)("p",{parentName:"div"},"This one's on Node \ud83e\udd37\u200d\u2642\ufe0f."))),(0,o.kt)("h2",{id:"recursive-directory-testing"},"Recursive directory testing"),(0,o.kt)("p",null,"If your files are stored in deeper directories, specify the depth that way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Console"',title:'"Console"'},"$ retest tests/*.mjs test/**/*.mjs\n")),(0,o.kt)("h3",{id:"enable-dom-testing-in-the-cli"},"Enable DOM testing in the CLI"),(0,o.kt)("p",null,"The CLI comes with a single option, ",(0,o.kt)("inlineCode",{parentName:"p"},"--with-dom"),", that enables you to opt-in to testing with \u2026 a DOM \ud83d\ude04. It activates ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/jsdom/jsdom"},"JSDOM"))," under the hood. JSDOM doesn't come with all the APIs (for instance, it doesn't handle layout), but it's generally enough for testing component logic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console",metastring:'title="Console"',title:'"Console"'},"$ retest --with-dom tests/*.mjs\n")))}m.isMDXComponent=!0}}]);
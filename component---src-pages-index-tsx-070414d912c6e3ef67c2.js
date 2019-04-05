(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(164),i=n(189),a=n(190);o.a.autoAddCss=!1,o.c.add(i.e,i.c,i.d,i.a,i.b,a.a);var c,l=n(153),u=n(147),d=n.n(u),s=n(140);n(79),n(53),n(191);!function(e){e.PHONE="phone",e.TABLET="tablet",e.DESKTOP="desktop"}(c||(c={}));var m={phone:768,tablet:1024,desktop:1200},p=Object.keys(m).reduce(function(e,t){var n=m[t]/16;return e[t]=function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];return Object(s.c)(["@media (max-width:","em){",";}"],n,s.c.apply(void 0,[e].concat(r)))},e},{}),h=n(145),f=n(152),g=s.d.span.withConfig({displayName:"Highlight",componentId:"sc-7xco39-0"})(["font-weight:bold;"]),b=n(151),v=n(150);function y(){var e=d()(["\n  max-width: 100%;\n  "]);return y=function(){return e},e}function w(){var e=d()(["\n  max-width: 80%;\n  "]);return w=function(){return e},e}var x=s.d.div.withConfig({displayName:"About__TextWrapper",componentId:"sc-1ivm8yp-0"})(["max-width:65%;"," ",""],p.tablet(w()),p.phone(y())),E=function(){return r.createElement(h.a,null,r.createElement(x,null,r.createElement(v.a,null,"Hi. I'm Paweł Kosiec."),r.createElement(f.a,null,"I'm a Full-stack Developer located in Gliwice, Poland."),r.createElement(f.a,null,"Currently I work at SAP, where I develop"," ",r.createElement(b.a,{href:"https://kyma-project.io",target:"_blank"},"Kyma"),", an open source project. I write back-end services in"," ",r.createElement(g,null,"Go"),", and modern front-ends using"," ",r.createElement(g,null,"React.js"),". I work in cloud-native environment, associated with ",r.createElement(g,null,"microservices")," and extending ",r.createElement(g,null,"Kubernetes"),"."),r.createElement(f.a,null,"In 2018 I have completed a master's in Computer Science at Silesian University of Technology."),r.createElement(f.a,null,"I'm open source and cloud-native enthusiast. That's why I'm an co-organizer of the ",r.createElement(b.a,{href:"https://www.meetup.com/GophersSilesia",target:"_blank"},"Gophers Silesia")," ","meetup, which is a local community interested in Go & cloud-native topics.")))},k=(n(146),n(165));n(193);function C(){var e=d()(["\n    width: calc("," - 30px);\n  "]);return C=function(){return e},e}var I=Object(s.d)("li").withConfig({displayName:"Tile",componentId:"ndb2fx-0"})(["width:",";height:",";display:inline-block;position:relative;margin:15px;vertical-align:middle;line-height:",";text-align:center;border:1px solid ",";border-radius:999px;background-color:transparent;transition:all ease-out 0.15s;transition-property:background-color,border-color;&:hover{border-color:",";","}&:focus,&:active{border-color:",";background-color:",";span{opacity:1;}}*:last-child{margin-bottom:auto;}",""],function(e){return e.width?e.width:"75px"},function(e){return e.height?e.height:"75px"},function(e){return e.lineHeight?e.lineHeight:"45px"},function(e){return e.highlighted?e.theme.tileColor:e.theme.tileBorderColor},function(e){return e.highlighted?e.theme.accentColor:e.theme.borderActive},function(e){return e.highlighted&&"\n    > * {\n      color: "+e.theme.accentColor+";\n    }\n    "},function(e){return e.highlighted?e.theme.accentColor:e.theme.borderActive},function(e){return e.theme.backgroundActive},p.phone(C(),function(e){return e.big?"100%":"50%"})),T=s.d.a.withConfig({displayName:"Tile__TileLink",componentId:"ndb2fx-1"})(["padding:15px;width:100%;height:100%;display:block;text-align:center;text-decoration:none;color:",";transition:color ease-out 0.15s;"],function(e){return e.theme.tileColor}),_=Object(s.d)(k.a).withConfig({displayName:"SocialTile__Icon",componentId:"hl57rf-0"})(["position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;"]),N=function(e){var t=e.name,n=e.iconName,o=e.iconPrefix,i=void 0===o?"fab":o,a=e.url,c=[i,n];return r.createElement(I,null,r.createElement(T,{title:t,href:a,target:"_blank",rel:"noopener noreferrer"},r.createElement(_,{size:"2x",icon:c})))},j=(n(167),n(154)),S=n.n(j),P=Object(s.d)(function(e){e.captionVisible;var t=S()(e,["captionVisible"]);return r.createElement(k.a,t)}).withConfig({displayName:"FeaturedAction__Icon",componentId:"sc-4xnyrv-0"})(["position:absolute;top:0;left:",";right:",";bottom:0;margin:auto;"],function(e){return e.captionVisible?"30px":"0"},function(e){return e.captionVisible?"auto":"0"}),A=s.d.p.withConfig({displayName:"FeaturedAction__Caption",componentId:"sc-4xnyrv-1"})(["display:block;text-align:center;width:100%;font-size:1.1rem;margin:0 0 0 25px;"]),H=function(e){var t=e.link,n=e.text,o=e.iconName,i=e.iconPrefix,a=void 0===i?"fa":i,c=e.showCaption,l=void 0!==c&&c,u=l,d=l?"240px":void 0;return r.createElement(I,{big:u,width:d,highlighted:!0,as:"li"},r.createElement(T,{href:t,title:n},r.createElement(P,{captionVisible:l,size:"2x",icon:[a,o]}),l&&r.createElement(A,null,n)))},O=s.d.ul.withConfig({displayName:"Contact__TileList",componentId:"sc-1w1uzne-0"})(["list-style-type:none;margin:0 -15px;"]),z=function(e){var t=e.socialMedia,n=e.email;return r.createElement(h.a,{border:!0},r.createElement(O,null,r.createElement(H,{showCaption:!0,text:"Get in touch",link:"mailto:"+n,iconName:"envelope"}),t.map(function(e){return r.createElement(N,{key:e.name,iconName:e.icon,name:e.name,url:e.url})})))},q=s.d.div.withConfig({displayName:"Project__Box",componentId:"bxbwtk-0"})(["width:350px;"]),M=s.d.a.withConfig({displayName:"Project__LinkBlock",componentId:"bxbwtk-1"})(["width:100%;height:100%;display:block;padding:15px;text-decoration:none;"]),L=(s.d.h3.withConfig({displayName:"Project__Header",componentId:"bxbwtk-2"})([""]),function(e){var t=e.project;return r.createElement(q,null,r.createElement(M,{href:t.link},r.createElement("img",{src:t.image}),r.createElement("h3",null,t.title),r.createElement("p",null,t.description)))}),F=function(e){var t=e.projects,n=void 0===t?[]:t;return r.createElement(h.a,null,r.createElement("h1",null,"Featured projects"),r.createElement("ul",null,n.map(function(e){return r.createElement("li",{key:e.title},r.createElement(L,{project:e}))})))};n.d(t,"query",function(){return G});var G="2077306398";t.default=function(e){var t=e.data.site.siteMetadata,n=t.author,o=t.socialMedia,i=t.projects,a=t.projectsEnabled;return r.createElement(l.a,null,r.createElement(E,null),r.createElement(z,{email:n.email,socialMedia:o}),a&&r.createElement(F,{projects:i}))}},140:function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return c}),n.d(t,"e",function(){return l});var r=n(155),o=r.default,i=r.css,a=r.createGlobalStyle,c=(r.keyframes,r.ThemeProvider),l=r.withTheme;t.d=o},142:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var r=n(0),o=n.n(r),i=n(4),a=n.n(i),c=n(141),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(144),d=n.n(u);n.d(t,"PageRenderer",function(){return d.a});var s=n(33);n.d(t,"parsePath",function(){return s.a});var m=o.a.createContext({}),p=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:a.a.object,query:a.a.string.isRequired,render:a.a.func,children:a.a.func}},143:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(140),o=Object(r.d)("div").withConfig({displayName:"Content",componentId:"sc-1ymf5o7-0"})(["max-width:1200px;width:100%;margin:0 auto;padding:",";"],function(e){return e.padding?e.padding:"40px"})},144:function(e,t,n){var r;e.exports=(r=n(149))&&r.default||r},145:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(0),o=n(140),i=n(143),a=Object(o.d)("section").withConfig({displayName:"Section__SectionWrapper",componentId:"sc-168qs6o-0"})(["width:100%;border-bottom-width:","px;border-bottom-style:solid;border-bottom-color:",";min-height:",";background:",";transition:border-color ease-out 0.15s;display:flex;align-items:center;justify-content:center;"],function(e){return e.border?"1":"0"},function(e){return e.theme.borderColor},function(e){return e.minHeight?e.minHeight:"auto"},function(e){return e.background?e.background:"transparent"}),c=function(e){var t=e.className,n=e.background,o=e.minHeight,c=e.children,l=e.border,u=void 0!==l&&l;return r.createElement(a,{className:t,background:n,minHeight:o,border:u},r.createElement(i.a,null,c))}},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Paweł Kosiec, Full-stack Developer",description:"I am software developer interested in technology and gadgets. Cloud-native and open-source enthusiast.",copyright:"©2012-2019 Paweł Kosiec",keywords:"fullstack,frontend,backend,developer,golang,javascript,react",author:{name:"Paweł Kosiec"}}}}}},149:function(e,t,n){"use strict";n.r(t);n(32);var r=n(0),o=n.n(r),i=n(4),a=n.n(i),c=n(57),l=n(2),u=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};u.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},t.default=u},150:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(140).d.h1.withConfig({displayName:"Headline__Headline1",componentId:"sc-1l5vnie-0"})([""])},151:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(140).d.a.withConfig({displayName:"Link",componentId:"sc-12xnmix-0"})(["color:",";text-decoration:none;border-bottom:1px dotted ",";transition:all ease-out 0.15s;transition-property:color,border-color;&:hover,&:focus{color:",";border-bottom:1px dotted ",";}&:active{opacity:0.8;}"],function(e){return e.theme.textColor},function(e){return e.theme.textColor},function(e){return e.theme.accentColor},function(e){return e.theme.accentColor})},152:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=n(140).d.p.withConfig({displayName:"Paragraph",componentId:"njjzpt-0"})(["margin:0 0 1em 0;line-height:1.9em;font-size:1.1rem;:last-of-type{margin:0;}"])},153:function(e,t,n){"use strict";n(146);var r=n(148),o=n(0),i=n(142),a=n(140),c=n(143),l=a.d.footer.withConfig({displayName:"Footer__StyledFooter",componentId:"os1sed-0"})(["width:100%;"]),u=a.d.p.withConfig({displayName:"Footer__FooterText",componentId:"os1sed-1"})(["padding:0px 0;margin:0;color:",";font-size:0.7rem;transition:color ease-out 0.15s;"],function(e){return e.theme.textColor}),d=function(e){var t=e.text;return o.createElement(l,null,o.createElement(c.a,null,o.createElement(u,null,t)))},s=n(156),m=n.n(s),p=function(e){var t=e.title,n=e.description,r=e.authorName,a=e.keywords,c=e.copyright,l="https://kosiec.net"+Object(i.withPrefix)("/logo-metadata.png");return o.createElement(m.a,{htmlAttributes:{lang:"en"},title:t,meta:[{name:"description",content:n},{property:"og:title",content:t},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r},{name:"twitter:title",content:t},{name:"twitter:description",content:n},{name:"twitter:image",content:l},{name:"og:image",content:l},{name:"copyright",content:c},{name:"viewport",content:"width=device-width, initial-scale=1.0"},{name:"keywords",content:a}]})},h=a.d.svg.withConfig({displayName:"Logo__StyledSvg",componentId:"sc-1ctcy21-0"})(["width:","px;height:","px;margin:0;display:block;transition:opacity ease-out 0.15s;&:hover{opacity:0.9;}&:active{opacity:0.8;}"],75,75),f=a.d.path.withConfig({displayName:"Logo__Path",componentId:"sc-1ctcy21-1"})(["transition:fill ease-out 0.15s;"]),g=Object(a.e)(function(e){var t=e.theme;return o.createElement(h,{width:"21.515mm",height:"21.515mm",version:"1.1",viewBox:"0 0 21.515196 21.515196"},o.createElement(f,{strokeWidth:"0.99997836",fill:t.accentColor,d:"M 40.660156,0.08789062 A 40.659787,40.659787 0 0 0 0,40.748047 40.659787,40.659787 0 0 0 40.660156,81.40625 40.659787,40.659787 0 0 0 81.320312,40.748047 40.659787,40.659787 0 0 0 40.660156,0.08789062 Z M 39.056641,26.337891 h 3.298828 c 0.426649,0 0.780557,0.07406 1.060547,0.220703 0.266655,0.133315 0.546522,0.365892 0.839843,0.699218 l 9.539063,10.798829 c 0.266656,0.306693 0.554673,0.526866 0.861328,0.660156 0.293321,0.119936 0.692573,0.179687 1.199219,0.179687 h 1.460937 V 26.337891 h 3.859375 V 54.996094 H 57.316406 V 41.876953 h -1.761718 c -0.319998,0 -0.585514,0.02048 -0.798829,0.06055 -0.226651,0.02646 -0.420079,0.08003 -0.580078,0.160156 -0.173335,0.08013 -0.319467,0.178892 -0.439453,0.298828 -0.13332,0.106658 -0.273252,0.240392 -0.419922,0.400391 l -9.90039,11.378906 c -0.106658,0.120188 -0.213656,0.235215 -0.320313,0.341797 -0.106682,0.106834 -0.219857,0.193247 -0.339844,0.259766 -0.133325,0.06652 -0.285656,0.120093 -0.458984,0.160156 -0.173328,0.04006 -0.387303,0.05859 -0.640625,0.05859 H 38.296875 L 49.695312,41.417969 c 0.306653,-0.36011 0.60087,-0.660519 0.88086,-0.900391 0.279987,-0.240048 0.60715,-0.42108 0.980469,-0.541016 -0.27998,-0.133239 -0.541253,-0.306115 -0.78125,-0.519531 -0.253325,-0.213314 -0.518841,-0.472654 -0.798829,-0.779297 z m -18.91211,0.160156 h 8.458985 c 1.813259,0 3.387424,0.21397 4.720703,0.640625 1.346613,0.4133 2.459879,1.005987 3.339843,1.779297 0.879965,0.773309 1.532336,1.705546 1.958985,2.798828 0.439981,1.093281 0.660156,2.313548 0.660156,3.660156 0,1.333279 -0.232572,2.553521 -0.699219,3.660156 -0.466649,1.106611 -1.153917,2.059408 -2.060546,2.859375 -0.893296,0.799968 -2.006565,1.427547 -3.339844,1.88086 -1.333279,0.439983 -2.860147,0.660156 -4.580078,0.660156 h -4.59961 v 10.71875 h -3.859375 z m 3.859375,3.060547 v 11.798828 h 4.59961 c 1.106623,0 2.079957,-0.146139 2.919922,-0.439453 0.853298,-0.293314 1.567313,-0.700721 2.140624,-1.220703 0.573309,-0.533312 1.005507,-1.167094 1.298829,-1.900391 0.293321,-0.733322 0.441406,-1.539955 0.441406,-2.419922 0,-1.826579 -0.567886,-3.25266 -1.701172,-4.279297 -1.119955,-1.026611 -2.819701,-1.539062 -5.099609,-1.539062 z",transform:"scale(0.26458574)"}))}),b=n(158),v=n.n(b),y=Object(a.d)("span").withConfig({displayName:"ThemeCircle__Circle",componentId:"b04swl-0"})(["display:inline-block;width:","px;height:","px;border-radius:","px;background-color:",";position:relative;left:","px;right:","px;bottom:","px;top:",";transition:all ease-out 0.15s;transition-property:background-color,top,left,right,bottom;"],20,20,20,function(e){return e.background},function(e){return e.left?e.left:0},function(e){return e.right?e.right:0},function(e){return e.bottom?e.bottom:0},function(e){return e.top?e.top:"0"}),w=a.d.div.withConfig({displayName:"RelativeWrapper",componentId:"mkxiye-0"})(["display:block;position:relative;"]),x=o.createContext({nextTheme:null,themesCount:0,toggleTheme:function(){return null}}),E=a.d.button.withConfig({displayName:"ThemeSwitcher__Switcher",componentId:"sc-135mzxg-0"})(["appearance:none;background-color:transparent;margin:0;padding:10px;border-radius:30px;font-size:0px;letter-spacing:0px;word-spacing:0px;border:none;cursor:pointer;color:",";outline:none;float:right;border:1px solid transparent;transition:all ease-out 0.15s;transition-property:border-color,color,background-color;&:hover{border-color:",";> div > span{:nth-of-type(1){left:6px;}:nth-of-type(2){left:-6px;}}}&:active{background-color:",";border-color:",";}"],function(e){return e.theme.tileColor},function(e){return e.theme.borderActive},function(e){return e.theme.backgroundActive},function(e){return e.theme.borderActive}),k=function(e){v()(e);return o.createElement(x.Consumer,null,function(e){return n=(t=e).themesCount,r=t.nextTheme,n>0&&null!==r&&o.createElement(E,{title:"Switch Theme",onClick:e.toggleTheme},o.createElement("span",null,"Switch Theme"),o.createElement(w,null,o.createElement(y,{background:e.nextTheme.backgroundColor,left:3}),o.createElement(y,{background:e.nextTheme.accentColor,left:-3})));var t,n,r})},C=Object(a.d)(i.Link).withConfig({displayName:"Header__BlockLink",componentId:"sc-1v27lpj-0"})(["display:inline-block;"]),I=function(e){var t=e.logoAltText;return o.createElement(c.a,{as:"header",padding:"40px 40px 0 40px"},o.createElement(C,{to:"/",title:t},o.createElement(g,null)),o.createElement(k,null))},T=n(147),_=n.n(T);n(159),n(160);function N(){var e=_()(["\n  html body {\n    background-color: ",";\n    color: ",";\n    transition: all ease-out 0.15s;\n    transition-property: background-color, color;\n  }\n"]);return N=function(){return e},e}var j=Object(a.b)(N(),function(e){return e.theme.backgroundColor},function(e){return e.theme.textColor}),S=a.d.div.withConfig({displayName:"TopBorder",componentId:"sc-1dzm5ym-0"})(["width:100%;display:block;height:3px;background-color:",";transition:background-color ease-out 0.15s;"],function(e){return e.theme.accentColor}),P=(n(161),n(163),n(7)),A=n.n(P),H=[{accentColor:"#026cee",backgroundColor:"#fff",backgroundActive:"#e5e5e5",textColor:"#1a1a1a",tileColor:"#1a1a1a",tileBorderColor:"transparent",borderColor:"#e5e5e5",borderActive:"#e5e5e5"},{accentColor:"#ffcc00",backgroundColor:"#1a1a1a",backgroundActive:"#2b2b2b",textColor:"#fff",tileColor:"#fff",tileBorderColor:"transparent",borderColor:"#2b2b2b",borderActive:"#504e4e"}],O=function(e){function t(){for(var n,r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=e.call.apply(e,[this].concat(i))||this).state={currentThemeIndex:0},n.evaluateNextThemeIndex=function(){var e=n.state.currentThemeIndex+1;return e>=H.length&&(e=0),e},n.toggleTheme=function(e){localStorage.setItem(t.THEME_KEY,e.toString()),n.setState({currentThemeIndex:e})},n.render=function(){var e=n.props.children,t=n.state.currentThemeIndex,r=n.evaluateNextThemeIndex(),i={themesCount:H.length,nextTheme:H[r],toggleTheme:function(){return n.toggleTheme(r)}};return o.createElement(x.Provider,{value:i},o.createElement(a.a,{theme:H[t]},o.createElement(o.Fragment,null,e)))},n}return A()(t,e),t.prototype.componentDidMount=function(){var e=localStorage.getItem(t.THEME_KEY);if(e){var n=Number(e);n>=H.length&&localStorage.removeItem(t.THEME_KEY),this.setState({currentThemeIndex:n})}else this.setState({currentThemeIndex:0})},t}(o.Component);O.THEME_KEY="theme",n.d(t,"a",function(){return z});var z=function(e){var t=e.pageTitle,n=e.children;return o.createElement(i.StaticQuery,{query:"4140979630",render:function(e){var r=e.site.siteMetadata,i=r.title,a=r.description,c=r.copyright,l=r.author,u=r.keywords,s=t?t+" - "+i:i,m=l.name;return o.createElement(O,null,o.createElement(j,null),o.createElement(S,null),o.createElement(p,{title:s,description:a,copyright:c,authorName:m,keywords:u}),o.createElement(I,{logoAltText:m}),o.createElement("main",null,n),o.createElement(d,{text:c}))},data:r})}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-070414d912c6e3ef67c2.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"/Uhd":function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return s}));var n=a("q1tI"),i=a.n(n),r=a("TSYQ"),l=a.n(r),c=function(e){var t=e.left,a=e.children,n=e.className;return i.a.createElement("div",{className:l()(n,"grid__container",{left:t})},a)};c.defaultProps={left:!1,className:""};var s=function(e){var t,a=e.className,n=e.padding,r=e.limitWidth,c=e.full,s=e.children,o=e.autosize;return i.a.createElement("div",{className:l()(a,"grid__item",(t={},t["p-"+n]=!!n||0===n,t["no-min"]=!r,t.auto=o,t.full=c,t))},s)};s.defaultProps={full:!1,limitWidth:!0,padding:null,className:"",autosize:!1}},"0sn9":function(e,t,a){"use strict";var n=a("zLVn"),i=a("q1tI"),r=a.n(i),l=a("TSYQ"),c=a.n(l);t.a=function(e){var t=e.children,a=e.className,i=e.empty,l=e.disabled,s=e.to,o=e.size,m=void 0===o?"large":o,u=e.external,d=void 0!==u&&u,p=Object(n.a)(e,["children","className","empty","disabled","to","size","external"]),f=c()("conf__button",{small:"small"===m,empty:i,disabled:l},a);return s?r.a.createElement("a",Object.assign({className:f,href:s},d?{target:"_blank",rel:"noopener noreferrer"}:{}),t):r.a.createElement("div",Object.assign({className:f},p),t)}},"78kH":function(e,t,a){},Aaka:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("l3up"),l=a("yoeh");t.default=function(){return i.a.createElement(r.a,{logoAlwaysVisible:!0},i.a.createElement(l.a,null))}},DZGb:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("TSYQ"),l=a.n(r);t.a=function(e){var t=e.children,a=e.dark,n=void 0!==a&&a,r=e.lined,c=void 0!==r&&r,s=e.h1,o=void 0!==s&&s,m=e.small,u=void 0!==m&&m;return i.a.createElement("div",{className:l()("conf__section-title",{dark:n,small:u})},o?i.a.createElement("h1",{className:"h2 title__layer"},t):i.a.createElement("h2",{className:"title__layer"},t),i.a.createElement("div",{className:l()("h2",{lined:c})},t))}},GYK1:function(e,t,a){"use strict";t.a=[{id:1,title:"On-site edition",languages:"French and english-speaking tracks",offers:[{title:"Early bird",limitDate:"2022-05-06",price:89},{title:"Regular ticket",limitDate:"2022-08-19",price:129},{title:"Late bird",limitDate:"2022-09-14",price:169}]},{id:2,title:"Online edition",languages:"French and english-speaking tracks",offers:[{title:"Online ticket",limitDate:"2022-09-13",price:59}]}]},SU53:function(e,t,a){"use strict";var n=a("q1tI"),i=Object(n.createContext)(null);t.a=i},Tz3w:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n);t.a=function(e){var t=e.speaker,a=t.github,n=t.twitter;return i.a.createElement("div",{className:"social__list"},a&&i.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("span",{className:"icon-github"})),n&&i.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("span",{className:"icon-twitter"})))}},UYRS:function(e,t,a){"use strict";var n=a("q1tI"),i=a("3nhQ");t.a=function(e){var t=Object(n.useContext)(i.a).isEventBriteLoaded,a=Object(n.useState)(!1),r=a[0],l=a[1];Object(n.useLayoutEffect)((function(){var a;t&&!r&&(null===(a=window.EBWidgets)||void 0===a||a.createWidget({widgetType:"checkout",eventId:"304104152707",modal:!0,modalTriggerElementId:e}),l(!0))}),[t,e,r,l])}},c63E:function(e,t,a){"use strict";var n=a("zLVn"),i=a("q1tI"),r=a.n(i),l=a("UYRS"),c=a("0sn9");t.a=function(e){var t=e.children,a=e.id,i=Object(n.a)(e,["children","id"]);return Object(l.a)(a),r.a.createElement(c.a,Object.assign({id:a},i),t)}},l3up:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("Wgwc"),l=a.n(r),c=a("TJpk"),s=a.n(c),o={logoLink:"/",links:[{to:"/con/2022/",text:"Home",mobileOnly:!0},{to:"/con/2022/speakers",text:"Speakers"},{to:"/con/2022/#venue",text:"Venue"},{to:"/con/2022/#pricing",text:"Pricing"},{to:"/con/2022/#sponsorship",text:"Sponsorship"},{to:"/con/2021/review",text:"2021 review"}]},m=[{title:"Previous edition",links:[{title:"2021 review",link:"/con/2021/review"},{title:"2021 archive",link:"/con/2021/"}]},{title:"The event",links:[{title:"Speakers",link:"/con/2022/speakers"},{title:"Venue",link:"/con/2022/#venue"},{title:"Pricing",link:"/con/2022/#pricing"},{title:"Sponsorship",link:"/con/2022/#sponsorship"}]},{title:"Legal",links:[{title:"Code of conduct",link:"/con/2022/code-of-conduct"},{title:"FAQ",link:"/con/2022/faq"},{title:"Transparency",link:"/con/2022/transparency"}]}],u=a("GYK1"),d=a("3nhQ"),p=a("SU53"),f=a("YwZP"),v={TITLE:"API Platform Conference 2022",DESCRIPTION:"The international conference dedicated to API Platform and its ecosystem",OG_IMAGE:"https://api-platform.com/conf-facebook.png",URL:"https://api-platform.com/con/2022/"},h=a("RHlq"),g=a("c63E");t.a=function(e){var t=e.logoAlwaysVisible,a=e.children,r=u.a.map((function(e){var t=e.offers.sort((function(e,t){return l()(e.limitDate).isAfter(l()(t.limitDate))?1:l()(t.limitDate).isAfter(l()(e.limitDate))?-1:0})),a=t.find((function(e){return l()(e.limitDate).isAfter(l()())}))||t[t.length-1];return{"@type":"Offer",availability:"https://schema.org/InStock",price:a.price+".00",name:1===e.offers.length?e.title:e.title+" - "+a.title,priceCurrency:"EUR",url:"https://www.eventbrite.fr/e/api-platform-conference-2022-tickets-304104152707",validFrom:"2022-04-07"}})),c={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2022",description:"The international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2022/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2022-09-15",endDate:"2022-09-15",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2022/"}],image:v.OG_IMAGE,offers:r},E=Object(f.useLocation)().pathname,k=Object(n.useState)([]),b=k[0],y=k[1],_=Object(n.useMemo)((function(){var e=null==b?void 0:b[b.length-1];return e&&"home"!==e&&b.length?E+"#"+b[b.length-1]:E}),[b,E]);Object(n.useEffect)((function(){window.history.replaceState({},"",_)}),[_]);var w=Object(n.useState)(!1),N=w[0],O=w[1];return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://www.eventbrite.com/static/widgets/eb_widgets.js",e.onload=function(){O(!0)},document.body.appendChild(e)}),[O]),i.a.createElement(d.a.Provider,{value:{nav:o,activeLink:_,edition:"2022",isEventBriteLoaded:N}},i.a.createElement(p.a.Provider,{value:{sectionsVisibles:b,setSectionsVisibles:y}},i.a.createElement(s.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(c)),i.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"})),i.a.createElement(h.a,{edition:"2022",meta:v,logoAlwaysVisible:t,footer:m,navButton:i.a.createElement(g.a,{size:"small",id:"nav"},"Buy ticket")},a)))}},thtY:function(e,t,a){"use strict";var n=a("q1tI"),i=a("3nhQ"),r=a("Wbzz");t.a=function(e){var t=Object(n.useContext)(i.a).edition;return Object(r.useStaticQuery)("1672982183").allMarkdownRemark.nodes.filter((function(t){return!e||e.includes(t.frontmatter.id)})).filter((function(e){return e.fields.collection==="con"+t})).map((function(e){return Object.assign({},e.frontmatter,{slug:"/con/"+t+e.fields.slug})}))}},vxqf:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("TJpk"),l=a.n(r),c=a("TSYQ"),s=a.n(c),o=a("Wbzz"),m=a("q5Oq"),u=a("Tz3w");t.a=function(e){var t=e.speaker,a=e.social,n=void 0===a||a,r=e.hoverable,c=void 0===r||r,d=t.id,p=t.name,f=t.job,v=t.company,h=Object(o.useStaticQuery)("2760183193").allFile.nodes.find((function(e){return e.name===d})),g=h&&Object(m.j)(h),E={"@context":"http://schema.org","@type":"Person",name:t.name,jobTitle:t.job+" "+(t.company?"@ "+t.company:"")};return i.a.createElement("div",{className:"conf__speaker-resume"},i.a.createElement(l.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(E))),i.a.createElement("a",{className:s()("conf__speaker-content",{hoverable:c}),href:t.slug},i.a.createElement("div",{className:"circle__effect"},i.a.createElement("div",{className:"circle"},i.a.createElement(m.a,{image:g,className:"circle__picture",alt:p}),i.a.createElement("svg",{className:"circle__plus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 281.49 281.49"},i.a.createElement("path",{d:"M140.74,0C63.14,0,0,63.14,0,140.74S63.14,281.49,140.74,281.49s140.75-63.14,140.75-140.75S218.35,0,140.74,0Zm0,263.49A122.75,122.75,0,1,1,263.49,140.74,122.88,122.88,0,0,1,140.74,263.49Z"}),i.a.createElement("path",{d:"M210.91,131.74H149.74V70.58a9,9,0,1,0-18,0v61.16H70.58a9,9,0,1,0,0,18h61.16v61.17a9,9,0,0,0,18,0V149.74h61.17a9,9,0,0,0,0-18Z"})))),i.a.createElement("div",{className:"infos"},i.a.createElement("h3",{className:"h5"},p),i.a.createElement("p",{className:"overline lined"},f,i.a.createElement("br",null),v?i.a.createElement(i.a.Fragment,null,"@ ",i.a.createElement("strong",null,v)):null))),n&&i.a.createElement(u.a,{speaker:t}))}},yoeh:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("DZGb"),l=a("/Uhd"),c=a("thtY"),s=a("vxqf"),o=function(){var e=Object(c.a)();return i.a.createElement(l.a,{className:"speakers-list__grid"},e.map((function(e){return i.a.createElement(l.b,{key:e.name},i.a.createElement(s.a,{speaker:e}))})))},m=a("rkht");a("78kH"),t.a=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"conf__speakers-list"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"speakers__header"},i.a.createElement(r.a,{h1:!0,dark:!0},"Meet our ",i.a.createElement("strong",null,"speakers")),i.a.createElement("p",{className:"conf__section-subtitle"},"Join international speakers sharing their knowledge on English-speaking (streamed online) and French-speaking tracks.")),i.a.createElement("div",{className:"speakers-list__content"},i.a.createElement(o,null)))),i.a.createElement("div",{className:"conf__contact"},i.a.createElement(m.a,null)))}}}]);
//# sourceMappingURL=component---src-pages-con-2022-speakers-index-tsx-75d777c6969871bad5fa.js.map
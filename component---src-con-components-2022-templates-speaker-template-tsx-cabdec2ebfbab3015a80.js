(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"0sn9":function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),i=n.n(r),c=n("TSYQ"),l=n.n(c);t.a=function(e){var t=e.children,n=e.className,r=e.empty,c=e.disabled,s=e.to,o=e.size,u=void 0===o?"large":o,d=e.external,m=void 0!==d&&d,f=Object(a.a)(e,["children","className","empty","disabled","to","size","external"]),p=l()("conf__button",{small:"small"===u,empty:r,disabled:c},n);return s?i.a.createElement("a",Object.assign({className:p,href:s},m?{target:"_blank",rel:"noopener noreferrer"}:{}),t):i.a.createElement("div",Object.assign({className:p},f),t)}},"78kH":function(e,t,n){},DZGb:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("TSYQ"),c=n.n(i);t.a=function(e){var t=e.children,n=e.dark,a=void 0!==n&&n,i=e.lined,l=void 0!==i&&i,s=e.h1,o=void 0!==s&&s,u=e.small,d=void 0!==u&&u;return r.a.createElement("div",{className:c()("conf__section-title",{dark:a,small:d})},o?r.a.createElement("h1",{className:"h2 title__layer"},t):r.a.createElement("h2",{className:"title__layer"},t),r.a.createElement("div",{className:c()("h2",{lined:l})},t))}},GYK1:function(e,t,n){"use strict";t.a=[{id:1,title:"On-site edition",languages:"French and english-speaking tracks",offers:[{title:"Early bird",limitDate:"2022-05-06",price:89},{title:"Regular ticket",limitDate:"2022-08-19",price:129},{title:"Late bird",limitDate:"2022-09-14",price:169}]},{id:2,title:"Online edition",languages:"French and english-speaking tracks",offers:[{title:"Online ticket",limitDate:"2022-09-13",price:59}]}]},SU53:function(e,t,n){"use strict";var a=n("q1tI"),r=Object(a.createContext)(null);t.a=r},Tz3w:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);t.a=function(e){var t=e.speaker,n=t.github,a=t.twitter;return r.a.createElement("div",{className:"social__list"},n&&r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-github"})),a&&r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-twitter"})))}},UYRS:function(e,t,n){"use strict";var a=n("q1tI"),r=n("3nhQ");t.a=function(e){var t=Object(a.useContext)(r.a).isEventBriteLoaded,n=Object(a.useState)(!1),i=n[0],c=n[1];Object(a.useLayoutEffect)((function(){var n;t&&!i&&(null===(n=window.EBWidgets)||void 0===n||n.createWidget({widgetType:"checkout",eventId:"304104152707",modal:!0,modalTriggerElementId:e}),c(!0))}),[t,e,i,c])}},VXY7:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("q5Oq"),c=n("DZGb"),l=n("Wbzz"),s=n("v46D"),o=n("0sn9"),u=n("gvN6"),d=n("Tz3w"),m=(n("78kH"),function(e){var t=e.tracks,n=e.conference,a=t.find((function(e){return e.id===n.track})),i=n.start,c=n.end,l=n.date,u=n.title,d=n.slug,m=n.short;return r.a.createElement("div",{className:"speaker__conference-slot dotted-corner"},r.a.createElement("div",{className:"conference__track"},r.a.createElement("span",{className:"h6"},"Track #"+a.id),r.a.createElement("span",{className:"overline"},a.type)),r.a.createElement("div",{className:"conference__content"},r.a.createElement("span",{className:"overline"},Object(s.a)(l,i,c)),r.a.createElement("h3",{className:"h6 lined lined-left"},u),r.a.createElement("p",null,m),r.a.createElement(o.a,{className:"square",size:"small",to:d},"See details")))});t.a=function(e){var t=e.tracks,n=e.pageContext,a=n.id,s=n.name,o=n.job,f=n.company,p=n.description,v=n.slug,h=n.twitter,g=n.github,E=Object(u.a)(a),k=Object(l.useStaticQuery)("1779148633"),b=Object(i.j)(k.allFile.nodes.find((function(e){return e.name===a}))),_=s.split(" ")[0];return r.a.createElement("div",{className:"conf__speaker-profile"},r.a.createElement("div",{className:"speaker__header"},r.a.createElement(c.a,{dark:!0,lined:!0,h1:!0},r.a.createElement("strong",null,s)),r.a.createElement("p",{className:"overline speaker__job"},o,f?r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null," @ ",f)):null)),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"speaker__about"},r.a.createElement("div",{className:"speaker__picture"},r.a.createElement("div",{className:"circle__effect"},r.a.createElement(i.a,{image:b,className:"circle__picture",alt:s}))),r.a.createElement("div",{className:"speaker__details"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}}),r.a.createElement(d.a,{speaker:{id:a,description:p,name:s,job:o,slug:v,github:g,twitter:h}})),0<E.length?r.a.createElement("div",{className:"speaker__schedule"},r.a.createElement("h2",{className:"schedule__title h5"},_+"'s schedule"),E.map((function(e){return r.a.createElement(m,{key:e.title,conference:e,tracks:t})}))):null)))}},Y3TU:function(e,t,n){"use strict";t.a=[{id:"EN",type:"English-speaking track",date:"10 sep, 2021"},{id:"FR",type:"French-speaking track",date:"10 sep, 2021"}]},c63E:function(e,t,n){"use strict";var a=n("zLVn"),r=n("q1tI"),i=n.n(r),c=n("UYRS"),l=n("0sn9");t.a=function(e){var t=e.children,n=e.id,r=Object(a.a)(e,["children","id"]);return Object(c.a)(n),i.a.createElement(l.a,Object.assign({id:n},r),t)}},dr8V:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("l3up"),c=n("VXY7"),l=n("Y3TU");t.default=function(e){return r.a.createElement(i.a,{logoAlwaysVisible:!0},r.a.createElement(c.a,Object.assign({},e,{tracks:l.a})))}},gvN6:function(e,t,n){"use strict";var a=n("q1tI"),r=n("3nhQ"),i=n("Wbzz");t.a=function(e){var t=Object(a.useContext)(r.a).edition;return Object(i.useStaticQuery)("1854657708").allMarkdownRemark.nodes.filter((function(t){return!e||t.frontmatter.speakers.includes(e)})).filter((function(e){return e.fields.collection==="con"+t})).map((function(e){var n;return Object.assign({},e.frontmatter,{title:null===(n=e.headings)||void 0===n?void 0:n[0].value,slug:"/con/"+t+e.fields.slug})}))}},l3up:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("Wgwc"),c=n.n(i),l=n("TJpk"),s=n.n(l),o={logoLink:"/",links:[{to:"/con/2022/",text:"Home",mobileOnly:!0},{to:"/con/2022/speakers",text:"Speakers"},{to:"/con/2022/#venue",text:"Venue"},{to:"/con/2022/#pricing",text:"Pricing"},{to:"/con/2022/#sponsorship",text:"Sponsorship"},{to:"/con/2021/review",text:"2021 review"}]},u=[{title:"Previous edition",links:[{title:"2021 review",link:"/con/2021/review"},{title:"2021 archive",link:"/con/2021/"}]},{title:"The event",links:[{title:"Speakers",link:"/con/2022/speakers"},{title:"Venue",link:"/con/2022/#venue"},{title:"Pricing",link:"/con/2022/#pricing"},{title:"Sponsorship",link:"/con/2022/#sponsorship"}]},{title:"Legal",links:[{title:"Code of conduct",link:"/con/2022/code-of-conduct"},{title:"FAQ",link:"/con/2022/faq"},{title:"Transparency",link:"/con/2022/transparency"}]}],d=n("GYK1"),m=n("3nhQ"),f=n("SU53"),p=n("YwZP"),v={TITLE:"API Platform Conference 2022",DESCRIPTION:"The international conference dedicated to API Platform and its ecosystem",OG_IMAGE:"https://api-platform.com/conf-facebook.png",URL:"https://api-platform.com/con/2022/"},h=n("RHlq"),g=n("c63E");t.a=function(e){var t=e.logoAlwaysVisible,n=e.children,i=d.a.map((function(e){var t=e.offers.sort((function(e,t){return c()(e.limitDate).isAfter(c()(t.limitDate))?1:c()(t.limitDate).isAfter(c()(e.limitDate))?-1:0})),n=t.find((function(e){return c()(e.limitDate).isAfter(c()())}))||t[t.length-1];return{"@type":"Offer",availability:"https://schema.org/InStock",price:n.price+".00",name:1===e.offers.length?e.title:e.title+" - "+n.title,priceCurrency:"EUR",url:"https://www.eventbrite.fr/e/api-platform-conference-2022-tickets-304104152707",validFrom:"2022-04-07"}})),l={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2022",description:"The international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2022/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2022-09-15",endDate:"2022-09-15",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2022/"}],image:v.OG_IMAGE,offers:i},E=Object(p.useLocation)().pathname,k=Object(a.useState)([]),b=k[0],_=k[1],y=Object(a.useMemo)((function(){var e=null==b?void 0:b[b.length-1];return e&&"home"!==e&&b.length?E+"#"+b[b.length-1]:E}),[b,E]);Object(a.useEffect)((function(){window.history.replaceState({},"",y)}),[y]);var w=Object(a.useState)(!1),N=w[0],O=w[1];return Object(a.useEffect)((function(){var e=document.createElement("script");e.src="https://www.eventbrite.com/static/widgets/eb_widgets.js",e.onload=function(){O(!0)},document.body.appendChild(e)}),[O]),r.a.createElement(m.a.Provider,{value:{nav:o,activeLink:y,edition:"2022",isEventBriteLoaded:N}},r.a.createElement(f.a.Provider,{value:{sectionsVisibles:b,setSectionsVisibles:_}},r.a.createElement(s.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(l)),r.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"})),r.a.createElement(h.a,{edition:"2022",meta:v,logoAlwaysVisible:t,footer:u,navButton:r.a.createElement(g.a,{size:"small",id:"nav"},"Buy ticket")},n)))}},v46D:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u}));var a=n("Wgwc"),r=n.n(a),i=function(e,t){var n=e.start?r()(e.date+"T"+e.start):r()(),a=t.start?r()(t.date+"T"+t.start):r()();return n.isBefore(a)?-1:n.isAfter(a)?1:0},c=function(e){return r()(e).format("ll")},l=function(e,t){return r()(e+"T"+t).format("HH:mm A")},s=function(e){return e&&12>=parseInt(e.split(":")[0],10)},o=function(e,t,n){return t&&n?l(e,t)+" - "+l(e,n):c(e)},u=function(e,t,n){return t&&n?c(e)+" · "+o(e,t,n):c(e)}}}]);
//# sourceMappingURL=component---src-con-components-2022-templates-speaker-template-tsx-cabdec2ebfbab3015a80.js.map
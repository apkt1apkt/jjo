(this["webpackJsonpjunior-job-offers"]=this["webpackJsonpjunior-job-offers"]||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(5),c=n.n(o),a=(n(12),n(0));function s(){return Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"container",style:l.container,children:[Object(a.jsx)("h1",{style:l.heading,children:"Juniors make IT work."}),Object(a.jsx)("p",{style:l.catchPhrase,children:"Hire and invest in highly skilled junior now."}),Object(a.jsx)("button",{children:"Post Offer Now"})]})})}var l={container:{color:"white",paddingTop:160},heading:{marginBottom:-10,marginTop:0},catchPhrase:{fontSize:14}},d=n(3);function j(e){return Object(a.jsx)("div",{style:u.header,children:e.heading})}var u={header:{fontSize:28,fontWeight:700,marginBottom:10}},f=function(e){return getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},b=f("primary"),h=f("gray");function p(e){return Object(a.jsx)("span",{style:x.container,children:Object(a.jsx)("i",{style:x.icon,className:"fa ".concat(e.icon)})})}var x={container:{borderRadius:"50%",borderStyle:"solid",borderWidth:1.5,padding:"14px 16px",borderColor:f("lightGray")},icon:{textShadow:"0px 0px 1px #000000, 0px 0px 1px #000000",color:"white"}};function m(e){var t=e.label,n=e.icon;return Object(a.jsxs)("div",{style:g.container,children:[Object(a.jsx)("div",{style:g.center,children:Object(a.jsx)(p,{icon:n})}),Object(a.jsx)("div",{style:g.text,children:Object(a.jsx)("div",{style:g.breakWord,children:t})})]})}var g={container:{margin:"10px 5px",width:90,cursor:"pointer"},center:{display:"flex",justifyContent:"center"},breakWord:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},text:{display:"flex",justifyContent:"center",fontWeight:750,marginTop:5,fontSize:14}};function O(e){var t=e.heading,n=e.list;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{heading:t}),Object(a.jsx)("div",{style:y.list,children:n.map((function(e,t){return Object(a.jsx)(m,Object(d.a)({},e),t)}))})]})}var y={list:{display:"flex",justifyContent:"flex-start",flexWrap:"wrap"}},v=["GrandParade","Seargin","DEX Ventures","NBC","SVT SP Zoo","DG Tech","PickSaaS","BlackRose","FrontKom"].map((function(e){return{label:e,icon:"fa-briefcase"}}));function w(){return Object(a.jsx)("div",{style:{marginTop:40},children:Object(a.jsx)(O,{heading:"Featured Companies",list:v})})}var S=n(7),k=n(2),P=n.n(k),W=n(6),N=n.n(W);function B(e){var t=Object(i.useState)(!0),n=Object(S.a)(t,2)[1];return Object(i.useEffect)((function(){var e=setInterval((function(){return n((function(e){return!e}))}),58e3);return function(){clearInterval(e)}})),Object(a.jsx)(a.Fragment,{children:P()().to(P()(e.start))})}P.a.extend(N.a);var J=Object(i.memo)(B,(function(e,t){return e.start===t.start}));function C(e){var t=e.title,n=e.company,i=e.time,r=e.description,o=e.location;return Object(a.jsxs)("div",{className:"offers-block",children:[Object(a.jsxs)("div",{style:D.heading,children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:D.title,children:t}),Object(a.jsx)("span",{style:D.company,children:n}),Object(a.jsx)("span",{style:D.location,children:o})]}),Object(a.jsx)("div",{style:D.time,children:Object(a.jsx)(J,{start:i})})]}),Object(a.jsx)("div",{style:D.description,children:r}),Object(a.jsx)("button",{style:D.iconButton,children:Object(a.jsx)("i",{className:"fa fa-angle-right fa-2x"})})]})}var D={heading:{display:"flex",justifyContent:"space-between"},description:{display:"flex",justifyContent:"space-between",color:h,fontSize:13,marginTop:15,marginRight:30,fontWeight:500,whiteSpace:"pre-wrap"},iconButton:{padding:"5px 10px",float:"right",fontSize:8,position:"absolute",bottom:0,right:0},location:{marginLeft:13,color:h,fontSize:13,fontWeight:500},title:{fontWeight:700,color:b},company:{fontSize:13,fontWeight:600},time:{color:h,fontSize:12,fontWeight:500}},z=[{title:"Junior Java Developer",company:"PickSaaS",location:"Wrclaw, Polska",time:P()().subtract(2,"hours").toDate(),description:"I am currently looking or a Java Developer, Project for Public Sector Location: Wroclaw (during the pandemic remote work)\n$ up to PLN 550 net / MD B2B"},{title:"Junior Project Manager",company:"Frontkom",location:"Lublin, Polska",time:P()().subtract(3,"hours").toDate(),description:"Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!"},{title:"Junior Project Manager",company:"Fontkom",location:"Lublin, Polksa",time:P()().subtract(1,"day").toDate(),description:"I am currently looking for a Java Developer. Project for Public Sector Location: Wroclaw (during the pandemic remote work)\n$ up to PLN 550 net / MD B2B"}];function L(){return Object(a.jsxs)("div",{style:T.container,children:[Object(a.jsxs)("div",{style:T.top,children:[Object(a.jsx)(j,{heading:"Newest Job Offers"}),Object(a.jsxs)("div",{style:T.viewAll,children:[Object(a.jsx)("span",{className:"off-sm",children:"View all job offers"}),Object(a.jsx)("i",{style:T.icon,className:"fa fa-arrow-right","aria-hidden":"true"})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"offers-container",children:Object(a.jsx)("div",{className:"offers-content",children:z.map((function(e,t){return Object(a.jsx)(C,Object(d.a)({},e),t)}))})})})]})}var T={container:{marginTop:40},top:{display:"flex",justifyContent:"space-between",alignItems:"center"},viewAll:{color:b,fontSize:10,fontWeight:800,cursor:"pointer"},icon:{paddingLeft:3}};function I(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(s,{}),Object(a.jsxs)("main",{className:"container",children:[Object(a.jsx)(L,{}),Object(a.jsx)(w,{})]})]})}c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(I,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8ccd4c03.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[81],{8103:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var a=t(9439),r=t(2791),i=t(7689),c=t(5861),o=t(4687),p=t.n(o);function s(){return(s=(0,c.Z)(p().mark((function n(e){var t,a,r,i;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"e37afbe8681f4152ae6f2e33bec3a5b8",t="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),a="?api_key=".concat("e37afbe8681f4152ae6f2e33bec3a5b8","&language=en-US"),n.next=5,fetch("".concat(t).concat(a));case 5:return r=n.sent,n.next=8,r.json();case 8:return i=n.sent,n.abrupt("return",i);case 10:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var u,f,d,h,m,l=function(n){return s.apply(this,arguments)},x=t(2007),g=t.n(x),b=t(6842),v=t(2070),w=t(168),Z=t(4934),j=t(5624),k=Z.Z.ul(u||(u=(0,w.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"]))),y=Z.Z.li(f||(f=(0,w.Z)(["\n  @media (max-width: 767px) {\n    margin-bottom: 50px;\n  }\n\n  @media (min-width: 768px) {\n    width: calc((100% - 10px * 8) / 4);\n    margin: 10px;\n  }\n"]))),_=Z.Z.div(d||(d=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  height: 375px;\n  margin-bottom: 15px;\n"]))),C=Z.Z.img(h||(h=(0,w.Z)(["\n  width: 250px;\n"]))),N=Z.Z.p(m||(m=(0,w.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  color: ",";\n"])),j.NN),O=t(184);function S(n){var e=n.actors;return(0,O.jsx)(v.Z,{isPadding:!0,children:(0,O.jsx)(k,{children:e.map((function(n){var e=n.id,t=n.name,a=n.photo;return(0,O.jsxs)(y,{children:[(0,O.jsx)(_,{children:(0,O.jsx)(C,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):b,alt:t})}),(0,O.jsx)(N,{children:t})]},e)}))})})}S.prototype={actors:g().arrayOf(g().shape({id:g().number,name:g().string,photo:g().string})).isRequired};var U=S;var q=function(){var n=(0,i.UO)().movieId,e=(0,r.useState)(null),t=(0,a.Z)(e,2),c=t[0],o=t[1];return(0,r.useEffect)((function(){l(n).then((function(n){var e=n.cast,t=[];e.map((function(n){var e={id:n.id,name:n.name,photo:n.profile_path};return t.push(e)})),o(t)}))}),[n]),c&&(0,O.jsx)(U,{actors:c})}},6842:function(n,e,t){n.exports=t.p+"static/media/actor.015401e8db7d127faefa.png"}}]);
//# sourceMappingURL=cast-view.03f15b7c.chunk.js.map
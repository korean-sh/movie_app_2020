(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},43:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(28),i=a.n(s),o=a(8),c=a(1);a(37);var l=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(o.b,{to:"/"},"Home"),r.a.createElement(o.b,{to:"/about"},"About"))};a(43);var m=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},u=a(10),p=a(11),v=a(13),d=a(12),f=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component),y=a(17),E=a.n(y),g=a(30),h=a(31),_=a.n(h),b=a(4),N=a.n(b);a(62);function O(e){var t=e.id,a=e.year,n=e.title,s=e.summary,i=e.poster,c=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:i,genres:c}}},r.a.createElement("img",{src:i,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"genres"},c.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,140),"..."))))}O.prototype={id:N.a.number.isRequired,year:N.a.number.isRequired,title:N.a.string.isRequired,summary:N.a.string.isRequired,poster:N.a.string.isRequired,geners:N.a.arrayOf(N.a.string).isRequired};var j=O,k=(a(63),function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(g.a)(E.a.mark((function t(){var a,n;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Lodaing...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(j,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(64);var w=function(){return r.a.createElement(o.a,null,r.a.createElement(l,null),r.a.createElement(c.a,{path:"/",exact:!0,component:k}),r.a.createElement(c.a,{path:"/about",component:m}),r.a.createElement(c.a,{path:"/movie/:id",component:f}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c5775e0c.chunk.js.map
(function(t){function e(e){for(var s,r,o=e[0],c=e[1],u=e[2],l=0,m=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var s={},a={app:0},i=[];function r(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=s,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-dit/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0186":function(t,e,n){"use strict";var s=n("9295"),a=n.n(s);a.a},"034f":function(t,e,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},4678:function(t,e,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(t){var e=i(t);return n(e)}function i(t){if(!n.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=i,t.exports=a,a.id="4678"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("c4ca");var s=n("2b0e"),a=n("58ca"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header-menu"),n("transition",{attrs:{name:"fade"}},[n("router-view",{key:t.$route.path})],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ui fixed inverted menu"},[s("div",{staticClass:"ui container"},[s("router-link",{staticClass:"header item",attrs:{to:"/"}},[s("img",{staticClass:"logo",attrs:{src:n("cf05")}}),t._v(" VueDit ")]),s("router-link",{staticClass:"item",attrs:{to:"/"}},[t._v(" Front Page ")]),s("router-link",{staticClass:"item",attrs:{to:"/sub/videos"}},[t._v(" Videos ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"ui active centered inverted loader"})],1)])},c=[],u={name:"header-menu",data:function(){return{loading:!1}},mounted:function(){var t=this;this.$root.$on("loading",(function(e){t.loading=e}))}},d=u,l=(n("605e"),n("2877")),m=Object(l["a"])(d,o,c,!1,null,"a27bb60c",null),f=m.exports,p={name:"app",components:{HeaderMenu:f},metaInfo:{title:"Browsing",titleTemplate:"%s | vue-dit"}},h=p,b=(n("034f"),Object(l["a"])(h,i,r,!1,null,null,null)),j=b.exports,v=(n("b0c0"),n("8c4f")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui main container"},[n("div",{staticClass:"ui divided relaxed items"},[t._l(t.posts,(function(t){return n("post-slim",{key:t.id,attrs:{post:t,expandable:!0}})})),t.posts.length>0?n("infinite-loading",{ref:"infiniteLoading",attrs:{"on-infinite":t.onInfinite}}):t._e()],2)])},k=[],_=(n("99af"),n("e166")),x=n.n(_),y=n("6ba2"),C=n.n(y),w=n("bc3a"),$=n.n(w);n("4de4"),n("d81d");function O(t){var e=t.data;return e.kind=t.kind,e}function P(t,e){var n=O(t);return n.children=e(n.children),n}function T(t,e){var n=O(t);return n.replies=e(n.replies),Array.isArray(n.replies)&&(n.replies=n.repleis.filter((function(t){return"t1"===t.kind}))),n}function z(){}var S={Listing:P,t3:O,t1:T,more:z,undefined:z};function L(t){var e;if(Array.isArray(t))e=t.map(L).filter((function(t){return null!==t&&"undefined"!==typeof t}));else{var n=t.kind;S[n]?e=S[n](t,L):(console.warn('Unknown kind while transforming: "'.concat(n,'", defaulting to data.data if exists')),e=t.data?t.data:t)}return e}var M=$.a.defaults.transformResponse.concat(L),E=$.a.create({baseURL:"https://www.reddit.com/",transformResponse:M});E.interceptors.request.use((function(t){var e=t;return e.url+=".json",e}));var I=E,q=C.a.create(I),D=q,F={getSubreddit:function(t,e,n){var s;s="undefined"!==typeof t&&t.length>0?"/r/".concat(t,"/"):"/","undefined"!==typeof e&&(s+=e);var a={};return"undefined"!==typeof n&&(a.after=n),D.get(s,{params:a,ttl:30}).then((function(t){return t.data}))},getPostDetail:function(t,e){return D.get("/r/".concat(t,"/comments/").concat(e),{ttl:60}).then((function(t){return{post:t.data[0].children[0],comments:t.data[1]}}))},getUserComments:function(t){return D.get("/user/".concat(t,"/"),{ttl:120}).then((function(t){return t.data}))}},N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post item"},[n("div",{staticClass:"ui tiny rounded image"},[n("transition",{attrs:{name:"fade",appear:""}},[n("img",{attrs:{src:t.thumbnail}})])],1),n("div",{staticClass:"middle aligned content"},[t.post.is_self?n("router-link",{staticClass:"header",attrs:{to:t.commentLink},domProps:{textContent:t._s(t.post.title)}}):n("a",{staticClass:"header",attrs:{href:t.post.url,target:"_blank"},domProps:{textContent:t._s(t.post.title)}}),n("div",{staticClass:"meta"},[n("post-submission-details",{staticClass:"meta item",attrs:{post:t.post}})],1),t.showSelfText?n("div",{staticClass:"extra"},[n("markdown",{staticClass:"ui readable segment",attrs:{markdown:t.post.selftext}})],1):t._e(),n("div",{staticClass:"extra"},[n("router-link",{attrs:{to:t.commentLink}},[t._v(" "+t._s(t.post.num_comments)+" comments ")])],1)],1)])},U=[],R=(n("c975"),n("5b4d")),A=n.n(R),B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown",domProps:{innerHTML:t._s(t.rendered)}})},Y=[],V=n("878c"),H=new V["a"]({html:!1,breaks:!0}),J={computed:{rendered:function(){return H.render(this.markdown)}},props:{markdown:{type:String,required:!0}}},G=J,K=Object(l["a"])(G,B,Y,!1,null,null,null),Q=K.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(" submitted "),n("relative-time",{attrs:{unix:t.post.created_utc}}),t._v(" by "),n("router-link",{attrs:{to:"/user/"+t.post.author}},[n("span",{staticClass:"user",domProps:{textContent:t._s(t.post.author)}})]),t._v(" to "),n("router-link",{attrs:{to:"/sub/"+t.post.subreddit}},[n("span",{staticClass:"subreddit",domProps:{textContent:t._s(t.post.subreddit)}})])],1)},X=[],Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"time",attrs:{title:t.readableTime}},[t._v(" "+t._s(t.relativeTime)+" ")])},tt=[],et=(n("a9e3"),n("c1df")),nt=n.n(et),st={computed:{relativeTime:function(){return nt.a.unix(this.unix).fromNow()},readableTime:function(){return nt.a.unix(this.unix).format("MMMM Do YYYY, h:mm:ss a")}},props:{unix:{type:Number,required:!0}}},at=st,it=Object(l["a"])(at,Z,tt,!1,null,null,null),rt=it.exports,ot={components:{RelativeTime:rt},props:{post:{required:!0,type:Object}}},ct=ot,ut=Object(l["a"])(ct,W,X,!1,null,null,null),dt=ut.exports,lt={name:"post-slim",components:{Markdown:Q,PostSubmissionDetails:dt},computed:{hasThumbnail:function(){if(!this.post)return!1;var t=this.post.thumbnail;return t&&t.indexOf("://")>=0},thumbnail:function(){return this.hasThumbnail?this.post.thumbnail:A.a},showSelfText:function(){return this.post&&this.post.selftext&&this.expanded},commentLink:function(){return"/sub/".concat(this.post.subreddit,"/").concat(this.post.id)}},data:function(){return{expanded:!1}},props:{post:{type:Object,default:function(){return{id:"",subreddit:"",author:"",score:0,created_utc:0,title:"",permalink:"",post_hint:"image",selftext:"",url:"",thumbnail:""}}}}},mt=lt,ft=(n("d66a"),Object(l["a"])(mt,N,U,!1,null,null,null)),pt=ft.exports,ht={components:{InfiniteLoading:x.a,PostSlim:pt},data:function(){return{posts:[],after:void 0,mode:"hot"}},props:{subreddit:{type:String,default:""},isFrontPage:{type:Boolean,default:!1}},metaInfo:function(){return{title:this.isFrontPage?"vue-dit: random page of the internet":this.subreddit}},methods:{view:function(){var t=this;return this.$root.$emit("loading",!0),F.getSubreddit(this.subreddit,this.mode,this.after).then((function(e){t.posts=e.children,t.after=e.after,t.$root.$emit("loading",!1)}))},more:function(){var t=this;return this.$root.$emit("loading",!0),F.getSubreddit(this.subreddit,this.mode,this.after).then((function(e){return t.posts=t.posts.concat(e.children),t.after=e.after,t.$root.$emit("loading",!1),e}))},onInfinite:function(){var t=this;this.more().then((function(e){e.after&&e.children.length>0?t.$refs.infiniteLoading.$emit("$InfiniteLoading:loaded"):t.$refs.infiniteLoading.$emit("$InfiniteLoading:complete")}))}},mounted:function(){this.view()},watch:{$route:"view"}},bt=ht,jt=Object(l["a"])(bt,g,k,!1,null,null,null),vt=jt.exports,gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loaded?n("div",{staticClass:"ui main container"},[n("div",{staticClass:"ui items"},[n("post-full",{attrs:{post:t.post}})],1),t.comments.length>0?n("div",{staticClass:"ui comments"},[n("h3",{staticClass:"ui dividing header"},[t._v("Comments")]),t._l(t.comments,(function(t){return n("comment",{key:t.id,attrs:{comment:t}})}))],2):n("div",{staticClass:"ui message"},[n("p",[t._v("No comments found.")])])]):t._e()},kt=[],_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post item"},[n("div",{staticClass:"ui tiny rounded image"},[n("transition",{attrs:{name:"fade",appear:""}},[n("img",{attrs:{src:t.thumbnail}})])],1),n("div",{staticClass:"middle aligned content"},[t.post.is_self?n("router-link",{staticClass:"header",attrs:{to:t.commentLink},domProps:{textContent:t._s(t.post.title)}}):n("a",{staticClass:"header",attrs:{href:t.post.url,target:"_blank"},domProps:{textContent:t._s(t.post.title)}}),n("div",{staticClass:"meta"},[n("post-submission-details",{staticClass:"meta item",attrs:{post:t.post}})],1),t.showSelfText?n("div",{staticClass:"extra"},[n("markdown",{staticClass:"ui readable segment",attrs:{markdown:t.post.selftext}})],1):t._e(),n("div",{staticClass:"extra"},[n("router-link",{attrs:{to:t.commentLink}},[t._v(" "+t._s(t.post.num_comments)+" comments ")])],1)],1)])},xt=[],yt={name:"post-full",components:{Markdown:Q,PostSubmissionDetails:dt},computed:{hasThumbnail:function(){if(!this.post)return!1;var t=this.post.thumbnail;return t&&t.indexOf("://")>=0},thumbnail:function(){return this.hasThumbnail?this.post.thumbnail:A.a},showSelfText:function(){return this.post&&this.post.selftext},commentLink:function(){return"/sub/".concat(this.post.subreddit,"/").concat(this.post.id)}},props:{post:{type:Object,default:function(){return{id:"",subreddit:"",author:"",score:0,created_utc:0,title:"",permalink:"",post_hint:"image",selftext:"",url:"",thumbnail:""}}}}},Ct=yt,wt=(n("0186"),Object(l["a"])(Ct,_t,xt,!1,null,null,null)),$t=wt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment",class:{selected:t.selected}},[n("div",{staticClass:"content"},[n("a",{staticClass:"clickable fw-expando",domProps:{textContent:t._s(t.expandoText)},on:{click:function(e){t.expanded=!t.expanded}}}),n("router-link",{staticClass:"author",attrs:{to:"/user/"+t.comment.author},domProps:{textContent:t._s(t.comment.author)}}),n("div",{staticClass:"metadata"},[n("router-link",{staticClass:"muted",attrs:{to:t.permalink},nativeOn:{click:function(e){return t.scrollToComment(e)}}},[n("relative-time",{attrs:{unix:t.comment.created_utc}})],1)],1),t.expanded?n("markdown",{staticClass:"text",attrs:{markdown:t.comment.body}}):t._e()],1),t.expanded&&t.showChildren&&t.replies.length>0?n("div",{staticClass:"comments"},t._l(t.replies,(function(t){return n("comment",{key:t.id,attrs:{comment:t}})})),1):t._e()])},Pt=[],Tt={name:"comment",components:{Markdown:Q,RelativeTime:rt},computed:{permalink:function(){return{name:"sub.post",params:{subreddit:this.comment.subreddit,id:this.comment.link_id.substr(3)},query:{comment:this.comment.id}}},replies:function(){var t=this.comment.replies;return"undefined"===typeof t?[]:t.children},expandoText:function(){return this.expanded?"[-]":"[+]"},selected:function(){return this.$route.query.comment===this.comment.id}},data:function(){return{expanded:!0}},methods:{scrollToComment:function(){this.selected&&this.$el.scrollIntoView()}},mounted:function(){this.scrollToComment()},props:{showChildren:{type:Boolean,default:!0},comment:{type:Object,default:function(){return{id:"",author:"",body:"",created_utc:0,score:0,replies:[]}}}},watch:{$route:function(){this.scrollToComment()}}},zt=Tt,St=(n("cb5f"),Object(l["a"])(zt,Ot,Pt,!1,null,"f1bc0186",null)),Lt=St.exports,Mt={components:{Comment:Lt,PostFull:$t},data:function(){return{loaded:!1,post:{},comments:[]}},props:{id:null,subreddit:null},metaInfo:function(){return{title:this.loaded?this.post.title:"Post ".concat(this.id," on ").concat(this.subreddit)}},mounted:function(){var t=this;this.$root.$emit("loading",!0),F.getPostDetail(this.subreddit,this.id).then((function(e){t.post=e.post,t.comments=e.comments.children,t.$root.$emit("loading",!1),t.loaded=!0}))}},Et=Mt,It=Object(l["a"])(Et,gt,kt,!1,null,null,null),qt=It.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui main container"},[n("h2",{staticClass:"ui header",domProps:{textContent:t._s(t.username)}}),n("div",{staticClass:"ui relaxed items comments"},[t._l(t.items,(function(t){return["t1"===t.kind?n("comment",{key:t.id,attrs:{comment:t}}):n("post-slim",{key:t.id,attrs:{post:t}})]}))],2)])},Ft=[],Nt={components:{PostSlim:pt,Comment:Lt},data:function(){return{items:[]}},props:{username:{type:String,required:!0}},metaInfo:function(){return{title:"overview for ".concat(this.username)}},methods:{view:function(){var t=this;this.$root.$emit("loading",!0),F.getUserComments(this.username).then((function(e){t.items=e.children,t.$root.$emit("loading",!1)}))}},mounted:function(){this.view()},watch:{$route:"view"}},Ut=Nt,Rt=Object(l["a"])(Ut,Dt,Ft,!1,null,null,null),At=Rt.exports;s["a"].use(v["a"]);var Bt=new v["a"]({mode:"hash",routes:[{path:"/",name:"FrontPage",component:vt,props:{isFrontPage:!0}},{name:"sub",path:"/sub/:subreddit",component:vt,props:!0},{name:"sub.post",path:"/sub/:subreddit/:id",component:qt,props:!0},{name:"user",path:"/user/:username",component:At,props:!0}],scrollBehavior:function(t,e,n){return n||(t.name&&e.name&&t.name===e.name?void 0:{x:0,y:0})}});s["a"].config.productionTip=!1,s["a"].use(a["a"]),new s["a"]({el:"#app",router:Bt,render:function(t){return t(j)}})},"5b4d":function(t,e,n){t.exports=n.p+"img/placeholder.7e5a2eed.png"},"605e":function(t,e,n){"use strict";var s=n("d4a3"),a=n.n(s);a.a},"7cdb":function(t,e,n){},"85ec":function(t,e,n){},9295:function(t,e,n){},cb5f:function(t,e,n){"use strict";var s=n("7cdb"),a=n.n(s);a.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},d4a3:function(t,e,n){},d66a:function(t,e,n){"use strict";var s=n("e594"),a=n.n(s);a.a},e594:function(t,e,n){}});
//# sourceMappingURL=app.470123bb.js.map
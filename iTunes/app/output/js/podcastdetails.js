(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["podcastdetails"],{1109:function(t,e,r){"use strict";r("62df")},"57bb":function(t,e,r){"use strict";r.r(e);var n=r("7a23"),a=r("74e1"),c=r.n(a);Object(n["u"])("data-v-32fcf3c0");var i={id:"nav"},o={class:"podcastContainer"},s={key:0,class:"indented"},u={class:"card"},d={key:0},f=["src"],l={class:"card-body"},b={class:"card-title"},p={class:"card-text"},h=["href"],v=Object(n["f"])("img",{style:{"max-width":"80%","max-height":"44px"},src:c.a},null,-1),O=[v],m={class:"extras"},j=["href"];function I(t,e,r,a,c,v){return Object(n["r"])(),Object(n["e"])("div",null,[Object(n["f"])("div",i,[Object(n["f"])("button",{onClick:e[0]||(e[0]=function(){return t.goBack&&t.goBack.apply(t,arguments)}),class:"btn btn-link"},"Home")]),Object(n["f"])("div",o,[t.data?(Object(n["r"])(),Object(n["e"])("div",s,[Object(n["f"])("div",u,[""!=t.data.artworkUrl600?(Object(n["r"])(),Object(n["e"])("div",d,[Object(n["f"])("img",{src:t.data.artworkUrl600,class:"card-img-top rounded artwork",alt:"podcast artwork"},null,8,f)])):Object(n["d"])("",!0),Object(n["f"])("div",l,[Object(n["f"])("h3",b,Object(n["A"])(t.data.collectionName),1),Object(n["f"])("div",p,[Object(n["f"])("h6",null,Object(n["A"])(t.data.artistName),1),Object(n["f"])("div",null,[Object(n["f"])("a",{href:t.icatcherLink(t.data.collectionId)},O,8,h)]),Object(n["f"])("div",m,[Object(n["f"])("div",null,"iTunesID: "+Object(n["A"])(t.data.collectionId),1),Object(n["f"])("div",null,[Object(n["f"])("a",{href:t.data.feedUrl},"Podcast Feed",8,j)])])])])])])):Object(n["d"])("",!0)])])}Object(n["s"])();var g=r("1da1"),w=(r("96cf"),r("7db0"),r("a9e3"),r("c338")),N=r("231d"),y=Object(n["i"])({name:"PodcastById",components:{},data:function(){return{data:{},iTunesId:0}},setup:function(){return{shared:N["a"]}},mounted:function(){console.log("PodcastById","mounted"),this.find(),this.updateMeta(Number(this.$route.params.id))},methods:{goBack:function(){"/"==window.history.state.back&&window.history.length>1?this.$router.go(-1):this.$router.push("/")},updateMeta:function(t){var e=document.querySelector('meta[name="apple-itunes-app"]');null!=e&&e.setAttribute("content","app-id=414419105, app-argument=".concat(t))},icatcherLink:function(t){return"icatcher://itunes/".concat(t)},find:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.iTunesId=Number(t.$route.params.id),e.next=3,t.searchItunes(t.iTunesId);case 3:case"end":return e.stop()}}),e)})))()},searchItunes:function(t){var e=this;return Object(g["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(w["b"])(t);case 2:n=r.sent,0==n.resultCount?e.data=Object(w["a"])(t):e.data=n.results[0];case 4:case"end":return r.stop()}}),r)})))()}}});r("1109");y.render=I,y.__scopeId="data-v-32fcf3c0";e["default"]=y},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("577e"),c=r("5899"),i="["+c+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(t){return function(e){var r=a(n(e));return 1&t&&(r=r.replace(o,"")),2&t&&(r=r.replace(s,"")),r}};t.exports={start:u(1),end:u(2),trim:u(3)}},"62df":function(t,e,r){},7156:function(t,e,r){var n=r("861d"),a=r("d2bb");t.exports=function(t,e,r){var c,i;return a&&"function"==typeof(c=e.constructor)&&c!==r&&n(i=c.prototype)&&i!==r.prototype&&a(t,i),t}},"7db0":function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").find,c=r("44d2"),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),c(i)},a9e3:function(t,e,r){"use strict";var n=r("83ab"),a=r("da84"),c=r("94ca"),i=r("6eeb"),o=r("5135"),s=r("c6b6"),u=r("7156"),d=r("d9b5"),f=r("c04e"),l=r("d039"),b=r("7c73"),p=r("241c").f,h=r("06cf").f,v=r("9bf2").f,O=r("58a8").trim,m="Number",j=a[m],I=j.prototype,g=s(b(I))==m,w=function(t){if(d(t))throw TypeError("Cannot convert a Symbol value to a number");var e,r,n,a,c,i,o,s,u=f(t,"number");if("string"==typeof u&&u.length>2)if(u=O(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(c=u.slice(2),i=c.length,o=0;o<i;o++)if(s=c.charCodeAt(o),s<48||s>a)return NaN;return parseInt(c,n)}return+u};if(c(m,!j(" 0o1")||!j("0b1")||j("+0x1"))){for(var N,y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(g?l((function(){I.valueOf.call(r)})):s(r)!=m)?u(new j(w(e)),r,y):w(e)},k=n?p(j):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;k.length>x;x++)o(j,N=k[x])&&!o(y,N)&&v(y,N,h(j,N));y.prototype=I,I.constructor=y,i(a,m,y)}},b727:function(t,e,r){var n=r("0366"),a=r("44ad"),c=r("7b0b"),i=r("50c4"),o=r("65f0"),s=[].push,u=function(t){var e=1==t,r=2==t,u=3==t,d=4==t,f=6==t,l=7==t,b=5==t||f;return function(p,h,v,O){for(var m,j,I=c(p),g=a(I),w=n(h,v,3),N=i(g.length),y=0,k=O||o,x=e?k(p,N):r||l?k(p,0):void 0;N>y;y++)if((b||y in g)&&(m=g[y],j=w(m,y,I),t))if(e)x[y]=j;else if(j)switch(t){case 3:return!0;case 5:return m;case 6:return y;case 2:s.call(x,m)}else switch(t){case 4:return!1;case 7:s.call(x,m)}return f?-1:u||d?d:x}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}}}]);
//# sourceMappingURL=podcastdetails.js.map
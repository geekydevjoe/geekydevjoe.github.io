(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["podcastdetails"],{"1ee6":function(e,t,r){"use strict";r("2907")},2907:function(e,t,r){},"57bb":function(e,t,r){"use strict";r.r(t);var n=r("7a23"),a=r("74e1"),c=r.n(a);Object(n["t"])("data-v-65051101");var i={id:"nav"},o=Object(n["g"])("Home"),s={class:"podcastContainer"},u={key:0,class:"indented"},d={class:"card"},f={key:0},l=["src"],b={class:"card-body"},p={class:"card-title"},h={class:"card-text"},v=["href"],O=Object(n["f"])("img",{style:{"max-width":"80%","max-height":"44px"},src:c.a},null,-1),j=[O],m={class:"extras"},g=["href"];function I(e,t,r,a,c,O){var I=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["e"])("div",null,[Object(n["f"])("div",i,[Object(n["h"])(I,{to:"/"},{default:Object(n["D"])((function(){return[o]})),_:1})]),Object(n["f"])("div",s,[e.data?(Object(n["q"])(),Object(n["e"])("div",u,[Object(n["f"])("div",d,[""!=e.data.artworkUrl600?(Object(n["q"])(),Object(n["e"])("div",f,[Object(n["f"])("img",{src:e.data.artworkUrl600,class:"card-img-top rounded artwork",alt:"podcast artwork"},null,8,l)])):Object(n["d"])("",!0),Object(n["f"])("div",b,[Object(n["f"])("h3",p,Object(n["z"])(e.data.collectionName),1),Object(n["f"])("div",h,[Object(n["f"])("h6",null,Object(n["z"])(e.data.artistName),1),Object(n["f"])("div",null,[Object(n["f"])("a",{href:e.icatcherLink(e.data.collectionId)},j,8,v)]),Object(n["f"])("div",m,[Object(n["f"])("div",null,"iTunesID: "+Object(n["z"])(e.data.collectionId),1),Object(n["f"])("div",null,[Object(n["f"])("a",{href:e.data.feedUrl},"Podcast Feed",8,g)])])])])])])):Object(n["d"])("",!0)])])}Object(n["r"])();var w=r("1da1"),N=(r("96cf"),r("7db0"),r("a9e3"),r("c338")),y=r("231d"),x=Object(n["i"])({name:"PodcastById",components:{},data:function(){return{data:{},iTunesId:0}},setup:function(){return{shared:y["a"]}},mounted:function(){console.log("PodcastById","mounted"),this.find(),this.updateMeta(Number(this.$route.params.id))},methods:{goBack:function(){console.log(this.$router),window.history.length>1?this.$router.go(-1):this.$router.push("/")},updateMeta:function(e){var t=document.querySelector('meta[name="apple-itunes-app"]');null!=t&&t.setAttribute("content","app-id=414419105, app-argument=".concat(e))},icatcherLink:function(e){return"icatcher://itunes/".concat(e)},find:function(){var e=this;return Object(w["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.iTunesId=Number(e.$route.params.id),console.log(e.iTunesId),t.next=4,e.searchItunes(e.iTunesId);case 4:case"end":return t.stop()}}),t)})))()},searchItunes:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(N["b"])(e);case 2:n=r.sent,0==n.resultCount?t.data=Object(N["a"])(e):t.data=n.results[0],console.log("data",n.results[0]);case 5:case"end":return r.stop()}}),r)})))()}}});r("1ee6");x.render=I,x.__scopeId="data-v-65051101";t["default"]=x},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("577e"),c=r("5899"),i="["+c+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(e){return function(t){var r=a(n(t));return 1&e&&(r=r.replace(o,"")),2&e&&(r=r.replace(s,"")),r}};e.exports={start:u(1),end:u(2),trim:u(3)}},7156:function(e,t,r){var n=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var c,i;return a&&"function"==typeof(c=t.constructor)&&c!==r&&n(i=c.prototype)&&i!==r.prototype&&a(e,i),e}},"7db0":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").find,c=r("44d2"),i="find",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c(i)},a9e3:function(e,t,r){"use strict";var n=r("83ab"),a=r("da84"),c=r("94ca"),i=r("6eeb"),o=r("5135"),s=r("c6b6"),u=r("7156"),d=r("d9b5"),f=r("c04e"),l=r("d039"),b=r("7c73"),p=r("241c").f,h=r("06cf").f,v=r("9bf2").f,O=r("58a8").trim,j="Number",m=a[j],g=m.prototype,I=s(b(g))==j,w=function(e){if(d(e))throw TypeError("Cannot convert a Symbol value to a number");var t,r,n,a,c,i,o,s,u=f(e,"number");if("string"==typeof u&&u.length>2)if(u=O(u),t=u.charCodeAt(0),43===t||45===t){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+u}for(c=u.slice(2),i=c.length,o=0;o<i;o++)if(s=c.charCodeAt(o),s<48||s>a)return NaN;return parseInt(c,n)}return+u};if(c(j,!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var N,y=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof y&&(I?l((function(){g.valueOf.call(r)})):s(r)!=j)?u(new m(w(t)),r,y):w(t)},x=n?p(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),k=0;x.length>k;k++)o(m,N=x[k])&&!o(y,N)&&v(y,N,h(m,N));y.prototype=g,g.constructor=y,i(a,j,y)}},b727:function(e,t,r){var n=r("0366"),a=r("44ad"),c=r("7b0b"),i=r("50c4"),o=r("65f0"),s=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,d=4==e,f=6==e,l=7==e,b=5==e||f;return function(p,h,v,O){for(var j,m,g=c(p),I=a(g),w=n(h,v,3),N=i(I.length),y=0,x=O||o,k=t?x(p,N):r||l?x(p,0):void 0;N>y;y++)if((b||y in I)&&(j=I[y],m=w(j,y,g),e))if(t)k[y]=m;else if(m)switch(e){case 3:return!0;case 5:return j;case 6:return y;case 2:s.call(k,j)}else switch(e){case 4:return!1;case 7:s.call(k,j)}return f?-1:u||d?d:k}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}}}]);
//# sourceMappingURL=podcastdetails.js.map
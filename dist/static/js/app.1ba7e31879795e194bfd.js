webpackJsonp([1],{0:function(t,a){},"4Fik":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",[t._v("These are your saved articles!")])])}],r={render:n,staticRenderFns:s};a.a=r},"6nqL":function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("DurationSelection",{on:{durationChanged:t.durationChanged}}),t._v(" "),t.duration?e("div",[e("Newslist",{attrs:{duration:t.duration,articles:t.articles}})],1):t._e()],1)},s=[],r={render:n,staticRenderFns:s};a.a=r},EMZC:function(t,a){},EgNd:function(t,a){},Fs8J:function(t,a,e){"use strict";var n=e("mtWM"),s=(e.n(n),e("M09z")),r=e("i4AL");a.a={name:"home",props:["articles"],components:{Newslist:s.a,DurationSelection:r.a},data:function(){return{duration:""}},methods:{durationChanged:function(t){this.duration=t}},created:function(){}}},H6hu:function(t,a){},HH8D:function(t,a,e){"use strict";function n(t){e("PZec")}var s=e("zY8x"),r=e("4Fik"),i=e("VU/8"),o=n,c=i(s.a,r.a,o,"data-v-4346e5b4",null);a.a=c.exports},M09z:function(t,a,e){"use strict";function n(t){e("EMZC")}var s=e("tnuH"),r=e("Ph0N"),i=e("VU/8"),o=n,c=i(s.a,r.a,o,null,null);a.a=c.exports},M93x:function(t,a,e){"use strict";function n(t){e("nzT1")}var s=e("xJD8"),r=e("moXr"),i=e("VU/8"),o=n,c=i(s.a,r.a,o,null,null);a.a=c.exports},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("7+uW"),s=e("ORbq"),r=e("/ocq"),i=e("M93x"),o=e("HH8D"),c=e("lO7g");n.a.use(s.a),n.a.use(r.a);var l=[{name:"home",path:"/",component:c.a},{name:"saved",path:"/saved",component:o.a}],u=new r.a({routes:l});new n.a({el:"#app",router:u,template:"<App/>",components:{App:i.a}})},PZec:function(t,a){},Ph0N:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"newslist"},[e("ul",{staticClass:"list-unstyled"},t._l(t.articles,function(a,n){return a.word_count<t.duration?e("li",{staticClass:"media"},[e("div",{staticClass:"media-body"},[e("h5",{staticClass:"mt-0"},[e("a",{staticClass:"text-black",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.title))])]),t._v(" "),a.author?e("h6",{staticClass:"text-muted"},[t._v("by "+t._s(a.author)+" "),e("a",{staticClass:"text-muted",attrs:{href:a.url,target:"_blank"}},[t._v("("+t._s(a.domain)+")")])]):e("h6",{staticClass:"text-muted"},[t._v("by "),e("a",{staticClass:"text-muted",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.domain))])])]),t._v(" "),e("div",{staticClass:"d-block align-self-center ml-1"},[e("button",{staticClass:"btn btn-outline-danger read-time",attrs:{type:"button","data-toggle":"modal","data-target":"#myModal"+n}},[t._v("Read"),e("br"),t._v(t._s(Math.round(a.word_count/200))+" min")]),t._v(" "),e("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"myModal"+n,tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(0,!0),t._v(" "),e("img",{staticClass:"lead-image",attrs:{src:a.lead_image_url}}),t._v(" "),e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(t._s(a.title))])]),t._v(" "),e("div",{staticClass:"modal-body"},[a.author?e("h5",{staticClass:"text-muted"},[t._v("by "+t._s(a.author)+" "),e("a",{staticClass:"text-muted",attrs:{href:a.url,target:"_blank"}},[t._v("("+t._s(a.domain)+")")])]):e("h5",{staticClass:"text-muted"},[t._v("by "),e("a",{staticClass:"text-muted",attrs:{href:a.url,target:"_blank"}},[t._v(t._s(a.domain))])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:t._s(a.content)}})]),t._v(" "),t._m(1,!0)])])]),t._v(" "),t._m(2,!0)])]):t._e()}))])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h3",{staticClass:"modal-title"}),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"btn btn-outline-warning read-time",attrs:{type:"button"}},[t._v("Save"),e("br"),e("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true"}})])}],r={render:n,staticRenderFns:s};a.a=r},TmvP:function(t,a){},Wg1b:function(t,a,e){"use strict";function n(t){e("TmvP")}var s=e("aIGv"),r=e("jYvH"),i=e("VU/8"),o=n,c=i(s.a,r.a,o,null,null);a.a=c.exports},aIGv:function(t,a,e){"use strict";a.a={name:"navigationbar",data:function(){return{text:""}},methods:{},created:function(){}}},i4AL:function(t,a,e){"use strict";function n(t){e("EgNd")}var s=e("m3X5"),r=e("wWSI"),i=e("VU/8"),o=n,c=i(s.a,r.a,o,"data-v-12d9ea9a",null);a.a=c.exports},jYvH:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navigationbar"},[e("nav",{staticClass:"navbar sticky-top navbar-toggleable-md navbar-inverse navbar-custom"},[t._m(0),t._v(" "),e("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("DailyCommute")]),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo02"}},[e("ul",{staticClass:"navbar-nav mr-auto mt-2 mt-md-0"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:"/saved"}},[t._v("Saved Articles")])],1),t._v(" "),t._m(1)])])])])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Trending")])])}],r={render:n,staticRenderFns:s};a.a=r},lO7g:function(t,a,e){"use strict";function n(t){e("H6hu")}var s=e("Fs8J"),r=e("6nqL"),i=e("VU/8"),o=n,c=i(s.a,r.a,o,null,null);a.a=c.exports},m3X5:function(t,a,e){"use strict";a.a={name:"durationselection",data:function(){return{durations:[{text:"Less than 5 minutes",words:"1000",response:"I wish I had your commute! It is way shorter the national average!"},{text:"5 to 10 minutes",words:"2000",response:"I wish I had your commute! It is way shorter the national average!"},{text:"10 to 15 minutes",words:"3000",response:"That's not too long! It's shoter than the national average!"},{text:"15 to 20 minutes",words:"4000",response:"That's not too long! It's shoter than the national average!"},{text:"20 to 25 minutes",words:"5000",response:"You've got the national average commute time!"},{text:"25 to 30 minutes",words:"6000",response:"You've got the national average commute time!"},{text:"More than 30 minutes",words:"100000",response:"I hope you are comfy... Your commute time is over twice the national average!"}],duration:""}},methods:{durationChanged:function(t){for(var a=0;a<this.durations.length;a++)this.durations[a].words==t.target.value&&(this.duration=this.durations[a],console.log(this.duration.words));this.$emit("durationChanged",t.target.value)}},created:function(){}}},moXr:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("NavigationBar"),t._v(" "),e("div",{staticClass:"container"},[t.loading?e("div",[t._m(0)]):e("div",[e("router-view",t._b({},"router-view",t.articlesAsProps,!1))],1)])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"preloader"}},[e("h1",{staticClass:"flicker"},[t._v("Gathering today's articles...")])])}],r={render:n,staticRenderFns:s};a.a=r},nzT1:function(t,a){},tnuH:function(t,a,e){"use strict";var n=e("0fgV");e.n(n);a.a={name:"newslist",props:["duration","articles"],data:function(){return{sources:[],articles:[]}},methods:{updateList:function(t){this.articles.sort(function(t,a){return a.word_count-t.word_count})}},created:function(){this.updateList(this.duration)},watch:{duration:function(t){this.updateList(t)}}}},wWSI:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"durationselection"},[e("div",[e("div",{staticClass:"jumbotron"},[e("h4",[t._v("How long is your commute today?")]),t._v(" "),e("select",{staticClass:"form-control",on:{change:t.durationChanged}},[e("option",{attrs:{value:""}},[t._v("Please select your commute duration...")]),t._v(" "),t._l(t.durations,function(a){return e("option",{domProps:{value:a.words}},[t._v(t._s(a.text))])})],2),t._v(" "),t.duration?e("div"):t._e()])])])},s=[],r={render:n,staticRenderFns:s};a.a=r},xJD8:function(t,a,e){"use strict";var n=e("mtWM"),s=e.n(n),r=e("Wg1b");a.a={name:"app",components:{NavigationBar:r.a},data:function(){return{loading:!0,sources:["ars-technica","associated-press","bbc-news","bbc-sport","bloomberg","breitbart-news","business-insider","buzzfeed","cnbc","cnn","daily-mail","engadget","entertainment-weekly","espn","financial-times","fortune","fox-sports","google-news","hacker-news","ign","independent","mashable","metro","mirror","mtv-news","national-geographic","new-scientist","newsweek","new-york-magazine","nfl-news","polygon","recode","reuters","techcrunch","techradar","the-economist","the-hindu","the-huffington-post","the-lad-bible","the-new-york-times","the-next-web","the-sport-bible","the-telegraph","the-verge","the-wall-street-journal","the-washington-post","time","usa-today"],urls:[],articles:[],articleCounter:0}},methods:{getSourceUrls:function(t){var a=this,e=[];s.a.get("https://newsapi.org/v1/articles?source="+t+"&apiKey=da7f4e792b194c64a762f0cb214bc3f4").then(function(t){for(var n=0;n<10;n++)if(null!=t.data.articles[n]){var s=t.data.articles[n].url;a.urls.push(s)}return e}).catch(function(t){console.log(t)})},getUrls:function(t){for(var a=t.length,e=0;e<a;e++)this.getSourceUrls(t[e])},getArticle:function(t){s.a.create({baseURL:"https://mercury.postlight.com",headers:{"Content-Type":"application/json","x-api-key":"hBYuD6O5r55D770EVSlmy2dgHH4pH4CYfZAmvGJz"}}).get("/parser?url="+t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})},stopLoading:function(){this.loading=!1}},created:function(){for(var t=this.sources.length,a=this,e=0;e<t;e++)s.a.get("https://newsapi.org/v1/articles?source="+a.sources[e]+"&apiKey=da7f4e792b194c64a762f0cb214bc3f4").then(function(t){for(var e=s.a.create({baseURL:"https://mercury.postlight.com",headers:{"Content-Type":"application/json","x-api-key":"hBYuD6O5r55D770EVSlmy2dgHH4pH4CYfZAmvGJz"}}),n=t.data.articles.length,r=0;r<n;r++)e.get("/parser?url="+t.data.articles[r].url).then(function(t){a.articles.push(t.data),++a.articleCounter>400&&(a.loading=!1)})})},computed:{articlesAsProps:function(){if("home"===this.$route.name)return{articles:this.articles}}}}},zY8x:function(t,a,e){"use strict";a.a={}}},["NHnr"]);
//# sourceMappingURL=app.1ba7e31879795e194bfd.js.map
(window.webpackJsonpnewswindow=window.webpackJsonpnewswindow||[]).push([[0],{10:function(e,t,a){},35:function(e,t,a){e.exports=a(64)},40:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(32),c=a.n(o),s=(a(40),a(10),a(2)),i=a.n(s),l=a(8),u=a(11),m=a(12),p=a(14),d=a(13),h=a(15),g=function(e){return r.a.createElement("section",{className:e.addClass},r.a.createElement("div",null,e.newsList.length?e.newsList.map(function(e,t){return r.a.createElement("div",{className:"news-item"},r.a.createElement("img",{src:e.icon,alt:"flag"}),r.a.createElement("p",null,e.title),r.a.createElement("p",null,r.a.createElement("a",{href:e.url,target:"blank"},"Link")))}):r.a.createElement("div",{className:e.preClass})))},f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleChange=function(e){console.log("this is handleChange",e.target.value),a.setState({value:e.target.value})},a.state={value:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return console.log("this.props.searchInput",this.props.searchInput),r.a.createElement("form",{onSubmit:function(t){return e.props.searchInput(t,e.state.value)}},r.a.createElement("input",{type:"text",placeholder:"Type a Topic",onChange:this.handleChange,value:this.state.value}),r.a.createElement("button",{type:"button"},"Compare the News!"))}}]),t}(r.a.Component),w=function(e){function t(e){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).call(this,e))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"intro"},r.a.createElement("h1",{className:"title"},"NEWSWINDOW ",r.a.createElement("br",null),"How Countries See The News"),r.a.createElement("div",{className:"invitation"},r.a.createElement("span",null,"Countries around the world see and frame the news differently. ",r.a.createElement("br",null),"Type in a search word to how angles and points of view vary. ")),r.a.createElement(f,{searchInput:this.props.searchInput})),r.a.createElement("div",{className:"container"},r.a.createElement(g,{addClass:"us-news-list",preClass:"us-news-list-pre",newsList:this.props.usSearchList}),r.a.createElement(g,{addClass:"gb-news-list",preClass:"gb-news-list-pre",newsList:this.props.gbSearchList}),r.a.createElement(g,{addClass:"world-news-list",preClass:"world-news-list-pre",newsList:this.props.worldResultList})))}}]),t}(r.a.Component);var b=function(e){return console.log("this is About: props",e),r.a.createElement("div",null,r.a.createElement("h2",null,"About This Project"))},v=["Globalnews.ca","engadget","mashable","reddit-r-all","the-wall-street-journal","Gizmodo.com","Insider.com","Boingboing.net","Yahoo.com","Huffpost.com","Economist.com","Ctvnews.ca","Thesun.co.uk","Lifehacker.com","Kinja.com","Youtube.com","Aol.com","Hackaday.com","Theatlantic.com","Fastcompany.com","Npr.org","Readwrite.com","Slashdot.org","Androidcentral.com","Theintercept.com","Salon.com","Washingtonexaminer.com","Slate.com","The Next Web","Lfpress.com","castanet.net","Cnet.com","Jerseyeveningpost.com","Thetakeout.com","Express.co.uk","Gmanetwork.com","Wpxi.com","Newyorker.com","Jezebel.com","Vox.com","Macrumors.com","Rollingstone.com","Frandroid.com","Refinery29.com","Qz.com","Thinkprogress.org","Sfgate.com","Msn.com","Facebook.com"],y=["business-insider","engadget","Globalnews.ca","mashable","reddit-r-all","the-wall-street-journal","Gizmodo.com","Insider.com","Boingboing.net","Yahoo.com","Huffpost.com","Economist.com","Ctvnews.ca","Thesun.co.uk","Lifehacker.com","Kinja.com","Youtube.com","Aol.com","Hackaday.com","Fastcompany.com","Readwrite.com","Slashdot.org","Androidcentral.com","Theintercept.com","Washingtonexaminer.com","The Next Web","Lfpress.com","Castanet.net","Cnet.com","Jerseyeveningpost.com","Thetakeout.com","Express.co.uk","Gmanetwork.com","Wpxi.com","Newyorker.com","Jezebel.com","Vox.com","Macrumors.com","Rollingstone.com","Frandroid.com","Refinery29.com","Qz.com","Thinkprogress.org","Sfgate.com","Msn.com","Facebook.com"],k="washingtonpost.com,cnn.com,latimes.com,msnbc.com, foxnews.com,ap.org,nytimes.com,newyorker.com,npr.org,nypost.com,boston.com,usatoday.com",E="bbc.co.uk,guardian.com,dailymail.co.uk,independent.co.uk,telegraph.co.uk,mirror.co.uk,metro.co.uk",S="lemonde.fr,tagesspiegel.de,zeit.de,elmundo.es,globo.com,handelsblatt.com,lagaceta.com.ar,repubblica.it,lenta.ru,lesechos.fr,liberation.fr,news24.com,rbc.ru,rtlnieuws.nl,spiegel.de,svd.se,thehindu.com,jpost.com,wiwo.de,xinhuanet.com,elpais.es,smh.com.au,theage.com.au,scmp.com,timesofindia.indiatimes.com,thehindu.com",x=a(17),L=a.n(x),C=a(9),j=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={sourceList:JSON.parse(window.localStorage.getItem("sourceList"))||[],newsList:[],searchList:[],usSearchList:[],gbSearchList:[],worldSearchList:[],worldResultList:[],userInput:""},a.makeSourceCall=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/sources?apiKey=ded05226f8e9489888443d1b682e93c6",e.next=3,L.a.get("https://newsapi.org/v2/sources?apiKey=ded05226f8e9489888443d1b682e93c6");case 3:t=e.sent,n=t.data.sources.filter(function(e){return!y.includes(e.name)}).map(function(e,t){return{id:e.id,name:e.name,url:e.url,language:e.language,country:e.country}}),window.localStorage.setItem("sourceList",JSON.stringify(n)),a.setState({sourceList:n});case 7:case"end":return e.stop()}},e)})),a.makeUSCall=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this is USCall"),n="https://newsapi.org/v2/everything?q="+t+"&domains="+k+"&sortBy=popularity&pageSize=15&apiKey=ded05226f8e9489888443d1b682e93c6",e.next=4,L.a.get(n);case 4:r=e.sent,console.log("this is US response",r),o=r.data.articles.filter(function(e){return!v.includes(e.name)}).map(function(e,t){var a={title:e.title,url:e.url,image:e.urlToImage,summary:e.description,id:e.source.id,name:e.source.name,icon:"http://www.geonames.org/flags/x/us.gif"};return console.log(a.name),a}),a.setState({usSearchList:o});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.makeGBCall=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this is USCall"),n="https://newsapi.org/v2/everything?q="+t+"&domains="+E+"&sortBy=popularity&pageSize=15&apiKey=ded05226f8e9489888443d1b682e93c6",e.next=4,L.a.get(n);case 4:r=e.sent,console.log("this is GB response",r),o=r.data.articles.filter(function(e){return!v.includes(e.name)}).map(function(e,t){var a={title:e.title,url:e.url,image:e.urlToImage,summary:e.description,id:e.source.id,name:e.source.name,icon:"https://i.imgur.com/56urXdl.png"};return console.log(a.name),a}),a.setState({gbSearchList:o});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.translateText=function(){var e=Object(l.a)(i.a.mark(function e(t){var a,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190827T203759Z.5526d2e4bd7cba98.4a7c48b1d1c3898045ae0697422b0cb8578be0bd&text="+t+"&lang=en",e.next=3,L.a.post(a);case 3:return n=e.sent,e.abrupt("return",n.data.text[0]);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.makeWorldCall=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("this is World Call"),n="https://newsapi.org/v2/everything?q="+t+"&domains="+S+"&sortBy=popularity&pageSize=15&apiKey=ded05226f8e9489888443d1b682e93c6",e.next=4,L.a.get(n);case 4:r=e.sent,console.log("this is World response",r),o=r.data.articles.filter(function(e){return!v.includes(e.name)}).map(function(e,t){var a={title:e.title,url:e.url,image:e.urlToImage,summary:e.description,id:e.source.id,name:e.source.name};return console.log(a.name),a}),a.setState({worldSearchList:o});case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.makeWorldList=Object(l.a)(i.a.mark(function e(){var t;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.state.worldSearchList.map(function(){var e=Object(l.a)(i.a.mark(function e(t,n){var r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.translateText(t.title);case 2:return r=e.sent,o={title:r,url:t.url,summary:t.description,name:t.name,icon:"https://i.imgur.com/l2HFjvA.png"},e.abrupt("return",o);case 5:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}());case 2:return t=e.sent,e.next=5,Promise.all(t);case 5:t=e.sent,console.log(t),a.setState({worldResultList:t});case 8:case"end":return e.stop()}},e)})),a.handleClick=function(){var e=Object(l.a)(i.a.mark(function e(t,n){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Search term submitted",n),e.next=4,a.makeWorldCall(n);case 4:return e.next=6,a.makeUSCall(n);case 6:return e.next=8,a.makeGBCall(n);case 8:return e.next=10,a.makeWorldList();case 10:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("sourcelist",this.state.sourceList),0===this.state.sourceList.length&&this.makeSourceCall(),console.log("componentDidMount")}},{key:"render",value:function(){var e=this;return r.a.createElement("main",null,r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(w,{searchInput:e.handleClick,usSearchList:e.state.usSearchList,gbSearchList:e.state.gbSearchList,worldResultList:e.state.worldResultList})}}),r.a.createElement(C.a,{path:"/about",component:b})))}}]),t}(r.a.Component),O=a(7);var T=function(e){return r.a.createElement("header",{class:"topnav",id:"myTopnav"},r.a.createElement("li",null,r.a.createElement(O.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/about"},"About This Project")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/about"},"How to Contribute")))};var N=function(e){return r.a.createElement("footer",null,r.a.createElement("li",null,"\xa9 2019 Marie-France Han"),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(O.b,{to:"/about"},"About This Project")))};var W=function(){return r.a.createElement("body",null,r.a.createElement("div",{className:"App"},r.a.createElement(T,null),r.a.createElement(j,null),r.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O.a,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.0b9b55b0.chunk.js.map
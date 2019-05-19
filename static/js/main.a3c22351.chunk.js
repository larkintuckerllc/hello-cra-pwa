(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},13:function(e,t,n){e.exports=n(24)},18:function(e,t,n){},19:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(2),o=n(4),c=n(3),l=n(5),i=n(0),s=n.n(i),u=n(10),d=n.n(u),p=(n(18),n(11)),h=n.n(p),v=(n(19),window.localStorage.getItem("value")),f=null===v?"":v,m=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={value:f},n.handleChange=function(e){n.setState({value:e.target.value})},n.handleSubmit=function(e){var t=n.state.value;e.preventDefault(),""!==t?window.localStorage.setItem("value",t):window.localStorage.removeItem("value")},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state.value;return s.a.createElement(i.Fragment,null,s.a.createElement("h4",null,"LocalStorage Example"),s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement("input",{onChange:this.handleChange,value:e}),s.a.createElement("button",{type:"submit"},"Save")))}}]),t}(i.PureComponent),b=n(6),w=n.n(b),g=n(8),E=n(12),y=new E.a("MyAppDatabase");y.version(1).stores({todos:"id, title, userId, completed"});var A=function(){var e=Object(g.a)(w.a.mark(function e(){var t,n,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.open();case 2:return e.prev=2,e.next=5,fetch("https://jsonplaceholder.typicode.com/todos");case 5:return t=e.sent,e.next=8,t.json();case 8:return n=e.sent,e.next=11,y.table("todos").clear();case 11:return e.next=13,y.table("todos").bulkAdd(n);case 13:return e.abrupt("return",n);case 16:return e.prev=16,e.t0=e.catch(2),e.next=20,y.table("todos").toArray();case 20:return a=e.sent,e.abrupt("return",a);case 22:case"end":return e.stop()}},e,null,[[2,16]])}));return function(){return e.apply(this,arguments)}}(),k=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={todos:[]},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=Object(g.a)(w.a.mark(function e(){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.todos;return s.a.createElement(i.Fragment,null,s.a.createElement("h4",null,"IndexDB Example"),s.a.createElement("ul",null,e.map(function(e){return s.a.createElement("li",{key:e.id},e.title)})))}}]),t}(i.PureComponent);var j=function(e){var t=e.contentCached,n=e.updateAvailable;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),s.a.createElement("p",null,"Edit ",s.a.createElement("code",null,"src/App.js")," and save to reload."),s.a.createElement("a",{className:"App-link",href:"https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app",target:"_blank",rel:"noopener noreferrer"},"Learn React (Progressive Web Apps)"),s.a.createElement("p",null,"E"),n&&s.a.createElement("p",null,"New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&s.a.createElement("p",null,"Content is cached for offline use."),s.a.createElement(m,null),s.a.createElement(k,null)))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e){if("serviceWorker"in navigator){if(new URL("/hello-cra-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/hello-cra-pwa","/service-worker.js");S?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(t,e)})}}function C(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var x=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={contentCached:!1,updateAvailable:!1},n.handleUpdate=function(){n.setState({updateAvailable:!0})},n.handleSuccess=function(){n.setState({contentCached:!0})},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){O({onSuccess:this.handleSuccess,onUpdate:this.handleUpdate})}},{key:"render",value:function(){var e=this.state,t=e.contentCached,n=e.updateAvailable;return s.a.createElement(j,{contentCached:t,updateAvailable:n})}}]),t}(i.PureComponent);d.a.render(s.a.createElement(x,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.a3c22351.chunk.js.map
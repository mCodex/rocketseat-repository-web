(this["webpackJsonprocketseat-react-repository"]=this["webpackJsonprocketseat-react-repository"]||[]).push([[0],{39:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),i=n.n(o),c=n(34),l=n(7),s=n(15),u=n.n(s),p=n(37),m=n(29),d=n(13),f=n(12),g=n(30),b=n.n(g).a.create({baseURL:"https://api.github.com"}),x=n(6),h=x.c.div.withConfig({displayName:"styles__Container",componentId:"sc-6xl8gr-0"})(["max-width:700px;background:#fff;border-radius:4px;box-shadow:0 0 20px rgba(0,0,0,0.1);padding:30px;margin:80px auto;h1{font-size:20px;display:flex;align-items:center;flex-direction:row;svg{margin-right:10px;}}"]),y=x.c.form.withConfig({displayName:"styles__Form",componentId:"sc-6xl8gr-1"})(["margin-top:30px;display:flex;flex-direction:row;input{flex:1;border:1px solid #eee;padding:10px 15px;border-radius:4px;font-size:16px;}"]),E=Object(x.d)(["from{transform:rotate(0deg)}to{transform:rotate(360deg)}"]),w=x.c.button.attrs((function(e){return{type:"submit",disabled:e.loading}})).withConfig({displayName:"styles__SubmitButton",componentId:"sc-6xl8gr-2"})(["background:#7159c1;border:0;padding:0 15px;margin-left:10px;border-radius:4px;display:flex;justify-content:center;align-items:center;&[disabled]{cursor:not-allowed;opacity:0.6;}",""],(function(e){return e.loading&&Object(x.b)(["svg{animation:"," 2s linear infinite;}"],E)})),v=x.c.ul.withConfig({displayName:"styles__List",componentId:"sc-6xl8gr-3"})(["list-style:none;margin-top:30px;li{padding:15px 0%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;& + li{border-top:1px solid #eee;}a{color:#7159c9;text-decoration:none;}}"]),j=Object(a.memo)((function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([]),c=Object(d.a)(i,2),l=c[0],s=c[1],g=Object(a.useState)(!1),x=Object(d.a)(g,2),E=x[0],j=x[1];Object(a.useEffect)((function(){var e=localStorage.getItem("repositories");e&&s(JSON.parse(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("repositories",JSON.stringify(l))}),[l]);var O=function(){var e=Object(m.a)(u.a.mark((function e(t){var a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),j(!0),e.next=4,b.get("/repos/".concat(n));case 4:return a=e.sent,r={name:a.data.full_name},s((function(e){return[].concat(Object(p.a)(e),[r])})),o(""),e.abrupt("return",j(!1));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(h,null,r.a.createElement("h1",null,r.a.createElement(f.a,null),"Reposit\xf3rios"),r.a.createElement(y,{onSubmit:O},r.a.createElement("input",{type:"text",placeholder:"Adicionar Reposit\xf3rio",value:n,onChange:function(e){return o(e.target.value)}}),r.a.createElement(w,{loading:E},E?r.a.createElement(f.c,{color:"#fff",size:14}):r.a.createElement(f.b,{color:"#fff",size:14}))),r.a.createElement(v,null,l.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("span",null,e.name),r.a.createElement("a",{href:""},"Detalhes"))}))))})),O=Object(a.memo)((function(){return r.a.createElement("p",null,"Hello World")})),k=function(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:j}),r.a.createElement(l.a,{path:"/repository",component:O})))},S=n(36);function _(){var e=Object(S.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    html, body, #root {\n        min-height: 100%;\n    }\n\n    body {\n        background: #7159c1;\n        -webkit-font-smoothing: antialised !important;\n    }\n\n    body,input,button {\n        color: #222;\n        font-size: 14px;\n        font-family: Arial, Helvetica, sans-serif;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);return _=function(){return e},e}var I=Object(x.a)(_()),z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.f2e7343d.chunk.js.map
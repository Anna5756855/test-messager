(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports={main:"App_main__1MdFF"}},18:function(e,t,n){e.exports=n(33)},25:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),c=n.n(r),o=(n(25),n(13)),u=n.n(o);var s=function(e){console.log(e);var t=e.messages.map(function(e){return i.a.createElement("div",null,e.text)});return i.a.createElement("div",null,t,i.a.createElement("textarea",{onChange:function(t){var n=t.target.value;e.changeInput(n)},placeholder:"Your message here",value:e.initialText,onKeyPress:function(t){"Enter"===t.key&&e.addPost()}}),i.a.createElement("button",{onClick:function(){e.addPost()}},"Add"))},l=n(5),d=n(17),g={initialText:"",messages:[{id:1,text:"What's up"},{id:2,text:"What's going on here?"},{id:3,text:"I have no idea"},{id:4,text:"Me too"},{id:5,text:":("}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,n=Object(d.a)({},e,{messages:Object(l.a)(e.messages)});switch(t.type){case"ADD-POST":var a={id:6,text:e.initialText};return n.messages.push(a),n.initialText="",n;case"CHANGE-INPUT":return n.initialText=t.newText,n;default:return e}},f=n(4),h=Object(f.b)(function(e){return{initialText:e.chatPage.initialText,messages:e.chatPage.messages}},function(e){return{addPost:function(){e({type:"ADD-POST"})},changeInput:function(t){e(function(e){return{type:"CHANGE-INPUT",newText:e}}(t))}}})(s);var x=function(e){return i.a.createElement("div",{className:u.a.main},i.a.createElement(h,null))},p=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,34)).then(function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)})},v=n(16),T=Object(v.a)({reducer:{chatPage:m}});c.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f.a,{store:T},i.a.createElement(x,null)))),p()}},[[18,3,2]]]);
//# sourceMappingURL=main.f7296cec.chunk.js.map
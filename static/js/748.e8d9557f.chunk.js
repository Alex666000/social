"use strict";(self.webpackChunkit_samurai_social=self.webpackChunkit_samurai_social||[]).push([[748],{2748:function(s,e,n){n.r(e),n.d(e,{MessagesContainer:function(){return H}});var a=n(8687),i=n(2791),r="Messages_messages__gqfrG",t="Messages_dialogs__2f7HS",u="Messages_text__+1N8z",c="Messages_sendMessageForm__pQdBN",d="Messages_sendMessageArea__QqvTJ",l="Messages_sendButton__ENB1A",o=n(6731),g=n(5999),m=n(184),f=function(s){return(0,m.jsx)(m.Fragment,{children:s.myDialogs.map((function(s){return(0,m.jsx)("div",{children:(0,m.jsx)(o.OL,{to:"/messages/"+s.id,children:s.name})},(0,g.Z)())}))})},h=n(6139),j=n(6226),x=n(421),_=n(1128),M=(0,_.D)(300),v=n(704),N=function(s){return(0,m.jsxs)(m.Fragment,{children:[s.myMessages.map((function(s){return(0,m.jsx)("div",{children:s.text},(0,g.Z)())})),(0,m.jsx)("div",{className:c,children:(0,m.jsx)(p,{onSubmit:function(e){s.sendMessageHandler(e.newMessage)}})})]})},p=(0,v.Z)({form:"dialogMessageForm"})((function(s){var e=s.handleSubmit;return(0,m.jsxs)("form",{onSubmit:e,children:[(0,m.jsx)("div",{className:d,children:(0,m.jsx)(h.Z,{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",name:"newMessage",component:j.v,validate:[_.l,M]})}),(0,m.jsx)("div",{className:l,children:(0,m.jsx)(x.z,{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})})]})})),y=n(7689),A=n(4048),C=n(7437),D=n(7994),F=n(8683),Z=n(5987),b=["isAuth"],k=function(s){return{isAuth:s.auth.isAuth}},w=n(7781),S=function(s){return s.dialogsPage.dialogsData},q=function(s){return s.dialogsPage.messagesData},B={sendMessageAC:D.d},H=(0,w.qC)((0,a.$j)((function(s){return{myDialogs:S(s),myMessages:q(s)}}),B),(function(s){return(0,a.$j)(k)((function(e){var n=e.isAuth,a=(0,Z.Z)(e,b);return n?(0,m.jsx)(s,(0,F.Z)({},a)):(0,m.jsx)(y.Fg,{to:"/login"})}))}))((function(s){var e=(0,y.s0)(),n=(0,A.C)(C.N7);return(0,i.useEffect)((function(){n||e("/login")}),[n]),(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)("div",{className:r,children:[(0,m.jsx)("div",{className:t,children:(0,m.jsx)(f,{myDialogs:s.myDialogs})}),(0,m.jsx)("div",{className:u,children:(0,m.jsx)(N,{myMessages:s.myMessages,sendMessageHandler:s.sendMessageAC})})]})})}))}}]);
//# sourceMappingURL=748.e8d9557f.chunk.js.map
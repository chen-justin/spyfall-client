(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,a){e.exports=a(81)},41:function(e,t,a){},42:function(e,t,a){},71:function(e,t){},74:function(e,t,a){},75:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n,c,l,o=a(0),r=a.n(o),i=a(31),s=a.n(i),m=(a(41),a(2)),u=(a(42),a(32)),E=a(33),d=a(34),v=a.n(d),p=a(83);!function(e){e[e.SPLASH=0]="SPLASH",e[e.CREATE=1]="CREATE",e[e.JOIN=2]="JOIN",e[e.LOBBY=3]="LOBBY",e[e.INGAME=4]="INGAME"}(n||(n={})),function(e){e[e.SP1=0]="SP1",e[e.SP2=1]="SP2",e[e.BOTH=2]="BOTH",e[e.CUSTOM=3]="CUSTOM"}(c||(c={})),function(e){e.CONNECT="connect",e.DISCONNECT="disconnect",e.JOIN="join",e.LEAVE="leave",e.CREATEROOM="createroom",e.CHANGENAME="changename",e.STARTGAME="startgame",e.ENDGAME="endgame",e.RECEIVEPAYLOAD="receivepayload"}(l||(l={}));var f=function(){function e(){Object(u.a)(this,e),this.socket={}}return Object(E.a)(e,[{key:"init",value:function(){return this.socket=v()("https://ramblr.herokuapp.com/"),this}},{key:"getID",value:function(){return this.socket.id}},{key:"join",value:function(e,t){this.socket.emit(l.JOIN,e,t)}},{key:"createRoom",value:function(e,t){this.socket.emit(l.CREATEROOM,e,t)}},{key:"startGame",value:function(e){this.socket.emit(l.STARTGAME,e)}},{key:"endGame",value:function(e){this.socket.emit(l.ENDGAME,e)}},{key:"leave",value:function(e){this.socket.emit(l.LEAVE,e)}},{key:"changeUsername",value:function(e,t){this.socket.emit(l.CHANGENAME,e,t)}},{key:"receivePayload",value:function(){return Object(p.a)(this.socket,l.RECEIVEPAYLOAD)}},{key:"disconnect",value:function(){this.socket.disconnect()}}]),e}(),b=Object(o.createContext)(new f),y=(a(74),function(e){var t=Object(o.useState)(""),a=Object(m.a)(t,2),l=a[0],i=a[1],s=Object(o.useState)(c.SP1),u=Object(m.a)(s,2),E=u[0],d=u[1],v=Object(o.useState)(8),p=Object(m.a)(v,2),f=p[0],b=p[1],y=function(e){var t=e.target;d(parseInt(t.value))};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},"Welcome to Spyfall"),r.a.createElement("div",{className:"create-controls"},r.a.createElement("input",{className:"create-controls-name-input textfield",type:"text",placeholder:"Your Name",value:l,onChange:function(e){i(e.target.value)}}),r.a.createElement("div",{className:"create-controls-locations-container"},r.a.createElement("p",null,"Locations"),r.a.createElement("form",null,r.a.createElement("div",{className:"create-controls-radio"},r.a.createElement("input",{type:"radio",name:"loc",value:c.SP1,onChange:y,defaultChecked:!0})," ","Spyfall 1 Locations"),r.a.createElement("div",{className:"create-controls-radio"},r.a.createElement("input",{type:"radio",name:"loc",value:c.SP2,onChange:y})," ","Spyfall 2 Locations"),r.a.createElement("div",{className:"create-controls-radio"},r.a.createElement("input",{type:"radio",name:"loc",value:c.BOTH,onChange:y})," ","Spyfall 1 and Spyfall 2 Locations"),r.a.createElement("div",{className:"create-controls-radio"},r.a.createElement("input",{type:"radio",name:"loc",value:c.CUSTOM,onChange:y})," ","Custom"))),r.a.createElement("div",{className:"create-controls-container"},r.a.createElement("p",null,"Round Length (minutes):"),r.a.createElement("input",{type:"number",name:"duration",value:f,min:"1",max:"10",onChange:function(e){return b(parseInt(e.target.value))}})),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){""===l||f<1||f>20||e.onSubmit(l,E,f)}},"Create"),r.a.createElement("button",{onClick:function(){e.onGameStateChange(n.SPLASH)}},"Back"))))}),N=(a(75),a(6)),g=a(9),S=a(35),O=function(e){var t=Object(o.useState)(!1),a=Object(m.a)(t,2),n=a[0],c=a[1],l=Object(o.useState)(!1),i=Object(m.a)(l,2),s=i[0],u=i[1],E=Object(o.useState)(e.payload.users[e.userID]),d=Object(m.a)(E,2),v=d[0],p=d[1],f=e.payload.users,b=e.payload.roomName,y=r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"player-list-player-name"},f[e.userID]),r.a.createElement("span",{className:"player-list-player-you"},"(you)"),r.a.createElement("span",{className:"player-list-you-edit-button"},r.a.createElement("button",{className:"name-edit-button",onClick:function(){p(f[e.userID]),u(!0)}},r.a.createElement(N.a,{icon:g.c})))),O=r.a.createElement("div",{className:"player-list-edit-row"},r.a.createElement("input",{value:v,onChange:function(e){var t=e.target.value;t.length<=30&&p(t)}}),r.a.createElement("button",{className:"name-edit-button",onClick:function(){e.changeName(e.payload.roomName,v),u(!1)}},r.a.createElement(N.a,{icon:g.b})),r.a.createElement("button",{className:"name-edit-button",onClick:function(){u(!1)}},r.a.createElement(N.a,{icon:g.a})));return r.a.createElement("div",{className:"game-lobby-container"},r.a.createElement("div",{className:"title"},"Waiting for Players..."),r.a.createElement("div",{className:"game-lobby-access-line"},r.a.createElement("span",{className:"game-lobby-access-text"},"Access Code"),r.a.createElement("div",{className:"game-lobby-access-container"},r.a.createElement("div",{className:n?"game-lobby-copy-text show":"game-lobby-copy-text",onAnimationEnd:function(){return c(!1)}},"Copied!"),r.a.createElement("button",{className:"game-lobby-access-copy",onClick:function(){var e=document.getElementById("access-code");if(e){var t=document.createElement("input");t.value=e.textContent,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove(),c(!0)}}},r.a.createElement("span",{id:"access-code",className:"game-lobby-access-code"},b),r.a.createElement(N.a,{icon:S.a})))),r.a.createElement("div",{className:"player-list-container"},Object.keys(f).map((function(t,a){return r.a.createElement("div",{className:"player-list-cell",key:t},r.a.createElement("span",{className:"player-list-cell-number"},a+1),e.userID!==t&&function(e){return r.a.createElement("span",{className:"player-list-player-name"},f[e])}(t),e.userID===t&&!s&&y,e.userID===t&&s&&O)}))),r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){return e.startGame(b)}},"Start Game"),r.a.createElement("button",{onClick:function(){return e.leaveLobby()}},"Leave Game")))},h=function(e){var t=Object(o.useState)(""),a=Object(m.a)(t,2),n=a[0],c=a[1],l=Object(o.useState)(""),i=Object(m.a)(l,2),s=i[0],u=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},"Welcome to Spyfall"),r.a.createElement("div",{className:"join-controls"},r.a.createElement("input",{className:"textfield",type:"text",value:n,placeholder:"Access code",onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{className:"textfield",type:"text",value:s,placeholder:"Your name",onChange:function(e){return u(e.target.value)}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginTop:"1rem"}},r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){return e.onSubmit(n,s)}},"Join"),r.a.createElement("button",{onClick:function(){return e.requestBack()}},"Back")))))},C=(a(80),function(e){var t=e.payload,a=e.payload.users,n=t.locations,c=t.location,l=e.userID===t.spy,i=e.userID!==t.spy,s=Math.floor((t.endTime-t.startTime)/1e3),u=Object(o.useState)(s),E=Object(m.a)(u,2),d=E[0],v=E[1],p=Object(o.useState)(!1),f=Object(m.a)(p,2),b=f[0],y=f[1];Object(o.useEffect)((function(){var e=null;return d<=0?y(!0):!b&&t.inSession?e=setInterval((function(){v((function(e){return e-1}))}),1e3):clearInterval(e),function(){clearInterval(e)}}),[t.inSession,d]);var N=Math.floor(d/60),g=(d%60).toString().padStart(2,"0");return r.a.createElement("div",{className:"spyfall-game-container"},r.a.createElement("div",{className:"spyfallgame-timer"},N+":"+g),r.a.createElement("div",{className:"spyfallgame-role-banner"},l&&r.a.createElement("span",null,"You are the spy!"),i&&r.a.createElement("div",{className:"agent-banner"},r.a.createElement("div",null,"You are ",r.a.createElement("strong",null,"not")," the spy!"),r.a.createElement("div",{className:"agent-info"},r.a.createElement("div",null,"The location: ",c),r.a.createElement("div",null,"Your role: ",t.agents[e.userID]," ")))),r.a.createElement("div",{className:"spyfallgame-info-container"},r.a.createElement("p",null,"Players"),r.a.createElement("div",{className:"grid-container"},Object.keys(a).map((function(e,t){var n=a[e];return r.a.createElement("div",{key:e,className:"grid-item"},r.a.createElement("p",null,n))}))),r.a.createElement("p",null,"Locations"),r.a.createElement("div",{className:"grid-container"},n.map((function(e){var t=e.title;return r.a.createElement("div",{key:t,className:"grid-item"},r.a.createElement("p",null,t))})))),r.a.createElement("div",{className:"spyfallgame-controls"},r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){return e.handleEndGame(t.roomName)}},"End Game"),r.a.createElement("button",{onClick:e.handleLeaveGame},"Leave Game"))))}),k=function(){var e=Object(o.useState)(n.SPLASH),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(o.useContext)(b),i=Object(o.useState)({roomName:"",roundDuration:0,locations:[],users:{},inSession:!1,location:"",startTime:0,endTime:0,spy:"",agents:{}}),s=Object(m.a)(i,2),u=s[0],E=s[1],d=Object(o.useState)(""),v=Object(m.a)(d,2),p=v[0],f=v[1];Object(o.useEffect)((function(){return l.init(),l.receivePayload().subscribe((function(e){f(l.getID()),E(e),e.inSession?c(n.INGAME):c(n.LOBBY)})),function(){l.disconnect()}}),[]);var N=r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"title"},"Welcome to Spyfall"),r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"button-container"},r.a.createElement("button",{onClick:function(){c(n.CREATE)}},"New Game"),r.a.createElement("button",{onClick:function(){c(n.JOIN)}},"Join Game")))),g=function(){l.leave(u.roomName),E({roomName:"",roundDuration:0,locations:[],users:{},inSession:!1,location:"",startTime:0,endTime:0,spy:"",agents:{}}),c(n.SPLASH)};return r.a.createElement("div",{className:"spyfall-wrapper"},r.a.createElement("div",{className:"spyfall"},a===n.SPLASH&&N,a===n.CREATE&&r.a.createElement(y,{onGameStateChange:c,onSubmit:function(e,t,a){l.createRoom({roundDuration:a,locationType:t},e)}}),a===n.JOIN&&r.a.createElement(h,{onSubmit:function(e,t){l.join(e,t)},requestBack:function(){return c(n.SPLASH)}}),a===n.LOBBY&&r.a.createElement(O,{userID:p,payload:u,leaveLobby:g,startGame:function(e){l.startGame(e)},changeName:function(e,t){l.changeUsername(e,t)}}),a===n.INGAME&&r.a.createElement(C,{userID:p,payload:u,handleEndGame:function(e){l.endGame(e)},handleLeaveGame:g})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=new f;s.a.render(r.a.createElement(b.Provider,{value:j},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1b90de4e.chunk.js.map
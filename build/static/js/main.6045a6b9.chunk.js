(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(t,e,s){},30:function(t,e,s){},32:function(t,e,s){},33:function(t,e,s){},34:function(t,e,s){},35:function(t,e,s){"use strict";s.r(e);var n=s(0),i=s.n(n),a=s(12),c=s.n(a),l=(s(22),s(3)),r=s.n(l),h=s(6),o=s(9),d=s(2),u=s(7),p=s(8);function b(t,e){return j.apply(this,arguments)}function j(){return(j=Object(h.a)(r.a.mark((function t(e,s){var n,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gameback-end.herokuapp.com/update",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({status:e})});case 2:return n=t.sent,t.next=5,n.json();case 5:i=t.sent,console.log(i),"invalid cookie"==i.response&&s({type:"USER_LOGOUT"});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(){return(f=Object(h.a)(r.a.mark((function t(){var e,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gameback-end.herokuapp.com/rankings",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8"}});case 2:return e=t.sent,t.next=5,e.json();case 5:return s=t.sent,t.abrupt("return",s);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var x="USER_LOGIN_TRUE",m="USER_LOGOUT",y="USER_LOGIN_FALSE",v=function(){return{type:m}},g=function(t,e){return function(){var s=Object(h.a)(r.a.mark((function s(n){var i,a,c;return r.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,i={email:t,password:e},s.next=4,fetch("https://gameback-end.herokuapp.com/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)});case 4:return a=s.sent,s.next=7,a.json();case 7:c=s.sent,console.log(c),c.login&&n({type:x}),s.next=14;break;case 12:s.prev=12,s.t0=s.catch(0);case 14:case"end":return s.stop()}}),s,null,[[0,12]])})));return function(t){return s.apply(this,arguments)}}()},O=(s(30),s(1));var w=function(){var t=Object(p.b)(),e=Object(n.useState)({IDLE:0,UP:1,DOWN:2,LEFT:3,RIGHT:4}),s=Object(u.a)(e,1)[0],i=Object(n.useState)([20]),a=Object(u.a)(i,1)[0],c=Object(n.useState)(["#1abc9c","#2ecc71","#3498db","#e74c3c","#9b59b6"]),l=Object(u.a)(c,1)[0],o=Object(n.useState)(!1),d=Object(u.a)(o,2),j=d[0],x=d[1];return Object(n.useEffect)((function(){var e={new:function(t){return{width:18,height:18,x:this.canvas.width/2-9,y:this.canvas.height/2-9,moveX:s.IDLE,moveY:s.IDLE,speed:t||9}}},n={new:function(t){return{width:18,height:70,x:"left"===t?150:this.canvas.width-150,y:this.canvas.height/2-35,score:0,move:s.IDLE,speed:8}}},i={initialize:function(){this.canvas=document.querySelector("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=1400,this.canvas.height=1e3,this.canvas.style.width=this.canvas.width/2+"px",this.canvas.style.height=this.canvas.height/2+"px",this.player=n.new.call(this,"left"),this.paddle=n.new.call(this,"right"),this.ball=e.new.call(this),this.paddle.speed=8,this.running=this.over=!1,this.turn=this.paddle,console.log(this.turn),this.timer=this.round=0,this.color="#2c3e50",i.menu(),i.listen()},endGameMenu:function(t){i.context.font="50px Courier New",i.context.fillStyle=this.color,i.context.fillRect(i.canvas.width/2-350,i.canvas.height/2-48,700,100),i.context.fillStyle="#ffffff",i.context.fillText(t,i.canvas.width/2,i.canvas.height/2+15),setTimeout((function(){(i=Object.assign({},i)).initialize()}),3e3)},menu:function(){console.log(i),i.draw(),this.context.font="50px Courier New",this.context.fillStyle=this.color,this.context.fillRect(this.canvas.width/2-350,this.canvas.height/2-48,700,100),this.context.fillStyle="#ffffff",this.context.fillText("Press any key to begin",this.canvas.width/2,this.canvas.height/2+15)},update:function(){if(this.over||(this.ball.x<=0&&i._resetTurn.call(this,this.paddle,this.player),this.ball.x>=this.canvas.width-this.ball.width&&i._resetTurn.call(this,this.player,this.paddle),this.ball.y<=0&&(this.ball.moveY=s.DOWN),this.ball.y>=this.canvas.height-this.ball.height&&(this.ball.moveY=s.UP),this.player.move===s.UP?this.player.y-=this.player.speed:this.player.move===s.DOWN&&(this.player.y+=this.player.speed),i._turnDelayIsOver.call(this)&&this.turn&&(this.ball.moveX=this.turn===this.player?s.LEFT:s.RIGHT,this.ball.moveY=[s.UP,s.DOWN][Math.round(Math.random())],this.ball.y=Math.floor(Math.random()*this.canvas.height-200)+200,this.turn=null),this.player.y<=0?this.player.y=0:this.player.y>=this.canvas.height-this.player.height&&(this.player.y=this.canvas.height-this.player.height),this.ball.moveY===s.UP?this.ball.y-=this.ball.speed/1.5:this.ball.moveY===s.DOWN&&(this.ball.y+=this.ball.speed/1.5),this.ball.moveX===s.LEFT?this.ball.x-=this.ball.speed:this.ball.moveX===s.RIGHT&&(this.ball.x+=this.ball.speed),this.paddle.y>this.ball.y-this.paddle.height/2&&(this.ball.moveX===s.RIGHT?this.paddle.y-=this.paddle.speed/1.5:this.paddle.y-=this.paddle.speed/4),this.paddle.y<this.ball.y-this.paddle.height/2&&(this.ball.moveX===s.RIGHT?this.paddle.y+=this.paddle.speed/1.5:this.paddle.y+=this.paddle.speed/4),this.paddle.y>=this.canvas.height-this.paddle.height?this.paddle.y=this.canvas.height-this.paddle.height:this.paddle.y<=0&&(this.paddle.y=0),this.ball.x-this.ball.width<=this.player.x&&this.ball.x>=this.player.x-this.player.width&&this.ball.y<=this.player.y+this.player.height&&this.ball.y+this.ball.height>=this.player.y&&(this.ball.x=this.player.x+this.ball.width,this.ball.moveX=s.RIGHT),this.ball.x-this.ball.width<=this.paddle.x&&this.ball.x>=this.paddle.x-this.paddle.width&&this.ball.y<=this.paddle.y+this.paddle.height&&this.ball.y+this.ball.height>=this.paddle.y&&(this.ball.x=this.paddle.x-this.ball.width,this.ball.moveX=s.LEFT)),this.player.score===a[this.round])if(a[this.round+1])this.color=this._generateRoundColor(),this.player.score=this.paddle.score=0,this.player.speed+=.5,this.paddle.speed+=1,this.ball.speed+=1,this.round+=1;else{this.over=!0,console.log("player won");b("win",t);console.log(this.player.score),setTimeout((function(){i.endGameMenu("Winner!")}),1e3)}else this.paddle.score===a[this.round]&&(this.over=!0,console.log("ai won"),b("loose",t),console.log(this.player.score),setTimeout((function(){i.endGameMenu("You loose!")}),1e3))},draw:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="#fff",this.context.fillRect(this.player.x,this.player.y,this.player.width,this.player.height),this.context.fillRect(this.paddle.x,this.paddle.y,this.paddle.width,this.paddle.height),i._turnDelayIsOver.call(this)&&this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.context.beginPath(),this.context.setLineDash([7,15]),this.context.moveTo(this.canvas.width/2,this.canvas.height-120),this.context.lineTo(this.canvas.width/2,140),this.context.lineWidth=10,this.context.strokeStyle="#ffffff",this.context.stroke(),this.context.font="100px Courier New",this.context.textAlign="center",this.context.fillText(this.player.score.toString(),this.canvas.width/2-300,200),this.context.fillText(this.paddle.score.toString(),this.canvas.width/2+300,200),this.context.font="30px Courier New",this.context.font="40px Courier"},loop:function(){i.update(),i.draw(),i.over||requestAnimationFrame(i.loop)},listen:function(){document.addEventListener("keydown",(function(t){!1===i.running&&(i.running=!0,window.requestAnimationFrame(i.loop)),38!==t.keyCode&&87!==t.keyCode||(i.player.move=s.UP),40!==t.keyCode&&83!==t.keyCode||(i.player.move=s.DOWN)})),document.addEventListener("keyup",(function(t){i.player.move=s.IDLE}))},_resetTurn:function(t,s){this.ball=e.new.call(this,this.ball.speed),this.turn=s,this.timer=(new Date).getTime(),t.score++},_turnDelayIsOver:function(){return(new Date).getTime()-this.timer>=1e3},_generateRoundColor:function(){var t=l[Math.floor(Math.random()*l.length)];return t===this.color?i._generateRoundColor():t}};i.initialize()}),[]),Object(O.jsxs)("div",{children:[Object(O.jsx)("canvas",{className:"canvas"}),Object(O.jsx)("button",{className:"logout",onClick:function(){t(function(){var t=Object(h.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://gameback-end.herokuapp.com/logout",{method:"POST",credentials:"include"});case 3:e(v()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),e(v());case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}())},children:"Logout"}),Object(O.jsx)("button",{className:"logout rankings",onClick:function(){var t=function(){return f.apply(this,arguments)}();t.then((function(t){console.log(t),x(t)})),console.log(t)},children:"Rankings"}),j&&Object(O.jsxs)("div",{className:"rankingsmodal",children:[Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Rank"}),Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Wins"}),Object(O.jsx)("th",{children:"Looses"})]})}),Object(O.jsx)("tbody",{children:j&&j.map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{class:"rank",children:t.wins}),Object(O.jsx)("td",{class:"team",children:t.wins}),Object(O.jsx)("td",{class:"points",children:t.wins}),Object(O.jsx)("td",{class:"up-down",children:t.wins})]})}))})]}),Object(O.jsx)("button",{className:"closebtn",children:"Close"})]})]})};s(32);var k=function(){var t=Object(p.b)();function e(){return(e=Object(h.a)(r.a.mark((function e(s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),console.log("form submit");try{t(g(s.target.email.value,s.target.password.value))}catch(s){console.log(s)}case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(O.jsxs)("div",{className:"loginwrapper",children:[Object(O.jsx)("h2",{children:"Login "}),Object(O.jsxs)("form",{onSubmit:function(t){return e.apply(this,arguments)},method:"post",children:[Object(O.jsx)("div",{className:"imgcontainer",children:Object(O.jsx)("img",{src:"https://www.w3schools.com/howto/img_avatar2.png",alt:"Avatar",className:"avatar"})}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("label",{for:"email",children:Object(O.jsx)("b",{children:"Email"})}),Object(O.jsx)("input",{type:"email",placeholder:"Enter Email",name:"email",required:!0}),Object(O.jsx)("label",{for:"password",children:Object(O.jsx)("b",{children:"Password"})}),Object(O.jsx)("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0,minlength:"8"}),Object(O.jsx)("button",{type:"submit",children:"Login"}),Object(O.jsxs)("label",{children:[Object(O.jsx)("input",{type:"checkbox",name:"remember"})," Remember me"]})]}),Object(O.jsx)("div",{className:"container",style:{backgroundColor:"#f1f1f1"},children:Object(O.jsx)(o.b,{className:"bottomlinks",to:"/signup",children:"Sign up"})})]})]})};s(33);var T=function(){var t=Object(d.f)();function e(){return(e=Object(h.a)(r.a.mark((function e(s){var n,i,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),n={email:s.target.email.value,password:s.target.password.value,name:s.target.name.value},e.prev=2,e.next=5,fetch("https://gameback-end.herokuapp.com/signup",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(n)});case 5:return i=e.sent,e.next=8,i.json();case 8:a=e.sent,console.log(a),alert(a.status),"success"===a.status&&t("/"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}return Object(O.jsxs)("div",{className:"loginwrapper",children:[Object(O.jsx)("h2",{children:"Signup "}),Object(O.jsxs)("form",{onSubmit:function(t){return e.apply(this,arguments)},method:"post",children:[Object(O.jsx)("div",{className:"imgcontainer",children:Object(O.jsx)("img",{src:"https://www.w3schools.com/howto/img_avatar2.png",alt:"Avatar",className:"avatar"})}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("label",{for:"name",children:Object(O.jsx)("b",{children:"Name"})}),Object(O.jsx)("input",{type:"text",placeholder:"Enter Name",name:"name",required:!0}),Object(O.jsx)("label",{for:"email",children:Object(O.jsx)("b",{children:"Email"})}),Object(O.jsx)("input",{type:"email",placeholder:"Enter Email",name:"email",required:!0}),Object(O.jsx)("label",{for:"password",children:Object(O.jsx)("b",{children:"Password"})}),Object(O.jsx)("input",{type:"password",placeholder:"Enter Password",name:"password",minlength:"8",required:!0}),Object(O.jsx)("button",{type:"submit",children:"Signup"})]}),Object(O.jsx)("div",{className:"container",style:{backgroundColor:"#f1f1f1"},children:Object(O.jsx)(o.b,{className:"bottomlinks",to:"/",children:"Login"})})]})]})};s(34);var S=function(){var t=Object(p.c)((function(t){return t.authState.userLoggedIn})),e=Object(p.b)();return Object(n.useEffect)((function(){(function(){var t=Object(h.a)(r.a.mark((function t(){var s,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gameback-end.herokuapp.com",{method:"GET",credentials:"include"});case 2:return s=t.sent,t.next=5,s.json();case 5:n=t.sent,console.log(n),n.login?e({type:"USER_LOGIN_TRUE"}):e({type:"USER_LOGIN_FALSE"});case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(O.jsx)("div",{children:null!==t&&Object(O.jsx)(o.a,{basename:"/finaltest",children:Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/game",element:Object(O.jsx)(w,{})}),Object(O.jsx)(d.a,{path:"/signup",element:Object(O.jsx)(T,{})}),Object(O.jsx)(d.a,{exact:!0,path:"/",element:t?Object(O.jsx)(w,{}):Object(O.jsx)(k,{})})]})})})},N=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(e){var s=e.getCLS,n=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;s(t),n(t),i(t),a(t),c(t)}))},E=s(11),L=s(10),R={userLoggedIn:null},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(L.a)(Object(L.a)({},t),{},{userLoggedIn:!0});case y:case m:return Object(L.a)(Object(L.a)({},t),{},{userLoggedIn:!1});default:return t}},I=Object(E.b)({authState:C}),_=s(17),D=Object(E.c)(I,Object(E.a)(_.a));function P(t){var e=t.children;return Object(O.jsx)(p.a,{store:D,children:e})}c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(P,{children:Object(O.jsx)(S,{})})}),document.getElementById("root")),N()}},[[35,1,2]]]);
//# sourceMappingURL=main.6045a6b9.chunk.js.map
(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(t,e,s){},25:function(t,e,s){},32:function(t,e,s){},33:function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i),a=s(10),h=s.n(a),l=(s(22),s(4)),c=s.n(l),r=s(7),o=s(17),d=s(2),p=s(6),u=s(1);var b=function(){var t=Object(i.useState)({IDLE:0,UP:1,DOWN:2,LEFT:3,RIGHT:4}),e=Object(p.a)(t,1)[0],s=Object(i.useState)([5]),n=Object(p.a)(s,1)[0],a=Object(i.useState)(["#1abc9c","#2ecc71","#3498db","#e74c3c","#9b59b6"]),h=Object(p.a)(a,1)[0];return Object(i.useEffect)((function(){var t={new:function(t){return{width:18,height:18,x:this.canvas.width/2-9,y:this.canvas.height/2-9,moveX:e.IDLE,moveY:e.IDLE,speed:t||9}}},s={new:function(t){return{width:18,height:70,x:"left"===t?150:this.canvas.width-150,y:this.canvas.height/2-35,score:0,move:e.IDLE,speed:8}}},i={initialize:function(){this.canvas=document.querySelector("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=1400,this.canvas.height=1e3,this.canvas.style.width=this.canvas.width/2+"px",this.canvas.style.height=this.canvas.height/2+"px",this.player=s.new.call(this,"left"),this.paddle=s.new.call(this,"right"),this.ball=t.new.call(this),this.paddle.speed=8,this.running=this.over=!1,this.turn=this.paddle,console.log(this.turn),this.timer=this.round=0,this.color="#2c3e50",i.menu(),i.listen()},endGameMenu:function(t){i.context.font="50px Courier New",i.context.fillStyle=this.color,i.context.fillRect(i.canvas.width/2-350,i.canvas.height/2-48,700,100),i.context.fillStyle="#ffffff",i.context.fillText(t,i.canvas.width/2,i.canvas.height/2+15),setTimeout((function(){(i=Object.assign({},i)).initialize()}),3e3)},menu:function(){console.log(i),i.draw(),this.context.font="50px Courier New",this.context.fillStyle=this.color,this.context.fillRect(this.canvas.width/2-350,this.canvas.height/2-48,700,100),this.context.fillStyle="#ffffff",this.context.fillText("Press any key to begin",this.canvas.width/2,this.canvas.height/2+15)},update:function(){this.over||(this.ball.x<=0&&i._resetTurn.call(this,this.paddle,this.player),this.ball.x>=this.canvas.width-this.ball.width&&i._resetTurn.call(this,this.player,this.paddle),this.ball.y<=0&&(this.ball.moveY=e.DOWN),this.ball.y>=this.canvas.height-this.ball.height&&(this.ball.moveY=e.UP),this.player.move===e.UP?this.player.y-=this.player.speed:this.player.move===e.DOWN&&(this.player.y+=this.player.speed),i._turnDelayIsOver.call(this)&&this.turn&&(this.ball.moveX=this.turn===this.player?e.LEFT:e.RIGHT,this.ball.moveY=[e.UP,e.DOWN][Math.round(Math.random())],this.ball.y=Math.floor(Math.random()*this.canvas.height-200)+200,this.turn=null),this.player.y<=0?this.player.y=0:this.player.y>=this.canvas.height-this.player.height&&(this.player.y=this.canvas.height-this.player.height),this.ball.moveY===e.UP?this.ball.y-=this.ball.speed/1.5:this.ball.moveY===e.DOWN&&(this.ball.y+=this.ball.speed/1.5),this.ball.moveX===e.LEFT?this.ball.x-=this.ball.speed:this.ball.moveX===e.RIGHT&&(this.ball.x+=this.ball.speed),this.paddle.y>this.ball.y-this.paddle.height/2&&(this.ball.moveX===e.RIGHT?this.paddle.y-=this.paddle.speed/1.5:this.paddle.y-=this.paddle.speed/4),this.paddle.y<this.ball.y-this.paddle.height/2&&(this.ball.moveX===e.RIGHT?this.paddle.y+=this.paddle.speed/1.5:this.paddle.y+=this.paddle.speed/4),this.paddle.y>=this.canvas.height-this.paddle.height?this.paddle.y=this.canvas.height-this.paddle.height:this.paddle.y<=0&&(this.paddle.y=0),this.ball.x-this.ball.width<=this.player.x&&this.ball.x>=this.player.x-this.player.width&&this.ball.y<=this.player.y+this.player.height&&this.ball.y+this.ball.height>=this.player.y&&(this.ball.x=this.player.x+this.ball.width,this.ball.moveX=e.RIGHT),this.ball.x-this.ball.width<=this.paddle.x&&this.ball.x>=this.paddle.x-this.paddle.width&&this.ball.y<=this.paddle.y+this.paddle.height&&this.ball.y+this.ball.height>=this.paddle.y&&(this.ball.x=this.paddle.x-this.ball.width,this.ball.moveX=e.LEFT)),console.log(this.player.score),this.player.score===n[this.round]?n[this.round+1]?(this.color=this._generateRoundColor(),this.player.score=this.paddle.score=0,this.player.speed+=.5,this.paddle.speed+=1,this.ball.speed+=1,this.round+=1):(this.over=!0,console.log(this.player.score),setTimeout((function(){i.endGameMenu("Winner!")}),1e3)):this.paddle.score===n[this.round]&&(this.over=!0,console.log(this.player.score),setTimeout((function(){i.endGameMenu("Game Over!")}),1e3))},draw:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="#fff",this.context.fillRect(this.player.x,this.player.y,this.player.width,this.player.height),this.context.fillRect(this.paddle.x,this.paddle.y,this.paddle.width,this.paddle.height),i._turnDelayIsOver.call(this)&&this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.context.beginPath(),this.context.setLineDash([7,15]),this.context.moveTo(this.canvas.width/2,this.canvas.height-120),this.context.lineTo(this.canvas.width/2,140),this.context.lineWidth=10,this.context.strokeStyle="#ffffff",this.context.stroke(),this.context.font="100px Courier New",this.context.textAlign="center",this.context.fillText(this.player.score.toString(),this.canvas.width/2-300,200),this.context.fillText(this.paddle.score.toString(),this.canvas.width/2+300,200),this.context.font="30px Courier New",this.context.fillText("Round "+(i.round+1),this.canvas.width/2,35),this.context.font="40px Courier",this.context.fillText(n[i.round]?n[i.round]:n[i.round-1],this.canvas.width/2,100)},loop:function(){i.update(),i.draw(),i.over||requestAnimationFrame(i.loop)},listen:function(){document.addEventListener("keydown",(function(t){!1===i.running&&(i.running=!0,window.requestAnimationFrame(i.loop)),38!==t.keyCode&&87!==t.keyCode||(i.player.move=e.UP),40!==t.keyCode&&83!==t.keyCode||(i.player.move=e.DOWN)})),document.addEventListener("keyup",(function(t){i.player.move=e.IDLE}))},_resetTurn:function(e,s){this.ball=t.new.call(this,this.ball.speed),this.turn=s,this.timer=(new Date).getTime(),e.score++},_turnDelayIsOver:function(){return(new Date).getTime()-this.timer>=1e3},_generateRoundColor:function(){var t=h[Math.floor(Math.random()*h.length)];return t===this.color?i._generateRoundColor():t}};i.initialize()}),[]),Object(u.jsx)("canvas",{})},f=(s(25),s(8)),x="USER_LOGIN",v="USER_LOGOUT",y=function(t){return function(){var e=Object(r.a)(c.a.mark((function e(s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(t),t&&s({type:x})}catch(i){}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var m=function(){var t=Object(f.b)();function e(){return(e=Object(r.a)(c.a.mark((function e(s){var i,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),console.log("form submit"),console.log(s.target.email.value),console.log(s.target.password.value),i={email:s.target.email.value,password:s.target.password.value},e.prev=5,e.next=8,fetch("https://gameback-end.herokuapp.com/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)});case 8:return n=e.sent,e.next=11,n.json();case 11:a=e.sent,console.log(a),t(y(a.login)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}function s(){return(s=Object(r.a)(c.a.mark((function t(e){var s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),console.log("form submit"),t.prev=2,t.next=5,fetch("https://gameback-end.herokuapp.com",{method:"GET",credentials:"include"});case 5:return s=t.sent,t.next=8,s.json();case 8:i=t.sent,console.log(i),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}function i(){return(i=Object(r.a)(c.a.mark((function t(e){var s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),console.log("form submit"),t.prev=2,t.next=5,fetch("https://gameback-end.herokuapp.com",{method:"GET",credentials:"include"});case 5:return s=t.sent,t.next=8,s.json();case 8:i=t.sent,console.log(i),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}return Object(u.jsxs)("div",{className:"loginwrapper",children:[Object(u.jsx)("h2",{children:"Login Form"}),Object(u.jsxs)("form",{onSubmit:function(t){return e.apply(this,arguments)},method:"post",children:[Object(u.jsx)("div",{className:"imgcontainer",children:Object(u.jsx)("img",{src:"https://www.w3schools.com/howto/img_avatar2.png",alt:"Avatar",className:"avatar"})}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("label",{for:"uname",children:Object(u.jsx)("b",{children:"Username"})}),Object(u.jsx)("input",{type:"email",placeholder:"Enter Email",name:"email",required:!0}),Object(u.jsx)("label",{for:"psw",children:Object(u.jsx)("b",{children:"Password"})}),Object(u.jsx)("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0}),Object(u.jsx)("button",{type:"submit",children:"Login"}),Object(u.jsxs)("label",{children:[Object(u.jsx)("input",{type:"checkbox",checked:"checked",name:"remember"})," Remember me"]})]}),Object(u.jsxs)("div",{className:"container",style:{backgroundColor:"#f1f1f1"},children:[Object(u.jsx)("button",{type:"button",className:"cancelbtn",children:"Cancel"}),Object(u.jsxs)("span",{className:"psw",children:["Forgot ",Object(u.jsx)("a",{href:"#",children:"password?"})]})]})]}),Object(u.jsx)("button",{onClick:function(t){return s.apply(this,arguments)},children:"test"}),Object(u.jsx)("button",{onClick:function(t){return i.apply(this,arguments)},children:"two"})]})};s(32);var g=function(){var t=Object(f.c)((function(t){return t.authState.userLoggedIn})),e=Object(f.b)();return Object(i.useEffect)((function(){(function(){var t=Object(r.a)(c.a.mark((function t(){var s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gameback-end.herokuapp.com",{method:"GET",credentials:"include"});case 2:return s=t.sent,console.log("in app"),t.next=6,s.json();case 6:i=t.sent,console.log(i),i.login&&e({type:"USER_LOGIN"});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{basename:"/finaltest",children:Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/game",element:Object(u.jsx)(b,{})}),Object(u.jsx)(d.a,{exact:!0,path:"/",element:t?Object(u.jsx)(b,{}):Object(u.jsx)(m,{})})]})})})},j=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(e){var s=e.getCLS,i=e.getFID,n=e.getFCP,a=e.getLCP,h=e.getTTFB;s(t),i(t),n(t),a(t),h(t)}))},w=s(9),O=s(14),T={userLoggedIn:!1},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return Object(O.a)(Object(O.a)({},t),{},{userLoggedIn:!0});case v:return T;default:return t}},E=Object(w.b)({authState:k}),S=s(16),L=Object(w.c)(E,Object(w.a)(S.a));function C(t){var e=t.children;return Object(u.jsx)(f.a,{store:L,children:e})}h.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(C,{children:Object(u.jsx)(g,{})})}),document.getElementById("root")),j()}},[[33,1,2]]]);
//# sourceMappingURL=main.1eecad09.chunk.js.map
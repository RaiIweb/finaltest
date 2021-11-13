(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(t,e,i){},25:function(t,e,i){},32:function(t,e,i){},33:function(t,e,i){"use strict";i.r(e);var s=i(0),a=i.n(s),n=i(10),h=i.n(n),l=(i(22),i(17)),c=i(2),r=i(5),o=i(1);var d=function(){var t=Object(s.useState)({IDLE:0,UP:1,DOWN:2,LEFT:3,RIGHT:4}),e=Object(r.a)(t,1)[0],i=Object(s.useState)([5]),a=Object(r.a)(i,1)[0],n=Object(s.useState)(["#1abc9c","#2ecc71","#3498db","#e74c3c","#9b59b6"]),h=Object(r.a)(n,1)[0];return Object(s.useEffect)((function(){var t={new:function(t){return{width:18,height:18,x:this.canvas.width/2-9,y:this.canvas.height/2-9,moveX:e.IDLE,moveY:e.IDLE,speed:t||9}}},i={new:function(t){return{width:18,height:70,x:"left"===t?150:this.canvas.width-150,y:this.canvas.height/2-35,score:0,move:e.IDLE,speed:8}}},s={initialize:function(){this.canvas=document.querySelector("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=1400,this.canvas.height=1e3,this.canvas.style.width=this.canvas.width/2+"px",this.canvas.style.height=this.canvas.height/2+"px",this.player=i.new.call(this,"left"),this.paddle=i.new.call(this,"right"),this.ball=t.new.call(this),this.paddle.speed=8,this.running=this.over=!1,this.turn=this.paddle,console.log(this.turn),this.timer=this.round=0,this.color="#2c3e50",s.menu(),s.listen()},endGameMenu:function(t){s.context.font="50px Courier New",s.context.fillStyle=this.color,s.context.fillRect(s.canvas.width/2-350,s.canvas.height/2-48,700,100),s.context.fillStyle="#ffffff",s.context.fillText(t,s.canvas.width/2,s.canvas.height/2+15),setTimeout((function(){(s=Object.assign({},s)).initialize()}),3e3)},menu:function(){console.log(s),s.draw(),this.context.font="50px Courier New",this.context.fillStyle=this.color,this.context.fillRect(this.canvas.width/2-350,this.canvas.height/2-48,700,100),this.context.fillStyle="#ffffff",this.context.fillText("Press any key to begin",this.canvas.width/2,this.canvas.height/2+15)},update:function(){this.over||(this.ball.x<=0&&s._resetTurn.call(this,this.paddle,this.player),this.ball.x>=this.canvas.width-this.ball.width&&s._resetTurn.call(this,this.player,this.paddle),this.ball.y<=0&&(this.ball.moveY=e.DOWN),this.ball.y>=this.canvas.height-this.ball.height&&(this.ball.moveY=e.UP),this.player.move===e.UP?this.player.y-=this.player.speed:this.player.move===e.DOWN&&(this.player.y+=this.player.speed),s._turnDelayIsOver.call(this)&&this.turn&&(this.ball.moveX=this.turn===this.player?e.LEFT:e.RIGHT,this.ball.moveY=[e.UP,e.DOWN][Math.round(Math.random())],this.ball.y=Math.floor(Math.random()*this.canvas.height-200)+200,this.turn=null),this.player.y<=0?this.player.y=0:this.player.y>=this.canvas.height-this.player.height&&(this.player.y=this.canvas.height-this.player.height),this.ball.moveY===e.UP?this.ball.y-=this.ball.speed/1.5:this.ball.moveY===e.DOWN&&(this.ball.y+=this.ball.speed/1.5),this.ball.moveX===e.LEFT?this.ball.x-=this.ball.speed:this.ball.moveX===e.RIGHT&&(this.ball.x+=this.ball.speed),this.paddle.y>this.ball.y-this.paddle.height/2&&(this.ball.moveX===e.RIGHT?this.paddle.y-=this.paddle.speed/1.5:this.paddle.y-=this.paddle.speed/4),this.paddle.y<this.ball.y-this.paddle.height/2&&(this.ball.moveX===e.RIGHT?this.paddle.y+=this.paddle.speed/1.5:this.paddle.y+=this.paddle.speed/4),this.paddle.y>=this.canvas.height-this.paddle.height?this.paddle.y=this.canvas.height-this.paddle.height:this.paddle.y<=0&&(this.paddle.y=0),this.ball.x-this.ball.width<=this.player.x&&this.ball.x>=this.player.x-this.player.width&&this.ball.y<=this.player.y+this.player.height&&this.ball.y+this.ball.height>=this.player.y&&(this.ball.x=this.player.x+this.ball.width,this.ball.moveX=e.RIGHT),this.ball.x-this.ball.width<=this.paddle.x&&this.ball.x>=this.paddle.x-this.paddle.width&&this.ball.y<=this.paddle.y+this.paddle.height&&this.ball.y+this.ball.height>=this.paddle.y&&(this.ball.x=this.paddle.x-this.ball.width,this.ball.moveX=e.LEFT)),console.log(this.player.score),this.player.score===a[this.round]?a[this.round+1]?(this.color=this._generateRoundColor(),this.player.score=this.paddle.score=0,this.player.speed+=.5,this.paddle.speed+=1,this.ball.speed+=1,this.round+=1):(this.over=!0,console.log(this.player.score),setTimeout((function(){s.endGameMenu("Winner!")}),1e3)):this.paddle.score===a[this.round]&&(this.over=!0,console.log(this.player.score),setTimeout((function(){s.endGameMenu("Game Over!")}),1e3))},draw:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="#fff",this.context.fillRect(this.player.x,this.player.y,this.player.width,this.player.height),this.context.fillRect(this.paddle.x,this.paddle.y,this.paddle.width,this.paddle.height),s._turnDelayIsOver.call(this)&&this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.context.beginPath(),this.context.setLineDash([7,15]),this.context.moveTo(this.canvas.width/2,this.canvas.height-120),this.context.lineTo(this.canvas.width/2,140),this.context.lineWidth=10,this.context.strokeStyle="#ffffff",this.context.stroke(),this.context.font="100px Courier New",this.context.textAlign="center",this.context.fillText(this.player.score.toString(),this.canvas.width/2-300,200),this.context.fillText(this.paddle.score.toString(),this.canvas.width/2+300,200),this.context.font="30px Courier New",this.context.fillText("Round "+(s.round+1),this.canvas.width/2,35),this.context.font="40px Courier",this.context.fillText(a[s.round]?a[s.round]:a[s.round-1],this.canvas.width/2,100)},loop:function(){s.update(),s.draw(),s.over||requestAnimationFrame(s.loop)},listen:function(){document.addEventListener("keydown",(function(t){!1===s.running&&(s.running=!0,window.requestAnimationFrame(s.loop)),38!==t.keyCode&&87!==t.keyCode||(s.player.move=e.UP),40!==t.keyCode&&83!==t.keyCode||(s.player.move=e.DOWN)})),document.addEventListener("keyup",(function(t){s.player.move=e.IDLE}))},_resetTurn:function(e,i){this.ball=t.new.call(this,this.ball.speed),this.turn=i,this.timer=(new Date).getTime(),e.score++},_turnDelayIsOver:function(){return(new Date).getTime()-this.timer>=1e3},_generateRoundColor:function(){var t=h[Math.floor(Math.random()*h.length)];return t===this.color?s._generateRoundColor():t}};s.initialize()}),[]),Object(o.jsx)("canvas",{})},p=i(6),u=i.n(p),b=i(8),f=(i(25),i(7)),y="USER_LOGIN",x="USER_LOGOUT",v=function(t){return function(){var e=Object(b.a)(u.a.mark((function e(i){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(t),t&&i({type:y})}catch(s){}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var g=function(){var t=Object(f.b)();function e(){return(e=Object(b.a)(u.a.mark((function e(i){var s,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.preventDefault(),console.log("form submit"),console.log(i.target.email.value),console.log(i.target.password.value),s={email:i.target.email.value,password:i.target.password.value},e.prev=5,e.next=8,fetch("https://gameback-end.herokuapp.com/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(s)});case 8:return a=e.sent,e.next=11,a.json();case 11:n=e.sent,console.log(n),t(v(n.login)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}function i(){return(i=Object(b.a)(u.a.mark((function t(e){var i,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),console.log("form submit"),t.prev=2,t.next=5,fetch("https://gameback-end.herokuapp.com",{method:"GET",credentials:"include"});case 5:return i=t.sent,t.next=8,i.json();case 8:s=t.sent,console.log(s),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[2,12]])})))).apply(this,arguments)}return Object(o.jsxs)("div",{className:"loginwrapper",children:[Object(o.jsx)("h2",{children:"Login Form"}),Object(o.jsxs)("form",{onSubmit:function(t){return e.apply(this,arguments)},method:"post",children:[Object(o.jsx)("div",{className:"imgcontainer",children:Object(o.jsx)("img",{src:"https://www.w3schools.com/howto/img_avatar2.png",alt:"Avatar",className:"avatar"})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("label",{for:"uname",children:Object(o.jsx)("b",{children:"Username"})}),Object(o.jsx)("input",{type:"email",placeholder:"Enter Email",name:"email",required:!0}),Object(o.jsx)("label",{for:"psw",children:Object(o.jsx)("b",{children:"Password"})}),Object(o.jsx)("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0}),Object(o.jsx)("button",{type:"submit",children:"Login"}),Object(o.jsxs)("label",{children:[Object(o.jsx)("input",{type:"checkbox",checked:"checked",name:"remember"})," Remember me"]})]}),Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"#f1f1f1"},children:[Object(o.jsx)("button",{type:"button",className:"cancelbtn",children:"Cancel"}),Object(o.jsxs)("span",{className:"psw",children:["Forgot ",Object(o.jsx)("a",{href:"#",children:"password?"})]})]})]}),Object(o.jsx)("button",{onClick:function(t){return i.apply(this,arguments)},children:"test"})]})};i(32);var m=function(){console.log("hh");var t=Object(f.c)((function(t){return t.authState.userLoggedIn}));return Object(o.jsxs)("div",{children:["test",Object(o.jsx)(l.a,{basename:"/finaltest",children:Object(o.jsxs)(c.c,{children:[Object(o.jsx)(c.a,{path:"/game",element:Object(o.jsx)(d,{})}),Object(o.jsx)(c.a,{exact:!0,path:"/",element:t?Object(o.jsx)(d,{}):Object(o.jsx)(g,{})})]})})]})},j=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,34)).then((function(e){var i=e.getCLS,s=e.getFID,a=e.getFCP,n=e.getLCP,h=e.getTTFB;i(t),s(t),a(t),n(t),h(t)}))},w=i(9),O=i(14),T={userLoggedIn:!1},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return Object(O.a)(Object(O.a)({},t),{},{userLoggedIn:!0});case x:return T;default:return t}},S=Object(w.b)({authState:k}),L=i(16),C=Object(w.c)(S,Object(w.a)(L.a));function D(t){var e=t.children;return Object(o.jsx)(f.a,{store:C,children:e})}h.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(D,{children:Object(o.jsx)(m,{})})}),document.getElementById("root")),j()}},[[33,1,2]]]);
//# sourceMappingURL=main.7c0b828d.chunk.js.map
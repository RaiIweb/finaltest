(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(t,e,s){},31:function(t,e,s){},32:function(t,e,s){},33:function(t,e,s){"use strict";s.r(e);var i=s(0),n=s.n(i),a=s(11),h=s.n(a),l=(s(22),s(3)),c=s.n(l),r=s(6),o=s(17),d=s(2),p=s(8),u=s(7);function b(t,e){return f.apply(this,arguments)}function f(){return(f=Object(r.a)(c.a.mark((function t(e,s){var i,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gameback-end.herokuapp.com/update",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({status:e})});case 2:return i=t.sent,t.next=5,i.json();case 5:n=t.sent,console.log(n),"invalid cookie"==n.response&&s({type:"USER_LOGOUT"});case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var y=s(1);var x=function(){var t=Object(u.b)(),e=Object(i.useState)({IDLE:0,UP:1,DOWN:2,LEFT:3,RIGHT:4}),s=Object(p.a)(e,1)[0],n=Object(i.useState)([5]),a=Object(p.a)(n,1)[0],h=Object(i.useState)(["#1abc9c","#2ecc71","#3498db","#e74c3c","#9b59b6"]),l=Object(p.a)(h,1)[0];function o(){return(o=Object(r.a)(c.a.mark((function e(){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://gameback-end.herokuapp.com/logout",{method:"POST",credentials:"include"});case 2:return s=e.sent,e.next=5,s.json();case 5:e.sent.logout&&t({type:"USER_LOGOUT"});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){var e={new:function(t){return{width:18,height:18,x:this.canvas.width/2-9,y:this.canvas.height/2-9,moveX:s.IDLE,moveY:s.IDLE,speed:t||9}}},i={new:function(t){return{width:18,height:70,x:"left"===t?150:this.canvas.width-150,y:this.canvas.height/2-35,score:0,move:s.IDLE,speed:8}}},n={initialize:function(){this.canvas=document.querySelector("canvas"),this.context=this.canvas.getContext("2d"),this.canvas.width=1400,this.canvas.height=1e3,this.canvas.style.width=this.canvas.width/2+"px",this.canvas.style.height=this.canvas.height/2+"px",this.player=i.new.call(this,"left"),this.paddle=i.new.call(this,"right"),this.ball=e.new.call(this),this.paddle.speed=8,this.running=this.over=!1,this.turn=this.paddle,console.log(this.turn),this.timer=this.round=0,this.color="#2c3e50",n.menu(),n.listen()},endGameMenu:function(t){n.context.font="50px Courier New",n.context.fillStyle=this.color,n.context.fillRect(n.canvas.width/2-350,n.canvas.height/2-48,700,100),n.context.fillStyle="#ffffff",n.context.fillText(t,n.canvas.width/2,n.canvas.height/2+15),setTimeout((function(){(n=Object.assign({},n)).initialize()}),3e3)},menu:function(){console.log(n),n.draw(),this.context.font="50px Courier New",this.context.fillStyle=this.color,this.context.fillRect(this.canvas.width/2-350,this.canvas.height/2-48,700,100),this.context.fillStyle="#ffffff",this.context.fillText("Press any key to begin",this.canvas.width/2,this.canvas.height/2+15)},update:function(){if(this.over||(this.ball.x<=0&&n._resetTurn.call(this,this.paddle,this.player),this.ball.x>=this.canvas.width-this.ball.width&&n._resetTurn.call(this,this.player,this.paddle),this.ball.y<=0&&(this.ball.moveY=s.DOWN),this.ball.y>=this.canvas.height-this.ball.height&&(this.ball.moveY=s.UP),this.player.move===s.UP?this.player.y-=this.player.speed:this.player.move===s.DOWN&&(this.player.y+=this.player.speed),n._turnDelayIsOver.call(this)&&this.turn&&(this.ball.moveX=this.turn===this.player?s.LEFT:s.RIGHT,this.ball.moveY=[s.UP,s.DOWN][Math.round(Math.random())],this.ball.y=Math.floor(Math.random()*this.canvas.height-200)+200,this.turn=null),this.player.y<=0?this.player.y=0:this.player.y>=this.canvas.height-this.player.height&&(this.player.y=this.canvas.height-this.player.height),this.ball.moveY===s.UP?this.ball.y-=this.ball.speed/1.5:this.ball.moveY===s.DOWN&&(this.ball.y+=this.ball.speed/1.5),this.ball.moveX===s.LEFT?this.ball.x-=this.ball.speed:this.ball.moveX===s.RIGHT&&(this.ball.x+=this.ball.speed),this.paddle.y>this.ball.y-this.paddle.height/2&&(this.ball.moveX===s.RIGHT?this.paddle.y-=this.paddle.speed/1.5:this.paddle.y-=this.paddle.speed/4),this.paddle.y<this.ball.y-this.paddle.height/2&&(this.ball.moveX===s.RIGHT?this.paddle.y+=this.paddle.speed/1.5:this.paddle.y+=this.paddle.speed/4),this.paddle.y>=this.canvas.height-this.paddle.height?this.paddle.y=this.canvas.height-this.paddle.height:this.paddle.y<=0&&(this.paddle.y=0),this.ball.x-this.ball.width<=this.player.x&&this.ball.x>=this.player.x-this.player.width&&this.ball.y<=this.player.y+this.player.height&&this.ball.y+this.ball.height>=this.player.y&&(this.ball.x=this.player.x+this.ball.width,this.ball.moveX=s.RIGHT),this.ball.x-this.ball.width<=this.paddle.x&&this.ball.x>=this.paddle.x-this.paddle.width&&this.ball.y<=this.paddle.y+this.paddle.height&&this.ball.y+this.ball.height>=this.paddle.y&&(this.ball.x=this.paddle.x-this.ball.width,this.ball.moveX=s.LEFT)),this.player.score===a[this.round])if(a[this.round+1])this.color=this._generateRoundColor(),this.player.score=this.paddle.score=0,this.player.speed+=.5,this.paddle.speed+=1,this.ball.speed+=1,this.round+=1;else{this.over=!0,console.log("player won");b("win",t);console.log(this.player.score),setTimeout((function(){n.endGameMenu("Winner!")}),1e3)}else this.paddle.score===a[this.round]&&(this.over=!0,console.log("ai won"),b("loose",t),console.log(this.player.score),setTimeout((function(){n.endGameMenu("Game Over!")}),1e3))},draw:function(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle=this.color,this.context.fillRect(0,0,this.canvas.width,this.canvas.height),this.context.fillStyle="#fff",this.context.fillRect(this.player.x,this.player.y,this.player.width,this.player.height),this.context.fillRect(this.paddle.x,this.paddle.y,this.paddle.width,this.paddle.height),n._turnDelayIsOver.call(this)&&this.context.fillRect(this.ball.x,this.ball.y,this.ball.width,this.ball.height),this.context.beginPath(),this.context.setLineDash([7,15]),this.context.moveTo(this.canvas.width/2,this.canvas.height-120),this.context.lineTo(this.canvas.width/2,140),this.context.lineWidth=10,this.context.strokeStyle="#ffffff",this.context.stroke(),this.context.font="100px Courier New",this.context.textAlign="center",this.context.fillText(this.player.score.toString(),this.canvas.width/2-300,200),this.context.fillText(this.paddle.score.toString(),this.canvas.width/2+300,200),this.context.font="30px Courier New",this.context.fillText("Round "+(n.round+1),this.canvas.width/2,35),this.context.font="40px Courier",this.context.fillText(a[n.round]?a[n.round]:a[n.round-1],this.canvas.width/2,100)},loop:function(){n.update(),n.draw(),n.over||requestAnimationFrame(n.loop)},listen:function(){document.addEventListener("keydown",(function(t){!1===n.running&&(n.running=!0,window.requestAnimationFrame(n.loop)),38!==t.keyCode&&87!==t.keyCode||(n.player.move=s.UP),40!==t.keyCode&&83!==t.keyCode||(n.player.move=s.DOWN)})),document.addEventListener("keyup",(function(t){n.player.move=s.IDLE}))},_resetTurn:function(t,s){this.ball=e.new.call(this,this.ball.speed),this.turn=s,this.timer=(new Date).getTime(),t.score++},_turnDelayIsOver:function(){return(new Date).getTime()-this.timer>=1e3},_generateRoundColor:function(){var t=l[Math.floor(Math.random()*l.length)];return t===this.color?n._generateRoundColor():t}};n.initialize()}),[]),Object(y.jsxs)("div",{children:[Object(y.jsx)("canvas",{}),Object(y.jsx)("button",{onClick:function(){return o.apply(this,arguments)},children:"Logout"})]})},v=(s(31),"USER_LOGIN_TRUE"),g="USER_LOGOUT",m="USER_LOGIN_FALSE",j=function(t){return function(){var e=Object(r.a)(c.a.mark((function e(s){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{console.log(t),t&&s({type:v})}catch(i){}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};var O=function(){var t=Object(u.b)();function e(){return(e=Object(r.a)(c.a.mark((function e(s){var i,n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s.preventDefault(),console.log("form submit"),console.log(s.target.email.value),console.log(s.target.password.value),i={email:s.target.email.value,password:s.target.password.value},e.prev=5,e.next=8,fetch("https://gameback-end.herokuapp.com/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(i)});case 8:return n=e.sent,e.next=11,n.json();case 11:a=e.sent,console.log(a),t(j(a.login)),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}return Object(y.jsxs)("div",{className:"loginwrapper",children:[Object(y.jsx)("h2",{children:"Login Form"}),Object(y.jsxs)("form",{onSubmit:function(t){return e.apply(this,arguments)},method:"post",children:[Object(y.jsx)("div",{className:"imgcontainer",children:Object(y.jsx)("img",{src:"https://www.w3schools.com/howto/img_avatar2.png",alt:"Avatar",className:"avatar"})}),Object(y.jsxs)("div",{className:"container",children:[Object(y.jsx)("label",{for:"uname",children:Object(y.jsx)("b",{children:"Username"})}),Object(y.jsx)("input",{type:"email",placeholder:"Enter Email",name:"email",required:!0}),Object(y.jsx)("label",{for:"psw",children:Object(y.jsx)("b",{children:"Password"})}),Object(y.jsx)("input",{type:"password",placeholder:"Enter Password",name:"password",required:!0}),Object(y.jsx)("button",{type:"submit",children:"Login"}),Object(y.jsxs)("label",{children:[Object(y.jsx)("input",{type:"checkbox",checked:"checked",name:"remember"})," Remember me"]})]}),Object(y.jsxs)("div",{className:"container",style:{backgroundColor:"#f1f1f1"},children:[Object(y.jsx)("button",{type:"button",className:"cancelbtn",children:"Cancel"}),Object(y.jsxs)("span",{className:"psw",children:["Forgot ",Object(y.jsx)("a",{href:"#",children:"password?"})]})]})]})]})};s(32);var w=function(){var t=Object(u.c)((function(t){return t.authState.userLoggedIn})),e=Object(u.b)();return Object(i.useEffect)((function(){(function(){var t=Object(r.a)(c.a.mark((function t(){var s,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://gameback-end.herokuapp.com",{method:"GET",credentials:"include"});case 2:return s=t.sent,console.log("in app"),t.next=6,s.json();case 6:i=t.sent,console.log(i),i.login?e({type:"USER_LOGIN_TRUE"}):e({type:"USER_LOGIN_FALSE"});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(y.jsx)("div",{children:null!==t&&Object(y.jsx)(o.a,{basename:"/finaltest",children:Object(y.jsxs)(d.c,{children:[Object(y.jsx)(d.a,{path:"/game",element:Object(y.jsx)(x,{})}),Object(y.jsx)(d.a,{exact:!0,path:"/",element:t?Object(y.jsx)(x,{}):Object(y.jsx)(O,{})})]})})})},T=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(e){var s=e.getCLS,i=e.getFID,n=e.getFCP,a=e.getLCP,h=e.getTTFB;s(t),i(t),n(t),a(t),h(t)}))},S=s(10),k=s(9),L={userLoggedIn:null},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case v:return Object(k.a)(Object(k.a)({},t),{},{userLoggedIn:!0});case m:case g:return Object(k.a)(Object(k.a)({},t),{},{userLoggedIn:!1});default:return t}},R=Object(S.b)({authState:E}),I=s(16),N=Object(S.c)(R,Object(S.a)(I.a));function C(t){var e=t.children;return Object(y.jsx)(u.a,{store:N,children:e})}h.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(C,{children:Object(y.jsx)(w,{})})}),document.getElementById("root")),T()}},[[33,1,2]]]);
//# sourceMappingURL=main.6ee3abb4.chunk.js.map
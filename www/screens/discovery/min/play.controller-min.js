"use strict";function PlayCtrl(e,t,n,a,o,i,r,s){e.persons={topAccepted:"",topRejected:"",bottomAccepted:"",bottomRejected:""};var m=!1;e.loading="loading",e.gameState="pending",e.message="SEARCHING...",e.animate=!0,e.completed=!1,e.loaded=!1,e.shouldPoint=!0,e.maxTime=40,e.remain=5,e.remainSeconds="5 seconds",e.barWidth=270,e.firstCicle=50,e.widthTick=e.barWidth/e.maxTime,e.$on("game.pending",function(e,t){i.requestGame()}),e.$on("game.live",function(t,n){e.liveSetupPlayers(n.players),e.liveSetupGame(n.updated)}),e.$on("game.ended",function(t,n){e.endGame(n.match)}),e.bindHandlers=function(){n(function(){e.loaded=!0,e.transition="none",e.message="TIME IS RUNNING OUT";var t=$(".slide-flip-block");t.css("height",t.find("img").height()+3),t.flip({axis:"x",speed:200})},1e3)},e.displayGameEnded=function(){$("#time-is-up").modal("show"),a.cancel(e.gameTime),a(function(){e.remain--,m=n(function(){e.remain>1?e.remainSeconds=e.remain+" seconds":e.remainSeconds=e.remain+" second"},1e3),t.reload()},5e3)},e.gameIsEnded=function(){return e.loaded&&e.currentTime>=e.maxTime+5},e.getPersonPreview=function(e){return new r({name:e.first_name+" "+e.last_name,age:e.age||0,domId:"topPerson",photos:[{full:"images/img-01.png",thumb:"images/img-thumb-01.png",active:!0},{full:"images/img-07.png",thumb:"images/img-thumb-07.png",active:!1},{full:"images/img-01.png",thumb:"images/img-thumb-01.png",active:!1},{full:"images/img-07.png",thumb:"images/img-thumb-07.png",active:!1},{full:"images/img-01.png",thumb:"images/img-thumb-01.png",active:!1}],languages:e.languages,iceBreakers:e.tags})},e.setupGameInterval=function(){return a(function(){e.gameIsEnded()?e.displayGameEnded():e.loaded&&e.updateProgressBar()},1e3)},e.timeoutProgress=function(){return{width:e.percentage+"px",transition:e.transition}},e.timeoutSeconds=function(){return e.currentTime?e.maxTime-e.currentTime:""},e.updateProgressBar=function(){var t=e.currentTime+1;e.transition="all linear 1s",e.percentage=e.widthTick*t+e.firstCicle,e.currentTime++,e.shouldPoint=e.percentage<270},e.liveSetupPlayers=function(t){t=[{first_name:"Martha",last_name:"Wright",age:12,languages:["English","French"],tags:["know","this"]},{first_name:"Martha",last_name:"Wright",age:12,languages:["English","French"],tags:["know","this"]}],e.topPerson=e.getPersonPreview(t[0]),e.bottomPerson=e.getPersonPreview(t[0]),e.topPerson.onAccept=e.bottomPerson.onAccept=function(){e.topPerson.accepted&&i.acceptPlayer(firstPlayer.id),e.bottomPerson.accepted&&i.acceptPlayer(secondPlayer.id)},e.topPerson.onReject=e.bottomPerson.onReject=function(){e.topPerson.rejected&&i.rejectPlayer(firstPlayer.id),e.bottomPerson.rejected&&i.rejectPlayer(secondPlayer.id)}},e.liveSetupGame=function(t){e.loading="",e.gameState="live";var n=new Date,a=new Date(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate(),n.getUTCHours(),n.getUTCMinutes(),n.getUTCSeconds());e.currentTime=Math.floor(a.getTime()/1e3)-t,e.bindHandlers(),e.gameTime=e.setupGameInterval()},e.endGame=function(a){e.gameState="ended",1==a?t.go("match"):($("#noMatch").modal("show"),n(function(){$("#noMatch").modal("hide"),t.reload()},5e3))},e.liveSetupPlayers([]);var c=new Date,g=new Date(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds());e.liveSetupGame(Math.floor(g.getTime()/1e3)),e.$watchCollection("persons",function(t){e.completed||(1==t.topAccepted?(e.topPerson.accept(),e.completed=!0):(1==t.topRejected&&e.topPerson.reject(),1==t.bottomAccepted?(e.bottomPerson.accept(),e.completed=!0):1==t.bottomRejected&&e.bottomPerson.reject()))})}angular.module("givmeApp.controllers").controller("PlayCtrl",["$scope","$state","$timeout","$interval","$ionicLoading","GmAPI","PlayPersonPreview","$rootScope",PlayCtrl]);
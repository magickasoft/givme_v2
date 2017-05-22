var module=angular.module("givmeApp.directive").directive("playDragAnimate",function(e){return{restrict:"A",link:function(s,t,a){var n=a.playDragAnimate.trim(),r=""==n||a.playDragAnimate.match(/horizontal/),i=a.person;e.on("drag",function(e){if(!s.persons[i+"Accepted"]&&!s.persons[i+"Rejected"]){var a=r?e.gesture.deltaX+"px":"0",n="translate("+a+", 0)";t.css({transform:n,"-webkit-transform":n,transition:"all 0s ease-out"}),r&&e.gesture.deltaX>70?$("#"+i+"PersonAccept").addClass("selected"):$("#"+i+"PersonAccept").removeClass("selected"),r&&e.gesture.deltaX<-70?$("#"+i+"PersonReject").addClass("selected"):$("#"+i+"PersonReject").removeClass("selected")}},t),e.on("dragend",function(e){t.css({transform:"translate(0, 0)","-webkit-transform":"translate(0, 0)",transition:"all 0.3s ease-out","-webkit-transition-timing-function":"cubic-bezier(0.1, 0.885, 0.470, 1)","-webkit-transition-timing-function":"cubic-bezier(0.1, 0.885, 0.470, 1.515)","transition-timing-function":"cubic-bezier(0.1, 0.885, 0.470, 1.515)"}),$("#"+i+"PersonAccept").removeClass("selected"),$("#"+i+"PersonReject").removeClass("selected"),(""===s.persons[i+"Accepted"]||""===s.persons[i+"Rejected"])&&e.gesture.distance>"70"&&("right"==e.gesture.direction?(s.persons[i+"Accepted"]=!0,s.persons[i+"Rejected"]=!1,$("#"+i+"PersonMessage").html('<p>You <span class="selected">selected</span> Marta').addClass("visible"),$("#"+i+"Person").addClass("message-visible")):"left"==e.gesture.direction&&(s.persons[i+"Accepted"]=!1,s.persons[i+"Rejected"]=!0,$("#"+i+"PersonMessage").html('<p>You <span class="passed">passed</span> Marta').addClass("visible"),$("#"+i+"Person").addClass("message-visible")))},t)}}});
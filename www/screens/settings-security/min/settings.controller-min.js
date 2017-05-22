"use strict";function SettingsCtrl(e,t,s,i,n){i.load().then(function(t){console.log(t),e.settings={profile:t,age:t.age,gender:"m"!==t.gender,interested:"m"!==t.preferences.gender,min_age:t.preferences.min_age,max_age:t.preferences.max_age,radius:t.radius,contacts:t.contacts},e.$watchCollection("settings",function(){e.settings.profile.preferences.gender=e.settings.interested?"f":"m",e.settings.profile.gender=e.settings.gender?"f":"m",e.settings.profile.preferences.min_age=e.settings.min_age,e.settings.profile.preferences.max_age=e.settings.max_age,e.settings.profile.radius=e.settings.radius,e.settings.profile.age=e.settings.age,i.save(e.settings.profile)}),e.addIceBreaker=function(t){if("blur"==t||13==t.keyCode){if(e.newIceBreaker.text.length<1)return;e.settings.profile.tags.push(e.newIceBreaker.text),i.save(e.settings.profile),e.newIceBreaker.text=""}},e.deleteIceBreaker=function(t){e.settings.profile.tags.splice(e.settings.profile.tags.indexOf(t),1),i.save(e.settings.profile)},e.addLanguage=function(t){if("blur"==t||13==t.keyCode){if(e.newLanguage.text.length<1)return;e.settings.profile.languages.push(e.newLanguage.text),i.save(e.settings.profile),e.newLanguage.text=""}},e.deleteLanguage=function(t){e.settings.profile.languages.splice(e.settings.profile.languages.indexOf(t),1),i.save(e.settings.profile)},e.pictureItems=[],e.iceBreakers={items:e.settings.profile.tags,shouldShowReorder:!1,listCanSwipe:!0,moveItem:function(e,t,s){this.items.splice(t,1),this.items.splice(s,0,e)},deleteItem:function(e){this.items.splice(e,1)}},e.languageItems={items:e.settings.profile.languages,shouldShowReorder:!1,listCanSwipe:!0,moveItem:function(e,t,s){this.items.splice(t,1),this.items.splice(s,0,e)},deleteItem:function(e){this.items.splice(e,1)}},e.range=13})["catch"](function(e){console.error(e)}),e.updateContacts=function(){i.saveContacts(e.settings.contacts)},e.selectImage=function(){n.getPicture({quality:100,sourceType:navigator.camera.PictureSourceType.PHOTOLIBRARY}).then(function(t){e.pictureItems.push({src:t,active:!1})})["catch"](function(e){console.error(e)})},t(function(){var e=s.$getByHandle("mainScroll");e._instances[1].slideIsDisabled=!0},200),e.slides={first:!0,second:!1,third:!1,fourth:!1},e.currentIndex=0,e.currentClass=function(t){var s=t-e.currentIndex;return 1==s?"nextSlide":-1==s?"prevSlide":void 0},e.drag=function(){switch(e.currentIndex=s.selected(),e.currentIndex){case 0:e.slides.first=!0,e.slides.second=!1;break;case 1:e.slides.first=!1,e.slides.second=!0,e.slides.third=!1;break;case 2:e.slides.second=!1,e.slides.third=!0,e.slides.fourth=!1;break;case 3:e.slides.third=!1,e.slides.fourth=!0}setTimeout(function(){e.$apply()},10)},e.newIceBreaker={text:""},e.newLanguage={text:""}}angular.module("givmeApp.controllers").controller("SettingsCtrl",SettingsCtrl);
ymaps.ready(init);
function init(){var a=new ymaps.Map("YandexMap",{center:[50.436179,30.523],zoom:18,controls:[]},{searchControlProvider:"yandex#search"});window.matchMedia("(max-width: 1500px)").matches&&a.setCenter([50.436179,30.5215]);window.matchMedia("(max-width: 992px)").matches&&a.setCenter([50.436179,30.5218]);window.matchMedia("(max-width: 767px)").matches&&a.setCenter([50.436179,30.52]);myGeoObject=new ymaps.GeoObject({geometry:{type:"Point",coordinates:[50.4361,30.5199]},properties:{iconContent:"Lorem",hintContent:'\u041a\u043e\u043c\u043f\u0430\u043d\u0438\u044f "Lorem"'}},
{preset:"islands#blackStretchyIcon",draggable:!1});a.behaviors.disable("scrollZoom");a.geoObjects.add(myGeoObject)};        
      

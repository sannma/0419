window.onload = function(){

  var map = L.map('map').setView([23.972115, 121.596366], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'copy contribtors'
}).addTo(map);


  var marker = L.marker([23.972115, 121.596366]).addTo(map)
  .bindPopup("<b>花蓮縣花蓮市中原國民小學</b>").openPopup();

  var circle = L.circle([23.972115, 121.596366], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5000
}).addTo(map);
  // 基本型
  var mapSketch = function(p5j){
    // 預載入
    p5j.preload=function() {

    }
    // 執行一次
    p5j.setup=function(){
    	p5j.createCanvas(1200,600);
      p5j.background(0);
    }
    // 重複執行
    p5j.draw=function() {
    }
  }

  new p5(mapSketch, 'map');
}
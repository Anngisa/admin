/*$(function () {
 navigator.geolocation.getCurrentPosition(translatePoint); //定位
 });
 function translatePoint(position) {
 var currentLat = position.coords.latitude;//经度
 var currentLon = position.coords.longitude;//纬度
 var gpsPoint = new BMap.Point(currentLon, currentLat);
 BMap.Convertor.translate(gpsPoint, 0, initMap); //转换坐标
 }
 function initMap(point) {*/
//初始化地图 
$(function () {
    initMap();
});
function initMap() {
    map = new BMap.Map("container");//实例化容器
    map.addControl(new BMap.NavigationControl());//平移缩放控件
    map.addControl(new BMap.ScaleControl());//比例尺控件
    map.addControl(new BMap.OverviewMapControl());//缩略地图控件
    map.enableScrollWheelZoom();//
    map.enableKeyboard();//
    /*if(point.lat = 0){
     point.lat=120.313939;
     point.lng = 30.314396;
     }*/
    /*map.centerAndZoom(point, 14.5);//地图初始化，参数地图坐标和级别
     map.addOverlay(new BMap.Marker(point));//当前位置加标记

     var point1 = new BMap.Point(point.lng+0.01,point.lat-0.002);
     map.addOverlay(new BMap.Marker(point1));

     var point2 = new BMap.Point(point.lng+0.0003,point.lat-0.012);
     map.addOverlay(new BMap.Marker(point2));

     var point3 = new BMap.Point(point.lng+0.00051,point.lat-0.1022);
     map.addOverlay(new BMap.Marker(point3));

     var point4 = new BMap.Point(point.lng-0.0101,point.lat+0.022);
     map.addOverlay(new BMap.Marker(point4));

     var point5 = new BMap.Point(point.lng+0.0051,point.lat-0.0022);
     map.addOverlay(new BMap.Marker(point5));
     */


    var point1 = new BMap.Point(120.366957,30.308753);
    map.addOverlay(new BMap.Marker(point1));

    var point2 = new BMap.Point(20.369957,30.3088);
    map.addOverlay(new BMap.Marker(point2));

    var point3 = new BMap.Point(120.372131,30.308706);
    map.addOverlay(new BMap.Marker(point3));

    var point4 = new BMap.Point(120.372095,30.304014);
    map.addOverlay(new BMap.Marker(point4));

    var point5 = new BMap.Point(120.367532,30.304123);
    map.addOverlay(new BMap.Marker(point5));

    var point6 = new BMap.Point(120.374107,30.308722);
    map.addOverlay(new BMap.Marker(point6));
    map.centerAndZoom(point6, 17);//地图初始化，参数地图坐标和级别

    var point7 = new BMap.Point(120.377395,30.30866);
    map.addOverlay(new BMap.Marker(point7));

    var point8 = new BMap.Point(120.377287,30.304045);
    map.addOverlay(new BMap.Marker(point8));

    var point9 = new BMap.Point(120.382803,30.308691);
    map.addOverlay(new BMap.Marker(point9));

    var point10 = new BMap.Point(120.374574,30.310733);
    map.addOverlay(new BMap.Marker(point10));

    var point11 = new BMap.Point(120.369957,30.308815);
    map.addOverlay(new BMap.Marker(point11));

    var point12 = new BMap.Point(120.382794,30.303897);
    map.addOverlay(new BMap.Marker(point12));

    var myZoomCtrl = new ZoomControl();
    map.addControl(myZoomCtrl);
    function ZoomControl() {
        this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT; //调整控件的位置
        this.defaultOffset = new BMap.Size(10, 10);//通过像素调整位置
    }
//自定义控件，点击两下实现放大
    ZoomControl.prototype = new BMap.Control();
    ZoomControl.prototype.initialize = function (map) {
        var div = document.createElement("div");
        div.appendChild(document.createTextNode("放大2级"));
        div.style.cursor = "pointer";
        div.style.border = "1px solid gray";
        div.style.backgroundColor = "blue";
        div.onclick = function (e) {
            map.zoomTo(map.getZoom() + 2);
        }
        map.getContainer().appendChild(div);
        return div;
    }
}
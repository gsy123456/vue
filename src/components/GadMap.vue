<template>
    <div id="gadMap"></div>
</template>
<script>
    export default{
        name: 'GadMap',
        data(){
            return {
            }
        },
        created:function(){
            window.loadMap = function(){
                var map = new AMap.Map("gadMap", {
                    center:[118.83, 31.95],
                    zoom:11
                });
                var marker = new AMap.Marker({
                    position:[118.8, 31.9],
                });
                var info = new AMap.InfoWindow({
                    content:'<div id="markInfo">哈哈哈</div>',
                    offset:new AMap.Pixel(-3,-26),
                });
                var infoShow = function(e){
                    info.open(map, e.target.getPosition());
                }
                map.add(marker);
                marker.on("click", infoShow);
            };
            var mapScript = document.createElement("script");
            var url ="https://webapi.amap.com/maps?v=1.4.10&key=5b2748eb75f5fe0986728e17f875d675&callback=loadMap";
            mapScript.src = url;
            document.head.appendChild(mapScript);
        }
    }
</script>
<style scoped>
</style>
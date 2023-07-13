

(function(){
    function scrollH(e){
        e.preventDefault();
        e = window.event || e;
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
   document.getElementById("main").scrollLeft -= (delta * 100);
    }
    if( document.getElementById("main").addEventListener){
        document.getElementById("main").addEventListener('mousewheel', scrollH,false);
        document.getElementById("main").addEventListener('DOMMouseScroll', scrollH,false);
    }
})();
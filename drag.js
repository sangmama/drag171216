function drag(id){
    var obj=Document.getElementById('id');
    var disX=0;
    var disY=0;
    obj.onmousedown=function(){
        disX= ev.pageX - obj.offsetLeft;
        disY=ev.pageY - obj.offsetTop;
        document.onmousemove=function(ev){
          obj.style.left = ev.pageX-disX +"px";
          obj.style.top = ev.pageY - disY +"px";
        }
    }

}

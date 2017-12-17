function drag(id){
    var obj=Document.getElementById('id');
    var disX=0;
    var disY=0;
    obj.onmousedown=function(){
        disX=ev.pageX - obj.offsetLeft;
        disY=ev.pageX - obj.offsetTop;
    }
}

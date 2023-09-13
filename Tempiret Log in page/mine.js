var x=400; var y=200;
function pos(dy, dx){
    if(!document.getElementById) return;
    dy*=10;
    dx*=10;
    x=x+dx;
    y=y+dy;
    obj=document.getElementById("box");
    obj.style.top=x+"px";
    obj.style.right=y+"px";
}
function show(){
    if(!document.getElementById) return;
    obj=document.getElementById("box");
    obj.style.display="block";
}
function hide(){
    if(!document.getElementById) return;
    obj=document.getElementById("box");
    obj.style.display="none";
}
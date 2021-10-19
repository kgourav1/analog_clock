// alert('bunny');
var hr=document.getElementById('hour');
var min=document.getElementById('minute');
var sec=document.getElementById('second');
function time(){
    var date=new Date();
   
    
    var s=date.getSeconds()/60;

    var m=(date.getMinutes()+s)/60;

    var h=(date.getHours()+m)/12;
    hr.style.transform="rotate("+(360 * h)+"deg)";
    min.style.transform="rotate("+(360*m)+"deg)";
    sec.style.transform="rotate("+(360*s)+"deg)";
}
time();
 setInterval(time,1000);
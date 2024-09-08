function calculate(){
    var a=parseInt(document.getElementById('bookOne').value);
    var b=parseInt(document.getElementById('bookTwo').value);
    var c=parseInt(document.getElementById('bookThree').value);
    var d=parseInt(document.getElementById('bookFour').value);
    var e=parseInt(document.getElementById('bookFive').value);
    if (a>100 || b>100 || c>100 || d>100 || e>100) {
        alert("worng value");
    }
    else
    {
        var obtain=a+b+c+d+e;
    
        document.getElementById("obtain").innerHTML=obtain;
        var obtain=obtain/500*100;
        document.getElementById("perc").innerHTML=perc;
        if (a>40 && b>40 && c>40 && d>40 && e>40){
            document.getElementById("remarks").innerHTML="<span style='color:#292'>pass</span>";
        }
        else{
            document.getElementById("remarks").innerHTML="<span style='color:red' >Fail</span>";
        }
        if(obtain>=80) {
            document.getElementById("grade").textcontent="A";
        }
        else if(obtain>=70){
            document.getElementById("grade").textcontent="B";
        }
        else if(obtain>55){
            document.getElementById("grade").textcontent="C";
        }
        else if(obtain>=33){
            document.getElementById("grade").textcontent="D";
        }
        else if(obtain>=0){
            document.getElementById("grade").textcontent="E"
        }

        }

        

    }
    return false;

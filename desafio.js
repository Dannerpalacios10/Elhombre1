function raices(){
    var a = parseInt( document.getElementById("a").value);
    var b = parseInt( document.getElementById("b").value);
    var c = parseInt( document.getElementById("c").value);
    var d=Math.pow(b,2)-(4*a*c);

    if (d==0)
    {
        document.getElementById('raiz').innerHTML="discriminante d = "+ d +" la ecuacion tiene 1 raiz"
    }
    else if(d>0) 
    {
        document.getElementById('raiz').innerHTML="discriminante d = "+ d +" la ecuacion tiene 1 raiz"
    }
    else{
        document.getElementById('raiz').innerHTML="discriminante d = "+ d +" la ecuacion tiene 1 raiz"
    }   
    }

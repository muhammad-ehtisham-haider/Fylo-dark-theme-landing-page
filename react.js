function check(){
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var x = document.getElementById("email").value;

    if(!filter.test(x) ){
       document.getElementById("warn").innerHTML = " please enter a valid email address"
        return false
    }else{
        document.getElementById("warn").innerHTML = ""
        return true;
        
    }
}